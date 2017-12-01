(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('门头沟区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110109",
            "properties": { "name": "门头沟区", "cp": [116.105381, 39.937183], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@GCODC@@EECEBMASEKEKAOGMAAC@CCAKBICGAQJOCGEFIBMQCCBGC@CCEG@IBGA@AIAGDCEE@CCMAAB@HAHMBgSCB@B@FIHFPBFAJLFDDFLOB[KBC@@QABDBDC@MGMAEBCHEBG@_HCBGNBBPNLLRHAFDLINI@OESAI@CBOA[HWCIEEICCOIMAGCIAIFCBEAQVOFO@GLKDGBICe@CBEHKCCCWGACcOSACCO@C@GCK@OEEGMEAIECM@GCYCKMG@IGQ@ECIECGIIG]MGCEBA@AKIEOIEEIUAQ@CFGBIDEBOF@FCBKDGDIAGLSDE@CLADJFNV@HAJLDBLE@QJMBAFBFHDBFDBFHFDADSPEDCFGDC@EDGBADMH@FEFELQFE@CBGBEDMFADKBGFIBCCE@C@CAEB@DEFDH@DDHEDAFDJBHB@DHABFDDFHFNFD@BCH@EPBDEFEBAHFHDDJJDHBJDBF@BBP@THDFHBHHBD@BBBRJD@BFH@@DJLADLDDFTLVDH@BCB@FDLDBDDBBFCLDBBFF@HFF@BCFBBBDDDBBADGFAF@LBDHAFDHAFDA@NJHV@NEJDDADAH@DBJCL@DBCHFH@DTJFC@AbBHDFBF@FCFDD@FE@ADCLDTC@DABK@KFJ@LDLAPIJDLALFBBHDDDDBHJBF@DGFADHL@FBDFBJCFDFBJVLDHAHD@QFCXSBCHG`@LEB@NIBDCFXELBBBFCLDF@LIFABBHCFEh@FEFDLABBFELAFEDAFGHCNQD@DGDA@CBCEACEB@NCD@AAJG@DBFD@HB@AAE@GCCDGHGBEAABA@CBCLFF@@DFBPDLADBDANEFBDANC@CJATPFEHJLAHDD@DADGFGDA@ADBHEBC@EBCLG@EGMDC@CHMBC@EHGD@HCVBFDF@JCRBNC@AD@LBJ@JCDCD@DCHEFBHCD@BCJCBEDAB@FCBCD@@CDACCAEUCKCCA@CQKEBMCaCIGFSHC@ADA@ACKC@ACCB@CFGAAFEICA@A@CKHI@AFCBCJDFI@GBANCHADCFMFGLEBKBALENO"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [118956, 40847]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));