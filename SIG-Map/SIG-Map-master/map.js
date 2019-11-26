
        var central = L.layerGroup();

        L.marker([13.647580, -89.264983]).bindPopup('UCA').addTo(central),
        L.marker([13.679545, -89.235940]).bindPopup('Parroquia Cristo Negro de Esquipulas, Colón').addTo(central),
        L.marker([13.673763, -89.290332]).bindPopup('Mural Artístico, Santa Tecla').addTo(central),
        L.marker([13.672756, -89.2780983]).bindPopup('Mesón de Goya').addTo(central);
        

        L.marker([13.677909, -89.263014]).bindPopup('Redondel El Platillo, Merliot').addTo(central),
        L.marker([13.661922, -89.254947]).bindPopup('Holcim, Santa Elena').addTo(central),
        L.marker([13.694322, -89.250453]).bindPopup('Parque Bicentenario').addTo(central),
        L.marker([13.680007, -89.249191]).bindPopup('Multiplaza').addTo(central);

        L.marker([13.729340,-89.210421]).bindPopup('Centro Comercial Metropolis').addTo(central),
        L.marker([13.717870,-89.222338]).bindPopup('Monumento a la Constitución').addTo(central),
        L.marker([13.701911,-89.232715]).bindPopup('Fuentes Beethoven').addTo(central),
        L.marker([13.697734,-89.209620]).bindPopup('Gimnasio Nacional Gustavo Adolfo Pineda').addTo(central);

        var occidente = L.layerGroup();

        L.marker([13.829692, -89.757576]).bindPopup('Salcoatitán').addTo(occidente),
        L.marker([13.842570, -89.7469622]).bindPopup('Iglesia de Juayúa').addTo(occidente),
        L.marker([13.746093, -89.675440]).bindPopup('Parque de Izalco, Izalco').addTo(occidente),
        L.marker([13.979827, -89.674217]).bindPopup('El Tazumal').addTo(occidente);

        L.marker([13.994996,-89.556243]).bindPopup('Catedral de Santa Ana').addTo(occidente),
        L.marker([13.494223,-89.401945]).bindPopup('El Zunzal').addTo(occidente),
        L.marker([13.829421,-89.266596]).bindPopup('Fuente Plaza Shafick Handal, Quezaltepeque').addTo(occidente),
        L.marker([13.781037,-89.737318]).bindPopup('Nahuizalco').addTo(occidente);

        
        var oriente = L.layerGroup();

        L.marker([13.344147,-88.439467]).bindPopup('Usulután').addTo(oriente),
        L.marker([13.482867, -88.178305]).bindPopup('Casa Juan José Cañas').addTo(oriente),
        L.marker([13.482691,-88.169480]).bindPopup('Estadio Juan Francisco Barraza').addTo(oriente),
        L.marker([13.338220, -87.84001]).bindPopup('La Unión').addTo(oriente);

        L.marker([13.693203, -88.100553]).bindPopup('San Francisco Gotera').addTo(oriente),
        L.marker([13.480395, -88.167480]).bindPopup('Parque Pasadena').addTo(oriente),
        L.marker([13.473028, -88.171553]).bindPopup('Obelisco cuarto centenario de la fundación de San Miguel').addTo(oriente),
        L.marker([13.462224, -88.165166]).bindPopup('Metrocentro San Miguel').addTo(oriente);


        var url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        // Creating Layer objects             
        var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
            streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
            complete  = L.tileLayer(url, {id: 'mapbox.complete',   attribution: mbAttr});

        var baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets,
            "Complete" :complete
        };


         
         // Creating map options


         var mapOptions = {
            center: [13.679760,-89.235787],
            zoom: 10,
            layers: [grayscale, streets,complete]
         }

         
         
         // Creating a map object
         var map = new L.map('map', mapOptions);
         

        
        var bounds = new L.LatLngBounds(new L.LatLng(40, 7), new L.LatLng(55, 10));

        map.addLayer(complete);

		//add configured controls
		L.control.coordinates({
			position:"bottomleft",
			decimals:4,
            decimalSeperator:",",
            labelTemplateLng:"Longitude: {x}",
			labelTemplateLat:"Latitude: {y}"
			
		}).addTo(map);


        var baseMaps = {
            "Grayscale": grayscale,
            "Streets": streets,
            "Complete" : complete
        };




        
        var overlays = {
            "Zona Central": central,
            "Zona Occidental": occidente,
            "Zona Oriental": oriente
        };

        L.control.layers(baseLayers, overlays).addTo(map);



        L.easyPrint({
            title: 'Mi botón para imprimir',
            position: 'bottomright',
            elementsToHide: 'p, h2, .leaflet-control-zoom' 
        }).addTo(map);

