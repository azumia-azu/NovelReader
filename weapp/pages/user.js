"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _dialog = _interopRequireDefault(require('../components/dist/dialog/dialog.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    userInfo: {
      nickName: '',
      country: '',
      province: '',
      city: ''
    },
    icons: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575806557473&di=a25523fc94a9fc89cf9d150aaacec9ae&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F41%2F19%2F59c2ffdc21eec_610.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575737567704&di=540bf74c48a2c4a3f015d85520d08661&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2015%2F0806%2F20150806050310138.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575806745442&di=2c367e8ff21ada929c7c4e3c5d205256&imgtype=0&src=http%3A%2F%2Fis2.mzstatic.com%2Fimage%2Fthumb%2FPurple111%2Fv4%2F30%2Fa3%2F4f%2F30a34fe6-496a-2f5e-b538-980e9d1282c6%2Fsource%2F512x512bb.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575806797092&di=3a87dcf6f27e760701e75469500e1ad9&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F84%2F75574739874192a.jpg"]
  },
  methods: {
    getRecord: function getRecord() {
      wx.navigateTo({
        url: 'records'
      });
      console.log("获取观看记录");
    },
    getAbout: function getAbout() {
      _dialog["default"].confirm({
        title: '开发者邮箱',
        message: '这是我的邮箱676667544@qq.com，有问题请发邮件'
      }).then({});
    }
  },
  created: function created() {
    this.userInfo = getApp().$wepy.$options.globalData.userInfo;
  }
}, {info: {"components":{"van-button":{"path":"..\\components\\dist\\button\\index"},"van-cell":{"path":"..\\components\\dist\\cell\\index"},"van-cell-group":{"path":"..\\components\\dist\\cell-group\\index"},"van-icon":{"path":"..\\components\\dist\\icon\\index"},"van-row":{"path":"..\\components\\dist\\row\\index"},"van-col":{"path":"..\\components\\dist\\col\\index"},"action-sheet":{"path":"..\\components\\dist\\action-sheet\\index"},"van-grid":{"path":"..\\components\\dist\\grid\\index"},"van-grid-item":{"path":"..\\components\\dist\\grid-item\\index"},"van-dialog":{"path":"..\\components\\dist\\dialog\\index"},"van-popup":{"path":"..\\components\\dist\\popup\\index"}},"on":{"5-0":["tap"],"5-1":["tap"]}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getRecord()
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getAbout()
      })();
    
  }}}, models: {} });