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
	    value: function onMapClick(e, map) {
	      var latlang = e.latLng;
	      debugger;
	      this.addMarker(map, latlng);
	    }
	  }, {
	    key: 'mapLoad',
	    value: function mapLoad() {
	      var map = new google.maps.Map(this.refs.mapContainer, this.state.mapOptions);
	      map.addListener('click', this.onMapClick.bind(this, map));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsWUFBSyxPQUFMO0FBRUQ7OzsrQkFFUyxHLEVBQUksSSxFQUFLOztBQUVmLFdBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEtBQUssR0FBNUIsRUFBZ0MsS0FBSyxHQUFyQyxDQUFYO0FBQ0EsV0FBSSxTQUFPLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBQyxVQUFTLE1BQVYsRUFBaUIsS0FBSSxHQUFyQixFQUF5QixPQUFNLEtBQUssSUFBcEMsRUFBeUMsV0FBVyxJQUFwRDtBQUN4QixvQkFBVyxPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLElBRFQsRUFBdkIsQ0FBWDs7QUFHQSxjQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUNyQyxhQUFJLE9BQU8sWUFBUCxPQUEwQixJQUE5QixFQUFvQztBQUNsQyxrQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQ0QsVUFGRCxNQUVPO0FBQ0wsa0JBQU8sWUFBUCxDQUFvQixPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLE1BQTFDLEVBQWlELElBQWpEO0FBQ0Esc0JBQVcsWUFBVTtBQUFFLG9CQUFPLFlBQVAsQ0FBb0IsSUFBcEI7QUFBNEIsWUFBbkQsRUFBcUQsR0FBckQ7QUFDRDtBQUNGLFFBUEQ7QUFRSDs7O2dDQUVVLEMsRUFBRSxHLEVBQUk7QUFDYixXQUFJLFVBQVEsRUFBRSxNQUFkO0FBQ0E7QUFDQSxZQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW1CLE1BQW5CO0FBRUg7OzsrQkFFUTtBQUNSLFdBQUksTUFBSSxJQUFJLE9BQU8sSUFBUCxDQUFZLEdBQWhCLENBQW9CLEtBQUssSUFBTCxDQUFVLFlBQTlCLEVBQTJDLEtBQUssS0FBTCxDQUFXLFVBQXRELENBQVI7QUFDQSxXQUFJLFdBQUosQ0FBZ0IsT0FBaEIsRUFBd0IsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLEVBQTBCLEdBQTFCLENBQXhCO0FBQ0MsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxjQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW1CLElBQW5CO0FBQ0QsUUFGd0IsQ0FFdkIsSUFGdUIsQ0FFbEIsSUFGa0IsQ0FBekI7QUFHRDs7OzhCQUVRO0FBQ1AsV0FBSSxXQUFTO0FBQ1AsaUJBQU8sb0JBREE7QUFFUCxtQkFBUyxVQUZGO0FBR1AsbUJBQVMsUUFIRjtBQUlQLDBCQUFnQjtBQUpULFFBQWI7O0FBT0EsV0FBSSxjQUFZO0FBQ2QsaUJBQU8sT0FETztBQUVkLG9CQUFVLFFBRkk7QUFHZCxnQkFBTTtBQUhRLFFBQWhCOztBQU1BLFdBQUksYUFBVztBQUNiLGlCQUFPLE1BRE07QUFFYixpQkFBTyxNQUZNO0FBR2IsbUJBQVMsT0FISTtBQUliLGtCQUFRLFFBSks7QUFLYixtQkFBUztBQUxJLFFBQWY7O0FBUUEsV0FBSSxjQUFZO0FBQ1YsaUJBQU8sTUFERztBQUVWLHFCQUFXLFNBRkQ7QUFHVixrQkFBUSxRQUhFO0FBSVYsaUJBQU8sbUJBSkc7QUFLVixtQkFBUztBQUxDLFFBQWhCOztBQVFBLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGFBQUssT0FBTyxXQUFaO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBRUcsb0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sVUFBMUIsR0FGSDtBQUdHLG9EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLE9BQU8sV0FBeEM7QUFISCxVQURGO0FBTUUsZ0RBQUssS0FBSSxjQUFULEVBQXdCLE9BQU8sUUFBL0I7QUFORixRQURGO0FBVUQ7Ozs7OzttQkFNWSxHIiwiZmlsZSI6IjAuOTg2NmIwNzRlZjdmYWVmOWE2ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT17bWFwT3B0aW9uczp7XG4gICAgICBjZW50ZXI6bmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLDApLFxuICAgICAgem9vbToyLFxuICAgICAgbWFwVHlwZUlkOmdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQIFxuICAgIH19XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLm1hcExvYWQoKVxuICAgIFxuICB9XG5cbiAgYWRkTWFya2VyKG1hcCxpdGVtKXtcblxuICAgICAgbGV0IGxhdGxuZz1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGl0ZW0ubGF0LGl0ZW0ubG5nKVxuICAgICAgbGV0IG1hcmtlcj1uZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtwb3NpdGlvbjpsYXRsbmcsbWFwOm1hcCx0aXRsZTppdGVtLm5hbWUsZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsfSlcblxuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobWFya2VyLmdldEFuaW1hdGlvbigpICE9PSBudWxsKSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0UsMjAwMCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpOyB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uTWFwQ2xpY2soZSxtYXApe1xuICAgICAgbGV0IGxhdGxhbmc9ZS5sYXRMbmc7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcCxsYXRsbmcpXG5cbiAgfVxuXG4gIG1hcExvYWQoKXtcbiAgIGxldCBtYXA9bmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLnJlZnMubWFwQ29udGFpbmVyLHRoaXMuc3RhdGUubWFwT3B0aW9ucylcbiAgIG1hcC5hZGRMaXN0ZW5lcignY2xpY2snLHRoaXMub25NYXBDbGljay5iaW5kKHRoaXMsbWFwKSlcbiAgICB0aGlzLnByb3BzLmxvY2F0aW9ucy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsaXRlbSlcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1hcFN0eWxlPXtcbiAgICAgICAgICBoZWlnaHQ6J2NhbGMoMTAwJSAtIDEwMHB4KScsXG4gICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJyxcbiAgICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNFNUUzREYnXG4gICAgfVxuXG4gICAgbGV0IGhlYWRlclN0eWxlPXtcbiAgICAgIGhlaWdodDonMTAwcHgnLFxuICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxuICAgICAgY29sb3I6JyNDQ0NDQ0MnLFxuICAgIH1cblxuICAgIGxldCBpbnB1dFN0eWxlPXtcbiAgICAgIGhlaWdodDonMzBweCcsXG4gICAgICBib3JkZXI6J25vbmUnLFxuICAgICAgbWluV2lkdGg6JzYwMHB4JyxcbiAgICAgIHBhZGRpbmc6JzAgMTBweCcsXG4gICAgICBmb250U2l6ZTonMTZweCdcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uU3R5bGU9e1xuICAgICAgICAgIGhlaWdodDonMzBweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDonI2Y5YjA0NicsXG4gICAgICAgICAgcGFkZGluZzonMCAyMHB4JyxcbiAgICAgICAgICBib3JkZXI6JzFweCBzb2xpZCAjZjliMDQ2JyxcbiAgICAgICAgICBmb250U2l6ZTonMTZweCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICA8aDE+TXVsdGlwbGUgTG9jYXRpb24gTWFya2VyIFdpdGggR29vZ2xlIE1hcHM8L2gxPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17aW5wdXRTdHlsZX0vPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQWRkXCIgc3R5bGU9e2J1dHRvblN0eWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9XCJtYXBDb250YWluZXJcIiBzdHlsZT17bWFwU3R5bGV9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9