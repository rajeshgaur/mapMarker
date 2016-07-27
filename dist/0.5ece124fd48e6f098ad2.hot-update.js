webpackHotUpdate(0,{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(84);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(107);
	
	var _app = __webpack_require__(142);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locations = [{
		lat: 13.742167701649997,
		lng: 100.50721049308777,
		name: 'india'
	}, {
		lat: 16.24,
		lng: 101.34,
		name: 'indiain'
	}, {
		lat: 18.742167701649997,
		lng: 90.50721049308777,
		name: 'mumbai'
	}, {
		lat: 21.7421,
		lng: 100.50721049308777,
		name: 'ghana'
	}];
	
	(0, _reactDom.render)(_react2.default.createElement(_app2.default, { locations: locations }), document.getElementById('app'));

/***/ },

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
	        center: new google.maps.LatLng(37.09024, -119, 4179324),
	        zoom: 1,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      } };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      debugger;
	      var self = this;
	      var map = new google.maps.Map(this.refs.mapContainer, this.state.mapOptions);
	      this.props.locations.map(function (item) {
	        var latlng = new google.maps.LatLng(item.lat, item.lng);
	        new google.maps.Marker({ position: latlng, map: map, title: item.name });
	      });
	    }
	  }, {
	    key: 'mapLoad',
	    value: function mapLoad() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement('div', { ref: 'mapContainer', style: { height: '100%' } });
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY2xpZW50LmpzPzk4MzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAuanM/YThiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxZQUFVLENBQ2I7QUFDQyxPQUFJLGtCQURMO0FBRUMsT0FBSSxrQkFGTDtBQUdDLFFBQUs7QUFITixFQURhLEVBTWI7QUFDQyxPQUFJLEtBREw7QUFFQyxPQUFJLE1BRkw7QUFHQyxRQUFLO0FBSE4sRUFOYSxFQVdiO0FBQ0MsT0FBSSxrQkFETDtBQUVDLE9BQUksaUJBRkw7QUFHQyxRQUFLO0FBSE4sRUFYYSxFQWdCYjtBQUNDLE9BQUksT0FETDtBQUVDLE9BQUksa0JBRkw7QUFHQyxRQUFLO0FBSE4sRUFoQmEsQ0FBZDs7QUF1QkEsdUJBQU8sK0NBQUssV0FBVyxTQUFoQixHQUFQLEVBQW9DLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRSxnQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsd0ZBQ1YsS0FEVTs7QUFFaEIsV0FBSyxLQUFMLEdBQVcsRUFBQyxZQUFXO0FBQ3JCLGlCQUFPLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsUUFBdkIsRUFBZ0MsQ0FBQyxHQUFqQyxFQUFxQyxPQUFyQyxDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakI7QUFDQSxXQUFJLE9BQUssSUFBVDtBQUNBLFdBQUksTUFBSSxJQUFJLE9BQU8sSUFBUCxDQUFZLEdBQWhCLENBQW9CLEtBQUssSUFBTCxDQUFVLFlBQTlCLEVBQTJDLEtBQUssS0FBTCxDQUFXLFVBQXRELENBQVI7QUFDQSxZQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ3JDLGFBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEtBQUssR0FBNUIsRUFBZ0MsS0FBSyxHQUFyQyxDQUFYO0FBQ0EsYUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixFQUFDLFVBQVMsTUFBVixFQUFpQixLQUFJLEdBQXJCLEVBQXlCLE9BQU0sS0FBSyxJQUFwQyxFQUF2QjtBQUNELFFBSEQ7QUFJRDs7OytCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLGNBQ0UsdUNBQUssS0FBSSxjQUFULEVBQXdCLE9BQU8sRUFBQyxRQUFPLE1BQVIsRUFBL0IsR0FERjtBQUdEOzs7Ozs7bUJBTVksRyIsImZpbGUiOiIwLjVlY2UxMjRmZDQ4ZTZmMDk4YWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcC5qcydcblxubGV0IGxvY2F0aW9ucz1bXG5cdHtcblx0XHRsYXQ6MTMuNzQyMTY3NzAxNjQ5OTk3LFxuXHRcdGxuZzoxMDAuNTA3MjEwNDkzMDg3NzcsXG5cdFx0bmFtZTonaW5kaWEnXG5cdH0sXG5cdHtcblx0XHRsYXQ6MTYuMjQsXG5cdFx0bG5nOjEwMS4zNCxcblx0XHRuYW1lOidpbmRpYWluJ1xuXHR9LFxuXHR7XG5cdFx0bGF0OjE4Ljc0MjE2NzcwMTY0OTk5Nyxcblx0XHRsbmc6OTAuNTA3MjEwNDkzMDg3NzcsXG5cdFx0bmFtZTonbXVtYmFpJ1xuXHR9LFxuXHR7XG5cdFx0bGF0OjIxLjc0MjEsXG5cdFx0bG5nOjEwMC41MDcyMTA0OTMwODc3Nyxcblx0XHRuYW1lOidnaGFuYSdcblx0fVxuXVxuXG5yZW5kZXIoPEFwcCBsb2NhdGlvbnM9e2xvY2F0aW9uc30vPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnQvY2xpZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPXttYXBPcHRpb25zOntcbiAgICAgIGNlbnRlcjpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3LjA5MDI0LC0xMTksNDE3OTMyNCksXG4gICAgICB6b29tOjEsXG4gICAgICBtYXBUeXBlSWQ6Z29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAgXG4gICAgfX1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRlYnVnZ2VyO1xuICAgIGxldCBzZWxmPXRoaXNcbiAgICBsZXQgbWFwPW5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5yZWZzLm1hcENvbnRhaW5lcix0aGlzLnN0YXRlLm1hcE9wdGlvbnMpXG4gICAgdGhpcy5wcm9wcy5sb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgbGV0IGxhdGxuZz1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGl0ZW0ubGF0LGl0ZW0ubG5nKVxuICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7cG9zaXRpb246bGF0bG5nLG1hcDptYXAsdGl0bGU6aXRlbS5uYW1lfSlcbiAgICB9KVxuICB9XG5cbiAgbWFwTG9hZCgpe1xuICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwibWFwQ29udGFpbmVyXCIgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+PC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9