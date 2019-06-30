import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$serverUrl = 'http://127.0.0.1:8080'

Vue.prototype.setGlobalUserInfo = function(user) {
	uni.setStorageSync('userInfo', user);
}

Vue.prototype.getGlobalUserInfo = function() {
	var value = uni.getStorageSync('userInfo');
	if (value.length == 0) {
		uni.navigateTo({
			url: '/pages/login/login',
		});
	} else {
		return value;
	}
}

const app = new Vue({
	...App
})
app.$mount()
