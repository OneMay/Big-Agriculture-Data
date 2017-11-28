(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('长宁区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310105",
            "properties": { "name": "长宁区", "cp": [121.4222, 31.218123], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@AACE@FO]KCCBECCG@@D@@CCmBSAcKG@EBAEGC@DC@QE@CA@@BEBMTNFAFDBA`D@BDA@AA@FFBBLD@@@IBDBABDB@@DBADB@CHA@@DC@C@@@BBABFDH@AHD@ACDA@FD@BCA@@CJCNWJ@BCHAFEF@XCV@DFH@VFBBCFD@HEFFFBB@@IDAJFBABIFK"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124354, 31964]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));