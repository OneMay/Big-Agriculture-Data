(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('顺义区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110113",
            "properties": { "name": "顺义区", "cp": [116.653525, 40.128936], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@C@@AIA@ICIG@CCcVDDAFI@JEA@IFC@ILGFWHEFAB@BJD@BDDCFB@BBABvb@GB@BIB@@LJBD[AAB@B@BGAGACB@DDBQD@HC@BD@AJF@EFADLBLm"],
                    ["@@MDW@CHC@@DE@@HAA@DE@@BK@@CE@@AC@@EGB@BE@AEIDBEE@AHOFACABEKMGGAADGA@BCADMCA@HCB@BI@ABEACBIA@AA@@DC@AHE@ADABGEGFAHCAICMCBAC@EHEABAG@ABC@@BIA@HC@@BG@@HGAKnD@@ADBBDAL@@A@AXB@@BA@EZD@@DA@ALC@@JA@CJ@ABGA@BKE@@E_CC^ABA@AHC@BEA@BQHguaA@AAAD@DABIIIFKLIFIBUAGDIJGFY@CDC@@BSDEHEBEFDDH@FDD@FBFAD@NJBLD@ALEJ@HCDC`EBCHBDH@DFHADPKD@BCBMACDJVDADJJLCF@NEJYRD`FHN@@FEPBTJBLJJAD@FJBHB@@DJ@@EX@@AF@@FBBV@JLAHABCJHCLB@ABBH@BCJDL@FD@EACL@AGLA@BNAFC@DB@DBFIJ@@FHCACDA@EHEAIDAJDVCBDB@@PF@@BH@J@DEB@@BF@@AD@@ALB@DPB@BLAJB@CDEA@BGFCBIC@@C@EEGD@@EHB@FBB@AB@DI@BLANNB@JFCDDFHDDADD@LLAzzDCCGB@BBB@ACB@BBZG@ALGBB@@@CDAAAB@BBD@DDDACCFADFRH@FB@@HDABFB@BFA@@BBLB@BEFCBB@BHAFDJC@AHA@HB@AIDA@AN@FA@@@BGBND@B@D@DDFBJFB@BCHHFDDFBXBDCHKACHQDCX@@QFKDCAA@EACFEFABE@CJG@GDCDEDADKLABABAIAACC@@CJADCL@BIBCJCDDPCDF@FBBDBFFHADCBCFCAE@CAABAACBECCGDIA@ADEDE@CDEDEAABADBBGB@@DF@FAFE@GG@@G@ADGH@@EL@@BJ@AENQHMLIGKAEEECG@MECLECKFIHEEMC@ACCANE@ACB@ADA@AJA@EDB@EG@FE@GBAM@FCD@DDBAF@CCD@CGAGC@CKKBCADCE@@BEBACGBAC@@AED@@OC@_S@N@@@GA@AHA@ECABBBE@@BF@@DEAADE@CFC@BGA@ADA@BCC@AGIA@AAACJAAAHK@@BMKSA@CCDMAEBIGIA@@E@MPIBDDOFAEcA@EQC@MC@@MBECB@CI@@DE@@DACOBEEUHBDS@EC@KCA@A@ECICE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119409, 40992]
                    ],
                    [
                        [119575, 40975]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));