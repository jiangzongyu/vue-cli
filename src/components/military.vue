<template>
    <div>
    	<commheader></commheader>
		<div class="content">
			<h2>{{msg}}</h2>
			<img src="../assets/img/5.jpeg">
		
		<p>
			【环球时报-环球网报道 记者郭芳】7月14日，美国国会众院审议通过“2018财年国防授权法案”，其中要求美国国防部长评估美台军舰互访的可能性。在17日的例行记者会上，中国外交部发言人陆慷回应《环球时报》记者有关此事的提问时说，美国国会众院审议通过的“2018财年国防授权法案”。包含要求美防长向国会提交报告，对美台军舰互访进行可行性评估等消极内容。有关条款严重违背美一个中国政策和中美三个联合公报原则，干涉中国内政，中方已向美方提出严正交涉。
		</p>
		<p>
		陆慷对《环球时报》记者说，中方一贯坚决反对美台进行任何形式的官方往来和军事联系。我们敦促美方充分认清上述法案有关条款的严重危害性，不得让含相关条款的法案通过成法，不要开历史倒车，以免损害中美合作大局
		</p>

			
		</div>
	</div>
</template>

<script>
import international from './international'
import society from './society'
import culture from './culture'
import commheader from './commheader'

    export default {
		data(){
			return {
				msg:'美欲评估美台军舰互访，中方提出严正交涉'
			}
		},
		components:{
			commheader,
			international,
			society,
			culture
		}
	}
</script>
<style>
	@import '../assets/css/index.css';
</style>
