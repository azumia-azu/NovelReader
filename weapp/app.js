"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _x = _interopRequireDefault(require('vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  onLaunch: function onLaunch() {
    var _this = this;

    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
        //wx.setStorageSync('code', res.code);
        //console.log(wx.getStorageSync('code'))
        // 获取用户信息
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: function success(res) {
                  console.log(res); // 可以将 res 发送给后台解码出 unionId
                  //console.log(getApp());

                  getApp().$wepy.$options.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况

                  if (_this.userInfoReadyCallback) _this.userInfoReadyCallback(res);
                }
              });
            }
          }
        });
      }
    });
  },
  methods: {
    userInfoReadyCallback: function userInfoReadyCallback(res) {//console.log('user info: ', res.userInfo);
    }
  },
  globalData: {
    userInfo: {}
  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });