(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('彭水苗族土家族自治县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500243",
            "properties": { "name": "彭水苗族土家族自治县", "cp": [108.166551, 29.293856], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@NKVEDABC@EAA@C@A@EEIEAGEUAECAGDABEAECGG@AC@CAE@EKQEcFCFBJALCDEAGDCBAHHFAFM@KZSFADCBSAMDCLEDKHGAK@GAAMAECBEAA]JG@KCIEAEGSGEEIAIBCFEAIDGDAHFDBbOVCJCHBXCL@BBdQHEDG@CEEAE@EBEHGDMHEBEAEMUO[ECOAUECAAkCCEEAGHE@EAC@EFCDELQBGGWGGIQAM@EBGJGF@FIH@JAJEBEVaCGGECGKKAE@EJS@CGGGQFKAECEECGEKACAEGAI@EJYBIDEVYNSIWEEE@ACAIEC_CQEACECECAGAEBGGSGGAGMCECGAY@IAKG@GGCG@MFE@EGGWIGGCQLGAGIGECKICEEUAEFK@GAMIMAMEe[MGGIIEIKOYCAKBMEABCJ@RBH@DERIPGZ@LPnBDADGHKDSHQDM@CCCEBEBC@GKMEK@]EQECOIACAEAAWAEDG@APHBFLAFKHIDGFG@G@C@KRCJADG@UEAEM@EA]OGEeCCDCRCFGFGDMDKHEBMACFiJKDICCCCCAGOMCEC@GE@CECAEC@EE@EAIGACEIGGAIBKEIACBQC@UDO@IEGQMSMMGAI@YDGAAALMCE@KEGGCI@ECG_AQAFEBKBMAOD@HC@GBIFGHSHOHFPHFBLHLAFBH@VBRDFHDJBHDHAHAHBJDZXPHBDGR@JDDHFNBJJ@FIV@RDFPNDHEZ@RDDBRFJBTHLIX@FDBFCLHR@LCHEN@HIHCRJHFHDLPJFABBDFN@DJDVNHZFHFBDABABIDAD@HLBNALCFQREF@DFXE^BFJXBJ@JEHQNKRCNATKT@HFJRVHT@NEV@VHDBFH@@DD@DFD@@DCDAHDFFA@BABEDHBDHJDADBD@FEDFDGFBBJABJCFF\\ALDHEXJDrdbBDBNQTAF@NDDLAF@FFJRD@@DCDIHGTONLBHFDBBAAEBCLEJKPERCNBFHd@`IPDHDDJFDBBAFEDHDJAFBHFDLCNA^CBMCEBAHFNFBNBPLP@DB@FFJHBDDAHHFBDAFGFBNDDFDDHDDB@HEDLEH@BHDDFBFCJEHHL@HHHHAPADBHHDBDGJGXIHA@EBCN@HEP@JCBBHLDCBEJKPAXWF@VHVLN@NIPIBB@BIVANAL@JE@DH@JADCBABALHPFDDALVJTHJAHHRJB@HFPBVEJDDL@HE@GAABABIDEH@JEJBFGBUCEECAMEIDOFKHA^LFADCBM@IGKEABMESTCJ@TD@EDELMFA`EXYHEF@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111111, 30422]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));