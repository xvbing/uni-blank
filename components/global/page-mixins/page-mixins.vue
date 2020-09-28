<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// popup相关
				typePopup: 'center',
				modelName: ''
			};
		},
    methods: {
      // 展示弹出框
      showPopup(type, model) {
      	this.typePopup = type
      	this.modelName = model
      	this.$refs[model].open()
      },
      // 隐藏弹出框
      closePopup() {
      	this.$refs[this.modelName].close()
      }
    }
	}
</script>

<style lang="scss" scoped>

</style>
