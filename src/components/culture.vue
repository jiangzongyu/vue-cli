<template>
    <div>
    	<commheader></commheader>
		<div class="content">
			<h2>{{msg}}</h2>
			<img src="../assets/img/6.jpg">
		<p>
		【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国
		</p>
			<img src="../assets/img/7.jpg">
		
		<p>
			【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国
		</p>
		<img src="../assets/img/8.jpg">
		<p>【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国</p>
		<img src="../assets/img/9.jpg">
			<p>【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国</p>
			<img src="../assets/img/10.jpg">
			<p>【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国</p>
			<img src="../assets/img/11.jpg">
			<p>【艺术摄影】2017年7月13日讯，肯尼亚野生动物园中的动物似乎重现了电影《狮子王》的开场场景，日出时分橙色的天空映衬出它们清晰的轮廓。视觉中国</p>
		
		</div>
	</div>
</template>

<script>
import international from './international'
import society from './society'
import military from './military'
import commheader from './commheader'

    export default {
		data(){
			return {
				msg:'肯尼亚野生动物园重现电影场景'
			}
		},
		components:{
			commheader,
			international,
			society,
			military
		}
	}
</script>
<style>
	@import '../assets/css/index.css';
</style>
