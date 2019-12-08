"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    firstSHow: true,
    searchBookName: null,
    books: []
  },
  created: function created() {
    var book = [{
      id: '1',
      imgUrl: "",
      title: "斗罗大陆",
      progress: "50%"
    }, {
      id: '2',
      imgUrl: "",
      title: "斗破苍穹",
      progress: "25%"
    }, {
      id: '3',
      imgUrl: "",
      title: "狼牙棒",
      progress: "10%"
    }];
    wx.setStorage({
      key: 'shelf',
      data: book
    });
    this.books = book.slice(0);
    this.firstShow = false;
    wx.request({
      url: '192.168.1.107:7889/booklist',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值

      },
      success: function success(res) {
        console.log(res);
      }
    });
  },
  onShow: function onShow() {
    var _this = this;

    if (!this.firstShow) {
      wx.getStorage({
        key: 'shelf',
        success: function success(result) {
          _this.books = result.data;
        }
      });
    }
  },
  methods: {
    openReader: function openReader(e) {
      var id = e.currentTarget.id;
      var book = {};

      for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].id === id) {
          book = this.books[i];
          break;
        }
      }

      wx.navigateTo({
        url: 'reader?' + 'id=' + book.id + '&' + 'progress=' + book.progress
      });
    },
    searchBook: function searchBook() {
      console.log("监听到搜索");
      /*
      wepy.request({
        url: 'url', //开发者服务器接口地址",
        data: 'data', //请求的参数",
        method: ' POST',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          if(res.length > 0)  this.books = res;
          else{
            Dialog.confirm({
              message: '无此记录'
            }).then(() => {
              instance.close();
            });
          }
        },
      });*/
    },
    cancelSearchBook: function cancelSearchBook() {
      console.log("监听到搜索取消");
      /*
      wepy.request({
        url: 'url', //开发者服务器接口地址",
        data: 'data', //请求的参数",
        method: ' POST',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          if(res.length > 0)  this.books = res;
          else{
            Dialog.confirm({
              message: '无此记录'
            }).then(() => {
              instance.close();
            });
          }
        },
      });
       this.searchBookName = null;
      */
    },
    deleteBook: function deleteBook(e) {
      //console.log('监听到长按事件');
      var id = e.currentTarget.id; //console.log(e);

      var books_copy = [];

      for (var i = 0; i < this.books.length; i++) {
        if (id === this.books[i].id) continue;
        books_copy.push(this.books[i]);
      } //console.log(books_copy);


      this.books = books_copy.slice(0);
    },
    touchStart: function touchStart(e) {
      console.log();
    },
    touchEnd: function touchEnd(e) {
      console.log(e);
    }
  }
}, {info: {"components":{"van-search":{"path":"..\\components\\dist\\search\\index"},"van-cell":{"path":"..\\components\\dist\\cell\\index"},"van-cell-group":{"path":"..\\components\\dist\\cell-group\\index"},"van-row":{"path":"..\\components\\dist\\row\\index"},"van-col":{"path":"..\\components\\dist\\col\\index"},"van-swipe-cell":{"path":"..\\components\\dist\\swipe-cell\\index"}},"on":{"4-0":["search","cancel"],"4-2":["tap","touchStart","touchEnd","longtap"]}}, handlers: {'4-0': {"search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.searchBook($event)
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancelSearchBook($event)
      })();
    
  }},'4-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.openReader($event)
      })();
    
  }, "touchStart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchStart($event)
      })();
    
  }, "touchEnd": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchEnd($event)
      })();
    
  }, "longtap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deleteBook($event)
      })();
    
  }}}, models: {} });