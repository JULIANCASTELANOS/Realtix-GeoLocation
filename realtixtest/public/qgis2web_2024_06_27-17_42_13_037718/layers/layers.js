var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_centromedico_1 = new ol.format.GeoJSON();
var features_centromedico_1 = format_centromedico_1.readFeatures(json_centromedico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centromedico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centromedico_1.addFeatures(features_centromedico_1);
var lyr_centromedico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centromedico_1, 
                style: style_centromedico_1,
                popuplayertitle: "centromedico",
                interactive: true,
                title: '<img src="styles/legend/centromedico_1.png" /> centromedico'
            });

lyr_OSMStandard_0.setVisible(true);lyr_centromedico_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_centromedico_1];
lyr_centromedico_1.set('fieldAliases', {'id': 'id', 'ID': 'ID', 'Identifica': 'Identifica', 'Código_de': 'Código_de', 'Nombre_de_': 'Nombre_de_', 'Nombre_del': 'Nombre_del', 'Teléfono': 'Teléfono', 'Dirección': 'Dirección', 'Correo_ele': 'Correo_ele', 'Tipo_de_Pr': 'Tipo_de_Pr', 'Clase_de_P': 'Clase_de_P', 'codigo_loc': 'codigo_loc', 'codigo_upz': 'codigo_upz', 'coordenada': 'coordenada', 'coordena_1': 'coordena_1', });
lyr_centromedico_1.set('fieldImages', {'id': 'TextEdit', 'ID': 'TextEdit', 'Identifica': 'TextEdit', 'Código_de': 'TextEdit', 'Nombre_de_': 'TextEdit', 'Nombre_del': 'TextEdit', 'Teléfono': 'TextEdit', 'Dirección': 'TextEdit', 'Correo_ele': 'TextEdit', 'Tipo_de_Pr': 'TextEdit', 'Clase_de_P': 'TextEdit', 'codigo_loc': 'TextEdit', 'codigo_upz': 'TextEdit', 'coordenada': 'TextEdit', 'coordena_1': 'TextEdit', });
lyr_centromedico_1.set('fieldLabels', {'id': 'hidden field', 'ID': 'hidden field', 'Identifica': 'hidden field', 'Código_de': 'hidden field', 'Nombre_de_': 'inline label - visible with data', 'Nombre_del': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Correo_ele': 'inline label - always visible', 'Tipo_de_Pr': 'inline label - always visible', 'Clase_de_P': 'inline label - always visible', 'codigo_loc': 'hidden field', 'codigo_upz': 'hidden field', 'coordenada': 'hidden field', 'coordena_1': 'hidden field', });
lyr_centromedico_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});