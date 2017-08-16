(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('涪陵区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500102",
            "properties": { "name": "涪陵区", "cp": [107.394905, 29.703652], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DEJGNQFC@C@CB@NHBBDAFE@CAAAGBCHGB@VHBTJNDDFCBELKBBDBDEH@JCBECELGAEBABAFABCF@DCJDJFJ@FMAG@AGAACAENQNGFADEBBF@DCBEFGAKFKGQNIJKbEUQEKBCAAQGCSKEEEDCNADC@]AE@ABKLGJCJ@HDRPJDBE@]AEAGBaFOFAEAEDEKEAEGGABCHAFKJEBEAUCIGGBKEW@EFELEFI\\ATQFADC@OFGXFHAPIfGF@BAEKEOYiCC@ADABCECDCAGEEGCEEG@AIGCACEGEIIGEI[YCQSMWK[GEBGCAGAIDMCGHCHADEBC@MBCBCACDU@CSEOBGBE@EAY_ECCG@EAE[@MGECCKEG@IIEKIEACJOXI\\GNQPOTa^EJCRG@ICGAACBEOGIIGBCFCACABISECBBFITBTCBEAE@@DBDCFODCHIHOF@FIBGEGCEEKCC@IDUOS@SEG@EACC@GEIYYAOKO@GAEIIc]OKMEE@EAEE@CDA@AMEQCEFGAAAAEQGACFC@CEG@CFCNQH_BAACDSEEM@QFaACBBBJJEDADANBDLTBFABK@GEE@ABDRFBBBCFE@EDIEMDA@CAFCAAC@ADCBEAECA@CBCBEVKFAA@EGEC@KDCECCQE@AFCJABABCAI@AF@@ACEGCKDEAKGAEA@ODC@CCCDDDCBMI@AFIDFFQDKBC@CECWCO@OCSDCBELM@EHI@KFIDABDDADBBBDF@@DFD@BBDCDC@ICE@CD@FABCC@GCAKJEJ@DJBHH@BEAABCJ@HE@@DFDEHC^BDPNDFCX@DDDEFGBMAECABAH@LBHFH@BCBMCCEBIGMCAI@ABDHILUHIFG@OBIAABAFIBEDOBD^FNF^@pDVFT@LPbF^DFH\\@HDJLVBBF@BBELFHBPJTBNJ`FZLCXJN@RPBJHDBFVFJNHBLJHBADBLP@NFdORRD@^RPHPJRHFAH@NJHBFD\\FBD@DLHBFFJ^L@DGDCF@DFJCHBDBBDHL@JFN@HADAL@DDDDJA@BADDBD@BEJ@FBGLDBLKHBBFB@DEBKECAAFCZDHCHADBFD@HDJHBJEH@VNHHFRDBBBADEB@DPBBB@FADCD@D@BHFBJDBFCB@FFTDPRFDLIDID@@DCZPPDFADED@DTVVbX^FDBCBEBBPPDJRPPVFBFBBCFALBHABGHCAE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110051, 30710]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));