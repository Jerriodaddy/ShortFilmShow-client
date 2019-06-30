<template>
	<view class="background">
		<view class="picbox">
			<view type="primary" @tap="upload">
				<!-- <image src="../../static/icons/logo.png" class="profilepic"></image> -->
				<image :src="faceUrl" class="profilepic"></image>

			</view>
			<!-- <text class="change">change picture</text> -->
			<!-- 			<button type="primary" @click="changeFaceImage" @tap="upload">change picture</button>-->
			<view class="">Guetta</view>
		</view>
		<!-- 数据框 pink-->
		<view class="data_box column_center">
			<text class="data_box_text">Follow</text>
			<view class="data_border"></view>
			<text class="data_box_text">Fans</text>
			<view class="data_border"></view>
			<text class="data_box_text">Donate</text>
		</view>

		<!-- Profile 所包含的内容块 -->
		<view class="container_profile column hor_center">
			<!-- Profile 的单个内容抽屉 -->
			<view class="drawer column_center">
				<image src="../../static/icons/history.png" mode="" class="icon-proflie"></image>
				<view class="profile_title column_center">
					<text class="profiel_title_text">{{history}}</text>
				</view>
			</view>

			<!-- Profile 的单个内容抽屉 -->
				<view class="drawer column_center">
					<image src="../../static/icons/history.png" mode="" class="icon-proflie"></image>
					<view class="profile_title column_center">
						<navigator url="../profileinfo/profileinfo" hover-class="navigator-hover" class="profiel_title_text">Edit information</navigator>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				faceUrl: '../../static/icons/profilePic.png',
				src: '',
				history: 'Watch history'
			}
		},

		onLoad(option) {
			var userInfo = this.getGlobalUserInfo();
			uni.setNavigationBarTitle({
				title: "Profile"
			});

			let {
				avatar
			} = option;
			if (avatar) {
				this.src = avatar;
			}

			var userInfo = this.getGlobalUserInfo();
			if (userInfo == null) {
				return;
			}

			console.log(userInfo)
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success(res) {
						const src = res.tempFilePaths[0];

						uni.redirectTo({
							url: '../upload/upload?src=' + src
						});
					}
				});
			},



			// 			upload: function() {
			// 				var userInfo = this.getGlobalUserInfo();
			// 				if (userInfo == null) {
			// 					return;
			// 				}
			// 				var that = this;
			// 				uni.chooseImage({
			// 					count: 1, //默认9
			// 					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			// 					sourceType: ['album'], //从相册选择
			// 					success: function(res) {
			// 						var tempFilePaths = res.tempFilePaths;
			// 						console.log(tempFilePaths);
			// 						uni.showLoading({
			// 							title: 'Uploading...'
			// 						});
			// 						// 以下三行用于测试，
			// 						uni.redirectTo({
			// 							url:'../upload/upload?src=' + src
			// 						});
			// 
			// 						uni.uploadFile({
			// 							url: that.$serverUrl + '/user/uploadFace?userId=' + userInfo.id,
			// 							filePath: tempFilePaths[0],
			// 							name: 'file',
			// 							success: (res) => {
			// 								var data = JSON.parse(res.data);
			// 								console.log(data.data);
			// 								uni.hideLoading();
			// 								if (data.status == 200) {
			// 									uni.showToast({
			// 										title: 'Success!',
			// 										icon: "success"
			// 									})
			// 									var imageUrl = data.data;
			// 									that.faceUrl = that.$serverUrl + imageUrl;
			// 								} else if (data.status == 500) {
			// 									uni.showToast({
			// 										title: data.msg
			// 									})
			// 								}
			// 							}
			// 						});
			// 					}
			// 				});
			// 			}
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
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: orange;
		height: 300upx;
		align-items: center;
		justify-content: center;
		top: 0;
	}

	.profilepic {
		width: 120upx;
		height: 120upx;
		border-radius: 60upx;
	}

	/* 更改头像 */
	.change {
		color: white;
		font-size: x-small;
		margin-top: 20upx;
	}

	/* 数据框 */
	.data_box {
		position: relative;
		display: flex;
		height: 110upx;
		width: 100%;
		justify-content: space-around;
		background: linear-gradient(to right, orange, red, orange);
	}

	.data_box_text {
		fontsize: small;
		color: white;
	}

	.data_border {
		width: 2upx;
		background-color: darkgray;
		height: 90upx;
	}


	/* 抽屉容器 */
	.container_profile {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: blacke;
	}

	/* 抽屉 */
	.drawer {
		height: 100upx;
		width: 95%;
		margin-top: 10upx;
		border-top: 2upx solid darkgray;
		border-bottom: 2upx solid darkgray;
	}

	/* 图标 */
	.icon-proflie {
		width: 48upx;
		height: 48upx;
		position: absolute;
		margin-left: 5%;
	}

	/* 抽屉内容 */
	.profile_title {
		width: 87%;
		height: 80%;
		margin-left: 2%;

	}

	.profiel_title_text {
		font-size: large;
		color: white;
		margin-left: 20%;
	}
</style>
