"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    books: [{
      imgUrl: "",
      title: "斗罗大陆",
      progress: "50%"
    }, {
      imgUrl: "",
      title: "斗破苍穹",
      progress: "25%"
    }, {
      imgUrl: "",
      title: "狼牙棒",
      progress: "10%"
    }]
  },
  computed: {},
  methods: {
    openReader: function openReader(book) {
      console.log(book);
    }
  }
}, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} }, {info: {"components":{"panel":{"path":"..\\components\\panel"}},"on":{}}, handlers: {'7-1': {"tap": function proxy (book) {
    
    var _vm=this;
      return (function () {
        _vm.openReader(book)
      })();
    
  }}}, models: {} });