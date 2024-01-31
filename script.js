require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "hybrid"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90.1994, 38.6270]
          
          
        });

      
        var featureLayer_1 = new FeatureLayer({
  url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties_Generalized_Boundaries/FeatureServer"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Live_Stream_Gauges_v1/FeatureServer"
});

map.add(featureLayer_2);
      });
