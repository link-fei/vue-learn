<template>
  <div class="detail-wrap">
  	  <div class="detail-left">
  	  		<div class="product-board">
  	  			<img :src="productIcons">
  	  			<ul>
  	  				<router-link v-for="item in products" :key="item.id"
  	  				:to="{path:item.path}" tag="li" active-class="active">
  	  				{{item.name}}
  	  			    </router-link>
  	  			</ul>
  	  		</div>
  	  </div>
  	  <div class="detail-right">
  	  		<router-view></router-view>
  	  </div>
  </div>
</template>

<script>
export default{
	data(){
		return{
			products:[
				{
					name:"商品预测",
					path:'forecast',
					active:true,
				},
				{
					name:"销量统计",
					path:'count',
					active:false,
				},
				{
					name:"数据分析",
					path:'analysis',
					active:false,
				},
				{
					name:"广告发布",
					path:'publish',
					active:false,
				}
			],
			imgMap:{
				'/forecast':require('../assets/logo.png'),
				'/count':require('../assets/logo.png'),
				'/analysis':require('../assets/logo.png'),
				'/publish':require('../assets/logo.png')
			}
		}
	},
	computed:{
		productIcons(){
			return this.imgMap[this.$route.path];
		}
	}
}
</script>

<style scoped>
.detail-wrap{
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
}
.detail-left{
	float: left;
	width: 200px;
	text-align: center;
	background: #F8F8F8;
}
.detail-right{
	float: left;
	width: 980px;
	/*margin-left: 20px;*/
}
.product-board img{
	width: 60%;
	margin-top: 10px;
}
.product-board ul{
	margin-top: 20px;
}
.product-board li{
	text-align: left;
	padding: 10px 15px;
	cursor: pointer;
	/*list-style-type:none;*/
}
.product-board .active li:hover,
.product-board li:hover{
	background: #4fc08d;
	color: #fff;
}
.product-board li a{
	display: block;
}
.sale-board-form{

}
.sale-board-intro h2{
	font-size: 20px;
	padding: 20px;
}
.sale-board-intro p{
	background: #f77cff;
	padding: 10px 20px;
	color: #999;
	line-height: 1.8;
}
.sale-board-form{
	padding: 30px 20px;
	font-size:14px; 
}
.sale-board-line{

}
.sale-board-table{
	background: #4fc08d;
	color: #fff;
}
.sale-board-table td{
	border: 1px solid #f0f2f5;
	padding: 15px;
}
</style>
