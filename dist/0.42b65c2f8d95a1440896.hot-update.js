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
	      },
	      inputData: ""
	    };
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
	    value: function onAddButtonClick() {
	      debugger;
	      var inputData = this.state.inputData;
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState({ inputData: e.target.value });
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
	          _react3.default.createElement('input', { type: 'text', style: inputStyle, value: this.state.inputData, onChange: this.onChange.bind(this), placeholder: 'Input in {lat:\' \',lng:\' \'} format' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVo7QUFLWCxrQkFBVTtBQUxDLE1BQVg7QUFGZ0I7QUFTakI7Ozs7eUNBQ2tCO0FBQ2pCLFlBQUssT0FBTDtBQUVEOzs7K0JBRVMsRyxFQUFJLEksRUFBSzs7QUFFZixXQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLFdBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEVBQUMsVUFBUyxNQUFWLEVBQWlCLEtBQUksR0FBckIsRUFBeUIsT0FBTSxLQUFLLElBQXBDLEVBQXlDLFdBQVcsSUFBcEQ7QUFDeEIsb0JBQVcsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixJQURULEVBQXZCLENBQVg7O0FBR0EsY0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsYUFBSSxPQUFPLFlBQVAsT0FBMEIsSUFBOUIsRUFBb0M7QUFDbEMsa0JBQU8sWUFBUCxDQUFvQixJQUFwQjtBQUNELFVBRkQsTUFFTztBQUNMLGtCQUFPLFlBQVAsQ0FBb0IsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixNQUExQyxFQUFpRCxJQUFqRDtBQUNBLHNCQUFXLFlBQVU7QUFBRSxvQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQTRCLFlBQW5ELEVBQXFELEdBQXJEO0FBQ0Q7QUFDRixRQVBEO0FBUUg7OztnQ0FFVSxHLEVBQUksQyxFQUFFO0FBQ2IsV0FBSSxVQUFRO0FBQ1YsY0FBSSxFQUFFLE1BQUYsQ0FBUyxHQUFULEVBRE07QUFFVixjQUFJLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFGTTtBQUdWLGdCQUFNO0FBSEksUUFBWjs7QUFPQSxZQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW1CLE9BQW5CO0FBRUg7OzsrQkFFUTtBQUNSLFdBQUksTUFBSSxJQUFJLE9BQU8sSUFBUCxDQUFZLEdBQWhCLENBQW9CLEtBQUssSUFBTCxDQUFVLFlBQTlCLEVBQTJDLEtBQUssS0FBTCxDQUFXLFVBQXRELENBQVI7QUFDQSxXQUFJLFdBQUosQ0FBZ0IsT0FBaEIsRUFBd0IsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLEVBQTBCLEdBQTFCLENBQXhCO0FBQ0MsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxjQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW1CLElBQW5CO0FBQ0QsUUFGd0IsQ0FFdkIsSUFGdUIsQ0FFbEIsSUFGa0IsQ0FBekI7QUFHRDs7O3dDQUVpQjtBQUNkO0FBQ0EsV0FBSSxZQUFVLEtBQUssS0FBTCxDQUFXLFNBQXpCO0FBQ0g7Ozs4QkFFUSxDLEVBQUU7QUFDUCxZQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsRUFBRSxNQUFGLENBQVMsS0FBcEIsRUFBZDtBQUNIOzs7OEJBRVE7QUFDUCxXQUFJLFdBQVM7QUFDUCxpQkFBTyxvQkFEQTtBQUVQLG1CQUFTLFVBRkY7QUFHUCxtQkFBUyxRQUhGO0FBSVAsMEJBQWdCO0FBSlQsUUFBYjs7QUFPQSxXQUFJLGNBQVk7QUFDZCxpQkFBTyxPQURPO0FBRWQsb0JBQVUsUUFGSTtBQUdkLGdCQUFNO0FBSFEsUUFBaEI7O0FBTUEsV0FBSSxhQUFXO0FBQ2IsaUJBQU8sTUFETTtBQUViLGlCQUFPLE1BRk07QUFHYixtQkFBUyxPQUhJO0FBSWIsa0JBQVEsUUFKSztBQUtiLG1CQUFTO0FBTEksUUFBZjs7QUFRQSxXQUFJLGNBQVk7QUFDVixpQkFBTyxNQURHO0FBRVYscUJBQVcsU0FGRDtBQUdWLGtCQUFRLFFBSEU7QUFJVixpQkFBTyxtQkFKRztBQUtWLG1CQUFTO0FBTEMsUUFBaEI7O0FBUUEsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsYUFBSyxPQUFPLFdBQVo7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFFRyxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxVQUExQixFQUFzQyxPQUFPLEtBQUssS0FBTCxDQUFXLFNBQXhELEVBQW1FLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUE3RSxFQUF1RyxhQUFZLHVDQUFuSCxHQUZIO0FBR0csb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsT0FBTyxXQUF4QyxFQUFxRCxTQUFTLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBOUQ7QUFISCxVQURGO0FBTUUsZ0RBQUssS0FBSSxjQUFULEVBQXdCLE9BQU8sUUFBL0I7QUFORixRQURGO0FBVUQ7Ozs7OzttQkFNWSxHIiwiZmlsZSI6IjAuNDJiNjVjMmY4ZDk1YTE0NDA4OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT17bWFwT3B0aW9uczp7XG4gICAgICBjZW50ZXI6bmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLDApLFxuICAgICAgem9vbToyLFxuICAgICAgbWFwVHlwZUlkOmdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQIFxuICAgIH0sXG4gICAgaW5wdXREYXRhOlwiXCJcbiAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5tYXBMb2FkKClcbiAgICBcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXAsaXRlbSl7XG5cbiAgICAgIGxldCBsYXRsbmc9bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhpdGVtLmxhdCxpdGVtLmxuZylcbiAgICAgIGxldCBtYXJrZXI9bmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7cG9zaXRpb246bGF0bG5nLG1hcDptYXAsdGl0bGU6aXRlbS5uYW1lLGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLH0pXG5cbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG1hcmtlci5nZXRBbmltYXRpb24oKSAhPT0gbnVsbCkge1xuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFLDIwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTsgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbk1hcENsaWNrKG1hcCxlKXtcbiAgICAgIGxldCBsYXRsYW5nPXtcbiAgICAgICAgbGF0OmUubGF0TG5nLmxhdCgpLFxuICAgICAgICBsbmc6ZS5sYXRMbmcubG5nKCksXG4gICAgICAgIHRpdGxlOlwiXCJcbiAgICAgIH1cblxuICAgICAgXG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsbGF0bGFuZylcblxuICB9XG5cbiAgbWFwTG9hZCgpe1xuICAgbGV0IG1hcD1uZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMucmVmcy5tYXBDb250YWluZXIsdGhpcy5zdGF0ZS5tYXBPcHRpb25zKVxuICAgbWFwLmFkZExpc3RlbmVyKCdjbGljaycsdGhpcy5vbk1hcENsaWNrLmJpbmQodGhpcyxtYXApKVxuICAgIHRoaXMucHJvcHMubG9jYXRpb25zLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgIHRoaXMuYWRkTWFya2VyKG1hcCxpdGVtKVxuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uQWRkQnV0dG9uQ2xpY2soKXtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgbGV0IGlucHV0RGF0YT10aGlzLnN0YXRlLmlucHV0RGF0YTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXREYXRhOmUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWFwU3R5bGU9e1xuICAgICAgICAgIGhlaWdodDonY2FsYygxMDAlIC0gMTAwcHgpJyxcbiAgICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxuICAgICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjonI0U1RTNERidcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyU3R5bGU9e1xuICAgICAgaGVpZ2h0OicxMDBweCcsXG4gICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgICBjb2xvcjonI0NDQ0NDQycsXG4gICAgfVxuXG4gICAgbGV0IGlucHV0U3R5bGU9e1xuICAgICAgaGVpZ2h0OiczMHB4JyxcbiAgICAgIGJvcmRlcjonbm9uZScsXG4gICAgICBtaW5XaWR0aDonNjAwcHgnLFxuICAgICAgcGFkZGluZzonMCAxMHB4JyxcbiAgICAgIGZvbnRTaXplOicxNnB4J1xuICAgIH1cblxuICAgIGxldCBidXR0b25TdHlsZT17XG4gICAgICAgICAgaGVpZ2h0OiczMHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOicjZjliMDQ2JyxcbiAgICAgICAgICBwYWRkaW5nOicwIDIwcHgnLFxuICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkICNmOWIwNDYnLFxuICAgICAgICAgIGZvbnRTaXplOicxNnB4J1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgIDxoMT5NdWx0aXBsZSBMb2NhdGlvbiBNYXJrZXIgV2l0aCBHb29nbGUgTWFwczwvaDE+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGF9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiSW5wdXQgaW4ge2xhdDonICcsbG5nOicgJ30gZm9ybWF0XCIgLz5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFkZFwiIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5vbkFkZEJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cIm1hcENvbnRhaW5lclwiIHN0eWxlPXttYXBTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=