(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('金溪县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"361027","properties":{"name":"金溪县","cp":[116.755058,27.918959],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAAAA@C@A@@A@@@A@@@A@@AA@@@@A@@@A@@@@@A@@B@@A@ABA@@@@BA@AAA@@@@@@BA@@@C@A@@AC@C@A@AA@@AA@@A@@@A@AA@@@@@@@AA@@A@@A@C@@BA@AB@@@BBBAB@BA@@@@@C@@@AA@BA@@A@BA@@@CB@B@B@F@BAD@BA@BB@@BBBD@@@@@@@BA@AA@D@@@@DA@BB@@@@@B@AA@@@@BAB@D@D@D@D@DBB@B@BBDDDDBBBB@@@BB@@D@DBD@B@@BJ@BB@@@DBB@B@@@@B@@@@CA@@@@@BAB@B@@@@@BBBA@@@@@@AA@@@@@A@@@@BB@@@@B@@@B@@A@@B@BB@DB@@@@@BBB@@@B@@@B@B@@@@A@@B@B@@AB@BA@@@CAAA@B@@ABA@A@AB@@ABB@@BBBHBBBF@B@BBB@BDBBDFBBBBBBB@@DBB@B@@BF@BAH@DABAFCDADCBADABABA@CBEBEBEBC@CBA@A@ABCBEFAB@@AD@D@B@BAFAB@B@BADAF@DAB@B@BAB@BAB@BBB@@BD@B@BBBDDBD@B@BBF@B@@@DADAD@BADCB@BCDCBCDCBGDCDEBCBGDEDCBCBEBGDA@A@CBABC@@B@@A@ABA@ABCDABAD@B@B@BBD@@@B@DAFADADAB@BCBCFEFCBADCBABABC@A@@BCBCDCB@@ABA@AAC@G@EBC@CAE@E@A@A@A@ABABABA@A@A@C@CAA@A@ABAAC@CCA@AAC@C@@@CAA@G@A@A@KDABA@CF@BCD@B@@EDCBCBCBAB@@@BB@@@BBBB@@@BBB@@@@@B@@BBBB@@B@@@@@DB@A@@B@@@BB@@@@B@@@@BB@@BB@@@BB@@B@@BD@@@@B@@B@AD@@@B@B@@@B@BB@@@B@@@BAB@@@@@B@BD@@DBB@@@@@@BBB@B@@B@@@@@B@BBBBBB@B@@B@BB@B@@@@@@@@B@@ABB@B@@BB@B@@AB@@A@@BB@@BB@@@BB@B@@A@@B@@@@C@@B@B@B@B@B@B@@AB@@@BB@@BAB@D@@@D@@BB@@AD@@@B@B@@@@BD@BB@@B@B@B@BA@@@@BAB@@BB@@@B@@@B@@A@@@@BA@@B@@C@@@A@ABA@@@@B@BAB@@@BA@A@@@@B@@@@B@@B@@@@A@@BB@@@B@B@@@@@@A@ABA@@B@AA@AB@@@@B@B@@BB@@BA@B@@A@@@@@BB@B@@@ABB@@A@@B@@B@@@@@BA@@B@B@BB@@DA@@D@@@@B@@@@@@B@@AB@@@B@@@BB@@B@@BB@@B@@@BAB@@BB@@BB@B@B@@@B@@CB@@@B@B@B@@@@@@A@@@@@A@A@A@@@ADA@AB@BA@@@@@@@@@BA@@@@@@@A@@A@@@AB@@@@A@@BAA@@@@@B@@ABAB@@@B@@@B@B@@BB@@@@B@@@BB@@@@BB@@B@@@@B@@@BBBB@@@@@AB@@@BB@@D@@@@B@B@@B@@BB@B@@@B@@@BBBBDB@@BB@@BA@@@B@B@@@BB@@@@@@BB@@@@BA@@@BB@D@@B@@@@BA@@B@@@B@@BD@@@BAB@@@B@B@@@@@BD@@@@BBB@@@BD@BABB@@@@@B@@BB@@@BBB@B@DD@@B@@@@AB@@@AA@@AA@@BA@@B@@@BBBBBD@FB@@@BB@@@B@BB@BBA@@@@BAB@@BB@@AB@BAB@BBB@@F@@AB@@@@@B@@AA@@@B@@@D@B@BBA@@B@B@AB@@@@@@@@B@B@@BA@A@@BB@@BA@BBBDA@@@@BA@@B@@@@@B@@@B@@B@@B@@A@@BA@@A@@@@AB@B@@A@@@A@@BA@A@@@@@@B@@@@AB@@A@@B@BA@@@@B@@@@AB@@A@@BBB@@BB@@@B@@@@A@A@@@@@@@A@AB@B@@@BABABAD@@@B@@@@AB@@AB@BAB@@CB@@@B@B@@@BAB@@@BA@@@A@@@AAABA@@B@@@@@B@BB@@@@@AB@A@@A@@@ABC@@@BB@@B@@@AB@A@@@B@@@@@BDBB@B@@@B@@@@A@@@@@@@A@@BBB@D@B@@B@@@@B@@@B@@B@@@@@BAA@BA@BB@@@@@@A@@@@B@@@B@@@@@B@@@B@@@@@B@BB@@B@@A@A@AB@@A@@@ABABA@ABA@A@@@@B@B@@@DA@@BA@@@@BAB@B@@@@BBB@@B@B@B@B@@@AB@D@@@BA@B@@B@@B@B@@@@BD@@BB@FBBBBB@B@@D@@BA@@BB@B@B@@A@@B@@B@@B@HDB@@C@AB@@@D@B@B@@@@ABA@ABABA@@@A@A@@@ABA@@@A@A@@@@@C@A@@D@@AB@@AB@BAB@@A@@BA@AB@B@DAB@@AAA@@@@B@@@B@BB@A@@@@@A@@@ABB@@B@B@B@B@@B@@@BBB@B@@@B@@@B@@DB@@BBB@BB@@B@D@@B@B@BBB@B@@@B@@B@B@@B@@B@@@@B@@@B@@@@AB@@AB@@@@@B@@B@BDBB@@AB@B@B@B@@ABCB@@@@@AA@A@CB@@@@@@@B@@@@@@A@@@A@@BAB@@@B@@@@BB@@@@@B@@@@A@@B@@@@AB@@BB@@@B@@@@B@B@BB@@A@CB@@@B@BBB@@@@BB@@A@D@B@B@@@@@@@@@@@@@B@@@@@@@@@AA@A@@BBB@@@@@@A@@@A@@DA@AB@@@B@@AB@B@B@@AB@@@B@B@@B@@@B@@@B@@@B@@D@@@@B@B@@@B@B@@@@BEB@BABAB@@@B@B@@@B@B@@@B@@B@@@@BB@@@BABB@@D@@AB@@@B@@A@@@@@A@@B@B@@@@B@B@@@B@@@B@B@@@B@@@@@B@@BB@@BABB@@@@@@@B@@@@BBBDD@BB@B@@@@BB@@A@@B@@@@BAD@@BB@@@@@@@B@@@B@@@@B@@BB@@@@@B@@@B@@@@BB@@@B@B@@@BB@@BADAB@@@BCB@@@B@@A@@AA@@B@@@BA@A@@B@@AB@@@@@AA@A@@BA@AB@@A@@@@@A@@@AB@@AB@BB@@@A@@BA@@@@B@@@@A@@@@@@BC@@A@@@@A@@@@@@AA@@AA@@@@@A@@@@@A@AA@@ABA@AB@@A@AB@@ABA@A@@B@BABA@AB@D@@@DBFB@@BB@@@@DAB@@@@AB@BA@@@A@@@@@AB@@A@A@@@A@@AAA@@AB@A@A@@@@@@C@@@@@AAA@@@@B@BAB@@B@@A@@@@@@B@@@B@@@@@@BADA@@@A@C@C@@@@@@AA@@DA@AB@BAB@@A@@AA@@A@@@@A@@@@AA@A@@@@A@AAAA@@A@@@AA@@@A@@@C@@@@@A@@@AA@@A@A@A@@B@@@B@B@B@@@@@B@D@B@B@@@@B@@B@F@B@@B@@@@@@@BAB@@@@@@B@DA@@B@BB@BB@BD@B@@DH@B@@B@@@@@@AB@@@DA@@@BB@@B@B@@BB@@FD@@D@@@BA@@@@A@@@@AB@@A@@@@BBBBBB@@@@@A@A@@@AB@BABABA@@B@@@BA@A@A@@@AB@@BB@@A@@B@B@@@DAB@B@D@@@@AB@@A@AB@@@@@@AA@@AB@@@BB@@D@@@BA@@@@BB@@DB@@@@BAB@@@B@@@B@@@@@B@@@B@@B@@BB@@@B@BB@@@DA@@@B@@@@A@@@@@@B@@@@@BB@BBB@@ADBBBB@B@@AB@@@BA@@@A@AB@@A@@BA@D@DA@@B@@A@@BBBBF@B@B@B@D@@HDB@@@BBB@@@BAB@D@BBB@B@@B@@@@@BA@@D@@@B@@@B@BB@@@BBBD@B@B@@@B@D@BA@@@@B@BBB@@@B@@@B@@B@@@BB@@B@@AB@@BB@@@@BA@@@@BB@BF@@BB@@@@@@@AA@B@@@@@@@BB@AB@@B@@@@@@@BA@@B@B@B@@A@A@@@@B@BBB@@@@@BBBB@@@B@@@B@@@@@B@@B@AB@BB@AB@@A@@@@BA@@B@@@@A@@B@@@@@B@B@@@BA@@B@BB@@@@B@B@@@@ABB@ABB@ABB@@B@@@B@@A@@B@@@B@BA@@@ABA@@B@@A@@B@@@@@BA@@@@A@@@@@@A@@AA@@@AB@@A@@@@A@@@@@@@@AD@@@@A@@@A@@A@AB@@@A@@@@B@@@B@@@@A@@@@@@@@@@@@@@C@@@AA@@B@@@B@@@@@B@@ABBB@@@B@@@@@B@@@@@B@B@@@@A@A@@@@B@B@BBBB@@@@BA@@@@BBBBB@BBD@@@@@B@@@@@@@@B@@D@@B@A@@@@B@@ABA@@@@@@BAAA@@D@BB@@@B@@B@@@DA@@@B@@A@AB@@DBAB@@AB@@@BB@@@@BB@@@@BA@@@A@BB@@@B@BBB@B@@@B@@@@ABA@A@@@@BBB@BB@BBD@@@BB@B@@@B@@@BB@@@BB@@@B@@BBB@AB@@AB@@@@@@D@@A@@B@@@BB@@BB@@B@@@BAD@@AB@BAB@@@B@B@@A@@@A@@@A@@@A@@AA@@@A@@BC@A@@@CA@@A@AB@@A@A@A@@BCA@BA@@@A@@@A@@@A@A@@DA@C@@@@BAD@@B@@BBB@@@B@BAB@@@B@BB@@@A@@AAAACAAC@@@E@@B@@@@C@A@A@@BA@AAA@A@A@A@@@@AA@@AB@@AB@@@A@@BA@A@A@@AAC@AAAAA@@@BA@@@@@AB@@@@C@@D@B@B@@B@@@@FB@@B@@@BB@@@@@@BB@@@A@@B@D@@@B@BB@@@BB@@B@B@@AC@@A@@@@A@@A@@B@@@@A@@@@@BD@@@B@BB@B@@BBABA@A@ABA@@B@@@B@B@@BB@JD@@B@@A@@F@@@@@@A@@@@@@BA@A@@J@@C@A@@@@@AAA@C@@@@AA@AB@@AAABABA@A@@BEBA@@BAB@B@B@@@B@@@@@BAAA@AB@@A@@A@@ABA@@@A@A@@@A@A@@@@@@@A@@@A@AD@@@B@@@BABAB@@A@CBABA@@BA@@BAB@D@DABABA@@BA@@@@BA@@@@@AD@@@BA@@B@@@BA@@@@@@@A@@AA@@@A@A@@@@BA@@B@@@BADA@@@A@AB@@@B@DABAB@DAB@BAB@@AFAB@BA@@@A@@BAAA@@BA@AB@@@BBDAD@B@B@@@B@D@@@@@B@B@@ABAB@B@B@@A@@BA@@BA@@B@FB@@B@BC@ABA@@@CBA@A@@@AA@@AA@@AA@@AA@@AEC@A@@AA@AB@@A@A@@@A@@@A@A@@@C@A@@BA@@B@@A@C@@BA@A@A@A@@@C@AAA@A@@A@@@AA@@@AAAA@AA@@AA@BC@@@AB@@A@C@@AC@C@@@@A@@AAAC@@@C@A@AA@B@@AAAA@@@ACAA@@AA@@@C@A@@@AA@@A@@@@@AA@AA@@A@@A@@AA@@CA@@A@@AA@@@A@AA@@@A@A@C@A@A@A@@@ACA@@@AAAAAA@@A@A@@@@@C@@BA@@BA@@BA@A@A@@BA@@@AACA@@AAA@@CAEA@@@@A@A@A@@@@@A@@@A@CA@@AAA@@@@AAA@@@@@@A@@@A@A@@@A@@@@@@@AB@@A@A@C@@BC@A@@@@ABAAA@A@A@@@@BA@A@A@@@A@A@@@@AACCAAA@@@A@CAA@A@@@@@@@@A@@CC@A@@@A@@@A@@AA@@@@A@@AA@@A@AAA@@@@AAAA@@@AAAA@@@@@A@ABABA@@BABA@ABA@@@@@AB@B@@A@A@AB@@ABB@ABA@@BCDAB@@@BA@@@AD@BA@AB@B@BA@@B@BA@A@CAA@A@AAAACA@@@A@@@A@A@@@ABABA@@@@A@AA@@@@@@AA@ACA@A@@AC@@AA@@@AA@A@@A@@A@A@@@A@ABC@ABA@@BABAB@@A@A@A@@@@@AB@@@@@BA@A@@@A@A@@@@C@@AA@@BA@A@@@@AC@@@@@AA@ABA@@@@@@B@@AB@@A@AB@@B@@@@B@@A@A@@BAA@BA@AA@@A@A@A@@@A@@B@@AAAA@@@A@@A@A@@AA@@@A@@B@@@B@@@BA@@@BBABBB@@@B@@@D@@@@BD@B@@A@A@@@@@A@@@@B@BAB@@@B@BA@@B@@@@@@A@@@@@@BA@A@A@A@A@@AAB@AA@@B@@A@AA@@A@@A@@A@CA@@@AA@A@@@@B@BA@@@C@@@@@A@@@@AA@@@@@A@@@@@@B@B@@A@ABCBA@@@AB@@@@A@@@AA@@A@AAABCA@AAAAAA@@@@@AA@BAA@@A@A@@@AD@@A@@@A@@A@@A@A@A@@AAB@@@@AB@@AAA@@@AA@@AAA@CA@AA@AA@A@@AA@@@@AA@@AAA@@A@AAACA@@A@AAA@AAA@A@@AAAA@A@@AAAA@@A@@A@A@@@@@@@@@@AB@@@@A@@@@@@@AA@@A@@@@@AA@@A@@@@AA@AAA@@@@C@@@AA@@A@@AA@@@@@@@A@@A@@@@@@AA@@@A@@@AA@@A@A@@@@@@@AAA@AA@ABA@ABA@@@@ACE@@@AAEAA@C@AAA@@BC@@AA@@@A@AAA@@@A@@@C@A@A@AAABC@A@@@@@A@@@@@ABAAA@@@A@@AA@A@C@@@A@A@@AA@@@A@@AAAA@@B@@@B@B@B@@@B@BA@@B@@A@@B@B@@@B@@A@@B@@A@@@A@@@@@A@@@A@@A@@A@@@A@@A@A@@@@AA@@@@@AA@@AAA@@@@@@A@AB@@@@A@@A@@@A@@A@A@@A@@AA@A@@@@AA@CA@@BA@@A@@@AA@A@@@A@@@@@@AAA@A@@@@A@@AAA@@@@A@AA@@@AABA@@AA@A@A@@@A@@@A@A@@@A@@@@A@AAA@@@@A@@@@AA@@BCA@@@@A@@DA@@@@@A@@AA@@ABA@@BA@@AAAA@@A@AA@@@BA@@@@B@@@BAB@DB@@@@B@@A@@@@B@BA@@@@@AA@@@@B@@@@@@AAB@A@@A@@@@B@@@B@@@BA@@@ABA@@A@A@A@@B@@ACAAAA@@@AA@@@@AA@BAA@@A@@B@@A@@A@A@@@CA@A@@@@@A@@BA@A@@@@@@@A@@AA@@@@A@@@A@@@@@A@A@AAA@@A@@BA@@A@CCA@@@@A@ACCCCA@@A@@AA@@AA@@@A@@@A@@@@A@@@@@A@@@AA@@A@AAA@A@@A@@ABc`kC@@@@@A@@@AB@@C@@BA@A@@@AA@@AA@@A@@@A@AA@@AAA@AAA@A@@A@A@ADABA@@@AA@AAC@@@A@@@A@@@AB@@@@@@AA@AA@AAA@A@@@@@A@@@A@@@@@AA@@@@ABA@@@@B@AA@A@@A@A@@AA@@@ABA@@@@@AB@@@@@FA@@@@BA@@BA@@@@BA@@B@BAB@@A@A@CA@@@@@@AAA@@@ADAB@@A@@AAAAAA@@@@A@@AA@B@@@@AD@BA@@@A@@@@@@@@BA@AB"],"encodeOffsets":[[119460,28357]]}}],"UTF8Encoding":true});}));