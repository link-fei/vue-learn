<template>
  <div class="slide-show">
  	<div class="slide-img">
  		<a :href="slides[curIndex].href">
  			<img :src="slides[curIndex].src">
  		</a>
  	</div>
  	<h2>{{slides[curIndex].title}}</h2>
  	<ul class="slide-pages">
  		<li @click="gotoPre">&lt;</li>
  		<li>
  			<a v-for="(item,index) in slides" @click="goto(index)">
  				{{index+1}}
  			</a>
  		</li>
  		<li @click="gotoNext">&gt;</li>
  	</ul>
  </div>
</template>

<script scoped>
export default {
	props:{
		slides:{
			type:Array,
			default:[]
		}
	},
	data(){
		return{
			curIndex:0
		}
	},
	methods:{
		goto(index){
			this.curIndex=index;
		},
		gotoPre(){
			if(this.curIndex>0){
				this.curIndex-=1;
			}else{
				this.curIndex=this.slides.length;
			}
		},
		gotoNext(){
			if(this.curIndex<this.slides.length){
				this.curIndex+=1;
			}else{
				this.curIndex=0;
			}
		}
	},
	mounted() {
       setInterval(this.gotoNext, 2000);
    },
}
</script>

<style scoped>
.slide-show{
    position:relative;
	margin: 0px 15px 80px 20px;
	width: 95%;
	height: 350px;
	overflow: hidden;
	box-shadow:5px 5px 10px 5px #ccc;
}
.slide-show h2{
	position:absolute;
	bottom:10px;
	left: 40px;
}
.slide-pages {
	list-style-type:none;
	position:absolute;
	bottom:10px;
	right: 40px;
}
.slide-pages li{
	display: inline-block;
}
.slide-pages li:hover{
	cursor: pointer;
}
.slide-img img{
	width: 100%;
	position:absolute;
	left:0px;
	top:0px;
}
</style>
