<template>
    <div>
    	<commheader></commheader>
		<div class="content">
			<h2>{{msg}}</h2>
		<p>
		15日凌晨零点，江苏扬州宝应县遭到龙卷风袭击。大风席卷而过，碗口粗的树木被拦腰折断，受灾最为严重的两个镇，有3000多棵树，数十根电线杆被吹倒，多条电力线路被刮断， 5000多户居民用电中断。
		</p>
			<img src="../assets/img/4.jpg">
		
		<p>
			灾害发生后，电力部门迅速启动恶劣天气应急预案，100多名抢修人员，第一时间赶到现场，经过连夜抢修，截至15日晚8点，已经全部恢复供电。
		</p>

			
		</div>
	</div>
</template>

<script>
import international from './international'
import military from './military'
import culture from './culture'
import commheader from './commheader'

    export default {
		data(){
			return {
				msg:'江苏扬州龙卷风吹断电线 超5000户用电中断'
			}
		},
		components:{
			commheader,
			international,
			military,
			culture
		}
	}
</script>
<style>
	@import '../assets/css/index.css';
</style>
