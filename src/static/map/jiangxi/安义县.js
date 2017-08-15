(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('安义县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360123","properties":{"name":"安义县","cp":[115.548658,28.846],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAA@@BA@A@@@A@@@@A@A@@BA@@@A@A@A@A@@B@@@@@B@@@B@@@@A@A@@AA@@@@@@A@@@@@@@@@A@@@@@@@B@@@@@B@@@@@@A@@@A@@@@@@AA@@@@@@A@BB@@@@A@@@@@AB@@@AB@@@@@@A@@AB@@@@@A@@@@B@A@@@B@@@@@@@B@@A@@@@@A@@A@@BA@A@@B@@@@@A@@@@@A@@@@@BBAA@B@@@@B@@BA@@@@@@@@B@@AA@A@@@@@@@B@@@@A@@@@A@@@A@@@B@@@@A@@@@A@@@@@@@BA@@@@@@@B@@@A@@@@@@A@@@@BAA@B@@@A@@@A@A@@@@@AB@A@@E@@@A@@AC@A@AA@@AAAAA@@AAAA@A@@AABAA@@A@A@@@@@ACCCAACACACA@AA@@@AAAAA@@AA@A@A@@@AAA@@@AB@BA@A@A@@@A@@@AAA@@@@@AAC@C@AB@@@B@B@B@@AB@B@B@@@@A@I@@AA@AB@@A@@@@B@@@@@BB@A@A@@A@@A@@@@@@BB@@B@@@B@BA@@@@@A@AB@@@@A@@AA@A@C@@B@B@B@B@B@@@@@@@BAA@@A@@AA@@@@@@A@A@A@@@AAAA@@A@@@AAA@@BA@@@A@@@@AB@@@DA@@@@@@@AB@@A@A@@BA@A@@@@@@@@@@@ABA@@AA@AAA@AA@@@C@@@@AAAAA@AA@@@@A@@AAAAA@A@@AA@@AA@@@A@@@AAB@B@BA@A@A@ABA@@@E@A@@A@@@@A@AA@@A@@@@@@AAA@@A@AA@@@A@@AA@@A@@A@@@@AA@@@AA@@AAAA@@AC@@@AB@@@BA@AAABAAA@A@@@A@@AA@AA@BA@AA@@A@@@A@@AAAAAAC@A@A@@@A@@AA@AACA@@AB@@CAC@@@AA@AC@@A@@@@AA@A@@@@A@@A@@@@A@@@A@AA@@@@AAACA@AA@@A@@A@@@A@@@AB@@AAA@AA@@A@@@A@A@AA@A@AA@@AA@@AA@A@@A@AA@@AACA@A@@AA@AAA@A@@A@CCA@@A@@E@AAAC@A@@B@@@@@B@@@@@@@AAAAAAA@@@@@AAB@@AB@B@B@@@@A@@A@A@@@@A@A@A@@@@BA@@CAA@AA@B@@A@@@@DCB@@A@A@A@@AA@@@@@B@B@@AB@@C@@A@@A@@CBABA@@@@B@@@B@@@@@@AA@@@A@@B@BA@@BABABAAAA@A@A@@@@B@B@@A@@@@A@@@A@@@@CB@A@@@@B@@@BABC@@@AA@BA@@@A@A@@ABA@ABA@@@@BA@@@B@A@@AA@@@@@@@D@@@BABAD@@AB@@AB@A@@AA@ABA@@@A@AB@@CA@@@@@@@@@@@@DB@@@@@AB@BAB@@@B@@A@@@@AA@@B@@@@@BB@BB@AC@A@A@@BAA@@AA@@@A@ECBA@ACAA@A@E@@@gD@@E@@BB@A@@B@@@@AB@@B@@@@AB@@@@@@B@@@@@BA@@B@BA@ABA@@@@BB@@A@@B@@@@@BA@@@@B@@B@@AB@@@B@B@@A@A@@@GHAB@@B@BA@A@@B@@BBBB@A@@B@B@B@@@@@B@B@@B@B@@@B@@@@@B@A@@@AB@@A@AB@@@B@@@B@@@@B@@@@D@@C@@@@@@BB@B@B@B@@@B@@B@B@@B@@B@@@@@@B@@B@@BA@@@@@AA@@@@AB@@A@@BB@@@B@@@BB@@@@@A@@BA@@@B@@@B@@@@AB@@A@@B@B@@BB@@@@@B@@B@B@BB@B@@@BB@@BB@BB@@@BBBB@@BB@@B@@B@@ABA@AB@B@@ABCD@@@@B@@@BBAB@@@@@BB@@@A@@@AB@@@@B@B@@@B@@@B@BBD@AB@@@BA@@B@B@@ABA@@@@BAA@B@B@F@DA@AAA@@@@@BB@@BBB@@@@F@@@D@B@D@D@BAB@@B@@@@D@@@BBB@@AB@@@@B@@@@B@@@B@@AB@@BFBB@B@@@BB@@@@D@@B@@@@@@BA@@@@BB@@BBD@BB@B@@AA@@A@@@A@B@@B@@B@@B@@B@@BB@@@@@BB@@BA@@@BB@@@B@@@@B@@@@@@@@BB@@B@@BD@@@@A@A@@@@@ABA@A@BB@@@B@B@@BBBBAD@B@BA@AB@@A@@A@@CBADAB@JAB@@BBBD@DBB@@@BB@@@@B@B@@@BDB@BDBDB@@@BB@@BA@@B@@@B@@B@B@B@@@B@@@@B@@AB@B@@@B@@DB@@AB@@A@@@ED@@A@A@CBE@@@@B@@A@@@@@A@@@AAA@@@A@@AC@@@A@@@@AA@@@A@@@A@A@A@CB@@A@AB@@@@@@@BA@AB@BA@CDA@ABC@A@A@@C@@ACCCAA@@CAA@C@G@CBA@@@A@EBC@EBA@@BC@C@A@@@AAA@EBA@@AA@@A@A@@@@@A@A@A@AA@A@@@A@@@AB@@ABABA@A@A@A@@A@@@C@@@A@@@@@A@A@A@@AAAAA@E@@@A@@@A@CDA@ADAD@B@BABABAB@@AACB@@A@A@AB@@A@@BA@E@@@A@A@@B@@@B@@B@B@@@BB@@@@@@BB@@A@@@@@@@@B@D@B@@A@AB@@A@@@A@@@AB@@@@@BAB@@@@@@@B@@@@D@BB@@AB@BABADB@@@B@@@@B@@A@@@CD@@AD@@@@@@@@BBB@@@B@@@@@@@@B@@@B@@A@@@@@@@@@@B@BA@@@@@@B@@@BBBA@@B@@@AA@@@@@@B@@@@@B@@@@@B@@A@@B@@@@B@@@@BAB@B@@B@@@@AB@@@@@BBBB@@@A@@@@@A@@@@BBBB@@BBB@@@@BBA@@@@@@B@B@B@@@@@B@@@B@@@DAB@D@@@@@@@B@@@B@B@@@@B@@BBB@@B@@A@@@@B@@BBB@@B@BB@@@@BAA@@@@AA@@@@BB@@@B@BBB@@@@@@CBA@@@A@A@AB@@@@@AA@@@@@@B@@@@@B@@AA@@@@@B@@B@@@B@@@B@B@B@BAB@@B@@@@@@D@D@@BB@@@B@B@BBAB@@@BA@@@BB@B@@@@A@@B@@@@B@@@B@@@@@@@B@@@@A@@B@@@@@B@B@@AB@@@B@B@D@@B@@BBD@A@@@@B@@@B@D@@B@@BB@BAAABB@@@@@B@@B@@@@@@@AB@@A@A@@@@@ABB@@@@@BB@@B@@@@B@@@@@B@B@@@BAB@B@@DD@@BF@BBBF@@D@@@D@@@@@B@BBA@@@@@AB@B@@@B@@B@B@B@DA@@@A@A@@@@D@@@BA@@@@@@D@@@BA@@@AA@BC@@@A@@@@@@BD@B@BB@@@BAAA@BB@B@@@BB@@DBD@@@B@BB@BD@BB@@B@@DADA@ABA@@@A@@BADEB@DAB@B@B@BB@@BDBB@@@BB@@@B@B@@@@DBD@@B@@@@@@@@@B@@@B@@B@D@@@B@@BD@@@@B@@@@B@@@B@B@@@B@@BB@@B@@BA@@@BB@@@BB@B@@@@@@@BB@B@@@B@@BB@@B@@@BB@@@B@B@@@@@@BB@@BB@@CF@@@@@B@@AB@BA@@B@@B@@BAB@B@@@B@BAB@@AB@@ABCB@B@@@BB@@@B@@@B@B@@B@@@@@@@B@@B@@B@@@@@BAB@@@@@@@@AB@@A@@B@@AB@@@B@@ABA@AB@BA@@BCB@@@B@@AA@@@@A@@BA@@B@@@@@BA@@B@@@@@BB@AB@@AB@@@BA@@@@@AB@@ABAB@@@BB@@B@@ABAB@@@B@@@@@BA@@@@@A@@B@@@@@B@@AB@@BB@@A@@@BB@@@B@B@@@@BB@B@@@@BB@@@@ADA@@@@BABA@@B@@A@A@ABAD@@@B@B@BAD@BA@@@ABAB@BA@@@A@@BAB@@ABBB@BA@@B@B@@A@A@@DA@@@@B@BA@@@@@CB@@@@@BAB@@AB@@AB@@@@@B@@@BAB@B@D@BA@AB@@@B@B@B@@A@A@@@A@@@ABAA@@AB@@@@AB@B@@@B@BA@@B@BA@AB@BABABAD@B@@@@A@@B@@@BAB@BAB@B@@DDB@@BD@@B@@@BA@BBBBABB@BAB@@@@A@@B@@@@D@BB@FB@@@@ADAB@B@B@BA@@BBB@B@@@B@@@@@BB@B@@BB@@BB@BBBB@@@@B@@@@B@@@@B@B@D@@@D@@@B@@@@@BA@@B@@@@@BA@@@@B@@@@@BAB@@@@@BA@BBB@BB@@@@@@@BB@@B@BBB@@@@@B@@B@@@BBB@@@@B@@@@B@@B@B@D@@@@@B@@@BBB@@@B@@@BAB@@@B@@AB@@@B@@@B@@@D@B@BAB@@@@BB@B@@@B@@A@@@@B@@@@@BAB@@ABA@@@@BA@@BA@@B@@@B@@@@@B@BA@AB@@@B@@@B@BA@C@@B@@@@AB@B@@ABA@A@ABABA@@@@BABBB@B@B@D@@@@A@@A@@@@@A@@@A@A@@@@@BA@@B@@@C@A@@@@@@A@@@AA@@A@@@AB@@@B@@A@A@@BA@@@@@C@@@@BA@AB@B@@ABABADCB@B@BADAB@@A@A@@@@BAB@@@@@B@B@B@@@@@@@B@@A@@@AB@@@@AB@@ABABA@@@AB@@@BABA@@@@BC@@@A@@B@@BB@@@@@@@AA@@BA@@@@B@@B@BB@BB@@D@FABD@@@D@B@@A@@@A@A@@@@@@@A@A@AAA@@A@@AC@B@@@B@@@BB@@@@@BB@@@B@@A@A@AA@B@@@@B@@@B@@BB@B@B@@A@@B@@@BBBB@ABAB@@@FBB@D@B@@@B@D@FA@@@@@A@@@@BAAAB@@A@@@@@@A@ABA@@@EBA@CB@@@@@@AAAA@AAAB@B@JA@A@@@@B@@@DBBCB@@@BB@@@AB@@@B@BAB@@BB@FFTCDADCBA@@C@BE@G@@DA@@@A@@DAB@BA@A@CB@@@@@A@@@@A@A@@@@B@@BBBBB@BBB@@@@BBB@B@@@B@BAB@BABA@@B@B@@A@@B@@A@@@@@@BA@AB@@@BB@@@B@@BB@B@@@@@@B@@@@@@BB@@@BBB@@@B@B@BABA@B@@BAB@@@B@@@@@DDB@@@@B@@DA@@F@B@@A@@BC@@BA@@B@B@@@B@BBB@BBB@BB@B@B@@@@@@AB@B@@B@@@@@BB@B@@@@@B@@@@D@@B@BD@@A@A@@B@@@@@@A@A@@@A@A@@@AA@@A@@@@@@B@BA@@@CAA@@@ACAA@@@AA@@@@A@ABA@@@@@@@@@A@A@@B@@A@@AAACAA@CC@@@A@@C@@@@CACBA@@BCBA@@@AB@BBBA@@@@B@B@@AB@@@DB@BBAB@BA@@AAAA@AB@@AB@@AB@BABB@@BB@@DBD@D@RA@E@@@@BA@@B@BABA@@BB@@@B@BB@@@BB@@B@`IFBBBDB@B@BBB@@BB@@AD@@@BAB@BBB@B@BB@@BB@D@B@B@B@@ABA@@DCBA@@@B@@B@@@@@BA@A@ABA@@DC@A@A@AB@@A@ABA@@@@B@B@BA@A@@B@@@@@BA@@B@@@@@AA@@@@@@@A@@DAB@@@B@@A@A@@@AA@@@BA@@B@B@@@@AB@@@@A@@@@BA@A@@@@@A@@@AA@@AB@@@@@@@@A@@BB@AAADA@@@@@A@@@@BA@@@@B@@@@@B@@A@@AA@@@@@A@A@A@@@@@@B@@A@@AA@@AB@@@@@@AA@@B@@@@A@A@@@AB@BBBA@@@@B@@@@AB@@@@A@@@@A@@@AB@@C@A@A@@@A@A@A@@@A@C@EBAA@@@@@@@@AA@AACAC@@@A@ABA@A@@AA@@@@D@@B@@@B@B@@@@B@@@B@@A@AAC@@BBBA@ABAB@BADA@@B@@@@@@A@@BABC@ABA@ABABCDA@@@@@A@@A@AA@BA@@@A@@BA@@@AB@@@@AAA@@@@@@@AA@@AA@@@@@A@@AC@CCC@A@@A@@@AB@@@@@@@@@@AB@BA@@@A@@A@@B@@AB@@A@C@A@AB@@@B@@AB@@@B@@@@AAAAA@@AA@C@@@A@@@@@C@C@@B@BA@@DA@@BABA@AAA@AA@CA@@AAA@@@A@A@ABAA@@A@@@@B@BA@@@@@C@A@AAAA@@@@AD@BA@ABA@@@@BA@@@A@CAAA@A@@AC@@@@A@@@@@@@@B@@@@@B@@@@A@AA@@@B@@@@@@B@@BB@@@@@@BB@@B@@BBBB@BA@@B@@A@@@@@@BA@C@@BA@ABA@@@CBA@A@@@@@@@CBADAB@@AD@@@@@BAAB@A@@@@@A@@A@@@B@@@AA@@BA@@@@@A@@@@@AAA@A@@AAB@@@B@@@@@@@A@@@@A@@AB@@A@@@@@@@@A@@B@@A@@@@@@A@A@A@A@AAA@@@A@A@@@@@A@@BBA@@@BB@@B@@@@@@@@@BB@@@@@@@A@@AAB@@A@@@@@B@@@@BB@@@@@B@@B@@@@@@A@@A@@AB@@AAA@A@@@A@@@@B@@@@A@@@AA@@@@A@@A@@A@@@AA@@A@@@@BB@@@@@@@A@@AA@@@@@@@@@@@@B@@@@@AA@@@@A@A@@@@@A@@@@@A@@BA@@@@@@@A@@B@@@@@@@BBA@B@@@@A@@@@@@@B@@B@@@@@@@@@B@@B@@@@@A@@@@@A@@A@@AAB@@@@@AA@@A@@@AB@@A@AA@@A@@CAA@A@@@@@@D@@@@@@@@A@@@@@@@AA@@@AB@@@@@AD@@@@@AA@B@@A@@@@@A@@@A@@@A@A@@@AA@@AA@@@@A@@A@@AAA@GG@@AA@@@AA@@AA@@AAA@AA@@A@@@A@@@@B@@@@A@@@A@BA@@@@@@@@@@@A@B@@@@AB@A@@AA@@@A@@@@@@@A@@@A@@@@B@@@@A@@A@@@A@@@A@@@A@@A@@@@AA@@AA@@ABA@@A@AB@@A@@@A@@@@B@@AB@@@@@B@B@@@@@B@@@B@@@@B@B@@@@B@@B@@@ABBB@@@@@B@B@@B@@@B@@@B@@@@AB@AB@@@@BB@@AB@D@BBBBB@B@B@B@@ABAB@@A@A@A@@AA@"],"encodeOffsets":[[118440,29506]]}}],"UTF8Encoding":true});}));