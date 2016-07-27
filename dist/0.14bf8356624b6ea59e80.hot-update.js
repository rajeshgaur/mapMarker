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
		"lat": 20.593684,
		"lng": 78.96288,
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
	        center: new google.maps.LatLng(0, 0),
	        zoom: 2,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY2xpZW50LmpzPzk4MzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAuanM/YThiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxZQUFVLENBQ2I7QUFDQyxTQUFRLFNBRFQ7QUFFYyxTQUFRLFFBRnRCO0FBR0MsUUFBSztBQUhOLEVBRGEsRUFNYjtBQUNDLE9BQUksS0FETDtBQUVDLE9BQUksTUFGTDtBQUdDLFFBQUs7QUFITixFQU5hLEVBV2I7QUFDQyxPQUFJLGtCQURMO0FBRUMsT0FBSSxpQkFGTDtBQUdDLFFBQUs7QUFITixFQVhhLEVBZ0JiO0FBQ0MsT0FBSSxPQURMO0FBRUMsT0FBSSxrQkFGTDtBQUdDLFFBQUs7QUFITixFQWhCYSxDQUFkOztBQXVCQSx1QkFBTywrQ0FBSyxXQUFXLFNBQWhCLEdBQVAsRUFBb0MsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsV0FBSSxPQUFLLElBQVQ7QUFDQSxXQUFJLE1BQUksSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixLQUFLLElBQUwsQ0FBVSxZQUE5QixFQUEyQyxLQUFLLEtBQUwsQ0FBVyxVQUF0RCxDQUFSO0FBQ0EsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxhQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLGFBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBQyxVQUFTLE1BQVYsRUFBaUIsS0FBSSxHQUFyQixFQUF5QixPQUFNLEtBQUssSUFBcEMsRUFBdkI7QUFDRCxRQUhEO0FBSUQ7OzsrQkFFUSxDQUVSOzs7OEJBRVE7QUFDUCxjQUNFLHVDQUFLLEtBQUksY0FBVCxFQUF3QixPQUFPLEVBQUMsUUFBTyxNQUFSLEVBQS9CLEdBREY7QUFHRDs7Ozs7O21CQU1ZLEciLCJmaWxlIjoiMC4xNGJmODM1NjYyNGI2ZWE1OWU4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAuanMnXG5cbmxldCBsb2NhdGlvbnM9W1xuXHR7XG5cdFx0XCJsYXRcIiA6IDIwLjU5MzY4NCxcbiAgICAgICAgICAgICAgIFwibG5nXCIgOiA3OC45NjI4OCxcblx0XHRuYW1lOidpbmRpYSdcblx0fSxcblx0e1xuXHRcdGxhdDoxNi4yNCxcblx0XHRsbmc6MTAxLjM0LFxuXHRcdG5hbWU6J2luZGlhaW4nXG5cdH0sXG5cdHtcblx0XHRsYXQ6MTguNzQyMTY3NzAxNjQ5OTk3LFxuXHRcdGxuZzo5MC41MDcyMTA0OTMwODc3Nyxcblx0XHRuYW1lOidtdW1iYWknXG5cdH0sXG5cdHtcblx0XHRsYXQ6MjEuNzQyMSxcblx0XHRsbmc6MTAwLjUwNzIxMDQ5MzA4Nzc3LFxuXHRcdG5hbWU6J2doYW5hJ1xuXHR9XG5dXG5cbnJlbmRlcig8QXBwIGxvY2F0aW9ucz17bG9jYXRpb25zfS8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudC9jbGllbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9e21hcE9wdGlvbnM6e1xuICAgICAgY2VudGVyOm5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwwKSxcbiAgICAgIHpvb206MixcbiAgICAgIG1hcFR5cGVJZDpnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCBcbiAgICB9fVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgbGV0IHNlbGY9dGhpc1xuICAgIGxldCBtYXA9bmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLnJlZnMubWFwQ29udGFpbmVyLHRoaXMuc3RhdGUubWFwT3B0aW9ucylcbiAgICB0aGlzLnByb3BzLmxvY2F0aW9ucy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICBsZXQgbGF0bG5nPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoaXRlbS5sYXQsaXRlbS5sbmcpXG4gICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtwb3NpdGlvbjpsYXRsbmcsbWFwOm1hcCx0aXRsZTppdGVtLm5hbWV9KVxuICAgIH0pXG4gIH1cblxuICBtYXBMb2FkKCl7XG4gICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJtYXBDb250YWluZXJcIiBzdHlsZT17e2hlaWdodDonMTAwJSd9fT48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=