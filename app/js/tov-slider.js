"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TovSlider =
/*#__PURE__*/
function () {
  function TovSlider() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      containerSelector: undefined,
      nextBtnSelector: undefined,
      prevBtnSelector: undefined
    };

    _classCallCheck(this, TovSlider);

    this.container = param.containerSelector ? document.querySelector(param.containerSelector) : undefined;
    this.slidesItem = this.container.children;
    this.nextBtn = param.nextBtnSelector ? document.querySelector(param.nextBtnSelector) : undefined;
    this.prevBtn = param.prevBtnSelector ? document.querySelector(param.prevBtnSelector) : undefined;
    this.currentSlide = 0;
    this.inicial();
  }

  _createClass(TovSlider, [{
    key: "inicial",
    value: function inicial() {
      var _this = this;

      // Search errors
      if (!this.container) {
        throw new Error("Slider container exception");
      }

      if (!this.slidesItem) {
        throw new Error("No slider slides found");
      } // add classes to slider


      this.container.classList.add("tov-slider");
      this.slidesItem[this.currentSlide].classList.add("tov-slide-item--active");

      _toConsumableArray(this.slidesItem).forEach(function (el) {
        return el.classList.add("tov-slide-item");
      }); // BtnNext listener


      if (this.nextBtn) {
        this.nextBtn.addEventListener("click", function () {
          _toConsumableArray(_this.slidesItem).forEach(function (el) {
            el.classList.remove("tov-slide-item--active");
          });

          if (_this.currentSlide < _this.slidesItem.length - 1) {
            _this.currentSlide++;
          } else {
            _this.currentSlide = 0;
          }

          _this.slidesItem[_this.currentSlide].classList.add("tov-slide-item--active");
        });
      } // PrevBtn listener


      if (this.prevBtn) {
        this.prevBtn.addEventListener("click", function () {
          _toConsumableArray(_this.slidesItem).forEach(function (el) {
            el.classList.remove("tov-slide-item--active");
          });

          if (_this.currentSlide <= 0) {
            _this.currentSlide = _this.slidesItem.length - 1;
          } else {
            _this.currentSlide--;
          }

          _this.slidesItem[_this.currentSlide].classList.add("tov-slide-item--active");
        });
      } // PrevBtn Listener

    } // Inicial

  }]);

  return TovSlider;
}();