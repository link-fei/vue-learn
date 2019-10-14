<template>
  <div class="login-form">
  	 <div class="g-form">
  	 	<div class="g-form-line">
  	 		<span class="g-form-label">用户名:</span>
  	 		<div class="g-form-input">
  	 			<input type="text" v-model="username" 
  	 			placeholder="请输入用户名">
  	 		</div>
  	 	</div>
  	 	<div class="g-form-line">
  	 		<span class="g-form-label">密&nbsp;&nbsp;&nbsp;码:</span>
  	 		<div class="g-form-input">
  	 			<input type="password" v-model="password" 
  	 			placeholder="请输入密码">
  	 		</div>
  	 	</div>
  	 	<div class="g-form-line">
  	 		<div class="g-form-btn">
  	 			<a class="button" @click="onLogin">注册</a>
  	 		</div>
  	 	</div>
  	 </div>
  </div>
</template>

<script>
export default {
	props:{
		
	},
	data(){
		return{
			username:'',
			password:''
		}
	},
	methods:{
		onLogin(){
			if (this.username==="admin"&&this.password==="admin") {
				alert("register success");
			}else{
				alert("fails");
			}
		}
	}
}
</script>

<style scoped>
.g-form-label{
	/*display: inline-block;*/
	float: left;
	margin-right: 20px;
}
.g-form-input{
	/*float: right;*/
}
.g-form-btn{
	float: left;
	margin-left: 200px;
	background: #4fc08d;
	color: #fff;
	margin-top: 10px;
	padding: 5px;
	width: 40px;
	text-align: center;
}
.g-form-btn:hover{
	cursor: pointer;
}
</style>
