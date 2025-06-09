var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SouthwestFinlandoptimalsolarareas_2 = new ol.format.GeoJSON();
var features_SouthwestFinlandoptimalsolarareas_2 = format_SouthwestFinlandoptimalsolarareas_2.readFeatures(json_SouthwestFinlandoptimalsolarareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthwestFinlandoptimalsolarareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthwestFinlandoptimalsolarareas_2.addFeatures(features_SouthwestFinlandoptimalsolarareas_2);
var lyr_SouthwestFinlandoptimalsolarareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthwestFinlandoptimalsolarareas_2, 
                style: style_SouthwestFinlandoptimalsolarareas_2,
                popuplayertitle: 'Southwest Finland optimal solar areas',
                interactive: true,
    title: 'Southwest Finland optimal solar areas<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_0.png" /> 1-vuot. kuivaheinä-, säilörehu-, tuorerehunurmet<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_1.png" /> Monimuotoisuuspelto, niitty 1. ja 2. vuosi<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_2.png" /> Monimuotoisuuspelto, riista<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_3.png" /> Moniv. kuivaheinä-, säilörehu- ja tuorerehunurmet<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_4.png" /> Pysyvä kuivah.,säilör., tuorer. (väh 5, alle10 v)<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_5.png" /> Tilapäisesti viljelemätön ala<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_6.png" /> Viherkesanto (nurmi ja niitty)<br />\
    <img src="styles/legend/SouthwestFinlandoptimalsolarareas_2_7.png" /> <br />' });
var format_FinlandRegionBorders_3 = new ol.format.GeoJSON();
var features_FinlandRegionBorders_3 = format_FinlandRegionBorders_3.readFeatures(json_FinlandRegionBorders_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinlandRegionBorders_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinlandRegionBorders_3.addFeatures(features_FinlandRegionBorders_3);
var lyr_FinlandRegionBorders_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinlandRegionBorders_3, 
                style: style_FinlandRegionBorders_3,
                popuplayertitle: 'Finland Region Borders',
                interactive: true,
                title: '<img src="styles/legend/FinlandRegionBorders_3.png" /> Finland Region Borders'
            });
var format_PowerGrid110kV440kV_4 = new ol.format.GeoJSON();
var features_PowerGrid110kV440kV_4 = format_PowerGrid110kV440kV_4.readFeatures(json_PowerGrid110kV440kV_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerGrid110kV440kV_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerGrid110kV440kV_4.addFeatures(features_PowerGrid110kV440kV_4);
var lyr_PowerGrid110kV440kV_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerGrid110kV440kV_4, 
                style: style_PowerGrid110kV440kV_4,
                popuplayertitle: 'Power Grid 110kV-440kV',
                interactive: false,
                title: '<img src="styles/legend/PowerGrid110kV440kV_4.png" /> Power Grid 110kV-440kV'
            });
var format_City_5 = new ol.format.GeoJSON();
var features_City_5 = format_City_5.readFeatures(json_City_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_City_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_City_5.addFeatures(features_City_5);
var lyr_City_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_City_5, 
                style: style_City_5,
                popuplayertitle: 'City',
                interactive: true,
                title: '<img src="styles/legend/City_5.png" /> City'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_ESRISatellite_1.setVisible(false);lyr_SouthwestFinlandoptimalsolarareas_2.setVisible(true);lyr_FinlandRegionBorders_3.setVisible(true);lyr_PowerGrid110kV440kV_4.setVisible(true);lyr_City_5.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_ESRISatellite_1,lyr_SouthwestFinlandoptimalsolarareas_2,lyr_FinlandRegionBorders_3,lyr_PowerGrid110kV440kV_4,lyr_City_5];
lyr_SouthwestFinlandoptimalsolarareas_2.set('fieldAliases', {'VUOSI': 'VUOSI', 'PERUSLOHKO': 'PERUSLOHKO', 'LOHKONUMER': 'LOHKONUMER', 'PINTA_ALA': 'PINTA_ALA', 'KASVIKOODI': 'KASVIKOODI', 'KASVIKOO_1': 'KASVIKOO_1', 'KASVIKOO_2': 'KASVIKOO_2', 'Area': 'Area', 'area_ha': 'area_ha', });
lyr_FinlandRegionBorders_3.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', });
lyr_PowerGrid110kV440kV_4.set('fieldAliases', {'mtk_id': 'mtk_id', 'sijaintita': 'sijaintita', 'korkeustar': 'korkeustar', 'aineistola': 'aineistola', 'alkupvm': 'alkupvm', 'kulkutapa': 'kulkutapa', 'kohderyhma': 'kohderyhma', 'kohdeluokk': 'kohdeluokk', 'tasosijain': 'tasosijain', 'sahkolinja': 'sahkolinja', });
lyr_City_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'website': 'website', 'name:sr': 'name:sr', 'alt_name': 'alt_name', 'start_date': 'start_date', 'ref:LOCODE': 'ref:LOCODE', 'old_name:de': 'old_name:de', 'gns:ufi': 'gns:ufi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'url': 'url', 'source:population': 'source:population', 'source:name': 'source:name', 'postal_code': 'postal_code', 'population:date': 'population:date', 'population': 'population', 'name:zh': 'name:zh', 'name:uk': 'name:uk', 'name:sv': 'name:sv', 'name:ru': 'name:ru', 'name:mk': 'name:mk', 'name:lt': 'name:lt', 'name:la': 'name:la', 'name:hu': 'name:hu', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:et': 'name:et', 'name:be': 'name:be', 'name:ar': 'name:ar', 'name': 'name', 'capital': 'capital', });
lyr_SouthwestFinlandoptimalsolarareas_2.set('fieldImages', {'VUOSI': 'TextEdit', 'PERUSLOHKO': 'TextEdit', 'LOHKONUMER': 'TextEdit', 'PINTA_ALA': 'TextEdit', 'KASVIKOODI': 'TextEdit', 'KASVIKOO_1': 'TextEdit', 'KASVIKOO_2': 'TextEdit', 'Area': 'Range', 'area_ha': 'TextEdit', });
lyr_FinlandRegionBorders_3.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', });
lyr_PowerGrid110kV440kV_4.set('fieldImages', {'mtk_id': '', 'sijaintita': '', 'korkeustar': '', 'aineistola': '', 'alkupvm': '', 'kulkutapa': '', 'kohderyhma': '', 'kohdeluokk': '', 'tasosijain': '', 'sahkolinja': '', });
lyr_City_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'website': 'TextEdit', 'name:sr': 'TextEdit', 'alt_name': 'TextEdit', 'start_date': 'TextEdit', 'ref:LOCODE': 'TextEdit', 'old_name:de': 'TextEdit', 'gns:ufi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'url': 'TextEdit', 'source:population': 'TextEdit', 'source:name': 'TextEdit', 'postal_code': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'name:zh': 'TextEdit', 'name:uk': 'TextEdit', 'name:sv': 'TextEdit', 'name:ru': 'TextEdit', 'name:mk': 'TextEdit', 'name:lt': 'TextEdit', 'name:la': 'TextEdit', 'name:hu': 'TextEdit', 'name:fi': 'TextEdit', 'name:fa': 'TextEdit', 'name:et': 'TextEdit', 'name:be': 'TextEdit', 'name:ar': 'TextEdit', 'name': 'TextEdit', 'capital': 'TextEdit', });
lyr_SouthwestFinlandoptimalsolarareas_2.set('fieldLabels', {'VUOSI': 'no label', 'PERUSLOHKO': 'no label', 'LOHKONUMER': 'no label', 'PINTA_ALA': 'no label', 'KASVIKOODI': 'no label', 'KASVIKOO_1': 'inline label - always visible', 'KASVIKOO_2': 'no label', 'Area': 'no label', 'area_ha': 'inline label - always visible', });
lyr_FinlandRegionBorders_3.set('fieldLabels', {'GML_ID': 'inline label - always visible', 'NATCODE': 'inline label - always visible', 'NAMEFIN': 'inline label - always visible', 'NAMESWE': 'inline label - always visible', });
lyr_PowerGrid110kV440kV_4.set('fieldLabels', {'mtk_id': 'no label', 'sijaintita': 'no label', 'korkeustar': 'no label', 'aineistola': 'no label', 'alkupvm': 'no label', 'kulkutapa': 'no label', 'kohderyhma': 'no label', 'kohdeluokk': 'no label', 'tasosijain': 'no label', 'sahkolinja': 'no label', });
lyr_City_5.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'place': 'inline label - visible with data', 'website': 'inline label - visible with data', 'name:sr': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'start_date': 'inline label - visible with data', 'ref:LOCODE': 'inline label - visible with data', 'old_name:de': 'inline label - visible with data', 'gns:ufi': 'inline label - visible with data', 'wikipedia': 'inline label - always visible', 'wikidata': 'inline label - visible with data', 'url': 'inline label - visible with data', 'source:population': 'inline label - visible with data', 'source:name': 'inline label - visible with data', 'postal_code': 'inline label - visible with data', 'population:date': 'inline label - visible with data', 'population': 'inline label - visible with data', 'name:zh': 'no label', 'name:uk': 'no label', 'name:sv': 'no label', 'name:ru': 'no label', 'name:mk': 'no label', 'name:lt': 'no label', 'name:la': 'no label', 'name:hu': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:et': 'no label', 'name:be': 'no label', 'name:ar': 'no label', 'name': 'no label', 'capital': 'no label', });
lyr_City_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});