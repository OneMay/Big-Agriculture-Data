(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('津南区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120112",
            "properties": { "name": "津南区", "cp": [117.382549, 38.989577], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ZAZEVKXSPGVEnDHCJYJMVKNEPCdAZHRJJHHBDADG@ECMBCDCLCF@THHANQPWD@DBXRJ@HAJERSJAJBDCEOCAKYBQCA@GBCDSGAGBIHSNA@KCQMCF]INaCuOSGU{zm_yENH@HDELBD@BG@AHH@CHEBCNIAAPABEFMAS@HHWLJZ@BiTBB\\CRXBHDBDDIFABLJRKAGF@BXNNEHHBBBKFNDGHQEIFCRAHCDE@EHICIDDDLCB@ELBFABBD@BBDB@DDCHKCM@CBGAEBGBMAAJIAMP|@@Cd@EPF@DFF@DCB@DDD@@CRBEVNJ@D"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120108, 40016]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));