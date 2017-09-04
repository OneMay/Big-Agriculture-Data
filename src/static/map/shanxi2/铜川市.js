(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('铜川市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610202","properties":{"name":"王益区","cp":[109.075578,35.068964],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BB@B@BB@@@D@@@@@B@AB@@@@@BB@@@B@B@@@@@B@@@@BBBB@@B@BB@A@ABA@AB@BA@@B@@B@B@B@BB@@A@@@AB@@BB@@@@AD@@CB@@@BC@@@@@A@A@A@@@@BA@@@@@B@B@B@@@@@@D@@B@@AB@@@@BB@AD@B@BBB@B@@@BA@A@@B@B@@@@A@@@A@@B@@@B@@C@A@@D@@@BABA@@B@B@@@@@B@@@@@BCAA@A@AB@@@B@@@@BBB@@@@@@@AB@@B@@B@@@@A@@D@@@@@B@@@@A@@@A@CB@@@@@B@@@@@@@@@@@@@B@@B@@B@@@B@@@@@@@@@B@@@BAB@@BB@@@@A@@@A@@@@@@B@@B@B@@BA@@BB@@@B@@@BB@@@@AB@@@@CB@@@@A@@@@@@@@B@@ABA@@@A@@@@@@D@@@BA@@@C@CA@@@B@@@@A@@@@A@@A@@@AAAA@@A@A@ABA@@@CB@@@BB@@B@@CB@A@@A@A@@@@@A@CDA@@@@BB@ABA@@B@@@B@@B@BADCB@B@@A@@@B@@@B@B@@@B@@BBA@@@@@ABB@@B@@@@ABAD@@@BA@@B@@A@@@@B@B@BA@@@@AA@@@A@@B@@@B@BAD@@AB@BA@@@@@AB@@@@A@@B@@A@@A@@@B@@A@BB@BDB@@B@@@B@@@@@BA@@B@B@@@@@B@@@B@BAD@FAB@@@@AB@@@@@B@@ABA@@@@@AB@@@@AB@@A@@@@FC@@@@@@BAB@@@BAB@@@@A@@@@@@@A@@BC@AB@@AB@@@BBDB@@BBB@@AB@@@@BBB@@B@BB@@@@@BB@@B@@DB@BBB@B@@B@@@BB@@@B@@@BA@@BAD@BBD@BA@@@C@@@@@A@B@@BA@@@@@AA@@A@@@@@@B@@@@BB@@@@@@AB@@AB@@@@B@@@@@@BAB@@@@@B@B@@@BABB@@@@BA@@B@@@B@@A@AB@@ADABA@ABAF@@A@@@A@@A@AA@@@@@CD@@AB@@@B@B@B@@@@@@@B@@AB@@@@@B@@A@A@@@A@@BB@@BA@@@ABA@@@@AAA@@A@@B@@@B@@@@@@A@@BCB@BA@A@@@@@@@@@ABC@@@A@A@A@A@A@@@C@@B@@@@@@@BAB@D@@@B@BB@B@B@@@B@@B@@ABA@A@@@A@AB@@A@A@@@@@@A@@AA@BCBABA@C@A@@BABAB@@@BA@A@@AA@C@@@AAC@CAEAAAAAAC@A@AA@@ABA@A@@@A@@CCAA@AB@@@@A@@A@@BABC@@BA@AA@@@AA@@@A@@@ABAB@@@BAB@@@B@BADA@BB@BBB@@@@A@A@@@@@@B@B@@CBA@@@@BA@A@B@B@@@@B@@@B@@ABA@@BA@ABBABBB@D@@@BA@@D@BB@@@@B@B@@B@@@B@@@@@@B@@@BA@A@@B@@@@@@BA@@@@@@BB@B@@@@B@@@BA@@@@B@@@@BBB@@@@@B@@@@@B@@B@@@BB@@@@BA@@B@@DDBBB@@@B@@A@ABA@@B@@@B@@@@@@AA@BA@@@@B@@@B@@@@@BB@@@@B@BB@@B@@@@@B@AA@@B@@A@@A@@@BA@@@@@ABB@A@@@AA@@A@@@@BAB@@@@@BA@@@@@BBB@@@@BAB@@@@B@@B@@BB@B@@@B@@AB@@@B@@@D@B@B@B@@BBAB@@@B@@@@@@AB@@ABAB@B@@@@@B@BB@@DA@@B@@@@@B@@A@@@A@@@@@@@BB@@B@@@@B@@@@@B@B@@@B@B@@@B@B@B@@@@@@@@A@@@A@@BAB@@A@@@AA@@@BE@@@AA@@AAA@A@C@@@AB@BBB@@@BA@@@@BA@A@C@A@A@@@@B@B@@@@@B@@AB@@BBB@@@@@BBB@@@B@@@@B@@@@@@@@B@@BBBB@@B@@@@AB@@ABBBA@@@@@A@@AA@@@@DA@@BA@A@@@A@@@AAC@A@@AC@@BA@@B@@BB@@AAA@@@@BA@@B@@AAA@@@AB@BA@@@@DB@@BC@A@@@@@A@@BA@@@C@@@@@@@A@@B@@ABB@@B@@AA@@@@A@@DA@A@@@@C@@AC@@@AA@@@A@@BBB@B@@@BBB@@@@AAA@@AA@@A@@A@A@A@C@AB@@A@@C@@@@A@@@@B@BAAAB@@A@@B@@@@@BA@@BA@ABCBAAA@@BA@@BA@@@@@@BA@@BABABAB@@@@A@AB@@@B@@AB@BADCB@@A@A@@@CB@@@BA@@@AB@@ABA@A@@B@@C@A@ABCDA@@B@@@@@@A@@BC@A@A@@@A@@@@@ABCAC@@BA@@B@B@@@@@@@@A@@@@BADBB@@@B@@@@A@ABC@A@@B@@@@BB@@@B@@B@@@B@@@B@@@B@@@BA@@BB@@@BCB@@@@@@AB@@A@AB@@B@@@B@@BB@@@@@@B@@B@@A@@@@BB@A@BBBB@B@@D@@@B@@@@@B@DBB@@BBB@B@B@BBBBBBBB@B@@A@@BA@@B@BB@@@BD@@@@B@@@@@@B@@AB@@B@@@B@@B@@@D@@B@AB@@@@AB@@@DA@@BA@@BBB@B@@@BAB@B@B@L@B@D@B@@AB@@ABBBA@@@@@@@@BA@@@@@AA@@@@@@@@AA@@@@@@@@@@@@@@AA@@@B@@@AA@AA@@AB@A@@@BA@@@A@CBA@@BA@@BA@@B@@A@@@@B@@@B@@@@@@AB@@AB@B@@A@@BC@@B@AC@A@ABA@A@A@C@@@A@AAA@A@A@AAA@@@AA@AAA@@AA@EAABA@EBC@@@C@C@AAA@@@@AA@AA@@A@@@A@@A@A@A@@ABAB@BAB@@AB@B@BA@CBA@@BAB@@A@A@@@AA@@@AA@@@EEC@@A@@BA@G@@AA@AA@@@AC@@AA@AAA@AAA@@B@@A@@A@@@AA@@@AA@@@ABC@@B@@@@@BA@@@@@A@A@@@A@@@@@A@@@@AB@@A@@D@DA@@B@DABAB@B@B@@@BA@@@@F@B@D@@@@@AA@@@@@@B@D@B@@A@@@@@AB@BB@@@@B@@@B@@ABA@@B@@@BA@@@AB@@A@@@@@AB@BA@@@@B@@AB@@A@@B@@@@A@A@@@AB@@A@@@AB@@@@A@@B@@A@@@A@@@@@A@@B@AAAA@@A@A@@@@A@@@A@@@@AB@B@@BB@@@@@@A@@A@CAAA@C@@@B@@@@@B@AAIA@@AB@@C@ABAA@@@@@C@@A@@A@@@@@@A@@@A@@@@A@@@@@AABA@@AA@@@@AA@AAA@@@@A@AD@@ABA@A@CB@@@@ABBDBB@B@B@@BB@BB@@BB@@@@BA@@@@D@B@B@B@@@@AA@G@@@@@B@D@@@B@BABAB@@@BB@@@@B@@@@@@@B@@@@@@A@@B@@@BB@@@A@@@@@AAB@@@ABA@A@@B@BA@@@C@AA@AAAE@@@A@A@A@AA@CA@@A@@A@@CA@A@@BA@A@A@@@A@AAA@@EA@BGBA@@@ABA@ABA@C@A@A@@@AA@@@A@@A@AB@BC@@@A@@@@B@@A@@@@A@A@@@@@@CD@@A@A@@@@A@A@AB@@C@@BA@@@A@@@@C@A@A@A@@@@@@B@@BBA@@@CA@AA@BA@@B@@CB@BA@CB@@A@@AA@AAAAA@@@A@@@AA@AFABABA@@@A@A@A@@@@BA@@@@@@@AB@@@C@@@@A@A@A@BBB@@@@B@@A@@@A@@@@BA@@B@@AB@@@@B@@@@BA@A@C@@B@@@B@@@@C@@@@@@B@B@@B@B@@A@B@@ABA@@@AB@@@@C@A@A@@@A@@@A@A@GBC@A@A@AA@@A@A@@@A@@AA@AA@@@@AB@@ABA@@@A@@B@B@B@@A@@@A@@A@@CAA@A@A@EAA@@B@@@@@@@B@@BB@@@@@@A@A@@@@@@B@@@BBB@@@B@@BB@@ABCBCB@BC@@B@@ABADA@@@A@@AA@EA@@AACAAAC@A@@@A@@@@@A@BBB@A@A@@@A@@B@@BB@@AB@@BB@@@@A@A@A@@B@@B@@@AB@@@BB@@@ABA@@B@@AA@@C@A@AB@@@BB@ABAB@@A@@AA@@BA@@@A@@B@@AD@BABCDAB@DA@B@@B@@B@@A@@@@@D@@@@B@B@@@@AB@@@@@ADA@BB@@@@BA@ABABB@A@@B@BA@@@@BBB@@A@@B@@B@@@BB@@@BCB@@@@@B@@@@@@A@@B@@@@B@@@@AHAB@BCF@BADC@ABC@A@A@ABAB@@@BBAB@@@@@AB@@AB@B@@@B@@BB@@@@@@A@@@A@@@@@B@@@@B@@AA@BAB@@BB@@AB@B@@ABA@A@@BB@BBB@H@BBB@@B@@@@@B@@@@BBDBB@@@B@@@BB@DB@@@B@@@@@@@B@B@BB@@B@BA@@@@@B@@@@@@B@BAB@B@BA@BB@@@BD@@@@@@@BDAB@@A@AB@@@B@B@@@B@@@@A@@B@@@@@BAF@D@@@BB@@@B@B@@ABB@@B@@B@@@B@BA@AB@@A@@@@BAB@@@@ADB"],"encodeOffsets":[[111664,35878]]}},{"type":"Feature","id":"610222","properties":{"name":"宜君县","cp":[109.116932,35.398577],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AAA@@AB@A@@C@AA@A@@A@@@ABA@@@AA@@@@@ABA@@@@@@A@@@@A@@@A@@A@@A@@@@D@@AAA@BAA@@@A@@@@A@@A@@@@@@B@@@B@@A@@@AB@@DD@@@@@@A@AAC@@@AB@@@B@B@BBFBB@B@@@@@B@B@@@@@@C@@@@B@BA@@B@B@@B@BB@@@@@@A@@@AB@@@B@@@@AB@@@@@@@B@@B@@@BB@@ABBBBB@@@@B@@DB@@@@B@D@BABC@ABA@@B@@BD@@@BA@AB@@@B@@BD@@@DB@@B@@BB@@@B@@BB@@@BBD@B@@@D@@BB@B@@BB@BB@BDBF@@@B@D@@@B@@A@@@A@C@ABA@@@CA@@AA@@A@@BC@A@@@A@@A@@A@AAAACA@@A@A@@@A@@@@@@@C@@@A@@@@@@@A@@@@@@BBB@B@@A@@@A@@@A@@@AB@@@@@B@@@@@@A@@@C@@@A@@B@@B@DB@@@@@@ABA@@@@@@B@@AB@@@@BBBB@B@BDB@@@B@@B@@B@@@B@BB@@@BB@@@BAB@BEBA@ABA@A@ABCBA@@BB@@@AB@@@@A@GAAB@B@BA@EBC@C@@@A@AB@@A@ABA@@@@@@B@@B@BB@@@B@B@@D@@@B@@@@B@@@B@BBBB@BB@BA@@@CDA@@B@@ABA@ABA@@@@BA@@B@@@B@@CAA@@@AB@B@B@D@@ABA@@B@@@B@@B@BBB@B@BBB@@@@@@BB@@BB@A@@B@@@@@@@@@B@@@@@@@B@@@@BB@@A@@@@B@@B@@B@@@B@@@@B@@@@@@B@@@@@@@B@@@BA@@@EBA@AB@@A@CBCD@BA@A@CBA@@A@@AACA@@ACAA@@AA@AA@A@AA@@@AAAB@@AC@AA@@@@A@@@A@@@@@@BA@@@ABAD@BA@@@@B@B@@AB@@AB@B@@@@A@@@EAA@EC@@@@@D@@@B@@@BCBABABABAB@@AAC@AA@@A@AAA@@@@@@@@B@@@@AB@@@@BB@@AB@@@@AD@@@B@D@@@@AB@@@@@B@B@@@BAB@B@B@BA@@BABCB@@@@A@EC@@A@AA@@A@A@@@@B@@ABA@@@@@@@A@AAAAA@CAA@ABAB@@CB@@A@A@@@A@ADC@AB@@AB@@AAAA@A@BAB@@ABC@@BA@@@ABA@AA@@@@ABA@@B@B@@@@AB@@BBA@@BB@@BA@ABC@ABA@@@AA@@A@A@A@@@@B@BABBBA@@BA@@D@@@@AD@@@B@@@BAB@@BB@B@D@B@B@@B@@@@AB@BA@@@B@@@B@BABA@@@@BABCF@BABCB@B@@@BA@@B@BBD@B@BBD@@@@BBB@BBB@@BB@D@@BD@B@BBBB@BB@B@B@B@@@B@B@@@BB@@A@@@BBF@@@BB@@B@BB@@B@B@@@BB@@BB@@BB@@@B@@@@DB@@@BD@BB@@@@B@ABA@ABA@E@A@G@A@AA@@A@@@AAAD@@CB@@A@@BA@AB@@A@@AA@@@AAABA@A@A@C@ABA@@@A@ABAA@@@@@@AB@@A@@@@BABABA@@BA@AB@B@@@@@B@@@B@@@@@B@B@BBB@B@@B@BBBB@B@@@BB@@@B@@BB@@B@@@DBB@@BD@@@B@B@@@BB@@B@@@@ABBB@@@BBB@B@@BB@@BBBB@B@@B@D@@@B@BF@B@@@B@@@@B@BABB@@B@@D@@DB@@B@B@@@BB@@DB@@D@@B@@@@@B@@@B@@@BB@@@B@@@BAB@@@@@@BBB@B@@B@@@@B@@BD@@@@A@A@@@@@@@@D@@@@@BBB@@B@B@@@DA@B@@@@@B@@B@@@B@B@@@B@@BB@@@BA@@B@@@BBABB@@@@@@@BD@@B@D@BA@@@BBB@@@@AB@B@@CDAB@B@@@@B@B@@@BBB@B@@@A@@@@@BBB@@@@@B@@BA@@@@B@@@BB@@@BDB@@@BB@AB@@@BDB@B@@B@@@B@B@@A@@@A@@BA@@@@@@@@@@BAA@B@@A@@@@@AB@@@@A@@AAB@@@@@@A@A@@@@B@@@@@@A@@@A@@@@@@BA@@B@@ABB@@@@@@@@@@BEB@@@@BBBABA@@B@@@B@BB@@@BB@@B@B@@BBD@@BB@BBB@BD@@@BB@B@@B@B@D@BA@AB@@BBJH@@BB@B@BABAB@B@BDFBBBDBBDBDB@B@@@@@B@@@B@F@@@BD@BDB@@@BBB@BBD@@@B@B@@@@B@BBB@@ABADABA@@BAB@BB@B@B@D@@BB@BDCD@@@BD@@B@@B@B@B@B@@@B@DBD@B@@BBBBBD@@B@@@B@D@B@@B@BA@@B@BA@@FD@B@@ADABAB@BABABA@@@@@BB@B@B@@@@@BB@@@BBD@BB@@@@BBDBB@@B@@ABBBB@@@@@B@DB@@B@@@BBDBB@@BBBDB@B@BBB@@@@AB@@AD@@@@BB@@@BB@BAB@B@D@B@B@B@BB@B@@B@@@@A@CB@@@@@B@B@BAHCBA@@@@B@BBB@D@B@B@B@B@B@D@@@B@@@B@BAB@@@B@@@@AB@@@@@@B@@B@BAB@B@@@@@@D@@@@@B@@B@BA@@BB@@@@@BBFBBAD@@@B@@DA@@@@B@@@B@DDB@D@B@B@BB@@BBBBB@@@B@BA@@@@@A@@@@B@BAB@@@@@@@@B@@@@@@@@AB@@@B@@@@@B@@@@@@B@@B@@@@@BA@@@@B@@@D@BB@@BBB@@B@B@@@D@@@@BB@@@BB@@@@@C@@DA@@B@@@B@@B@@B@@@BB@@@@@BB@@BB@@@@BB@@@DB@@@B@@@@@@B@@AB@@BB@@@@@B@@AB@B@BA@@@BB@B@@@B@B@@@B@B@B@@B@@B@@@@@@AB@@A@@BB@@B@@BBB@B@AB@@@@A@AB@B@BBB@BDB@B@BB@B@B@BB@@@@@@@B@BABA@@B@BAB@BBB@@@B@BB@@DB@@@BB@B@@@@BB@B@@@@@B@@@@@BABBB@B@@@B@BBB@BB@B@@B@@@@C@@@@BAF@HABBBAB@@@B@B@@BB@B@D@@@B@DABAFA@AAA@@A@@@@@DEDC@@BBBA@@AA@ACE@@BABAB@A@@ABA@@@@@@@A@@@AB@@A@@A@@@@@@@DA@@@@@A@@AABA@@B@@A@ABAB@B@@@@BB@@@@@@BB@@@@@B@@BB@@@B@BBB@B@@@B@@@B@@A@@@@A@@C@@B@@@@C@@AA@@A@@A@@@@@AA@@@@@B@AAB@@@@@AA@@B@B@BC@@BA@ADA@AB@@A@@A@DC@@BC@AB@@@@AB@@A@@BA@@@AB@@@@A@@@@B@@@@A@ABA@CBA@@@AB@B@B@@A@AB@BB@A@@@@BBB@@@@AB@@BB@@@@A@@B@B@@@@@@AB@@B@@@@@A@@F@@@B@@@@@B@@@@@B@BAD@BA@@@BB@BA@@B@@@@@B@@@@@BA@@@@B@B@@@@@@@B@BB@@@A@@@@@@B@@@B@@@BBB@DA@A@@B@@A@@DAA@@A@@B@BA@@A@B@@A@@AA@@@A@@B@@B@BBB@@@@@@@BDBBBD@B@@@A@@@@AB@@@@BB@@@BAB@@@@A@@B@@@BA@@@@@@BB@@@BB@B@D@@@@B@BB@@@@@B@@ABA@@@@@B@@B@@A@BB@@@BA@@AC@@B@@@B@B@@@DC@@@@@A@A@ABA@@B@@@BA@@@@@BBB@B@@@@@@AB@@@@DB@@@@@@@A@A@@BA@A@@BB@@@B@@B@BA@@@@@@@B@@@B@BAB@@@@@@B@@@B@@@@@@C@@B@@@B@@@B@@@@D@@@@B@@@@@@@@@B@@@AA@C@A@@@@B@@@@@BBB@B@@@BBB@@@B@@@DABA@@@B@BBB@@AB@@BB@@BA@@B@@B@@@B@@@B@@@@B@@@@@B@@@@B@@@@@@@@@@@BB@@@BC@@B@BB@@B@B@B@@B@@@B@B@@HA@@BBD@@@@B@BB@@@D@B@@@B@@@B@@@B@@@@@@A@AB@B@DAD@@@B@BAB@D@B@D@D@@BB@@ADBB@BD@@B@@@@@BAD@D@@@B@@B@@@B@B@@A@A@@@@B@@B@B@BAB@B@BA@@B@@@B@@@B@B@B@@@D@@@B@B@B@B@B@B@DADA@AB@AA@@BC@@@A@@@@A@@AA@BA@@D@@@B@@ABAB@@A@@B@@@DAB@BA@@BB@@@@BAB@@@@AB@@A@@BABA@@@@F@@@BA@@@@@@B@BA@@B@B@@B@@@@@@@B@@@DB@@BBB@@@@@@@DB@@@B@BAB@B@B@@@@@@BABAB@@@@@@B@@@B@BA@@B@@@@@B@A@@B@@BB@@@@BB@@B@@@B@@ABABA@@@@BDDB@@B@@@B@DA@@@A@A@A@AAC@@@@BCBAFCDA@@DABB@@B@@@BD@@@D@D@B@D@@@@B@B@BA@@BA@@BCDA@ABCBAA@@A@AA@AAAAIAA@EAAAA@@AAA@A@AB@BABA@@D@B@D@HDB@@@B@B@@ABA@AAA@AAA@@A@AACAA@EAC@A@@AAA@A@@BABAD@@@B@B@@@B@D@B@BBD@B@@@B@B@FAB@DAB@@A@@@C@AAA@ACAA@A@CA@@CAA@AA@@CCAACAAAC@AAC@AA@@@A@@@ABA@@BAD@@@B@DBB@B@D@D@FBB@B@B@@A@@@A@C@@@AAAA@ECAACAAA@A@@@@BAB@@@BBBBD@BB@@B@BA@@@@BC@@AC@AAABA@@@AB@B@@@B@@@@A@@@AAA@@@@AAA@@AAACAAA@@@A@A@@BABA@@@A@@A@@@A@@BA@A@@AA@AA@@AA@CBC@@BA@@@AB@B@B@B@BAF@B@DAD@BABA@AB@AA@A@@AAEAAAACA@@A@A@@BABAB@FAHCB@B@B@FCDABABA@@@@AA@AAAAAA@ACAA@@DG@A@@@AA@@@@@CAA@EA@@AA@@@A@@B@BAB@B@B@@@B@DA@A@@@A@@@A@AA@@@A@AAIAA@AA@AA@@A@ABADABABAB@BA@@BAB@BCDADCAAA@@@C@AA@@B@@@@AA@@@@@@A@@@@BA@@@@@@A@@@@A@@AA@@@AA@@@A@@@@@@AA@A@@@A@AA@@@@ABA@@@@AB@@@AAA@@AB@@AA@@@@@AB@@@AA@@AA@@@@AA@A@@@AB@BA@ABA@@@@@A@AB@@A@A@A@@A@@@@AB@BA@AA@@A@AB@@@@@A@@@@A@A@@@@@@@AB@@A@@@@A@@@@@@@@@A@@@@A@@@A@@AAA@@A@@@AAAA@@AAA@@@A@@B@@AB@@@BA@@B@@AB@@@@@@C@@@A@@@@A@@AA@@AAABA@@A@@A@@AC@A@@ACAA@@AA@AAC@AA@@C@AA@@A@CAAA@@A@@AA@@@A@A@A@C@ABABABA@AB@@@@@BA@@@A@@A@@@@@A@@@@@AAC@AB@@AA@B@@ABA@AB@@A@@@@@C@A@@@@A@@@CA@@@AAACA@@AA@@@@AAA@A@AAA@AAACBA@@@AA@@A@@ACAAA@A@A@A@A@C@AA@@@@AAAA@AAA@@AA@A@@@A@@@@A@A@@@C@CAC@@AA@@A@@A@@A@A@@@A@@@A@@CA@@@A@CA@@A@@A@A@@AC@AB@@A@@@A@@@A@@@A@@@A@C@AA@@C@A@@A@AA@@A@@A@A@A@A@A@A@A@@A@@@@A@AB@AAA@A@@@A@@@@@@AB@@@@@@A@@@AA@@A@@A@@@AC@AAA@C@A@A@@BA@A@@A@@A@@@A@A@@@A@A@AAA@C@@@C@C@@@@@@A@@A@@A@@@AAA@@A@AAA@A@AA@AA@@@A@A@@@@A@@A@AAA@@AA@BA@A@A@AC@A@C@@@A@@AAA@@AB@@A@AA@@A@@A@A@@A@A@@@A@@BA@@@A@A@A@C@A@@A@@A@@@@ABA@@@A@A@@A@@@@@CDC@@B@@AB@@@@AB@@@B@@AB@@AB@@A@@DA@AB@@@B@@A@AAAB@@A@@@@@@BA@@@@B@@@@BDA@@B@@@@B@@BA@@@@@A@@@A@A@CAA@A@@@@A@@@@@AA@@@A@@AA@@AB@@@@A@@BA@@@@@@B@@AB@BAB@@ABA@@@A@@B@@A@@@@@A@@@@@A@A@@@@@A@A@ABAAABA@@@ABAB@@ABAAA@@@@@CA@@@AA@@A@AAAC@@@@@@@AB@@C@G@C@A@C@CBC@@@A@E@@@AA@@AA@@@@A@@@A@@@A@A@@@@@AA@@@A@CB@@C@@A@A@@@E@A@A@ABA@@@@@C@ABA@A@ABA@@@A@@BA@AB@A@@AA@@@@@ABAD@@@BC@A@A@@@@@ACA@A@A@A@@@ADABAB@@A@@@A@A@A@A@@BAD@@@BAD@@@BAB@BAD@B@@@D@B@@@BAB@@@B@B@@@B@@A@A@A@@@@AAA@A@@@C@A@A@E@@@A@@@@CA@@@AA@@@@BAB@BAB@AA@@@A@@@AB@@B@AB@@@@@@@B@@@BABA@AB@B@@@BA@@@@A@@A@@@CB@@A@A@@@@@A@@@A@@@@@@@A@@@A@@@@B@@ABA@A@@@@@@C@A@A@@@@BA@A@@AB@@@@@AAA@ABCBA@A@A@@@@DBB@@@@A@A@A@A@A@A@@CA@@@@@A@@BA@@BABA@@@@BA@@B@@A@@B@@@DC@ABABC@@@AA@A@AAC@@@@A@ABABA@@@C@@BA@ADC@A@A@A@@B@@@B@B@B@BBBA@@B@@A@@@@@A@@B@@A@@@A@@@@B@B@@AB@@A@@@AB@BA@@@A@@A@@@@A@@B@B@@A@@@A@@@AA@AAAA@@ABAB@@AB@A@@A@@A@A@@BABA@ABA@AA@C@@@AA@@BA@@@@AA@@@@@ABA@@@AA@@BAD@@@@@A@@@@@B@@A@@@BE@@AA@@ABCBABAB@BA@ABC@@BA@ABA@A@ABABABA@@BABA@ADA@@@@@A@@BA@A@ABA@@AA@AA@A@@@C@ABA@CBABAAA@@AAAA@AAAAA@@@B@D@BA@@AAA@@A@@@@CA@@@@@AB@@AA@@@@A@@B@B@@@@@B@@@@@BA@@@AA@@AC@@@AC@@A@E@A@C@A@A@@@AAB@AABCAABA@@@@@A@ABEA@@A@A@@@CCAACAA@@BA@@BABA@ABE@AB@@ADABA@C@AAA@A@A@AB@@@@BD@@@BA@@@@BBB@BBB@BAB@@@@A@@A@A@@AAA@@@@A@@AA@@A@A@ABED@@@B@B@@@@@@@BCAA@@@BBA@@@A@CAA@C@@@@AAC@E@@@ABA@A@A@@@@@@AAB@B@@@@@@@@A@A@@A@AB@A@@@@@@A@@@@@AA@@@@@@AB@@@A@@AB@B@B@@@AAC@@@@@A@A@@A@A@@BC@@A@@@A@@@A@@A@@@@B@@A@@@@A@@AB@@@A@@A@@@"],"encodeOffsets":[[111736,35977]]}},{"type":"Feature","id":"610204","properties":{"name":"耀州区","cp":[108.980102,34.909793],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@@A@@@@B@@@BC@@@@@AA@@@@AA@A@@@@A@@@@BE@@@A@AA@BA@AA@AFA@AA@@AA@@@A@A@@@@@A@@B@@@@A@@B@@@@@@@@AB@@@@@@A@@A@@A@@BEACAAA@@BA@@@A@@@A@A@@AB@@@@@@@@@A@C@A@A@A@AB@@A@@@CAA@A@@@@@@@@BB@@B@@@BA@@B@@@B@@AB@B@@A@ABA@@@@BC@C@G@@@@BCA@BAB@@@BEAA@@@@B@@ADC@@B@@A@@@A@@B@@@@B@@BA@@@B@@B@@AB@BA@@E@@A@@FA@@AA@@BA@@EA@@FA@@E@@@AA@@@@CA@@DA@@CAB@A@@B@A@@A@@@@A@AB@A@A@@@AOAC@IA@@@AKACA@@A@BA@A@@@@A@AA@@@@BADABABA@ABAAC@A@@@@AB@@@@@A@ADA@@AC@CA@AAA@A@@@C@AA@@AB@A@@@@@AA@ABAB@@@AA@@@ABA@@@ABCBAB@@A@A@@B@@@B@B@B@@@@A@@@AB@@A@A@ABEBA@A@ABA@AB@@@AA@A@@ABAA@@@ABE@@@@CA@E@C@@FA@@E@@@@@@A@@B@BABA@AB@@@@@H@@@@@A@E@@A@AB@@@@@A@AA@A@@A@@AAA@@@@@@@@A@@A@@A@@@@A@A@@@@@@C@@G@@@@BA@@@@@E@@AC@A@A@@@@@@CCAE@@AA@@A@AAC@ACBCBA@@B@DA@@@@@@B@@A@@BA@@@@B@@@@A@@B@@B@@B@@B@BA@@@@@B@@AD@@@B@@@@@@D@@@@@B@@B@@@B@@A@A@CB@@A@@B@@@@@BA@@B@@BB@@@B@@@B@@AB@@@B@@@BAB@@@BB@@BB@@@@@@BA@@@A@CCA@ADABADCB@BCB@B@@A@@@@ACA@A@@@@A@C@@@@@@@BD@@@B@@BB@B@@@@CB@@A@@@@C@@A@ABA@@@@B@@ABAB@BA@AB@@A@A@A@CBC@@@@@@B@@@@BBBB@@B@@BA@A@C@@@A@A@@BA@A@@@@@@B@B@@@B@@AB@@BB@@@@AB@B@@A@A@@@AB@@CBA@@B@B@BBB@@ABAB@@C@CA@@@@BFBB@BA@@@A@@@@A@@@@A@@@@@@@AB@@@@CC@@@@A@@@@BA@@@@@AAAA@@@B@@A@@@@@ABA@@@A@ABA@A@@@A@@@@A@@CBA@A@@@@@A@@@A@@AA@EBC@@@@@AA@@A@@@@@A@A@@@@@A@@@A@AA@@@@A@@@AA@@A@A@@AA@A@@@A@@@A@@@@@@@ABA@@BA@@B@@AB@BA@@@ABA@@@@BA@@@A@@BEBA@AAAAB@@A@@@AA@@@@BABAB@@AAA@@BAB@@AB@BA@@B@@@@@@C@AACA@@AB@@@D@@@@A@@BAA@A@@@A@@@@AB@@CA@@@B@@@B@@@B@@@@A@AAAAA@@@@BADA@A@AB@B@@@@@B@@@B@@@BABA@@@A@A@@BADA@@B@@@BABABA@ABAB@BB@DBDBBBB@BD@@BD@BABABCBCDAD@@@@A@@@AAABAA@@A@@@AB@@ABAA@@@BA@@B@B@@@@ABAB@B@@@BA@@@@B@@AB@@@B@@AB@BB@@@@B@@@B@@@B@F@@@BB@BD@@@@AB@@A@C@A@@B@@@@@B@@@D@FA@@BCBABBB@BCBCD@B@BA@A@A@@BAB@@@BBB@@A@@B@@A@@@AB@@@B@BA@@B@BBDAB@B@@CB@@AD@@@DA@@B@@@BAB@@@B@@@@@BAB@@ABCAA@@@A@AB@@A@@@@ACBA@@BA@@B@BABABAD@B@D@@@BAB@@ABAD@@@B@@@@A@@B@@AB@D@@@B@BA@@BAB@B@@ABA@@BAB@BBB@@@B@B@@B@AB@B@B@B@DAFABAB@@A@@D@@@B@@ABABABABA@A@@@A@C@@@A@A@EA@@@ACA@A@@@@A@A@@BAB@@A@@B@@ABAD@@A@@BCB@@CB@@A@@B@@@B@@AB@BA@@B@@@B@@A@@BA@@B@B@B@@@@@BAB@BAB@@@@BD@@DBB@@@@@BF@@BD@@@B@@BBB@BB@@BB@BDB@BBB@@@@@B@@D@@@B@@@B@@BBB@@BB@@@BBBBBBB@@B@@BBBDBB@@@@BAB@B@@@BBD@BBBBB@B@BBBBBB@@@DBB@@@@BBB@@@BAB@@AB@BB@BDBBBB@DDD@@@@BDBD@@AB@@A@CA@@@@A@@@AB@BC@A@@@A@A@AAA@ABA@@AA@CC@@AAA@@@AA@@CE@@@@A@C@A@A@@@@@A@AB@@@@AB@@CBAB@BAB@B@@@@FDDBDB@@@@BA@@B@B@@@DBB@B@DD@@@@BB@BBD@@@B@@@B@@@@BB@@@B@BD@@BB@@B@@BB@@D@DBDABAB@@@BBB@D@@B@B@@@BD@B@B@@B@@B@B@B@B@@@BAD@BAD@B@@@FC@ABA@@B@@BB@BBBD@B@@@B@BBDB@D@BBBB@@BA@@B@@@B@@B@@DC@@@@B@@BBBBBBB@BBB@@@BCB@B@@@BC@@@@BAD@@@DAB@@@B@B@@AB@B@@AB@BA@AB@@B@BB@B@B@B@B@@BB@@@@AB@@C@CAC@A@@@A@AAA@@ACBAB@@@@A@A@@@A@@BABA@CB@@@B@D@@CB@B@B@@@BA@BB@B@@B@@@D@@@B@@B@B@@BH@D@@@B@@@B@@@@BB@@B@@@B@B@@A@@BA@@@@B@B@@@B@@@@AB@@@B@@@BD@@B@B@@@@@@@@DB@@@@@B@B@@@BB@@@@@B@@@BCB@@@@@B@@BBB@BB@@A@ADA@@@@@BB@BB@BB@@AB@@@@@B@B@@@B@@@@@BB@@@B@@BB@@@B@BAB@@@B@@@@D@@@B@@@B@BB@@B@@@@B@@@B@@@B@B@BADA@@@@B@@BB@@@@@B@B@@AB@B@@@BA@A@@B@@BBD@BA@@@@B@B@B@BB@@@A@@BA@A@A@A@A@@BB@@B@@AD@@A@AB@@B@@B@BA@@B@@@@BBA@@BB@B@@@B@@A@@BB@@@B@BB@BD@@B@@@@@DD@@@BBB@@B@@BB@BAB@@ABB@ABC@@B@B@@@B@@@BA@@B@@BD@@@@B@@@BB@@BDA@@BBBBA@@@BB@B@B@@@B@@@F@@AB@@BBB@@@B@B@@@@@B@@@B@B@B@@@B@B@@@@@B@B@@@@B@D@B@@AB@@@@@BB@D@D@B@@BB@@@BB@@AB@@@@AB@@BBAB@@@B@@B@BBB@@@@BF@B@@@@@BD@B@@A@CB@@@B@B@D@@BBB@@@BB@@DB@@BB@@AB@@B@@@B@@@B@D@@BB@D@@@B@@BB@@B@B@BB@BB@DB@@@BA@@B@B@@@@BBD@@@@@BB@@D@B@@@@A@ABA@@F@@BBB@@@BBBB@@@B@@@@@BAB@BB@@BBB@@@BB@B@DB@@BD@@@BB@BFB@BBB@@@@@BDB@@@@AB@@@B@@@D@@@@@B@B@B@@@B@B@@@@@B@@AB@B@@@B@@B@@B@@B@B@BB@B@@B@@@BB@@BB@@AB@B@B@B@@@@@D@BAD@@@B@@@B@B@BB@B@@@@BBDB@AD@@@B@@@B@BB@@BBB@@BBBBA@@DB@@@@DABBBA@@@AB@B@@@BA@AB@B@@@BA@@BA@B@@BB@BB@BB@@@B@@@@BB@@DBBBB@B@@@B@B@@@B@@BB@@B@@@B@B@@B@BB@B@B@@BB@B@@B@B@B@BA@@@AB@B@B@F@B@@ABBB@BBBB@@@D@@@BD@B@@@B@@@BA@@BB@@BB@@BBB@@B@AB@BA@@D@BB@@B@D@@@B@@AB@@@@@BAAE@A@@AA@CBA@@AC@@BCBCBAB@@AB@BA@@@A@CDA@@@@@A@C@AAA@@B@@A@@BABABAB@@@D@BAD@DAB@B@B@B@@@B@@@BABAD@DC@@@A@@EECA@A@@@ABE@A@@AA@AA@@A@@@A@@@A@@ECC@C@A@ABE@CAAA@@BA@A@@@ABA@@BAB@@@@@@@BB@A@@B@@@DB@@BBFDB@B@D@BAB@@@BA@@BAB@BA@@@AD@BA@@B@@A@@B@@A@A@AB@BABAB@@@BB@@B@B@@@@B@BBB@B@@B@@B@@@B@B@@@B@B@@@B@@AB@B@@@BBDB@DB@@B@@@B@@ABA@@@A@@@@@@BA@@@AB@@@@ABA@@@AB@@A@@BA@A@@@@BAB@@@BAB@@@B@@A@@B@@AB@@A@@@AB@@@B@@A@@@@@@@@@A@A@@B@@A@@@@@@@@@AA@@ABA@@@@AAB@@A@@B@@AB@@A@@BA@@BCB@AA@A@@@A@ABA@@B@B@DBBB@@BB@@AB@B@BBD@@@BAB@@@B@@BB@@AB@BB@@@@D@@@B@BAB@@@D@@@@@B@B@H@@@BAB@BA@@@AB@B@@@@DD@@BBB@B@@A@@B@B@@@BB@@@@BBB@BBBBB@D@@@B@@@B@@@BAB@@@B@@@BA@@B@@@B@@AB@@A@@@A@@@C@A@A@@@@@@BA@@AABA@@@@@A@@B@@AB@@@@A@@@@AC@@BC@@A@@AA@A@@A@A@@@A@@@A@@@A@@AA@A@A@@BA@@@A@@@AAA@A@A@@AAB@@A@@B@@A@@@@B@BAD@BAB@@@BABA@@@A@@AAAE@@@AAA@A@A@A@A@A@A@A@@@A@@AA@@A@@@@A@@@@@@A@@AA@@@A@@@@A@@@AAA@@@@@AA@@@AA@@@@AB@@@@A@@A@@AAA@@@AAACAAAA@@BAB@@@CC@ABA@@@A@@AAAC@AAA@@@A@@AA@C@@@@BABAB@B@F@B@B@FABBBABABAB@@AB@BA@@@A@@@A@@A@A@B@B@@A@@B@DA@@@A@A@@@@B@B@@@@@AA@AAAB@BC@A@A@@BA@A@@BABA@@B@@@B@@B@@BBB@@AD@BA@AB@@@@B@@A@@BBBDD@@@B@@@BAB@BB@@B@BBDBBBBFBDBD@BB@@D@B@@BB@B@@A@@BABA@AB@D@B@BADA@ABB@@@B@@@@B@B@@@BAB@@@B@B@BA@@@AA@@@A@A@A@@A@A@@@CBA@A@@@@@@@AD@@@B@B@B@B@B@@@D@BA@@@@@@@@B@B@@ADA@AB@@@@@@@@A@@@AB@@@BB@B@@B@BA@@B@@AA@@AB@@@B@B@@@@A@@@@BA@@@A@@@@@@@A@A@A@@BA@@DC@@@@B@@B@BB@@@B@@@BEBAB@BABC@@BAB@@@@A@@@AB@@A@@A@BA@A@@@A@A@@@@BA@A@@@@A@@@@@BA@@BA@@@@@@AA@@@@@A@@@@B@@@BB@@@@B@@AA@B@@@@@D@@@B@@AAC@ABC@AB@@A@@@A@@AA@@A@@@@AAA@ACA@@@AA@@A@@@@AAA@@@AA@A@@A@@BA@AA@@CAAA@@A@@BA@@BAD@@@B@@@@@@@B@@A@AB@@A@AB@@@@@@ED@@@@@BA@@B@@A@@B@@@@AB@BA@@@@@A@@B@@A@EBC@ABA@@@A@@@@@A@A@@@AB@@@@A@@@A@@@CA@AAAB@@@@A@@@BB@@@@AB@@@@@BA@@@@B@@ABA@@BC@A@A@@@AB@@@B@@B@@B@@A@A@A@@B@@@@AB@@A@@BCBA@@@@@AA@BA@@@@B@AA@@@A@@@A@A@@@A@@@BA@A@CDABA@@@@A@@@AB@BAA@@A@@B@DCB@@@@@B@B@@@@BDA@@@AA@@A@@DA@@B@BAB@B@@@BBBB@@B@@@@B@@B@@@@@@A@@DBD@@@B@@A@@@C@@@@B@@@B@BA@@@A@@@@@@B@@@@@DA@@@@BA@@@@AA@@A@@@A@@AB@@AA@A@@@@A@@@@B@@@B@@@@@AA@@BA@A@@@A@@@@@@@@@A@@@AA@@@@A@@@@@@@@@@@@@A@@@@DAB@@@B@@@@@@A@@@@@CB@@@@@@AA@@@BA@@@@@@A@AA@@@@@A@@BAB@B@DB@A@@@@@A@@@@@A@AB@BA@A@@@CB@D@@@@A@@@AB@@@B@@@@@@A@AB@B@@A@@@AAA@A@ABCA@@A@@A@@BA@@@@C@@@@A@A@A@@@@@B@@A@@B@B@B@@@@@D@@A@@DA@@BC@@@@AA@@BA@@B@@@AAA@A@A@@@@AB@@ABAB@BAB@A@@A@AA@AA@A@@A@@@@@A@A@@@A@@A@@@@BAA@@@@@C@@@A@@A@AAACA@B@@A@AB@@@@@BA@@BABA@@@A@@@@AA@BA@@@A@A@@AA@@C@E@AB@@@@A@@@@B@@A@@@A@A@@@A@@B@BA@CB@A@@@@@@AC@@A@@AABA@A@ABA@@@@@@@@A@@@@ABA@@@AAA@A@@@@@@@A@@@A@@CAA@@A@@@A@CAAA@@@@@A@@@@@AA@AAG@A@AAA@@AB@B@BA@@@ABA@@AA@@BA@ABB@@@A@@A@@@@@B@@@B@@@@@@@AA@@@A@@@ABA@@BA@@@@A@AB@A@@BABAB@B@D@BAD@BC@ADE@ABABG@@@@@A@@A@@@@B@@@@A@@@@@A@AD@@A@@A@@@AA@@@@BA@AA@@@@ABA@@@@BAAAB@BAB@@@@AAB@BC@@@@A@@B@@A@A@@@@@@C@@@@@BA@@@@AA@B@@CBADCBA@ABC@@@AB@@@B@@AB@@BB@@@BABAA@@A@@BAB@D@@@BB@@@AB@BA@@A@@A@@BA@@A@@@@AB@B@B@@@@@AA@@BA@@AA@@@AB@@@B@B@A@AAB@@@@@B@@@B@D@BBDBBB@@FBB@@BB@@@B@BCBA@@@AD@@ADADABA@@AA@@@A@@AA@A@@@A@@@@B@B@@@@@@@AA@@@A@@@@@@@AB@FBB@B@B@DB@@@BB@@@B@@@@A@A@AB@@@B@BA@@BA@@@@BBB@@BB@@@B@B@@@BBB@B@D@HAB@B@@@B@@@B@B@D@@@@@BA@@B@BA@@@A@BA@A@@@@A@A@@@@D@@@@@@A@@@AD@B@B@@A@@A@@@@@BA@@@AB@@A@@B@@@B@@@@A@@A@AA@@@A@@@@@A@EBCBA@A@CBC@@BCBCDA@@BCBC@@DA@@B@B@@AFA@@@AA@@AAAA@@@AA@@@@AAA@@@AAAAA@AA@@AB@@A@@@@@@@@ABAB@@AD@@@@@BAB@BADC@@DA@@@@A@@AA@A@@AA@C@A@A@A@A@A@@@A@@AAAA@@A@@@@@AC@A@AAE@AAAAA@AA@@@@A@@@A@AB@@@@A@CBAB@@@AA@AAA@A@AA@@@@@AB@@A@@AA@A@C@@@@DB@@@@B@BA@C@@B@@A@@AC@@AAACA@AA@A@@@AAAA@@@AB@@CA@A@@@@A@@B@B@@@@A@@@@B@@@@CBAA@@A@@@BB@@@B@@@BAB@@A@@BA@@@CB@@A@@@ABAB@B@AAAA@AB@@@@B@B@@B@@A@A@A@AB@@A@A@A@@@@@GBA@A@A@@AC@@@@AB@@ABAD@@ABC@@AAA@A@AAAAA@A@@AA@CBA@@@AAAB@AA@@@AAAAA@@AA@C@AACA@AAB@B@B@BA@@@C@@BA@C@A@CAA@@@@A@@AAC@@BA@@@ABCBCBA@A@C@AA@@AACAA@AAA@@@@@@@AA@@@@B@@@B@@@EA@@@C@@A@@A@@A@@A@AC@@@@A@C@@CAA@A@@@CA@@@A@A@AA@@CB@@C@@@A@@@A@@@AB@@@AA@@C@@@@C@A@@A@@@@A@@D@@A@AB@@@@C@@@@@@@A@@B@@@@A@C@@@@D@@@@C@A@@D@@C@@@@B@@A@@DB@@BA@A@@BBBC@A"],"encodeOffsets":[[111594,35683]]}},{"type":"Feature","id":"610203","properties":{"name":"印台区","cp":[109.099974,35.114492],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@E@A@A@@@@@A@ABA@@@A@A@@@ABA@ABG@@@@@A@@AA@@A@BA@@AAACA@@AABA@A@A@AA@@A@@A@@AAAAA@@@@CBAA@@@AA@A@@@AA@AA@AAA@A@@A@A@@@C@A@A@A@E@@BAAC@AB@@@B@B@B@BB@@@@BA@@D@@ADAB@@@B@B@@ABABCH@B@B@@A@@@@BA@A@A@@@@B@@@B@@@@A@@B@@@B@@AB@B@BA@@@@@@@@C@@@@@@@@AB@@@@@@@A@@@AA@@@@B@B@@ABA@A@A@@A@A@@@@@@A@@B@@AB@@AD@DA@@@@@@@@C@A@A@@AA@@C@@@@AA@@@AB@@@B@B@B@B@B@@AB@AAA@@@AA@@@ABA@C@A@A@@A@A@CAA@@@@@@A@@@@@A@A@@A@@A@@@@@A@@@@@@@A@@@@@AB@D@@@BA@@AA@@@AAAC@@@@AD@B@@A@@A@@@@AA@@@BA@@@@@A@A@@BBB@B@@A@A@C@A@A@AAAAAA@@@@A@@BAB@AAABAA@@@A@@AABA@ABA@@@@C@@AA@@@@@@ABAB@@@@AA@A@A@@AAA@@@A@C@@@A@CBABA@@AA@CAACA@AB@@BB@BA@BB@B@@@B@@@B@@@@@@@@A@AA@@A@EBAB@@@@@B@@@B@B@B@B@B@@@B@@@@@AA@@@@B@@AA@@A@A@@@A@BE@@A@A@@@E@C@AA@A@A@@@@@AAC@@@@BAB@@@@AA@A@@@@@BABAB@DE@@@@E@A@@@AA@@@B@@A@@BA@@@AAA@@AA@@@AB@@A@A@@A@@AA@@@@@@A@@B@@C@@BA@@B@B@@AB@@@B@BA@@B@@@B@BAB@@@BB@@BBB@BEB@@AAAAA@@@CBA@CBC@GB@@@@@A@@BABABAB@@@@@AA@C@C@@@@@AB@BC@A@@@ABA@AB@@@@A@@AC@@@@AAA@@@@@BA@@@@@AE@C@@@A@AA@@A@A@C@@@@AA@AAC@ABE@@@A@@@AA@AA@E@A@A@A@@A@ABA@ADA@CAA@AAA@@A@@AACAA@AAAA@@A@@AAA@AA@@@@@A@@BA@@@@@@@A@@BCD@B@B@@AA@AA@@A@@A@@@@@AA@@@AB@@@@@@A@@@@@AAA@A@@@@@@@A@@A@@AA@@@@@AA@@A@@@@A@AC@@AAA@A@@@A@ABA@@@A@@@@@@B@@A@A@EDAB@@CAA@AAAA@AACB@@A@@B@D@@AA@@A@A@@@ACAA@@@C@A@A@CAA@AAA@@A@C@A@A@AB@@A@@@A@A@A@A@A@@@AA@AAA@@@@AA@AAAABA@@B@AA@@B@@A@@BA@@@@@@@AB@@A@@B@@A@@@@BAB@BA@A@AAAAA@@A@@A@@EA@@AAAA@@@@A@@@A@AB@@ABA@@B@@@B@@A@A@A@CACACAA@ACA@@@@A@@A@@@A@@@@@A@@@@@AAA@AB@@@@A@@B@@@@@@ABB@@@@@@B@@A@@@@A@@@@AB@@A@@@@@A@A@A@@@A@AAAC@@AA@AAAAG@A@AAA@@C@CBA@A@AAA@@AA@@@BABAB@@AB@@@@A@@@@@AA@@@A@ABABA@@BC@A@@@A@@@A@A@A@EA@BABA@@BA@@@A@@BAB@@ABA@A@@A@@AA@@@AA@@@@A@A@@@ABA@@A@@@A@ABA@C@C@@BA@@D@@ABA@@@@BAB@B@@BA@B@@@@@B@@AA@@A@@@@B@@@@A@@@@@@@A@@@@@AA@@A@ABABA@@@C@A@@@@@H@B@@B@@A@A@A@C@@@@@AB@@@@AA@@AAA@@AA@A@A@CAAA@B@@A@@D@BAB@BC@@B@B@@B@BBB@@B@@B@@BB@BA@B@@@@@B@@B@@@B@@@@@@@@BB@@@@D@@@@BBBAD@@@BA@@JBBBA@@@@@A@@@D@B@BB@D@BB@@@@@@@AA@@@ABA@@@@@B@@@B@@B@B@@@BBBBA@@@@B@@@@@B@@@BA@@@@B@@A@@B@@@BA@@B@@@B@B@@A@@@@BA@@BA@@@@@ABA@@B@@@@@BA@@B@@AB@@A@@@AB@BA@@@A@@@@@AAA@@B@@@@@BA@C@A@@@@@@@BB@@@@C@A@E@@@@@AB@@A@A@A@ABCBA@@@CBC@@@@BA@@B@@B@@@@@B@@@B@B@@@@@B@@A@@@@@AD@BA@@B@@B@@BB@@B@@@@BA@@@BB@BBB@BBB@@BD@@B@@BBB@@@HAB@@@BD@FF@@B@@B@@BB@@B@B@@@BA@AB@DAB@@A@ABA@@BA@ABABA@@@B@B@BB@@@B@@@BBB@@B@@B@BBD@D@@@D@FAB@BAFBB@@BB@BBB@@B@@BB@B@B@BBB@B@B@@@D@B@BAB@B@BBDA@@@AD@@@BA@A@@BA@@B@@@@A@@@A@@@@@@BA@@@AB@@AB@@AB@D@B@@AB@@B@A@@BB@@BBB@@A@@@B@@B@@@@@@@@@@@@B@@B@@@@@@B@@B@@@@AB@@@@@@@@ABAA@BA@@BA@C@A@K@A@A@A@AB@@A@A@AA@@AB@@CB@@A@@B@@A@@B@AC@@@A@@@@A@@@AA@@BA@@@@@@@@A@@C@@A@@AAA@@@AB@@@BA@A@AAAAAA@A@A@AAA@AA@CAA@@@@@A@@@C@@@@AAAAAB@A@@A@@B@@@@AA@@@@@@@AA@@@A@@@AA@@B@BA@@B@@@@A@AD@@A@@AB@@A@@@A@@@A@@@A@@@AA@@@A@@A@@A@@@@BAD@B@B@@A@@@A@CAAB@@@@@B@@@@@@A@A@@@AB@@BDAD@B@@@@@B@@@B@BAD@@@B@@@@A@@@CBAD@B@B@DA@@@@BAB@BA@@B@@AB@@A@@D@@@B@BA@CDABA@@BA@@@A@@B@B@@A@ABABAB@@AB@@@@@@AB@@AB@@BBABAD@BAB@@AB@@@@A@@@@BA@BBABA@@@@@@B@@D@@@@BA@@B@D@B@B@BB@@@BB@@BB@B@@A@AA@@A@A@AA@@@B@@BB@@D@@BD@@@@@@BCB@@@B@@B@@BA@@@AA@BA@@@@B@@@@@@@D@@AB@@@B@@@@@BAD@@CA@@@@ABA@@B@@BB@BA@@@AB@@@@BB@BA@@AA@@@AB@@BD@@@BBD@B@@@B@@@BAB@@CB@@@@BB@@@B@@@@ABAA@BA@@B@@A@@@AAAA@@@A@@@@@@A@@@@@@A@@AA@A@@@@AA@AA@@BA@@@@@A@A@@@@@@B@B@D@BAB@@@@AB@@A@AAA@@B@@@D@BBB@BB@@B@@AF@@B@@B@@@BA@AB@@@B@@@B@@@@@@A@A@A@@@A@A@@@A@A@@@@@A@@@@@@AA@@A@@@@@@@B@@@BA@@@@@A@@@CB@@AAA@@@@@A@A@AB@BA@@B@@@@A@@@A@AB@AA@A@A@C@@@A@@@A@@BA@@@A@A@@AA@@@@A@@A@AB@@@@AA@A@@@@AB@@@@A@AB@@@@@BB@@B@@@BAA@B@@@@AB@@B@@@@BA@@@BBA@@@@@A@@@AAA@@@@@AA@@@@A@@@A@@@@@ABB@@B@@@@A@@@A@@@AB@B@BA@@@A@AACC@@@AB@@A@@A@@A@@@AA@@@@@A@@@@@A@AA@@@@@A@@B@@A@@@A@@A@A@@A@@@@B@@A@@@@A@@@@BAB@@A@@@@@@@@A@@@AA@A@@@@@AAC@@@AB@@C@A@AAABABABAAEBA@A@E@A@A@ABAB@@@@@DBB@@@B@@BB@BBDBB@@@B@@AB@BDD@@A@AB@@BBBBBDBB@@B@BB@@@BB@@@@@BA@@@@BB@@B@@B@@@@BB@B@@@B@@B@@@B@@BB@@@@@@@@B@@B@@@BB@@@B@@@B@B@B@B@B@B@BBB@B@@BFBB@@@B@@ABAB@@A@ABC@ABA@@@@@@BA@@@@BA@BB@@@B@BBB@B@@@B@@AB@@@B@BBB@@@B@@@B@@@B@@@B@BB@B@@BB@@@AD@@BD@@@@@B@@A@@BA@@@@B@@@@ABBB@@AB@@@@@@@B@B@D@@@B@@@BA@@BA@@@A@@@AB@@A@@@A@AB@@A@@@A@@@C@A@AAAAA@AA@@@@AA@@A@A@@@@BA@A@AA@@CC@@@@@ABA@@B@@ABA@A@@@G@A@A@@@@@C@@BA@A@A@@@C@@A@@ABA@@AA@@@A@@BA@A@@AC@A@ABA@@AA@@AACAA@A@@@AB@B@B@@@BBBA@AD@@AB@@@BA@@BA@@@@BA@BB@@@@AB@BB@@B@@@@@@@@@BA@@@@B@B@@@@@@@@@BA@@@A@@B@@@BA@@BA@@@@BA@@@A@AB@@A@AB@@@@@BAB@@@BA@@B@@AB@B@@A@@B@@AB@@@@@@@B@@AB@BA@@@A@@@CAA@AC@A@@@ABA@@@A@@@A@A@@@A@A@@@AA@@@@AAA@A@A@@A@A@@@AA@@A@ABABA@@B@B@BA@@@@BA@@@ABC@@B@@ABA@AB@@AB@@A@ABC@A@A@ECAA@@CA@@A@@@@BAA@@@@@@A@AB@@AB@B@@@BAB@@BBDBF@BAB@D@D@FD@@@B@@@B@@@BB@@BBB@@@BAF@B@@@BDBFF@@@B@@CDC@ABAB@@A@@@A@A@A@A@CBC@ABC@@@A@ABABAB@@@BA@@@BB@B@D@B@@@@CB@D@B@@ABA@@BA@ABADAD@@BD@@AB@DBB@@@BBFABBA@@B@@@@BB@@@DB@B@@@@B@@@B@B@B@B@@@BBB@B@B@@@@BBBB@@BBB@@@@@BAB@@A@@@@@@D@@@@@B@@@B@@A@A@@@@AA@A@AB@@@B@BB@@D@@@B@@@BBB@@@B@B@@@@@DBD@BB@@@BBB@@BB@DBB@BBD@@@BDB@@@BAB@B@@@BA@AB@BA@@B@BB@@D@B@BA@@B@B@BBB@BBBBD@@@B@@@@BB@@B@@F@B@B@DA@@@@@@@BB@@B@@BBAB@@BB@BB@@@B@BAB@@@B@B@@@@@@B@BB@BB@@@BB@@@B@D@BB@@@@@A@@@@@ABAB@@AB@BABA@A@@B@@@BA@@@@@@BBBAB@@@B@BAD@B@B@B@BABB@@B@@BB@@@BAB@@AB@@@DA@@BCBB@@B@@@BBB@H@B@F@B@BAB@BAA@@@@@AAC@@A@@CA@@@@@A@@AA@@AA@@AA@@A@A@@@AAA@@@AA@@E@AA@@B@@@AA@@A@A@@@A@A@A@A@@AAAAAA@C@@AC@A@@AA@AAA@AA@@@@AC@A@AAC@A@AB@@A@@@ADABA@ADEBA@A@@B@BA@A@A@@@A@@ABA@@B@@A@@@@A@A@C@AAA@@BA@A@@@A@@BC@@@@@CB@@AB@AABA@A@A@@B@B@B@@@BB@@B@BAD@BAB@@AA@@AB@AA@@BA@@@@@A@AB@BA@@@@BBB@BA@@B@@AD@BA@@BA@A@BBBBB@@BA@@BAD@BCB@@@B@B@@@DA@@BABAB@DBB@BBBBB@@@@@@@B@BA@@@A@@B@B@@@BBB@@@FDB@@@@@DABA@AB@@A@A@ABA@A@@@A@A@@@@BA@@@@@C@A@@BC@@@@BA@@AA@@@@BA@@@@@A@@@@@@B@BBB@@@BBD@BB@@BABABABADA@A@@@A@@@C@@@@FDB@FB@@B@@@@@@ABA@@BA@@@A@A@@B@@ABCBA@@B@@A@@@@B@@@B@@@@@BBD@@BA@BB@B@@BBB@B@@BBB@@BBBD@@DBBB@@@BB@DAB@B@@ADCDAB@@@BAB@FA@@B@@A@@@A@@@@@@@A@@@@A@@@@@@A@@@AA@@@@A@@B@@@AA@@@@@A@@@@@@@A@@@@@@@@@AB@A@@AA@@A@@@@A@AAA@A@AAA@@@@A@@@AB@BA@@@C@A@ABA@@B@DB@@@A@@@AB@@A@@B@BAB@BA@@@AB@DC@@B@@AAAA@AA@A@A@@@A@@A@@@C@@@@A@A@@AAA@@@@A@@@@B@BAB@@@BAB@@@D@D@FAB@@A@ABAHBB@@@@@BA@@A@@AB@DABAB@B@BAB@FA@ABA@A@@AA@@A@@A@A@@@AA@@@@A@@CA@A@AAAAA@@@@BA@@@A@@@@B@BA@@@@@@CAA@@@@AB@@@D@@@B@@@@@@@@A@@@@BA@@B@@@B@@@B@@@@AAA@A@@@@B@@@@@@@B@@@D@@@@@@@B@@@B@B@@@DBBBBBB@@@@BB@@@B@D@@AB@@@BB@@DB@@B@BAD@B@@@B@@@@A@@@C@A@@AEACA@@AAA@@@AAA@@@C@@@AAC@A@@AA@@@A@@AA@@@AA@@C@@AC@@@A@@BAB@@A@@AC@@@AB@BAD@BA@A@C@A@@A@@CA@@@@@AAAABA@@AA@@A@@@@A@@@@@@BA@@@@@A@@BA@@B@@@@@@@AAA@@@@A@AB@@A@A@@D@@@@@@@@A@A@@@@@AAAAE@A@A@A@@BA@@D@BBB@@@@@@@CC@@BA@@B@@@@A@@@A@@@@B@@@@B@@B@@@B@ABB@BB@@@C@@B@@@@BB@@@B@@@@@@B@@@@B@BA@@@@B@@B@@AB@B@@@BB@B@@B@DB@A@@BB@BB@@@@B@@@@B@@BA@@@B@@B@@@@A@@B@@@@B@@@B@@@BD@@AB@B@@@@B@B@@@@BD@B@@@A@ABA@@@B@@BA@@@@@@BB@@@@B@@@@@@@@BBAB@@@@B@B@@@@@@A@A@BB@@@@@@@B@BAB@B@@@FBD@B@@D@B@DBB@@@B@AA@@B@DB@A@@@@@@@A@A@@FCBAB@B@@@BB@@@B@@B@BB@@@B@BB@@@@@BA@AAA@AAA@A@@B@@A@@AC@@@@BAB@B@B@BBD@B@BABC@@BAF@BAB@BA@AB@@AB@DBBBDD@@B@B@@@FBBAB@@@@@B@BADBBA@BBA@B@@@B@B@D@B@F@BD@@B@@BD@@BB@@B@@A@@@@@A@@@@@A@AB@@@@@BB@@BA@@@@B@@D@@B@@@BB@BB@@A@C@A@@BBBB@BBBBB@@BBABAB@DAB@B@D@@@BBBB@@BB@BAB@B@@AB@@@@@B@BCB@BA@AB@BABABAB@B@BAB@@AD@BAB@@ABABADABA@@BB@@AF@@B@@@@A@@@@@B@@@@BC@AB@@B@@AB@B@@@@BB@@@@AB@@BB@@D@B@@BAB@BABAB@@@B@BB@@@@BBA@@BABA@@BBBBB@@B@@@B@@@BA@A@@@@B@@B@@@@B@@ABA@@B@@@BA@@BA@A@@@@@@B@@@BA@@@@B@@@@@BA@@@ABAAA@A@A@@@A@@@@B@B@BCD@BAB@@@D@@ABAB@B@B@@D@BBB@B@@B@@ADAB@BCD@@A@@@@BA@@@AB@@@@ABAB@@AB@@@B@@@@DB@@@B@B@B@B@B@B@@A@CA@@@@@B@BABAD@BBB@B@@@@BA@@@BAB@@@@@B@B@D@@@@B@B@BA@@@A@@B@@@B@@@@@@@B@@@B@@@@@B@B@@@DA@@B@@@@B@@B@@A@@@ABAB@BA@A@@@A@@@@@@BAA@@@BA@@B@@@B@@BBA@ABA@A@@B@@B@@DB@@@@@B@@@F@B@B@D@@@BBB@B@@B@B@B@@@@A@@@A@A@@BA@A@@@A@C@@@ABC@ABA@A@@BC@A@@BC@AB@B@B@B@@@B@@@BABABC@@B@B@B@B@BD@@@@B@B@D@@A@@BCBA@@@@B@@BB@A@@BAB@@@B@@AB@B@BAB@B@D@@@@AB@B@B@B@F@@@B@BD@@@DAB@@@B@@B@@@@@B@B@@@B@@@B@@B@@BB@@B@@@F@B@@AD@D@D@B@D@H@DA@@B@@@@@@BDBBB@@@BB@@B@@D@@@@BBAB@BA@AB@B@@ABBBAB@B@B@B@@@@@B@B@@@@@B@@@@@BA@@@@B@@AB@BA@ABA@@BA@@@@@@@AB@@@B@@A@@BB@@BB@@@B@@B@@@@@B@@B@B@DBB@B@@@B@@@@@B@@AA@@@@@@AB@AC@@@@@A@@B@@A@@@@B@@@BABBB@@@@A@@BAB@@CB@@@BA@@BA@@@A@@BA@@@@BA@@@AD@DC@@@@B@AAA@AAB@@@BA@@BAB@@@@ADAB@@@BA@@B@D@BA@@B@BAB@@@@B@@@@B@B@B@D@@@DBDBB@@@@C@@@A@@@A@A@@AA@@@AB@@AAA@A@@@@AA@@@@@A@A@ABCDC@@@A@@@A@@@@@AA@@@BG@@@A@@@ABABABA@ADA@AB@BBBABA@@BA@@@@@A@A@@B@DABB@@@@@@@@@A@AB@@E@@BA@AA@@@@@@A@@B@@@@@@@@@@A@@@A@@@@@@B@@@@A@@@@BCB@J@@A@@B@B@@@@@B@B@B@@A@@@@@A@@@@AA@@@@B@@@@@@A@@A@@@@AB@@@@@@@@@A@@@@@B@@@B@@@A@AAB@@@B@@@A@@A@@@@BC@@B@B@@@@@@@B@BBBAFB@ADBBA@AB@@A@AB@@@@@@@@@BB@A@@@@@@@AB@@@@AB@@@@AB@@B@@@@@@@BAB@@B@@@B@D@@@BA@A@@A@@@AAB@@BB@B@@@@A@@@@@A@@AA@@BA@@AA@@AB@@@@AA@A@@@A@@@@B@@@BA@@@@AAEB@@@ABA@@@A@@A@B@@ABAB@@@@ABC@@@@B@@@BB@ABA@@@A@@@AA@@@B@B@@@@@BA@@@A@C@A@@@A@B@@B@@B@@@@@@@B@@BB@@ADAB@@@@B@BB@@BB@@B@@@@@AB@@BB@@BA@@BA@@B@@B@@B@@@BA@A@A@A@@@@BA@@@@@@@B@@B@@@@A@AFA@A@@@@@@@AA@@A@A@@@@BB@@B@@@@A@@A@@AB@B@B@@ABC@@B@@@@E@@@@@BB@@@@@@A@@@AB@@@@BBDB@@BB@@AB@@A@B@BB@@@@@BABA@@@@@B@B@B@@@@B@@@@@B@@@@C@@@@B@@@@B@@B@@@@BBB@@B@@@@CBC@@@@@@B@@@@BAF@@B@@@AB@B@BB@@@@@B@@@@A@@@@@@@AB@@A@@@@@@@B@B@BBB@@B@BBB@@@B@B@B@@A@@AA@@@CBA@ABA@@@A@@@@BB@DA@@BB@@@BA@@B@@@B@@@@@@B@D@@@B@@BB@@B@B@BF@@B@@A@@B@@@BBBB@BB@@B@@BA@@@A@@@@BBB@B@@@@B@@@B@BB@@C@@@@@AB@@B@@ADH@@@@AFB@@@D@@@@BC@@B@@A@@D@@BAB@@BBBG@A@@@AD@@@BGAABC@C@@AAA@@@@AA@BA@A@@@@@@@@@A@@BAB@@A@AA@B@@@B@@@@@@@@@@B@@BB@A@ABA@@@A@BB@@@@@B@@@@@BB@@B@AC@@@@B@@B@BB@@A@@D@@@@A@@CA@@@A@@A@@A@@@@@@AA@@A@@AA@@A@@@AA@@@@@@A@@@A@@@A@@@@@A@@@@B@@@@A@A@AB@AA@@B@@@@@BA@A@@@A@A@A@@@A@A@AA@@A@A@AA@@@@A@@@@@A@@@@@A@@@@@A@@@C@@@A@@@A@AA@@CAA@ABA"],"encodeOffsets":[[112068,35950]]}}],"UTF8Encoding":true});}));