(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('金山区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310116",
            "properties": { "name": "金山区", "cp": [121.330736, 30.724697], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DBBAGCBD"],
                    ["@@HADA@AGCKHBBF@"],
                    ["@@FACAAD"],
                    ["@@DB@EB@@CB@@GEQ@IEKAM@ATE@EHADF@GDCFFPD^BBED@@BD@@DPBB@@CDB@BLC@ADB@BF@@CF@@DB@BDCDA@@DCACBC@AB@HDBRTHGBCHBDB@AF@B@NACQ@@@AC@@CC@CIEE@CFCFHDBHABDN@BED@BDNA@HAF@FCBADDLD@DAAC@AB@@ANC@ANC@TDBL@DGJC^BDBDBJ@^F\\VHGPB@CD@BAF@DKDBBCA@BAC@FK@E@BD@@BNABCF@@AFB@AD@BADB@GA@@AF@BCFBDKB@@BDBB@BEDBBDF@@CFB@HD@@F@@@HA@BBA@BDC@BJADBBLB@AA@@ED@DIHA@BB@BDDBBCBA@@@BF@@CB@ABFBBCFB@BD@FCF@DBBAD@BAD@BABBBAHDJ@ABDDABDBHCBDJIBOFE@IDKJAFCBAJELAAEBCBKAA@GD@AIBEAIDOK@@EDEAABA@A@BB@@@B@B@AAD@@ADA@EJ@@CB@H@BLDBFA@@B@@GEB@EB@@CB@DETAAADA@GH@BHLAPA@ABBD@JU@ABBFCB@£«ugWOCOCgBDaAE`@HCBBFCBAJA@AFDFAFFD@FDFCFBBA@BBAFBDA@CDAAA@STCBWLAAABBBCBAACB@AABBBIFAPCHCFBBCB@HA@CAABGPIBO@ICCEDMGAILADACCBCA@CECEAKCADCBADAAKAEC@HEBCAEDQBACEAAB@BGCYDEJCB@BBFN@B@@JDbHRJL@D@FA@@CCB@DABBDEFACSDA@AAA@DDBLFHAB@BABCAIDADABCEKCABC@CDABBBC@@B@BA@BBcO[@MGDCC@DK_KFMGBCFGADEA@AGCA@@DAD@AFB@BCB@DGOCCLKR]JADEAMMABBCA@CB@BABCAACB@CEAB@CAAGBDFGFHFGBBDFHF@BDB@ABBFDADFF@DHD@DFFADDGDDDADDABDA@DDCDFFBDEBFFDCDBCBDDEBBDB@@@CDCDI@GB@BBFAB]DAHCDDH@DDBHB@DHABDB@@FG@CABJBl@FEFCFBB@LB@J@@GPDA@DD@AD@D@@CCA@BCA@CB@A@@AF@BGFAADDB@ARF"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124321, 31442]
                    ],
                    [
                        [124337, 31429]
                    ],
                    [
                        [124341, 31419]
                    ],
                    [
                        [123933, 31687]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));