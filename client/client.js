import React, { Component } from 'react'
import {render} from 'react-dom'
import App from '../components/app.js'

let locations=[
	{
		"lat" : 19.0759837,
        "lng" : 72.87765589999999,
		"name":'Mumbai'
	},
	{
		"lat" : 25.2048493,
        "lng" : 55.2707828,
		"name":'Dubai'
	},
	{
		"lat" : 51.165691,
        "lng" : 10.451526,
		"name":'Germany'
	},
	{
		"lat" : 60.47202399999999,
        "lng" : 8.468945999999999,
		"name":'Norway'
	},
	{
		 "lat" : 40.7127837,
         "lng" : -74.0059413,
         "name":'New York'
	},
	{
		"lat" : 28.6139391,
         "lng" : 77.2090212,
         "name":'Delhi'
	}
]

render(<App locations={locations}/>,document.getElementById('app'))