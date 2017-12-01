(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('奉贤区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310120",
            "properties": { "name": "奉贤区", "cp": [121.458472, 30.912345], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@LBBAJB@BD@T@BDbCBBD@FKHEPBDAB@nBRA@A@BHAJCB@@BB@@BTCH@J@ZI`SXQBCHGACFCDBBAB@HIDBF@NGDA@EFEACC@@CFB@CD@DBBAB@@CBAD@@EH@B@@AB@@AA@@EBCA@B@BAC@@AD@BIAKAC@G@IA@BA@GAAB@EQBIGA@IA@GYBYrĥDEU¡_[g¤A@EDAA@BIVC@AA@BOBKBAGG@@HCBBBSBCFA@@DA@@FFA@HA@@@EBCAAKG@A@@DI@@FCB@BC@BBA@A@@@A@@A@BABBBCF@FL@CPBJAFBJC@@HBBALADBFKBIFABEDIBCL@JEFAPKJHFBFADED@JADFD@AB@BBABBBB@DBH@CTHBBBADC@@VCL@PCJTfD^JNJLJHBPDV@LBLHJBZDHCAEJYDB@BLHTFBBD@@AD@DEB@@AC@@EF@D@HGD@BAFB@AF@BCJD@ABABB@AB@DCBCDADB@HAB@BB@BAD@@DP@NF"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124489, 31743]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));