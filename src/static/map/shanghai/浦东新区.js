(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('浦东新区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310115",
            "properties": { "name": "浦东新区", "cp": [121.567706, 31.245944], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@bM²WLCļÑNI^_ÈïsJQ¶±`e`Z¡LDCsEWOWs@GBI\\wsYg|QNUBģFqAZHZB@@JHBAJFRA@BB@HABB@@J@HBDBLAJC@@BD@ABA@B@AD@FB@@BA@@BA@G@@FC@AB@DA@ABCAC@@DEA@DD@BDEF@FQJE@CAGJA@ABCAEDBDGHADWR_TYJI@G@SD@AA@@AA@IDGB@A@BQBmAA@CBOAGFELC@AAaDACS@C@@AIAABKA@BEBFDADDBCJC@@BC@@A@@ABJBBD@DDDDB@DAFCDBBGCA@BAA@CEC@@FCA@DCA@AA@@EE@@AC@CD@BBBF@DD@DAA@BBB@BDBAB@VFDADACADBBEDAAAHECC@AAC@CAA@ACA@ABBFCFFD@D@ABBFBABDA@BAHD@ADF@BDD@FBCBCA@BBBABDDH@CDH@B@BB@@FB@BB@B@FBADD@@AHB@DC@EAABKBEBGAAAC@AAADC@CHFD@@BBABJBDBB@DB@@BABAHD@FA@AFCA@BADDBEFA@BBEFADD@BBCDAACDCCABE@BCECC@@DA@CHE@@ACA@DA@@BA@@BE@ABOC@AA@CBMAAHCDAAAB@AGA@@CADEAAABCACNA@KECLC@E@@EA@A@@A@AC@@AAAA@A@C@BA@CDABEAAADCABAAA@DEH@CEADACAKDHN@LAFKNGJAF@D@DBFNLHLANEP@FBFJJJDdHDDLLNVDHAHEJWXAF@FJFHDtDXHhZNPFHBHALK\\AH@dCNCHCDMHoTUJMJIP@RRZRR"],
                    ["@@PDNAvOFGBKCeEQGEI@IBMNY\\GJELATBJ"],
                    ["@@HRHJNBX@XCRGfEFGBM@eYuGIgCIAK@KDMPIREVCXARBP"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124438, 32149]
                    ],
                    [
                        [124808, 31991]
                    ],
                    [
                        [124870, 31965]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));