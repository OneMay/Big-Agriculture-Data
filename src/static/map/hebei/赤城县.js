(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('赤城县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130732","properties":{"name":"赤城县","cp":[115.831498,40.912921],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AAEACA@@CBABA@@ACAAA@AB@@ABABA@A@C@@@@C@@@ACCAAAAA@ACC@CA@ACAA@A@A@AAAAAC@C@@@ABABC@@BAB@@ABE@@@@@ABAB@B@DAB@@@B@B@@ABAB@@@BABAD@@DNBBDHDJ@@@HBHBLBNATCHGDABA@EDO@K@KAIGIIEICIAACCGAA@C@GB@@@@@B@@@@ADAB@@BB@D@@@B@@AFCDA@@AA@@A@@A@A@@@@A@@@@A@A@@@A@@@CBA@A@E@@BA@A@A@@@ABA@@@CB@@CBCBA@A@ABCAAB@AA@@A@@@AA@@A@ABA@@@A@ABAA@@A@@@A@@AA@AAA@A@AAAGAGAGBGDEDGDG@IAEAKEG@E@CDCBODQBMBQDODG@G@A@@@@BA@AB@@@@A@@@A@A@A@A@A@A@@@@@A@@BA@@@@@@AA@@@@@A@A@A@A@@@@@@@A@@B@@@@A@@BA@@@@@A@@@A@@DA@A@ABABAB@@@BDD@B@D@B@B@BAD@@AB@BABAB@BA@A@IDEDABCBAB@B@@D@BB@@BDBDBBBB@B@@@@AD@@@BBDBD@BB@BBBB@@@B@BBD@DBD@@B@@@LHDBBB@B@@CH@B@B@@@@BBFBBBB@B@F@BB@@@@@B@BAB@D@@ABAB@@@B@BCB@@@@BBBBB@@B@@@@DBBBB@@B@@A@A@A@@B@@@B@B@B@@BB@@B@@B@@@B@B@@A@@@A@AAA@A@@B@@A@@D@@EDCDCBABAB@@CBA@A@@@A@E@@@CBA@A@CBBB@B@@@BAB@B@B@B@@BBBBB@@B@@AB@@@@ABE@@BABA@@@A@ABABABBB@B@B@@@BAB@@@BB@BB@B@@@B@B@@B@@D@BBB@BAD@@B@DF@B@@BB@F@BAD@B@@@BCB@BABA@ABA@CBABAB@@G@C@ABCB@BC@@@CBA@@BC@A@C@@@EDCBA@CD@BA@@D@BA@CBCBCBABABC@A@@BA@@B@F@D@@@B@@BB@BBD@@HDB@@@BBAB@BBD@@BBDF@BBFBDBB@B@@@BCBA@ADCFAB@@A@A@A@CAG@A@C@CAIB@H@FFP@H@DDJ@HDFDHDH@BBX@LBDBHDFFL@BDDBBHJJFLFHFJFDBDBJDHFLJFDFDDBBD@@B@B@@B@@BB@BD@B@BB@@@B@@@BB@@B@B@B@@AB@BBB@D@B@@BB@FBB@@DB@@@B@@@BADCH@@CDAB@BAD@@D@@BB@@@@DBB@BBB@@B@@@B@@BBBB@B@BBA@@@ABAB@@@BA@A@E@@@@@@BBD@B@@BB@@@BAB@BA@@@E@A@AB@@AB@@A@A@ABCDGF@@ABA@A@AAA@C@CAAAAAA@AAA@A@A@AFAFAR@FBDDFBH@DDH@FBDDDBFBF@F@JBH@HAHBFBFBDBDBH@DDFA@FFJPBD@DBH@DAHABABIHABED@PBD@FFHDJDHFHFFDJHPJPFJFFBH@F@FCHAFGFCBEDAH@F@LAFAFGNADIPCFCDCHEFAF@HBFBDDHFFFHHFDB@@BB@BBB@BDBB@B@BBBBBBF@D@DBD@DBF@FBL@DBDBTBJBD@@BB@JBF@@BB@B@@BB@@B@@@F@@@BB@B@FBBDB@@@DB@@@B@DB@B@DBBBBDHPJNHFFHFHHHRNHDDBHDJDHBFBFBJBLBF@H@NFLFDBDDBDBBBFBDDLDFDJDDFDFFPLJEHBLBDFAFF@@B@@DB@BB@@DB@BBB@FAB@BBB@BAB@B@D@@@DAH@DCB@B@FBB@BABC@AB@@ABABCB@@ABA@@BADAFAB@FA@@@@@A@CBA@ABCBABABAB@B@B@JEBABC@A@AB@@ABABABAB@@@B@B@DADADBBAB@@ADABA@@BE@C@AB@@A@A@C@@BADCB@@A@A@@AC@A@C@AB@DABA@@@A@AD@BA@@@AFE@@@ABABAHA@C@A@A@ABC@@DE@@@C@A@ABABC@@BAHCB@BAD@@@D@@@FF@BD@DB@@F@D@DAFAB@D@D@HCB@D@D@BADADAB@@@B@@AAABABA@CD@DAFCBA@ABAFAFAAC@C@ABABCBA@A@@BA@@BAAABC@A@@DAD@B@@@BA@ADA@ABCBCBA@@BB@@J@@BF@@@B@F@FAB@@@B@BBBBHFB@@@@D@@BB@@B@D@FAFAB@B@B@@@L@D@DA@@@@BAB@B@D@B@@@BBBBB@@BBD@BBB@BB@BB@@@@@B@B@BA@ABADC@@@@@@B@@ABA@A@ADCB@BAB@BA@P@BB@B@D@F@DBB@BB@@BB@@D@BBBDB@@BB@BBB@B@@@D@@AB@B@B@@BB@@BB@@AB@BAJ@@BBBBBB@B@D@D@B@BBDBBN@@@@@BA@@B@F@B@DB@@B@@@@A@ADA@ADAB@B@B@B@B@B@@@@B@D@@@BDBFFB@@BBBFDB@@BB@BBDDFDFFDF@@BD@@@@AF@BAD@@@D@B@BB@DDDB@B@BBBBB@BBB@B@B@@@D@BABA@@@BDBB@DBB@BBBDD@B@BB@BDBB@B@D@BA@@@AB@B@@AB@BA@@BB@BBBDB@B@BBDBBBB@@B@@BBBDBB@@HBB@BABDBBRCL@NANCJELKLAJ@NANAN@`BPALGPEJEBABAB@B@@@BA@@B@@@B@@A@@BAB@@AB@B@BAB@@@B@@@BA@@BA@ABADA@@BA@ABAB@@AB@@@@A@@@C@C@@@AB@@@BAB@F@B@B@@@B@@@BABADABA@@BA@@@A@@@@BA@A@@@@@AB@B@BA@@@@@@B@@AA@@A@A@@BA@A@@BA@@B@@@B@B@BAD@B@BAB@@@B@@@@@@@@@@@@@@AA@AAA@@@@AA@@A@@@A@AA@@A@AA@@A@@@@@A@@@A@@BA@@@@@A@A@@BA@@@A@@@@@A@@A@@AA@A@@AA@AA@@CA@@A@A@@@A@@A@@AA@@@C@A@A@@@A@A@@@AA@AAA@A@A@AAAGBK@IFIBIDG@IFKDGNUFKROHGHGDEFEBA@MEEKOECEI@C@KDGHEHEH@F@JAFG@EAEBMCMGICEIKDEBEDGPMJCHAHEHCBAB@B@BA@@BAD@@A@@B@@AA@@A@A@AB@@CB@BAD@BA@@BA@AB@@AB@B@@@@A@@@A@A@@@A@@@A@AAA@@@A@@@A@@@AB@@@BAB@BADC@@BA@@@C@A@@@@BA@@BAB@B@BAB@B@@ABA@@BA@A@@@A@@@@@@BABA@AB@@A@@@@@@A@@@AAA@A@@@A@@@AAA@@AA@@@A@AA@@A@AA@@A@@@AA@AA@@@AAAAACAA@@AA@@A@@AA@@A@@@A@AA@@@@AA@@A@@A@@@A@@@A@AAA@A@@@@@@@AAAC@A@@@@@@@@@A@@@@BCBA@@@A@@@A@@@@B@@A@@B@B@@@B@B@@@@A@@BA@@BA@A@@@@@@@A@@@A@A@@@@@A@@@@@A@@@@@@@AB@@A@@@@DAHGFCDGBEBMAIDCFEFCHCNAT@T@J@DAD@DEBADC@GDKBIJIFCNKFELI@A@@@@@A@AA@A@@@AA@@AEAAA@A@A@A@CBA@EAAA@@AA@@AAA@C@CA@ACCAA@AAC@AAAA@CC@@@A@@@A@C@C@@BC@A@CAE@A@@@CFCDAB@DC@@@A@A@@DA@A@@@ABAB@B@BA@A@@BAB@BAB@@AB@BADCD@BAD@@A@AB@@@DA@@DC@A@CB@@AFEDAB@DA@@BABABC@AF@@ABA@AB@D@DAB@B@BAB@@@@A@A@A@@BEBABAB@B@@@DCDCB@@ABA@@BA@A@@BC@@@ABABCB@@CBE@A@A@@BADCB@FAB@BA@@BA@ADABABADA@@F@B@FAD@BABBB@BAD@@@BA@@@G@@@@DA@@BA@A@CAA@@@ABABAB@FABABADABA@@BA@@AA@A@@DA@@F@B@@@B@@ABA@@B@@A@E@A@@@ADA@A@A@@@C@CAA@@BABC@AB@BA@A@ABAB@AC@AA@AAAAA@@@EAA@AAAAAA@@A@A@ABC@EBABA@A@C@A@AAAAA@A@CBE@A@EAE@ABA@@@ABC@A@C@A@@B@@@DAB@B@@AB@D@B@@ABA@EBA@AB@@AAAAA@A@A@A@@BCAA@AACBA@C@@@ACA@A@ECA@C@@@A@AA@@@AC@AAG@G@A@@@CAA@CBA@@@A@EBAAAAA@GAA@A@@@ABEBA@CBA@A@C@@AA@@BA@E@C@A@@@C@ABA@A@AAA@GAA@@BA@A@@AA@@@A@@@A@A@@AA@A@AA@AA@AC@@CCAA@A@ABA@@@C@@@ABABA@A@C@AAAA@ABA@@BABABA@ABE@A@A@CDA@AB@@AB@@@BABA@AD@@A@A@@@AA@@A@@@A@CBA@A@AAA@CA@AABABA@A@@@@B@@@B@B@@ABABAB@BA@@B@B@D@@@B@@@B@@@B@@CBA@ABAB@BA@@B@B@@@@C@@@A@@@@@@B@BA@@BC@@B@B@@@@A@A@A@@BABA@@@ABC@EB@@@@AAACAAA@C@AAACA@GC@@B@@A@C@E@CA@@AAACAAABCA@@A@@@A@A@A@@AC@AFABA@A@@@@CAECA@AAA@CAAA@@AA@CA@AA@E@A@A@@@AAAA@AAAAC@AAABCBCCC@A@A@@@@A@A@@@A@@@AB@@A@A@A@@CAAA@A@@CAAACA@@EA@@AA@@A@A@@AAC@AAAECAA@@AA@@@A@@BA@@@@AAGA@@@@@A@A@@AA@@CC@@@A@AAA@AAA@A@AAAAA@@CA@AAA@@@@DC@C@E@@@CAAAA@A@A@@@AACA@@@AA@A@@AAB@@@AC@EACACAC@@@E@@@AA@A@A@@@C@@@@@IBA@A@A@@@A@EBCBA@A@@BA@@@C@A@CBA@@@@@A@A@AA@@@AA@AAB@@A@@@@@@A@@AAACECCA@@AACA@A@@@A@CA@@CCA@@AC@AAC@@@AA@AA@BA@A@CBC@ABABABADABCB@BA@ABABAAA@@@@CAA@CAC@C@A@A@C@C@A@C@A@A@A@@BA@@B@B@@@@A@@@A@CACAC@A@CAAA@@ACA@AAC@ECAAC@AA@@A@@A@@AA@@@@@A@AAA@A@CA@@AEAA@E@A@C@@@A@@AA@AAAAA@C@IAA@AAA@@AC@@@ACA@@@A@AAC@EAA@A@ABA@@AA@AA@@AA@@AA@BA@@@@BA@BBBB@@@B@@@D@B@@@BA@@B@@A@@@@A@@AA@@A@@D@@@@A@@A@AA@@@@@A@AAEEA@@@CA@@@@AAB@BA@AA@AA@AAAA@ACAA@@AA@@@A@@A@A@AA@AA@AA@A@@@A@AA@CBE@@@C@A@@A@@@A@A@@@AAAA@@@ABA@A@AA@@E@A@C@AAA@A@AB@BAF@BA@AB@B@BA@AB@BAB@B@D@B@BAB@B@BCD@B@@@B@@A@@@CAC@A@A@@BDB@B@@BBAB@@@@EBAB@@A@C@@@A@@@EBABC@C@@@A@AAA@@@EDA@A@ABC@A@C@@@CB@@ABA@A@C@A@CAA@@@ABA@A@@@@@ABA@ABABC@ABC@KA@@A@ABAAAA@@@A@AA@AAA@CCAAAA@@AAA@CAAAA@@A@A@@AAAAAA@@@AAA@AAACAAA@@ABC@A@@AA@@@G@ABA@AA@@A@A@EBA@@@AEA@AAA@EAE@A@@@AAA@C@GBEDCCA@GAA@CAIA@@C@CA@@ACAA@A@A@CAA@AAE@AA@@A@A@C@@CE@@@@@ABC@@@CAC@AAA@@C@ECA@C@A@EBA@CB@@EAC@A@A@EF@@A@C@C@CAEAAAECAACACAAA@CAAAA@@C@@@C@ACAAAAA@@AA@@C"],"encodeOffsets":[[118544,41515]]}}],"UTF8Encoding":true});}));