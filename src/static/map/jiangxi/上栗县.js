(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('上栗县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360322","properties":{"name":"上栗县","cp":[113.795311,27.880301],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AA@@@@@@@A@A@@@@@A@@@@@@AA@@@B@@@@@BA@@@@@@@@@A@@@@@A@@@AB@BA@A@@@@@@AA@@@@BA@@@@@C@@@A@@@@@A@C@@@@@A@@BA@@B@@@@@@CDCD@@A@@@@D@@A@@@@@A@AA@@@BA@@@@@@@AA@@@@@@@A@@@@@@C@@@@A@@@AA@AB@@@@@@A@@@@AA@@@@@@C@@@@A@B@@@@@@@@@@A@@@A@@@@@@@@@@@A@@@@@@@A@@@A@@A@@@@A@@@@AA@A@@A@@@@A@@@@@@AA@@A@@@@@@B@B@@@@@@AB@@@@A@@AA@A@@@@@A@AD@@A@@@@@@C@@AA@@A@A@AA@@@A@@@@AAA@@@@@A@@@@BAAAA@@CB@@@@@B@B@@@BA@@B@@@B@@@BA@@@@@BBBBBB@BBB@B@B@B@@A@@BA@@B@@@B@@A@A@A@@@@BAB@@A@@B@@AA@@@@AB@B@@BBA@@@B@@@@BB@@@@@A@AA@@A@@@BB@B@@ABA@@@@@A@@@@@@A@@A@@@A@A@@@A@AB@@A@@@@@@BA@@@A@@@@BA@@@A@A@ABA@@@A@A@AB@AAB@@@@AB@@@B@B@B@B@@@@@@@B@@@@@BBD@@EB@@C@@@@@AB@B@@@@B@@BB@@@@@@BA@@@BB@@B@@@@@B@@@@@@@BB@B@B@BB@AB@@@@B@@AB@@@@B@BAB@B@@@BBDB@@BDA@BBABB@@@@@DBB@@@@BBB@@@@@B@@B@B@@BBBB@BBB@@B@@BBB@BB@@B@@@@A@@BA@CB@@@@CDA@A@A@@AA@@@A@@@A@@@AAA@CA@@@AA@AA@@@A@@@AA@@@@@@@@@@A@@@@@AA@@@A@AB@@C@@@AAA@@@AB@@@@A@AA@@@@@A@A@@A@A@@@CA@AA@A@A@@@@@AA@@A@@AA@@AA@A@@@AA@@AA@@A@@AA@A@@@@AA@@@A@A@@@@@@A@@@AC@@@A@@@AA@@@@@AA@A@@@A@@A@ACA@@AA@@@AA@@@A@@A@@A@@@A@@@A@@@AAA@A@C@@@AA@@A@@AA@A@@@A@@@@A@AA@@AA@@@@@@A@@A@AA@@@A@@@@@@AAA@A@A@@@@BB@@@B@@@@@@BA@ABAB@@BD@@@B@@BBB@@BB@@D@@B@@@BDB@@B@@ABA@AB@@@BB@@@@B@@B@@@B@@BB@@@@@@@@B@@A@@@@@@@@@@B@BA@@@@B@@@B@@BB@@@B@@@@@B@@B@@@BB@BBB@B@@B@@@BB@@@BDA@@@@@BB@@B@@@@B@BBB@@@@B@@B@BBBB@B@@ABABAD@@@B@B@@@@AB@@@B@@A@CA@@A@AAA@@@@@AD@@CAA@C@C@AB@@AAAA@@A@AAA@@@A@@BA@@BA@A@@AA@@A@@@AAB@@@@AB@@@@@@AC@@AAAA@@@@@@@AAA@@A@A@AAAAA@@@AB@BA@@@A@@@AAA@@AAB@AA@A@A@A@A@A@A@@@A@@@@BIBDHDLAL@BAFFH@BFFJFHJJJFFFFNPHDJJB@TRBBRLFDBDFNBRAPAN@BET@DCF@FCJADCFGFA@ABA@E@@@EBABEDABCAC@C@ABADAB@BABAD@BBBBD@BBD@DA@@B@DBBBD@DBFBDBB@B@D@DBDBBBDBDBBB@@BD@@BBB@BBBBD@B@B@DBBBFBBBBBF@@BB@BBBBDBBDBDBBBDBDDBBBDBDDDBDDDBBD@FBB@F@FAHBF@B@BBB@D@@B@BADA@@D@B@B@BBBBDBBBDBBDBBBDBBBD@D@BBB@DBDBDDBBDBB@D@D@B@@ABA@C@C@A@ABABABAB@F@B@FBB@D@B@D@D@B@B@D@DB@BB@@BBB@B@D@DBDA@@D@F@BBB@BDDBDDDBB@B@@@DBBFFB@BBB@D@BAB@@ADA@@BA@ADC@@BA@@@AB@BEBCD@D@D@B@BABAD@FADAF@B@B@B@FBD@DBD@JBBB@@BB@@B@@A@@@A@A@@B@@@B@BB@B@@AB@@@@BB@@@@B@BA@@@@B@@AB@@A@@@A@AAA@@AA@@@@B@@@@@@@BAA@B@AA@@B@@@B@@@@A@@@@BB@@@@D@@@@@B@B@B@@@B@BA@@@B@@BB@@@@@@BA@@B@@@@@B@@B@@@BB@@@@BB@@@@@@@BBB@B@@@A@@@A@@B@@@@@B@@B@BA@@B@@@B@@@B@@@@@@A@@DBBA@@@@@BB@@@@@@@B@@@@@B@@A@AB@@@@A@@@@@A@@AA@@A@@A@@@@@A@AB@@AB@@A@@@AB@@@@A@@@@AA@@@@@AB@@@@@@@BAB@@@BC@@@@@A@A@@@A@@BAB@BAB@BA@@B@@@BA@@@AB@B@@@B@@@@B@@B@BA@@B@B@B@B@@@B@@AB@@BBB@@B@B@@@B@@BB@@@A@@B@@@@B@@@@@@@@A@@BB@B@B@B@@@BABB@@@@B@BB@@@B@@@@C@@@A@@DAAB@B@@@@D@@@BA@@BBBB@@B@B@BB@B@@@@B@@@@AAAB@@A@@D@@BAB@@B@@A@@BAA@B@@@@ABA@@B@@@B@@@@@BF@@@@B@@A@@A@@A@A@@B@@A@@@@@@A@@@@A@@A@@A@A@@B@@A@@@A@@@A@A@AAA@@BA@A@@B@@@@B@@@@@@@@DA@@@C@@B@B@@@@@@@B@@@B@@BB@@@@A@@BAB@B@@@A@AA@AAAA@AACC@@@A@@@@@A@@@A@@@A@A@@@@@A@@@A@A@A@@@@@@AAAAA@A@ABA@@@A@@@A@@@@B@@AB@@@@AA@@@@@C@@@@@@AAA@@A@@ACAA@A@@AA@@AA@@@@CA@@ACA@A@A@@@@@AA@BA@@@AA@@@@BAA@@@AA@@A@@A@@@@@@@A@@A@@A@@D@@@B@@@B@@@BA@A@@B@BA@@A@A@@@A@A@@@@C@A@@A@@@@@AA@@@@AB@@@@AB@@A@@@@@AB@@@@@@AB@@@B@@@@CCA@A@A@@@@@AA@@A@@@AAA@AAA@@AAAA@@@@@@@AA@@AA@@@@B@@@AA@@A@@@@A@@@@BAB@@AB@@@@AAA@@@@@@A@AA@AABE@@@@@@@BA@@AAA@@@A@BAAA@@@AA@AA@@@@AA@@A@AA@@AB@@A@A@@BA@@BB@@B@@@B@@AB@B@@BBBB@@BBB@B@@@B@@@@BBB@B@@B@@BB@@@AB@BAB@@AA@@A@@@@@@C@@AA@A@AA@@BA@A@@@@B@@BB@@@@@BAD@B@@@@@@A@@@AA@@@AA@@@@AC@@AAA@@AAA@@@AAAAAAAAA@AA@ACAA@@@@AA@ACAACCAAA@@@AAAAA@AA@@A@@@@A@@AA@@A@@AA@@AA@@@@A@@A@@AA@@A@A@@AA@@B@@A@@@A@@@@@A@@A@BA@@A@@AA@AA@AA@@@A@CA@@A@@A@@@@A@@@@@@AA@@@@AA@@@@@A@@@@@@@A@@@AA@@A@BAA@AA@@@@AA@@@A@@@@B@@B@@B@@@B@@@BAB@@BBBBA@@B@BB@@@@BA@@@@@ABABAB@@@B@B@@@@@B@@@BA@@B@@AD@@@@AB@@@BA@A@@@A@@B@@A@@A@@@AAA@@A@@@@A@@A@@@@@AA@@@A@@@AA@BAA@@CA@@A@AAA@@@BA@AB@@@B@@@B@@@@@B@@@@B@@@@DBB@@@B@BB@@@A@ABABA@@BA@@@A@AB@CC@@AA@@@A@@@A@@@@@@AAA@@@A@AA@@@@@B@BA@@@A@CDA@@@ABAB@@A@AA@ACABABA@@@A@@@A@@@@@A@@@@B@B@@ABAHA@@@@@AAC@@A@AAA@@@@A@@@@@A@@B@@@DDB@B@@@B@@@@@@BB@BB@@@A@@@@BA@@BAB@@BB@@@@BA@@@@B@@FC@@@@BB@D@@@@B@@A@@B@BC@AAA@@@A@@@@BAA@@@@A@@@@@A@@@@BBBBB@@@@@BBB@@BB@B@@@@BBB@@BBB@@@B@B@B@BBB@@AB@@A@@B@@@@@@A@A@AAAAC@A@@B@@@B@@@@@B@@@@AA@@A@@@@@@@A@@@A@@B@@BB@B@B@@@@@@@@@BAA@@AB@@@AA@@@@AA@C@@@A@@B@B@@@@@B@@@BA@@BBB@@@@@@@@A@@@@@@AC@@A@A@AAA@@@A@@AA@@@A@A@@AA@@AAA@@BABC@@@A@@B@BA@@B@@@B@@@FBBA@@@B@@@@@@BBBBB@@@@B@B@@@@A@@@@B@B@@@@B@@B@@B@@@B@@BB@@AB@B@B@DB@@@@B@@BBB@@B@BB@@B@B@@B@AB@@@B@@@@B@@B@@A@@@@@ACA@@@@@@B@B@A@@A@@@A@@B@@@BB@@B@@BB@BBBBB@@A@BB@B@B@@@B@@@@@@@@A@A@@AA@@@@@A@A@@AACAB@@A@@@@@C@@B@DA@A@@@@@A@@@AA@@AA@AAA@A@@@A@@@A@@@@A@@@ACAA@A@@@@@@@BA@@@AAAB@AA@A@@@@A@@A@@B@@A@@@A@@B@@A@BB@@@B@@@@@AA@@BB@@@@@AA@@@@@A@AA@@AA@A@A@@@@@AB@@@@@@A@@@@AA@@@ABBB@@ABB@AA@@ABB@@@@@@@A@@@@@@B@@@@@B@@@BA@@@A@@@@B@BB@@B@@@BB@@@AB@BCB@BAB@@AA@BBB@@BB@B@BA@@@@@@@@@AA@GC@@@AAA@A@@B@@A@A@A@@@A@@@A@A@@BA@@B@B@@ABA@@B@DBBB@BB@@@BBB@B@@AD@BA@@@ABA@@DA@AB@@@@@B@BABAB@BA@A@@B@@A@A@@B@B@B@@@@@B@B@B@B@@B@@@@BB@@@B@@B@B@@AB@@@@@B@@B@@@B@@@B@@DB@@B@B@BB@@@B@@@B@@@A@@B@@@@B@@@@@@@@@ABB@@@BB@@@B@@@B@@@B@BBB@@A@@BAB@@@@@BA@@BA@A@@@@B@@AB@@@@AA@@@BAA@@A@@@@@AB@@BA@@@@@@@B@@@@@@@@BB@@@BBBBB@@AB@@@@BD@BA@@@A@@@ABA@@B@@@D@@@@AB@BA@@BB@@@@@AA@@@@A@@@@@@@@@A@@AA@@@AB@BC@A@@B@@A@AB@@@@A@A@@@@BA@@@@@@@D@@@@@B@@@@DBB@@@B@B@B@DAB@BB@@B@BBBB@AB@@@@ABAB@BBB@@@@@D@B@B@@A@@@A@@AA@@A@A@AACACA@@AA@@C@A@C@A@@@AAA@A@CEA@@@AAA@AAA@C@@@A@AA@@@@AA@B@AA@@A@@@A@@@AA@@@@@AA@@A@A@AA@@A@@@AA@@@@AAA@@@@A@@@A@@@@@A@@AB@@@@AA@BA@@AAACAA@AA@@A@@@A@@AA@@@@@A@A@A@ABA@@C@@A@@@A@CBAA@@AAAA@@A@AAA@A@A@AAA@@@A@AAA@A@AB@@AB@@@@A@A@@@@@@@A@@@AA@@AA@@@A@@@@@A@@@@@AA@@@@@@@BA@@@@A@@@@AAAA@@@A@A@A@@@A@A@@@@@@A@@@@A@CA@@AAC@@@A@A@@A@@@@AAB@@@@@@A@@@AC@A@@A@@A@AA@@AA@@@@A@@AA@A@A@@AA@A@@A@A@@@A@A@@A@@A@@@@@A@@BAA@@A@@A@A@@@AC@@@@A@A@@@@@@BA@@@@@@@AA@@B@@A@@A@@@BC@@@CAAAACA@A@A@@@@A@AAA@@@A@@@A@@@@@ABA@@@A@@@@@A@A@A@@@A@A@@@@@@@AB@@@@BB@@A@AA@@AAA@EA@@C@@AA@@@A@A@A@A@@@AA@@AB@@@@AA@@A@@@AB@@C@EAA@A@A@@@ABAB@@ABB@@@@@@BAB@@A@@BB@@B@@@B@@@B@@BBAB@B@@@@A@@AA@@@@AACAA@@@AA@B@@@AA@@@@A@ABA@@@@@A@AAAB@@@AA@@@@@@A@A@@@C@A@@@@@@A@A@@@@@@@@@A@C@@@AB@@@@@BCA@@@@@@B@@AB@@A@@@A@AA@@A@@AA@@@@AA@A@A@@@@A@@@@@AA@@@A@@@@A@@@A@@BAB@@"],"encodeOffsets":[[116615,28325]]}}],"UTF8Encoding":true});}));