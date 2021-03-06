(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('合川区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500117",
            "properties": { "name": "合川区", "cp": [106.265554, 29.990993], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@D@XGHAH@LFF@BEBGBKDCJABABGBGB@FDB@DAJIB@BAB@FE@AAC@AF@@DBBFADDB@BAAACCFCBCHBHRRDBC@GDG@CAEAKE@BCH@BADB@@DADBBEH@BAACC@ABAAHGBBDIFBADBBJ@CDBBF@BCHABBBABEAE@ABAF@B@CCBCJ@DDBJEDEJGDBFCFBBPADMBCECBAF@@FBBLGFFB@FCAEBADBDFFBJE@ACAA@HABCCC@ABBDDD@DCFDGQBEHFFACCDGAEA@C@@C@AL@@AEELEGEAC@CD@FDBAACBICCBAAGAAKGCA@CFCL@@OHAEML@PCLDB@BACCBC@AQUJGJBDCBKDALCHBZRF@LMFKAGC@BCKEAC@CDCN@BE@IBAHF@BCHBBHH@BGJ@DDBH@BBD@DCJ@BADA@CAC@IDAFAFB@DGFADHF@JBDBDIJEBCH@BJ@FABEB@HBHC@GAI@KJBBB@JJDHC@DFBIX@FBB\\LEJEDBDCFBBL@HCLEDGBALBJEJABDDHAH@DFBFCDBDHFFPEBBDAL@@@AFJDDDVEDDBA@CBAFABB@BEHGH@DJBFAFEFCHMFARDFNADDBX@DNCDK@CDBHADKACFEBCFLALHB@@AHBPCF@BBAHEJEFADFFFBD@LKDBBJQPJLFAP@@AJACCI@CIHCF@DHBBREJ@DDDJBBBCFEDGDCFAJFD@JE@IBCJDJAD@@D@BFDJBHACH@DJDB@BGRDFCJCBVDFNJFBFAXQFCXADCBEB@ACBCFCJAFBBADBP@@CD@AAD@@CD@@AFABEFA@QHBBABECC@CDAFDFAFSJO@CUACAAEMCAEWA@CCAACDCBBB@BCND@GBAD@BFDA@AAAFCEGD@DCDDFC@AEACEGC@CFCEAAAJMD@BFFABKEAAAAEBCD@DDNFF@FA@AOUFCRADCBIIC@E@@F@HFNFDCCKFGF@HFHABA@CIIFKCM@QAM@CD@AE@GI[IMMQEAU@[KIGEGIEoeCEBGLGBA@IEE[QQMCE@QEK@MOaGYUsAASPOHQiC@MFGDCIEGEAGGCKACEAM@EAACCAFCAICCE@BAF@ACBACIIAEEAEDGAECEWIAHV`IDACIMIACDDFCBCAADJJBDC@E@ABFDFBBBJV@BC@@BDFDABDHX@BKBK@AAFC@AOaIECAIBAHABE@ECAA@CBAH@@KDEIKBCA@EAQFIDEHSLEFCJALDFALGJGDOGQKOGEEEC[O_UQGACAEIEc[mkIPHVDDD@BDADCDCBADDDHDJIBBDJALFTADC@AAOOC@CBADDJCFC@I@ADE@EDAB@BCBGFBBA@CBADGBHH@DIBMCCBBFABE@ACE@CD@NGFC@@EEBCAAFCDB@ABIDCC@GK@EEKCGFC@CKMAE@IEA@ONG@CDIJIDA@@CHCBA@EGGEAI@@BBDCFLNBFADC@EGI@GFAJIHC@EAEBLHBHAJFFHFAL@DDHFDKN@JDDHD@FYFQBiCKBuIIBGBC@CAGIEAC@CJBJHD`HFD@BCFeRSNI@WEGBONKXENAJ@JJP@DIN@JFJLJADGJ@DNFFFDFDBBDILADDFFLCFMB@DSLEHAH@FHHNBBF@FGFCFOLCHCF@DBDFDB@BABEJEJEHAD@JFFHLHNPDDHBBB@DKNKFGH@TIAGJAF[DFH@NDHTRVFJFDJ@HGHOFCDOEUDAFHLABO@CBGTCPBBFCHADJVRMJAFBDFLABCBAD@FBBNHBLCLOVAHLDBADAHGFAHBDDBJ"],
                    ["@@EFDFDEAE"],
                    ["@@@A@B"],
                    ["@@AABB"],
                    ["@@@A@B"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108545, 31106]
                    ],
                    [
                        [108811, 30929]
                    ],
                    [
                        [108715, 30640]
                    ],
                    [
                        [108790, 30630]
                    ],
                    [
                        [108795, 30627]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));