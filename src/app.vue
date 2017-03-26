<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<!-- 里边渲染的路由内容 -->
    		<router-view></router-view>
    	</transition>
    </div>
</template>

<style lang="scss">
  	@import './assets/css/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>