<template>
	<view class="Reg-back">
		<view class="picture">
			<image src="../../static/assets/logo.png" class="logo" mode="aspectFit"></image>
		</view>
		<form bindsubmit="formSubmit" bindreset="formReset">
			<view class="itemView">
				<input name="username" class="input"  v-model="email" placeholder="Email" />
			</view>
			<view class="itemView">
				<input name="username" class="input" @confirm="blur-input" v-model="username" placeholder="Username" />
			</view>
			<view class="itemView">
				<input name="password" class="input" @confirm="blur-input" v-model="password" password placeholder="Password" />
			</view>
			<view class="itemView">
				<input name="vertify password" class="input" @confirm="blur-input" v-model="v_password" password placeholder="Vertify Password" />
			</view>
			<view class="btn-row">
				<button class="Register" @tap="Register">Complete!</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
		        username: '',
		        password: '',
		        email: '',
		    }
		},
		methods:{
				Register() {
					var email = this.email;
					var username = this.username;
					var password = this.password;
					
					if (email.length < 1 || !~email.indexOf('@')) {
					    uni.showToast({
					        icon: 'none',
					        title: 'Your email address is not valid'
					    });
					    return;
					}
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
					if (password != this.v_password) {
					    uni.showToast({
					        icon: 'none',
					        title: 'please type same password while vertify'
					    });
					    return;
					}
					
					var ServerUrl = this.$serverUrl;
					
				uni.request({
					url: ServerUrl + '/register',
					method: 'POST',
					data: {
						username: username,
						password: password,
						email: email
					},
					header:{
						'content-type': 'application/json'
					},
			
					success: (res) => {
						console.log(res.data);
						var status = res.data.status;
						if(status == 200){
							uni.showToast({
									icon: 'none',
									title: 'Register Complete'
								});
								uni.navigateTo({
									url: '../login/login',
								});
						}else if(status == 500){
							uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 3000
								});
						}
						
						},fail: (res) => {
							console.log(res.data);
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
							});
					}
				});
			}
		},
		
		/*onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Sign up"
			});
		}*/
		
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
	
	.Reg-back {
		height: 100%;
		background-color: black;
	}
	
	.itemView {
		height: 60upx;
		margin-left: 30upx;
		margin-right:30upx;
		margin-bottom: 20upx;
		background-color: #F0F0F0;
	}
	
	.btn-row {
		width: 100%;
	}
	
	.Register { 
		width: 50%; 
		margin:0px auto;
		background-color: orange;
		color: white;
		}
</style>