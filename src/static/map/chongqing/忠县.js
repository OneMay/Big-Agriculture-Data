(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('忠县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500233",
            "properties": { "name": "忠县", "cp": [108.037518, 30.291537], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@FDLPRRLRT\\XTRXJTNJFJJJNVFHHAHGJEL@FCB@@BBBBCACHAACB@DB@AHA@EBCC@@EBAACFBTODAD@@AFC@CAABELEHKN@BEFFBDCDCDAJCBDHADFH@BAB@DJDAFBPAH@HGDFBEFFBAHD@@FFDFHHJDLAFED@D@BLHD@LEFDFADBFBJED@FHD@HIBGHE^DJABC@CACECBKCADGCMFIGMXOHADDLAPOFAFBFCHEBCPGDB@JDPJNDHJJDJCHBDDBDJBBH@DALQB@HJPFNRPDFDD@vhBD@LDFJFJ@NENANFFHJFJBPEBA@GDCD@JDD@HCF@DB@BCFBH@LHJJBDGLBPGAQAAK@FMBEBCDAL@NHJCLaFG@SB@D@PJDBF@FC@IKU@CJGBGDEDAJLHDTEFEV]piBEAYBIFGJIDESWKKEKUUICkJG@KE]UQIGOOQGUEGEEGAI@cBMCOEKKACBIPBJ@NGHIFADCFEH@PHfBPEVOAEKKGEBGOKBG]MGI@CAABEPIJA@MAEGEGEI@CEBMDMGMC@CD@TIHC@QGGAEDIJEILWDANGEIAGBAHEH@LFJJF@FC@AMOCEBCDAD@LBBAGMGEC@MJKDEKWYGKEGKCM@ACCYECIACCDCHALBFC^iDKAIOWcsU[IEC@UAGBCDADHXCHEBS[IEIAE]EBSOMCWLQBQJQLUDCBYdUX@FABGFAHAHQPCASSIMKEQHAJGJGBEA@FMBEDC@SUC@YFGFCH@DHRDJTNFLVPHNABMLWFWLEB@DCBCHEAEFE@KAEHOBEFC@ABDBABWBEDAHGFAHDPFFJBDDANDH@DIFEBK@SEAAGWCEEAE@EHCLGBGCAA@CBAAGDEAA]CIF@HHBDGDAHBBBAJCDABGA@BADHHBBADCBEACCCAS@OOGEMAGFBFELDDJDBTDF@BIHKBEHE@ECAIBEEOCCQCACBI@EKEEKAOMMICEBIHG@AC@GEIICGBMFM@BDCFDFADA@AHCDCJUE@ADAFO@CCGECKCK@ICEBBVJJCFIFCD@JBDJAFBBFALFFBDBDH@HBJAFBBJANEJEFAD@DNNPEF@DBBDKZ@DDDF@JAFBHF@BALDJ@JCDEDmNCD@F\\^JDLNBB@NJHDLJFNNTPP\\DBJDFDRFTTDH"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110246, 31151]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));