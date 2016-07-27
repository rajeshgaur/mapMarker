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
	      var self = this;
	      var map = new google.maps.Map(this.refs.mapContainer, this.state.mapOptions);
	      this.props.locations.map(function (item) {
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
	
	        var infowindow = new google.maps.InfoWindow({
	          content: 'Latitude: ' + item.lat + '<br>Longitude: ' + item.lng
	        });
	        infowindow.open(map, marker);
	      }.bind(this));
	    }
	  }, {
	    key: 'mapLoad',
	    value: function mapLoad() {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsV0FBSSxPQUFLLElBQVQ7QUFDQSxXQUFJLE1BQUksSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixLQUFLLElBQUwsQ0FBVSxZQUE5QixFQUEyQyxLQUFLLEtBQUwsQ0FBVyxVQUF0RCxDQUFSO0FBQ0EsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxhQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLGFBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEVBQUMsVUFBUyxNQUFWLEVBQWlCLEtBQUksR0FBckIsRUFBeUIsT0FBTSxLQUFLLElBQXBDLEVBQXlDLFdBQVcsSUFBcEQ7QUFDeEIsc0JBQVcsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixJQURULEVBQXZCLENBQVg7O0FBR0EsZ0JBQU8sV0FBUCxDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDLGVBQUksT0FBTyxZQUFQLE9BQTBCLElBQTlCLEVBQW9DO0FBQ2xDLG9CQUFPLFlBQVAsQ0FBb0IsSUFBcEI7QUFDRCxZQUZELE1BRU87QUFDTCxvQkFBTyxZQUFQLENBQW9CLE9BQU8sSUFBUCxDQUFZLFNBQVosQ0FBc0IsTUFBMUMsRUFBaUQsSUFBakQ7QUFDQSx3QkFBVyxZQUFVO0FBQUUsc0JBQU8sWUFBUCxDQUFvQixJQUFwQjtBQUE0QixjQUFuRCxFQUFxRCxHQUFyRDtBQUNEO0FBQ0YsVUFQRDs7QUFTQSxhQUFJLGFBQWEsSUFBSSxPQUFPLElBQVAsQ0FBWSxVQUFoQixDQUEyQjtBQUMxQyxvQkFBUyxlQUFlLEtBQUssR0FBcEIsR0FDVCxpQkFEUyxHQUNXLEtBQUs7QUFGaUIsVUFBM0IsQ0FBakI7QUFJQSxvQkFBVyxJQUFYLENBQWdCLEdBQWhCLEVBQW9CLE1BQXBCO0FBRUQsUUFwQndCLENBb0J2QixJQXBCdUIsQ0FvQmxCLElBcEJrQixDQUF6QjtBQXFCRDs7OytCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLFdBQUksV0FBUztBQUNQLGlCQUFPLG9CQURBO0FBRVAsbUJBQVMsVUFGRjtBQUdQLG1CQUFTLFFBSEY7QUFJUCwwQkFBZ0I7QUFKVCxRQUFiOztBQU9BLFdBQUksY0FBWTtBQUNkLGlCQUFPLE9BRE87QUFFZCxvQkFBVSxRQUZJO0FBR2QsZ0JBQU07QUFIUSxRQUFoQjs7QUFNQSxXQUFJLGFBQVc7QUFDYixpQkFBTyxNQURNO0FBRWIsaUJBQU8sTUFGTTtBQUdiLG1CQUFTLE9BSEk7QUFJYixrQkFBUSxRQUpLO0FBS2IsbUJBQVM7QUFMSSxRQUFmOztBQVFBLFdBQUksY0FBWTtBQUNWLGlCQUFPLE1BREc7QUFFVixxQkFBVyxTQUZEO0FBR1Ysa0JBQVEsUUFIRTtBQUlWLGlCQUFPLG1CQUpHO0FBS1YsbUJBQVM7QUFMQyxRQUFoQjs7QUFRQSxjQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxhQUFLLE9BQU8sV0FBWjtBQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESDtBQUVHLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLFVBQTFCLEdBRkg7QUFHRyxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxLQUEzQixFQUFpQyxPQUFPLFdBQXhDO0FBSEgsVUFERjtBQU1FLGdEQUFLLEtBQUksY0FBVCxFQUF3QixPQUFPLFFBQS9CO0FBTkYsUUFERjtBQVVEOzs7Ozs7bUJBTVksRyIsImZpbGUiOiIwLmJjNWI5Mzg4ZDFjOTE1ZTI2NDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9e21hcE9wdGlvbnM6e1xuICAgICAgY2VudGVyOm5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwwKSxcbiAgICAgIHpvb206MixcbiAgICAgIG1hcFR5cGVJZDpnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCBcbiAgICB9fVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgbGV0IHNlbGY9dGhpc1xuICAgIGxldCBtYXA9bmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLnJlZnMubWFwQ29udGFpbmVyLHRoaXMuc3RhdGUubWFwT3B0aW9ucylcbiAgICB0aGlzLnByb3BzLmxvY2F0aW9ucy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICBsZXQgbGF0bG5nPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoaXRlbS5sYXQsaXRlbS5sbmcpXG4gICAgICBsZXQgbWFya2VyPW5ldyBnb29nbGUubWFwcy5NYXJrZXIoe3Bvc2l0aW9uOmxhdGxuZyxtYXA6bWFwLHRpdGxlOml0ZW0ubmFtZSxkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCx9KVxuXG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChtYXJrZXIuZ2V0QW5pbWF0aW9uKCkgIT09IG51bGwpIHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSwyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7IH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgY29udGVudDogJ0xhdGl0dWRlOiAnICsgaXRlbS5sYXQgK1xuICAgICAgICAnPGJyPkxvbmdpdHVkZTogJyArIGl0ZW0ubG5nXG4gICAgICB9KTtcbiAgICAgIGluZm93aW5kb3cub3BlbihtYXAsbWFya2VyKTtcblxuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG1hcExvYWQoKXtcbiAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtYXBTdHlsZT17XG4gICAgICAgICAgaGVpZ2h0OidjYWxjKDEwMCUgLSAxMDBweCknLFxuICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOicjRTVFM0RGJ1xuICAgIH1cblxuICAgIGxldCBoZWFkZXJTdHlsZT17XG4gICAgICBoZWlnaHQ6JzEwMHB4JyxcbiAgICAgIHRleHRBbGlnbjonY2VudGVyJyxcbiAgICAgIGNvbG9yOicjQ0NDQ0NDJyxcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRTdHlsZT17XG4gICAgICBoZWlnaHQ6JzMwcHgnLFxuICAgICAgYm9yZGVyOidub25lJyxcbiAgICAgIG1pbldpZHRoOic2MDBweCcsXG4gICAgICBwYWRkaW5nOicwIDEwcHgnLFxuICAgICAgZm9udFNpemU6JzE2cHgnXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvblN0eWxlPXtcbiAgICAgICAgICBoZWlnaHQ6JzMwcHgnLFxuICAgICAgICAgIGJhY2tncm91bmQ6JyNmOWIwNDYnLFxuICAgICAgICAgIHBhZGRpbmc6JzAgMjBweCcsXG4gICAgICAgICAgYm9yZGVyOicxcHggc29saWQgI2Y5YjA0NicsXG4gICAgICAgICAgZm9udFNpemU6JzE2cHgnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgICAgPGgxPk11bHRpcGxlIExvY2F0aW9uIE1hcmtlciBXaXRoIEdvb2dsZSBNYXBzPC9oMT5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e2lucHV0U3R5bGV9Lz5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFkZFwiIHN0eWxlPXtidXR0b25TdHlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPVwibWFwQ29udGFpbmVyXCIgc3R5bGU9e21hcFN0eWxlfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==