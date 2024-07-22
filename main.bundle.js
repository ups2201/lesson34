/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Action.ts":
/*!***********************!*\
  !*** ./src/Action.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionType: () => (/* binding */ ActionType)\n/* harmony export */ });\nlet ActionType = /*#__PURE__*/function (ActionType) {\n  ActionType[\"SHOW_MESSAGES\"] = \"SHOW_MESSAGES\";\n  ActionType[\"SHOW_NEW_MESSAGE\"] = \"SHOW_NEW_MESSAGE\";\n  ActionType[\"SEND_MESSAGE\"] = \"SEND_MESSAGE\";\n  ActionType[\"DELETE_MESSAGE\"] = \"DELETE_MESSAGE\";\n  ActionType[\"GET_USERS\"] = \"GET_USERS\";\n  ActionType[\"FIND_MESSAGE\"] = \"FIND_MESSAGE\";\n  return ActionType;\n}({});\n\n//# sourceURL=webpack://lesson34/./src/Action.ts?");

/***/ }),

/***/ "./src/Reducer.ts":
/*!************************!*\
  !*** ./src/Reducer.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ \"./src/Action.ts\");\n/* harmony import */ var _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/structured-clone */ \"./node_modules/@ungap/structured-clone/esm/index.js\");\n\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.SHOW_MESSAGES:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const messages = action.payload;\n        newState.messages = messages;\n        return newState;\n      }\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.SHOW_NEW_MESSAGE:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const message = action.payload;\n        newState.messages.push(message);\n        return newState;\n      }\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.SEND_MESSAGE:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const message = action.payload;\n        newState.messages.push(message);\n        return newState;\n      }\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.DELETE_MESSAGE:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const message = action.payload;\n        newState.messages = newState.messages.filter(mes => mes.id !== message.id);\n        return newState;\n      }\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.FIND_MESSAGE:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const findText = action.payload;\n        newState.messages = newState.messages.filter(message => message.text.includes(findText));\n        return newState;\n      }\n    case _Action__WEBPACK_IMPORTED_MODULE_0__.ActionType.GET_USERS:\n      {\n        const newState = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n        const users = action.payload;\n        newState.users = users;\n        return newState;\n      }\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://lesson34/./src/Reducer.ts?");

/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   configureStore: () => (/* binding */ configureStore)\n/* harmony export */ });\nfunction configureStore(reducer, state) {\n  const subscribers = new Set();\n  return {\n    getState() {\n      return state;\n    },\n    dispatch(action) {\n      state = reducer(state, action);\n      subscribers.forEach(cb => cb());\n    },\n    subscribe(cb) {\n      subscribers.add(cb);\n      return () => {\n        subscribers.delete(cb);\n      };\n    }\n  };\n}\n\n//# sourceURL=webpack://lesson34/./src/Store.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/styles.css */ \"./src/view/styles.css\");\n/* harmony import */ var _messagesApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagesApi.js */ \"./src/messagesApi.js\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ \"./src/Store.ts\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducer */ \"./src/Reducer.ts\");\n/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Action */ \"./src/Action.ts\");\n\n\n\n\n\nasync function loadMessage() {\n  return await (0,_messagesApi_js__WEBPACK_IMPORTED_MODULE_1__.getMessagesList)();\n}\n\n// https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json?orderBy=%22date%22&limitToLast=20\n\nfunction viewMessages() {\n  const messages = loadMessage();\n  messages.then(success => {\n    console.log(success);\n    store.dispatch({\n      type: _Action__WEBPACK_IMPORTED_MODULE_4__.ActionType.SHOW_MESSAGES,\n      payload: success\n    });\n    render(store.getState());\n  });\n}\nfunction submitMessage() {\n  const username = document.querySelector('#username').value;\n  const text = document.querySelector('.message').value;\n  const date = new Date(Date.now()).getTime();\n  const message = {\n    name: username,\n    text: text,\n    date: date\n  };\n  store.dispatch({\n    type: _Action__WEBPACK_IMPORTED_MODULE_4__.ActionType.SEND_MESSAGE,\n    payload: message\n  });\n  (0,_messagesApi_js__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(message);\n}\nfunction render(state) {\n  console.log(state);\n  document.querySelector('.messages').remove();\n  let messagesDiv = document.createElement(\"div\");\n  messagesDiv.classList.add(\"messages\");\n  document.querySelector('section div').append(messagesDiv);\n  state.messages.forEach(m => {\n    let messDiv = document.createElement(\"div\");\n    messDiv.classList.add(\"container\");\n    const date = formatDate(new Date(m.date));\n    if (m.name === store.getState().currentUsername) {\n      messDiv.classList.add(\"darker\");\n      messDiv.innerHTML = `\n                <div class=\"name-left\">${m.name}</div>\n                <div class=\"text\">${m.text}</div>\n                <div class=\"time-right time\">${date}</div>\n            `;\n    } else {\n      messDiv.innerHTML = `\n            <div class=\"name-right\">${m.name}</div>\n            <div class=\"text\">${m.text}</div>\n            <div class=\"time-left time\">${date}</div>\n        `;\n    }\n    messagesDiv.append(messDiv);\n  });\n  messagesDiv.scrollTop = messagesDiv.scrollHeight;\n}\nsetInterval(() => {\n  viewMessages();\n}, 3000);\nfunction formatDate(date) {\n  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;\n}\ndocument.querySelector('.send').addEventListener(\"click\", submitMessage);\nconst store = (0,_Store__WEBPACK_IMPORTED_MODULE_2__.configureStore)(_Reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, {\n  users: [],\n  messages: [],\n  currentUsername: \"ups2201\"\n});\nstore.subscribe(() => render(store.getState()));\n\n//# sourceURL=webpack://lesson34/./src/index.ts?");

/***/ }),

/***/ "./src/messagesApi.js":
/*!****************************!*\
  !*** ./src/messagesApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMessagesList: () => (/* binding */ getMessagesList),\n/* harmony export */   sendMessage: () => (/* binding */ sendMessage)\n/* harmony export */ });\nconst config = {\n  firebaseBaseUrl: \"https://otus-js-chat-4ed79-default-rtdb.firebaseio.com\",\n  firebaseCollection: \"messages.json\"\n};\nasync function getMessagesList() {\n  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}?orderBy=%22date%22&limitToLast=20`, {\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(response => response.json()).then(data => Object.values(data).map(el => ({\n    ...el,\n    date: new Date(el.date)\n  })));\n}\nasync function sendMessage(data) {\n  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {\n    method: \"POST\",\n    body: JSON.stringify({\n      ...data,\n      date: new Date()\n    }),\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(response => response.json());\n}\nfunction observeWithXHR(cb) {\n  // https://firebase.google.com/docs/reference/rest/database#section-streaming\n  const xhr = new XMLHttpRequest();\n  let lastResponseLength = 0;\n  xhr.addEventListener(\"progress\", () => {\n    // console.log(\"xhr body\", xhr.response);\n    const body = xhr.response.substr(lastResponseLength);\n    lastResponseLength = xhr.response.length;\n    const eventType = body.match(/event: (.+)/)[1];\n    const data = JSON.parse(body.match(/data: (.+)/)[1]);\n    if (eventType === \"put\") {\n      cb(data.data);\n    }\n  });\n  xhr.open(\"POST\", `${config.firebaseBaseUrl}/${config.firebaseCollection}`, true);\n  xhr.setRequestHeader(\"Accept\", \"text/event-stream\");\n  xhr.send();\n}\nfunction observeWithEventSource(cb) {\n  // https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource\n  const evtSource = new EventSource(`${config.firebaseBaseUrl}/${config.firebaseCollection}`);\n  evtSource.addEventListener(\"put\", ev => cb(JSON.parse(ev.data).data));\n}\nwindow.sendMessage = sendMessage;\nwindow.getMessagesList = getMessagesList;\nwindow.observeWithXHR = observeWithXHR;\nwindow.observeWithEventSource = observeWithEventSource;\n\n//# sourceURL=webpack://lesson34/./src/messagesApi.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h1 {\n  text-align: center;\n}\n\nhtml {\n  font-size: 12px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  width: 100%;\n  height: 1rem;\n  text-align: center;\n}\n\nmain {\n  margin: auto auto; /* Центрируем блоки */\n  width: 100%; /* Задаем ширину 100% что бы сделать ее резиновой */\n  max-width: 50rem; /* Устанавливаем максимальную ширину */\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: 100%;\n}\n\n/* Chat containers */\n.container {\n  border: 0.1rem solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 1rem;\n  padding: 1rem;\n  margin: 1rem 0;\n  width: 60%;\n  height: 5rem;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 20% 60% 20%;\n}\n\n/* Darker chat container */\n.darker {\n  border-color: #ccc;\n  background-color: #ddd;\n  padding: 1rem;\n  margin-left: auto;\n}\n\n/* Style time text */\n.time-right {\n  text-align: right;\n  float: right;\n  color: #aaa;\n}\n\n.name-right {\n  float: right;\n  text-align: right;\n  color: cornflowerblue;\n  font-size: 1.2rem;\n}\n\n.time-left {\n  text-align: left;\n  float: left;\n  color: #999;\n}\n\n.name-left {\n  float: left;\n  color: cornflowerblue;\n  font-size: 1.2rem;\n}\n\n.text {\n  margin: 0.8rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  flex-grow: 2;\n  font-family:\n          Red hat Display,\n          sans-serif;\n  font-size: 1.2rem;\n  height: 8rem;\n}\n\n.messages {\n  border: 0.1rem solid #dedede;\n  border-radius: 5px;\n  padding: 2rem;\n  overflow: auto;\n  max-height: 100vh;\n}\n\n.send-block {\n  height: 11rem;\n  border: 0.1rem solid #dedede;\n  border-radius: 5px;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 20% 40% 30%;\n  row-gap: 1rem;\n  padding: 1rem;\n  margin: auto;\n}\n.send-block textarea {\n  padding: 2rem;\n  width: 90%;\n}\n\n.send-block label {\n  font-size: 1.5rem;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson34/./src/view/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lesson34/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lesson34/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/view/styles.css":
/*!*****************************!*\
  !*** ./src/view/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/view/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lesson34/./src/view/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lesson34/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/deserialize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/deserialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserialize: () => (/* binding */ deserialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst env = typeof self === 'object' ? self : globalThis;\n\nconst deserializer = ($, _) => {\n  const as = (out, index) => {\n    $.set(index, out);\n    return out;\n  };\n\n  const unpair = index => {\n    if ($.has(index))\n      return $.get(index);\n\n    const [type, value] = _[index];\n    switch (type) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE:\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.VOID:\n        return as(value, index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        const arr = as([], index);\n        for (const index of value)\n          arr.push(unpair(index));\n        return arr;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        const object = as({}, index);\n        for (const [key, index] of value)\n          object[unpair(key)] = unpair(index);\n        return object;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as(new Date(value), index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as(new RegExp(source, flags), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const map = as(new Map, index);\n        for (const [key, index] of value)\n          map.set(unpair(key), unpair(index));\n        return map;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const set = as(new Set, index);\n        for (const index of value)\n          set.add(unpair(index));\n        return set;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR: {\n        const {name, message} = value;\n        return as(new env[name](message), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT:\n        return as(BigInt(value), index);\n      case 'BigInt':\n        return as(Object(BigInt(value)), index);\n    }\n    return as(new env[type](value), index);\n  };\n\n  return unpair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns a deserialized value from a serialized array of Records.\n * @param {Record[]} serialized a previously serialized value.\n * @returns {any}\n */\nconst deserialize = serialized => deserializer(new Map, serialized)(0);\n\n\n//# sourceURL=webpack://lesson34/./node_modules/@ungap/structured-clone/esm/deserialize.js?");

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deserialize: () => (/* reexport safe */ _deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize),\n/* harmony export */   serialize: () => (/* reexport safe */ _serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)\n/* harmony export */ });\n/* harmony import */ var _deserialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserialize.js */ \"./node_modules/@ungap/structured-clone/esm/deserialize.js\");\n/* harmony import */ var _serialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize.js */ \"./node_modules/@ungap/structured-clone/esm/serialize.js\");\n\n\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} any a serializable value.\n * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with\n * a transfer option (ignored when polyfilled) and/or non standard fields that\n * fallback to the polyfill if present.\n * @returns {Record[]}\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof structuredClone === \"function\" ?\n  /* c8 ignore start */\n  (any, options) => (\n    options && ('json' in options || 'lossy' in options) ?\n      (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)) : structuredClone(any)\n  ) :\n  (any, options) => (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)));\n  /* c8 ignore stop */\n\n\n\n\n//# sourceURL=webpack://lesson34/./node_modules/@ungap/structured-clone/esm/index.js?");

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/serialize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/serialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serialize: () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst EMPTY = '';\n\nconst {toString} = {};\nconst {keys} = Object;\n\nconst typeOf = value => {\n  const type = typeof value;\n  if (type !== 'object' || !value)\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE, type];\n\n  const asString = toString.call(value).slice(8, -1);\n  switch (asString) {\n    case 'Array':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, EMPTY];\n    case 'Object':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, EMPTY];\n    case 'Date':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.DATE, EMPTY];\n    case 'RegExp':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP, EMPTY];\n    case 'Map':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.MAP, EMPTY];\n    case 'Set':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.SET, EMPTY];\n  }\n\n  if (asString.includes('Array'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, asString];\n\n  if (asString.includes('Error'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR, asString];\n\n  return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, asString];\n};\n\nconst shouldSkip = ([TYPE, type]) => (\n  TYPE === _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE &&\n  (type === 'function' || type === 'symbol')\n);\n\nconst serializer = (strict, json, $, _) => {\n\n  const as = (out, value) => {\n    const index = _.push(out) - 1;\n    $.set(value, index);\n    return index;\n  };\n\n  const pair = value => {\n    if ($.has(value))\n      return $.get(value);\n\n    let [TYPE, type] = typeOf(value);\n    switch (TYPE) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE: {\n        let entry = value;\n        switch (type) {\n          case 'bigint':\n            TYPE = _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT;\n            entry = value.toString();\n            break;\n          case 'function':\n          case 'symbol':\n            if (strict)\n              throw new TypeError('unable to serialize ' + type);\n            entry = null;\n            break;\n          case 'undefined':\n            return as([_types_js__WEBPACK_IMPORTED_MODULE_0__.VOID], value);\n        }\n        return as([TYPE, entry], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        if (type)\n          return as([type, [...value]], value);\n  \n        const arr = [];\n        const index = as([TYPE, arr], value);\n        for (const entry of value)\n          arr.push(pair(entry));\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        if (type) {\n          switch (type) {\n            case 'BigInt':\n              return as([type, value.toString()], value);\n            case 'Boolean':\n            case 'Number':\n            case 'String':\n              return as([type, value.valueOf()], value);\n          }\n        }\n\n        if (json && ('toJSON' in value))\n          return pair(value.toJSON());\n\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const key of keys(value)) {\n          if (strict || !shouldSkip(typeOf(value[key])))\n            entries.push([pair(key), pair(value[key])]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as([TYPE, value.toISOString()], value);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as([TYPE, {source, flags}], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const [key, entry] of value) {\n          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))\n            entries.push([pair(key), pair(entry)]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const entry of value) {\n          if (strict || !shouldSkip(typeOf(entry)))\n            entries.push(pair(entry));\n        }\n        return index;\n      }\n    }\n\n    const {message} = value;\n    return as([TYPE, {name: type, message}], value);\n  };\n\n  return pair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} value a serializable value.\n * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,\n *  if `true`, will not throw errors on incompatible types, and behave more\n *  like JSON stringify would behave. Symbol and Function will be discarded.\n * @returns {Record[]}\n */\n const serialize = (value, {json, lossy} = {}) => {\n  const _ = [];\n  return serializer(!(json || lossy), !!json, new Map, _)(value), _;\n};\n\n\n//# sourceURL=webpack://lesson34/./node_modules/@ungap/structured-clone/esm/serialize.js?");

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ARRAY: () => (/* binding */ ARRAY),\n/* harmony export */   BIGINT: () => (/* binding */ BIGINT),\n/* harmony export */   DATE: () => (/* binding */ DATE),\n/* harmony export */   ERROR: () => (/* binding */ ERROR),\n/* harmony export */   MAP: () => (/* binding */ MAP),\n/* harmony export */   OBJECT: () => (/* binding */ OBJECT),\n/* harmony export */   PRIMITIVE: () => (/* binding */ PRIMITIVE),\n/* harmony export */   REGEXP: () => (/* binding */ REGEXP),\n/* harmony export */   SET: () => (/* binding */ SET),\n/* harmony export */   VOID: () => (/* binding */ VOID)\n/* harmony export */ });\nconst VOID       = -1;\nconst PRIMITIVE  = 0;\nconst ARRAY      = 1;\nconst OBJECT     = 2;\nconst DATE       = 3;\nconst REGEXP     = 4;\nconst MAP        = 5;\nconst SET        = 6;\nconst ERROR      = 7;\nconst BIGINT     = 8;\n// export const SYMBOL = 9;\n\n\n//# sourceURL=webpack://lesson34/./node_modules/@ungap/structured-clone/esm/types.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;