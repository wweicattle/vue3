<template>
  <div class="home">
    <div class="check-contain">
      <header>
        <div class="logo">
          <img src="../assets/img/logo.png" alt="" />
        </div>
        <div class="check-title">
          <div class="title-detail">
            <div class="title">利郎员工考勤监控</div>
            <div class="title-english">
              LILANZ EMPLOYEE ATTENDANCE MONITORING
            </div>
          </div>
          <div>
            <!-- <img src="../assets/img/title_bg.png" alt="" /> -->
          </div>
        </div>
        <div class="check-time">
          <span class="date">2021/01/28 </span>
          <span class="week">星期四</span>
          <div class="detail-time">15:25:17</div>
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
                  <div class="later">上班迟到</div>
                  <div class="time-minutes">13 min</div>
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
                <div class="detail-num">1222人</div>
              </li>
              <li>
                <div class="name">异常考勤</div>
                <div class="detail-num">1222人</div>
              </li>
              <li>
                <div class="name">异常考勤</div>
                <div class="detail-num">1222人</div>
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

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  margin-top: 100px;
}
.check-contain {
  width: 1536px;
  height: 896px;
  background: #090c19;
  position: absolute;
  /* left: 0; */
  top: 0;
  /* right: 0; */
  bottom: 0;
  margin: auto;
  transform: scale(1, 1);
  header {
    height: 127px;
    .logo {
      position: absolute;
      top: 50px;
      left: 20px;
    }
    .check-time {
      text-align: right;
      position: absolute;
      right: 30px;
      top: 30px;
      color: #fff;
      .detail-time {
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
      .title-detail {
        position: absolute;
        // left: 0;
        // right: 0;
        width: 100%;
        bottom: 30px;
        // margin: auto;
        color: #ffedea;
        .title {
          font-size: 30px;
          font-weight: 600;
        }
        .title-english {
          font-size: 12px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
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
              .later {
                padding: 4px 0;
                color: #b09a9a;
                font-size: 15px;
                font-weight: 600;
              }
              .time-minutes {
                text-overflow: ellipsis;
                overflow: hidden;
                padding: 2px 0;
                color: #ff9184;
                font-size: 23px;
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
          width: 918px;
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
            .name {
              font-size: 18px;
              color: #a6b5d4;
              padding-bottom: 5px;
            }
            .detail-num {
              text-align:left;
              font-size: 34px;
              font-weight: 650;
              color: #dbc548;
            }
          }
        }
      }
      // background: url("../assets/img/bottom_bg.png");
    }
  }
}
</style>
