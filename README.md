# Covid-19-Map
https://covidstatsmap.netlify.app/
![alt text](https://raw.githubusercontent.com/DenisDesimon/Covid-19-Map/main/Screenshot.png)
## Installation
Create a New React App 
```
npx create-react-app my-app
```
Download Covid-19-Map and replace folders
```
git clone https://github.com/DenisDesimon/Covid-19-Map
```
Installing Mapbox GL JS
```
npm install mapbox-gl --save
```
Installing Bootstrap
```
npm install bootstrap
```
Installing Turf.js
```
npm install @turf/turf
```
Register in https://www.mapbox.com/, get your API KEY
insert it in /src/components/mapcomp.js
```javascript
import React from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf'
mapboxgl.accessToken = 'YOUR KEY';
```
create your map style, and insert it in /src/components/mapcomp.js
```javascript
	componentDidMount(){ 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'YOUR STYLE',
			center: [this.state.lng, this.state.lat],
					zoom: this.state.zoom
	});
```
