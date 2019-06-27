<template>
	<view class="background">
		<view class="picbox">
			<image :src="faceUrl" class="profilepic" @click="changeFaceImage"></image>
			<button type="primary" @click="goToLogin">login</button>
			<button type="primary" @click="logout">logout</button>
		</view>

		<view class="information-card">
			<view class="title-line">
				<text class="info-title">Nicke name</text>
				<text class="info-title">ID</text>
				<text class="info-title">Gender</text>
				<text class="info-title">Birthday</text>
				<text class="info-title">Prefer</text>
			</view>

			<view class="content-line">
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
				<text class="info-content conteng-space">content</text>
			</view>
		</view>
		<view class="edit-button">
			<text class="edit-text">Edit</text>
		</view>
		<view class="film-upload">
			<navigator url="../videosearch/videosearch">
				<text class="film-upload-text">Film upload</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				faceUrl: '../../static/icons/logo.png',
			}
		},

		// 		onShow() {
		// 			var that = this;
		// 			var userInfo = that.getGlobalUserInfo();
		// 
		// 			console.log("onShow: that.userInfo.id=" + userInfo.id);
		// 			console.log("onShow: that.userInfo.userToken=" + userInfo.userToken);
		// 			uni.request({
		// 				url: that.$serverUrl + '/user/query?userId=' + that.userInfo.id,
		// 				method: 'POST',
		// 				header: {
		// 					'content-type': 'application/json',
		// 					'userId': that.userInfo.id,
		// 					'userToken': that.userInfo.userToken,
		// 				},
		// 				success: (res) => {
		// 					console.log(res.data);
		// 					var status = res.data.status;
		// 					if (status == 200) {} else if (status == 502) {
		// 						uni.showToast({
		// 							icon: 'none',
		// 							title: res.data.msg,
		// 						});
		// 					}
		// 				}
		// 			});
		// 		},

		onLoad() {
			uni.setNavigationBarTitle({
				title: "Profile"
			});

			var userInfo = this.getGlobalUserInfo();
			if (userInfo == null || userInfo == undefined || userInfo == "") {
				uni.navigateTo({
					url: '../login/login',
				});
				return;
			}
			// console.log(userInfo)

			uni.showLoading({
				title: "Loading..."
			});
			var that = this;
			uni.request({
				url: that.$serverUrl + '/user/query?userId=' + userInfo.id,
				method: 'POST',
				header: {
					'content-type': 'application/json',
					'userId': userInfo.id,
					'userToken': userInfo.userToken,
				},
				success: (res) => {
					console.log(res.data);
					var status = res.data.status;
					if (status == 200) {
						uni.hideLoading();
					} else if (status == 502) {
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
						});
					}
				}
			});

		},
		methods: {
			changeFaceImage: function() {
				var userInfo = this.getGlobalUserInfo();
				if (userInfo == null || userInfo == undefined || userInfo == "") {
					uni.navigateTo({
						url: '../login/login',
					});
					return;
				}

				var that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						var tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: 'Uploading...'
						})

						console.log("uploading face... userId=" + userInfo.id);
						uni.uploadFile({
							url: that.$serverUrl + '/user/uploadFace?userId=' + userInfo.id,
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								'content-type': 'application/json',
								'userId': userInfo.id,
								'userToken': userInfo.userToken,
							},
							success: (res) => {
								var data = JSON.parse(res.data);
								console.log("upload_res=");
								console.log(data);

								uni.hideLoading();
								if (data.status == 200) {
									uni.showToast({
										title: 'Success!',
										icon: "success"
									})
									var imageUrl = data.data;
									that.faceUrl = that.$serverUrl + imageUrl;
								} else if (data.status == 502) {
									uni.showToast({
										title: data.msg
									})
								}
							}
						});
					}
				});
			},

			goToLogin: function() {
				uni.navigateTo({
					url: '../login/login',
				})
			},

			logout: function() {
				var userInfo = this.getGlobalUserInfo();
				if (userInfo == null || userInfo == undefined || userInfo == "") {
					uni.navigateTo({
						url: '../login/login',
					});
					return;
				}

				var that = this;
				uni.request({
					url: that.$serverUrl + '/logout?userId' + userInfo.id,
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data);
						var status = res.data.status;
						if (status == 200) {
							uni.showToast({
								icon: 'none',
								title: 'Logout'
							});
							that.removeGlobalUserInfo();
							console.log("logout: userInfo.id=" + that.getGlobalUserInfo.id);
							console.log("logout: userInfo.userToken=" + that.getGlobalUserInfo.userToken);
							uni.navigateTo({
								url: '../login/login',
							});
						} else if (status == 500) {
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
							});
						}
					},
				});
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.background {
		height: 100%;
		background-color: #000000;
	}

	/* 头像框 */
	.picbox {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #000000;
		height: 360upx;
		align-items: center;
		justify-content: center;
	}

	.profilepic {
		width: 120upx;
		height: 120upx;
		border-radius: 60upx;
	}

	/* 更改头像 */
	/* .change {
		color: white;
		font-size: x-small;
		margin-top: 20upx;
	} */

	.information-card {
		display: flex;
		height: 600upx;
		margin-top: 100upx;
		color: #E80080;
	}

	/* 信息栏 */
	/* 左侧标题 */
	.title-line {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 600upx;
		margin-left: 50upx;
	}

	.infoline {
		height: 100upx;
		display: flex;
	}

	.info-title {
		color: #888888;
		margin-left: 20upx;
		font-size: x-small;
	}

	/* 右侧内容 */
	.info-content {
		color: white;
		margin-left: 50upx;
		font-size: small;
	}

	.content-line {
		display: flex;
		flex-direction: column;
		height: 600upx;
		justify-content: space-around;
	}

	.content-space {
		margin-left: 200upx;
	}

	/* “编辑”按钮样式 */
	.edit-button {
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content: center;
		align-content: center;
		margin-top: 50upx;
	}

	.edit-text {
		color: #929292;
		font-size: large;
	}

	.film-upload {
		display: flex;
		width: 100%;
		height: 60upx;
		justify-content: center;
		align-items: center;
	}

	.film-upload-text {
		color: white;
		font-size: middle;
	}
</style>
