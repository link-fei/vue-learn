<template>
	<div class="sale-board"> 
		<div class="sale-board-intro">
			  <h2>消息发布</h2>
			  <p>
					流量分析是一种方式流量分析是一种方式流量分析是一种方式流量分析是一种方式流量分析是一种方式流量分析是一种方式流量分析是一种方式
			  </p>
		</div>
		<div class="sale-board-form">
			<div class="sale-board-line">
				<div class="sale-board-line-left">
					购买数量：
				</div>
				<div class="sale-board-line-right">
					1件
				</div>
			</div>
			<div class="sale-board-line">
				<div class="sale-board-line-left">
					有效时间：
				</div>
				<div class="sale-board-line-right">
					半年
				</div>
			</div>
			<div class="sale-board-line">
				<div class="sale-board-line-left">
					总价：
				</div>
				<div class="sale-board-line-right">
					500元
				</div>
			</div>
			<div class="sale-board-line">
				<div class="sale-board-line-left">
					&nbsp;
				</div>
				<div class="sale-board-line-right">
					<div class="button">
						 立即购买
					</div>
				</div>
			</div>
		</div>
		<div class="sale-board-des">
			<h2>产品说明</h2>
			<p>
				产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍
			</p>
			<ul>
				<li>设备类型</li>
				<li>浏览器名称</li>
				<li>设备类型</li>
				<li>浏览器名称</li>
				<li>设备类型</li>
				<li>浏览器名称</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>
.sale-board{
	margin-left: 30px;
}
.sale-board-intro{
	background: #F8F8F8;
	/*background: green;*/
	/*border:1px solid #F8F8F8;*/
	height: 200px;
}
.sale-board-intro h2{
	font-size: 20px;
	padding: 10px;
}
.sale-board-intro p{
	background: #F0F0F0;
	padding: 20px 20px;
	color: #999;
	line-height: 1.8;
}
.sale-board-form{
	background: #F8F8F8;
	padding: 10px 20px;
	font-size:14px; 
	overflow: hidden;
	/*margin-top: -1px;*/
	/*margin-top: 0px;*/
}
.sale-board-line{
	/*display: inline-block;*/
	height: 30px;
}
.sale-board-line-left{
	float: left;
	margin-left: 20px;
	font-weight:bold;
}
.sale-board-line-right{
	float: left;
	margin-left: 40px;
}
.sale-board-table{
	background: #4fc08d;
	color: #fff;
}
.sale-board-table td{
	border: 1px solid #f0f2f5;
	padding: 15px;
}
.sale-board-des{
	margin-top: 50px;
	background: #F8F8F8;
    /*border:1px solid red;*/
    height: 300px;
}
.sale-board-des h2{
	font-size: 20px;
	padding: 10px;
}
.sale-board-des p{
	background: #F0F0F0;
	padding: 20px 20px;
	color: #999;
	line-height: 1.8;
}
.sale-board-des li{
	list-style-type:none;
	float: left;
	margin-left: 20px;
}
.button{
	background: #4fc08d;
	color: #fff;
	padding: 7px;
	margin-left: 50px;
	cursor: pointer;
}
</style>
