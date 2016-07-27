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
	        zoom: 1,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      } };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsV0FBSSxPQUFLLElBQVQ7QUFDQSxXQUFJLE1BQUksSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixLQUFLLElBQUwsQ0FBVSxZQUE5QixFQUEyQyxLQUFLLEtBQUwsQ0FBVyxVQUF0RCxDQUFSO0FBQ0EsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxhQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLGFBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBQyxVQUFTLE1BQVYsRUFBaUIsS0FBSSxHQUFyQixFQUF5QixPQUFNLEtBQUssSUFBcEMsRUFBdkI7QUFDRCxRQUhEO0FBSUQ7OzsrQkFFUSxDQUVSOzs7OEJBRVE7QUFDUCxjQUNFLHVDQUFLLEtBQUksY0FBVCxFQUF3QixPQUFPLEVBQUMsUUFBTyxNQUFSLEVBQS9CLEdBREY7QUFHRDs7Ozs7O21CQU1ZLEciLCJmaWxlIjoiMC44M2Y4ZDhmZDIxMWQxOThiNWM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPXttYXBPcHRpb25zOntcbiAgICAgIGNlbnRlcjpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDAsMCksXG4gICAgICB6b29tOjEsXG4gICAgICBtYXBUeXBlSWQ6Z29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAgXG4gICAgfX1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGxldCBzZWxmPXRoaXNcbiAgICBsZXQgbWFwPW5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5yZWZzLm1hcENvbnRhaW5lcix0aGlzLnN0YXRlLm1hcE9wdGlvbnMpXG4gICAgdGhpcy5wcm9wcy5sb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgbGV0IGxhdGxuZz1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGl0ZW0ubGF0LGl0ZW0ubG5nKVxuICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7cG9zaXRpb246bGF0bG5nLG1hcDptYXAsdGl0bGU6aXRlbS5uYW1lfSlcbiAgICB9KVxuICB9XG5cbiAgbWFwTG9hZCgpe1xuICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwibWFwQ29udGFpbmVyXCIgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+PC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9