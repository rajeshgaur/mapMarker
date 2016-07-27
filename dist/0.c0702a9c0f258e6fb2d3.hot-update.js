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
	        minWidth: '600px'
	      };
	
	      var buttonStyle = {
	        height: '30px',
	        background: '#f9b046',
	        padding: '0 20px',
	        border: '1px solid #f9b046'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVosRUFBWDtBQUZnQjtBQU9qQjs7Ozt5Q0FDa0I7QUFDakIsV0FBSSxPQUFLLElBQVQ7QUFDQSxXQUFJLE1BQUksSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixLQUFLLElBQUwsQ0FBVSxZQUE5QixFQUEyQyxLQUFLLEtBQUwsQ0FBVyxVQUF0RCxDQUFSO0FBQ0EsWUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBYztBQUNyQyxhQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLGFBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEVBQUMsVUFBUyxNQUFWLEVBQWlCLEtBQUksR0FBckIsRUFBeUIsT0FBTSxLQUFLLElBQXBDLEVBQXlDLFdBQVcsSUFBcEQ7QUFDeEIsc0JBQVcsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixJQURULEVBQXZCLENBQVg7QUFFQSxnQkFBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsZUFBSSxPQUFPLFlBQVAsT0FBMEIsSUFBOUIsRUFBb0M7QUFDbEMsb0JBQU8sWUFBUCxDQUFvQixJQUFwQjtBQUNELFlBRkQsTUFFTztBQUNMLG9CQUFPLFlBQVAsQ0FBb0IsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixNQUExQyxFQUFpRCxJQUFqRDtBQUNBLHdCQUFXLFlBQVU7QUFBRSxzQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQTRCLGNBQW5ELEVBQXFELEdBQXJEO0FBQ0Q7QUFDRixVQVBEO0FBUUQsUUFad0IsQ0FZdkIsSUFadUIsQ0FZbEIsSUFaa0IsQ0FBekI7QUFhRDs7OytCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLFdBQUksV0FBUztBQUNQLGlCQUFPLG9CQURBO0FBRVAsbUJBQVMsVUFGRjtBQUdQLG1CQUFTLFFBSEY7QUFJUCwwQkFBZ0I7QUFKVCxRQUFiOztBQU9BLFdBQUksY0FBWTtBQUNkLGlCQUFPLE9BRE87QUFFZCxvQkFBVSxRQUZJO0FBR2QsZ0JBQU07QUFIUSxRQUFoQjs7QUFNQSxXQUFJLGFBQVc7QUFDYixpQkFBTyxNQURNO0FBRWIsaUJBQU8sTUFGTTtBQUdiLG1CQUFTO0FBSEksUUFBZjs7QUFNQSxXQUFJLGNBQVk7QUFDVixpQkFBTyxNQURHO0FBRVYscUJBQVcsU0FGRDtBQUdWLGtCQUFRLFFBSEU7QUFJVixpQkFBTztBQUpHLFFBQWhCOztBQU9BLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGFBQUssT0FBTyxXQUFaO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBRUcsb0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sVUFBMUIsR0FGSDtBQUdHLG9EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLE9BQU8sV0FBeEM7QUFISCxVQURGO0FBTUUsZ0RBQUssS0FBSSxjQUFULEVBQXdCLE9BQU8sUUFBL0I7QUFORixRQURGO0FBVUQ7Ozs7OzttQkFNWSxHIiwiZmlsZSI6IjAuYzA3MDJhOWMwZjI1OGU2ZmIyZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT17bWFwT3B0aW9uczp7XG4gICAgICBjZW50ZXI6bmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLDApLFxuICAgICAgem9vbToyLFxuICAgICAgbWFwVHlwZUlkOmdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQIFxuICAgIH19XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBsZXQgc2VsZj10aGlzXG4gICAgbGV0IG1hcD1uZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMucmVmcy5tYXBDb250YWluZXIsdGhpcy5zdGF0ZS5tYXBPcHRpb25zKVxuICAgIHRoaXMucHJvcHMubG9jYXRpb25zLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgIGxldCBsYXRsbmc9bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhpdGVtLmxhdCxpdGVtLmxuZylcbiAgICAgIGxldCBtYXJrZXI9bmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7cG9zaXRpb246bGF0bG5nLG1hcDptYXAsdGl0bGU6aXRlbS5uYW1lLGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLH0pXG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChtYXJrZXIuZ2V0QW5pbWF0aW9uKCkgIT09IG51bGwpIHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSwyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7IH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIG1hcExvYWQoKXtcbiAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtYXBTdHlsZT17XG4gICAgICAgICAgaGVpZ2h0OidjYWxjKDEwMCUgLSAxMDBweCknLFxuICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOicjRTVFM0RGJ1xuICAgIH1cblxuICAgIGxldCBoZWFkZXJTdHlsZT17XG4gICAgICBoZWlnaHQ6JzEwMHB4JyxcbiAgICAgIHRleHRBbGlnbjonY2VudGVyJyxcbiAgICAgIGNvbG9yOicjQ0NDQ0NDJyxcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRTdHlsZT17XG4gICAgICBoZWlnaHQ6JzMwcHgnLFxuICAgICAgYm9yZGVyOidub25lJyxcbiAgICAgIG1pbldpZHRoOic2MDBweCdcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uU3R5bGU9e1xuICAgICAgICAgIGhlaWdodDonMzBweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDonI2Y5YjA0NicsXG4gICAgICAgICAgcGFkZGluZzonMCAyMHB4JyxcbiAgICAgICAgICBib3JkZXI6JzFweCBzb2xpZCAjZjliMDQ2J1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgIDxoMT5NdWx0aXBsZSBMb2NhdGlvbiBNYXJrZXIgV2l0aCBHb29nbGUgTWFwczwvaDE+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXtpbnB1dFN0eWxlfS8+XG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBZGRcIiBzdHlsZT17YnV0dG9uU3R5bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cIm1hcENvbnRhaW5lclwiIHN0eWxlPXttYXBTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=