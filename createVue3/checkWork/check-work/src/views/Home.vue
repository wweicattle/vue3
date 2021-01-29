<template>
  <div class="home">
    <div
      class="check-contain"
      :style="{
        transform: 'scale(' + scale + ') translate(-50%, -50%)',
        WebkitTransform: 'scale(' + scale + ') translate(-50%, -50%)',
      }"
    >
      <header>
        <div class="logo">
          <img src="../assets/img/logo.png" alt="" />
        </div>
        <div class="check-title">
          <div class="title-line">
            <img src="../assets/img/title_line.png" alt="" />
          </div>
          <div class="title-detail">
            <div class="title">利郎员工考勤监控</div>
            <div class="title-english">
              <span>LILANZ</span> <span>EMPLOYEE</span> <span>ATTENDANCE</span>
              <span>MONITORING</span>
            </div>
          </div>
          <div>
            <!-- <img src="../assets/img/title_bg.png" alt="" /> -->
          </div>
        </div>
        <div class="check-time">
          <span class="date">{{ year }} </span>
          <span class="week">星期{{ week }}</span>
          <div class="detail-time">{{ time }}</div>
        </div>
      </header>
      <section>
        <div class="section-contain">
          <div class="left-border">
            <img src="../assets/img/left_border.png" alt="" />
          </div>
          <div class="per-content">
            <ul>
              <li v-for="i in 16" :key="i">
                <div class="avator">
                  <img src="../assets/img/avatar_border.png" alt="" />
                  <div class="real-actar">
                    <img src="../assets/img/ee.jpg" alt="" />
                  </div>
                </div>
                <div class="per-name">
                  <div class="name">林某某</div>
                  <div class="bumen">信息管理中心</div>
                </div>
                <div class="status">
                  <span class="later">迟到</span>
                  <span class="time-minutes">13 min</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="right-border">
            <img src="../assets/img/left_border.png" alt="" />
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-content">
          <img src="../assets/img/bottom_bg.png" alt="" />
          <div class="status_total">
            <ul>
              <li>
                <div class="name">异常考勤</div>
                <div class="detail-num">
                  <span class="num">{{ homeData ? homeData.length : "" }}</span
                  ><span class="weight">人</span>
                </div>
              </li>
              <li class="later">
                <div class="name">迟到</div>
                <div class="detail-num">
                  <span class="num">{{
                    homeData ? homeData.length - lostDayNum : 0
                  }}</span
                  ><span class="weight">人</span>
                </div>
              </li>
              <li>
                <div class="name">旷工</div>
                <div class="detail-num">
                  <span class="num">{{ lostDayNum ? lostDayNum : 0 }}</span
                  ><span class="weight">人</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script >
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getHomeInfo } from "../netWork/home.js";
export default {
  name: "Home",
  data() {
    return {
      homeData: null,
      scale: 1,
      year: null,
      week: null,
      time: null,
      hours: null,
      minutes: null,
      lostDayNum: null,
    };
  },
  components: {},
  created() {
    this.getScale();
    window.onresize = this.getScale;
    var time = new Date();
    this.year = time.toLocaleDateString();
    var arrWeek = ["一", "二", "三", "四", "五", "六", "日"];
    this.week = arrWeek[time.getDay()];
    this.time = time.toLocaleTimeString();
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
  },
  mounted() {
    this.times = setInterval(() => {
      var time = new Date();
      this.year = time.toLocaleDateString();
      var arrWeek = ["一", "二", "三", "四", "五", "六", "日"];
      this.week = arrWeek[time.getDay()];
      this.time = time.toLocaleTimeString();
      this.hours = time.getHours();
      this.minutes = time.getMinutes();
      // console.log(time);
    }, 1000);
    this.getHomeInfo();
    this.datas = setInterval(() => {
      this.getHomeInfo();
    }, 60000);
  },
  methods: {
    getHomeInfo() {
      let obj;
      // 判断请求昨天数据还是今天的
      console.log(this.minutes);
      console.log(this.hours);
      if (Number(this.minutes) <= 15 && Number(this.hours) <= 8) {
        var day1 = new Date();
        day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
        var yesterdayDate =
          day1.getFullYear() +
          "-" +
          (day1.getMonth() + 1) +
          "-" +
          day1.getDate();
        console.log(yesterdayDate);
        obj = {
          loadDate: yesterdayDate,
        };
        getHomeInfo(obj)
          .then((da) => {
            if (da.data.errcode == 0) {
              this.homeData = da.data.data;
              console.log(da.data.data);
            } else {
            }
          })
          .catch((da) => {
            console.log(da);
          });
      } else {
        obj = {
          loadDate: this.year,
        };
        // 请求主页考勤数据
        getHomeInfo(obj)
          .then((da) => {
            if (da.data.errcode == 0) {
              this.homeData = da.data.data;
              // 旷工人数
              var arrLater = this.homeData.filter((val) => {
                return Number(val.lostDays) > 0;
              });
              console.log(arrLater);
              this.lostDayNum = arrLater.length;
            } else {
            }
          })
          .catch((da) => {
            console.log(da);
          });
      }
    },
    // 获取缩放比例，按设计稿（1080:1920）等比缩放
    getScale() {
      let containWidth = document.body.clientWidth;
      this.scale = Number(containWidth / 1536);
    },
  },
  beforeDestroy() {
    clearInterval(this.times);
    clearInterval(this.datas);
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  // margin-top: 100px;
}
.check-contain {
  width: 1536px;
  height: 896px;
  background: #090c19;
  margin: auto;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  transform: translate(-50%, -50%);
  // transform:scale(0.5)  translate(-50%, -50%)!important;

  header {
    height: 127px;
    .logo {
      position: absolute;
      top: 50px;
      left: 35px;
    }
    .check-time {
      text-align: right;
      position: absolute;
      right: 30px;
      top: 30px;
      color: #fff;
      .detail-time {
        padding-top: 4px;

        font-weight: 600;
        font-size: 24px;
      }
    }
    .check-title {
      position: relative;
      text-align: center;
      color: #fff;
      height: 127px;
      background: url("../assets/img/title_bg.png");
      .title-line {
        padding-top: 18px;
      }
      .title-detail {
        position: absolute;
        // left: 0;
        // right: 0;
        width: 100%;
        bottom: 18px;
        // margin: auto;
        color: #ffedea;
        .title {
          letter-spacing: 5px;
          font-size: 34px;
          font-weight: 550;
        }
        .title-english {
          font-weight: 500;

          padding-top: 4px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          span {
            padding-right: 7px;
          }
        }
      }

      // img{
      //   position: absolute
      //   bottom：0
      // };
    }
  }
  section {
    .section-contain {
      padding: 0 20px;
      overflow: hidden;
      position: relative;
      .left-border {
        float: left;
      }
      .per-content {
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        // bottom: 0;
        top: 70px;
        margin: auto;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%,-50%);
        width: 1400px;
        height: 480px;
        // background: #f40;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          li {
            margin: 10px 12px;
            box-sizing: border-box;
            list-style: none;
            width: 326px;
            height: 95px;
            background: url("../assets/img/card_bg.png");
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            .avator {
              // display: flex;
              width: 70px;
              height: 70px;
              // justify-content: center;
              // img{
              position: relative;
              .real-actar {
                position: absolute;
                width: 54px;
                height: 54px;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                img {
                  border-radius: 50%;
                  width: 54px;
                  // height: 100%;
                }
              }

              // }
            }
            .per-name {
              padding: 0 10px 0 6px;
              .name {
                font-size: 22px;
                font-weight: 600;
                padding-bottom: 7px;
              }
              .bumen {
                font-size: 14px;
                color: #b0abab;
              }
            }

            .status {
              width: 104px;
              // line-height: 56px;
              text-align: center;
              height: 56px;
              border: 1px dotted #b09a9a;
              line-height: 56px;
              .later {
                padding: 4px 0;
                // color: #b09a9a;
                color: #ff9184;
                font-size: 21px;
                font-weight: 600;
              }
              .time-minutes {
                margin-left: 2px;
                // display: inline-block;
                // padding: 2px 0 0 2px;
                text-overflow: ellipsis;
                overflow: hidden;
                padding: 2px 0;
                color: #ff9184;
                font-size: 15px;
              }
            }
          }
        }
      }
      .right-border {
        float: right;
        transform: rotate(180deg);
      }
    }
  }
  footer {
    .footer-content {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 149px;
      // background: #f40;

      img {
        width: 918px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        margin: 0 auto;
      }
      .status_total {
        ul {
          width: 860px;
          height: 120px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          li {
            list-style: none;
            text-align: center;
            &.later {
              padding-left: 40px;
            }
            .name {
              width: 100px;
              padding-left: 3px;
              text-align: left;
              font-size: 20px;
              color: #a6b5d4;
              padding-bottom: 10px;
            }
            .detail-num {
              text-align: left;
              font-size: 38px;
              font-weight: 650;
              color: #dbc548;
              // padding-left: 20px;
              .num {
                // margin-right: 10px;
              }
              .weight {
                // padding-right: -25px;
                font-size: 20px;
              }
            }
          }
        }
      }
      // background: url("../assets/img/bottom_bg.png");
    }
  }
}
</style>
