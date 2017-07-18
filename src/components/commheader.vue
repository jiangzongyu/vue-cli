<template>
	<div>
		<h1>{{msg}}</h1>
    	<ul id="header">
    		<li><router-link to='/'>首页</router-link></li>
    		<li><router-link to='/international'>国际</router-link></li>
    		<li><router-link to='/society'>社会</router-link></li>
    		<li><router-link to='/military'>军事</router-link></li>
    		<li><router-link to='/culture'>文化</router-link></li>
    	</ul>
    
	</div>
</template>

<script type="text/javascript">
export default {
		data(){
			return {
				msg:'新闻动态',
			}
		}	
	}
</script>

<style type="text/css">
	@import '../assets/css/index.css';
</style>