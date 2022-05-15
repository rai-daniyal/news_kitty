/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/posts-index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/posts-index.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/posts-index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dev/Documents/Test Project/kittynews/app/javascript/packs/posts-index.jsx: Unexpected character '🔼' (73:30)\n\n  71 |           <footer>\n  72 |             <button onClick={handleVoteClick} data-id={post.id} className={post.isVoted ? 'voted' : ''}>\n> 73 |               {post.isVoted ? 🔼 : 🔽 } {post.votesCount}\n     |                               ^\n  74 |             </button>\n  75 |             <button>💬 {post.commentsCount}</button>\n  76 |           </footer>\n    at Object._raise (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:790:17)\n    at Object.raiseWithData (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:783:17)\n    at Object.raise (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:777:17)\n    at Object.getTokenFromCode (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:8422:16)\n    at Object.getTokenFromCode (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4791:18)\n    at Object.nextToken (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:7888:12)\n    at Object.next (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:7813:10)\n    at Object.eat (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:7818:12)\n    at Object.parseConditional (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9917:14)\n    at Object.parseMaybeConditional (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9913:17)\n    at Object.parseMaybeAssign (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9870:21)\n    at Object.parseExpressionBase (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9815:23)\n    at /home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9809:39\n    at Object.allowInAnd (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:11510:12)\n    at Object.parseExpression (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9809:17)\n    at Object.jsxParseExpressionContainer (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4610:30)\n    at Object.jsxParseElementAt (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4704:36)\n    at Object.jsxParseElementAt (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4689:32)\n    at Object.jsxParseElementAt (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4689:32)\n    at Object.jsxParseElement (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4747:17)\n    at Object.parseExprAtom (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:4754:19)\n    at Object.parseExprSubscripts (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:10094:23)\n    at Object.parseUpdate (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:10074:21)\n    at Object.parseMaybeUnary (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:10063:17)\n    at Object.parseExprOps (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9933:23)\n    at Object.parseMaybeConditional (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9907:23)\n    at Object.parseMaybeAssign (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9870:21)\n    at /home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9837:39\n    at Object.allowInAnd (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:11510:12)\n    at Object.parseMaybeAssignAllowIn (/home/dev/Documents/Test Project/kittynews/node_modules/@babel/parser/lib/index.js:9837:17)");

/***/ })

/******/ });
//# sourceMappingURL=posts-index-7af15e70e96acf275231.js.map