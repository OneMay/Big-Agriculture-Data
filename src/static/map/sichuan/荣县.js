(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('荣县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510321","properties":{"name":"荣县","cp":[104.417493,29.445479],"childNum":6},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@"],["@@A@@B@@B@@A"],["@@AB@@@@B@@@@@@A"],["@@@B@B@@D@D@B@BBBBB@@BBD@@BBBBBB@B@B@D@@@BBB@BBB@@@B@B@@@@A@C@A@@@@B@@@@FBBBBB@@DB@@@B@@@@@B@@@@@@@@@@@@A@BB@@@@@@B@@@@B@@A@@BAA@@AA@@@@ABC@AD@B@B@@AB@B@BFD@@@BA@C@C@AAA@AAAAAAAAA@A@A@@B@B@BBD@@DBBDDBBB@B@BABADABAD@BA@ABA@A@A@A@A@CACAEAA@A@A@@B@D@FBB@BB@B@DB@@FBB@B@@@BABAB@@@FF@BABA@@B@@@@@BBBBB@B@BB@B@BBD@BBHBBBDF@@BBDF@B@@@D@B@B@B@B@B@B@BA@EBAB@B@@@B@B@BBB@DAB@@ADAB@@GBEDGBAB@@AD@DADCFABCDABAB@D@@BB@@B@BA@AD@@@BB@D@@@BBBBAB@DC@@B@B@BB@@DDBBB@B@F@B@@BB@DAB@DB@@BB@B@H@@BFBB@BB@@BB@DBDBBBBD@@BB@B@@@BADAB@BAB@B@BBB@BBB@B@F@@BBD@@BB@B@B@BA@@DIBAB@BA@BB@BBB@LCB@BA@A@IBA@AB@@@FAB@FC@@FAFAB@BB@DB@@BB@B@D@FAF@F@D@BBDBB@B@F@B@BABB@@@BAD@BB@NB@@BB@BA@CB@@AB@D@D@D@@@BABCACAA@A@AB@@@BAD@@@B@BB@D@DAF@F@@@@A@AB@@AB@B@B@FBDBD@B@B@DABABAB@D@@@B@FCBA@@DAB@@ABA@CBIA@@A@ADC@ABA@@@@A@@@E@A@C@C@A@@A@ABABA@@DADBFDDBB@B@RG@@BAB@DABAD@D@@@FBFB@@B@BAB@B@@ABAAA@ABC@ABCBE@ABAB@B@B@HAF@B@@AB@BABC@ABABA@@B@DA@AB@@CBABE@ABC@CBCBEBC@@DCDAB@@AB@B@B@B@B@@B@D@BBB@@BBD@@@DBFFB@B@D@B@DB@@DBDDBDBBBBBB@@BBB@B@HBB@DB@BB@@BDD@B@B@@@BABABA@@BBD@@@BABA@@BA@AB@BBH@D@BBB@BB@DFDD@@BBBDDBBBBDB@B@B@B@FAB@D@B@@AB@BCDABADABAB@B@B@HDBBB@BB@@B@BA@A@@@C@AB@B@F@@@DABAB@@ABABC@A@@@@@ABC@AD@B@B@BB@@B@BABAB@B@BB@@@BBAB@@DB@D@BBDBJFB@FBF@H@BBB@BAB@B@B@BEBA@@BAF@B@BAD@FABAB@@A@ABABABC@ABA@CAE@ABA@C@A@AAA@@@@@@CAA@AA@A@CAA@GDG@AA@AAGAA@@A@@@ADCDCDA@AB@@A@E@ABA@@B@BAD@B@F@D@B@@@JIJGHMDGDEFEB@FCDCBABA@CAAAC@@BA@ABABC@GBEBKAA@C@A@A@@BADC@@@A@A@A@@CCAC@@@ABAB@H@B@@@BA@A@@AE@CAAB@@AB@@A@AACCCAA@A@AAE@A@C@AB@@AB@BAF@BABADA@@BA@A@A@@AAA@A@A@ABGFABCB@@A@A@ABABC@IDC@CBE@C@A@E@@A@AA@BCB@@C@CBCBEBCBA@@BADAFAB@BABABCBG@@@@A@A@@@@AA@A@@@@A@@BA@A@@@@AA@@@@@@B@B@@ABA@@BB@AB@A@A@@@@A@@@@B@B@@AB@@AA@@AA@@@@@A@AB@@AA@@A@@@@@A@@@@A@@@@@@A@@A@@B@@@@A@@@ABA@@@@D@@@BA@@B@@C@AB@@B@B@@@@B@@@BB@B@@@@@@BB@AB@B@@@@A@@B@@A@@B@@@@@@@@A@@AAA@@A@@A@@@@@@ADA@@@A@@AB@@@A@@@A@@B@@A@@@@B@@A@@@@@@B@BA@BBB@@@@@BBA@@@@@@@@B@@@BA@@@@@@@@BA@@@@B@@@@@BB@@A@@B@@@@B@@@@@@@B@B@@A@@@@BA@@B@@@BA@@A@@BA@CA@@@@@A@@@AB@@@@@@B@@B@@AA@@A@@B@B@@@D@B@@@@@@@@B@@@@B@@@@A@@@@@A@@@@@@B@@BBA@@CA@@@A@@@@BA@@@@B@B@@@B@@A@@@@B@@AB@@A@@AA@@@@@A@@A@@@A@BAA@@A@@@A@@@A@@@@@@@@AA@@B@@A@@A@@A@@A@CBABA@A@@@@A@@@@B@@@@@@@B@@@AA@AB@@A@AA@BA@@@@D@@A@@@@@AA@@A@@A@AAA@@@@A@A@@A@@ABA@@@A@@@A@@@A@@B@B@@@@@@@@BB@D@B@D@@@@@@A@@@@@@A@@@@A@A@@@@B@B@@@@@@@B@@@@@BBBBD@@@@@B@@A@@@@B@@A@@@@AA@@@@BA@B@AB@BABA@@@@B@@B@@@@@@@AB@@@B@D@@A@@B@@@@@@A@@B@B@BB@@B@BAA@@@BABCBA@@@@@@B@@@@A@@B@AA@@@@@@@AB@@B@A@@@AA@@@@A@A@@@@A@@AA@BA@@A@@@@@A@@BA@@@A@@@@B@@A@@@@@A@@@A@@@@@@BAB@@@AA@@@@BA@@AAABA@@@@A@AA@@@A@@@B@AB@@@AA@@@@@@@A@@A@A@@AAAB@@AC@A@@CBABAB@@@@@@A@@CAA@A@@B@@AB@BA@@@A@@AA@@A@@A@@@A@AB@@@@@@@@@A@@@@A@@@@@@A@@@@@A@@A@@A@@AA@CA@@@A@A@@AC@@AA@@@A@@B@@@BA@A@@A@@AAABA@@@A@@@A@@@@@@@@@@A@@@@@A@A@@@A@@@@AA@AA@@@@@@@A@AA@A@A@A@AA@A@@A@@@@BA@@B@@A@@BAB@D@@@BB@@BA@@BAB@@@AAB@@@BAB@@@B@@A@@@@BAB@BBBB@@@@BA@AB@BABA@A@AA@@AA@@A@@A@@ABAA@@A@@@A@A@@AA@AA@@A@@@A@@BA@A@@@@A@EB@A@@@@@@B@BCBA@A@E@@BAH@DB@@B@@B@AB@@@@@@@A@@A@@@@@A@AA@@A@@@@@@A@AC@AAB@@AA@@@@@B@@A@A@@AAA@@@A@A@@B@@@@@B@@@@A@@@AA@@@@BAAAC@@BA@A@@@C@ACA@A@@AC@@@@@@@CAA@@@@A@@AAA@@@ABA@A@@@@A@A@@@@AA@@@@A@@AA@@AA@AA@A@A@@@AB@@A@@@A@@@A@@@AB@@@A@@@AB@@@@AA@C@ABAB@@A@@@@@@BD@@@B@@BA@@@@BA@A@@AA@@@A@@@@@@A@@A@@@@@@@A@@@A@@@@AA@@@BA@AA@@@@@AB@@A@A@@@@A@@A@@B@BA@@@@BA@AD@@@B@BBB@@B@@@@B@@BB@DBH@D@BA@A@@B@@AAA@@@A@@@@@A@@A@@AA@@@@AB@@@@ABA@@AA@B@AA@@@@@@@B@@@@A@A@@@@A@@AB@@@@@@B@@@@@@BA@AB@@@A@@C@@AA@@@A@@@@@@@@@@AAA@@A@@@@@@@@@A@A@@@AA@@AB@B@@A@@B@@A@A@@@AAA@@@A@@@@AB@@BB@B@@@@A@@A@AA@@B@A@@A@@@@@B@@A@A@C@@A@@@@@A@@A@@BA@@@@CAC@@@AB@@A@@@@A@@AA@@@@AB@AA@@@ACBABA@A@@@@AA@@AAB@@@AA@@AA@AAEEA@@CABA@A@A@@@A@@A@@@AA@ACAB@@@BAB@@AA@@A@@B@@A@@@@@@AA@@@@@AA@@@@BC@@@@@AA@A@@@@A@@@@@@AA@@@@A@@@@A@@@@A@@@@@AABAA@@@@@AB@A@BA@@A@@@AAB@@@@@BA@@AABCBGB@@@@@AA@@@A@A@A@AAAABE@AAAA@O@EBA@AB@DAFCDABC@AAGEC@G@G@I@ECCAA@C@A@A@@@@@A@A@@BAB@@@B@@A@@@@BAAA@AA@@@@A@@BCB@BA@@B@D@BA@@@C@C@A@@@AAAC@AA@@AA@@@@@A@EBABA@A@A@C@A@C@CA@@A@@@@@@@DCBCBC@@@C@C@@CC@@A@A@@AA@AAA@AA@@AAA@A@A@@B@@ABAB@BA@@B@BBB@@BBB@BD@D@@@@AB@BB@@BA@@B@BAB@@ABA@ABA@AA@@AA@A@@A@@AAA@AA@AAA@A@A@@@A@A@ABA@A@A@AB@@ABA@A@A@A@A@@AA@AB@@A@@AAB@@A@C@ABA@@BC@A@AACAEAABA@AB@@@B@DB@BBB@BBB@B@BBBBABABGDEDCDC@A@@@A@@@@@A@@A@@A@A@C@@@@BC@A@A@@@@@C@AA@@A@A@A@ABA@CDAF@@CBA@@@A@@@A@@@A@C@C@@@@@A@A@AA@AAA@A@@@AB@@ABA@@@A@A@A@AA@@A@AAABA@@@A@A@@BA@@@ABA@A@@BA@ABAB@@AB@B@BA@AB@BA@@BAB@@ABA@@BA@AB@@ABA@A@@@A@A@A@EAECECCIGICKAGAICE@AAIDGFA@MR@@A@@BA@AB@@ABA@AB@@AB@BA@ABA@@BA@A@A@ABA@A@A@@BAB@@AB@B@BA@@B@BA@@BAB@B@@AB@BABA@AAA@@AA@@AA@AA@A@@B@B@B@B@B@BEFS@EAAAAA@E@AA@@A@AAA@CEA@@AA@@AA@AA@@AA@A@A@@@A@A@A@A@@@A@AAA@A@@@AAA@A@@@AG@@@CAE@QGIBGDCF@D@F@D@FABAB@BA@@DBB@DBHBD@D@DBB@BBB@@@B@B@BAB@DAJ@PAJ@BCFCD@BEBG@CAECIMACAACACGAACEECEBCFAFBF@BFPBF@JDFFBF@FDFDDDBFDDFBPHDFBFADCBEFKJ@B@BBB@B@BBBDH@DABC@A@E@EAEAC@E@KFC@C@EA@A@AA@A@A@A@AF@B@DAB@@AB@@ABE@A@EACAA@ABA@ABABCDA@@@EBA@@@A@@@CBAB@B@B@J@BBB@@BBDDB@BDBF@@@DABCHAB@@BBB@D@B@DABABABADA@@BAF@DAH@B@DA@ADA@BB@DADBD@B@DBFD@@@@B@B@@A@E@@@@B@@@B@BDDDB@BB@@BBBA@@BA@@@A@AB@BADA@@B@@B@F@D@B@D@BB@ADBD@B@BDBDB@@B@B@@A@A@CBA@@B@@ABCBADA@AAA@A@A@ABA@@DAB@B@B@B@BBBBB@BA@@B@BAB@@B@DBB@@@BABED@BADAFA@ABA@CBCB@B@BBB@BB@B@FABAD@@BB@DBBBB@@B@@@@BB@@@BABA@AB@@A@@@A@A@@BAB@BDDBBB@@@B@@BBB@D@D@BAB@@ABMAA@AA@@CC@AAAEAA@CBC@@@@D@B@BCHAD@BDBFABB@DCBEBABEFAD@DBBBFAB@B@AAAAAA@A@@AA@AAGAAAAA@AGEGAI@A@AACA@AA@ACAA@@AA@@@AA@AA@@A@A@@BAB@@ABGFA@ADAD@@@BFJ@D@D@D@DADAB@D@DBD@DBBB@DB@@BADAB@FC@@B@B@B@@BBD@B@F@B@BCFCBCF@D@B@B@@ADCBA@AA@@CBEB@@C@A@CA@@CACCECCAEAAAAA@AA@@ACAA@@AEAA@EBEB@@ABAB@DAF@B@D@H@@@B@B@B@B@B@BAB@B@D@BAD@B@@BD@@@BA@CBBDBB@@@BB@@B@BA@ABBB@BDBBDFDBBB@BBB@@@B@B@DCB@B@@@B@DBF@B@BABAB@@@BE@@AABA@@@@B@@@@@@BBB@@@@B@B@@A@@AABA@A@@B@@@FAB@BBFBBB@B@B@D@B@B@BBBBB@@B@@AB@B@@@B@@BBBBB@BFDB@@B@@@BFDBBDB@B@BB@BB@@B@F@B@BB@@B@BB@@@B@B@BDD@@@BBD@BBBB@B@B@BABA@@@A@@@C@@@@@@D@@@B@@A@@@A@@AAE@A@@A@A@AB@B@B@@@BBBBB@B@B@BABABABC@CFABADABABA@A@E@@BA@A@A@@@@@A@@@@@@B@@@"],["@@A@@@@B@@B@@@BAA@@@"],["@@@@@@@@@@@@@@B@@@A@"]],"encodeOffsets":[[[106667,30205]],[[106650,30179]],[[106633,30105]],[[106650,30178]],[[107149,29961]],[[107149,29961]]]}}],"UTF8Encoding":true});}));