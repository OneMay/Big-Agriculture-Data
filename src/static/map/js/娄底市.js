(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('娄底市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "431302",
            "properties": { "name": "娄星区", "cp": [112.001914, 27.729863], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@AA@C@AAC@ABCBCBA@@AAA@AA@@DABAD@BAB@@CAAB@BA@ABA@A@@@@BA@A@@AA@@@C@A@A@CAA@A@@@@@@B@@@@AD@@@BA@AB@@AD@@ABA@GCCAA@AB@@CB@B@@AB@B@B@@@F@F@@ABABIAA@@@ADCN@B@DDB@@FDDF@DBDAHABADCB@@ABOLC@@@A@GACBA@ADAB@BBD@@@DFL@J@F@@@BBBDDHDBBBB@BBHAFCBUBA@IDA@C@IHMFE@G@C@CAIEOKCACAC@CFB@FJFHPNFF@DBF@D@BCNADABEHA@GJAFBB@@BD@@B@@@H@J@F@BF@D@JEH@F@@@@@DBFFJBD@BLLB@B@D@BCBAB@D@BD@NAJAHEFDD@BFDBBHBB@FBD@DCNG@@JIDAB@DBD@@@B@PD@BFBFHADADMFGDCDAHHDB@NFBBHDFHBB@B@DADEBABMCAB@@CHCF@D@B@@DB@@DB@D@BED@@A@E@K@G@CBCE@@A@@AC@E@GBMBABA@@@CD@FBDBBFDBDFL@@DDDB@F@F@@@LDNDHDJBDFNBJB@@@@B@@@BAJAF@B@DER@@@BAHGP@FBB@BHDDFBJ@FD@HCLC@@@@DBB@DBBB@@@ABABABADAD@BADABCBABCB@BAD@DAB@DABCBCBC@AB@BEBABC@E@C@@BGBEBEBC@ADEBCBC@C@C@C@@BC@ABA@A@EBA@ABABC@CBCDI@@DGDEBCBCBEBC@C@A@A@@AAAABC@K@A@IDM@@FIFEDCDCD@FBBF@BBLBHFDFCBIBG@C@GFM@ABEBEBIJEBAB@@@FAFEB@FEHCF@FBD@DBHFFDHFB@H@HC@@FCDEDGBEDQBACECGGI@ACSBC@AB@NAFAFAB@DGBADCPCJK@@@ACAGCK@GCA@CCAAAKASAE@CAAA@AACB@BABAB@D@DBB@B@B@D@FABCDC@E@C@E@CACA@A@C@AACA@AAAC@C@@DAD@FAFABA@CGAE@C@A@@BADEBEBG@G@ACKCC@CAGAAAAAKKAC@A@ABAH@BA@@@AAE@@@A@ADABAB@@A@@@AEA@ACAAC@C@E@@BC@A@A@@AA@A@@@AB@@@B@@@@H@BB@@@B@BC@A@@B@@@D@B@@BBB@B@BB@B@@ABAB@B@B@@@@G@C@A@@BAB@FBB@B@BA@A@A@CACCEAE@A@AB@B@D@BABABABABABA@ABA@A@CAAA@A@CA@A@ABAAAA@A@ABACABE@CBC@AD@BADC@@ABA@AAA@@CDA@@@BCA@@@A@@B@@A@ECA@A@A@A@AAA@@C@ADA@A@@A@AA@@@ABABA@AD@B@BBBA@ABAAC@AA@@@C@C@C@I@E@AAAA@@@EFE@@@@BA@@@AAA@AB@D@B@@C@AAAAA@A@ECA@A@ABCAAAAAAA@@A@AA@@@C@A@AA@ACCA@@@@DABA@ADA@AB@@A@ABABA@"],
                "encodeOffsets": [
                    [114706, 28262]
                ]
            }
        }, {
            "type": "Feature",
            "id": "431382",
            "properties": { "name": "涟源市", "cp": [111.664329, 27.692577], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@AABEHIB@FGBABCDM@A@CAE@CEEOMEGEIA@DED@DBDBPLJFDBD@H@F@NEJGD@B@JCB@VADABEAG@AAAAAGCCCAA@A@@@E@IEK@C@@AC@ABABCB@DAHBB@@@D@PKBA@@DABCBABGAC@CCEEC@@CA@C@ADMBC@@B@JBBABA@@@E@E@@@A@ABA@@@ADA@@BAB@DBHDB@BA@@BC@@BAB@@A@@BC@@@@@A@@@@B@B@DBB@B@BAB@@ABADC@@BCFE@@@A@@@@B@@A@@@@@A@A@A@@@A@A@A@@@AAB@@A@@A@@BA@@@@BA@A@BB@B@@AB@@ABABAJEFC@@@AA@AAAB@@AB@@AABA@A@AAC@AAA@@@@@AA@ABA@C@AB@@@B@B@@CA@@A@@ACEA@C@A@@@@AA@BC@A@@@@@AAAA@DKHK@@@@BCFKLI@@RBF@DBPDLCBADQ@A@CGIECA@@@@@@@AAECKC@@CAMBA@G@@@CBQFEAEAGCYIA@O@@@UK@@CGCECC@@EGIE@@MGECIEKEGAA@MAGCKGE@@@@AQCIEEA@@CAGK@IKDEFEH@BEDC@A@C@EAAA@@C@CACGCECGACGAABC@GBABGDEDEFCJAJ@@@B@B@JEFIBCCCEECG@AB@@@@AB@@@DAJADAL@HDLEBA@MAQBM@MCUBCFEJGLAFCJEDE@CAEAE@E@CDEFGFCBEDEDIFABA@@@@B@@A@A@AAAABO@CAACB@BAFAB@BA@ABCBEFCFCDCBA@A@CAA@CKCCCEAAEIIKAAA@ABAD@@ABA@CBA@AB@B@B@BA@@@@BA@BF@DADCD@D@@AB@@ADBBB@B@DC@@B@D@@@B@DCBA@@@@BB@@@@BB@@@BBD@D@@AB@@@@EB@@CDABABA@C@@B@@@BBBBB@B@B@BAB@@EB@@@@@D@DABCBA@AA@@@ABE@AA@EACAA@C@AB@@ADBBDDBB@BBBF@@@D@@@HJBDDH@B@@AB@@CAAAC@A@AB@BBBH@B@@B@BCLAB@@ABAA@@@@BG@AAACAC@@@BB@B@BA@C@AAA@@@@A@C@AA@A@C@OHCBA@C@@A@ALGFCB@@AAAA@AAACCECAA@@BADBD@B@@CBAB@D@BAB@@ABC@A@@@AAAAABA@AB@DAB@BC@A@@BAB@B@BBDBD@B@@@BABAAA@@AABCH@@BFAJ@D@@AFQBC@@@I@ABCFEJ@BBH@BAJA@A@CFC@A@EAA@@@BBBBBBDDBDDBDD@@BBD@B@DBB@@@BB@DBBBBB@@@@@@@BBB@D@DAD@B@@BBB@@@BA@@B@@D@B@BADAD@B@DBFB@@FBBBB@@B@BBD@BB@BBFDDD@@@D@B@@AHAFADCFA@AAA@@@A@@B@B@D@BBB@@@BA@ABAB@@@@DD@@@@B@@@@B@BCJADAD@D@BBBDDFBBB@@B@@B@@@B@DABAB@H@@@BEBCFEHAB@@CBA@C@AACC@@AAC@A@ABABAD@BABAD@@CDCDEH@@@FBHDFBJJPFF@BDDFDHFFDFFDBFD@@BDJLLRHN@@BDJL@@JJBDHFHD@BFBJHLFHJBDDF@H@@CJAFGHABIHA@@@GB@@MBI@AB@@@@@@@@@@AB@@CD@D@@AFAL@H@FAN@B@@@@@@@@@@@@AFCHGBC@A@IHGFEF@LDBHFDDD@B@B@F@B@DBBFB@BF@FBB@BBBLNB@@BNNFDBB@B@BADABCFGHCF@BGDGDSPIHGDIHCFAB@D@BDD@@@@BDFF@B@@BDDDB@D@D@DAB@D@B@D@FBBBBBBBHFBBB@B@B@BABABABCBC@A@AB@D@DA@@@@FADABCBABC@CBALEHCB@@@B@BBJFPNFDBBDB@Q@ABCBAB@B@B@FBFDDBD@BAB@B@DED@@@B@B@HFB@B@B@LQDABAB@@@B@BBFF@BD@D@@@DDBDB@BB@@@@B@@@FBBB@@HR@@FDB@HAD@FB@@B@TJF@FAFC@EAG@GBAFEFAHAHADBBBBB@@@@@B@@AF@RBDBBLBHDDDFDJBFDDHBBFBFALCDAB@@@LHHJBBB@D@B@@@B@D@BBB@B@B@HCBAB@BBB@@ABAD@B@B@D@F@H@B@F@DBF@DADAHC@@DAFACAA@@AAA@A@C@AACACAC@ADABC@@B@HCHCBAAA@C@@AACCAE@AACAAACAA@A@A@CBABABABABADADAB@B@D@DBHB@@FBFDFDDFDDDDBDBBB@DBB@B@DAFAFADADABABA@ADABEBCBABCBEBABC@A@@AACAA@CA@@@@KDGDC@@EAICEGC@AAA@EHOBG@A@@FQ@C@ABEBI@A@@@A@@A@AIEMACCICGCM@K@@@E@ECACC@@EKACECAAAC@EDC@@B@BANAHAF@D@@BB@@@DFDAH@L@F@B@@@FC@A@CCA@@CA@@@A@CDEDG@@BANDBAFABC@C@AAAEGGCAAMEA@GCBGDCHCNEBCBCEGEA@AOCA@@@C@CAA@CBIJ@@MHCDC@EAA@GAAAEC@ACCFEBGBI@MACC@A@ABADC@A@A@KK@AACEIAE@C@@@@@EFG@I@CAEE@I@G@@@A@@@AC"],
                "encodeOffsets": [
                    [114579, 28413]
                ]
            }
        }, {
            "type": "Feature",
            "id": "431381",
            "properties": { "name": "冷水江市", "cp": [111.434984, 27.686251], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@ACEA@@CA@AACCAC@A@@@CA@BED@@A@@AA@@A@A@A@@A@@@ABABA@A@EH@@@B@BB@B@FGB@@@@B@BINABCBCBK@A@GDKFEBIDEJFAHCNBBBHBFH@DAHADBFBFBFBDFJFH@@@@@@@@FHJPBH@BB@BD@BBB@@BFB@AB@B@@BBBBD@@BB@@B@@ABA@ABB@BBB@B@BAB@BBD@B@BCD@LH@@BBADBB@@@BAB@BBBAD@BBBBBBAD@@@@@@B@BDBBB@@AD@BB@BBB@BBABA@@@@B@@B@@BBB@BB@DABA@AAA@A@AB@B@@@@BBBB@D@B@B@HDBBBB@@@BCD@B@D@BDDBD@B@D@DAB@BA@@B@BBF@@BB@@BBHDB@BBBB@@@BA@CBAB@B@BBH@BDBB@DBB@@BA@A@CBC@@@@BA@@@C@ECC@AAEAG@C@C@AACAC@ABAD@@CD@DBBBBJHBDFDBFDD@D@BBB@DBDFDJFBB@D@D@FAF@F@DBDADABE@ABADBBB@HDB@D@D@NCHAB@DAB@B@F@D@F@B@DBF@@BNHBDBD@BAFCH@D@BBDDBFDDF@DFJBBDBFBB@BA@@@ACGAABAB@B@B@DB@@@@BBBBBD@BBBBBB@D@DB@D@BAD@D@B@BBDBF@B@FDDFNBDHJDBDDDAB@D@@@THB@FDDDBDFBDJBD@H@@FHLBD@HCD@DAF@H@F@FCBC@ABEDCD@DBD@H@DADAACAEAA@AA@@C@CDGBCBI@E@EAE@EAIBK@A@A@EDEDCL@JCL@ECCC@AEEIOAICEAG@E@@FGDCDC@@BCBA@ABCBABAB@D@BB@@DDBBD@B@DA@@BAFGDEFA@A@@@GBABA@C@A@@@AA@@@AAEACCAA@A@CBCBCDI@A@A@@A@@@@@CC@@@@BABAB@@A@@AA@A@C@A@AB@@@B@BBB@DEBCBEBG@@@A@C@@CCECAAA@@AAC@A@AA@AAEA@@EACAA@C@CBABA@C@@@@AB@@A@@AA@AA@C@CBC@A@AA@@@@@@A@AAAA@CAA@@A@CAA@C@AA@@CCCAACCCAAAAAAAACAAACK@A@@AAAEAAA@AAAAACCAEAGA@@A@AAA@CAA@AB@DA@A@AA@@DA@AAAA@C@@@ABA@AAAACAQCIA@@ICEAEAGCGCAAEG@C@@CGOC@@G@EF@@CDAFAJGFGDABA@@@CBEAIAKEAA@@A@GEGIMK@@CC@@CAAA@@GOA@ACAEGKAA@@KCCCEC@AAAAAACAAA@EBC@AAA@C@CBAAAA@AFA@CBAAGAC"],
                "encodeOffsets": [
                    [114050, 28194]
                ]
            }
        }, {
            "type": "Feature",
            "id": "431322",
            "properties": { "name": "新化县", "cp": [111.327412, 27.726514], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@C@A@@A@C@A@AAAABABA@@A@@@K@AAAA@@@A@A@@A@AAC@AA@@@CAA@ABGFQHGDABABABBB@DBH@DAD@BCDA@CBC@C@E@A@EBA@C@A@CCA@CACA@@A@ADABA@ABA@E@CBCBABABAD@D@D@BA@@@EEA@EAA@CBABAB@DABAD@BABAB@BBDBBDBBB@B@@AB@@AA@@AA@AA@@BA@A@A@@@AA@A@AAAAAA@AAA@CBAB@B@B@B@BDBB@@B@@ABC@ABABEBAAA@AAAC@@AAC@ABA@A@IFI@MEEAG@GB@FAFEHCDO@IAA@O@IAABGBCBCF@JDL@JAFCPIJABCDABCDSDKAC@C@E@@@EDKBE@EBIEKIECAAKBG@C@EHFJ@BDFCNCNIHA@AB@@GDG@C@E@MCAASAWCM@MBC@ABUBA@SCQCSCK@KBKDCDDF@FCNAJGFIBEAI@E@MDIFAJCJALAPCVENCHCLEJEN@L@BCHCDEBABG@KCIDEFCLAPGPIJMDGFCF@JLPFHJVHTHX@FDRHJJDLBLANGDAHEFCTGP@L@D@L@FCH@FBBADAD@D@B@HFBB@@B@B@D@F@B@B@BBBBB@@CD@B@BBBD@B@BBBDAD@BBLFDD@@BFBBBBB@D@DADAB@@@B@BB@DAD@DBBFBDBD@D@@B@@A@A@AB@@AHBBBBB@BB@BHHDBDBBB@BA@@BB@@BDD@@BBFBD@D@B@DBBBBBBD@BBB@@HBB@BBBBRHFDBD@DBBBB@DBBAB@BCBA@C@CBC@@@CB@B@BBD@@@D@B@D@B@B@DCFAH@BAFBDBDDDDDDDBDFFDBFDBBBD@@FFBDBFDFDDDH@B@BDBDBBD@@@BA@A@G@GAAB@@EBIHA@SHABABABBBBDBBFDBBBDBHBP@DBBB@D@L@DBF@F@J@P@JAB@@@HADADBDBB@DDFDBBD@D@DABCBGDEBCDADAFCBA@ADCD@FADAFEDCBCBCDCBAFIBAB@DADBD@D@BBHH@BD@D@D@F@FDBD@B@BAFCDAD@B@DBH@D@BADAB@@@BB@LFFDDB@@FFBDBD@DBJ@BBBBBB@B@F@BB@B@BCFEJ@D@B@B@@HDFBBBDBBDBDDDBBTVBD@BAD@@@BBBBDBJ@B@D@@FHBDBB@B@@BBDJBH@DB@B@D@FAB@D@BBDDBHBBBBDDHFJFFHNPFHBBAB@D@@ADCB@@BB@@D@B@B@DAB@@AB@FBB@D@D@D@BAB@D@F@B@B@D@@@B@@@DBDDB@B@B@DABA@A@ABA@ABABA@AB@D@D@D@DBLHDBBBD@BBPLBB@@BDBD@@HFVXHHFHDL@D@LBFBFBDFHJHDBXLHFD@@@DAFGDAD@DABADEBABABABE@CBCBADAB@@ABI@AAAAACC@AAA@E@CDAD@D@F@VLDBLAH@D@BAJ@XABABA@ABE@E@K@ABCBAFAHDFBDBLHJF\\VDDLLFDB@B@NCFABABCAECKAEBA@CBAD@B@HDJFLDLDNHLJB@BAB@BEBELKDA@A@AAE@C@E@AAACAA@AC@E@A@C@CAEEG@A@ABCBADABA@C@CAEAACCGGCE@C@C@ABCBA@CAE@E@ABAFGLKBABABAFEBCBCBA@@AI@A@@BCBAD@HBF@BA@@@ACAEEKIIICCACAE@A@CBE@GDO@E@CCCAA@ADEBEFDJD@@D@DABAHEFCDCDCBAD@BADBB@@@@B@@ABADA@BB@FBDAD@DABADEFCBGBCBC@AB@@AB@BBDBDBDBDDBBBD@B@B@BADADE@ABEDGDCBAB@@@BBFFBB@@B@B@@ADAFCFEDC@C@@@AAAAAAAAA@AAC@IBI@ADG@AB@@@D@@BBBFDFFDBB@DBD@DBB@BBDD@@B@B@@@BABCB@@@B@B@@@BABGBG@A@A@@@@CAA@CBC@C@A@AAA@CEEECC@A@@@ABC@A@A@AAAAACGAECE@@A@@@C@C@CDC@CBA@AACAECEEAAAA@@BA@AD@@A@@B@@@BB@@BAB@DADCDADADAFABAB@B@B@LJDDBBB@FDDDB@B@DBDBDBBBB@D@DBDBBDJNFFBDDBFBD@BB@D@B@BADCBC@E@CBADADAB@DBBBDBBB@B@FBDBFDBDBB@@B@BAFKDABAHCDC@@DCDEBAB@JFB@B@HG@@B@BBHBPJHFDBFBH@FABABC@AAA@AA@A@CBEBC@A@AAAA@ABC@ADAD@D@B@DAB@B@@@DFBHADBDBBFFBB@BDHBD@BB@DBBAB@B@FDDBB@@@BAAECU@Q@EBAJCDABCA@GGCACAAAECOMIEAAA@@@A@GDKFAB@DADABADCBEB@@@@CBC@A@@B@BADADABABABA@A@A@AAGEAAAAAAEAC@A@C@A@CBC@C@A@CCAC@@@AEEAC@@@@CC@A@CBADEJGHCJGTOHCHC@ADEHGDEBABC@A@AAAECMM@AA@KMAA@AAA@EAEA@AECAA@E@A@A@C@CCGECA@KFEHEJGB@D@HADGBE@@@@@@@@@@@@@ABM@E@GBKBE@@@CDC@@BA@@@@@@@@@@BAJ@NA@@HA@@B@JGBAHGBEDI@@@GCEACGIKEIGEA@AGCGEACII@@IKAC@@GMKQIKAC@@ECCAEEECGEK@IDK@CDCF@F@B@BALBJ@FBF@F@FAJADCH@D@DB@@BBBBFBDCBCBG@C@CAC@CDAF@BADEDE@G@E@CBC@GDC@KAEG@@@GACCIEAACCCECA@SG@@C@A@CBCCCAGIACEMCC@E@AAEAC@A@A@CBC@A@CCAC@A@AAAA@AACAAAA@@@@CAA@A@A@ABBBDH@B@@ABA@EACAAAEI@CCEECCAAC@A@CDGBE@AACACMG@AE@CAA@E@C@E@A@A@CBA@GBMDC@C@A@GCA@AABCBAF@BABCAC@C@EBE@E@C@CAAIEECAC@CAA@A@CCCAEECACIGAAAA@CDC@@BCBAD@DBBBD@D@H@FBBBD@FDD@@@B@@A@@D@DAB@B@@AA@CAA@CA@AAG@A@ABADAB@@A@@AAAAA@GCAA@@AA@@AE@A@AB@@ABA@C@C@AACCC@A@C@ADC@A@@AAAAGCA@A@C@A@AA@A@@A@A@@B@BBB@BABCBA@@AAA@AA@@@@A@@B@BAAAA@AAA@@ABC@@AACA@A@A@@@@C@ABAAAA@ABCAA@ABA@A@@AABCAA@@KGC@ADA@C@AAA@ABA@A@AAA@BAB@BA@@@AA@@AC@AAAA@@@ABAA@AE@@AA@AACA@@AAGIOEG@@@@@@@@EGEIACAEAEAEBCBG@CEGGAAAMAGDEBADA@EFABQNEFC@@@C@@@CAAACAGEC@ACC@GCAAAC@AACAAEGACAC@AA@A@EDC@A@AAA@CB"],
                "encodeOffsets": [
                    [113930, 28205]
                ]
            }
        }, {
            "type": "Feature",
            "id": "431321",
            "properties": { "name": "双峰县", "cp": [112.175163, 27.457172], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BCDCD@DA@@@A@ACAAACEAACACAC@CBCAGAA@A@C@AAAA@A@CAA@AAAA@A@A@AA@@@@AA@@@ABABA@ABA@@AAAAA@A@A@EDA@C@@B@@A@A@CAA@@@@@@@@B@@A@@@A@@A@A@A@@AA@A@A@A@A@ABA@AB@B@@A@@AAA@E@@BA@@BABAB@@AAAAAACC@@@@AA@@@@AA@@BA@@A@@@A@@DAB@@@@@@AA@A@@A@AB@@@@A@@@AA@A@@@@AA@@@@A@@@@@@@@B@@AA@@@@@@AA@@@@@@@BA@@@@A@@A@@B@@A@@@@@@@@@@@@@@@@AA@@@@A@@@@CBAB@@A@A@AB@@@B@@A@@@A@A@@BA@BB@@ED@@EFAD@BABAP@@@DBF@JAJADAFAJ@H@@@H@DAPAF@B@F@H@@ANABCFIDA@CBKCGACBCBIHA@GJEFAFABCF@@AFAD@@AFC@YBE@KGGDCJ@F@B@@ABCH@DDHFJIHA@QLKNGDA@KDA@CDEDC@GBMFCBGFIFMHIFEBABIHCF@FBDDDFH@HAH@@@@EDIJGHCBKH@BEFEDILGH@BCDA@IH@@AB@JHLDB@@FBJFRD@B@@F@LHHDNBB@HBLFJFFDNH@@JFFH@@DDDFDH@@VL@@P@B@ZJHDFBFBREDA@@H@B@NADB@@LDFDBB@@@@@@B@FDHJ@D@BCRABKDOCCAE@QA@@KJELAD@@@@GLCLB@BB@B@@@@@BADB@@B@@B@D@B@DF@BB@@@DB@@@A@A@@BAD@B@BAB@@B@@@@BB@BBD@B@BABBB@@BA@@BABBB@@B@@EDIFABAB@BA@@BA@A@@A@BAB@@@@AB@@@BB@@@BA@B@@@B@B@B@@@B@B@B@@@@@BA@@@@@@B@@EFAD@@CDAB@BA@ABD@@@B@@BB@B@@A@@B@B@BAB@@ABADB@@BA@ABCBA@CB@@BBB@BB@DADABAD@BBD@B@@BB@BABAB@@@BAB@BCB@BA@C@@B@DD@BBBB@D@@@B@@B@BB@BBBBBBAD@B@BDB@F@BBBBB@B@DA@C@A@@BBB@B@@AB@@@@EF@F@@BBBBF@J@D@D@D@@@B@@BBDAB@BABAAA@C@@BABAB@B@@BBB@@@@BCB@B@DB@BBB@B@B@B@FDB@@@@AB@@@B@AD@@B@DC@@BB@BAB@BD@BC@ABCD@DAF@BABDBAB@B@BBAB@B@BDBB@B@BBNCB@HCB@B@@@BB@@FFDDDD@@@@FDDDD@BAB@BADBBBB@B@@@BKBCDAD@D@D@BBB@DDBBBBDDB@DF@@BBBB@BABAD@BDB@BBDBBD@@@D@D@BAB@BCDE@@BC@C@ABC@ABABADADAD@BB@BBD@D@DBBBBDBBBBAFEFADAB@BA@AAC@@BAB@DBP@DBD@DB@@DBF@D@B@HCD@@@@B@BAB@D@DDN@B@BAB@B@@BBHDFD@@BBBB@@@@DKB@B@B@BBJHFHBB@H@D@BBBDBB@B@DAB@@@BBBD@@@D@FDH@DBL@B@B@BB@D@B@B@BABCDCHAFAHB@@DA@@FEL@B@BBH@BBHBLDFAD@BAFCJGFGDEFCHEFKDIAICE@AEC@I@G@CAEEAAAI@GAA@G@OAICCC@A@GB@BIFCFEBAPMLE@@HCLGLEJCFCBADADIAMBCBEBIAKAKCKAAEGAEEEKOAA@@@A@CCE@AAAGAAACE@AAC@@@ABC@A@ACC@@@C@A@AAA@A@E@C@C@AAAAA@C@A@@B@B@@@B@BCBC@C@C@A@A@AD@DAB@B@B@B@DBHFBBB@B@BAFAB@@AA@AAA@AA@A@@BA@AB@B@BBBBHHBB@@B@B@DCB@B@@@B@DFBBB@@@B@BA@@BGBG@A@@B@FBB@BA@@B@@@@@BD@@B@@@@@BC@@@AAA@A@@BAB@DC@@B@B@D@@AB@B@D@@BB@@BBBBBBBBBB@@@@@D@D@FBBDBB@@B@D@F@DBDBBB@B@D@BABA@@B@DBBBBB@D@F@B@BBBB@B@BABABAB@B@@B@BB@B@@@B@BF@BB@DBB@BBBADAB@@@BB@D@D@DBFBDB@@F@B@LCDAB@DCBA@ADIBCDC@AA@A@AD@BA@AA@@AE@C@ABCBA@@@A@AA@AAAA@@A@AAB@@ABAH@B@@ABABABBD@B@BABCBAD@DBDBHBB@@@BC@@HCFM@AHKBKBKBEFGHEBAFCD@JADALCJEHE@@HC@ABABCDABABADADAFCBABA@ABA@C@C@ACAAAC@E@A@EACAA@A@AAAA@C@@BCDABCDCBA@A@CA@A@CBA@A@A@A@A@@@@@BC@ACAA@A@AA@@CAA@ABADA@A@AA@A@ABABCBA@@BBBABE@A@AAAA@@A@@@@BAB@@@BA@@@A@A@ABEBA@A@@@AAAAAC@C@EAAAA@AA@@A@@@@A@CBA@A@C@A@AAA@AAAA@A@A@AB@BA@@BAA@@A@@FABA@A@@@@B@@@BA@C@A@AB@BAD@BA@@@A@@A@AA@AAAA@AAA@@AA@A@A@C@@AA@ACCA@@C@@AAA@@@CBA@@@A@@@A@@A@ADE@A@AAAAA@@AB@BABA@CAGCICAAC@A@ABCNABABCBE@A@C@EBABCBE@IFA@ABC@AAE@GAG@EAG@I@A@CAA@MA@@EAC@@B@BDFBF@DAB@@CBE@C@AAA@AABA@AAAA@C@EDCBC@G@G@E@GFABC@ABCAC@CCEEAACBGBCBC@A@CAAA@CBA@AAAAAC@CBC@CAAC@AAAAAAACCAC@ACACCCCCCACAA@A@@BABCBABCBC@CAC@ACCCAAAAAAE@CBABAA@AAA@E@E@A@AACAAA@C@AAAA@A@KHCBABAAACAA@CFC@CAG@A@ACAA@C@CAAAAAECICAAACBA@C@A@ACC@ABA@A@CAAAAAAAA@A@EAAAAAAA@CACAABCDABCBCBA@AB@BAD@B@H@@B@B@B@@B@@CBEBA@AD@BABABA@AB@B@B@BBDBB@DABAFABC@CAC@C@CBABABAB@BBDDB@BABCDAB@B@D@BA@AAGCC@A@ABADADADCDCDMFEBCBCACAAA@CBC@CAACCAACCAC@C@@B@D@DDDBB@@ABAACAACAAAA@A@AA@A@@@CDCDGBCBCDA@ABCBKAC@AA@AAAAACACCACACAAAAC@A@G@CBEDC"],
                "encodeOffsets": [
                    [114845, 27907]
                ]
            }
        }],
        "UTF8Encoding": true
    });
}));