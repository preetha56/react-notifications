"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--".concat(props.kind, " CTA"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};
var _default = exports.default = Button;