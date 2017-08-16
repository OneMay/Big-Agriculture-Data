(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('大渡口区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500104",
            "properties": { "name": "大渡口区", "cp": [106.48613, 29.481002], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DCBCH@AKDCDBBDFBBA@CD@BFCFDDDAACBEFDDADACAFEDBHJADCRFTBLF@BBGDADEDED@DHLFTDBFCHFFA@DENED@BEAAEIDAFBFAD@FD@ACFC@DFHN@AFH@FAH@@AAEHED@BBCDE@@DD@VGDBFFD@@IFCBD@FBDB@BCDALCLED@CFJKCIODI@MICMCc@KDIDEjqHEN]BIEGA@OD[PKBQAMAeO]QKMEMGOGGGEUGWKUC@LEJAPD@J@LREDCZMHEHBBD@@DEJCVBFHBBBKNBTFJ@FBDJCNDBAAE@CNEAMBEFCF@BDABADDDB@"],
                    ["@@EDHBAE"],
                    ["@@@B@A"],
                    ["@@@@@@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108979, 30133]
                    ],
                    [
                        [108965, 30147]
                    ],
                    [
                        [108979, 30134]
                    ],
                    [
                        [108978, 30134]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));