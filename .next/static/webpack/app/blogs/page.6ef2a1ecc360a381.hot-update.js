"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/page",{

/***/ "(app-pages-browser)/./app/components/add-new-blog/index.js":
/*!**********************************************!*\
  !*** ./app/components/add-new-blog/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction AddNewBlog(param) {\n    let { openBlogDialog, setOpenBlogDialog, loading, setLoading, blogFormData, setBlogFormData, handleSaveBlogData, currentEditedBlogId, setCurrentEditedBlogId } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-start items-start ml-4 mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    onClick: ()=>setOpenBlogDialog(true),\n                    children: \"Add New Blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                open: openBlogDialog,\n                onOpenChange: ()=>{\n                    setOpenBlogDialog(false);\n                    setBlogFormData({\n                        title: \"\",\n                        description: \"\"\n                    });\n                    setCurrentEditedBlogId(null);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                    className: \"w-fit \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                                        children: currentEditedBlogId ? \"Edit Blog\" : \"Add New Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 38\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                    children: [\n                                        \"Add new blog here.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this),\n                                        \"Click save when you're done.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    name: \"title\",\n                                    id: \"title\",\n                                    value: blogFormData.title,\n                                    onChange: (e)=>setBlogFormData({\n                                            ...blogFormData,\n                                            title: e.target.value\n                                        }),\n                                    placeholder: \"Enter blog tittle\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    name: \"description\",\n                                    id: \"description\",\n                                    value: blogFormData.description,\n                                    onChange: (e)=>setBlogFormData({\n                                            ...blogFormData,\n                                            description: e.target.value\n                                        }),\n                                    placeholder: \"Write Description\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: handleSaveBlogData,\n                            className: \"mt-2\",\n                            children: loading ? \"Saving Changes...\" : \"Save Changes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/add-new-blog/index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = AddNewBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNewBlog);\nvar _c;\n$RefreshReg$(_c, \"AddNewBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2FkZC1uZXctYmxvZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dEO0FBUWhCO0FBRWM7QUFFQTtBQUM5QyxTQUFTUSxXQUFXLEtBQXlKO1FBQXpKLEVBQUVDLGNBQWMsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFQyxzQkFBc0IsRUFBQyxHQUF6SjtJQUloQixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ25CLHlEQUFNQTtvQkFBQ29CLFNBQVMsSUFBTVYsa0JBQWtCOzhCQUFPOzs7Ozs7Ozs7OzswQkFFcEQsOERBQUNULHlEQUFNQTtnQkFBQ29CLE1BQU1aO2dCQUFnQmEsY0FBYztvQkFDeENaLGtCQUFrQjtvQkFDbEJJLGdCQUFnQjt3QkFDWlMsT0FBTzt3QkFDUEMsYUFBYTtvQkFDakI7b0JBQ0FQLHVCQUF1QjtnQkFDM0I7MEJBQ0ksNEVBQUNmLGdFQUFhQTtvQkFBQ2lCLFdBQVU7O3NDQUNyQiw4REFBQ2YsK0RBQVlBOzs4Q0FDVCw4REFBQ0MsOERBQVdBOzhDQUFDLDRFQUFDQyx1REFBS0E7a0RBQUVVLHNCQUFzQixjQUFjOzs7Ozs7Ozs7Ozs4Q0FDekQsOERBQUNiLG9FQUFpQkE7O3dDQUFDO3NEQUVmLDhEQUFDc0I7Ozs7O3dDQUFLOzs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNiLHVEQUFLQTs4Q0FBRTs7Ozs7OzhDQUNSLDhEQUFDQyx1REFBS0E7b0NBQUNtQixNQUFLO29DQUFRQyxJQUFHO29DQUFRQyxPQUFPZixhQUFhVSxLQUFLO29DQUFFTSxVQUFVLENBQUNDLElBQU1oQixnQkFBZ0I7NENBQUUsR0FBR0QsWUFBWTs0Q0FBRVUsT0FBT08sRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dDQUFDO29DQUFJSSxhQUFZOzs7Ozs7OENBQ3BKLDhEQUFDMUIsdURBQUtBOzhDQUFFOzs7Ozs7OENBQ1IsOERBQUNDLHVEQUFLQTtvQ0FBQ21CLE1BQUs7b0NBQWNDLElBQUc7b0NBQWNDLE9BQU9mLGFBQWFXLFdBQVc7b0NBQUVLLFVBQVUsQ0FBQ0MsSUFBTWhCLGdCQUFnQjs0Q0FBRSxHQUFHRCxZQUFZOzRDQUFFVyxhQUFhTSxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQUM7b0NBQUlJLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FFaEwsOERBQUNoQyx5REFBTUE7NEJBQUNvQixTQUFTTDs0QkFBb0JJLFdBQVU7c0NBRXZDUixVQUFVLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7S0F6Q1NIO0FBMkNULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2FkZC1uZXctYmxvZy9pbmRleC5qcz9kOGYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nLFxuICAgIERpYWxvZ0NvbnRlbnQsXG4gICAgRGlhbG9nRGVzY3JpcHRpb24sXG4gICAgRGlhbG9nSGVhZGVyLFxuICAgIERpYWxvZ1RpdGxlLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5mdW5jdGlvbiBBZGROZXdCbG9nKHsgb3BlbkJsb2dEaWFsb2csIHNldE9wZW5CbG9nRGlhbG9nLCBsb2FkaW5nLCBzZXRMb2FkaW5nLCBibG9nRm9ybURhdGEsIHNldEJsb2dGb3JtRGF0YSAsaGFuZGxlU2F2ZUJsb2dEYXRhLCBjdXJyZW50RWRpdGVkQmxvZ0lkLCBzZXRDdXJyZW50RWRpdGVkQmxvZ0lkfSkge1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBtbC00IG10LTVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5CbG9nRGlhbG9nKHRydWUpfT5BZGQgTmV3IEJsb2c8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVuQmxvZ0RpYWxvZ30gb25PcGVuQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0T3BlbkJsb2dEaWFsb2coZmFsc2UpXG4gICAgICAgICAgICAgICAgc2V0QmxvZ0Zvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRFZGl0ZWRCbG9nSWQobnVsbCk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJ3LWZpdCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT48TGFiZWw+e2N1cnJlbnRFZGl0ZWRCbG9nSWQgPyBcIkVkaXQgQmxvZ1wiIDogXCJBZGQgTmV3IEJsb2dcIn08L0xhYmVsPjwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBibG9nIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+Q2xpY2sgc2F2ZSB3aGVuIHlvdSdyZSBkb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5UaXRsZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPXtibG9nRm9ybURhdGEudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxvZ0Zvcm1EYXRhKHsgLi4uYmxvZ0Zvcm1EYXRhLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYmxvZyB0aXR0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXtibG9nRm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxvZ0Zvcm1EYXRhKHsgLi4uYmxvZ0Zvcm1EYXRhLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPVwiV3JpdGUgRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlQmxvZ0RhdGF9IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gXCJTYXZpbmcgQ2hhbmdlcy4uLlwiIDogXCJTYXZlIENoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3QmxvZzsiXSwibmFtZXMiOlsiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJMYWJlbCIsIklucHV0IiwiQWRkTmV3QmxvZyIsIm9wZW5CbG9nRGlhbG9nIiwic2V0T3BlbkJsb2dEaWFsb2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImJsb2dGb3JtRGF0YSIsInNldEJsb2dGb3JtRGF0YSIsImhhbmRsZVNhdmVCbG9nRGF0YSIsImN1cnJlbnRFZGl0ZWRCbG9nSWQiLCJzZXRDdXJyZW50RWRpdGVkQmxvZ0lkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnIiLCJuYW1lIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/add-new-blog/index.js\n"));

/***/ })

});