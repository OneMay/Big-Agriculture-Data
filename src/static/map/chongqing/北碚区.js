(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('北碚区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500109",
            "properties": { "name": "北碚区", "cp": [106.437868, 29.82543], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@POdUFEBE@EGMG]@CLGFI@EEOBEJKGCAM@WFKMm@KDWEKBCB@ZFB@@CACG@ICDC@GIGIAAMDAH@FCBI@GECKDC@AAAE@EFKACEHC@AACA@EDG@GCAEB@ABIGCIGE_EECAEDIOAAEBADCBE@EAAAACDIBC@AC@GDG@WEACCCBK@EGAIBEGAGCSE@BCNBJD@DCH@FDALORABA@CE@IMCBE@DCAEIBAATSFOCAO@IGCEDGAAGDCAIDCDEBCDGCACAAA@EFAEGA@CCAE@@CCAA@CDKBIGGCAB@JABCAKK@GHGHEJKBG@IEGGEWGIIAGFSEKCCEAUJGJKJC@G@WEMGIKEWBGDEKECEAG@MGAA@CFcHJJEdNHNBLHLB\\CDC@EFEBGAIAIFC@AECABECAEGA@OFG@ICAECDBD@FQHAEA@GDCA@AA@KFAADE@ICEC@QDAABCCAo@AAAGC@KD@BEDBHABM@ECC@DNJNADHN@LBDHFFHDDFADCFCJDLN@FJFpzSAKDE@EEC@EBGHBDAHBLBHFDADKGEBLV@BEBGACFG@BFHJBD@DCBIAEJBFAFADMLAFGHBDRH`V\\PFDFFPHZPHDJGFEBKCEBKDIFETKFGJCNEJ@BBADJLCF@LG@AB@DDDHBDABGBAJ@DBHFPb@BEDDBJ@LA@AIY@ACBCE@AD@@AIUAAEAECBAF@D@ACCCCCACBADBDACEBCLBJNBDHEEGIOCE@GB@B@FDPFDFBFCHBFFFJBDJABBDE@ABF@DDBJEDDBBDFBN@FBBDDLHHFBFHDJHCNED@RjPGTOBBVtHZPb@NFL@RDFRN\\RFF@JABKHAHDFpfJFFHFFXJHDL@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109209, 30808]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));