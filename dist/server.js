"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.listen(process.env.PORT || 9000, () => {
    console.log(`Running on port: ${process.env.PORT || 9000}`)
});
