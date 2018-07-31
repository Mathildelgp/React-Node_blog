require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ADMIN_ROLE = exports.STANDARD_ROLE = undefined;

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var STANDARD_ROLE = exports.STANDARD_ROLE = 2;
var ADMIN_ROLE = exports.ADMIN_ROLE = 1;

var userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		default: 2,
		required: true,
		type: Number
	}
});

exports.default = _mongoose2.default.model('User', userSchema);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var config = {
	production: {
		secret: process.env.secret,
		MONGO_URI: 'mongodb://mathlgp:890.qsd@ds257551.mlab.com:57551/music-api',
		port: process.env.PORT
	},
	development: {
		secret: "Ch0c0late is l0ve",
		MONGO_URI: 'mongodb://mathlgp:890.qsd@ds257551.mlab.com:57551/music-api',
		port: 5678
	}
};

var getConfig = exports.getConfig = function getConfig(env) {
	return config[env] || config.development;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _volleyball = __webpack_require__(10);

var _volleyball2 = _interopRequireDefault(_volleyball);

__webpack_require__(4);

var _DB = __webpack_require__(11);

var _api = __webpack_require__(12);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _cors = __webpack_require__(28);

var _cors2 = _interopRequireDefault(_cors);

var _passportJwt = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env = process.env,
    PORT = _process$env.PORT,
    DB_url = _process$env.DB_url;


(0, _DB.connect)();

var app = (0, _express2.default)();

app.use(_volleyball2.default);
app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.use(_passport2.default.initialize());
(0, _passportJwt.configJWTStrategy)();
app.use('/api', _api.restRouter);
app.get('/', function (req, res) {
	res.send('coucou la premiere route');
});

// configuration erreur si une route n'est pas trouvée
app.use(function (req, res, next) {
	var error = new Error('Not found');
	error.message = "route invalide";
	error.message = 404;
	next(error);
});
// avoir toute les infos jusqu'à ce que le server pete (500)
app.use(function (error, req, res, next) {
	res.status(error.status || 500);
	return res.json({
		error: {
			msg: error.message
		}
	});
});

app.listen(PORT, function (req, res) {
	console.log('express marche sur le port ' + PORT);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connect = undefined;

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB_url = process.env.DB_url;


_mongoose2.default.Promise = global.Promise;
var connect = exports.connect = function connect() {
	_mongoose2.default.connect(DB_url, { useNewUrlParser: true });
	console.log('mongo marche');
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _article = __webpack_require__(13);

var _user = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();

restRouter.use('/articles', _article.articleRouter);
restRouter.use('/users', _user.userRouter);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = __webpack_require__(14);

Object.defineProperty(exports, 'articleRouter', {
  enumerable: true,
  get: function get() {
    return _article.articleRouter;
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.articleRouter = undefined;

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _articleCtrl = __webpack_require__(15);

var _articleCtrl2 = _interopRequireDefault(_articleCtrl);

var _admin = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleRouter = exports.articleRouter = _express2.default.Router();

var adminPolicy = [_passport2.default.authenticate('jwt', { session: false }), _admin.isAdmin];

articleRouter.route('/').post(adminPolicy, _articleCtrl2.default.create).get(_articleCtrl2.default.findAll);
articleRouter.route('/:id').get(_articleCtrl2.default.findOne).put(adminPolicy, _articleCtrl2.default.update).delete(adminPolicy, _articleCtrl2.default.delete);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(5);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _joi = __webpack_require__(6);

var _joi2 = _interopRequireDefault(_joi);

var _articleModel = __webpack_require__(18);

var _articleModel2 = _interopRequireDefault(_articleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	create: function create(req, res) {
		var _this = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var schema, _Joi$validate, value, error, article;

			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							schema = _joi2.default.object().keys({
								title: _joi2.default.string().required(),
								text: _joi2.default.string().required()
							});
							_Joi$validate = _joi2.default.validate(req.body, schema), value = _Joi$validate.value, error = _Joi$validate.error;

							if (!(error && error.details)) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', res.status(400).json(error));

						case 5:
							_context.next = 7;
							return _articleModel2.default.create(Object.assign({}, value, { admin: req.user._id }));

						case 7:
							article = _context.sent;
							return _context.abrupt('return', res.json(article));

						case 11:
							_context.prev = 11;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);
							return _context.abrupt('return', res.status(500).send(_context.t0));

						case 15:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 11]]);
		}))();
	},
	findAll: function findAll(req, res) {
		var _this2 = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var _req$query, page, perPage, options, articles;

			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_req$query = req.query, page = _req$query.page, perPage = _req$query.perPage;
							options = {
								page: parseInt(page, 10) || 1,
								limit: parseInt(perPage, 10) || 10
							};
							_context2.next = 5;
							return _articleModel2.default.paginate({}, options);

						case 5:
							articles = _context2.sent;

							res.json(articles);
							_context2.next = 13;
							break;

						case 9:
							_context2.prev = 9;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);
							return _context2.abrupt('return', res.status(500).send(_context2.t0));

						case 13:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2, [[0, 9]]);
		}))();
	},
	findOne: function findOne(req, res) {
		var _this3 = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
			var id, article;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							id = req.params.id;
							_context3.next = 4;
							return _articleModel2.default.findById(id);

						case 4:
							article = _context3.sent;

							if (article) {
								_context3.next = 7;
								break;
							}

							return _context3.abrupt('return', res.status(404).json({ err: "pas d'articles" }));

						case 7:
							return _context3.abrupt('return', res.json(article));

						case 10:
							_context3.prev = 10;
							_context3.t0 = _context3['catch'](0);

							console.error(_context3.t0);
							return _context3.abrupt('return', res.status(500).send(_context3.t0));

						case 14:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this3, [[0, 10]]);
		}))();
	},
	delete: function _delete(req, res) {
		var _this4 = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
			var id, article;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							id = req.params.id;
							_context4.next = 4;
							return _articleModel2.default.findByIdAndRemove(id);

						case 4:
							article = _context4.sent;

							if (article) {
								_context4.next = 7;
								break;
							}

							return _context4.abrupt('return', res.status(404).json({ err: 'no article found' }));

						case 7:
							return _context4.abrupt('return', res.json({ message: 'article removed' }));

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](0);

							console.error(_context4.t0);
							return _context4.abrupt('return', res.status(500).send(_context4.t0));

						case 14:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this4, [[0, 10]]);
		}))();
	},
	update: function update(req, res) {
		var _this5 = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
			var id, schema, _Joi$validate2, value, error, article;

			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							id = req.params.id;
							schema = _joi2.default.object().keys({
								title: _joi2.default.string().required(),
								text: _joi2.default.string().required()
							});
							_Joi$validate2 = _joi2.default.validate(req.body, schema), value = _Joi$validate2.value, error = _Joi$validate2.error;

							if (!(error && error.details)) {
								_context5.next = 6;
								break;
							}

							return _context5.abrupt('return', res.status(400).json(error));

						case 6:
							_context5.next = 8;
							return _articleModel2.default.findOneAndUpdate({ _id: id }, value, { new: true });

						case 8:
							article = _context5.sent;

							if (article) {
								_context5.next = 11;
								break;
							}

							return _context5.abrupt('return', res.status(404).json({ err: 'wer u article at?' }));

						case 11:
							return _context5.abrupt('return', res.json(article));

						case 14:
							_context5.prev = 14;
							_context5.t0 = _context5['catch'](0);

							console.error(_context5.t0);
							return _context5.abrupt('return', res.status(500).send(_context5.t0));

						case 18:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this5, [[0, 14]]);
		}))();
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(17);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = __webpack_require__(19);

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var ArticleSchema = new Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	admin: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User', required: true }
});

ArticleSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model('Article', ArticleSchema);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isAdmin = undefined;

var _user = __webpack_require__(3);

var isAdmin = exports.isAdmin = function isAdmin(req, res, next) {
	if (req.user.role !== _user.ADMIN_ROLE) {
		return res.json({ err: 'unauthorized, not Admin' });
	}
	next();
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(22);

Object.defineProperty(exports, 'userRouter', {
  enumerable: true,
  get: function get() {
    return _user.userRouter;
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = undefined;

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _user = __webpack_require__(23);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = exports.userRouter = _express2.default.Router();

userRouter.post('/signup', _user2.default.signup);
userRouter.post('/login', _user2.default.login);
userRouter.get('/me', _passport2.default.authenticate('jwt', { session: false }), _user2.default.authenticate);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(5);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _user = __webpack_require__(24);

var _user2 = _interopRequireDefault(_user);

var _user3 = __webpack_require__(3);

var _user4 = _interopRequireDefault(_user3);

var _jwt = __webpack_require__(26);

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	signup: function signup(req, res) {
		var _this = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var _userService$validate, _value, error, encryptedPass, user;

			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_userService$validate = _user2.default.validateSignup(req.body), _value = _userService$validate.value, error = _userService$validate.error;

							if (!error) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return', res.status(400).json(error));

						case 4:
							encryptedPass = _user2.default.encryptPassword(_value.password);
							_context.next = 7;
							return _user4.default.create({
								email: _value.email,
								firstName: _value.firstName,
								lastName: _value.lastName,
								password: encryptedPass,
								role: _value.role || STANDARD_ROLE
							});

						case 7:
							user = _context.sent;
							return _context.abrupt('return', res.redirect('http://localhost:3000/'));

						case 11:
							_context.prev = 11;
							_context.t0 = _context['catch'](0);

							console.error(_context.t0);
							return _context.abrupt('return', res.status(500).send(_context.t0));

						case 15:
							return _context.abrupt('return', res.json(value));

						case 16:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 11]]);
		}))();
	},
	login: function login(req, res) {
		var _this2 = this;

		return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var _userService$validate2, _value2, error, user, authenticated, token;

			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_userService$validate2 = _user2.default.validateLogin(req.body), _value2 = _userService$validate2.value, error = _userService$validate2.error;

							if (!error) {
								_context2.next = 4;
								break;
							}

							return _context2.abrupt('return', res.status(400).json(error));

						case 4:
							_context2.next = 6;
							return _user4.default.findOne({ email: _value2.email });

						case 6:
							user = _context2.sent;

							if (user) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(401).json({ err: "unauthorized" }));

						case 9:
							authenticated = _user2.default.comparePassword(_value2.password, user.password);

							if (authenticated) {
								_context2.next = 12;
								break;
							}

							return _context2.abrupt('return', res.status(401).json({ err: "unauthorized" }));

						case 12:
							token = _jwt2.default.issue({ id: user._id }, '1d');
							return _context2.abrupt('return', res.json({ token: token }));

						case 16:
							_context2.prev = 16;
							_context2.t0 = _context2['catch'](0);

							console.error(_context2.t0);
							return _context2.abrupt('return', res.status(500).send(_context2.t0));

						case 20:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2, [[0, 16]]);
		}))();
	},
	authenticate: function authenticate(req, res) {
		return res.json(req.user);
	}
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(6);

var _joi2 = _interopRequireDefault(_joi);

var _bcryptjs = __webpack_require__(25);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  encryptPassword: function encryptPassword(randomText) {
    var salt = _bcryptjs2.default.genSaltSync(10);
    return _bcryptjs2.default.hashSync(randomText, salt);
  },
  comparePassword: function comparePassword(randomText, encryptatedPassword) {
    return _bcryptjs2.default.compareSync(randomText, encryptatedPassword);
  },
  validateSignup: function validateSignup(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required(),
      role: _joi2.default.number().integer()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        value = _Joi$validate.value,
        error = _Joi$validate.error;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateLogin: function validateLogin(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        value = _Joi$validate2.value,
        error = _Joi$validate2.error;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = __webpack_require__(27);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _config.getConfig)("development");
exports.default = {
  issue: function issue(payload, expiresIn) {
    return _jsonwebtoken2.default.sign(payload, config.secret, {
      expiresIn: expiresIn
    });
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configJWTStrategy = undefined;

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = __webpack_require__(30);

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _config = __webpack_require__(7);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _config.getConfig)("development");
var configJWTStrategy = exports.configJWTStrategy = function configJWTStrategy() {
  var opts = {
    jwtFromRequest: _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
  };
  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({ _id: payload.id }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  }));
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map