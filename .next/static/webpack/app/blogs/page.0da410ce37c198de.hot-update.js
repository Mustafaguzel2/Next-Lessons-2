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

/***/ "(app-pages-browser)/./app/components/blog-overviews/index.js":
/*!************************************************!*\
  !*** ./app/components/blog-overviews/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_new_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-new-blog */ \"(app-pages-browser)/./app/components/add-new-blog/index.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst initialBlogFormData = {\n    title: \"\",\n    description: \"\"\n};\nfunction BlogOverviews(param) {\n    let { blogList } = param;\n    _s();\n    const [openBlogDialog, setOpenBlogDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [blogFormData, setBlogFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBlogFormData);\n    const [currentEditedBlogId, setCurrentEditedBlogId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(blogFormData);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.refresh();\n    }, []);\n    async function handleDeleteBlogByID(getCurrentID) {\n        try {\n            const apiResponse = await fetch(\"/api/delete-blog?id=\".concat(getCurrentID), {\n                method: \"DELETE\"\n            });\n            const result = await apiResponse.json();\n            if (result === null || result === void 0 ? void 0 : result.success) router.refresh();\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async function handleSaveBlogData() {\n        try {\n            setLoading(true);\n            const apiResponse = await fetch(\"/api/add-blog\", {\n                method: \"POST\",\n                body: JSON.stringify(blogFormData)\n            });\n            const result = await apiResponse.json();\n            if (result.success) {\n                setOpenBlogDialog(false);\n                setBlogFormData(initialBlogFormData);\n                setLoading(false);\n                router.refresh();\n            }\n        } catch (error) {\n            console.log(error);\n            setLoading(false);\n            setOpenBlogDialog(initialBlogFormData);\n        }\n    }\n    async function handleEdit(getCurrentBlog) {\n        setCurrentEditedBlogId(getCurrentBlog === null || getCurrentBlog === void 0 ? void 0 : getCurrentBlog._id);\n        setBlogFormData({\n            title: getCurrentBlog === null || getCurrentBlog === void 0 ? void 0 : getCurrentBlog.title,\n            description: getCurrentBlog === null || getCurrentBlog === void 0 ? void 0 : getCurrentBlog.description\n        });\n        setOpenBlogDialog(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_add_new_blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"w-fit\",\n                openBlogDialog: openBlogDialog,\n                setOpenBlogDialog: setOpenBlogDialog,\n                loading: loading,\n                setLoading: setLoading,\n                blogFormData: blogFormData,\n                setBlogFormData: setBlogFormData,\n                handleSaveBlogData: handleSaveBlogData,\n                currentEditedBlogId: currentEditedBlogId,\n                setCurrentEditedBlogId: setCurrentEditedBlogId\n            }, void 0, false, {\n                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4\",\n                children: blogList && blogList.length > 0 ? blogList.map((blog)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-none w-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                            className: \"hover:-translate-y-3 ease-in-out duration-500 shadow-md shadow-black overflow-hidden p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                                        children: blog.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 41\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardDescription, {\n                                        children: blog.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 41\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                                    className: \"text-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                onClick: ()=>handleEdit(blog),\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                onClick: ()=>handleDeleteBlogByID(blog._id),\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                            lineNumber: 101,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 32\n                    }, this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-4xl font-extrabold\",\n                    children: \"No blog found\"\n                }, void 0, false, {\n                    fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                    lineNumber: 118,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mustafayigitguzel/Desktop/next.js/third-next-lesson/app/components/blog-overviews/index.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(BlogOverviews, \"KGaU316a5SvYKoCZ8noEop8LKW8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BlogOverviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogOverviews);\nvar _c;\n$RefreshReg$(_c, \"BlogOverviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Jsb2ctb3ZlcnZpZXdzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDSDtBQUNPO0FBQ0o7QUFTYjtBQUkvQixNQUFNVyxzQkFBc0I7SUFDeEJDLE9BQU87SUFDUEMsYUFBYTtBQUNqQjtBQUVBLFNBQVNDLGNBQWMsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWOztJQUVuQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDVTtJQUNqRCxNQUFLLENBQUNXLHFCQUFxQkMsdUJBQXVCLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUU5RHVCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixNQUFNTSxTQUFTdEIsMERBQVNBO0lBQ3hCSixnREFBU0EsQ0FBQztRQUNOMEIsT0FBT0MsT0FBTztJQUNsQixHQUFHLEVBQUU7SUFFTCxlQUFlQyxxQkFBcUJDLFlBQVk7UUFDNUMsSUFBRztZQUNDLE1BQU1DLGNBQWMsTUFBTUMsTUFBTSx1QkFBb0MsT0FBYkYsZUFBZ0I7Z0JBQ25FRyxRQUFRO1lBQ1o7WUFDQSxNQUFNQyxTQUFTLE1BQU1ILFlBQVlJLElBQUk7WUFFckMsSUFBR0QsbUJBQUFBLDZCQUFBQSxPQUFRRSxPQUFPLEVBQUVULE9BQU9DLE9BQU87UUFFdEMsRUFBQyxPQUFNUyxPQUFNO1lBQ1RaLFFBQVFDLEdBQUcsQ0FBQ1c7UUFDaEI7SUFDSjtJQUNBLGVBQWVDO1FBQ1gsSUFBSTtZQUNBbEIsV0FBVztZQUNYLE1BQU1XLGNBQWMsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzdDQyxRQUFRO2dCQUNSTSxNQUFNQyxLQUFLQyxTQUFTLENBQUNwQjtZQUN6QjtZQUNBLE1BQU1hLFNBQVMsTUFBTUgsWUFBWUksSUFBSTtZQUNyQyxJQUFHRCxPQUFPRSxPQUFPLEVBQUU7Z0JBQ2ZsQixrQkFBa0I7Z0JBQ2xCSSxnQkFBZ0JWO2dCQUNoQlEsV0FBVztnQkFDWE8sT0FBT0MsT0FBTztZQUNsQjtRQUNKLEVBQUUsT0FBT1MsT0FBTztZQUNaWixRQUFRQyxHQUFHLENBQUNXO1lBQ1pqQixXQUFXO1lBQ1hGLGtCQUFrQk47UUFDdEI7SUFDSjtJQUVBLGVBQWU4QixXQUFXQyxjQUFjO1FBQ3BDbkIsdUJBQXVCbUIsMkJBQUFBLHFDQUFBQSxlQUFnQkMsR0FBRztRQUMxQ3RCLGdCQUFnQjtZQUNaVCxLQUFLLEVBQUU4QiwyQkFBQUEscUNBQUFBLGVBQWdCOUIsS0FBSztZQUM1QkMsV0FBVyxFQUFFNkIsMkJBQUFBLHFDQUFBQSxlQUFnQjdCLFdBQVc7UUFDNUM7UUFDQUksa0JBQWtCO0lBQ3RCO0lBRUEscUJBQ0ksOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQzNDLHFEQUFVQTtnQkFDUDJDLFdBQVU7Z0JBQ1Y3QixnQkFBZ0JBO2dCQUNoQkMsbUJBQW1CQTtnQkFDbkJDLFNBQVNBO2dCQUNUQyxZQUFZQTtnQkFDWkMsY0FBY0E7Z0JBQ2RDLGlCQUFpQkE7Z0JBQ2pCZ0Isb0JBQW9CQTtnQkFDcEJmLHFCQUFxQkE7Z0JBQ3JCQyx3QkFBd0JBOzs7Ozs7MEJBRzVCLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBRVA5QixZQUFZQSxTQUFTK0IsTUFBTSxHQUFHLElBQzlCL0IsU0FBU2dDLEdBQUcsQ0FBQyxDQUFDQztvQkFDVixxQkFBTyw4REFBQ0M7d0JBQUdKLFdBQVU7a0NBQ2IsNEVBQUN4QyxxREFBSUE7NEJBQUN3QyxXQUFVOzs4Q0FDWiw4REFBQ3BDLDJEQUFVQTs4Q0FDUCw0RUFBQ0MsMERBQVNBO2tEQUFFc0MsS0FBS3BDLEtBQUs7Ozs7Ozs7Ozs7OzhDQUUxQiw4REFBQ04sNERBQVdBOzhDQUNSLDRFQUFDQyxnRUFBZUE7a0RBQUV5QyxLQUFLbkMsV0FBVzs7Ozs7Ozs7Ozs7OENBRXRDLDhEQUFDTCwyREFBVUE7b0NBQUNxQyxXQUFVOzhDQUN0Qiw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDMUMseURBQU1BO2dEQUFDK0MsU0FBUyxJQUFNVCxXQUFXTzswREFBUTs7Ozs7OzBEQUMxQyw4REFBQzdDLHlEQUFNQTtnREFBQytDLFNBQVMsSUFBTXRCLHFCQUFxQm9CLEtBQUtMLEdBQUc7MERBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBSzVFLG1CQUVBLDhEQUFDUTtvQkFBRU4sV0FBVTs4QkFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZFO0dBcEdTL0I7O1FBU1VWLHNEQUFTQTs7O0tBVG5CVTtBQXNHVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ibG9nLW92ZXJ2aWV3cy9pbmRleC5qcz83MWNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFkZE5ld0Jsb2cgZnJvbSBcIi4uL2FkZC1uZXctYmxvZ1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW1wb3J0IHtcbiAgICBDYXJkLFxuICAgIENhcmRDb250ZW50LFxuICAgIENhcmREZXNjcmlwdGlvbixcbiAgICBDYXJkRm9vdGVyLFxuICAgIENhcmRIZWFkZXIsXG4gICAgQ2FyZFRpdGxlLFxuICB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXG5cbiAgXG5cbmNvbnN0IGluaXRpYWxCbG9nRm9ybURhdGEgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG59XG5cbmZ1bmN0aW9uIEJsb2dPdmVydmlld3Moe2Jsb2dMaXN0fSkge1xuXG4gICAgY29uc3QgW29wZW5CbG9nRGlhbG9nLCBzZXRPcGVuQmxvZ0RpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xvYWRpbmcgLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtibG9nRm9ybURhdGEsIHNldEJsb2dGb3JtRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsQmxvZ0Zvcm1EYXRhKTtcbiAgICBjb25zdFtjdXJyZW50RWRpdGVkQmxvZ0lkLCBzZXRDdXJyZW50RWRpdGVkQmxvZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc29sZS5sb2coYmxvZ0Zvcm1EYXRhKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQmxvZ0J5SUQoZ2V0Q3VycmVudElEKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVsZXRlLWJsb2c/aWQ9JHtnZXRDdXJyZW50SUR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZihyZXN1bHQ/LnN1Y2Nlc3MpIHJvdXRlci5yZWZyZXNoKCk7XG5cbiAgICAgICAgfWNhdGNoKGVycm9yKXsgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNhdmVCbG9nRGF0YSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRkLWJsb2cnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmxvZ0Zvcm1EYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2V0T3BlbkJsb2dEaWFsb2coZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEJsb2dGb3JtRGF0YShpbml0aWFsQmxvZ0Zvcm1EYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRPcGVuQmxvZ0RpYWxvZyhpbml0aWFsQmxvZ0Zvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUVkaXQoZ2V0Q3VycmVudEJsb2cpIHtcbiAgICAgICAgc2V0Q3VycmVudEVkaXRlZEJsb2dJZChnZXRDdXJyZW50QmxvZz8uX2lkKTtcbiAgICAgICAgc2V0QmxvZ0Zvcm1EYXRhKHtcbiAgICAgICAgICAgIHRpdGxlOiBnZXRDdXJyZW50QmxvZz8udGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZ2V0Q3VycmVudEJsb2c/LmRlc2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRPcGVuQmxvZ0RpYWxvZyh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHRvLWJsdWUtNTAwIHAtNCBcIj5cbiAgICAgICAgICAgIDxBZGROZXdCbG9nIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0XCJcbiAgICAgICAgICAgICAgICBvcGVuQmxvZ0RpYWxvZz17b3BlbkJsb2dEaWFsb2d9IFxuICAgICAgICAgICAgICAgIHNldE9wZW5CbG9nRGlhbG9nPXtzZXRPcGVuQmxvZ0RpYWxvZ30gXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ30gXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gXG4gICAgICAgICAgICAgICAgYmxvZ0Zvcm1EYXRhPXtibG9nRm9ybURhdGF9IFxuICAgICAgICAgICAgICAgIHNldEJsb2dGb3JtRGF0YT17c2V0QmxvZ0Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgIGhhbmRsZVNhdmVCbG9nRGF0YT17aGFuZGxlU2F2ZUJsb2dEYXRhfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRFZGl0ZWRCbG9nSWQ9e2N1cnJlbnRFZGl0ZWRCbG9nSWR9XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEVkaXRlZEJsb2dJZD17c2V0Q3VycmVudEVkaXRlZEJsb2dJZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNCBwLTRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2dMaXN0ICYmIGJsb2dMaXN0Lmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICBibG9nTGlzdC5tYXAoKGJsb2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwibGlzdC1ub25lIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvdmVyOi10cmFuc2xhdGUteS0zIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMCBzaGFkb3ctbWQgc2hhZG93LWJsYWNrIG92ZXJmbG93LWhpZGRlbiBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e2Jsb2cudGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj57YmxvZy5kZXNjcmlwdGlvbn08L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoYmxvZykgfT5FZGl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVCbG9nQnlJRChibG9nLl9pZCkgfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtZXh0cmFib2xkXCI+Tm8gYmxvZyBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nT3ZlcnZpZXdzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFkZE5ld0Jsb2ciLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsImluaXRpYWxCbG9nRm9ybURhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQmxvZ092ZXJ2aWV3cyIsImJsb2dMaXN0Iiwib3BlbkJsb2dEaWFsb2ciLCJzZXRPcGVuQmxvZ0RpYWxvZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYmxvZ0Zvcm1EYXRhIiwic2V0QmxvZ0Zvcm1EYXRhIiwiY3VycmVudEVkaXRlZEJsb2dJZCIsInNldEN1cnJlbnRFZGl0ZWRCbG9nSWQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicmVmcmVzaCIsImhhbmRsZURlbGV0ZUJsb2dCeUlEIiwiZ2V0Q3VycmVudElEIiwiYXBpUmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsInJlc3VsdCIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVTYXZlQmxvZ0RhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUVkaXQiLCJnZXRDdXJyZW50QmxvZyIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsImJsb2ciLCJsaSIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/blog-overviews/index.js\n"));

/***/ })

});