import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN



class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
  }


  // applying custom style to the map
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: this.props.center,
      zoom: 1
    })



    this.map.on('click', this.props.onClick)
  }

  componentDidUpdate() {
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      return new mapboxgl.Marker()

        .addTo(this.map)
    })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}



export default Map
