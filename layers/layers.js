ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([98.477047, 16.046534, 104.321670, 20.066230]);
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_KhonKeanMaxFlooddepthm_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KhonKean Max. Flood depth. m<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_1.png" /> 0.2000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_2.png" /> 0.4000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_3.png" /> 0.6000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_4.png" /> 0.8000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_5.png" /> 1.0000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_6.png" /> 1.2000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_7.png" /> 1.4000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_8.png" /> 1.6000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_9.png" /> 1.8000<br />\
    <img src="styles/legend/KhonKeanMaxFlooddepthm_2_10.png" /> 2.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KhonKeanMaxFlooddepthm_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [102.749878, 16.357605, 102.937373, 16.535378]
        })
    });
var lyr_ChiangRaiMaxFlooddepthm_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chiang Rai Max. Flood depth. m<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_0.png" /> 0.0000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_1.png" /> 0.5000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_2.png" /> 1.0000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_3.png" /> 1.5000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_4.png" /> 2.0000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_5.png" /> 2.5000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_6.png" /> 3.0000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_7.png" /> 3.5000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_8.png" /> 4.0000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_9.png" /> 4.5000<br />\
    <img src="styles/legend/ChiangRaiMaxFlooddepthm_3_10.png" /> 5.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ChiangRaiMaxFlooddepthm_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [99.809860, 19.880140, 99.864861, 19.924585]
        })
    });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_KhonKeanMaxFlooddepthm_2.setVisible(true);lyr_ChiangRaiMaxFlooddepthm_3.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatellite_1,lyr_KhonKeanMaxFlooddepthm_2,lyr_ChiangRaiMaxFlooddepthm_3];
