(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-78c2"],{"/umX":function(e,t,n){"use strict";t.__esModule=!0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n("9dlP"));t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"5DLP":function(e,t,n){n("JnXs");var i=n("g24s").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},"9dlP":function(e,t,n){e.exports={default:n("5DLP"),__esModule:!0}},EBHr:function(e,t,n){e.exports=n.p+"static/img/lanya_duankai.a58de75.png"},JnXs:function(e,t,n){var i=n("Rx2n");i(i.S+i.F*!n("aQoo"),"Object",{defineProperty:n("TPTJ").f})},"KG5+":function(e,t,n){},Ltgm:function(e,t,n){e.exports=n.p+"static/img/homepage_logo.f9323e4.png"},"N/kD":function(e,t,n){"use strict";n.r(t);var i,o=n("/umX"),c=n.n(o),a=n("omC7"),s=n.n(a),l={name:"Index",data:function(){return{msg:"tt",statu:!1,systemInfo:null,blueToothInfo:null,registerInfo:null,uuid:{service:"0000AE00-0000-1000-8000-00805F9B34FB",write:"0000AE01-0000-1000-8000-00805F9B34FB",notification:"0000AE02-0000-1000-8000-00805F9B34FB"}}},created:function(){window.onBLEConnectionEventCallBack=function(e){window.onBLEConnectionEvent(e)},window.onValueChangeEventCallback=function(e){window.onValueChangeEvent(e)},window.onBluetoothDeviceFoundEventCallback=function(e){window.onBluetoothDeviceFoundEvent(e)},this.onBLECharacteristicValueChange(),this.onBLEConnectionStateChange()},mounted:function(){this.getSystemInfo()},methods:(i={linkto:function(e){this.$router.push({path:"/"+e})},getRegisteredDevice:function(){window.callback=this.getRegisteredDeviceCallBack,hilink.getCurrentRegisteredDevice("eventCallback")},getRegisteredDeviceCallBack:function(e){var t=JSON.parse(e);this.registerInfo=t;var n=window.hilink&&hilink.getStorageSync("blueToothInfo");n?(this.blueToothInfo=JSON.parse(n),this.createBLEConnection()):(this.blueToothInfo=this.registerInfo,this.createBLEConnection()),this.msg="startBluetooth:"+startBluetooth},notifyBLECharacteristicValueChange:function(){hilink.notifyBLECharacteristicValueChange(this.blueToothInfo.deviceId,this.uuid.service,this.uuid.write,!0)},createBLEConnection:function(){var e=this.blueToothInfo;if(e&&e.deviceId){var t={device_id:e.deviceId,uuid_service:this.uuid.service,uuid_write:this.uuid.write};hilink.setStorageSync("BleValue",s()(t)),hilink.setStorageSync("blueToothInfo",s()(e)),hilink.createBLEConnection(e.deviceId);var n=this;setTimeout(function(){n.writeBLECharacteristicValue()},1e3)}},getConnectedBluetoothDevices:function(){this.msg="getConnectedBluetoothDevices---service:"+this.uuid.service+" write:"+this.uuid.write+" notification:"+this.uuid.notification+"<br/>",window.callback=this.connectedBluetoothDevicesCallBack,window.hilink.getConnectedBluetoothDevices([this.uuid.service,this.uuid.write,this.uuid.notification],"eventCallback")},connectedBluetoothDevicesCallBack:function(e){this.msg="connectedBluetoothDevicesCallBack---"+e+"<br/>"},writeBLECharacteristicValue:function(){window.callback=this.writeBLEvalueCallBack;hilink.writeBLECharacteristicValue(this.blueToothInfo.deviceId,this.uuid.service,this.uuid.write,"0a01","eventCallback")},writeBLEvalueCallBack:function(e){this.msg="writeBLEvalueCallBack---"+e+"<br/>"},getSystemInfo:function(){window.callback=this.systemInfoCallBack,window.hilink.getSystemInfoSync("eventCallback")},systemInfoCallBack:function(e){var t=JSON.parse(e);this.systemInfo=t,this.msg="getSystemInfoSync---"+e+"<br/>",this.getRegisteredDevice()}},c()(i,"getConnectedBluetoothDevices",function(){window.callback=this.connectedBluetoothDevicesCallBack,hilink.getConnectedBluetoothDevices(this.uuid.service,"eventCallback")}),c()(i,"connectedBluetoothDevicesCallBack",function(e){this.msg="connectedDevice:--"+e}),c()(i,"onBLEConnectionStateChange",function(){window.onBLEConnectionEvent=this.onBLEConnectionStateCallBack;window.hilink.onBLEConnectionStateChange("onBLEConnectionEventCallBack")}),c()(i,"onBLEConnectionStateCallBack",function(e){var t=JSON.parse(e);this.statu=t.connected}),c()(i,"onBLECharacteristicValueChange",function(){window.onValueChangeEvent=this.onBLEValueChangeCallBack;var e=window.hilink.onBLECharacteristicValueChange("onValueChangeEventCallback");this.msg="onBLECharacteristicValueChange--"+e}),c()(i,"onBLEValueChangeCallBack",function(e){this.msg="onBLEValueChangeCallBack---"+e+"<br/>"}),c()(i,"onBluetoothDeviceFoundChange",function(){window.onBluetoothDeviceFoundEvent=this.onBluetoothDeviceFoundEvent;window.hilink.onBluetoothDeviceFound("onBluetoothDeviceFoundEventCallback")}),c()(i,"onBluetoothDeviceFoundEvent",function(e){var t=this,n=JSON.parse(e);"Android"==this.systemInfo.platform?(this.msg=this.registerInfo.deviceId+"----"+e,n[0].localName==this.registerInfo.deviceId&&(hilink.stopBluetoothDevicesDiscovery(),this.msg="stop----"+e),n.forEach(function(n){t.msg=n.localName+"----"+e,n.localName==t.registerInfo.deviceId&&(hilink.stopBluetoothDevicesDiscovery(),t.blueToothInfo=n,t.msg="onBluetoothDevice---"+e+"<br/>",t.createBLEConnection())})):systemInfo&&"iOS"==systemInfo.platform&&n.localName==this.registerInfo.deviceId&&(hilink.stopBluetoothDevicesDiscovery(),this.blueToothInfo=n,this.msg="onBluetoothDevice---"+e+"<br/>",this.createBLEConnection())}),i)},u=(n("l/9x"),n("XEJJ"),n("ZrdR")),r=Object(u.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index-container"},[i("div",{staticClass:"header"},[e.statu?e._e():i("img",{staticClass:"lose",attrs:{src:n("EBHr")},on:{touchend:function(t){e.getRegisteredDevice()}}}),e._v(" "),e.statu?i("img",{staticClass:"logo",attrs:{src:n("Ltgm")}}):e._e()]),e._v(" "),i("div",{staticClass:"index-bg"},[e._e(),e._v(" "),i("div",{staticClass:"index-container-rows"},[i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-programming",on:{click:function(t){e.linkto("programming")}}})]),e._v(" "),i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-feed",on:{click:function(t){e.linkto("feed")}}})]),e._v(" "),i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-walk",on:{click:function(t){e.linkto("walk")}}})])]),e._v(" "),i("div",{staticClass:"index-container-rows"},[i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-action",on:{click:function(t){e.linkto("action")}}})]),e._v(" "),i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-rhythm",on:{click:function(t){e.linkto("rhythm")}}})]),e._v(" "),i("div",{staticClass:"index-container-cell"},[i("span",{staticClass:"indexMenu indexMenu-set",on:{click:function(t){e.linkto("set")}}})])])])])},[],!1,null,"56d4e1b1",null);r.options.__file="index.vue";t.default=r.exports},P02L:function(e,t,n){},Wret:function(e,t,n){var i=n("g24s"),o=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},XEJJ:function(e,t,n){"use strict";var i=n("P02L");n.n(i).a},"l/9x":function(e,t,n){"use strict";var i=n("KG5+");n.n(i).a},omC7:function(e,t,n){e.exports={default:n("Wret"),__esModule:!0}}}]);