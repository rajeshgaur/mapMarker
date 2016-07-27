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
	      this.onMapLoad();
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
	    key: 'onMapLoad',
	    value: function onMapLoad() {
	      var map = new google.maps.Map(this.refs.mapContainer, this.state.mapOptions);
	      map.addListener('click', this.onMapClick.bind(this, map));
	      this.props.locations.map(function (item) {
	        this.addMarker(map, item);
	      }.bind(this));
	    }
	  }, {
	    key: 'onAddButtonClick',
	    value: function onAddButtonClick() {
	      var inputData = this.state.inputData;
	      var inputDataJson = JSON.parse(inputData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC5qcz9hOGI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3RkFDVixLQURVOztBQUVoQixXQUFLLEtBQUwsR0FBVyxFQUFDLFlBQVc7QUFDckIsaUJBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQURjO0FBRXJCLGVBQUssQ0FGZ0I7QUFHckIsb0JBQVUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQjtBQUhYLFFBQVo7QUFLWCxrQkFBVTtBQUxDLE1BQVg7QUFGZ0I7QUFTakI7Ozs7eUNBQ2tCO0FBQ2pCLFlBQUssU0FBTDtBQUVEOzs7K0JBRVMsRyxFQUFJLEksRUFBSzs7QUFFZixXQUFJLFNBQU8sSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixLQUFLLEdBQTVCLEVBQWdDLEtBQUssR0FBckMsQ0FBWDtBQUNBLFdBQUksU0FBTyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLEVBQUMsVUFBUyxNQUFWLEVBQWlCLEtBQUksR0FBckIsRUFBeUIsT0FBTSxLQUFLLElBQXBDLEVBQXlDLFdBQVcsSUFBcEQ7QUFDeEIsb0JBQVcsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixJQURULEVBQXZCLENBQVg7O0FBR0EsY0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsYUFBSSxPQUFPLFlBQVAsT0FBMEIsSUFBOUIsRUFBb0M7QUFDbEMsa0JBQU8sWUFBUCxDQUFvQixJQUFwQjtBQUNELFVBRkQsTUFFTztBQUNMLGtCQUFPLFlBQVAsQ0FBb0IsT0FBTyxJQUFQLENBQVksU0FBWixDQUFzQixNQUExQyxFQUFpRCxJQUFqRDtBQUNBLHNCQUFXLFlBQVU7QUFBRSxvQkFBTyxZQUFQLENBQW9CLElBQXBCO0FBQTRCLFlBQW5ELEVBQXFELEdBQXJEO0FBQ0Q7QUFDRixRQVBEO0FBUUg7OztnQ0FFVSxHLEVBQUksQyxFQUFFO0FBQ2IsV0FBSSxVQUFRO0FBQ1YsY0FBSSxFQUFFLE1BQUYsQ0FBUyxHQUFULEVBRE07QUFFVixjQUFJLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFGTTtBQUdWLGdCQUFNO0FBSEksUUFBWjtBQUtBLFlBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsT0FBbkI7QUFDSDs7O2lDQUVVO0FBQ1YsV0FBSSxNQUFJLElBQUksT0FBTyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsS0FBSyxJQUFMLENBQVUsWUFBOUIsRUFBMkMsS0FBSyxLQUFMLENBQVcsVUFBdEQsQ0FBUjtBQUNBLFdBQUksV0FBSixDQUFnQixPQUFoQixFQUF3QixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMEIsR0FBMUIsQ0FBeEI7QUFDQyxZQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ3JDLGNBQUssU0FBTCxDQUFlLEdBQWYsRUFBbUIsSUFBbkI7QUFDRCxRQUZ3QixDQUV2QixJQUZ1QixDQUVsQixJQUZrQixDQUF6QjtBQUdEOzs7d0NBRWlCO0FBQ2QsV0FBSSxZQUFVLEtBQUssS0FBTCxDQUFXLFNBQXpCO0FBQ0EsV0FBSSxnQkFBYyxLQUFLLEtBQUwsQ0FBVyxTQUFYLENBQWxCO0FBR0g7Ozs4QkFFUSxDLEVBQUU7QUFDUCxZQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsRUFBRSxNQUFGLENBQVMsS0FBcEIsRUFBZDtBQUVIOzs7OEJBRVE7QUFDUCxXQUFJLFdBQVM7QUFDUCxpQkFBTyxvQkFEQTtBQUVQLG1CQUFTLFVBRkY7QUFHUCxtQkFBUyxRQUhGO0FBSVAsMEJBQWdCO0FBSlQsUUFBYjs7QUFPQSxXQUFJLGNBQVk7QUFDZCxpQkFBTyxPQURPO0FBRWQsb0JBQVUsUUFGSTtBQUdkLGdCQUFNO0FBSFEsUUFBaEI7O0FBTUEsV0FBSSxhQUFXO0FBQ2IsaUJBQU8sTUFETTtBQUViLGlCQUFPLE1BRk07QUFHYixtQkFBUyxPQUhJO0FBSWIsa0JBQVEsUUFKSztBQUtiLG1CQUFTO0FBTEksUUFBZjs7QUFRQSxXQUFJLGNBQVk7QUFDVixpQkFBTyxNQURHO0FBRVYscUJBQVcsU0FGRDtBQUdWLGtCQUFRLFFBSEU7QUFJVixpQkFBTyxtQkFKRztBQUtWLG1CQUFTO0FBTEMsUUFBaEI7O0FBUUEsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsYUFBSyxPQUFPLFdBQVo7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFFRyxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxVQUExQixFQUFzQyxPQUFPLEtBQUssS0FBTCxDQUFXLFNBQXhELEVBQW1FLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUE3RSxFQUF1RyxhQUFZLHVDQUFuSCxHQUZIO0FBR0csb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsT0FBTyxXQUF4QyxFQUFxRCxTQUFTLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBOUQ7QUFISCxVQURGO0FBTUUsZ0RBQUssS0FBSSxjQUFULEVBQXdCLE9BQU8sUUFBL0I7QUFORixRQURGO0FBVUQ7Ozs7OzttQkFNWSxHIiwiZmlsZSI6IjAuNzU1NzQ2YjU5YjU3Mjg1ODNkYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT17bWFwT3B0aW9uczp7XG4gICAgICBjZW50ZXI6bmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLDApLFxuICAgICAgem9vbToyLFxuICAgICAgbWFwVHlwZUlkOmdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgIH0sXG4gICAgaW5wdXREYXRhOlwiXCJcbiAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5vbk1hcExvYWQoKVxuICAgIFxuICB9XG5cbiAgYWRkTWFya2VyKG1hcCxpdGVtKXtcblxuICAgICAgbGV0IGxhdGxuZz1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGl0ZW0ubGF0LGl0ZW0ubG5nKVxuICAgICAgbGV0IG1hcmtlcj1uZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtwb3NpdGlvbjpsYXRsbmcsbWFwOm1hcCx0aXRsZTppdGVtLm5hbWUsZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsfSlcblxuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobWFya2VyLmdldEFuaW1hdGlvbigpICE9PSBudWxsKSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0UsMjAwMCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpOyB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uTWFwQ2xpY2sobWFwLGUpe1xuICAgICAgbGV0IGxhdGxhbmc9e1xuICAgICAgICBsYXQ6ZS5sYXRMbmcubGF0KCksXG4gICAgICAgIGxuZzplLmxhdExuZy5sbmcoKSxcbiAgICAgICAgdGl0bGU6XCJcIlxuICAgICAgfVxuICAgICAgdGhpcy5hZGRNYXJrZXIobWFwLGxhdGxhbmcpXG4gIH1cblxuICBvbk1hcExvYWQoKXtcbiAgIGxldCBtYXA9bmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLnJlZnMubWFwQ29udGFpbmVyLHRoaXMuc3RhdGUubWFwT3B0aW9ucylcbiAgIG1hcC5hZGRMaXN0ZW5lcignY2xpY2snLHRoaXMub25NYXBDbGljay5iaW5kKHRoaXMsbWFwKSlcbiAgICB0aGlzLnByb3BzLmxvY2F0aW9ucy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICB0aGlzLmFkZE1hcmtlcihtYXAsaXRlbSlcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cblxuICBvbkFkZEJ1dHRvbkNsaWNrKCl7XG4gICAgICBsZXQgaW5wdXREYXRhPXRoaXMuc3RhdGUuaW5wdXREYXRhO1xuICAgICAgbGV0IGlucHV0RGF0YUpzb249SlNPTi5wYXJzZShpbnB1dERhdGEpO1xuXG5cbiAgfVxuXG4gIG9uQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXREYXRhOmUudGFyZ2V0LnZhbHVlfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtYXBTdHlsZT17XG4gICAgICAgICAgaGVpZ2h0OidjYWxjKDEwMCUgLSAxMDBweCknLFxuICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOicjRTVFM0RGJ1xuICAgIH1cblxuICAgIGxldCBoZWFkZXJTdHlsZT17XG4gICAgICBoZWlnaHQ6JzEwMHB4JyxcbiAgICAgIHRleHRBbGlnbjonY2VudGVyJyxcbiAgICAgIGNvbG9yOicjQ0NDQ0NDJyxcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRTdHlsZT17XG4gICAgICBoZWlnaHQ6JzMwcHgnLFxuICAgICAgYm9yZGVyOidub25lJyxcbiAgICAgIG1pbldpZHRoOic2MDBweCcsXG4gICAgICBwYWRkaW5nOicwIDEwcHgnLFxuICAgICAgZm9udFNpemU6JzE2cHgnXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvblN0eWxlPXtcbiAgICAgICAgICBoZWlnaHQ6JzMwcHgnLFxuICAgICAgICAgIGJhY2tncm91bmQ6JyNmOWIwNDYnLFxuICAgICAgICAgIHBhZGRpbmc6JzAgMjBweCcsXG4gICAgICAgICAgYm9yZGVyOicxcHggc29saWQgI2Y5YjA0NicsXG4gICAgICAgICAgZm9udFNpemU6JzE2cHgnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgICAgPGgxPk11bHRpcGxlIExvY2F0aW9uIE1hcmtlciBXaXRoIEdvb2dsZSBNYXBzPC9oMT5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0RGF0YX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJJbnB1dCBpbiB7bGF0OicgJyxsbmc6JyAnfSBmb3JtYXRcIiAvPlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQWRkXCIgc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLm9uQWRkQnV0dG9uQ2xpY2suYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPVwibWFwQ29udGFpbmVyXCIgc3R5bGU9e21hcFN0eWxlfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==