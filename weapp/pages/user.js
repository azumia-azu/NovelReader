"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  config: {},
  hooks: {// Page 级别 hook, 只对当前 Page 的 setData 生效。
  },
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    authed: false,
    userInfo: {}
  },
  computed: {},
  methods: {
    bindGetUserInfo: function bindGetUserInfo(e) {
      this.authed = true;
      this.userInfo = e.$wx.detail.userInfo;
    },
    getRecord: function getRecord() {
      wx.navigateTo({
        url: 'records'
      });
      console.log("获取观看记录");
    },
    getAbout: function getAbout() {
      wx.navigateTo({
        url: 'about'
      });
      console.log("获取关于");
    }
  },
  created: function created() {
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function success(res) {
              console.log(res.userInfo);
            }
          });
        }
      }
    });
  }
}, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'8-22': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'8-23': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getRecord()
      })();
    
  }},'8-24': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getAbout()
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'8-22': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }},'8-23': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getRecord()
      })();
    
  }},'8-24': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getAbout()
      })();
    
  }}}, models: {} });