(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('沙坪坝区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500106",
            "properties": { "name": "沙坪坝区", "cp": [106.4542, 29.541224], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ZUBIEMIIQKGM@EDITGBEEQEMKM@G@AFCREnsHCHBBCAAGAOABCE@@ABABCDKA@GAABAF@FCBAKBGQAKEBGACGAAEEICGAACCDGCA@IC@A@CKM@ABAFI@EA@ECAG@EAS@AJ@HBBF@@BBDCBABFFDv@DBDOBA@ACE@EJ@HCDCCAEBEBA@GC@EFA@GCAEG@EDAD@BDBADBHCBICAJIBKFEHCBAABAACA@CFA@MGA@BAGCAGIGIB@EGHOEIDAGCAADAAC@CCECA@CHABECAQAAOD@CCAMBGEGAECEDAJGBBCCAAFC@CNBnDRHADBGJFTBNN`FDD@DBHTJJABEBGDCDJLH@LAFDCFMDCF@PBDHBFPEHAPGAAB@R@LADFD@RBADGFADBAFBFDBBCF@DDTD@FDN@BAAGFC@ALCD@BHBBp@DBADBBRCD@DF@JCFBBLEB@@BDBHCB@BFRG@EACDCBFJDH@PEB@FHDBAFDBBFD@LGHDHBFANIA[GKAKGMMFcIIdGDEF@DB@NBHDFLF"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109013, 30381]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));