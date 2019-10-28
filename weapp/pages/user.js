"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {},
  hooks: {// Page 级别 hook, 只对当前 Page 的 setData 生效。
  },
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
  methods: {},
  created: function created() {}
}, {info: {"components":{"list":{"path":"..\\components\\wepy-list"},"group":{"path":"..\\components\\group"},"panel":{"path":"..\\components\\panel"},"counter":{"path":"..\\components\\counter"},"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {}, models: {} });