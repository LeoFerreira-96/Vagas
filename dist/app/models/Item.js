"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const ItemSchema = new (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports. default = _mongoose2.default.model("Item", ItemSchema);
