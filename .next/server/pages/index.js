/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/forms/FindMultisigForm.js":
/*!**********************************************!*\
  !*** ./components/forms/FindMultisigForm.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inputs_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/Button */ \"./components/inputs/Button.js\");\n/* harmony import */ var _layout_StackableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/StackableContainer */ \"./components/layout/StackableContainer.js\");\n/* harmony import */ var _inputs_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inputs/Input */ \"./components/inputs/Input.js\");\nvar _jsxFileName = \"/home/nguyenthevinh/Documents/BATMAN/Blockchain/notional/dig-wallet-web/components/forms/FindMultisigForm.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass FindMultisigForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleSearch\", async () => {\n      this.setState({\n        processing: true\n      });\n      this.props.router.push(`/multi/${this.state.address}`);\n    });\n\n    this.state = {\n      address: \"\",\n      keyError: \"\",\n      processing: false\n    };\n  }\n\n  render() {\n    return __jsx(_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_5__.default, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_5__.default, {\n      lessPadding: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, __jsx(\"p\", {\n      className: \"jsx-2077039528\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, \"Already have a dig address? Enter it below. If it\\u2019s a valid address, you will be able to view its transactions and add dig-chain to keplr wallet\")), __jsx(_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_5__.default, {\n      lessPadding: true,\n      lessMargin: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, __jsx(_inputs_Input__WEBPACK_IMPORTED_MODULE_6__.default, {\n      onChange: this.handleChange,\n      value: this.state.address,\n      label: \"Dig Address\",\n      name: \"address\",\n      placeholder: \"dig1vqpjljwsynsn58dugz0w8ut7kun7t8ls2qkmsq\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }), __jsx(_inputs_Button__WEBPACK_IMPORTED_MODULE_4__.default, {\n      label: \"Use this Address\",\n      onClick: this.handleSearch,\n      primary: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    })), __jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"2077039528\",\n      __self: this,\n      __source: void 0\n    }, \".multisig-form.jsx-2077039528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.error.jsx-2077039528{color:coral;font-size:0.8em;text-align:left;margin:0.5em 0;}.create-help.jsx-2077039528{text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25ndXllbnRoZXZpbmgvRG9jdW1lbnRzL0JBVE1BTi9CbG9ja2NoYWluL25vdGlvbmFsL2RpZy13YWxsZXQtd2ViL2NvbXBvbmVudHMvZm9ybXMvRmluZE11bHRpc2lnRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CLEFBRzBCLEFBS0QsQUFNTSxZQUxGLE1BTWxCLFVBTGtCLGdCQUNELGVBQ2pCLGVBUndCLDhFQUNILDZGQUNyQiIsImZpbGUiOiIvaG9tZS9uZ3V5ZW50aGV2aW5oL0RvY3VtZW50cy9CQVRNQU4vQmxvY2tjaGFpbi9ub3Rpb25hbC9kaWctd2FsbGV0LXdlYi9jb21wb25lbnRzL2Zvcm1zL0ZpbmRNdWx0aXNpZ0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2lucHV0cy9CdXR0b25cIjtcbmltcG9ydCBTdGFja2FibGVDb250YWluZXIgZnJvbSBcIi4uL2xheW91dC9TdGFja2FibGVDb250YWluZXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRzL0lucHV0XCI7XG5cbmNsYXNzIEZpbmRNdWx0aXNpZ0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAga2V5RXJyb3I6IFwiXCIsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChgL211bHRpLyR7dGhpcy5zdGF0ZS5hZGRyZXNzfWApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrYWJsZUNvbnRhaW5lciBsZXNzUGFkZGluZz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYSBkaWcgYWRkcmVzcz8gRW50ZXIgaXQgYmVsb3cuIElmIGl04oCZcyBhIHZhbGlkIGFkZHJlc3MsIHlvdSB3aWxsIGJlIGFibGUgdG8gdmlldyBpdHMgdHJhbnNhY3Rpb25zIGFuZCBhZGQgZGlnLWNoYWluIHRvIGtlcGxyIHdhbGxldFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9TdGFja2FibGVDb250YWluZXI+XG4gICAgICAgIDxTdGFja2FibGVDb250YWluZXIgbGVzc1BhZGRpbmcgbGVzc01hcmdpbj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XG4gICAgICAgICAgICBsYWJlbD1cIkRpZyBBZGRyZXNzXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGlnMXZxcGpsandzeW5zbjU4ZHVnejB3OHV0N2t1bjd0OGxzMnFrbXNxXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPVwiVXNlIHRoaXMgQWRkcmVzc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tdWx0aXNpZy1mb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3JlYXRlLWhlbHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9TdGFja2FibGVDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZpbmRNdWx0aXNpZ0Zvcm0pO1xuIl19 */\\n/*@ sourceURL=/home/nguyenthevinh/Documents/BATMAN/Blockchain/notional/dig-wallet-web/components/forms/FindMultisigForm.js */\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(FindMultisigForm));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtbmV4dC1leGFtcGxlLWFwcC8uL2NvbXBvbmVudHMvZm9ybXMvRmluZE11bHRpc2lnRm9ybS5qcz9iNTM4Il0sIm5hbWVzIjpbIkZpbmRNdWx0aXNpZ0Zvcm0iLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcm9jZXNzaW5nIiwicm91dGVyIiwicHVzaCIsInN0YXRlIiwiYWRkcmVzcyIsImtleUVycm9yIiwicmVuZGVyIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGdCQUFOLFNBQStCQyx3REFBL0IsQ0FBK0M7QUFDN0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDBDQVVIQyxDQUFELElBQU87QUFDcEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1osU0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQVYsR0FBaUJILENBQUMsQ0FBQ0UsTUFBRixDQUFTRTtBQURkLE9BQWQ7QUFHRCxLQWRrQjs7QUFBQSwwQ0FnQkosWUFBWTtBQUN6QixXQUFLSCxRQUFMLENBQWM7QUFBRUksa0JBQVUsRUFBRTtBQUFkLE9BQWQ7QUFFQSxXQUFLTixLQUFMLENBQVdPLE1BQVgsQ0FBa0JDLElBQWxCLENBQXdCLFVBQVMsS0FBS0MsS0FBTCxDQUFXQyxPQUFRLEVBQXBEO0FBQ0QsS0FwQmtCOztBQUdqQixTQUFLRCxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFLEVBREU7QUFFWEMsY0FBUSxFQUFFLEVBRkM7QUFHWEwsZ0JBQVUsRUFBRTtBQUhELEtBQWI7QUFLRDs7QUFjRE0sUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQW9CLGlCQUFXLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBREYsQ0FERixFQU1FLE1BQUMsK0RBQUQ7QUFBb0IsaUJBQVcsTUFBL0I7QUFBZ0MsZ0JBQVUsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFDRSxjQUFRLEVBQUUsS0FBS0MsWUFEakI7QUFFRSxXQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxPQUZwQjtBQUdFLFdBQUssRUFBQyxhQUhSO0FBSUUsVUFBSSxFQUFDLFNBSlA7QUFLRSxpQkFBVyxFQUFDLDRDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVFFLE1BQUMsbURBQUQ7QUFDRSxXQUFLLEVBQUMsa0JBRFI7QUFFRSxhQUFPLEVBQUUsS0FBS0ksWUFGaEI7QUFHRSxhQUFPLE1BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3ckhBREY7QUF1Q0Q7O0FBL0Q0Qzs7QUFrRS9DLCtEQUFlQyx1REFBVSxDQUFDbEIsZ0JBQUQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL0ZpbmRNdWx0aXNpZ0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2lucHV0cy9CdXR0b25cIjtcbmltcG9ydCBTdGFja2FibGVDb250YWluZXIgZnJvbSBcIi4uL2xheW91dC9TdGFja2FibGVDb250YWluZXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRzL0lucHV0XCI7XG5cbmNsYXNzIEZpbmRNdWx0aXNpZ0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAga2V5RXJyb3I6IFwiXCIsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChgL211bHRpLyR7dGhpcy5zdGF0ZS5hZGRyZXNzfWApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrYWJsZUNvbnRhaW5lciBsZXNzUGFkZGluZz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYSBkaWcgYWRkcmVzcz8gRW50ZXIgaXQgYmVsb3cuIElmIGl04oCZcyBhIHZhbGlkIGFkZHJlc3MsIHlvdSB3aWxsIGJlIGFibGUgdG8gdmlldyBpdHMgdHJhbnNhY3Rpb25zIGFuZCBhZGQgZGlnLWNoYWluIHRvIGtlcGxyIHdhbGxldFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9TdGFja2FibGVDb250YWluZXI+XG4gICAgICAgIDxTdGFja2FibGVDb250YWluZXIgbGVzc1BhZGRpbmcgbGVzc01hcmdpbj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XG4gICAgICAgICAgICBsYWJlbD1cIkRpZyBBZGRyZXNzXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGlnMXZxcGpsandzeW5zbjU4ZHVnejB3OHV0N2t1bjd0OGxzMnFrbXNxXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPVwiVXNlIHRoaXMgQWRkcmVzc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tdWx0aXNpZy1mb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3JlYXRlLWhlbHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9TdGFja2FibGVDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZpbmRNdWx0aXNpZ0Zvcm0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/FindMultisigForm.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_FindMultisigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/FindMultisigForm */ \"./components/forms/FindMultisigForm.js\");\n/* harmony import */ var _components_layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Page */ \"./components/layout/Page.js\");\n/* harmony import */ var _components_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/StackableContainer */ \"./components/layout/StackableContainer.js\");\nvar _jsxFileName = \"/home/nguyenthevinh/Documents/BATMAN/Blockchain/notional/dig-wallet-web/pages/index.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(_components_layout_Page__WEBPACK_IMPORTED_MODULE_2__.default, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(_components_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n  base: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(_components_layout_StackableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n  lessPadding: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}, __jsx(\"h1\", {\n  className: \"title\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, \"DIG query\")), __jsx(_components_forms_FindMultisigForm__WEBPACK_IMPORTED_MODULE_1__.default, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtbmV4dC1leGFtcGxlLWFwcC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsK0RBQWUsTUFDYixNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLDBFQUFEO0FBQW9CLE1BQUksTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMEVBQUQ7QUFBb0IsYUFBVyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpKLENBREYsQ0FERiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbmRNdWx0aXNpZ0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvRmluZE11bHRpc2lnRm9ybVwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2VcIjtcbmltcG9ydCBTdGFja2FibGVDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1N0YWNrYWJsZUNvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlPlxuICAgIDxTdGFja2FibGVDb250YWluZXIgYmFzZT5cbiAgICAgIDxTdGFja2FibGVDb250YWluZXIgbGVzc1BhZGRpbmc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRJRyBxdWVyeTwvaDE+XG4gICAgICA8L1N0YWNrYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPEZpbmRNdWx0aXNpZ0Zvcm0gLz5cbiAgICA8L1N0YWNrYWJsZUNvbnRhaW5lcj5cbiAgPC9QYWdlPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_inputs_Button_js-components_inputs_Input_js-components_layout_Page_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();