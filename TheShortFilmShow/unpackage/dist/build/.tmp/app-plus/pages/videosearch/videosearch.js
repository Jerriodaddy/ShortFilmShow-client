(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/videosearch/videosearch"],{"2c1b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("view",{staticClass:"video-name"},[a("view",{staticClass:"section title"},[e._v("Viedo name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{placeholder:"please enter video name:",value:e.inputClearValue,eventid:"a847c336-0"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.clearInput]}}),e.showClearIcon?a("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"a847c336-1"},on:{click:e.clearIcon}}):e._e()]),a("view",{staticClass:"video-discription"},[a("view",{staticClass:"section title"},[e._v("Video discription")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.disription,expression:"disription"}],staticClass:"discription",attrs:{placeholder:" please enter video discription",value:e.inputClearValue,eventid:"a847c336-2"},domProps:{value:e.disription},on:{input:[function(t){t.target.composing||(e.disription=t.target.value)},e.clearInput]}}),e.showClearIcon?a("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"a847c336-3"},on:{click:e.clearIcon}}):e._e()]),a("view",{staticClass:"Choose-class"},[a("view",{staticClass:"uni-title uni-common-pl"},[e._v("video classification")]),a("view",{staticClass:"list-cell"},[a("view",{staticClass:"list-cell-left"},[e._v("class")]),a("view",{staticClass:"list-cell-picker"},[a("picker",{attrs:{value:e.index,range:e.array,eventid:"a847c336-4"},on:{change:e.bindPickerChange}},[a("view",{staticClass:"uni-input"},[e._v(e._s(e.array[e.index]))])])],1)])]),a("view",{staticClass:"locate-directory"},[a("view",{staticClass:"path"},[e._v(e._s(e.path))]),a("button",{attrs:{type:"primary",plain:"true",eventid:"a847c336-5"},on:{tap:e.findlocation}},[e._v("press me to locate")])],1),a("view",[a("button",{attrs:{type:"primary",eventid:"a847c336-6"},on:{tap:e.uploadvideo}},[e._v("页upload")])],1)])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},5576:function(e,t,a){"use strict";a.r(t);var i=a("2c1b"),n=a("aa71");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},"5afb":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{array:["Drama","Fantasy","Thriller","Comedy","Honor","Music"],index:0}},methods:{clearInput:function(e){this.inputClearValue=e.target.value,e.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},findlocation:function(){e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){path=e.tempFilePath}})},uploadvideo:function(){e.uploadFile({url:"",filePath:path,name:this.name,success:function(e){console.log(e.data)}})}}};t.default=a}).call(this,a("6e42")["default"])},9343:function(e,t,a){"use strict";a("fb50");var i=s(a("b0ce")),n=s(a("5576"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},aa71:function(e,t,a){"use strict";a.r(t);var i=a("5afb"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a}},[["9343","common/runtime","common/vendor"]]]);