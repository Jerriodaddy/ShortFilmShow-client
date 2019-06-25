<template>
	<view class="lg-back">
		<view class="picture">
			<image src="../../static/assets/logo.png" class="logo" mode="aspectFit"></image>
		</view>
		<form bindsubmit="formSubmit" bindreset="formReset">
			<view class="itemView">
				<input name="username" v-model="username" class="input" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" v-model="password" password placeholder="Password" />
			</view>
			<view class="button-area">
				<button class = "loginBtn" type="default" @tap="login">Login</button>
				<button class = "registerBtn"  @tap="Register">Sign up now!</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods:{
			
			Register(){
				uni.navigateTo({
					url:'../register/register',
				})
			},
			
			login(){
				var username = this.username;
				var password = this.password;
				if (username.length < 1) {
				    uni.showToast({
				        icon: 'none',
				        title: 'Your name is not valid'
				    });
				    return;
				}
				if (password.length < 1) {
				    uni.showToast({
				        icon: 'none',
				        title: 'Your password is not valid'
				    });
				    return;
				}
				
				var ServerUrl = 'http://192.168.1.3:8080';
				
				uni.request({
					
					url:ServerUrl + '/login',
					method:'POST',
					data:{
						username:username,
						password:password,
					},
					success: (res) => {
						console.log(res.data);
						var status = res.data.status;
						if(status == 200){
							uni.showToast({
									icon: 'none',
									title: 'Welcome'
								});
								uni.navigateTo({
									url: '../classify/classify',
								});
						}else if(status == 500){
							uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 3000
								});
						}
						
					}
				})
			},
		},
		
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Sign in"
			});
		
		}
		
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}
	
	.picture {
		display: flex;
	}

	.lg-back {
		height: 100%;
		background-color:black;
	}

	


	.itemView {
		height: 60upx;
		margin-left: 30upx;
		margin-right:30upx;
		margin-bottom: 20upx;
		background-color: #F0F0F0;
	}
	
	.input {
		BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid; BORDER-LEFT: 0px solid; BORDER-BOTTOM: 0px solid;
		//border-color: orange;
	}

	.loginBtn { 
		width: 40%; 
		margin-right:30px;
		float:right;
	}
	.registerBtn { 
		width: 40%; 
		margin-left:30px;
		float:left;
		background-color: orange;
		color: white;
	}
</style>
