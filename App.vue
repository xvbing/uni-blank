<script>
  export default {
    globalData: {
      titleBar: {
        screenHeight: 0,
        navHeight: 0,
        navWidth: 0,
        btnHeight: 0,
        btnWidth: 0,
        btnLeft: 0,
        btnTop: 0
      },
      mobileInfo: {}
    },
    onLaunch() {
      // console.log('App Launch')
      // #ifdef MP-WEIXIN
      this.getTitleBar();
      // #endif
    },
    onShow() {
      // console.log('App Show')
    },
    onHide() {
      // console.log('App Hide')
    },
    methods: {
      // 获取title的高度
      getTitleBar() {
        uni.getSystemInfo({
        	success: (res) => {
            let menuButtonObject = uni.getMenuButtonBoundingClientRect();
        		// console.log(res);
        		// console.log(menuButtonObject);
        		this.$options.globalData.mobileInfo = res
        		this.$options.globalData.titleBar.screenHeight = res.screenHeight
        		this.$options.globalData.titleBar.navHeight = (res.statusBarHeight + menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2)
        		this.$options.globalData.titleBar.btnHeight = (menuButtonObject.height - 2)
        		this.$options.globalData.titleBar.btnWidth = (menuButtonObject.width - 2)
        		this.$options.globalData.titleBar.btnLeft = (res.windowWidth - menuButtonObject.right)
        		this.$options.globalData.titleBar.btnTop = (menuButtonObject.top + 2)
        		// console.log(this.$options.globalData.titleBar);
        	}
        })
      }
    }
  }
</script>

<style>
  /*每个页面公共css */
  
  * {
  	box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	-moz-box-sizing: border-box;
  	-webkit-user-select: text;
  	-moz-user-select: text;
  	-o-user-select: text;
  	user-select: text;
  }
  
  view {
  	box-sizing: border-box;
  }
</style>
