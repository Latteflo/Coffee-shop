import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "../../index.css"
import "./map.css"

mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN || "";

const MapComponent: React.FC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [4.3524, 50.8466],
      cooperativeGestures: true,
      zoom: 16,  
      pitch: 60,  
      bearing: -30,  
      antialias: true,
    })

    map.addControl(new mapboxgl.FullscreenControl())
    new mapboxgl.Marker({ color: '#F55951'}).setLngLat([4.3524, 50.8466]).addTo(map)

    map.on("load", () => {
        const layers = map.getStyle().layers as mapboxgl.AnyLayer[];

        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
          const layer = layers[i] as mapboxgl.SymbolLayer;
          if (layer.type === "symbol" && layer.layout && (layer.layout as any)["text-field"]) {
            labelLayerId = layer.id;
            break;
          }
        }

      map.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#edd2cb",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "min_height"],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      )
    })
  }, [])

  return <div id="map" className="map-container"></div>
}

export default MapComponent
