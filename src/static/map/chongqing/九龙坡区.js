(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('九龙坡区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500107",
            "properties": { "name": "九龙坡区", "cp": [106.480989, 29.523492], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DJILDEC@KFKDCBADA@AC@EACED@JC@EECAUHC@@CF@DCAAC@GFBF@BG@EBG@BEM@EG@CEDBDC@@EBCAEBEJCBFFB@AFCFM@CEBGEEDCAESGK@CFCFCBCHCAAE@AKESDQBCIIA@EDDBCBCBECAFBDCBCCDEAEC@@DABEAACCACDBLG@ADCD@DEGDGCAGBCD@DBNKDAF@FDHEA@ACCGAIDAC@EEKAQLMAAGAAEDUFI@CC@AAFGNGDYFCKQI@C@BOFI@KMCAGASIGAC@MNaAIGIGEWEWAICMGSQYI]ISBGBEJELMXKNDHFDETFDFDCLBBDF@HBDGFCACCIDABAJQDEDCFFF@JDD@DBB@DVFDDAHED@DBDLH@BBFALBLDFF@HADC@GBCPDJABBCD@DDDF@DFDADCHBFLNF@BEB@`ABM@AAAGABAJDFJFAJCDC@MAGAAPCHGCEJA@ECEFCAAGC@AD@HIDCHKDIACBEBBFGP@D@DFDCJBHDDBBLCDBBDCFKACDFP@DC@CICBADF`JXEBAECCQF@TADBDD@BEDBADHABIFCFDHBHFNADB@DPCBBBRFDBADGB@FDDDD@BBBCDBBHJCPFHG@FJAJHBHHDABB@NHB@DEB@@HFAFGNGH@BIJDDAAGBCCA@ABCFCH@BFHDB@FED@@HABAFDHBBDC@GFIF@BDB@PAAC@CCuEEBADAAC@AG@@IBIT@FBJ@BB@FFBJ@BEBAN@DLB@D@@JDBCHDDBBDHFJBFHBBDAHLFRBAHBLDA@EBEBAHBB@CLADAB@B`ADABE@IJCCAAEBEBADADBBDB@DAP@BB@DBDB@BEBCTA@cBKLGVKBEBKCIAEGIEAI@EBGHQD"],
                    ["@@AA@BEADDDA"],
                    ["@@@AA@BB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109079, 30188]
                    ],
                    [
                        [108965, 30147]
                    ],
                    [
                        [108979, 30134]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));