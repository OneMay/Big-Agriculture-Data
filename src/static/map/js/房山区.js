(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('房山区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110111",
            "properties": { "name": "房山区", "cp": [116.139157, 39.735535], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@NGNAFCLCBE@CBADBB@DGB@@FBBHE@EA@BQE@D@BCCAAGBMBC@C@AB@@CACBCAADKAGB@BDBEJ@BDABD@BBBE@FDAHBAFN@BABFDAF@@GBAB@@BBAJ@BAF@ACHAEA@AD@A@G@@AAB@AC@AAA@@BABC@EK@AD@@BB@@EABA@AADCACDABGB@@HB@BEH@@BD@FFH@BBB@ACBADDDCDDD@@BABBBBCF@@ALBBBDADFBAHLDPBDP@LAACD@ACH@BDFAH@@CLABP@\\BBBDFB@DDBAJFBLJCF@JZ@DBADB@ZABCDMPKBI@CEGDIAG@K@GDEAEBCAEDQCIBGAIGCAEEAACFI@EDCACBCEGBCCGIGECACGGBADACG@ECKS[@AHCBCIIDKKU@GCIH]AMBCAK@KFMBCBCAEHEAMGKYAAHA@@DE@@JCB@E@F@EA@@FAE@@@FA@@EC@@FE@@CE@@DK@@DOA@II@@@MCI@@BKABDCBCE@IA@@CA@@GC@@AA@@HA@CGAAGBAEA@G@EA@DQB@HIAEEO@@JIHBGED@E¿EGB@DCBC@AAEBBFA@DNA@@DIAIDC@AGB@@AG@AICAEA@BI@GABNE@CFA@BHA@@HGA@DKAADCA@GA@@QB@@ECEDEBAE@@EA@ABI@ACA@@GGB@CG@@EC@@FE@@DG@AFA@@JAACDE@@FI@@HE@ANCA@DCB@FKBAB@DKBCBE@CDAKCA@AAEFCAGNACCB@AEEIDACEB@CAG@DA@AGBAAABBBC@@BCAEBKABIBB@CBA@KK@DAA@AAD@CGGB@ESB@CA@@AK@AHGCKN@AE@@CC@@CGB@AAMC@CC[@@KGACGG@BKB@BCC@HABEIABAD@C@BED@@CFDFA@CC@@AFACCODK@SDBADA@AE@BD[BKAQHAAIDIBDCAAFCCC@@EFAFE@EACDCA@AACC@@@@B@@@DAB@BEDB@ADEDADEXGFB@BBCFABD@@DC@@AID@ACBCAADE@DABGEBD@E@@AC@DBC@D@A@AF@HA@FBID@BD@EJBBC@BAC@@BIDCCCBC@BBM@GBEDFB@D@BDBFAAB@H@@BDEBD@A@@DEA@BABBH@DABIL@LGJQFIFGLAABCAABCCGMGACG@@BG@CCG@A@AHIBEABCCCBAC@MBEHGBKEIAOBCCBAMCGCCIEBGAODBFBDKFCH@@EHODEJKJA@KCKG@C@CEEAABCMGKC@ABC@ACCE@BFEV@JDHJHHFAD@JCBDBADADDFADBDKB@DIBCJEFSBAAAEA@MBEDICAD@DBBBHDDBDRN@BIFBB@FDBAB@DFBDDABBBF@@BDBCBB@DBBBEDDDADCBGHE@FHBFCLALAHBFEFBFHF@FE@GFGBW@EEGHE@CBKHE@GDKDGL@FCFBLGDGCCHLDFLTHRGLBdRFJHDPEDB@CFADCFCJIDAB@NJlHB@DDHBPAHB@BJHDFJDAJFFR@VBFJJFFPLJ@BABDFNHH^JJDHJFFDR@JHH@LNZDHDN@FDBJNFFHPFL@HDD@P@DDTBdPBDXHDDLDFGDAf@JDHALCHKP@PERUFBDAJEJBHDNBPJDDFJJFXD\\GPBDAJ@TBPFJ@JMCKBEQGKKOMAAHMDA`GH@FADGFANBNHD@ACACRB@@AD\\LPAEKCCKEBIAEEOJG@IF@bRDBNABG@GBANBDDF@DFHCJB@BHBJAH@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [118840, 40803]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));