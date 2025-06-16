var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelit_1 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Kelurahan_2 = new ol.format.GeoJSON();
var features_Kelurahan_2 = format_Kelurahan_2.readFeatures(json_Kelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_2.addFeatures(features_Kelurahan_2);
var lyr_Kelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_2, 
                style: style_Kelurahan_2,
                popuplayertitle: 'Kelurahan',
                interactive: true,
    title: 'Kelurahan<br />\
    <img src="styles/legend/Kelurahan_2_0.png" /> <br />\
    <img src="styles/legend/Kelurahan_2_1.png" /> Balandete<br />\
    <img src="styles/legend/Kelurahan_2_2.png" /> Laloeha<br />\
    <img src="styles/legend/Kelurahan_2_3.png" /> Lalombaa<br />\
    <img src="styles/legend/Kelurahan_2_4.png" /> Lamokato<br />\
    <img src="styles/legend/Kelurahan_2_5.png" /> Sabilambo<br />\
    <img src="styles/legend/Kelurahan_2_6.png" /> Tahoa<br />\
    <img src="styles/legend/Kelurahan_2_7.png" /> Watuliandu<br />'
        });
var format_KeteranganJalan_3 = new ol.format.GeoJSON();
var features_KeteranganJalan_3 = format_KeteranganJalan_3.readFeatures(json_KeteranganJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeteranganJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeteranganJalan_3.addFeatures(features_KeteranganJalan_3);
var lyr_KeteranganJalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeteranganJalan_3, 
                style: style_KeteranganJalan_3,
                popuplayertitle: 'Keterangan Jalan',
                interactive: true,
    title: 'Keterangan Jalan<br />\
    <img src="styles/legend/KeteranganJalan_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KeteranganJalan_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/KeteranganJalan_3_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/KeteranganJalan_3_3.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelit_1.setVisible(true);lyr_Kelurahan_2.setVisible(true);lyr_KeteranganJalan_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelit_1,lyr_Kelurahan_2,lyr_KeteranganJalan_3];
lyr_Kelurahan_2.set('fieldAliases', {'NAMOBJ': 'Kelurahan', 'LUASWH': 'Luas', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten', });
lyr_KeteranganJalan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Fungsi', 'Material': 'Material', 'Foto': 'Foto', });
lyr_Kelurahan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_KeteranganJalan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Material': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Kelurahan_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_KeteranganJalan_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Material': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_KeteranganJalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});