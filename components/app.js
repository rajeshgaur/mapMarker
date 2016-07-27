import React, { Component } from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.state={mapOptions:{
      center:new google.maps.LatLng(0,0),
      zoom:2,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
    },
    inputData:""
  }
  }
  componentDidMount(){
    this.onMapLoad()
    
  }

  addMarker(map,item){

      let latlng=new google.maps.LatLng(item.lat,item.lng)
      let marker=new google.maps.Marker({position:latlng,map:map,title:item.name,draggable: true,
                animation: google.maps.Animation.DROP,})

      marker.addListener('click', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE,2000);
          setTimeout(function(){ marker.setAnimation(null); }, 500);
        }
      });
  }

  onMapClick(map,e){
      let latlang={
        lat:e.latLng.lat(),
        lng:e.latLng.lng(),
        title:""
      }
      this.addMarker(map,latlang)
  }

  onMapLoad(){
   let map=new google.maps.Map(this.refs.mapContainer,this.state.mapOptions)
   map.addListener('click',this.onMapClick.bind(this,map))
    this.props.locations.map(function(item){
      this.addMarker(map,item)
    }.bind(this))
  }

  onAddButtonClick(){
      let inputData=this.state.inputData;
      let inputDataJson=JSON.parse(inputData);


  }

  onChange(e){
      this.setState({inputData:e.target.value})

  }

  render() {
    let mapStyle={
          height:'calc(100% - 100px)',
          position:'relative',
          overflow:'hidden',
          backgroundColor:'#E5E3DF'
    }

    let headerStyle={
      height:'100px',
      textAlign:'center',
      color:'#CCCCCC',
    }

    let inputStyle={
      height:'30px',
      border:'none',
      minWidth:'600px',
      padding:'0 10px',
      fontSize:'16px'
    }

    let buttonStyle={
          height:'30px',
          background:'#f9b046',
          padding:'0 20px',
          border:'1px solid #f9b046',
          fontSize:'16px'
    }

    return (
      <div>
        <div style={headerStyle}>
           <h1>Multiple Location Marker With Google Maps</h1>
           <input type="text" style={inputStyle} value={this.state.inputData} onChange={this.onChange.bind(this)} placeholder="Input in {lat:' ',lng:' '} format" />
           <input type="button" value="Add" style={buttonStyle} onClick={this.onAddButtonClick.bind(this)} />
        </div>
        <div ref="mapContainer" style={mapStyle}></div>
      </div>
    )
  }
}




export default App