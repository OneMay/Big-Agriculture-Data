(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('铜梁区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500151",
            "properties": { "name": "铜梁区", "cp": [106.054948, 29.839944], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@MHQJSPQJAXFJ@TM`MHEBC@AEC_GGCAIDID@FBHJDBD@HAJAvJLAjDRAZE@EGCCC@ILMECCG@CBKGEEEBIAGKGFAFBD@JGBIHEJ@FHD@BCAEKMDEAC@AJ@FBHH@FABGD@DB@JCJIDCH@PMB@FDDAADB@F@NBDLD@HELDFFL@BJBBD@HEA@DCBEDBFA@FD@HE@MDCF@BDF@BAAEDANDJA@CGEBAAADA@AFBLKDA@AFEH@BCJ@D@DECIBCDAD@RRD@BAEUBKCIAAIJGCCCBCDADCBCACC@CCGUJOOQCGssKKeU[GQKMSKAIGCCKC@CJIHC@ACKAOEMBGAKEECKCEAMBAN@@CJOBCACKOFC@EAAG@IOKAMGMOKIGQGCGUIUFEBGIQAIEGE[KWIQG@GIBGDC@@EAOAQSGEG@MB_GO@[CCCCGGCQFCDC@E@@DBHEHFJADOB@EKKCFHB@BK@AHA@OKK@GBCABAAACBCFBBDABDCJEFA@EGAAABAHODAABA@CBCCC[IUBEJEDCF@HHLADA@@BBDIDIBABDDABK@ABNLFBDBHJH@JJHDDHFBBBX^FBABDLLRDBD@D@fdTfFPB@HCPKD@BBLZBHLTPTLXLPLLUPFLAFCDFHABKDCCEAEFAGCAK@KD@BDHABEBBH@JBDADCB@JCDC@BDEB@BABEAEFC@GBE@CCEEA@WDKEIBEGEDABGDGHIAAFGDGAEBECQACJJJGFEJEAEBCCBC@GIILIGKAGAAUAAEDCGICGEEUBOAiBMFABDLGJQEE@CBALDN@FID@CCACD@FMHE@@HGBADA@CDBFAFCDEBDDLH@DDFHJHBJFJADBBD@JBHV\\@FJ^BRH@NGF@DDALPTF@DANDB@DCFGL@JNBADACMBCF@DHHAXKH@BACA@AB@F@HADCAC@OFCFAP@JFFHABAFEBHJBFJJDBH@HDBNHPCFIFMXIDCF@BJADDHHBDIREACDFNEDM@@BBFCFGBKEC@CB@FBFADGB@LBFLRFFADI@MDEHSHGFOBQCC@ABAHBBHTHJ@BIHABFRAHBBDBHABDDADF@@F@BCD@DEDBBDFCF@@JFH@DMJAD@DPDDNABGB@BCDFFDHFBADDFDBBADDLBBCFCB@@BBBHALEBOHEHCDEACKEDIVCF@BB@LLHAJJBHAJEBA@IFE@EJA"],
                    ["@@@CABBB"],
                    ["@@FABAEABBCB@B"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108525, 30783]
                    ],
                    [
                        [108714, 30641]
                    ],
                    [
                        [108789, 30631]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));