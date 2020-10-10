import React from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf'
mapboxgl.accessToken = 'pk.eyJ1IjoibG9jb2NiIiwiYSI6ImNrOGZ3dmlxczAzeXkzZnAwcjc3a3pjaWsifQ.hGhHuifLaGpVHIRXRWh-dQ';

class Mapcomp extends React.Component {

  constructor(props) {
	super(props);
	this.state = {
	lng: 17,
	lat: 30,
	zoom: 1.09,
	map: []
	};


	}


	circledraw(data){
		data = data.sort(function(a, b){return b.confirmed - a.confirmed});
		const map = this.state.map;
			for(let i = 0; i < data.length; i++){
 				var center = turf.point([data[i].location.lng, data[i].location.lat]);
				var radius = 100;
				if(data[i].confirmed > 700000)
				    radius = 800;
				else if(data[i].confirmed > 600000)
				    radius = 700;
				else if(data[i].confirmed > 500000)
				    radius = 650;
				else if(data[i].confirmed > 400000)
				    radius = 600;
				else if(data[i].confirmed > 300000)
				    radius = 550;
				else if(data[i].confirmed > 200000)
				    radius = 500;
				else if(data[i].confirmed > 150000)
				    radius = 450;
				else if(data[i].confirmed > 100000)
				    radius = 400;
				else if(data[i].confirmed > 50000)
				    radius = 350;
				else if(data[i].confirmed > 10000)
				    radius = 300;
				else if(data[i].confirmed > 1000)
				    radius = 250;
				else if(data[i].confirmed > 500)
				    radius = 200;
				else if(data[i].confirmed > 100)
				    radius = 150;
				var options = {
				    steps: 80,
				    units: 'kilometers'
			};


				var circle = turf.circle(center, radius, options);
				var color = "pink";

				map.addLayer({
					"id": "circle-fill" + data[i].countryregion,
					"type": "fill",
					"source": {
						"type": "geojson",
						"data": circle
					     	  },
					"paint": {
						"fill-color": color,
					    "fill-opacity": 0.5
					         }
	  					  });

				 	}


					


	}




	componentDidMount(){ 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/lococb/ck8i9qnhz0wok1iqdfvirn7pw',
			center: [this.state.lng, this.state.lat],
					zoom: this.state.zoom
	});


map.on('move', () => {
	this.setState({
		lng: map.getCenter().lng.toFixed(4),
		lat: map.getCenter().lat.toFixed(4),
		zoom: map.getZoom().toFixed(2)
	});
});


    this.setState({map: map});

}


render() {

	return (
		<div>
			<div>
				<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
			</div>
			<div ref={el => this.mapContainer = el} className='mapContainer' />
		</div>
			)
		}

}

export default Mapcomp;
