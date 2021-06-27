<template>
  <div id="app" :style="{transform:'scale('+scale+') translate(-50%, -50%)',WebkitTransform:'scale('+scale+') translate(-50%, -50%)'}">
    <img class="bg" src="@/assets/bg.png" alt="">
    <router-view></router-view>
    <div id="bottom-tab">
      <img class="logo" @click="debug" src="@/assets/logo.png" />
      <tab-bar>
        <tab-bar-item path='/home'>
          <img slot="item-icon-active" src="@/assets/tabbar/home_selected.png" alt="">
          <img slot="item-icon" src="@/assets/tabbar/home_normal.png" alt="">
          <p slot="item-text">主页</p>
        </tab-bar-item>
        <tab-bar-item path='/meeting'>
          <img slot="item-icon-active" src="@/assets/tabbar/meeting_selected.png" alt="">
          <img slot="item-icon" src="@/assets/tabbar/meeting_normal.png" alt="">
          <p slot="item-text">会议</p>
        </tab-bar-item>
      </tab-bar>
      <div class="current-time" @click="showInfo">
        <div>
          <span class="clock">{{currentTime.time}}</span>
          <span class="week">{{currentTime.week}}</span>
        </div>
        <div class="date">{{currentTime.date}}</div>
      </div>
      <div class="copyright" @click="go2dev">&copy;POWEREDBY 利郎信息管理中心</div>
    </div>
  </div>
</template>

<style lang="less">
@import "./assets/css/animate.less";
@import "./assets/css/resetVant.less";

* {
  -webkit-touch-callout: none;
  user-select: none;
}
#app {
  font-family: "思源黑体", "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: -webkit-radial-gradient(50% 5%, closest-corner, #203661, #111b2f);
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  width: 1080px;
  height: 1920px;
  transform: translate(-50%, -50%);
  bottom: 0;
}

body {
  padding: 0;
  margin: 0;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #131e35;
}
p {
  margin: 0;
  line-height: 1;
}
.bg {
  position: absolute;
  top: 618px;
  right: 0;
}
#bottom-tab {
  height: 110px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, #111b2f, #2e3e5d, #111b2f);
  border-top: 1px solid #5e7ec7;

  .copyright {
    font-size: 22px;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(199, 217, 255, 0.4);
  }
}

.logo {
  position: absolute;
  top: -10px;
  height: 120px;
  left: 34px;
}

.break2line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
}

.center-translate {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.current-time {
  position: absolute;
  top: 0;
  right: 26px;
  color: #ecf2ff;
  font-size: 30px;
  text-align: center;
  line-height: 1;
  padding: 12px 0;
}
.clock {
  font-size: 40px;
  margin-right: 6px;
}
.date {
  margin-top: 10px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "././components/tabbar/TabBarItem";

import * as api from '@/util/apis.js';
import * as util from '@/util/common.js';
import { mapState, mapGetters, mapMutations } from "vuex";
const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      scale: 1,
      currentTime: {
        time: '',
        date: '',
        week: ''
      },
      deviceId: ''
    };
  },
  computed: {
    ...mapGetters(['meetList', 'deviceInfo']),
    currentMeet() {
      let arr = this.meetList.filter(item => {
        return (item.status == 1 || item.status == 2 || item.status == 4)
      });
      let meet = arr[0] || {};
      console.warn('App.vue currentMeet --> ', meet);
      return meet;
    }
  },
  watch: {
    $route(val) {
      console.log('watch $route change in app.vue');
      if (val.name == 'Home' && this.currentMeet.status == 1) {
        llMeetScreen.setCameraVisible(true);
      } else {
        llMeetScreen.setCameraVisible(false);
      }
    }
  },
  mounted() {
    console.log('App.vue mounted!');
    this.getScale();
    window.onresize = this.getScale;
    this.getNowStr();
    this.clockInterval = setInterval(this.getNowStr, 1000);
    this.$toast({
      type: 'loading',
      message: '正在初始化..',
      duration: 0,
      forbidClick: true
    });

    //因为mounted执行时$route对象还未初始化完成取不到参数
    setTimeout(() => {
      this.getDeviceInfo();
      //开启定时器每2秒检查一次状态
      this.statusInterval = setInterval(this.checkMeetStatus, 2000);
    }, 1500);
  },
  methods: {
    ...mapMutations({
      setDevice: "SET_DEVICE",
      setMeetList: "SET_MEETLIST"
    }),
    go2dev() {
      window.location.href = 'http://192.168.36.132:8090/#/home';
    },
    showInfo() {
      if (this.dbClickTime > 0) {
        let timeSpan = Date.now() - this.dbClickTime;
        if (timeSpan < 300) {
          clearTimeout(this.codeTimeoutId);
          this.$dialog.alert({
            title: 'DEBUG',
            message: `deviceID=${this.deviceId}\r\n${JSON.stringify(this.deviceInfo)}`
          })
        }
      } else {
        this.dbClickTime = Date.now();
      }

      setTimeout(() => { this.dbClickTime = 0; }, 500);
    },
    //获取设备信息
    getDeviceInfo() {
      let sbid = llMeetScreen.getDeviceId();

      if (process.env.NODE_ENV == 'development' && !sbid) sbid = 'DXC104HGEN';
      sbid = sbid || this.$route.query.sbid || '';

      this.deviceId = sbid;

      if (!sbid) {
        this.$toast({
          type: 'loading',
          message: '获取设备ID失败..',
          duration: 0
        });
        return;
      }

      console.warn('deviceId --> ', sbid);
      this.$toast({
        type: 'loading',
        message: '加载设备信息..',
        duration: 0,
        forbidClick: true
      });

      api.getDeviceInfo(sbid, { timeout: 10 * 1000 }).then(async res => {
        console.log(res);
        this.$toast.clear();
        if (res.errcode == 0 && res.data && res.data.dm) {
          res.data.sbid = sbid;
          this.setDevice(res.data);
          //开始获取今日会议列表
          this.getTodayMeetList();
        } else {
          await this.$dialog.alert({
            title: '提示',
            message: `获取设备信息失败！[${sbid}]` + JSON.stringify(res)
          });
          this.$toast({
            type: 'fail',
            message: '获取设备信息失败..',
            duration: 0
          });
        }
      }).catch(async err => {
        this.$toast.clear();
        console.error(err);
        await this.$dialog.alert({
          title: '提示',
          message: `'获取设备信息异常！[${sbid}]` + err
        });
        this.$toast({
          type: 'fail',
          message: '获取设备信息失败..',
          duration: 0
        });
      });
    },
    //请求今天的会议列表
    //策略：当天的会议列表每隔10秒获取一次，会议状态每隔2秒更新一次
    //需要加个开头，手动请求当天的列表接口,连设备信息一起重新获取
    getTodayMeetList() {
      //以下两句仅仅只是为了配合开发时的热更新
      clearTimeout(this.getListTimeId);
      let start = util.formatDate(new Date(), 'yyyy-MM-dd 00:00:00');
      let end = util.formatDate(new Date(), 'yyyy-MM-dd 23:59:59');
      api.getMeetList(start, end, this.deviceInfo.sbid, { timeout: 5000 }).then(res => {
        console.log(res);
        if (res.errcode == 0 && Array.isArray(res.data)) {
          res.data.forEach(item => {
            item.start = util.formatDate(new Date(item.kssj), 'hh:mm');
            item.end = util.formatDate(new Date(item.jssj), 'hh:mm');
            item.sign_start = util.formatDate(new Date(item.qdkssj), 'hh:mm');
            item.sign_end = util.formatDate(new Date(item.qdjssj), 'hh:mm');

            //会议状态 0-未开始 1-签到中 2-进行中 3-已结束
            item.status = -1;
            item.statusText = "未知";
          });

          if (res.data.length > 0) {
            this.todayStr = util.formatDate(new Date(), 'yyyy-MM-dd');
            this.setMeetList(res.data);
            this.checkMeetStatus();//立即检查一次状态否则状态会滞后
          }
        } else {
          console.error('getTodayMeetList fail!', res.errmsg);
          //this.$toast('获取今日会议列表失败！');
        }
        //为了及时响应每日会议的变化，每隔固定时间重新拉取当天的会议列表
        this.getListTimeId = setTimeout(this.getTodayMeetList, 10 * 1000);
      }).catch(err => {
        console.error(err);
        this.getListTimeId = setTimeout(this.getTodayMeetList, 10 * 1000);
        //this.$toast('获取今日会议列表失败！！');
      });
    },
    //检查所以会议状态及当前会议是哪一场
    checkMeetStatus() {
      if (this.meetList.length == 0) return;
      let json = JSON.stringify(this.meetList);
      let list = JSON.parse(json);
      let now = Date.now();
      list.forEach(item => {
        //由于签到时间可能会跟会议时间重叠，所以不能用下面的方法判断
        //规定签到的优先级在于正在进行中的
        //状态的判断顺序：未开始 - 签到中 - 准备中 - 进行中 - 已结束

        if (now < item.qdkssj) {
          item.status = 0;
          item.statusText = '未开始';
          return;
        }

        if (now >= item.qdkssj && now < item.qdjssj) {
          item.status = 1;
          item.statusText = '签到中';
          return;
        }

        if (now >= item.qdjssj && now < item.kssj) {
          item.status = 4;
          item.statusText = '会议准备中..';
          return;
        }

        if (now >= item.kssj && now < item.jssj) {
          item.status = 2;
          item.statusText = '进行中';
          return;
        }

        if (now >= item.jssj) {
          item.status = 3;
          item.statusText = '已结束';
          return;
        }
      });//end for each

      let arr = list.filter(item => {
        return (item.status == 1 || item.status == 2);
      });

      //数据有变化时才进行更新
      JSON.stringify(list) != json && this.setMeetList(list);
    },
    switchLogPanel() {
      if (this.showLog == true) {
        document.querySelector('#__vconsole').style.display = "none";
        this.showLog = false;
      } else {
        document.querySelector('#__vconsole').style.display = "block";
        this.showLog = true;
      }
    },
    debug() {
      //540 960 2 | 1080 1920
      console.log(`${document.body.clientWidth}|${document.body.clientHeight}|${window.devicePixelRatio}`);
      window.location.reload();
      //console.warn(llMeetScreen.doOpenDoor());
    },
    // 获取缩放比例，按设计稿（1080:1920）等比缩放
    getScale() {
      let ratioX = document.body.clientWidth / 1080;
      let ratioY = document.body.clientHeight / 1920;
      console.log(ratioX)
      console.log(ratioY)

      this.scale = ratioX < ratioY ? ratioX : ratioY;
    },
    getNowStr() {
      let now = new Date();
      let time = util.formatDate(now, 'yyyy/MM/dd hh:mm:ss');
      this.currentTime = {
        time: time.split(' ')[1],
        date: time.split(' ')[0],
        week: weekdays[now.getDay()]
      }
    }
  },
  beforeDestroy() {
    console.warn('app.vue beforeDestroy');
    clearInterval(this.clockInterval);
    clearInterval(this.statusInterval);
    clearTimeout(this.getListTimeId);
  }
};
</script>