<template>
  <view class="title-bar" :style="{height: globalData.navHeight + 'px'}" :class="[bgColor]">
    <view class="title-bar-icon" v-if="isShow" :style="{height: globalData.btnHeight + 'px', width: globalData.btnWidth + 'px', top: globalData.btnTop + 'px', left: globalData.btnLeft + 'px'}">
      <view class="icon" @click="navigateBack(false)">
        <image class="img" :src="backImg" mode=""></image>
      </view>
      <view class="icon" @click="navigateBack(true)">
        <image class="img" :src="homeImg" mode="">
        </image>
      </view>
    </view>
    <view class='title-bar-text' :style="{top: globalData.btnTop + 'px'}">{{ title }}</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        globalData: {
          navHeight: 0,
          navWidth: 0,
          btnHeight: 0,
          btnWidth: 0,
          btnLeft: 0,
          btnTop: 0
        },
        backImg: 'https://paifou-img.oss-cn-shanghai.aliyuncs.com/miniProgram/common/back.svg',
        homeImg: 'https://paifou-img.oss-cn-shanghai.aliyuncs.com/miniProgram/common/home.svg'
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '拍否'
      },
      bgColor: {
        type: String,
        default: 'bg-white'
      }
    },
    mounted() {
      this.globalData = getApp().globalData.titleBar
    },
    methods: {
      navigateBack(isHome) {
        if (isHome) {
          uni.switchTab({
            url: '/pages/tab-bar/main/main'
          });
        } else {
          uni.navigateBack({
            delta: 1
          })
        }
      }
    }
  }
</script>

<style lang=scss>
  .title-bar {
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zindex-bar;
    flex-shrink: 0;

    .title-bar-icon {
      position: absolute;
      z-index: 11;
      line-height: 1;
      display: flex;
      align-items: center;
      border-radius: 32rpx;
      background-color: transparent;
      border: 2rpx solid rgba(0, 0, 0, 0.08);

      .icon {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-of-type {
          border-right: 1rpx solid rgba(0, 0, 0, 0.2);
        }

        .img {
          width: 32rpx;
          height: 32rpx;
        }
      }
    }

    .title-bar-text {
      width: 100%;
      line-height: 50rpx;
      /* box-sizing: border-box; */
      /* padding-left: 115px; */
      /* padding-right: 115px; */
      /* height: 32px; */
      /* line-height: 32px; */
      position: absolute;
      left: 0;
      z-index: 10;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 36rpx;
      text-align: center;
    }
  }

  .bg-white {
    background: #FFFFFF;
    color: #000000;
  }

  .bg-red {
    background: #a22524;
    color: #FFFFFF;
  }
</style>
