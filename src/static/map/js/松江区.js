(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('松江区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310117",
            "properties": { "name": "松江区", "cp": [121.223543, 31.03047], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@DLB@BFTHAFB@DABHFELFBBAH@DIHB@GB@@CB@BEDAB@LAPB@DFBADD@@BBBN@@DRB@BADALHABlH@@\\ABAFQPOLDBDBDCJBBJFA@FCJC@@DCAABDDBDKHB@CDBDEBCEINHDABFB@DDDD@F@@ABCAA@EB@@CH@B@BCBABD@DLBBCB@R@ADD@BAJ@BBBB@BA@@NG@AFELC@AB@@CBA@KJAAA@CAC@CLD@ABBBGJDBBDCFBBDCFDADBBDCABB@@BA@HHDBABFFDCBBDCB@BABB@AFEBBBED@FEDDBED@BALB@CD@DEHBBGDBBCB@BFB@@LC@@FJA@AJB@@B@@FB@@HH@@BJ@CJDDADDBB@B@BCJD@DB@AB@FC@@FC@@D@FDA@X\\ILF@CAA@ABBJ@DEXFPBI_CM@CF@NFF@BBB@BAADBLFBJABHKB@@L@BHXCAGBAF@@BB@@BCFBDDBD@BB^ENNEFEAEHCC@DBB@BB@AH@BFCD@B@ABDB@@FAF@ABXFnNHKB@BA@CDC@CDA@EB@BCBADE@AC@BCD@DCFI@CRUHM@@GE@AA@@BGAFONDBCHBFK@CBAHODICACDEC@CC@BCEAFEA@@CMABEIESCCHECEDBCAA@WAMAA@MBCAC@E@A@C@E@IAABCN@FDBAIGAGOSGAA[DAD@J@XIJ@PDDI@ODK@UD@BCAAGADSG@CAA@AABAAAA@@BECBC@IFCBC@CIG@A@AGDCABACCBAA@@@G@GCCB@AABC@ABC@ABCAE@EDC@@AEAADEABAA@@DE@@A@@ABADCAACA@@AGBCJC@@FB@@BMCBCAID@ACB@AAB@@G@@@EC@@GEA@DE@ACCAAFA@CA@AA@CLEAADE@@BB@@HCAABC@@BEA@BE@ADMB@AC@@A@FELD@ABB@ADCACLE@ABC@@DOAGH[U]EI@CACA]AIDCHK@CA@SMD@BMD@BA@@BBDCBC@CKBCDA@EBE@GMBACC@AFM@ACGBCAEGED@DFFDJD@@DD@@B@@DRMBA@E@@BCAGAADGHQSCA@GBAD@DADB@CB@DCACA@@CE@@DE@@ACA@BKD@ACA@DA@OA@CC@@AC@AF]AOCEECD@HCEGB@FSF@BBNFL@JFR@HA@@DA@@FCA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [123933, 31687]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));