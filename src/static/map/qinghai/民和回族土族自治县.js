(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('民和回族土族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"630222","properties":{"name":"民和回族土族自治县","cp":[102.830892,36.320321],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@B@BBB@@AB@B@@BB@@BB@@BBB@BA@@DA@@B@B@B@BAB@BC@@@A@A@AAA@A@AAA@C@@@@@@@@B@@@@@B@@@@@B@@@BB@@B@B@@@@A@AA@@@@@@@@@AA@@@@@A@@@@@@A@@@@A@@@@A@A@A@@@@@@A@@@@@@@@BA@@DA@A@@@A@E@@@@@@@@A@@@@@@@@@@@A@@@AB@@A@@@@@@@@@AB@@A@@@@@@@@@@BABAB@@@B@@@@@B@@B@@@B@@@@@B@@@@BBBA@A@EB@@@@@@@@@@@BA@@B@@ABA@ABAB@B@D"],["@@AA@@A@@A@@AA@@AAC@A@@@G@E@CAEACAA@CAEBCBEAA@ABEBE@E@CBA@ABE@CBA@EAA@EAE@AAAACCACCAAAAAA@A@A@A@A@E@C@A@C@AA@ABA@A@A@@AAAAC@AAA@@A@@@A@@@AB@@AB@@@@A@@CCEEAA@A@A@CA@@AA@C@AAA@AA@CAA@AAABC@C@@AA@@@A@@AA@CCEA@@@A@A@A@@@A@@@@@AAA@A@@@C@E@A@AB@@A@A@@@AA@@@A@@@ABCBC@@DEBA@C@@AACCAAA@AAA@AA@@@A@ABA@C@CAGAC@AAEAEAA@E@A@CAA@AAA@@AAA@@@A@@@AA@@@AA@@@A@@@@@A@@@A@@@A@AAAACAC@EAEACAAACE@AC@AACAA@AA@@C@ABE@CBABCBABA@A@A@A@A@AAA@A@A@AAA@@@AAAA@A@CAA@A@A@@@ADCBA@AB@B@B@D@B@D@@@BA@AAA@AB@@A@AB@@A@A@A@@@C@AB@@@B@D@F@B@@@@DBB@BBBF@B@B@@@@ABA@C@@@AB@B@F@D@B@@ABA@@@ABA@@@AB@B@B@@@B@@@@A@@@@BABABCBA@@@CBABA@@BABA@AB@@@B@@@HBLDB@B@BA@@BC@A@@@@B@B@@@BAFA@@B@B@B@D@FAL@B@B@@AB@@CB@@ADA@ABAB@@@@AB@@AA@@A@@A@@@A@AAA@ABA@A@CBA@A@AA@@A@@@AA@@@@AC@@CC@@AACCCAAC@@AA@ABE@CBABCBAFED@BAB@BA@@BCBA@ABC@C@ABCBABAB@D@AEAAAAACAA@AACAAAAECCEACAAACACCCAACC@AAC@C@ABA@@@C@A@A@CACAACCAAAC@C@@@C@C@CAC@CAE@AAC@ABA@@DCBADCBA@C@CAA@C@@@CBAB@@C@ABA@@@@AAAA@A@@@A@A@A@A@@BC@@@AB@@AAA@AAA@C@@AA@@@A@@@A@@@A@C@A@@BA@A@AB@@C@C@@BAACB@@ABC@ABABA@@BA@@@C@@BA@@BC@A@@AA@AAA@AA@AA@@@AAA@AA@AAAA@A@@@@@A@AAC@@@ABC@A@@@A@@@A@@BABG@@@AA@A@@AAA@AAAAAAAA@A@CB@@CBABABABC@A@C@CAA@AA@@A@A@A@A@ABADCHCBAFCDC@A@GAE@E@CBA@GBKFC@A@E@C@CACACAAAC@@BA@C@EBA@@@A@C@CBAAA@C@A@AAABA@@@AB@BA@@B@D@BA@ABABEBE@ABE@E@C@@@G@CACAAAAACCCAA@A@A@@BCBEDA@CBC@CB@@C@CBE@CBABEBGDCBA@C@ECCA@@GCAAAAA@@IAAAACAAAEGCA@AA@AAA@@@A@@@AACA@AAA@CA@@AA@A@EC@@ECAAACAAACACAAC@A@@@C@G@C@CCCA@@A@AAC@C@A@GACDABABA@ADABA@AD@@@D@@@BBB@@@B@@AB@@ABC@ABAB@@@BAD@B@B@@AB@BA@@@A@A@ED@@CB@@ABEBABA@A@A@AAAACB@AAB@@@@ABA@@B@@A@@BA@A@@@@@A@@B@@@BA@@B@B@B@@BBBB@BB@@@BB@@@@B@@B@@@@@@@@BB@@@@@B@@B@@@@@@B@@@@BB@@@BBBB@@@@@BD@@AB@@B@@B@@BB@@BB@@@@@B@B@@@@A@@BA@@@BBA@A@@@@B@@@@ABA@@BAB@AA@@@A@A@@BA@@@AB@@A@@@@@A@@B@@A@A@A@A@@@@BA@A@@@CACB@AA@BBBBBB@@@@@B@@B@@@@BB@BB@@BB@@BB@@@@@BB@@B@@@B@@AD@B@B@@BB@@@@@BB@B@@@B@@@B@@@BB@AB@@B@AB@B@@BB@@@B@@@B@@@@@@B@@@ABB@@B@@@B@@@@@B@B@@@@@@@B@@@B@@@@@B@@@B@@@@AB@@A@@@A@@@@@@@AA@@A@@B@B@@@@@@@B@BBB@@@@@@B@@B@@@B@B@B@@B@@A@@@@@A@@@A@@@ABA@@@BBAB@BAB@@@@@@ABA@@AA@@@A@@@@@AA@@AB@@A@@@@BA@@B@B@@@@@B@@@@@@@B@@@@@B@@@B@@@@@@@@@B@@@@A@@B@BAB@BA@A@@@ABA@@BC@@@@BA@@@@@@B@@A@@@@B@@@@AB@@@@A@A@@@@BA@A@A@AB@@@@AB@@@BA@@B@@A@@@@B@@AB@@@@@@@@@B@@AB@@@B@BB@A@@B@@AB@@ABBB@@@@@@@B@@@@@@BBAB@@@B@@@@AB@@@B@@@B@@@@@B@@B@@BA@@@@@@@@B@@@@@B@@@@A@@B@@@@@B@@@@@B@@@@@@@@@BA@@@@B@@@@@B@@@@B@@@B@@@B@@@BB@@B@BB@@BB@@@@A@ADAB@@@B@@A@@@@@BB@@B@@@B@@@@@@@B@@@B@@B@@@@B@@@@@@@@@B@@B@@B@@@@@@B@@BA@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@@@B@@B@B@BB@@@@@B@@@@@B@@@@@@@B@@B@@@@B@@B@@@@BB@@@@B@@B@BBB@@@@B@@@@@BB@@BB@B@@BB@@@@BBB@@B@B@@@B@@@@@@@BB@@@@B@@@@@@B@@@@@@@@ABB@@@@BB@@@@@@@@@@@B@@@B@@@B@ABB@@@BB@@@@@@AB@@@@B@@BB@@@@@BB@@B@@@@B@BA@B@@B@BAB@@@@BD@BBB@BBBB@@B@@@B@B@@AB@BABAB@@ABA@@@@@A@@@@@@@A@@BA@@@A@@B@@A@@B@@@@@@ABB@AB@@@B@@@BABA@@@@BA@@@@B@B@B@@AD@BA@@@ABA@@@ABCD@BA@@@@@@BAB@@@@AB@@@@@@@BA@@B@B@@@@@@A@A@@B@@@@@@AB@@@@AB@B@D@BA@@@@@A@@@A@ABA@AAA@@BA@@@ABA@@BA@@@A@@@@@@BA@@@CB@@A@@B@@AB@@AB@@@@@@A@AB@@A@@@ABA@@BABAB@@@@A@A@@BA@AB@@@@@BAB@B@@@@BBBB@@BBBBBB@@@B@@BBA@@@@BA@@@A@@@@@@@AB@@@@@@@@@@@@AB@FA@@@@BAB@@@@@@ABA@B@@B@@@@ABAB@B@@@@@B@B@@BB@B@B@@@DBB@B@@@@@B@@@@AB@@@@@B@@@B@@B@@B@B@B@@@@@B@@@B@@@BB@@@@@@@@B@@@D@@@@B@@@AB@B@@@B@@@@@@@B@@@B@@@BABBB@D@@@@@B@BA@@B@@@B@@@B@@@@A@@DA@@B@@ABAAA@AB@@A@@@A@@BA@@@A@@AC@@@@@A@@@@@@@A@@A@@@@@A@@@@A@@AAA@@AA@@A@@A@@@@@@@@@@AA@@A@@A@@A@@@@@@@A@@@@@A@@@AB@@@BA@@@A@@BA@@@A@@@@BA@@@@B@@A@@BA@AB@@@@A@@@A@@@A@@@A@@B@@@@@@@@CB@@@B@@@@@@@BA@@@AB@@@B@@@@AB@@BB@@@@A@@@@@@B@@@@@@A@@@@@A@@@@@@B@@@B@@BBB@@@@BBB@@A@@BA@@@AB@@ABAB@@@@@@@@A@A@AAA@A@@BA@@@@@A@@@A@A@@@A@@@@BA@@@@B@@A@@@@BA@A@@@@B@@@@A@A@@@AB@@@@A@A@C@@@AA@@AB@@AB@BA@A@A@@@@@A@@B@B@@@@AB@B@@@BA@@@@@CB@@@B@@@@AB@@@BA@@@@@@B@@A@@@@B@@A@A@@@@@@@A@@@@B@@A@@@A@@@@BAB@@@B@B@@AB@@A@@@AB@B@BA@@@A@@@A@@@AAC@A@A@@AA@A@@@A@C@@@@@A@@@@@CAABA@@@AB@@@BA@ABA@@D@@@BAB@@@@@B@@@BA@@@@@@B@B@@@@@@CBA@@@A@A@@BC@A@A@CBA@@@AAA@@@@@A@C@A@@@@@A@CA@@A@@@@AA@@@A@A@A@@@@@A@@@A@@@AA@@AAA@@AA@@@@@AAA@@@A@@B@@A@AB@@@B@@A@@B@@@BA@@@@@@@ABA@A@@@A@A@@AA@@@A@A@@@@BA@@@A@A@@@@@@@A@@@A@A@@BC@@BA@AB@BABA@@@@B@@A@@A@@AB@@A@@@@AA@A@ABA@@@C@A@CA@@C@A@@A@@A@C@A@@@@@ABB@B@BBBB@@@BB@@@AB@DABAB@B@B@@AB@@AB@@@B@@@@@@@B@@@B@@AB@BA@@BB@@B@B@B@@ED@BA@BBAB@BBAB@B@BA@BBABB@AD@@@B@DB@@B@@@BA@@D@B@D@BBB@BBB@@@BBB@B@B@B@@BB@@@@@BBB@BB@BB@B@@@BB@@@@@@@DAB@B@B@@@@A@@B@@BB@B@@BB@@BB@B@B@@BBB@@BB@@@@@@@DB@@@BB@@BBB@@@B@B@@AB@@@@@@AB@@BB@B@@@BA@@B@@@B@@@@@@AB@@@B@B@@@B@@@BB@@B@@@@B@@B@BB@@@B@@@@B@@@@@@@B@@B@@BB@@B@@BB@B@@@BB@@B@@@@BB@@D@D@@@BB@@B@@@BB@@@@B@@@B@@@F@@@BBB@@@@@@@@B@@B@@@@@@BB@@BB@@@@@@B@@AB@@@@AB@@@@BBB@B@B@B@@BB@@B@@@@@B@BAB@B@@@@@B@BAB@@@B@BABA@ABA@@BB@@B@@@B@B@@@@@@@@@@@BBB@BB@@BBD@@@BBB@BBB@B@BB@FD@@BB@B@@@@BBAB@@@@@BB@@B@@B@B@B@B@@@@@@B@@@@@@B@@@B@@@@B@@@@B@AB@@@@AD@@AB@@@BB@@DB@@BABBBB@@@B@@B@@@@@@BB@BB@B@@@BB@BB@@@@B@@@B@@@B@@@B@@@@BB@@@DAB@B@@@B@@@@BB@B@BB@B@@B@@@@B@B@DB@@BB@@B@@B@BBBBB@@@B@BBD@BBB@@@@@@@BB@B@@@@@@@@BB@B@@@DB@@@@B@@@@@D@D@B@B@BB@@B@@@@@@@@B@@B@@@@@A@@BB@@@B@@@@@@@@B@@BA@@@@BB@@@@@@@BB@@@BB@@B@B@@@@@@@@@BB@@B@@@@@B@@@B@@@@@B@@A@B@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@@@@@@BAB@@@@BA@B@@B@B@@B@@@@B@@A@@@@@@B@@@@BA@@@@@@@B@@BBA@BBABB@@@@@@@@@@@@B@@BB@@@B@@BB@@@@AB@@@@@@B@@@@@@BA@@@@@@B@A@@@B@@@@BB@B@@@B@@@BAB@@@BBD@@@@AB@@@@B@@@@B@D@@B@@@@B@@AB@@B@@@@B@B@BA@B@@B@@@@@@@@B@@@@BA@@@@@@AB@@@@B@@@B@@@B@A@@@B@@@@@@@BBB@@@B@@B@@@@@@BA@BB@@A@@B@@@B@@@@B@@@@@@B@@@B@@@@@B@@@@BBA@@@@@@@B@@B@@@@@@@B@@BB@@@@AB@@@@B@@B@B@@@@@BABB@@@@@@@@@@B@@@B@B@@@@@@@B@@@@@B@@@@@@B@@@@B@B@@@@@BA@BB@@@@@@@@B@@@@BA@@@BB@@A@@B@@@@@B@B@@@@B@@@@B@@@@@@AB@@@B@@@@B@@@@B@@A@@B@@B@@BB@@B@@@@B@@B@@BB@@@A@@BB@@ABB@@@@A@@BB@@@@@B@@B@@@@BBB@@@@@@@@B@B@@@@B@@@@B@@B@@@B@@@B@@@@A@@BAB@@@BAB@@@@BB@@B@@@@@B@@B@@@B@@@@BB@@AB@@@@@@@BB@@@ABBBAB@@@@@@AB@@@@@@@B@@@@AA@@@@@@@B@@@BABA@@@@@A@@B@@@B@@@B@@@B@@B@@@@@@BBBBBA@@B@@@@@@@@@@ABB@@@@@@B@@@@@@@B@@B@@B@@@B@BABA@@@@B@@@@@B@FAD@BBB@D@B@@@@@B@BBB@@@@@B@@B@@DBB@@BB@BA@B@@@@@@@B@@@@@BB@@AB@@@@B@B@@@@@@B@@@@@@B@@@@B@@@@BAB@@@@@@AB@@AB@@@B@@@B@@@@@BBB@@@@@B@@BB@@B@@BD@@@@@@@@B@@@@@@@B@@@@@B@@BB@@@@B@@B@@@@@B@@@@BBB@@BB@@BB@BB@@B@@@@BB@@@@BB@@B@@@@@BB@@@@BB@@@@B@@B@@B@@B@@@@B@@BB@@@@@B@@B@@@ABB@@@@B@@@@@@@BA@@B@@C@ABA@@@AB@@@B@@@B@DB@@@@@CB@@@@A@A@@@@@@@ABA@@B@@AB@@@B@B@@@B@@B@@B@@@BBBA@@BB@@B@@@B@@@D@@@@@@@B@@@B@B@BB@@@@BBB@@@@B@DB@@@BB@@BAD@B@@@@@@B@@@@@D@@@B@@@BBBAB@@@B@@@@@B@@@B@B@@@B@@B@@B@@@@@B@@@B@BAB@@@@@B@BB@@BA@@B@D@@@@AB@B@@ABA@@@@@@BA@@@AA@@A@@AAA@@AA@A@AA@@@@C@@AA@AE@@AC@AAACE@AA@@@AA@@A@@AA@@A@@@@@ABA@@@A@@@@BAB@BAB@BA@ADCBA@@B@BBBB@@@@B@BB@@@@@@@BB@@@@@B@@@@@BBDB@@@@B@@@@@B@@B@@B@@@B@@@@@B@@@B@B@@@@AB@@@@@@@B@@AB@@@@@B@B@B@B@@@@@B@@BB@@@B@@BA@@B@B@B@B@BB@BBB@@BBBBBB@@BB@@B@@@@BB@@B@B@B@@@B@B@@BB@@@B@B@DAB@BAB@@@@@B@B@@D@@BAD@NEFABAB@@C@A@@AC@A@@BA@AAA@A@A@ABABA@@D@D@B@F@F@D@D@B@B@@CAAAAACCE@@AE@CAAAACACAAAAAB@B@JEB@BA@A@ABABC@@BCDCDCFCB@BA@A@@@@@@AA@@@@A@@@AA@@AA@@@A@@@A@AB@@A@@@AA@@A@A@@@CBA@ABA@@DEDC@A@C@CB@@A@@BA@ABC@@@AB@@AB@@@BAB@BA@AB@@ABCBA@@B@@@@B@B@@BB@@BB@@B@BAB@B@B@B@@@B@BABA@ABA@@@@B@B@BB@@B@BB@@F@B@@@B@BABAB@BB@@B@@B@@@@@B@BBBB@@@B@D@@@DAB@B@@AB@BABAB@B@D@B@B@D@B@D@B@@@BABABABA@CBABABCB@DADAHCBABABABA@CDEBCBC@A@ABA@CBABA@@@AB@DAHAHAHEFABABAB@H@DAF@D@@@HCD@BCB@BAD@DBD@B@B@BAB@BCBG@AB@BA@@B@FAD@DADCDC@ABCBABABAD@B@FAD@F@D@F@F@@@BA@@BC@AB@DAD@B@D@B@B@B@@@BA@@BA@A@A@@BA@C@A@C@ACG@CCGACAA@ABAB@B@DBB@F@BB@@DADABAFABAB@BAD@DAB@B@BA@@B@@CBCBABABA@@DA@@B@@@DBDBDAD@BADC@@BCBCBA@E@AB@@A"]],"encodeOffsets":[[[105300,37234]],[[105545,37076]]]}}],"UTF8Encoding":true});}));