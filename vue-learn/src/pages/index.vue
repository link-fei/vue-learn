<template>
  <div class="index-wrap">
  	<div class="index-left">
  		<div class="index-left-block">
  			<h2>全部产品</h2>
  			<template v-for="product in productList">
  				<h3>{{product.title}}</h3>
	  			<ul>
	  			   <li v-for="item in product.list">
	  			   		<a :href="item.url">{{item.name}}</a>
	  			   		<span v-if="item.hot" class="hot-tag">hot</span>
	  			   </li>
	  			</ul>
	  			<hr>
  			</template>
  		</div>
  		<div class="index-left-block lastest-news">
  			<h2>最新消息</h2>
  			<ul>
  				<li v-for="item in newsList">
  					<a :href="item.url">{{item.title}}</a>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<div class="index-right">
  		<slideShow :slides="slides"></slideShow>
  		<div class="index-board-list">
  			<div class="index-board-item" 
  				v-for="(item,index) in boardList" 
  				:class="{'line-last':index%2===0}">
  				<div class="index-board-item-inner">
  					<h2>{{item.title}}</h2>
  					<p>{{item.decription}}</p>
  					<div class="index-board-button">
  						<a href="" class="button">立即购买</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import mock from '@/mock/index';
import slideShow from '../components/slideShow' 

export default {
	components:{
		slideShow
	},
	created(){
		this.$axios.get('/getList')
		.then(res=>{
			this.newsList=res.data.data.newsList;
			this.boardList=res.data.data.boardList;
		    this.productList=res.data.data.productList;
		})
		.catch(err=>{
		    console.log(err);
		})
	},
	data(){
		return{
			newsList:'',
			boardList:'',
			productList:'',
			slides:[
				{
					src:require('../assets/2.jpg'),
					title:'xx1',
					href:'detail/forecast'
				},
				{
					src:require('../assets/1.jpg'),
					title:'xx2',
					href:'detail/count'
				},
				{
					src:require('../assets/1.jpg'),
					title:'xx2',
					href:'detail/publish'
				},
				{
					src:require('../assets/1.jpg'),
					title:'xx2',
					href:'detail/analysis'
				}
			],
		}
	}
}
</script>

<style scoped>
.hot-tag{
	background: red;
	color: black;
}
.index-left-block a{
	text-decoration:none;
	color: #000;
}
.index-wrap{
	width: 1200px;
	margin:0 auto;
	overflow: hidden;
}
.index-left{
	float: left;
	width: 300px;
	text-align: left;
}
.index-left-block{
	margin: 15px;
	/*height: 300px;*/
	background: #fff;
	box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr{
	margin-bottom: 10px;
}
.index-left-block h2{
	background: #4fc08d;
	color: #fff;
	padding: 10px 15px;
	margin-bottom: 10px;
}
.index-left-block h3{
	padding: 0px 15px 0px 15px;
	font-weight: bold;
	color: #222;
}
.index-left-block ul{
	padding: 5px 30px;
}
.index-left-block li{
	margin-left: 10px;
	margin-top: 0px;
}
.index-right{
	float: right;
	width: 850px;
	/*margin-left: 30px;
	margin-top: 40px;*/
	margin: 40px auto;
}
.index-board-list{
	/*overflow: hidden;*/
}
.index-board-item{
	float: left;
	width: 350px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 5px;
	/*margin-right: 10px;*/
	margin-bottom: 30px;
	margin-left: 20px;
	background:url('../assets/1.jpg') no-repeat 30px 20px;
    background-size: 20%;
}
.index-board-item-inner{
	min-height: 125px;
	margin-left: 120px;
}
.index-board-item h2{
	font-size: 18px;
	font-weight: bold;
	color: #000;
	margin-bottom: 15px;
}
.line-last{
	margin-right: 65px;
}
.index-board-button{
	margin: 20px 0;
}
.button{
	padding: 5px;
	background: #4fc08d;
	color: #fff;
}
.lastest-news{
	min-height: 350px;
}
</style>
