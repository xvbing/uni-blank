<template>
	<view>
		<title-bar :title="title" :bg-color="bgColor"></title-bar>
		<view class="main" :style="{marginTop: (globalData.navHeight + top) + 'px'}">
			<slot></slot>
		</view>
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
				}
			};
		},
		props: {
			title: {
				type: String,
				default: '拍否'
			},
			top: {
				type: Number,
				default: 5
			},
			bgColor: {
				type: String,
				default: 'bg-white'
			}
		},
		mounted() {
			// #ifdef MP-WEIXIN
			this.globalData = getApp().globalData.titleBar
			// #endif
		}
	}
</script>

<style lang="scss">

</style>
