"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
_mongoose2.default.Promise = global.Promise
exports. default = _mongoose2.default.connect('mongodb+srv://theuniverse:123mudar@cluster0.urxyk.mongodb.net/theuniverse?retryWrites=true&w=majority', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})

