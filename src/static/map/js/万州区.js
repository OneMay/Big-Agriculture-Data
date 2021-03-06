(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('万州区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500101",
            "properties": { "name": "万州区", "cp": [108.380246, 30.807807], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@NFPGFIJEHIHMJGBKLQD@D@BB@LFBHADHDDD@RJLBDJDAJEDGD@NHB@DGACBAFAHAHC@CEGO@AAHSBM@IBCJCFEDGAM@CDAJ@VHBHAFDBDABGHIHBHAZ@LFDGH@DCBAN@HEJALJRJFLJFLJLJHBN@DBBDGHADHVDH@DEDDDJHTJ@ACKDENKHEH@FHLJJBhVHFHJVL`LTLRDJLTFBCD@@FEHGDMFM`ERNAJCJ@FFLDPJXRJNNLHF\\FBBX@NBJFD@JGLBFCDE@ECEAGDGBWBAHAFHDBN@XFFDHEJANDDD@FEJ@DDFFFJ@LC\\JJBFABA@CKEAC@CBG@ACEOC@EHIBGNKDABIDKDEJG@ECGJSDMDEJAV@XFNDPLZ^BBF@LGBC@KHEJKII@CDCEGBWCKFWBAD@PJBDCDHHZDBDDADEHUAILEBCHMDQJAFENGBCCKFCRQDG@EACFIBAFBVFBHD@DCACZ@BALKBGCKFUNGACKGACFQDCBIDKBKDGJID@HDH@DADEAGKIFIDA@AGM@CFANBbBFACGDEYUBKCGDCDAHB^JfJFABAJYHADBBABBBBD@PDD@BDH@BFLA@DFBB@DBBAHBDDDADDABBBJBB@@EBKB@DBBBDEF@FCHMBYBABAAKAABQEE@EGAAADGOC@EKAAGCBEEBEACI@DEGGrgNENKDC_]AQGG[cKK[MCCBECGMMMIYGFCNELKLGBcSE@KDKAGCCIIEIB[PGHBHDDADMHKDADAHBDFD@DCDAFKBADEBGFBHAF@HCFFHIRCNBHEJGBE@]BM@OEQIGECEHYDGHG@ICCDKAGEACEAAUEGIGBGE@CHAEIUGK@BILA@A@C[QGBG@BMM@EC@ECEGAIGCKEAA@CDBHCFIJE@CDABB@JBADSBGFOAFCDCAACBKJAAACAACFMJIJKFM@SCECEIGGGCKCE@KBGFGCBLCDCACAIEE@CA@GAAENABICGBACBEEBCHAB@HFNFHDHA@QGGGEAAHBHALC@IAGDAFAHDFFFLDBF@PADCDEBIIEICCIAMDIEmIMM[KMGSAS_a@GAGIEGMOMEOCAE@WLG@CAW_CCELGTCFGBWBABAHCDSLFLLLTXCFIJEHAJBZAFojU^EFSFGCIKCBCFAHIH@DLV@JEDE@WKA@@TEHKbIDMGK@EFAFENL@BB@JBDAFMFKACHIAGI@KAGDE@ACAE@GDC@ICC@CD@HABOFIAIEEGMEMBQFKCGHEL@HDBHB@FGLIJOvAJPDBJBPDFZTHBTENBR@THDJ@DCFFF@BEDBDGJBD@JED@FHHDLLLYPKDUAS@EE_OOCSAOBeJqFCDOPEJSREHE@IJCFMJOFCDIL@HDH@DGDGRSZGJOLRNFHFNJHdXf^TH\\RBFAJ@DPJ^PLJFBLBDD@H"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110587, 31651]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));