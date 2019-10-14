<template>
  <div>
  	<div class="app-header">
  		<div class="app-head-inner">
  			<img src="../assets/logo.png" class="head-logo">
  			<div class="head-nav">
  				<ul class="nav-list">
  					<router-link :to="{path:'/'}">
  						<li style="color:#b2b2b2;">首页</li>
  					</router-link>
  					<li class="nav-pile">|</li>
  					<li @click="login">登录</li>
  					<li class="nav-pile">|</li>
  					<li @click="register">注册</li>
  					<li class="nav-pile">|</li>
  					<li @click="about">关于</li>
  				</ul>
  			</div>
  		</div>
  	</div>
	<div class="app-content">
		<router-view/>
	</div>
  	<div class="app-footer">
  		<p>@ 2019 MIT</p>
  	</div>
  	<MyDialog :isShow="isShowAbout" 
  	@on-close="closeDialog('isShowAbout')">
  		<p>luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，
  		致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。</p>
  	</MyDialog>
  	<MyDialog :isShow="isShowLogin" 
  	@on-close="closeDialog('isShowLogin')">
  		<loginForm></loginForm>
  	</MyDialog>
  	<MyDialog :isShow="isShowRegister" 
  	@on-close="closeDialog('isShowRegister')">
  		<registerForm></registerForm>
  	</MyDialog>
  </div>
</template>

<script>
import MyDialog from './dialog'
import loginForm from './loginForm'
import registerForm from './registerForm'

export default {
	components:{
		MyDialog,
		loginForm,
		registerForm
	},
	data(){
		return{
			isShowAbout:false,
			isShowLogin:false,
			isShowRegister:false
		}
	},
	methods:{
		about(){
			this.isShowAbout=true;
		},
		login(){
			this.isShowLogin=true;
		},
		register(){
			this.isShowRegister=true;
		},
		closeDialog(attr){
			this[attr]=false;//this.attr=false
		}
	}
}
</script>

<style scoped>
body{
	background: #f0f2f5;
	font-size: 14px;
	color: #444;
}
.app-header{
	background: #363636;
	color: #b2b2b2;
	height: 70px;
	line-height: 40px;
	width: 100%;
}
.app-head-inner{
	width: 1200px;
	margin: 0 auto;
}
.head-logo{
	float: left;
}
.app-head-inner img{
	width: 50px;
	margin-top: 10px;
}
.head-nav{
	float: right;
}
.head-nav ul{
	overflow: hidden;
}
.head-nav li{
	cursor: pointer;
	float: left;
	list-style-type:none;
}
.nav-pile{
	padding:0 10px;
	list-style-type:none;
}
.app-footer{
	text-align: center;
	height: 80px;
	width: 100%;
	line-height: 80px;
	background: #e3e4e8;
	clear: both;
	margin-top: 30px;
}
.app-content{
/*	width: 1200px;
	margin: 0 auto;*/
}
</style>
