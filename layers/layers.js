var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_20250112LoteNDVICortergb_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-12, Lote, NDVI - Corte.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250112LoteNDVICortergb_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.639826, 3432680.317766, -11787367.244146, 3433565.396877]
        })
    });
var lyr_20250117LoteCortergb_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-01-17, Lote - Corte .rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20250117LoteCortergb_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.639826, 3432680.317766, -11787367.244146, 3433565.396877]
        })
    });
var lyr_NDVIsep2024Cortergb_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI sep 2024 - Corte.rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIsep2024Cortergb_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var lyr_OrtomosaicoCortergb_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortomosaico - Corte .rgb<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OrtomosaicoCortergb_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11788270.240151, 3432662.367717, -11787342.169339, 3433564.061457]
        })
    });
var format_Plantasenbuenestado111_5 = new ol.format.GeoJSON();
var features_Plantasenbuenestado111_5 = format_Plantasenbuenestado111_5.readFeatures(json_Plantasenbuenestado111_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantasenbuenestado111_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantasenbuenestado111_5.addFeatures(features_Plantasenbuenestado111_5);
var lyr_Plantasenbuenestado111_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantasenbuenestado111_5, 
                style: style_Plantasenbuenestado111_5,
                popuplayertitle: 'Plantas en buen estado 111',
                interactive: true,
                title: '<img src="styles/legend/Plantasenbuenestado111_5.png" /> Plantas en buen estado 111'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_20250112LoteNDVICortergb_1.setVisible(true);lyr_20250117LoteCortergb_2.setVisible(true);lyr_NDVIsep2024Cortergb_3.setVisible(true);lyr_OrtomosaicoCortergb_4.setVisible(true);lyr_Plantasenbuenestado111_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_20250112LoteNDVICortergb_1,lyr_20250117LoteCortergb_2,lyr_NDVIsep2024Cortergb_3,lyr_OrtomosaicoCortergb_4,lyr_Plantasenbuenestado111_5];
lyr_Plantasenbuenestado111_5.set('fieldAliases', {'color': 'color', 'descriptio': 'descriptio', 'fill': 'fill', 'name': 'name', 'visualType': 'visualType', });
lyr_Plantasenbuenestado111_5.set('fieldImages', {'color': '', 'descriptio': '', 'fill': '', 'name': '', 'visualType': '', });
lyr_Plantasenbuenestado111_5.set('fieldLabels', {'color': 'no label', 'descriptio': 'no label', 'fill': 'no label', 'name': 'no label', 'visualType': 'no label', });
lyr_Plantasenbuenestado111_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});