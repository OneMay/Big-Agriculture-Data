(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('普陀区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310107",
            "properties": { "name": "普陀区", "cp": [121.392499, 31.241701], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DB@DHBBCDBB@A@DF@@DFDDHGBDDALZCB@@EBA@ACQ@@DGBEFBB@FD@J@BFMBCCCDID@AODAEIDBDEBABBB@DC@AF@@AFGACBADBB@@NFADD@@BB@B@BAB@@@BBDA@HBB@AJ@@AD@@BB@AFHBDCJFHBGQAAJA@ALCBBF@@AB@@BD@@@JABDABD@@BHBBBNACEJA@ADAAA@B@ADAAAJBIQB@FCBBD@AGJ@@EJA@EHADDAB@BFANNDEVIPUAGD@@CA@@ECCBC@AGASKIAEGACA@EAEEA@EFC@DEAAUEG@CEU@WDE@EFGBADI@MV"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124267, 31987]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));