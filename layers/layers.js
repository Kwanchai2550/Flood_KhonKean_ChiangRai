var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var lyr_ChiangMai_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chiang Mai<br />\
    <img src="styles/legend/ChiangMai_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/ChiangMai_2_1.png" /> 1.0000<br />\
    <img src="styles/legend/ChiangMai_2_2.png" /> 2.0000<br />\
    <img src="styles/legend/ChiangMai_2_3.png" /> 3.0000<br />\
    <img src="styles/legend/ChiangMai_2_4.png" /> 4.0000<br />\
    <img src="styles/legend/ChiangMai_2_5.png" /> 5.0000<br />\
    <img src="styles/legend/ChiangMai_2_6.png" /> 6.0000<br />\
    <img src="styles/legend/ChiangMai_2_7.png" /> 7.0000<br />\
    <img src="styles/legend/ChiangMai_2_8.png" /> 8.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ChiangMai_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11017831.144553, 2126128.755519, 11024510.367434, 2132955.105655]
        })
    });
var lyr_ChiangRai_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chiang Rai<br />\
    <img src="styles/legend/ChiangRai_3_0.png" /> 0.0000<br />\
    <img src="styles/legend/ChiangRai_3_1.png" /> 1.0000<br />\
    <img src="styles/legend/ChiangRai_3_2.png" /> 2.0000<br />\
    <img src="styles/legend/ChiangRai_3_3.png" /> 3.0000<br />\
    <img src="styles/legend/ChiangRai_3_4.png" /> 4.0000<br />\
    <img src="styles/legend/ChiangRai_3_5.png" /> 5.0000<br />\
    <img src="styles/legend/ChiangRai_3_6.png" /> 6.0000<br />\
    <img src="styles/legend/ChiangRai_3_7.png" /> 7.0000<br />\
    <img src="styles/legend/ChiangRai_3_8.png" /> 8.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ChiangRai_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11110782.816951, 2258837.292644, 11116905.437926, 2264099.133541]
        })
    });
var lyr_KhonKean_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Khon Kean<br />\
    <img src="styles/legend/KhonKean_4_0.png" /> 0.0000<br />\
    <img src="styles/legend/KhonKean_4_1.png" /> 1.0000<br />\
    <img src="styles/legend/KhonKean_4_2.png" /> 2.0000<br />\
    <img src="styles/legend/KhonKean_4_3.png" /> 3.0000<br />\
    <img src="styles/legend/KhonKean_4_4.png" /> 4.0000<br />\
    <img src="styles/legend/KhonKean_4_5.png" /> 5.0000<br />\
    <img src="styles/legend/KhonKean_4_6.png" /> 6.0000<br />\
    <img src="styles/legend/KhonKean_4_7.png" /> 7.0000<br />\
    <img src="styles/legend/KhonKean_4_8.png" /> 8.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KhonKean_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11438064.090239, 1846172.798395, 11458935.910335, 1866806.627505]
        })
    });
var group_MaxFloodDepthm = new ol.layer.Group({
                                layers: [lyr_ChiangMai_2,lyr_ChiangRai_3,lyr_KhonKean_4,],
                                fold: 'close',
                                title: 'Max. Flood Depth, m'});

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_ChiangMai_2.setVisible(true);lyr_ChiangRai_3.setVisible(true);lyr_KhonKean_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrainHybrid_1,group_MaxFloodDepthm];
