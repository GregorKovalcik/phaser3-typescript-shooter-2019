/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
// RUN MAIN
var ZGame_1 = __webpack_require__(/*! ./src/ZGame */ "./src/ZGame.ts");
var game = new Phaser.Game(ZGame_1.gameConfig);
window.focus();


/***/ }),

/***/ "./src/Asteroids/Asteroid.ts":
/*!***********************************!*\
  !*** ./src/Asteroids/Asteroid.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asteroid = void 0;
// Siilar to Bullet, here we model the player's adversary setting up its Arcade body
// and providing simple movement in update(...) method
var Asteroid = /** @class */ (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid(scene, texture, spriteScale, speed) {
        var _this = _super.call(this, scene, 0, 0, texture) || this;
        _this.speed = Phaser.Math.GetSpeed(20, 1);
        _this.lateralSpeed = 0;
        _this.spriteTexture = "asteroidBig1";
        _this.spriteScale = 0.6;
        _this.health = 1;
        if (texture)
            _this.spriteTexture = texture;
        if (spriteScale)
            _this.spriteScale = spriteScale;
        if (speed)
            _this.speed = speed;
        _this.setDepth(10);
        return _this;
    }
    Asteroid.prototype.launch = function (x, y, lateralSpeed, speed) {
        if (lateralSpeed === void 0) { lateralSpeed = 0; }
        Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
        this.setScale(this.spriteScale, this.spriteScale);
        this.scene.physics.add.existing(this);
        this.body.setSize(this.spriteScale, this.spriteScale);
        this.setPosition(x, y);
        this.lateralSpeed = lateralSpeed;
        if (speed) {
            this.speed = speed;
        }
        this.setActive(true);
        this.setVisible(true);
        return this;
    };
    Asteroid.prototype.update = function (time, delta) {
        this.y += this.speed * delta;
        this.x += this.lateralSpeed * delta;
        if (this.y > Number(this.scene.game.config.height) + 50) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    // return true if destroyed by the hit
    Asteroid.prototype.hit = function () {
        // small asteroids are destroyed by one hit by default
        return true;
    };
    return Asteroid;
}(Phaser.Physics.Arcade.Sprite));
exports.Asteroid = Asteroid;


/***/ }),

/***/ "./src/Asteroids/AsteroidBig.ts":
/*!**************************************!*\
  !*** ./src/Asteroids/AsteroidBig.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteroidBig = void 0;
var Asteroid_1 = __webpack_require__(/*! ./Asteroid */ "./src/Asteroids/Asteroid.ts");
var AsteroidBig = /** @class */ (function (_super) {
    __extends(AsteroidBig, _super);
    function AsteroidBig(scene) {
        return _super.call(this, scene, AsteroidBig.textures[Math.floor(Math.random() * AsteroidBig.textures.length)], 0.6, Phaser.Math.GetSpeed(20, 1)) || this;
    }
    // return true if destroyed by the hit
    AsteroidBig.prototype.hit = function () {
        this.health -= 1;
        return this.health <= 0;
    };
    AsteroidBig.textures = ["asteroidBig1", "asteroidBig2", "asteroidBig3", "asteroidBig4"];
    return AsteroidBig;
}(Asteroid_1.Asteroid));
exports.AsteroidBig = AsteroidBig;


/***/ }),

/***/ "./src/Asteroids/AsteroidMedium.ts":
/*!*****************************************!*\
  !*** ./src/Asteroids/AsteroidMedium.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteroidMedium = void 0;
var Asteroid_1 = __webpack_require__(/*! ./Asteroid */ "./src/Asteroids/Asteroid.ts");
var AsteroidMedium = /** @class */ (function (_super) {
    __extends(AsteroidMedium, _super);
    function AsteroidMedium(scene) {
        return _super.call(this, scene, AsteroidMedium.textures[Math.floor(Math.random() * AsteroidMedium.textures.length)], 0.5, Phaser.Math.GetSpeed(40, 1)) || this;
    }
    AsteroidMedium.textures = ["asteroidMedium1", "asteroidMedium2"];
    return AsteroidMedium;
}(Asteroid_1.Asteroid));
exports.AsteroidMedium = AsteroidMedium;


/***/ }),

/***/ "./src/Asteroids/AsteroidSmall.ts":
/*!****************************************!*\
  !*** ./src/Asteroids/AsteroidSmall.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsteroidSmall = void 0;
var Asteroid_1 = __webpack_require__(/*! ./Asteroid */ "./src/Asteroids/Asteroid.ts");
var AsteroidSmall = /** @class */ (function (_super) {
    __extends(AsteroidSmall, _super);
    function AsteroidSmall(scene) {
        return _super.call(this, scene, AsteroidSmall.textures[Math.floor(Math.random() * AsteroidSmall.textures.length)], 0.6, Phaser.Math.GetSpeed(80, 1)) || this;
    }
    AsteroidSmall.textures = ["asteroidSmall1", "asteroidSmall2"];
    return AsteroidSmall;
}(Asteroid_1.Asteroid));
exports.AsteroidSmall = AsteroidSmall;


/***/ }),

/***/ "./src/Boot.ts":
/*!*********************!*\
  !*** ./src/Boot.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boot = void 0;
var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super.call(this, "Boot") || this;
    }
    Boot.prototype.preload = function () {
        console.log("Boot.preload()");
        // We need to use jsdelivr.net in order to be able to get Github stuff; you can click-through the link to see all the content we have there
        this.load.setBaseURL("https://cdn.jsdelivr.net/gh/kefik/kenney/Shooter/");
        // player ships
        this.load.image("playership1", "playerShip1_blue.png");
        // projectiles
        this.load.image("bullet", "lasers/laserBlue01.png");
        // enemies
        this.load.image("enemy1", "enemies/enemyGreen1.png");
        this.load.image("enemy2", "enemies/enemyRed4.png");
        this.load.image("enemy3", "ufoRed.png");
        // asteroids
        this.load.image("asteroidBig1", "meteors/meteorGrey_big1.png");
        this.load.image("asteroidBig2", "meteors/meteorGrey_big2.png");
        this.load.image("asteroidBig3", "meteors/meteorGrey_big3.png");
        this.load.image("asteroidBig4", "meteors/meteorGrey_big4.png");
        this.load.image("asteroidMedium1", "meteors/meteorGrey_med1.png");
        this.load.image("asteroidMedium2", "meteors/meteorGrey_med2.png");
        this.load.image("asteroidSmall1", "meteors/meteorGrey_small1.png");
        this.load.image("asteroidSmall2", "meteors/meteorGrey_small2.png");
        // power-ups
        this.load.image("powerupScore", "powerups/powerupBlue_star.png");
        this.load.image("powerupFirepower", "powerups/powerupBlue_bolt.png");
        this.load.image("powerupDefense", "powerups/powerupBlue_shield.png");
        // environment
        this.load.image("star", "effects/star2.png");
        // effects
        this.load.image("explosion", "effects/star3.png");
    };
    Boot.prototype.create = function () {
        console.log("Boot.create()");
        this.scene.start("Menu");
    };
    return Boot;
}(Phaser.Scene));
exports.Boot = Boot;


/***/ }),

/***/ "./src/Enemies/Enemy.ts":
/*!******************************!*\
  !*** ./src/Enemies/Enemy.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
// Siilar to Bullet, here we model the player's adversary setting up its Arcade body
// and providing simple movement in update(...) method
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(scene, texture, speed) {
        if (texture === void 0) { texture = "enemy1"; }
        if (speed === void 0) { speed = Phaser.Math.GetSpeed(50, 1); }
        var _this = _super.call(this, scene, 0, 0, texture) || this;
        _this.spriteScale = 0.3;
        _this.health = 1;
        _this.spriteTexture = texture;
        _this.speed = speed;
        _this.setDepth(100);
        return _this;
    }
    Enemy.prototype.launch = function (x, y, speed, health) {
        Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
        this.setScale(this.spriteScale, this.spriteScale);
        this.scene.physics.add.existing(this);
        this.body.setSize(this.spriteScale, this.spriteScale);
        this.setPosition(x, y);
        if (speed) {
            this.speed = speed;
        }
        if (health) {
            this.health = health;
        }
        this.setActive(true);
        this.setVisible(true);
        return this;
    };
    Enemy.prototype.update = function (time, delta) {
        this.y += this.speed * delta;
        if (this.y > Number(this.scene.game.config.height) + 50) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    // return true if destroyed by the hit
    Enemy.prototype.hit = function () {
        this.health -= 1;
        return this.health <= 0;
    };
    return Enemy;
}(Phaser.Physics.Arcade.Sprite));
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/Enemies/EnemyCircular.ts":
/*!**************************************!*\
  !*** ./src/Enemies/EnemyCircular.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyCircular = void 0;
var Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Enemies/Enemy.ts");
var EnemyCircular = /** @class */ (function (_super) {
    __extends(EnemyCircular, _super);
    function EnemyCircular(scene) {
        var _this = _super.call(this, scene, "enemy3") || this;
        _this.timePeriod = 2000;
        _this.randomTimeOffset = Math.floor(Math.random() * _this.timePeriod);
        _this.movementRadius = 100;
        return _this;
    }
    EnemyCircular.prototype.launch = function (x, y) {
        this.baseX = x;
        this.baseY = y;
        return _super.prototype.launch.call(this, x, y);
    };
    EnemyCircular.prototype.update = function (time, delta) {
        this.baseY += this.speed * delta;
        // circular periodic motion
        var timePhase = (time + this.randomTimeOffset) % this.timePeriod;
        var offsetX = Math.sin(timePhase / this.timePeriod * Phaser.Math.PI2) * this.movementRadius;
        var offsetY = Math.cos(timePhase / this.timePeriod * Phaser.Math.PI2) * this.movementRadius;
        this.x = this.baseX + offsetX;
        this.y = this.baseY + offsetY;
        if (this.y > Number(this.scene.game.config.height) + 50) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    return EnemyCircular;
}(Enemy_1.Enemy));
exports.EnemyCircular = EnemyCircular;


/***/ }),

/***/ "./src/Enemies/EnemySideways.ts":
/*!**************************************!*\
  !*** ./src/Enemies/EnemySideways.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemySideways = void 0;
var Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Enemies/Enemy.ts");
var EnemySideways = /** @class */ (function (_super) {
    __extends(EnemySideways, _super);
    function EnemySideways(scene) {
        var _this = _super.call(this, scene, "enemy2") || this;
        _this.timePeriod = 2000;
        _this.randomTimeOffset = Math.floor(Math.random() * _this.timePeriod);
        _this.sidewaysExtent = 100;
        return _this;
    }
    EnemySideways.prototype.launch = function (x, y) {
        this.startingX = x;
        return _super.prototype.launch.call(this, x, y);
    };
    EnemySideways.prototype.update = function (time, delta) {
        this.y += this.speed * delta;
        // sideways periodic motion
        var timePhase = (time + this.randomTimeOffset) % this.timePeriod;
        var offsetX = Math.sin(timePhase / this.timePeriod * Phaser.Math.PI2) * this.sidewaysExtent;
        this.x = this.startingX + offsetX;
        if (this.y > Number(this.scene.game.config.height) + 50) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    return EnemySideways;
}(Enemy_1.Enemy));
exports.EnemySideways = EnemySideways;


/***/ }),

/***/ "./src/Enemies/EnemyStraight.ts":
/*!**************************************!*\
  !*** ./src/Enemies/EnemyStraight.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyStraight = void 0;
var Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Enemies/Enemy.ts");
var EnemyStraight = /** @class */ (function (_super) {
    __extends(EnemyStraight, _super);
    function EnemyStraight(scene) {
        return _super.call(this, scene, "enemy1") || this;
    }
    return EnemyStraight;
}(Enemy_1.Enemy));
exports.EnemyStraight = EnemyStraight;


/***/ }),

/***/ "./src/Environment/Star.ts":
/*!*********************************!*\
  !*** ./src/Environment/Star.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
// Similar to Bullet, here we model the player's adversary setting up its Arcade body
// and providing simple movement in update(...) method
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(scene) {
        var _this = _super.call(this, scene, 0, 0, "star") || this;
        _this.maxSpeed = Phaser.Math.GetSpeed(50, 1);
        _this.spriteMinScale = 0.1;
        _this.spriteMaxScale = 0.3;
        _this.spriteTexture = "star";
        var randomValue = Math.random();
        _this.speed = randomValue * _this.maxSpeed;
        _this.spriteScale = _this.spriteMinScale + randomValue * (_this.spriteMaxScale - _this.spriteMinScale);
        return _this;
    }
    Star.prototype.launch = function (x, y) {
        Phaser.GameObjects.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
        this.setScale(this.spriteScale, this.spriteScale);
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        return this;
    };
    Star.prototype.update = function (time, delta) {
        this.y += this.speed * delta;
        if (this.y > Number(this.scene.game.config.height) + 25) {
            this.y = -25;
        }
    };
    return Star;
}(Phaser.GameObjects.Sprite));
exports.Star = Star;


/***/ }),

/***/ "./src/Menu.ts":
/*!*********************!*\
  !*** ./src/Menu.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Star_1 = __webpack_require__(/*! ./Environment/Star */ "./src/Environment/Star.ts");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super.call(this, "Menu") || this;
    }
    Menu.prototype.create = function () {
        var _this = this;
        // setup background
        this.stars = this.add.group({
            classType: Star_1.Star,
            // consistent star density across various display resolutions
            maxSize: Math.floor(1.0 * (Number(this.game.config.width) * Number(this.game.config.height)) / (480 * 640) * 100),
            runChildUpdate: true
        });
        for (var i = 0; i < this.stars.maxSize; i++) {
            var star = this.stars.get();
            if (star) {
                var randomX = Math.random() * Number(this.game.config.width);
                var randomY = Math.random() * Number(this.game.config.height) + 50;
                star.launch(randomX, randomY);
            }
        }
        // draw menu
        this.add.text(Number(this.game.config.width) / 2 - 180, 100, ["Classic", "Sh00ter"], {
            fontFamily: 'Arial',
            color: '#36bbf5',
            fontSize: 100,
            align: "center"
        });
        this.add.text(Number(this.game.config.width) / 2 - 180, Number(this.game.config.height) - 100, "Press any key to start.", {
            fontFamily: 'Arial',
            color: '#36bbf5',
            fontSize: 36,
            align: "center"
        });
        // start game when any key is pressed
        this.input.keyboard.on('keydown', function (event) {
            _this.scene.start("Play");
        });
    };
    return Menu;
}(Phaser.Scene));
exports.Menu = Menu;


/***/ }),

/***/ "./src/Play.ts":
/*!*********************!*\
  !*** ./src/Play.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
var Bullet_1 = __webpack_require__(/*! ./Projectiles/Bullet */ "./src/Projectiles/Bullet.ts");
var EnemyStraight_1 = __webpack_require__(/*! ./Enemies/EnemyStraight */ "./src/Enemies/EnemyStraight.ts");
var EnemySideways_1 = __webpack_require__(/*! ./Enemies/EnemySideways */ "./src/Enemies/EnemySideways.ts");
var EnemyCircular_1 = __webpack_require__(/*! ./Enemies/EnemyCircular */ "./src/Enemies/EnemyCircular.ts");
var AsteroidBig_1 = __webpack_require__(/*! ./Asteroids/AsteroidBig */ "./src/Asteroids/AsteroidBig.ts");
var AsteroidMedium_1 = __webpack_require__(/*! ./Asteroids/AsteroidMedium */ "./src/Asteroids/AsteroidMedium.ts");
var AsteroidSmall_1 = __webpack_require__(/*! ./Asteroids/AsteroidSmall */ "./src/Asteroids/AsteroidSmall.ts");
var PowerUpScore_1 = __webpack_require__(/*! ./PowerUps/PowerUpScore */ "./src/PowerUps/PowerUpScore.ts");
var PowerUpFirepower_1 = __webpack_require__(/*! ./PowerUps/PowerUpFirepower */ "./src/PowerUps/PowerUpFirepower.ts");
var PowerUpDefense_1 = __webpack_require__(/*! ./PowerUps/PowerUpDefense */ "./src/PowerUps/PowerUpDefense.ts");
var Star_1 = __webpack_require__(/*! ./Environment/Star */ "./src/Environment/Star.ts");
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        var _this = _super.call(this, "Play") || this;
        _this.isFrontFireModeEnabled = false;
        _this.isSideFireModeEnabled = false;
        _this.isRearFireModeEnabled = false;
        _this.lastEnemyLevel1Spawn = 0;
        _this.lastEnemyLevel2Spawn = 60000;
        _this.lastEnemyLevel3Spawn = 120000;
        _this.lastAsteroidSpawn = 10000;
        _this.lastPowerupSpawn = 30000;
        _this.lastStarSpawn = 0;
        _this.score = 0;
        _this.lives = 3;
        return _this;
    }
    Play.prototype.create = function () {
        console.log("Play.create()");
        this.displayWidth = Number(this.game.config.width);
        this.displayHeight = Number(this.game.config.height);
        this.player = this.physics.add.sprite(Number(this.game.config.width) / 2, Number(this.game.config.height) - 50, "playership1").setScale(0.5, 0.5);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(this.player.body.width * 0.5, this.player.body.height * 0.5);
        this.player.setDepth(100);
        this.moveKeys = this.input.keyboard.addKeys({
            'up': Phaser.Input.Keyboard.KeyCodes.W,
            'down': Phaser.Input.Keyboard.KeyCodes.S,
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'right': Phaser.Input.Keyboard.KeyCodes.D,
            'fire': Phaser.Input.Keyboard.KeyCodes.SPACE
        });
        // Enables movement of player with WASD keys; note that event names are string based
        // Note that Phaser3 docs at https://photonstorm.github.io/phaser3-docs
        // are containing the whole section called "Events" listing all existing events
        // and Keyboard is extending the standard string notation (lower-case w/o suffix Event)
        // by adding "keycode" you want to react to
        this.input.keyboard.on('keydown_W', function (event) {
            this.scene.player.setAccelerationY(-800);
        });
        this.input.keyboard.on('keydown_S', function (event) {
            this.scene.player.setAccelerationY(800);
        });
        this.input.keyboard.on('keydown_A', function (event) {
            this.scene.player.setAccelerationX(-800);
        });
        this.input.keyboard.on('keydown_D', function (event) {
            this.scene.player.setAccelerationX(800);
        });
        // Stops player acceleration on uppress of WASD keys
        this.input.keyboard.on('keyup_W', function (event) {
            if (this.scene.moveKeys['down'].isUp)
                this.scene.player.setAccelerationY(0);
        });
        this.input.keyboard.on('keyup_S', function (event) {
            if (this.scene.moveKeys['up'].isUp)
                this.scene.player.setAccelerationY(0);
        });
        this.input.keyboard.on('keyup_A', function (event) {
            if (this.scene.moveKeys['right'].isUp)
                this.scene.player.setAccelerationX(0);
        });
        this.input.keyboard.on('keyup_D', function (event) {
            if (this.scene.moveKeys['left'].isUp)
                this.scene.player.setAccelerationX(0);
        });
        // BULLET GROUP
        this.lasers = this.physics.add.group({
            classType: Bullet_1.Bullet,
            maxSize: 100,
            runChildUpdate: true
        });
        // ENEMY GROUP
        this.enemies1 = this.physics.add.group({
            classType: EnemyStraight_1.EnemyStraight,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies2 = this.physics.add.group({
            classType: EnemySideways_1.EnemySideways,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies3 = this.physics.add.group({
            classType: EnemyCircular_1.EnemyCircular,
            maxSize: 10,
            runChildUpdate: true
        });
        // ASTEROID GROUP
        this.asteroidsBig = this.physics.add.group({
            classType: AsteroidBig_1.AsteroidBig,
            maxSize: 10,
            runChildUpdate: true
        });
        this.asteroidsMedium = this.physics.add.group({
            classType: AsteroidMedium_1.AsteroidMedium,
            maxSize: 20,
            runChildUpdate: true
        });
        this.asteroidsSmall = this.physics.add.group({
            classType: AsteroidSmall_1.AsteroidSmall,
            maxSize: 40,
            runChildUpdate: true
        });
        // POWERUP GROUP
        this.powerupsScore = this.physics.add.group({
            classType: PowerUpScore_1.PowerUpScore,
            maxSize: 3,
            runChildUpdate: true
        });
        this.powerupsFirepower = this.physics.add.group({
            classType: PowerUpFirepower_1.PowerUpFirepower,
            maxSize: 3,
            runChildUpdate: true
        });
        this.powerupsDefense = this.physics.add.group({
            classType: PowerUpDefense_1.PowerUpDefense,
            maxSize: 3,
            runChildUpdate: true
        });
        // STARS GROUP 
        this.stars = this.add.group({
            classType: Star_1.Star,
            // consistent star density across various display resolutions
            maxSize: Math.floor(1.0 * (Number(this.game.config.width) * Number(this.game.config.height)) / (480 * 640) * 100),
            runChildUpdate: true
        });
        // LASERS kill ENEMIES
        this.physics.add.collider(this.lasers, this.enemies1, this.collideLaserEnemy, null, this); // last parameter is the context passed into the callback
        this.physics.add.collider(this.lasers, this.enemies2, this.collideLaserEnemy, null, this);
        this.physics.add.collider(this.lasers, this.enemies3, this.collideLaserEnemy, null, this);
        // LASERS splits ASTEROIDS
        this.physics.add.collider(this.lasers, this.asteroidsBig, this.collideLaserAsteroid, null, this);
        this.physics.add.collider(this.lasers, this.asteroidsMedium, this.collideLaserAsteroid, null, this);
        this.physics.add.collider(this.lasers, this.asteroidsSmall, this.collideLaserAsteroid, null, this);
        // PLAYER is killed by ENEMIES
        this.physics.add.collider(this.player, this.enemies1, this.collidePlayerEnemy, null, this); // last parameter is the context passed into the callback
        this.physics.add.collider(this.player, this.enemies2, this.collidePlayerEnemy, null, this);
        this.physics.add.collider(this.player, this.enemies3, this.collidePlayerEnemy, null, this);
        // PLAYER is killed by ASTEROIDS
        this.physics.add.collider(this.player, this.asteroidsBig, this.collidePlayerAsteroid, null, this);
        this.physics.add.collider(this.player, this.asteroidsMedium, this.collidePlayerAsteroid, null, this);
        this.physics.add.collider(this.player, this.asteroidsSmall, this.collidePlayerAsteroid, null, this);
        // PLAYER collects POWERUPS
        this.physics.add.collider(this.player, this.powerupsScore, this.collidePlayerPowerUp, null, this);
        this.physics.add.collider(this.player, this.powerupsFirepower, this.collidePlayerPowerUp, null, this);
        this.physics.add.collider(this.player, this.powerupsDefense, this.collidePlayerPowerUp, null, this);
        // SCORE TEXT
        this.scoreText = this.add.text(5, 5, "Score: 0", { fontFamily: "Arial Black", fontSize: 24, color: "#36bbf5", align: 'left' });
        this.scoreText.setDepth(1000);
        // LIVES TEXT
        this.livesText = this.add.text(5, 30, "Lives: 3", { fontFamily: "Arial Black", fontSize: 24, color: "#36bbf5", align: 'left' });
        this.livesText.setDepth(1000);
        // SPAWN STARS
        for (var i = 0; i < this.stars.maxSize; i++) {
            var star = this.stars.get();
            if (star) {
                var randomX = Math.random() * Number(this.game.config.width);
                var randomY = Math.random() * Number(this.game.config.height) + 50;
                star.launch(randomX, randomY);
            }
        }
        // EXPLOSION EMITTER
        this.explosionParticles = this.add.particles("explosion");
        this.explosionParticles.setDepth(101);
        this.explosionEmitter = this.explosionParticles.createEmitter({
            frequency: -1,
            speed: { min: 0, max: 80 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.7, end: 0 },
            tint: 0xff3300,
            blendMode: 'ADD',
            lifespan: 600,
            gravityY: 0
        });
        this.startTime = this.time.now;
    };
    Play.prototype.update = function (time, delta) {
        this.constrainVelocity(this.player, 100);
        if (this.input.keyboard.checkDown(this.moveKeys['fire'], 300)) {
            // default fire mode
            var bulletDefault = this.lasers.get();
            if (bulletDefault) {
                bulletDefault.fireDefault(this.player.x, this.player.y);
            }
            // stacked front
            if (this.isFrontFireModeEnabled) {
                var bulletLeft = this.lasers.get();
                if (bulletLeft) {
                    bulletLeft.fireFrontLeft(this.player.x, this.player.y);
                }
                var bulletRight = this.lasers.get();
                if (bulletRight) {
                    bulletRight.fireFrontRight(this.player.x, this.player.y);
                }
            }
            // stacked rear
            if (this.isRearFireModeEnabled) {
                var bulletLeft = this.lasers.get();
                if (bulletLeft) {
                    bulletLeft.fireRearLeft(this.player.x, this.player.y);
                }
                var bulletRight = this.lasers.get();
                if (bulletRight) {
                    bulletRight.fireRearRight(this.player.x, this.player.y);
                }
            }
            // stacked side
            if (this.isSideFireModeEnabled) {
                var bulletLeft = this.lasers.get();
                if (bulletLeft) {
                    bulletLeft.fireSideLeft(this.player.x, this.player.y);
                }
                var bulletRight = this.lasers.get();
                if (bulletRight) {
                    bulletRight.fireSideRight(this.player.x, this.player.y);
                }
            }
        }
        var gameDifficulty = Math.ceil((time - this.startTime) / 60000);
        // SPAWN ENEMY    
        // enemy level 1 (default)
        this.lastEnemyLevel1Spawn -= delta;
        if (this.lastEnemyLevel1Spawn < 0) {
            var e = this.enemies1.get();
            if (e) {
                e.launch(Phaser.Math.Between(50, this.displayWidth - 50), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1), gameDifficulty / 2);
            }
            this.lastEnemyLevel1Spawn += 1000;
        }
        // enemy level 2 (after 1 minute)
        this.lastEnemyLevel2Spawn -= delta;
        if (this.lastEnemyLevel2Spawn < 0) {
            var e = this.enemies2.get();
            if (e) {
                e.launch(Phaser.Math.Between(50, this.displayWidth - 50), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1), gameDifficulty / 2);
            }
            this.lastEnemyLevel2Spawn += 3000;
        }
        // enemy level 3 (after 2 minutes)
        this.lastEnemyLevel3Spawn -= delta;
        if (this.lastEnemyLevel3Spawn < 0) {
            var e = this.enemies3.get();
            if (e) {
                e.launch(Phaser.Math.Between(50, this.displayWidth - 50), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1), gameDifficulty / 2);
            }
            this.lastEnemyLevel3Spawn += 3000;
        }
        // SPAWN ASTEROID    
        this.lastAsteroidSpawn -= delta;
        if (this.lastAsteroidSpawn < 0) {
            var asteroid = this.asteroidsBig.get();
            if (asteroid) {
                asteroid.launch(Phaser.Math.Between(50, this.displayWidth - 50), -50, 0, Phaser.Math.GetSpeed(Phaser.Math.Between(15, 25), 1));
                asteroid.health = gameDifficulty * 2;
            }
            this.lastAsteroidSpawn += 5000;
        }
        // SPAWN POWERUP    
        this.lastPowerupSpawn -= delta;
        if (this.lastPowerupSpawn < 0) {
            var powerupGroup = this.powerupsScore;
            var nPowerupTypes = 3;
            switch (Math.floor(Math.random() * nPowerupTypes)) {
                case 0:
                    powerupGroup = this.powerupsScore;
                    break;
                case 1:
                    powerupGroup = this.powerupsFirepower;
                    break;
                case 2:
                    powerupGroup = this.powerupsDefense;
                    break;
            }
            var powerup = powerupGroup.get();
            if (powerup) {
                powerup.launch(Phaser.Math.Between(50, this.displayWidth - 50), -50);
            }
            this.lastPowerupSpawn += 30000;
        }
    };
    Play.prototype.constrainVelocity = function (sprite, maxVelocity) {
        if (!sprite || !sprite.body)
            return;
        var angle, currVelocitySqr, vx, vy;
        vx = sprite.body.velocity.x;
        vy = sprite.body.velocity.y;
        currVelocitySqr = vx * vx + vy * vy;
        if (currVelocitySqr > maxVelocity * maxVelocity) {
            angle = Math.atan2(vy, vx);
            vx = Math.cos(angle) * maxVelocity;
            vy = Math.sin(angle) * maxVelocity;
            sprite.body.velocity.x = vx;
            sprite.body.velocity.y = vy;
        }
    };
    Play.prototype.collideLaserEnemy = function (laser, enemy) {
        if (!laser.active)
            return;
        if (!enemy.active)
            return;
        laser.setActive(false).setVisible(false);
        if (!enemy.hit()) {
            return;
        }
        enemy.setActive(false).setVisible(false);
        this.score += 1;
        this.scoreText.text = "Score: " + this.score;
        this.explosionEmitter.explode(10, enemy.x, enemy.y);
    };
    Play.prototype.collideLaserAsteroid = function (laser, asteroid) {
        if (!laser.active)
            return;
        if (!asteroid.active)
            return;
        laser.setActive(false).setVisible(false);
        if (!asteroid.hit()) {
            return;
        }
        asteroid.setActive(false).setVisible(false);
        // split big asteroids
        if (asteroid instanceof AsteroidBig_1.AsteroidBig) {
            var left = this.asteroidsMedium.get();
            if (left) {
                left.launch(asteroid.x - 30, asteroid.y, -Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                left.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(20, 50), 1);
            }
            var right = this.asteroidsMedium.get();
            if (right) {
                right.launch(asteroid.x + 30, asteroid.y, Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                right.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(20, 50), 1);
            }
        }
        if (asteroid instanceof AsteroidMedium_1.AsteroidMedium) {
            var left = this.asteroidsSmall.get();
            if (left) {
                left.launch(asteroid.x - 15, asteroid.y, -Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                left.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(40, 70), 1);
            }
            var right = this.asteroidsSmall.get();
            if (right) {
                right.launch(asteroid.x + 15, asteroid.y, Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                right.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(40, 70), 1);
            }
        }
    };
    Play.prototype.collidePlayerEnemy = function (player, enemy) {
        if (!player.active)
            return;
        if (!enemy.active)
            return;
        enemy.setActive(false).setVisible(false);
        this.playerHit();
        this.explosionEmitter.explode(10, enemy.x, enemy.y);
    };
    Play.prototype.collidePlayerAsteroid = function (player, asteroid) {
        if (!player.active)
            return;
        if (!asteroid.active)
            return;
        asteroid.setActive(false).setVisible(false);
        this.playerHit();
    };
    Play.prototype.collidePlayerPowerUp = function (player, powerup) {
        if (!player.active)
            return;
        if (!powerup.active)
            return;
        powerup.setActive(false).setVisible(false);
        if (powerup instanceof PowerUpScore_1.PowerUpScore) {
            this.score += 100;
            this.scoreText.text = "Score: " + this.score;
        }
        else if (powerup instanceof PowerUpFirepower_1.PowerUpFirepower) {
            if (!this.isFrontFireModeEnabled) {
                this.isFrontFireModeEnabled = true;
            }
            else if (!this.isSideFireModeEnabled) {
                this.isSideFireModeEnabled = true;
            }
            else if (!this.isRearFireModeEnabled) {
                this.isRearFireModeEnabled = true;
            }
            else {
                this.score += 10;
                this.scoreText.text = "Score: " + this.score;
            }
        }
        else if (powerup instanceof PowerUpDefense_1.PowerUpDefense) {
            this.lives += 1;
            this.livesText.text = "Lives: " + this.lives;
        }
    };
    Play.prototype.playerHit = function () {
        this.lives -= 1;
        this.livesText.text = "Lives: " + this.lives;
        if (this.lives <= 0) {
            this.player.setActive(false).setVisible(false);
            this.time.delayedCall(500, this.gameOver, [], this);
        }
        this.explosionEmitter.explode(10, this.player.x, this.player.y);
    };
    Play.prototype.gameOver = function () {
        this.scene.restart();
        this.score = 0;
        this.lives = 3;
        this.isFrontFireModeEnabled = false;
        this.isSideFireModeEnabled = false;
        this.isRearFireModeEnabled = false;
        this.startTime = this.time.now;
        this.lastEnemyLevel1Spawn = 0;
        this.lastEnemyLevel2Spawn = 0;
        this.lastEnemyLevel3Spawn = 0;
    };
    return Play;
}(Phaser.Scene));
exports.Play = Play;


/***/ }),

/***/ "./src/PowerUps/PowerUp.ts":
/*!*********************************!*\
  !*** ./src/PowerUps/PowerUp.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerUp = void 0;
// Siilar to Bullet, here we model the player's adversary setting up its Arcade body
// and providing simple movement in update(...) method
var PowerUp = /** @class */ (function (_super) {
    __extends(PowerUp, _super);
    function PowerUp(scene, texture, speed) {
        if (texture === void 0) { texture = "powerupScore"; }
        if (speed === void 0) { speed = Phaser.Math.GetSpeed(50, 1); }
        var _this = _super.call(this, scene, 0, 0, texture) || this;
        _this.spriteScale = 1;
        _this.animationDuration = 1000;
        _this.animationScaleChange = 0.1;
        _this.spriteTexture = texture;
        _this.speed = speed;
        _this.setDepth(100);
        return _this;
    }
    PowerUp.prototype.launch = function (x, y) {
        Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
        this.setScale(this.spriteScale, this.spriteScale);
        this.scene.physics.add.existing(this);
        this.body.setSize(this.spriteScale, this.spriteScale);
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        return this;
    };
    PowerUp.prototype.update = function (time, delta) {
        this.y += this.speed * delta;
        // animate "heartbeat"
        var timePhase = time % this.animationDuration;
        var scaleOffset = Math.sin(timePhase / this.animationDuration * Phaser.Math.PI2) * this.animationScaleChange;
        this.setScale(this.spriteScale + scaleOffset, this.spriteScale + scaleOffset);
        if (this.y > Number(this.scene.game.config.height) + 50) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    return PowerUp;
}(Phaser.Physics.Arcade.Sprite));
exports.PowerUp = PowerUp;


/***/ }),

/***/ "./src/PowerUps/PowerUpDefense.ts":
/*!****************************************!*\
  !*** ./src/PowerUps/PowerUpDefense.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerUpDefense = void 0;
var PowerUp_1 = __webpack_require__(/*! ./PowerUp */ "./src/PowerUps/PowerUp.ts");
var PowerUpDefense = /** @class */ (function (_super) {
    __extends(PowerUpDefense, _super);
    function PowerUpDefense(scene) {
        return _super.call(this, scene, "powerupDefense") || this;
    }
    return PowerUpDefense;
}(PowerUp_1.PowerUp));
exports.PowerUpDefense = PowerUpDefense;


/***/ }),

/***/ "./src/PowerUps/PowerUpFirepower.ts":
/*!******************************************!*\
  !*** ./src/PowerUps/PowerUpFirepower.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerUpFirepower = void 0;
var PowerUp_1 = __webpack_require__(/*! ./PowerUp */ "./src/PowerUps/PowerUp.ts");
var PowerUpFirepower = /** @class */ (function (_super) {
    __extends(PowerUpFirepower, _super);
    function PowerUpFirepower(scene) {
        return _super.call(this, scene, "powerupFirepower") || this;
    }
    return PowerUpFirepower;
}(PowerUp_1.PowerUp));
exports.PowerUpFirepower = PowerUpFirepower;


/***/ }),

/***/ "./src/PowerUps/PowerUpScore.ts":
/*!**************************************!*\
  !*** ./src/PowerUps/PowerUpScore.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerUpScore = void 0;
var PowerUp_1 = __webpack_require__(/*! ./PowerUp */ "./src/PowerUps/PowerUp.ts");
var PowerUpScore = /** @class */ (function (_super) {
    __extends(PowerUpScore, _super);
    function PowerUpScore(scene) {
        return _super.call(this, scene, "powerupScore") || this;
    }
    return PowerUpScore;
}(PowerUp_1.PowerUp));
exports.PowerUpScore = PowerUpScore;


/***/ }),

/***/ "./src/Projectiles/Bullet.ts":
/*!***********************************!*\
  !*** ./src/Projectiles/Bullet.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = void 0;
// Bullet to shoot enemies with; it features Arcade body in order to be able to collide
// Movement is done in update(...) method
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(scene) {
        var _this = _super.call(this, scene, 0, 0, "bullet") || this;
        _this.speed = Phaser.Math.GetSpeed(300, 1);
        _this.direction = new Phaser.Math.Vector2(0, -1);
        return _this;
    }
    Bullet.prototype.fire = function (x, y, angle) {
        if (angle === void 0) { angle = 0; }
        // Will re-call Sprite constructor for this instance
        // For params see: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
        // We need to reinitialize the sprite here because we might have been "drawn" from the pool
        Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, 'bullet');
        this.scene.physics.add.existing(this);
        this.setPosition(x, y);
        // reset rotation
        this.direction = new Phaser.Math.Vector2(0, -1);
        this.setRotation(0);
        // set new rotation
        this.direction.rotate(angle * Phaser.Math.DEG_TO_RAD);
        this.setRotation(angle * Phaser.Math.DEG_TO_RAD);
        this.setActive(true);
        this.setVisible(true);
    };
    Bullet.prototype.fireDefault = function (x, y) {
        // model sprite is not well aligned
        this.fire(x + 5, y - 15);
    };
    Bullet.prototype.fireFrontLeft = function (x, y) {
        this.fire(x - 20, y);
    };
    Bullet.prototype.fireFrontRight = function (x, y) {
        this.fire(x + 30, y);
    };
    Bullet.prototype.fireRearLeft = function (x, y) {
        this.fire(x - 20, y + 60, 180);
    };
    Bullet.prototype.fireRearRight = function (x, y) {
        this.fire(x + 30, y + 60, 180);
    };
    Bullet.prototype.fireSideLeft = function (x, y) {
        this.fire(x - 50, y + 30, 270);
    };
    Bullet.prototype.fireSideRight = function (x, y) {
        this.fire(x + 60, y + 30, 90);
    };
    Bullet.prototype.update = function (time, delta) {
        // update position
        this.x += this.direction.x * this.speed * delta;
        this.y += this.direction.y * this.speed * delta;
        // deactivate out of display bullets
        if (this.y < -50
            || this.y > Number(this.scene.game.config.height) + 50
            || this.x < -50
            || this.x > Number(this.scene.game.config.width) + 50) {
            this.setActive(false);
            this.setVisible(false);
            // reset rotation for the next use
            this.direction = new Phaser.Math.Vector2(0, -1);
            this.setRotation(0);
        }
    };
    return Bullet;
}(Phaser.Physics.Arcade.Sprite));
exports.Bullet = Bullet;


/***/ }),

/***/ "./src/ZGame.ts":
/*!**********************!*\
  !*** ./src/ZGame.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gameConfig = void 0;
var Boot_1 = __webpack_require__(/*! ./Boot */ "./src/Boot.ts");
var Menu_1 = __webpack_require__(/*! ./Menu */ "./src/Menu.ts");
var Play_1 = __webpack_require__(/*! ./Play */ "./src/Play.ts");
// Setting up the Phaser 3; game config is configuring Phaser 3 engine in index.ts
exports.gameConfig = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [Boot_1.Boot, Menu_1.Menu, Play_1.Play],
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FzdGVyb2lkcy9Bc3Rlcm9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXN0ZXJvaWRzL0FzdGVyb2lkQmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9Bc3Rlcm9pZHMvQXN0ZXJvaWRNZWRpdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FzdGVyb2lkcy9Bc3Rlcm9pZFNtYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9Cb290LnRzIiwid2VicGFjazovLy8uL3NyYy9FbmVtaWVzL0VuZW15LnRzIiwid2VicGFjazovLy8uL3NyYy9FbmVtaWVzL0VuZW15Q2lyY3VsYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZW1pZXMvRW5lbXlTaWRld2F5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5lbWllcy9FbmVteVN0cmFpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9FbnZpcm9ubWVudC9TdGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9Qb3dlclVwcy9Qb3dlclVwLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb3dlclVwcy9Qb3dlclVwRGVmZW5zZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG93ZXJVcHMvUG93ZXJVcEZpcmVwb3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG93ZXJVcHMvUG93ZXJVcFNjb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9qZWN0aWxlcy9CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1pHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RjJCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FpRnZEO0FBakZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCLGdFQUE4QjtBQUM5QixnRUFBOEI7QUFDOUIsZ0VBQThCO0FBRTlCLGtGQUFrRjtBQUN2RSxrQkFBVSxHQUFHO0lBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUNqQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsZUFBZSxFQUFFLFFBQVE7SUFDekIsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUNwQjtLQUNKO0lBQ0QsS0FBSyxFQUFFLENBQUMsV0FBSSxFQUFFLFdBQUksRUFBRSxXQUFJLENBQUM7Q0FDNUIsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXgudHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBERVBFTkRFTkNJRVNcclxuaW1wb3J0ICdwaGFzZXInO1xyXG5cclxuLy8gUlVOIE1BSU5cclxuaW1wb3J0IHsgZ2FtZUNvbmZpZyB9IGZyb20gJy4vc3JjL1pHYW1lJztcclxuXHJcbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG53aW5kb3cuZm9jdXMoKTsiLCIgICAgLy8gU2lpbGFyIHRvIEJ1bGxldCwgaGVyZSB3ZSBtb2RlbCB0aGUgcGxheWVyJ3MgYWR2ZXJzYXJ5IHNldHRpbmcgdXAgaXRzIEFyY2FkZSBib2R5XHJcbiAgICAvLyBhbmQgcHJvdmlkaW5nIHNpbXBsZSBtb3ZlbWVudCBpbiB1cGRhdGUoLi4uKSBtZXRob2RcclxuICAgIGV4cG9ydCBjbGFzcyBBc3Rlcm9pZCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gIFxyXG4gICAgICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoMjAsIDEpO1xyXG4gICAgICAgIHB1YmxpYyBsYXRlcmFsU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZVRleHR1cmU6IHN0cmluZyA9IFwiYXN0ZXJvaWRCaWcxXCI7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZVNjYWxlOiBudW1iZXIgPSAwLjY7XHJcbiAgICAgICAgcHVibGljIGhlYWx0aDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRleHR1cmU/OiBzdHJpbmcsIHNwcml0ZVNjYWxlPzogbnVtYmVyLCBzcGVlZD86IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgdGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGVTY2FsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlU2NhbGUgPSBzcHJpdGVTY2FsZTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREZXB0aCgxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXVuY2goeDogbnVtYmVyLCB5OiBudW1iZXIsIGxhdGVyYWxTcGVlZDogbnVtYmVyID0gMCwgc3BlZWQ/OiBudW1iZXIpIDogQXN0ZXJvaWQge1xyXG4gICAgICAgICAgICBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLmNhbGwodGhpcywgdGhpcy5zY2VuZSwgMCwgMCwgdGhpcy5zcHJpdGVUZXh0dXJlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5zcHJpdGVTY2FsZSwgdGhpcy5zcHJpdGVTY2FsZSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldFNpemUodGhpcy5zcHJpdGVTY2FsZSwgdGhpcy5zcHJpdGVTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhdGVyYWxTcGVlZCA9IGxhdGVyYWxTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGVlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMubGF0ZXJhbFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy55ID4gTnVtYmVyKHRoaXMuc2NlbmUuZ2FtZS5jb25maWcuaGVpZ2h0KSArIDUwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkZXN0cm95ZWQgYnkgdGhlIGhpdFxyXG4gICAgICAgIGhpdCgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8vIHNtYWxsIGFzdGVyb2lkcyBhcmUgZGVzdHJveWVkIGJ5IG9uZSBoaXQgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiIsIiAgICBpbXBvcnQgeyBBc3Rlcm9pZCB9IGZyb20gXCIuL0FzdGVyb2lkXCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBBc3Rlcm9pZEJpZyBleHRlbmRzIEFzdGVyb2lkIHtcclxuXHJcbiAgICAgICAgc3RhdGljIHRleHR1cmVzOiBBcnJheTxzdHJpbmc+ID0gW1wiYXN0ZXJvaWRCaWcxXCIsIFwiYXN0ZXJvaWRCaWcyXCIsIFwiYXN0ZXJvaWRCaWczXCIsIFwiYXN0ZXJvaWRCaWc0XCJdXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBzY2VuZTogUGhhc2VyLlNjZW5lICkge1xyXG4gICAgICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgICBzY2VuZSwgXHJcbiAgICAgICAgICAgICAgQXN0ZXJvaWRCaWcudGV4dHVyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQXN0ZXJvaWRCaWcudGV4dHVyZXMubGVuZ3RoKV0sXHJcbiAgICAgICAgICAgICAgMC42LFxyXG4gICAgICAgICAgICAgIFBoYXNlci5NYXRoLkdldFNwZWVkKDIwLCAxKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkZXN0cm95ZWQgYnkgdGhlIGhpdFxyXG4gICAgICAgIGhpdCgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIiwiICAgIGltcG9ydCB7IEFzdGVyb2lkIH0gZnJvbSBcIi4vQXN0ZXJvaWRcIjtcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEFzdGVyb2lkTWVkaXVtIGV4dGVuZHMgQXN0ZXJvaWQge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGV4dHVyZXM6IEFycmF5PHN0cmluZz4gPSBbXCJhc3Rlcm9pZE1lZGl1bTFcIiwgXCJhc3Rlcm9pZE1lZGl1bTJcIl1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICAgIHNjZW5lLCBcclxuICAgICAgICAgICAgICBBc3Rlcm9pZE1lZGl1bS50ZXh0dXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBBc3Rlcm9pZE1lZGl1bS50ZXh0dXJlcy5sZW5ndGgpXSxcclxuICAgICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgICAgUGhhc2VyLk1hdGguR2V0U3BlZWQoNDAsIDEpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiIsIiAgICBpbXBvcnQgeyBBc3Rlcm9pZCB9IGZyb20gXCIuL0FzdGVyb2lkXCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBBc3Rlcm9pZFNtYWxsIGV4dGVuZHMgQXN0ZXJvaWQge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGV4dHVyZXM6IEFycmF5PHN0cmluZz4gPSBbXCJhc3Rlcm9pZFNtYWxsMVwiLCBcImFzdGVyb2lkU21hbGwyXCJdXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBzY2VuZTogUGhhc2VyLlNjZW5lICkge1xyXG4gICAgICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgICBzY2VuZSwgXHJcbiAgICAgICAgICAgICAgQXN0ZXJvaWRTbWFsbC50ZXh0dXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBBc3Rlcm9pZFNtYWxsLnRleHR1cmVzLmxlbmd0aCldLFxyXG4gICAgICAgICAgICAgIDAuNixcclxuICAgICAgICAgICAgICBQaGFzZXIuTWF0aC5HZXRTcGVlZCg4MCwgMSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH1cclxuIiwiICBleHBvcnQgY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICAgc3VwZXIoXCJCb290XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJCb290LnByZWxvYWQoKVwiKTtcclxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gdXNlIGpzZGVsaXZyLm5ldCBpbiBvcmRlciB0byBiZSBhYmxlIHRvIGdldCBHaXRodWIgc3R1ZmY7IHlvdSBjYW4gY2xpY2stdGhyb3VnaCB0aGUgbGluayB0byBzZWUgYWxsIHRoZSBjb250ZW50IHdlIGhhdmUgdGhlcmVcclxuICAgICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2tlZmlrL2tlbm5leS9TaG9vdGVyL1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gcGxheWVyIHNoaXBzXHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJwbGF5ZXJzaGlwMVwiLCBcInBsYXllclNoaXAxX2JsdWUucG5nXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBwcm9qZWN0aWxlc1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYnVsbGV0XCIsIFwibGFzZXJzL2xhc2VyQmx1ZTAxLnBuZ1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gZW5lbWllc1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiZW5lbXkxXCIsIFwiZW5lbWllcy9lbmVteUdyZWVuMS5wbmdcIik7XHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJlbmVteTJcIiwgXCJlbmVtaWVzL2VuZW15UmVkNC5wbmdcIik7XHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJlbmVteTNcIiwgXCJ1Zm9SZWQucG5nXCIpO1xyXG5cclxuICAgICAgICAgIC8vIGFzdGVyb2lkc1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYXN0ZXJvaWRCaWcxXCIsIFwibWV0ZW9ycy9tZXRlb3JHcmV5X2JpZzEucG5nXCIpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYXN0ZXJvaWRCaWcyXCIsIFwibWV0ZW9ycy9tZXRlb3JHcmV5X2JpZzIucG5nXCIpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYXN0ZXJvaWRCaWczXCIsIFwibWV0ZW9ycy9tZXRlb3JHcmV5X2JpZzMucG5nXCIpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYXN0ZXJvaWRCaWc0XCIsIFwibWV0ZW9ycy9tZXRlb3JHcmV5X2JpZzQucG5nXCIpO1xyXG5cclxuICAgICAgICAgIHRoaXMubG9hZC5pbWFnZShcImFzdGVyb2lkTWVkaXVtMVwiLCBcIm1ldGVvcnMvbWV0ZW9yR3JleV9tZWQxLnBuZ1wiKTtcclxuICAgICAgICAgIHRoaXMubG9hZC5pbWFnZShcImFzdGVyb2lkTWVkaXVtMlwiLCBcIm1ldGVvcnMvbWV0ZW9yR3JleV9tZWQyLnBuZ1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwiYXN0ZXJvaWRTbWFsbDFcIiwgXCJtZXRlb3JzL21ldGVvckdyZXlfc21hbGwxLnBuZ1wiKTtcclxuICAgICAgICAgIHRoaXMubG9hZC5pbWFnZShcImFzdGVyb2lkU21hbGwyXCIsIFwibWV0ZW9ycy9tZXRlb3JHcmV5X3NtYWxsMi5wbmdcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIHBvd2VyLXVwc1xyXG4gICAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwicG93ZXJ1cFNjb3JlXCIsIFwicG93ZXJ1cHMvcG93ZXJ1cEJsdWVfc3Rhci5wbmdcIik7XHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJwb3dlcnVwRmlyZXBvd2VyXCIsIFwicG93ZXJ1cHMvcG93ZXJ1cEJsdWVfYm9sdC5wbmdcIik7XHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJwb3dlcnVwRGVmZW5zZVwiLCBcInBvd2VydXBzL3Bvd2VydXBCbHVlX3NoaWVsZC5wbmdcIik7XHJcblxyXG4gICAgICAgICAgLy8gZW52aXJvbm1lbnRcclxuICAgICAgICAgIHRoaXMubG9hZC5pbWFnZShcInN0YXJcIiwgXCJlZmZlY3RzL3N0YXIyLnBuZ1wiKTtcclxuXHJcbiAgICAgICAgICAvLyBlZmZlY3RzXHJcbiAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJleHBsb3Npb25cIiwgXCJlZmZlY3RzL3N0YXIzLnBuZ1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3JlYXRlKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJCb290LmNyZWF0ZSgpXCIpO1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcIk1lbnVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgfSIsIiAgICAvLyBTaWlsYXIgdG8gQnVsbGV0LCBoZXJlIHdlIG1vZGVsIHRoZSBwbGF5ZXIncyBhZHZlcnNhcnkgc2V0dGluZyB1cCBpdHMgQXJjYWRlIGJvZHlcclxuICAgIC8vIGFuZCBwcm92aWRpbmcgc2ltcGxlIG1vdmVtZW50IGluIHVwZGF0ZSguLi4pIG1ldGhvZFxyXG4gICAgZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgXHJcbiAgICAgICAgcHVibGljIHNwZWVkOiBudW1iZXI7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZVRleHR1cmU6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgc3ByaXRlU2NhbGU6IG51bWJlciA9IDAuMztcclxuICAgICAgICBwdWJsaWMgaGVhbHRoOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBzY2VuZTogUGhhc2VyLlNjZW5lLCB0ZXh0dXJlOiBzdHJpbmcgPSBcImVuZW15MVwiLCBzcGVlZDogbnVtYmVyID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNTAsIDEpICkge1xyXG4gICAgICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgdGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGgoMTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhdW5jaCh4OiBudW1iZXIsIHk6IG51bWJlciwgc3BlZWQ/Om51bWJlciwgaGVhbHRoPzogbnVtYmVyKSA6IEVuZW15IHtcclxuICAgICAgICAgICAgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZS5jYWxsKHRoaXMsIHRoaXMuc2NlbmUsIDAsIDAsIHRoaXMuc3ByaXRlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKHRoaXMuc3ByaXRlU2NhbGUsIHRoaXMuc3ByaXRlU2NhbGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldFNpemUodGhpcy5zcHJpdGVTY2FsZSwgdGhpcy5zcHJpdGVTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoc3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoZWFsdGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnkgPiBOdW1iZXIodGhpcy5zY2VuZS5nYW1lLmNvbmZpZy5oZWlnaHQpICsgNTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0cnVlIGlmIGRlc3Ryb3llZCBieSB0aGUgaGl0XHJcbiAgICAgICAgaGl0KCkgOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuIiwiICAgIGltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4vRW5lbXlcIjtcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEVuZW15Q2lyY3VsYXIgZXh0ZW5kcyBFbmVteSB7XHJcbiAgXHJcbiAgICAgICAgYmFzZVg6IG51bWJlcjtcclxuICAgICAgICBiYXNlWTogbnVtYmVyO1xyXG4gICAgICAgIHRpbWVQZXJpb2Q6IG51bWJlciA9IDIwMDA7XHJcbiAgICAgICAgcmFuZG9tVGltZU9mZnNldDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aW1lUGVyaW9kKTtcclxuICAgICAgICBtb3ZlbWVudFJhZGl1czogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvciggc2NlbmU6IFBoYXNlci5TY2VuZSApIHtcclxuICAgICAgICAgICAgc3VwZXIoc2NlbmUsIFwiZW5lbXkzXCIpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBsYXVuY2goeDogbnVtYmVyLCB5OiBudW1iZXIpIDogRW5lbXkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VYID0geDtcclxuICAgICAgICAgICAgdGhpcy5iYXNlWSA9IHk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5sYXVuY2goeCwgeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2lyY3VsYXIgcGVyaW9kaWMgbW90aW9uXHJcbiAgICAgICAgICAgIGxldCB0aW1lUGhhc2U6IG51bWJlciA9ICh0aW1lICsgdGhpcy5yYW5kb21UaW1lT2Zmc2V0KSAlIHRoaXMudGltZVBlcmlvZDtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLnNpbih0aW1lUGhhc2UgLyB0aGlzLnRpbWVQZXJpb2QgKiBQaGFzZXIuTWF0aC5QSTIpICogdGhpcy5tb3ZlbWVudFJhZGl1cztcclxuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLmNvcyh0aW1lUGhhc2UgLyB0aGlzLnRpbWVQZXJpb2QgKiBQaGFzZXIuTWF0aC5QSTIpICogdGhpcy5tb3ZlbWVudFJhZGl1cztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuYmFzZVggKyBvZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmJhc2VZICsgb2Zmc2V0WTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnkgPiBOdW1iZXIodGhpcy5zY2VuZS5nYW1lLmNvbmZpZy5oZWlnaHQpICsgNTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiIsIiAgICBpbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuL0VuZW15XCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBFbmVteVNpZGV3YXlzIGV4dGVuZHMgRW5lbXkge1xyXG5cclxuICAgICAgICBzdGFydGluZ1g6IG51bWJlcjtcclxuICAgICAgICB0aW1lUGVyaW9kOiBudW1iZXIgPSAyMDAwO1xyXG4gICAgICAgIHJhbmRvbVRpbWVPZmZzZXQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGltZVBlcmlvZCk7XHJcbiAgICAgICAgc2lkZXdheXNFeHRlbnQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNjZW5lLCBcImVuZW15MlwiKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgbGF1bmNoKHg6IG51bWJlciwgeTogbnVtYmVyKSA6IEVuZW15IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGluZ1ggPSB4O1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIubGF1bmNoKHgsIHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gc2lkZXdheXMgcGVyaW9kaWMgbW90aW9uXHJcbiAgICAgICAgICAgIGxldCB0aW1lUGhhc2U6IG51bWJlciA9ICh0aW1lICsgdGhpcy5yYW5kb21UaW1lT2Zmc2V0KSAlIHRoaXMudGltZVBlcmlvZDtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLnNpbih0aW1lUGhhc2UgLyB0aGlzLnRpbWVQZXJpb2QgKiBQaGFzZXIuTWF0aC5QSTIpICogdGhpcy5zaWRld2F5c0V4dGVudDtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zdGFydGluZ1ggKyBvZmZzZXRYO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMueSA+IE51bWJlcih0aGlzLnNjZW5lLmdhbWUuY29uZmlnLmhlaWdodCkgKyA1MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIiwiICAgIGltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4vRW5lbXlcIjtcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEVuZW15U3RyYWlnaHQgZXh0ZW5kcyBFbmVteSB7XHJcbiAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNjZW5lLCBcImVuZW15MVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiIsIiAgICAvLyBTaW1pbGFyIHRvIEJ1bGxldCwgaGVyZSB3ZSBtb2RlbCB0aGUgcGxheWVyJ3MgYWR2ZXJzYXJ5IHNldHRpbmcgdXAgaXRzIEFyY2FkZSBib2R5XHJcbiAgICAvLyBhbmQgcHJvdmlkaW5nIHNpbXBsZSBtb3ZlbWVudCBpbiB1cGRhdGUoLi4uKSBtZXRob2RcclxuICAgIGV4cG9ydCBjbGFzcyBTdGFyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBtYXhTcGVlZDogbnVtYmVyID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNTAsIDEpO1xyXG4gICAgICAgIHB1YmxpYyBzcHJpdGVUZXh0dXJlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZVNjYWxlOiBudW1iZXI7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZU1pblNjYWxlOiBudW1iZXIgPSAwLjE7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZU1heFNjYWxlOiBudW1iZXIgPSAwLjM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCBcInN0YXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlVGV4dHVyZSA9IFwic3RhclwiO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gcmFuZG9tVmFsdWUgKiB0aGlzLm1heFNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZVNjYWxlID0gdGhpcy5zcHJpdGVNaW5TY2FsZSArIHJhbmRvbVZhbHVlICogKHRoaXMuc3ByaXRlTWF4U2NhbGUgLSB0aGlzLnNwcml0ZU1pblNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhdW5jaCh4OiBudW1iZXIsIHk6IG51bWJlcikgOiBTdGFyIHtcclxuICAgICAgICAgICAgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZS5jYWxsKHRoaXMsIHRoaXMuc2NlbmUsIDAsIDAsIHRoaXMuc3ByaXRlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKHRoaXMuc3ByaXRlU2NhbGUsIHRoaXMuc3ByaXRlU2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMueSA+IE51bWJlcih0aGlzLnNjZW5lLmdhbWUuY29uZmlnLmhlaWdodCkgKyAyNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTI1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG5cclxuIiwiICBpbXBvcnQgeyBTdGFyIH0gZnJvbSBcIi4vRW52aXJvbm1lbnQvU3RhclwiO1xyXG5cclxuICBleHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICAgIFxyXG4gICAgICBzdGFyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgICBoZWFkZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICBzdXBlcihcIk1lbnVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICAgIC8vIHNldHVwIGJhY2tncm91bmRcclxuICAgICAgICAgIHRoaXMuc3RhcnMgPSB0aGlzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgICAgY2xhc3NUeXBlOiBTdGFyLFxyXG4gICAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQgc3RhciBkZW5zaXR5IGFjcm9zcyB2YXJpb3VzIGRpc3BsYXkgcmVzb2x1dGlvbnNcclxuICAgICAgICAgICAgICBtYXhTaXplOiBNYXRoLmZsb29yKDEuMCAqIChOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCkgKiBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpKSAvICg0ODAqNjQwKSAqIDEwMCksXHJcbiAgICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJzLm1heFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBzdGFyIDogU3RhciA9IHRoaXMuc3RhcnMuZ2V0KCkgYXMgU3RhcjtcclxuICAgICAgICAgICAgICBpZiAoc3RhcikgeyBcclxuICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbVggPSBNYXRoLnJhbmRvbSgpICogTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWSA9IE1hdGgucmFuZG9tKCkgKiBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpICsgNTA7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXIubGF1bmNoKHJhbmRvbVgsIHJhbmRvbVkpOyAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGRyYXcgbWVudVxyXG4gICAgICAgICAgdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgICBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCkgLyAyIC0gMTgwLCBcclxuICAgICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICAgIFtcIkNsYXNzaWNcIiwgXCJTaDAwdGVyXCJdLCB7IFxyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsIFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzM2YmJmNScsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDEwMCxcclxuICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpIC8gMiAtIDE4MCxcclxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0KSAtIDEwMCwgXCJQcmVzcyBhbnkga2V5IHRvIHN0YXJ0LlwiLCB7IFxyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsIFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzM2YmJmNScsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBzdGFydCBnYW1lIHdoZW4gYW55IGtleSBpcyBwcmVzc2VkXHJcbiAgICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcIlBsYXlcIik7IFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgfSIsImltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL1Byb2plY3RpbGVzL0J1bGxldFwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuL0VuZW1pZXMvRW5lbXlcIjtcclxuaW1wb3J0IHsgRW5lbXlTdHJhaWdodCB9IGZyb20gXCIuL0VuZW1pZXMvRW5lbXlTdHJhaWdodFwiO1xyXG5pbXBvcnQgeyBFbmVteVNpZGV3YXlzIH0gZnJvbSBcIi4vRW5lbWllcy9FbmVteVNpZGV3YXlzXCI7XHJcbmltcG9ydCB7IEVuZW15Q2lyY3VsYXIgfSBmcm9tIFwiLi9FbmVtaWVzL0VuZW15Q2lyY3VsYXJcIjtcclxuaW1wb3J0IHsgQXN0ZXJvaWQgfSBmcm9tIFwiLi9Bc3Rlcm9pZHMvQXN0ZXJvaWRcIjtcclxuaW1wb3J0IHsgQXN0ZXJvaWRCaWcgfSBmcm9tIFwiLi9Bc3Rlcm9pZHMvQXN0ZXJvaWRCaWdcIjtcclxuaW1wb3J0IHsgQXN0ZXJvaWRNZWRpdW0gfSBmcm9tIFwiLi9Bc3Rlcm9pZHMvQXN0ZXJvaWRNZWRpdW1cIjtcclxuaW1wb3J0IHsgQXN0ZXJvaWRTbWFsbCB9IGZyb20gXCIuL0FzdGVyb2lkcy9Bc3Rlcm9pZFNtYWxsXCI7XHJcbmltcG9ydCB7IFBvd2VyVXAgfSBmcm9tIFwiLi9Qb3dlclVwcy9Qb3dlclVwXCI7XHJcbmltcG9ydCB7IFBvd2VyVXBTY29yZSB9IGZyb20gXCIuL1Bvd2VyVXBzL1Bvd2VyVXBTY29yZVwiO1xyXG5pbXBvcnQgeyBQb3dlclVwRmlyZXBvd2VyIH0gZnJvbSBcIi4vUG93ZXJVcHMvUG93ZXJVcEZpcmVwb3dlclwiO1xyXG5pbXBvcnQgeyBQb3dlclVwRGVmZW5zZSB9IGZyb20gXCIuL1Bvd2VyVXBzL1Bvd2VyVXBEZWZlbnNlXCI7XHJcbmltcG9ydCB7IFN0YXIgfSBmcm9tIFwiLi9FbnZpcm9ubWVudC9TdGFyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgZGlzcGxheVdpZHRoOiBudW1iZXI7XHJcbiAgICBkaXNwbGF5SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgcGxheWVyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xyXG5cclxuICAgIC8vIGhlcmUgd2Ugd2lsbCBzdG9yZSB0aGUgYWN0aW9uIG1hcHBpbmcgXCJhY3Rpb24gbmFtZVwiID0+IGtleWNvZGUgXHJcbiAgICBtb3ZlS2V5czoge1trZXk6c3RyaW5nXSA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXkgfTtcclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgYWN0IGFzIGEgcG9vbCBmb3IgQnVsbGV0KHMpIGFzIHdlbGwgYXMgXCJVbml0eSBjb2xsaXNpb24gbGF5ZXJcIlxyXG4gICAgbGFzZXJzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcblxyXG4gICAgaXNGcm9udEZpcmVNb2RlRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNTaWRlRmlyZU1vZGVFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1JlYXJGaXJlTW9kZUVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgYWN0IGFzIGEgcG9vbCBmb3IgRW5lbXkoaWVzKSBhcyB3ZWxsIGFzIFwiVW5pdHkgY29sbGlzaW9uIGxheWVyXCJcclxuICAgIGVuZW1pZXMxOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcbiAgICBlbmVtaWVzMjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xyXG4gICAgZW5lbWllczM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgYWN0IGFzIGEgcG9vbCBmb3IgQXN0ZXJvaWQocykgYXMgd2VsbCBhcyBcIlVuaXR5IGNvbGxpc2lvbiBsYXllclwiXHJcbiAgICBhc3Rlcm9pZHNCaWc6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuICAgIGFzdGVyb2lkc01lZGl1bTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xyXG4gICAgYXN0ZXJvaWRzU21hbGw6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgYWN0IGFzIGEgcG9vbCBmb3IgUG93ZXJVcChzKSBhcyB3ZWxsIGFzIFwiVW5pdHkgY29sbGlzaW9uIGxheWVyXCJcclxuICAgIHBvd2VydXBzU2NvcmU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuICAgIHBvd2VydXBzRmlyZXBvd2VyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcbiAgICBwb3dlcnVwc0RlZmVuc2U6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuICAgIFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCBwaHlzaWNzIGZvciBzdGFyc1xyXG4gICAgc3RhcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBleHBsb3Npb25QYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlcjtcclxuICAgIGV4cGxvc2lvbkVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyO1xyXG5cclxuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgbGFzdEVuZW15TGV2ZWwxU3Bhd246IG51bWJlciA9IDA7XHJcbiAgICBsYXN0RW5lbXlMZXZlbDJTcGF3bjogbnVtYmVyID0gNjAwMDA7XHJcbiAgICBsYXN0RW5lbXlMZXZlbDNTcGF3bjogbnVtYmVyID0gMTIwMDAwO1xyXG4gICAgbGFzdEFzdGVyb2lkU3Bhd246IG51bWJlciA9IDEwMDAwO1xyXG4gICAgbGFzdFBvd2VydXBTcGF3bjogbnVtYmVyID0gMzAwMDA7XHJcbiAgICBsYXN0U3RhclNwYXduOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgbGl2ZXM6IG51bWJlciA9IDM7XHJcblxyXG4gICAgc2NvcmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGxpdmVzVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJQbGF5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXkuY3JlYXRlKClcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheVdpZHRoID0gTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUhlaWdodCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoXHJcbiAgICAgICAgICAgIE51bWJlcih0aGlzLmdhbWUuY29uZmlnLndpZHRoKSAvIDIsIFxyXG4gICAgICAgICAgICBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpIC0gNTAsIFxyXG4gICAgICAgICAgICBcInBsYXllcnNoaXAxXCIpLnNldFNjYWxlKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRTaXplKHRoaXMucGxheWVyLmJvZHkud2lkdGggKiAwLjUsIHRoaXMucGxheWVyLmJvZHkuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXREZXB0aCgxMDApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVLZXlzID0gPHtba2V5OnN0cmluZ10gOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5IH0+IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5cyh7XHJcbiAgICAgICAgICAgICd1cCc6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5XLFxyXG4gICAgICAgICAgICAnZG93bic6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG4gICAgICAgICAgICAnbGVmdCc6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5BLFxyXG4gICAgICAgICAgICAncmlnaHQnOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgJ2ZpcmUnOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRW5hYmxlcyBtb3ZlbWVudCBvZiBwbGF5ZXIgd2l0aCBXQVNEIGtleXM7IG5vdGUgdGhhdCBldmVudCBuYW1lcyBhcmUgc3RyaW5nIGJhc2VkXHJcbiAgICAgICAgLy8gTm90ZSB0aGF0IFBoYXNlcjMgZG9jcyBhdCBodHRwczovL3Bob3RvbnN0b3JtLmdpdGh1Yi5pby9waGFzZXIzLWRvY3NcclxuICAgICAgICAvLyBhcmUgY29udGFpbmluZyB0aGUgd2hvbGUgc2VjdGlvbiBjYWxsZWQgXCJFdmVudHNcIiBsaXN0aW5nIGFsbCBleGlzdGluZyBldmVudHNcclxuICAgICAgICAvLyBhbmQgS2V5Ym9hcmQgaXMgZXh0ZW5kaW5nIHRoZSBzdGFuZGFyZCBzdHJpbmcgbm90YXRpb24gKGxvd2VyLWNhc2Ugdy9vIHN1ZmZpeCBFdmVudClcclxuICAgICAgICAvLyBieSBhZGRpbmcgXCJrZXljb2RlXCIgeW91IHdhbnQgdG8gcmVhY3QgdG9cclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duX1cnLCBmdW5jdGlvbiAoZXZlbnQ6IG9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBsYXllci5zZXRBY2NlbGVyYXRpb25ZKC04MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd25fUycsIGZ1bmN0aW9uIChldmVudDogb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGxheWVyLnNldEFjY2VsZXJhdGlvblkoODAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duX0EnLCBmdW5jdGlvbiAoZXZlbnQ6IG9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBsYXllci5zZXRBY2NlbGVyYXRpb25YKC04MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd25fRCcsIGZ1bmN0aW9uIChldmVudDogb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGxheWVyLnNldEFjY2VsZXJhdGlvblgoODAwKTtcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gU3RvcHMgcGxheWVyIGFjY2VsZXJhdGlvbiBvbiB1cHByZXNzIG9mIFdBU0Qga2V5c1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleXVwX1cnLCBmdW5jdGlvbiAoZXZlbnQ6IG9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZS5tb3ZlS2V5c1snZG93biddLmlzVXApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnBsYXllci5zZXRBY2NlbGVyYXRpb25ZKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleXVwX1MnLCBmdW5jdGlvbiAoZXZlbnQ6IG9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZS5tb3ZlS2V5c1sndXAnXS5pc1VwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5wbGF5ZXIuc2V0QWNjZWxlcmF0aW9uWSgwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXl1cF9BJywgZnVuY3Rpb24gKGV2ZW50OiBvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUubW92ZUtleXNbJ3JpZ2h0J10uaXNVcClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGxheWVyLnNldEFjY2VsZXJhdGlvblgoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5dXBfRCcsIGZ1bmN0aW9uIChldmVudDogb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLm1vdmVLZXlzWydsZWZ0J10uaXNVcClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGxheWVyLnNldEFjY2VsZXJhdGlvblgoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQlVMTEVUIEdST1VQXHJcbiAgICAgICAgdGhpcy5sYXNlcnMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBCdWxsZXQsXHJcbiAgICAgICAgICAgIG1heFNpemU6IDEwMCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gRU5FTVkgR1JPVVBcclxuICAgICAgICB0aGlzLmVuZW1pZXMxID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogRW5lbXlTdHJhaWdodCxcclxuICAgICAgICAgICAgbWF4U2l6ZTogMTAsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzMiA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEVuZW15U2lkZXdheXMsXHJcbiAgICAgICAgICAgIG1heFNpemU6IDEwLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW5lbWllczMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBFbmVteUNpcmN1bGFyLFxyXG4gICAgICAgICAgICBtYXhTaXplOiAxMCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQVNURVJPSUQgR1JPVVBcclxuICAgICAgICB0aGlzLmFzdGVyb2lkc0JpZyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEFzdGVyb2lkQmlnLFxyXG4gICAgICAgICAgICBtYXhTaXplOiAxMCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkc01lZGl1bSA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEFzdGVyb2lkTWVkaXVtLFxyXG4gICAgICAgICAgICBtYXhTaXplOiAyMCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkc1NtYWxsID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQXN0ZXJvaWRTbWFsbCxcclxuICAgICAgICAgICAgbWF4U2l6ZTogNDAsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBPV0VSVVAgR1JPVVBcclxuICAgICAgICB0aGlzLnBvd2VydXBzU2NvcmUgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBQb3dlclVwU2NvcmUsXHJcbiAgICAgICAgICAgIG1heFNpemU6IDMsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwc0ZpcmVwb3dlciA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFBvd2VyVXBGaXJlcG93ZXIsXHJcbiAgICAgICAgICAgIG1heFNpemU6IDMsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwc0RlZmVuc2UgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBQb3dlclVwRGVmZW5zZSxcclxuICAgICAgICAgICAgbWF4U2l6ZTogMyxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTVEFSUyBHUk9VUCBcclxuICAgICAgICB0aGlzLnN0YXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFN0YXIsXHJcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQgc3RhciBkZW5zaXR5IGFjcm9zcyB2YXJpb3VzIGRpc3BsYXkgcmVzb2x1dGlvbnNcclxuICAgICAgICAgICAgbWF4U2l6ZTogTWF0aC5mbG9vcigxLjAgKiAoTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpICogTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0KSkgLyAoNDgwKjY0MCkgKiAxMDApLCBcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTEFTRVJTIGtpbGwgRU5FTUlFU1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5sYXNlcnMsIHRoaXMuZW5lbWllczEsIHRoaXMuY29sbGlkZUxhc2VyRW5lbXksIG51bGwsIHRoaXMpOyAvLyBsYXN0IHBhcmFtZXRlciBpcyB0aGUgY29udGV4dCBwYXNzZWQgaW50byB0aGUgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMubGFzZXJzLCB0aGlzLmVuZW1pZXMyLCB0aGlzLmNvbGxpZGVMYXNlckVuZW15LCBudWxsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMubGFzZXJzLCB0aGlzLmVuZW1pZXMzLCB0aGlzLmNvbGxpZGVMYXNlckVuZW15LCBudWxsLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gTEFTRVJTIHNwbGl0cyBBU1RFUk9JRFNcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMubGFzZXJzLCB0aGlzLmFzdGVyb2lkc0JpZywgdGhpcy5jb2xsaWRlTGFzZXJBc3Rlcm9pZCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmxhc2VycywgdGhpcy5hc3Rlcm9pZHNNZWRpdW0sIHRoaXMuY29sbGlkZUxhc2VyQXN0ZXJvaWQsIG51bGwsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5sYXNlcnMsIHRoaXMuYXN0ZXJvaWRzU21hbGwsIHRoaXMuY29sbGlkZUxhc2VyQXN0ZXJvaWQsIG51bGwsIHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUExBWUVSIGlzIGtpbGxlZCBieSBFTkVNSUVTXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5lbmVtaWVzMSwgdGhpcy5jb2xsaWRlUGxheWVyRW5lbXksIG51bGwsIHRoaXMpOyAvLyBsYXN0IHBhcmFtZXRlciBpcyB0aGUgY29udGV4dCBwYXNzZWQgaW50byB0aGUgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLmVuZW1pZXMyLCB0aGlzLmNvbGxpZGVQbGF5ZXJFbmVteSwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5lbmVtaWVzMywgdGhpcy5jb2xsaWRlUGxheWVyRW5lbXksIG51bGwsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBQTEFZRVIgaXMga2lsbGVkIGJ5IEFTVEVST0lEU1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMuYXN0ZXJvaWRzQmlnLCB0aGlzLmNvbGxpZGVQbGF5ZXJBc3Rlcm9pZCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5hc3Rlcm9pZHNNZWRpdW0sIHRoaXMuY29sbGlkZVBsYXllckFzdGVyb2lkLCBudWxsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLmFzdGVyb2lkc1NtYWxsLCB0aGlzLmNvbGxpZGVQbGF5ZXJBc3Rlcm9pZCwgbnVsbCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIFBMQVlFUiBjb2xsZWN0cyBQT1dFUlVQU1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucG93ZXJ1cHNTY29yZSwgdGhpcy5jb2xsaWRlUGxheWVyUG93ZXJVcCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wb3dlcnVwc0ZpcmVwb3dlciwgdGhpcy5jb2xsaWRlUGxheWVyUG93ZXJVcCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wb3dlcnVwc0RlZmVuc2UsIHRoaXMuY29sbGlkZVBsYXllclBvd2VyVXAsIG51bGwsIHRoaXMpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBTQ09SRSBURVhUXHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KDUsIDUsIFwiU2NvcmU6IDBcIiwgeyBmb250RmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIGZvbnRTaXplOiAyNCwgY29sb3I6IFwiIzM2YmJmNVwiLCBhbGlnbjogJ2xlZnQnIH0pO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0LnNldERlcHRoKDEwMDApO1xyXG5cclxuICAgICAgICAvLyBMSVZFUyBURVhUXHJcbiAgICAgICAgdGhpcy5saXZlc1RleHQgPSB0aGlzLmFkZC50ZXh0KDUsIDMwLCBcIkxpdmVzOiAzXCIsIHsgZm9udEZhbWlseTogXCJBcmlhbCBCbGFja1wiLCBmb250U2l6ZTogMjQsIGNvbG9yOiBcIiMzNmJiZjVcIiwgYWxpZ246ICdsZWZ0JyB9KTtcclxuICAgICAgICB0aGlzLmxpdmVzVGV4dC5zZXREZXB0aCgxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gU1BBV04gU1RBUlNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnMubWF4U2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyIDogU3RhciA9IHRoaXMuc3RhcnMuZ2V0KCkgYXMgU3RhcjtcclxuICAgICAgICAgICAgaWYgKHN0YXIpIHsgXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWCA9IE1hdGgucmFuZG9tKCkgKiBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWSA9IE1hdGgucmFuZG9tKCkgKiBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpICsgNTA7XHJcbiAgICAgICAgICAgICAgICBzdGFyLmxhdW5jaChyYW5kb21YLCByYW5kb21ZKTsgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFWFBMT1NJT04gRU1JVFRFUlxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uUGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKFwiZXhwbG9zaW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uUGFydGljbGVzLnNldERlcHRoKDEwMSk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25FbWl0dGVyID0gdGhpcy5leHBsb3Npb25QYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIGZyZXF1ZW5jeTogLTEsXHJcbiAgICAgICAgICAgIHNwZWVkOiB7IG1pbjogMCwgbWF4OiA4MCB9LFxyXG4gICAgICAgICAgICBhbmdsZTogeyBtaW46IDAsIG1heDogMzYwIH0sXHJcbiAgICAgICAgICAgIHNjYWxlOiB7IHN0YXJ0OiAwLjcsIGVuZDogMCB9LFxyXG4gICAgICAgICAgICB0aW50OiAweGZmMzMwMCxcclxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJyxcclxuICAgICAgICAgICAgbGlmZXNwYW46IDYwMCxcclxuICAgICAgICAgICAgZ3Jhdml0eVk6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRpbWUubm93O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpblZlbG9jaXR5KHRoaXMucGxheWVyLCAxMDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5rZXlib2FyZC5jaGVja0Rvd24odGhpcy5tb3ZlS2V5c1snZmlyZSddLCAzMDApKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmaXJlIG1vZGVcclxuICAgICAgICAgICAgbGV0IGJ1bGxldERlZmF1bHQ6IEJ1bGxldCA9IHRoaXMubGFzZXJzLmdldCgpIGFzIEJ1bGxldDtcclxuICAgICAgICAgICAgaWYgKGJ1bGxldERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldERlZmF1bHQuZmlyZURlZmF1bHQodGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7ICBcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YWNrZWQgZnJvbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGcm9udEZpcmVNb2RlRW5hYmxlZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0TGVmdDogQnVsbGV0ID0gdGhpcy5sYXNlcnMuZ2V0KCkgYXMgQnVsbGV0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1bGxldExlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRMZWZ0LmZpcmVGcm9udExlZnQodGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0UmlnaHQ6IEJ1bGxldCA9IHRoaXMubGFzZXJzLmdldCgpIGFzIEJ1bGxldDtcclxuICAgICAgICAgICAgICAgIGlmIChidWxsZXRSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldFJpZ2h0LmZpcmVGcm9udFJpZ2h0KHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzdGFja2VkIHJlYXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWFyRmlyZU1vZGVFbmFibGVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXRMZWZ0OiBCdWxsZXQgPSB0aGlzLmxhc2Vycy5nZXQoKSBhcyBCdWxsZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldExlZnQuZmlyZVJlYXJMZWZ0KHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldFJpZ2h0OiBCdWxsZXQgPSB0aGlzLmxhc2Vycy5nZXQoKSBhcyBCdWxsZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRSaWdodC5maXJlUmVhclJpZ2h0KHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzdGFja2VkIHNpZGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaWRlRmlyZU1vZGVFbmFibGVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXRMZWZ0OiBCdWxsZXQgPSB0aGlzLmxhc2Vycy5nZXQoKSBhcyBCdWxsZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldExlZnQuZmlyZVNpZGVMZWZ0KHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldFJpZ2h0OiBCdWxsZXQgPSB0aGlzLmxhc2Vycy5nZXQoKSBhcyBCdWxsZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRSaWdodC5maXJlU2lkZVJpZ2h0KHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZ2FtZURpZmZpY3VsdHkgPSBNYXRoLmNlaWwoKHRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgLyA2MDAwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU1BBV04gRU5FTVkgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZW5lbXkgbGV2ZWwgMSAoZGVmYXVsdClcclxuICAgICAgICB0aGlzLmxhc3RFbmVteUxldmVsMVNwYXduIC09IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RFbmVteUxldmVsMVNwYXduIDwgMCkgeyAgXHJcbiAgICAgICAgICAgIGxldCBlIDogRW5lbXkgPSB0aGlzLmVuZW1pZXMxLmdldCgpIGFzIEVuZW15O1xyXG4gICAgICAgICAgICBpZiAoZSkgeyBcclxuICAgICAgICAgICAgICAgIGUubGF1bmNoKFxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIHRoaXMuZGlzcGxheVdpZHRoIC0gNTApLCBcclxuICAgICAgICAgICAgICAgICAgICBQaGFzZXIuTWF0aC5CZXR3ZWVuKC00MCwgLTYwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VyLk1hdGguR2V0U3BlZWQoUGhhc2VyLk1hdGguQmV0d2Vlbig0MCwgNjApLCAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURpZmZpY3VsdHkgLyAyKTsgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEVuZW15TGV2ZWwxU3Bhd24gKz0gMTAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZW15IGxldmVsIDIgKGFmdGVyIDEgbWludXRlKVxyXG4gICAgICAgIHRoaXMubGFzdEVuZW15TGV2ZWwyU3Bhd24gLT0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEVuZW15TGV2ZWwyU3Bhd24gPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBlIDogRW5lbXkgPSB0aGlzLmVuZW1pZXMyLmdldCgpIGFzIEVuZW15O1xyXG4gICAgICAgICAgICBpZiAoZSkgeyBcclxuICAgICAgICAgICAgICAgIGUubGF1bmNoKFxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIHRoaXMuZGlzcGxheVdpZHRoIC0gNTApLCBcclxuICAgICAgICAgICAgICAgICAgICBQaGFzZXIuTWF0aC5CZXR3ZWVuKC00MCwgLTYwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VyLk1hdGguR2V0U3BlZWQoUGhhc2VyLk1hdGguQmV0d2Vlbig0MCwgNjApLCAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURpZmZpY3VsdHkgLyAyKTsgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEVuZW15TGV2ZWwyU3Bhd24gKz0gMzAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZW15IGxldmVsIDMgKGFmdGVyIDIgbWludXRlcylcclxuICAgICAgICB0aGlzLmxhc3RFbmVteUxldmVsM1NwYXduIC09IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RFbmVteUxldmVsM1NwYXduIDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgZSA6IEVuZW15ID0gdGhpcy5lbmVtaWVzMy5nZXQoKSBhcyBFbmVteTtcclxuICAgICAgICAgICAgaWYgKGUpIHsgXHJcbiAgICAgICAgICAgICAgICBlLmxhdW5jaChcclxuICAgICAgICAgICAgICAgICAgICBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUwLCB0aGlzLmRpc3BsYXlXaWR0aCAtIDUwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VyLk1hdGguQmV0d2VlbigtNDAsIC02MCksIFxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlci5NYXRoLkdldFNwZWVkKFBoYXNlci5NYXRoLkJldHdlZW4oNDAsIDYwKSwgMSksIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVEaWZmaWN1bHR5IC8gMik7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RFbmVteUxldmVsM1NwYXduICs9IDMwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gU1BBV04gQVNURVJPSUQgICAgXHJcbiAgICAgICAgdGhpcy5sYXN0QXN0ZXJvaWRTcGF3biAtPSBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEFzdGVyb2lkU3Bhd24gPCAwKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXN0ZXJvaWQgOiBBc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzQmlnLmdldCgpIGFzIEFzdGVyb2lkO1xyXG4gICAgICAgICAgICBpZiAoYXN0ZXJvaWQpIHsgXHJcbiAgICAgICAgICAgICAgIGFzdGVyb2lkLmxhdW5jaChcclxuICAgICAgICAgICAgICAgICAgUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgdGhpcy5kaXNwbGF5V2lkdGggLSA1MCksIFxyXG4gICAgICAgICAgICAgICAgICAtNTAsIFxyXG4gICAgICAgICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgICAgICAgUGhhc2VyLk1hdGguR2V0U3BlZWQoUGhhc2VyLk1hdGguQmV0d2VlbigxNSwgMjUpLCAxKSk7ICBcclxuICAgICAgICAgICAgICAgYXN0ZXJvaWQuaGVhbHRoID0gZ2FtZURpZmZpY3VsdHkgKiAyOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RBc3Rlcm9pZFNwYXduICs9IDUwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTUEFXTiBQT1dFUlVQICAgIFxyXG4gICAgICAgIHRoaXMubGFzdFBvd2VydXBTcGF3biAtPSBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFBvd2VydXBTcGF3biA8IDApIHtcclxuICAgICAgICAgICAgbGV0IHBvd2VydXBHcm91cCA9IHRoaXMucG93ZXJ1cHNTY29yZTtcclxuICAgICAgICAgICAgbGV0IG5Qb3dlcnVwVHlwZXMgPSAzO1xyXG4gICAgICAgICAgICBzd2l0Y2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogblBvd2VydXBUeXBlcykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJ1cEdyb3VwID0gdGhpcy5wb3dlcnVwc1Njb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3dlcnVwR3JvdXAgPSB0aGlzLnBvd2VydXBzRmlyZXBvd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3dlcnVwR3JvdXAgPSB0aGlzLnBvd2VydXBzRGVmZW5zZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBvd2VydXAgOiBQb3dlclVwID0gcG93ZXJ1cEdyb3VwLmdldCgpIGFzIFBvd2VyVXA7XHJcbiAgICAgICAgICAgIGlmIChwb3dlcnVwKSB7IFxyXG4gICAgICAgICAgICAgICAgcG93ZXJ1cC5sYXVuY2goUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgdGhpcy5kaXNwbGF5V2lkdGggLSA1MCksIC01MCk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0UG93ZXJ1cFNwYXduICs9IDMwMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RyYWluVmVsb2NpdHkoc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBtYXhWZWxvY2l0eTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghc3ByaXRlIHx8ICFzcHJpdGUuYm9keSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBhbmdsZSwgY3VyclZlbG9jaXR5U3FyLCB2eCwgdnk7XHJcbiAgICAgICAgdnggPSBzcHJpdGUuYm9keS52ZWxvY2l0eS54O1xyXG4gICAgICAgIHZ5ID0gc3ByaXRlLmJvZHkudmVsb2NpdHkueTtcclxuICAgICAgICBjdXJyVmVsb2NpdHlTcXIgPSB2eCAqIHZ4ICsgdnkgKiB2eTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJWZWxvY2l0eVNxciA+IG1heFZlbG9jaXR5ICogbWF4VmVsb2NpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGguYXRhbjIodnksIHZ4KTtcclxuICAgICAgICAgICAgdnggPSBNYXRoLmNvcyhhbmdsZSkgKiBtYXhWZWxvY2l0eTtcclxuICAgICAgICAgICAgdnkgPSBNYXRoLnNpbihhbmdsZSkgKiBtYXhWZWxvY2l0eTtcclxuICAgICAgICAgICAgc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IHZ4O1xyXG4gICAgICAgICAgICBzcHJpdGUuYm9keS52ZWxvY2l0eS55ID0gdnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVMYXNlckVuZW15KGxhc2VyOiBCdWxsZXQsIGVuZW15OiBFbmVteSkgeyBcclxuICAgICAgICBpZiAoIWxhc2VyLmFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZW5lbXkuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxhc2VyLnNldEFjdGl2ZShmYWxzZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFlbmVteS5oaXQoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVuZW15LnNldEFjdGl2ZShmYWxzZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbkVtaXR0ZXIuZXhwbG9kZSgxMCwgZW5lbXkueCwgZW5lbXkueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZUxhc2VyQXN0ZXJvaWQobGFzZXI6IEJ1bGxldCwgYXN0ZXJvaWQ6IEFzdGVyb2lkKSB7IFxyXG4gICAgICAgIGlmICghbGFzZXIuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFhc3Rlcm9pZC5hY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGFzZXIuc2V0QWN0aXZlKGZhbHNlKS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhc3Rlcm9pZC5oaXQoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzdGVyb2lkLnNldEFjdGl2ZShmYWxzZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIHNwbGl0IGJpZyBhc3Rlcm9pZHNcclxuICAgICAgICBpZiAoYXN0ZXJvaWQgaW5zdGFuY2VvZiBBc3Rlcm9pZEJpZyl7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0IDogQXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkc01lZGl1bS5nZXQoKSBhcyBBc3Rlcm9pZDtcclxuICAgICAgICAgICAgaWYgKGxlZnQpIHsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0LmxhdW5jaChhc3Rlcm9pZC54IC0gMzAsIGFzdGVyb2lkLnksIC1QaGFzZXIuTWF0aC5HZXRTcGVlZChQaGFzZXIuTWF0aC5CZXR3ZWVuKDUsIDQwKSwgMSkpOyBcclxuICAgICAgICAgICAgICAgIGxlZnQuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZChQaGFzZXIuTWF0aC5CZXR3ZWVuKDIwLCA1MCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByaWdodCA6IEFzdGVyb2lkID0gdGhpcy5hc3Rlcm9pZHNNZWRpdW0uZ2V0KCkgYXMgQXN0ZXJvaWQ7XHJcbiAgICAgICAgICAgIGlmIChyaWdodCkgeyBcclxuICAgICAgICAgICAgICAgIHJpZ2h0LmxhdW5jaChhc3Rlcm9pZC54ICsgMzAsIGFzdGVyb2lkLnksIFBoYXNlci5NYXRoLkdldFNwZWVkKFBoYXNlci5NYXRoLkJldHdlZW4oNSwgNDApLCAxKSk7XHJcbiAgICAgICAgICAgICAgICByaWdodC5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKFBoYXNlci5NYXRoLkJldHdlZW4oMjAsIDUwKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzdGVyb2lkIGluc3RhbmNlb2YgQXN0ZXJvaWRNZWRpdW0pe1xyXG4gICAgICAgICAgICBsZXQgbGVmdCA6IEFzdGVyb2lkID0gdGhpcy5hc3Rlcm9pZHNTbWFsbC5nZXQoKSBhcyBBc3Rlcm9pZDtcclxuICAgICAgICAgICAgaWYgKGxlZnQpIHsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0LmxhdW5jaChhc3Rlcm9pZC54IC0gMTUsIGFzdGVyb2lkLnksIC1QaGFzZXIuTWF0aC5HZXRTcGVlZChQaGFzZXIuTWF0aC5CZXR3ZWVuKDUsIDQwKSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgbGVmdC5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKFBoYXNlci5NYXRoLkJldHdlZW4oNDAsIDcwKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJpZ2h0IDogQXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkc1NtYWxsLmdldCgpIGFzIEFzdGVyb2lkO1xyXG4gICAgICAgICAgICBpZiAocmlnaHQpIHsgXHJcbiAgICAgICAgICAgICAgICByaWdodC5sYXVuY2goYXN0ZXJvaWQueCArIDE1LCBhc3Rlcm9pZC55LCBQaGFzZXIuTWF0aC5HZXRTcGVlZChQaGFzZXIuTWF0aC5CZXR3ZWVuKDUsIDQwKSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZChQaGFzZXIuTWF0aC5CZXR3ZWVuKDQwLCA3MCksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVQbGF5ZXJFbmVteShwbGF5ZXI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIGVuZW15OiBFbmVteSkgeyBcclxuICAgICAgICBpZiAoIXBsYXllci5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICBpZiAoIWVuZW15LmFjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbmVteS5zZXRBY3RpdmUoZmFsc2UpLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGxheWVySGl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uRW1pdHRlci5leHBsb2RlKDEwLCBlbmVteS54LCBlbmVteS55KTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlUGxheWVyQXN0ZXJvaWQocGxheWVyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBhc3Rlcm9pZDogQXN0ZXJvaWQpIHsgXHJcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFhc3Rlcm9pZC5hY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgYXN0ZXJvaWQuc2V0QWN0aXZlKGZhbHNlKS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBsYXllckhpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVQbGF5ZXJQb3dlclVwKHBsYXllcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgcG93ZXJ1cDogUG93ZXJVcCkgeyBcclxuICAgICAgICBpZiAoIXBsYXllci5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICBpZiAoIXBvd2VydXAuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHBvd2VydXAuc2V0QWN0aXZlKGZhbHNlKS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKHBvd2VydXAgaW5zdGFuY2VvZiBQb3dlclVwU2NvcmUpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG93ZXJ1cCBpbnN0YW5jZW9mIFBvd2VyVXBGaXJlcG93ZXIpe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9udEZpcmVNb2RlRW5hYmxlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbnRGaXJlTW9kZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5pc1NpZGVGaXJlTW9kZUVuYWJsZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NpZGVGaXJlTW9kZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5pc1JlYXJGaXJlTW9kZUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFyRmlyZU1vZGVFbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVUZXh0LnRleHQgPSBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG93ZXJ1cCBpbnN0YW5jZW9mIFBvd2VyVXBEZWZlbnNlKXtcclxuICAgICAgICAgICAgdGhpcy5saXZlcyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmxpdmVzVGV4dC50ZXh0ID0gXCJMaXZlczogXCIgKyB0aGlzLmxpdmVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJIaXQoKXtcclxuICAgICAgICB0aGlzLmxpdmVzIC09IDE7XHJcbiAgICAgICAgdGhpcy5saXZlc1RleHQudGV4dCA9IFwiTGl2ZXM6IFwiICsgdGhpcy5saXZlcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldEFjdGl2ZShmYWxzZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCg1MDAsIHRoaXMuZ2FtZU92ZXIsIFtdLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25FbWl0dGVyLmV4cGxvZGUoMTAsIHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVzdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xyXG4gICAgICAgIHRoaXMuaXNGcm9udEZpcmVNb2RlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTaWRlRmlyZU1vZGVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1JlYXJGaXJlTW9kZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGltZS5ub3c7XHJcbiAgICAgICAgdGhpcy5sYXN0RW5lbXlMZXZlbDFTcGF3biA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0RW5lbXlMZXZlbDJTcGF3biA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0RW5lbXlMZXZlbDNTcGF3biA9IDA7XHJcbiAgICB9XHJcblxyXG59IiwiICAgIC8vIFNpaWxhciB0byBCdWxsZXQsIGhlcmUgd2UgbW9kZWwgdGhlIHBsYXllcidzIGFkdmVyc2FyeSBzZXR0aW5nIHVwIGl0cyBBcmNhZGUgYm9keVxyXG4gICAgLy8gYW5kIHByb3ZpZGluZyBzaW1wbGUgbW92ZW1lbnQgaW4gdXBkYXRlKC4uLikgbWV0aG9kXHJcbiAgICBleHBvcnQgY2xhc3MgUG93ZXJVcCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gIFxyXG4gICAgICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBzcHJpdGVUZXh0dXJlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIHNwcml0ZVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIHB1YmxpYyBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyID0gMTAwMDtcclxuICAgICAgICBwdWJsaWMgYW5pbWF0aW9uU2NhbGVDaGFuZ2U6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRleHR1cmU6IHN0cmluZyA9IFwicG93ZXJ1cFNjb3JlXCIsIHNwZWVkOiBudW1iZXIgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg1MCwgMSkgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCB0ZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREZXB0aCgxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGF1bmNoKHg6IG51bWJlciwgeTogbnVtYmVyKSA6IFBvd2VyVXAge1xyXG4gICAgICAgICAgICBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLmNhbGwodGhpcywgdGhpcy5zY2VuZSwgMCwgMCwgdGhpcy5zcHJpdGVUZXh0dXJlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5zcHJpdGVTY2FsZSwgdGhpcy5zcHJpdGVTY2FsZSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldFNpemUodGhpcy5zcHJpdGVTY2FsZSwgdGhpcy5zcHJpdGVTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG5cclxuICAgICAgICAgICAgLy8gYW5pbWF0ZSBcImhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgIGxldCB0aW1lUGhhc2UgPSB0aW1lICUgdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuICAgICAgICAgICAgbGV0IHNjYWxlT2Zmc2V0OiBudW1iZXIgPSBNYXRoLnNpbih0aW1lUGhhc2UgLyB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uICogUGhhc2VyLk1hdGguUEkyKSAqIHRoaXMuYW5pbWF0aW9uU2NhbGVDaGFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5zcHJpdGVTY2FsZSArIHNjYWxlT2Zmc2V0LCB0aGlzLnNwcml0ZVNjYWxlKyBzY2FsZU9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy55ID4gTnVtYmVyKHRoaXMuc2NlbmUuZ2FtZS5jb25maWcuaGVpZ2h0KSArIDUwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG5cclxuIiwiICAgIGltcG9ydCB7IFBvd2VyVXAgfSBmcm9tIFwiLi9Qb3dlclVwXCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBQb3dlclVwRGVmZW5zZSBleHRlbmRzIFBvd2VyVXAge1xyXG4gIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBzY2VuZTogUGhhc2VyLlNjZW5lICkge1xyXG4gICAgICAgICAgICBzdXBlcihzY2VuZSwgXCJwb3dlcnVwRGVmZW5zZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiIsIiAgICBpbXBvcnQgeyBQb3dlclVwIH0gZnJvbSBcIi4vUG93ZXJVcFwiO1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgUG93ZXJVcEZpcmVwb3dlciBleHRlbmRzIFBvd2VyVXAge1xyXG4gIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBzY2VuZTogUGhhc2VyLlNjZW5lICkge1xyXG4gICAgICAgICAgICBzdXBlcihzY2VuZSwgXCJwb3dlcnVwRmlyZXBvd2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuIiwiICAgIGltcG9ydCB7IFBvd2VyVXAgfSBmcm9tIFwiLi9Qb3dlclVwXCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBQb3dlclVwU2NvcmUgZXh0ZW5kcyBQb3dlclVwIHtcclxuICBcclxuICAgICAgICBjb25zdHJ1Y3Rvciggc2NlbmU6IFBoYXNlci5TY2VuZSApIHtcclxuICAgICAgICAgICAgc3VwZXIoc2NlbmUsIFwicG93ZXJ1cFNjb3JlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuIiwiICAgIC8vIEJ1bGxldCB0byBzaG9vdCBlbmVtaWVzIHdpdGg7IGl0IGZlYXR1cmVzIEFyY2FkZSBib2R5IGluIG9yZGVyIHRvIGJlIGFibGUgdG8gY29sbGlkZVxyXG4gICAgLy8gTW92ZW1lbnQgaXMgZG9uZSBpbiB1cGRhdGUoLi4uKSBtZXRob2RcclxuICAgIGV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICBcclxuICAgICAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgICAgIGRpcmVjdGlvbjogUGhhc2VyLk1hdGguVmVjdG9yMjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKXtcclxuICAgICAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsIFwiYnVsbGV0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoMzAwLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGZpcmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFdpbGwgcmUtY2FsbCBTcHJpdGUgY29uc3RydWN0b3IgZm9yIHRoaXMgaW5zdGFuY2VcclxuICAgICAgICAgICAgLy8gRm9yIHBhcmFtcyBzZWU6IGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlLmh0bWxcclxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZWluaXRpYWxpemUgdGhlIHNwcml0ZSBoZXJlIGJlY2F1c2Ugd2UgbWlnaHQgaGF2ZSBiZWVuIFwiZHJhd25cIiBmcm9tIHRoZSBwb29sXHJcbiAgICAgICAgICAgIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUuY2FsbCh0aGlzLCB0aGlzLnNjZW5lLCAwLCAwLCAnYnVsbGV0Jyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcm90YXRpb25cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Um90YXRpb24oMCk7XHJcbiAgICAgICAgICAgIC8vIHNldCBuZXcgcm90YXRpb25cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ucm90YXRlKGFuZ2xlICogUGhhc2VyLk1hdGguREVHX1RPX1JBRCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Um90YXRpb24oYW5nbGUgKiBQaGFzZXIuTWF0aC5ERUdfVE9fUkFEKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaXJlRGVmYXVsdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgICAgICAvLyBtb2RlbCBzcHJpdGUgaXMgbm90IHdlbGwgYWxpZ25lZFxyXG4gICAgICAgICAgICB0aGlzLmZpcmUoeCArIDUsIHkgLSAxNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaXJlRnJvbnRMZWZ0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZSh4IC0gMjAsIHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlyZUZyb250UmlnaHQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlKHggKyAzMCwgeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaXJlUmVhckxlZnQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlKHggLSAyMCwgeSArIDYwLCAxODApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlyZVJlYXJSaWdodCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUoeCArIDMwLCB5ICsgNjAsIDE4MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaXJlU2lkZUxlZnQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlKHggLSA1MCwgeSArIDMwLCAyNzApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlyZVNpZGVSaWdodCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUoeCArIDYwLCB5ICsgMzAsIDkwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuZGlyZWN0aW9uLnggKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gZGVhY3RpdmF0ZSBvdXQgb2YgZGlzcGxheSBidWxsZXRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnkgPCAtNTAgXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnkgPiBOdW1iZXIodGhpcy5zY2VuZS5nYW1lLmNvbmZpZy5oZWlnaHQpICsgNTBcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMueCA8IC01MFxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy54ID4gTnVtYmVyKHRoaXMuc2NlbmUuZ2FtZS5jb25maWcud2lkdGgpICsgNTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gZm9yIHRoZSBuZXh0IHVzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJvdGF0aW9uKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4iLCJpbXBvcnQgeyBCb290IH0gZnJvbSBcIi4vQm9vdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgeyBQbGF5IH0gZnJvbSBcIi4vUGxheVwiO1xyXG5cclxuLy8gU2V0dGluZyB1cCB0aGUgUGhhc2VyIDM7IGdhbWUgY29uZmlnIGlzIGNvbmZpZ3VyaW5nIFBoYXNlciAzIGVuZ2luZSBpbiBpbmRleC50c1xyXG5leHBvcnQgdmFyIGdhbWVDb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgd2lkdGg6IDQ4MCxcclxuICAgICAgICBoZWlnaHQ6IDY0MCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwLFxyXG4gICAgICAgIHBoeXNpY3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogeyB5OiAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NlbmU6IFtCb290LCBNZW51LCBQbGF5XSwgICAgICAgIFxyXG4gICAgfTsiXSwic291cmNlUm9vdCI6IiJ9