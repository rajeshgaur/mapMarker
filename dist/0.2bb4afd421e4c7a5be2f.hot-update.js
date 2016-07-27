webpackHotUpdate(0,{

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(237);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(143);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(84);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(144);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  App: {
	    displayName: 'App'
	  }
	};
	
	var _homeRajeshProjectsPortfolioNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/rajesh/Projects/Portfolio/components/app.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _homeRajeshProjectsPortfolioNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/rajesh/Projects/Portfolio/components/app.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeRajeshProjectsPortfolioNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_homeRajeshProjectsPortfolioNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var App = _wrapComponent('App')(function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = { mapOptions: {
	        center: new google.maps.LatLng(0, 0),
	        zoom: 2,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      } };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mapLoad();
	    }
	  }, {
	    key: 'addMarker',
	    value: function addMarker(map, item) {
	
	      var latlng = new google.maps.LatLng(item.lat, item.lng);
	      var marker = new google.maps.Marker({ position: latlng, map: map, title: item.name, draggable: true,
	        animation: google.maps.Animation.DROP });
	
	      marker.addListener('click', function () {
	        if (marker.getAnimation() !== null) {
	          marker.setAnimation(null);
	        } else {
	          marker.setAnimation(google.maps.Animation.BOUNCE, 2000);
	          setTimeout(function () {
	            marker.setAnimation(null);
	          }, 500);
	        }
	      });
	    }
	  }, {
	    key: 'onMapClick',
	    value: function onMapClick(e) {
	      var latlang = e.latLng;
	      debugger;
	      this.addMarker(map, latlng);
	    }
	  }, {
	    key: 'mapLoad',
	    value: function mapLoad() {
	      var map = new google.maps.Map(this.refs.mapContainer, this.state.mapOptions);
	      map.addListener('click', this.onMapClick.bind(this));
	      this.props.locations.map(function (item) {
	        this.addMarker(map, item);
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var mapStyle = {
	        height: 'calc(100% - 100px)',
	        position: 'relative',
	        overflow: 'hidden',
	        backgroundColor: '#E5E3DF'
	      };
	
	      var headerStyle = {
	        height: '100px',
	        textAlign: 'center',
	        color: '#CCCCCC'
	      };
	
	      var inputStyle = {
	        height: '30px',
	        border: 'none',
	        minWidth: '600px',
	        padding: '0 10px',
	        fontSize: '16px'
	      };
	
	      var buttonStyle = {
	        height: '30px',
	        background: '#f9b046',
	        padding: '0 20px',
	        border: '1px solid #f9b046',
	        fontSize: '16px'
	      };
	
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement(
	          'div',
	          { style: headerStyle },
	          _react3.default.createElement(
	            'h1',
	            null,
	            'Multiple Location Marker With Google Maps'
	          ),
	          _react3.default.createElement('input', { type: 'text', style: inputStyle }),
	          _react3.default.createElement('input', { type: 'button', value: 'Add', style: buttonStyle })
	        ),
	        _react3.default.createElement('div', { ref: 'mapContainer', style: mapStyle })
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsWUFBSyxPQUFMO0FBRUQ7OzsrQkFFUyxHLEVBQUksSSxFQUFLOztBQUVmLFdBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEtBQUssR0FBNUIsRUFBZ0MsS0FBSyxHQUFyQyxDQUFYO0FBQ0EsV0FBSSxTQUFPLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBQyxVQUFTLE1BQVYsRUFBaUIsS0FBSSxHQUFyQixFQUF5QixPQUFNLEtBQUssSUFBcEMsRUFBeUMsV0FBVyxJQUFwRDtBQUN4QixvQkFBVyxPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLElBRFQsRUFBdkIsQ0FBWDs7QUFHQSxjQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUNyQyxhQUFJLE9BQU8sWUFBUCxPQUEwQixJQUE5QixFQUFvQztBQUNsQyxrQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQ0QsVUFGRCxNQUVPO0FBQ0wsa0JBQU8sWUFBUCxDQUFvQixPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLE1BQTFDLEVBQWlELElBQWpEO0FBQ0Esc0JBQVcsWUFBVTtBQUFFLG9CQUFPLFlBQVAsQ0FBb0IsSUFBcEI7QUFBNEIsWUFBbkQsRUFBcUQsR0FBckQ7QUFDRDtBQUNGLFFBUEQ7QUFRSDs7O2dDQUVVLEMsRUFBRTtBQUNULFdBQUksVUFBUSxFQUFFLE1BQWQ7QUFDQTtBQUNBLFlBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsTUFBbkI7QUFFSDs7OytCQUVRO0FBQ1IsV0FBSSxNQUFJLElBQUksT0FBTyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsS0FBSyxJQUFMLENBQVUsWUFBOUIsRUFBMkMsS0FBSyxLQUFMLENBQVcsVUFBdEQsQ0FBUjtBQUNBLFdBQUksV0FBSixDQUFnQixPQUFoQixFQUF3QixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEI7QUFDQyxZQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ3JDLGNBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsSUFBbkI7QUFDRCxRQUZ3QixDQUV2QixJQUZ1QixDQUVsQixJQUZrQixDQUF6QjtBQUdEOzs7OEJBRVE7QUFDUCxXQUFJLFdBQVM7QUFDUCxpQkFBTyxvQkFEQTtBQUVQLG1CQUFTLFVBRkY7QUFHUCxtQkFBUyxRQUhGO0FBSVAsMEJBQWdCO0FBSlQsUUFBYjs7QUFPQSxXQUFJLGNBQVk7QUFDZCxpQkFBTyxPQURPO0FBRWQsb0JBQVUsUUFGSTtBQUdkLGdCQUFNO0FBSFEsUUFBaEI7O0FBTUEsV0FBSSxhQUFXO0FBQ2IsaUJBQU8sTUFETTtBQUViLGlCQUFPLE1BRk07QUFHYixtQkFBUyxPQUhJO0FBSWIsa0JBQVEsUUFKSztBQUtiLG1CQUFTO0FBTEksUUFBZjs7QUFRQSxXQUFJLGNBQVk7QUFDVixpQkFBTyxNQURHO0FBRVYscUJBQVcsU0FGRDtBQUdWLGtCQUFRLFFBSEU7QUFJVixpQkFBTyxtQkFKRztBQUtWLG1CQUFTO0FBTEMsUUFBaEI7O0FBUUEsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsYUFBSyxPQUFPLFdBQVo7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFFRyxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxVQUExQixHQUZIO0FBR0csb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsT0FBTyxXQUF4QztBQUhILFVBREY7QUFNRSxnREFBSyxLQUFJLGNBQVQsRUFBd0IsT0FBTyxRQUEvQjtBQU5GLFFBREY7QUFVRDs7Ozs7O21CQU1ZLEciLCJmaWxlIjoiMC4yYmI0YWZkNDIxZTRjN2E1YmUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPXttYXBPcHRpb25zOntcbiAgICAgIGNlbnRlcjpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDAsMCksXG4gICAgICB6b29tOjIsXG4gICAgICBtYXBUeXBlSWQ6Z29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAgXG4gICAgfX1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMubWFwTG9hZCgpXG4gICAgXG4gIH1cblxuICBhZGRNYXJrZXIobWFwLGl0ZW0pe1xuXG4gICAgICBsZXQgbGF0bG5nPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoaXRlbS5sYXQsaXRlbS5sbmcpXG4gICAgICBsZXQgbWFya2VyPW5ldyBnb29nbGUubWFwcy5NYXJrZXIoe3Bvc2l0aW9uOmxhdGxuZyxtYXA6bWFwLHRpdGxlOml0ZW0ubmFtZSxkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCx9KVxuXG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChtYXJrZXIuZ2V0QW5pbWF0aW9uKCkgIT09IG51bGwpIHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSwyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7IH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgb25NYXBDbGljayhlKXtcbiAgICAgIGxldCBsYXRsYW5nPWUubGF0TG5nO1xuICAgICAgZGVidWdnZXI7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsbGF0bG5nKVxuXG4gIH1cblxuICBtYXBMb2FkKCl7XG4gICBsZXQgbWFwPW5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5yZWZzLm1hcENvbnRhaW5lcix0aGlzLnN0YXRlLm1hcE9wdGlvbnMpXG4gICBtYXAuYWRkTGlzdGVuZXIoJ2NsaWNrJyx0aGlzLm9uTWFwQ2xpY2suYmluZCh0aGlzKSlcbiAgICB0aGlzLnByb3BzLmxvY2F0aW9ucy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsaXRlbSlcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1hcFN0eWxlPXtcbiAgICAgICAgICBoZWlnaHQ6J2NhbGMoMTAwJSAtIDEwMHB4KScsXG4gICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJyxcbiAgICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNFNUUzREYnXG4gICAgfVxuXG4gICAgbGV0IGhlYWRlclN0eWxlPXtcbiAgICAgIGhlaWdodDonMTAwcHgnLFxuICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxuICAgICAgY29sb3I6JyNDQ0NDQ0MnLFxuICAgIH1cblxuICAgIGxldCBpbnB1dFN0eWxlPXtcbiAgICAgIGhlaWdodDonMzBweCcsXG4gICAgICBib3JkZXI6J25vbmUnLFxuICAgICAgbWluV2lkdGg6JzYwMHB4JyxcbiAgICAgIHBhZGRpbmc6JzAgMTBweCcsXG4gICAgICBmb250U2l6ZTonMTZweCdcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uU3R5bGU9e1xuICAgICAgICAgIGhlaWdodDonMzBweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDonI2Y5YjA0NicsXG4gICAgICAgICAgcGFkZGluZzonMCAyMHB4JyxcbiAgICAgICAgICBib3JkZXI6JzFweCBzb2xpZCAjZjliMDQ2JyxcbiAgICAgICAgICBmb250U2l6ZTonMTZweCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICA8aDE+TXVsdGlwbGUgTG9jYXRpb24gTWFya2VyIFdpdGggR29vZ2xlIE1hcHM8L2gxPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17aW5wdXRTdHlsZX0vPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQWRkXCIgc3R5bGU9e2J1dHRvblN0eWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9XCJtYXBDb250YWluZXJcIiBzdHlsZT17bWFwU3R5bGV9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9