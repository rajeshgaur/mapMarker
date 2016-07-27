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
	    value: function onMapClick(map, e) {
	      var latlang = {
	        lat: e.latLng.lat(),
	        lng: e.latLng.lng(),
	        title: ""
	      };
	
	      this.addMarker(map, latlang);
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
	    key: 'onAddButtonClick',
	    value: function onAddButtonClick() {}
	  }, {
	    key: 'onChange',
	    value: function onChange() {}
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
	          _react3.default.createElement('input', { type: 'text', style: inputStyle, value: '', onChange: this.onChange.bind(this), placeholder: 'Input in {lat:\' \',lng:\' \'} format' }),
	          _react3.default.createElement('input', { type: 'button', value: 'Add', style: buttonStyle, onClick: this.onAddButtonClick.bind(this) })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsWUFBSyxPQUFMO0FBRUQ7OzsrQkFFUyxHLEVBQUksSSxFQUFLOztBQUVmLFdBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEtBQUssR0FBNUIsRUFBZ0MsS0FBSyxHQUFyQyxDQUFYO0FBQ0EsV0FBSSxTQUFPLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBQyxVQUFTLE1BQVYsRUFBaUIsS0FBSSxHQUFyQixFQUF5QixPQUFNLEtBQUssSUFBcEMsRUFBeUMsV0FBVyxJQUFwRDtBQUN4QixvQkFBVyxPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLElBRFQsRUFBdkIsQ0FBWDs7QUFHQSxjQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUNyQyxhQUFJLE9BQU8sWUFBUCxPQUEwQixJQUE5QixFQUFvQztBQUNsQyxrQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQ0QsVUFGRCxNQUVPO0FBQ0wsa0JBQU8sWUFBUCxDQUFvQixPQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLE1BQTFDLEVBQWlELElBQWpEO0FBQ0Esc0JBQVcsWUFBVTtBQUFFLG9CQUFPLFlBQVAsQ0FBb0IsSUFBcEI7QUFBNEIsWUFBbkQsRUFBcUQsR0FBckQ7QUFDRDtBQUNGLFFBUEQ7QUFRSDs7O2dDQUVVLEcsRUFBSSxDLEVBQUU7QUFDYixXQUFJLFVBQVE7QUFDVixjQUFJLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFETTtBQUVWLGNBQUksRUFBRSxNQUFGLENBQVMsR0FBVCxFQUZNO0FBR1YsZ0JBQU07QUFISSxRQUFaOztBQU9BLFlBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsT0FBbkI7QUFFSDs7OytCQUVRO0FBQ1IsV0FBSSxNQUFJLElBQUksT0FBTyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsS0FBSyxJQUFMLENBQVUsWUFBOUIsRUFBMkMsS0FBSyxLQUFMLENBQVcsVUFBdEQsQ0FBUjtBQUNBLFdBQUksV0FBSixDQUFnQixPQUFoQixFQUF3QixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMEIsR0FBMUIsQ0FBeEI7QUFDQyxZQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ3JDLGNBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsSUFBbkI7QUFDRCxRQUZ3QixDQUV2QixJQUZ1QixDQUVsQixJQUZrQixDQUF6QjtBQUdEOzs7d0NBRWlCLENBRWpCOzs7Z0NBRVMsQ0FFVDs7OzhCQUVRO0FBQ1AsV0FBSSxXQUFTO0FBQ1AsaUJBQU8sb0JBREE7QUFFUCxtQkFBUyxVQUZGO0FBR1AsbUJBQVMsUUFIRjtBQUlQLDBCQUFnQjtBQUpULFFBQWI7O0FBT0EsV0FBSSxjQUFZO0FBQ2QsaUJBQU8sT0FETztBQUVkLG9CQUFVLFFBRkk7QUFHZCxnQkFBTTtBQUhRLFFBQWhCOztBQU1BLFdBQUksYUFBVztBQUNiLGlCQUFPLE1BRE07QUFFYixpQkFBTyxNQUZNO0FBR2IsbUJBQVMsT0FISTtBQUliLGtCQUFRLFFBSks7QUFLYixtQkFBUztBQUxJLFFBQWY7O0FBUUEsV0FBSSxjQUFZO0FBQ1YsaUJBQU8sTUFERztBQUVWLHFCQUFXLFNBRkQ7QUFHVixrQkFBUSxRQUhFO0FBSVYsaUJBQU8sbUJBSkc7QUFLVixtQkFBUztBQUxDLFFBQWhCOztBQVFBLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGFBQUssT0FBTyxXQUFaO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBRUcsb0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sVUFBMUIsRUFBc0MsT0FBTSxFQUE1QyxFQUErQyxVQUFVLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBekQsRUFBbUYsYUFBWSx1Q0FBL0YsR0FGSDtBQUdHLG9EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLE9BQU8sV0FBeEMsRUFBcUQsU0FBUyxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQTlEO0FBSEgsVUFERjtBQU1FLGdEQUFLLEtBQUksY0FBVCxFQUF3QixPQUFPLFFBQS9CO0FBTkYsUUFERjtBQVVEOzs7Ozs7bUJBTVksRyIsImZpbGUiOiIwLjM0NTkzY2YzMGE4MGE0NGMzYTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9e21hcE9wdGlvbnM6e1xuICAgICAgY2VudGVyOm5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwwKSxcbiAgICAgIHpvb206MixcbiAgICAgIG1hcFR5cGVJZDpnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCBcbiAgICB9fVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5tYXBMb2FkKClcbiAgICBcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXAsaXRlbSl7XG5cbiAgICAgIGxldCBsYXRsbmc9bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhpdGVtLmxhdCxpdGVtLmxuZylcbiAgICAgIGxldCBtYXJrZXI9bmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7cG9zaXRpb246bGF0bG5nLG1hcDptYXAsdGl0bGU6aXRlbS5uYW1lLGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLH0pXG5cbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG1hcmtlci5nZXRBbmltYXRpb24oKSAhPT0gbnVsbCkge1xuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFLDIwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTsgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbk1hcENsaWNrKG1hcCxlKXtcbiAgICAgIGxldCBsYXRsYW5nPXtcbiAgICAgICAgbGF0OmUubGF0TG5nLmxhdCgpLFxuICAgICAgICBsbmc6ZS5sYXRMbmcubG5nKCksXG4gICAgICAgIHRpdGxlOlwiXCJcbiAgICAgIH1cblxuICAgICAgXG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsbGF0bGFuZylcblxuICB9XG5cbiAgbWFwTG9hZCgpe1xuICAgbGV0IG1hcD1uZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMucmVmcy5tYXBDb250YWluZXIsdGhpcy5zdGF0ZS5tYXBPcHRpb25zKVxuICAgbWFwLmFkZExpc3RlbmVyKCdjbGljaycsdGhpcy5vbk1hcENsaWNrLmJpbmQodGhpcyxtYXApKVxuICAgIHRoaXMucHJvcHMubG9jYXRpb25zLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcCxpdGVtKVxuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uQWRkQnV0dG9uQ2xpY2soKXtcblxuICB9XG5cbiAgb25DaGFuZ2UoKXtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWFwU3R5bGU9e1xuICAgICAgICAgIGhlaWdodDonY2FsYygxMDAlIC0gMTAwcHgpJyxcbiAgICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxuICAgICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjonI0U1RTNERidcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyU3R5bGU9e1xuICAgICAgaGVpZ2h0OicxMDBweCcsXG4gICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgICBjb2xvcjonI0NDQ0NDQycsXG4gICAgfVxuXG4gICAgbGV0IGlucHV0U3R5bGU9e1xuICAgICAgaGVpZ2h0OiczMHB4JyxcbiAgICAgIGJvcmRlcjonbm9uZScsXG4gICAgICBtaW5XaWR0aDonNjAwcHgnLFxuICAgICAgcGFkZGluZzonMCAxMHB4JyxcbiAgICAgIGZvbnRTaXplOicxNnB4J1xuICAgIH1cblxuICAgIGxldCBidXR0b25TdHlsZT17XG4gICAgICAgICAgaGVpZ2h0OiczMHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOicjZjliMDQ2JyxcbiAgICAgICAgICBwYWRkaW5nOicwIDIwcHgnLFxuICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkICNmOWIwNDYnLFxuICAgICAgICAgIGZvbnRTaXplOicxNnB4J1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgIDxoMT5NdWx0aXBsZSBMb2NhdGlvbiBNYXJrZXIgV2l0aCBHb29nbGUgTWFwczwvaDE+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiSW5wdXQgaW4ge2xhdDonICcsbG5nOicgJ30gZm9ybWF0XCIgLz5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFkZFwiIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5vbkFkZEJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cIm1hcENvbnRhaW5lclwiIHN0eWxlPXttYXBTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=