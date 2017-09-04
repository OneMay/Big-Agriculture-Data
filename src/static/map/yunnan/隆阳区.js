(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('隆阳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530502","properties":{"name":"隆阳区","cp":[99.165607,25.121154],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@I@@AA@ABEDA@@@A@ACAAEB@@A@@C@@AAA@AA@@A@@AAB@@AD@D@@AFCFCFAD@@BD@D@DCBGBABA@AD@D@D@D@@BDDDBD@BABADAJ@TAFCBABKHIHEDEDIBKBKBO@O@KFEJCLCNIREHED@@EBOBGDAD@@CCCCCA@A@@BA@CA@AAA@A@A@@B@B@F@B@@ABAB@D@BA@A@@B@B@B@@ABA@CBAA@@AA@A@@AAA@@@ABADABCDAB@@A@C@AAAAAAAAAAC@A@ABA@ABC@A@@@@B@@B@F@BB@@@BB@FFB@BD@@@DAB@@@DAFAB@BCFEDKBI@EBGHGDA@CAA@ICGIGOIOAAIIGGMIKIGGMCIBEA@AC@CKGIGCIEAAABCFCB@@AACACEAAAAAA@CAAA@A@@A@AAA@C@ABA@AAA@@C@@@@A@ABA@@@@BBDDB@@@BAB@BABAB@@@BB@@ADB@@@B@B@@ABCBCDCFEB@BC@AACACAA@@CAA@C@EAA@CCAA@C@ABABA@@BA@AAA@@DCB@AC@CAAA@@@A@@@A@@A@A@@@@A@E@@@@BB@B@@@@B@BA@A@@@@B@BCAAAA@@@@A@A@A@AEAA@CC@@@@@C@@@A@@ABABAFAB@@A@AB@D@BB@B@B@@@@BAB@BDB@@B@AC@@BA@@B@@@BBB@BABA@@@@@@BB@@@B@@CFC@@B@BA@@@AB@BAB@B@BA@ABA@@@AB@B@B@DA@CB@@CDA@EDA@@@AAA@C@A@ABE@A@A@AA@AB@BC@@@A@EAAAAA@A@ABABAFADCBC@A@AABA@CA@A@AA@@@A@E@AB@DAB@BC@CA@A@AAA@A@CA@AA@@AAAA@C@CAA@@AAA@AB@BBB@@@BA@@AAGA@ACAACAAA@C@@@AC@ABCBAB@DB@BBBBBBBJ@FABABCBC@EAAACA@AA@@A@A@ACCA@@AACAA@AAIAACA@@@A@A@A@A@AAABC@C@@@ABC@A@C@@@@BA@A@A@A@@BA@@BC@AB@BA@CB@@A@@GDEBEBEBCFADAD@BCDCBCBGJQHMHMDEDCCA@AA@CAACAAA@ECCCA@A@@AAAK@@@AAAAA@A@C@@@CBA@ABA@A@CBA@A@AB@@CBC@AAABAF@BD@DBB@AD@@CB@BC@ABAB@F@DABABK@AB@D@LAXADADCDEBG@ABAF@F@D@DAB@@CBG@GBC@GBE@A@G@@@CAED@@A@@BA@C@AAABAAAA@@C@A@AACAAACAAAA@A@@AA@@@@A@A@@@@A@C@A@@@C@A@@@C@C@@@C@C@AA@@CAAA@@C@A@AAC@A@@A@@AA@@A@@@@@@A@@@AAA@@IEOECAABA@CBGJADAFCFAFAD@DCR@DAB@DAN@P@RBR@NCNIT@LAPBPB@@@@@D\\ALBLGRCPHJBHCPENALARETBNDRFRAXALGNCLOHIFCHCPAHANFJJRDNCHAPITARLTHLFNDJELGHEDIHCFBJBF@RAJDLBH@DDLHRDP@TBJENCR@N@NBPBP@LFHBDFPDHBBHJBJEXAN@FFNHP@DAJHNFLDJ@L@BCJAN@RBH@DBRBNFNHLFLALALALCR@BADADCD@DAFBFDFDFBFBD@D@FBD@FBF@D@DCBABCBCDABCD@B@DDBB@B@BADAD@DAF@FAB@HAFAD@JBDBDBHFDDDBHBD@J@H@DAF@FAD@FADAFAB@B@DAF@F@D@D@H@HCF@DBB@BAB@BAB@B@@B@@@BAB@BAB@F@HBD@DBBF@D@B@B@BFFJBD@D@FADCFAB@D@BBBDDFD@BBBBBBDBBBD@D@D@BADEDCDEDA@ABCBA@CDCDAD@BABBBAB@B@BAB@DBBFBBBF@B@FADCB@DBD@BD@A@@@@@@B@@A@@BA@@@@BAB@B@@@BABA@@B@B@@@B@@ABAB@@@B@B@@@BB@@@@BA@@B@B@@@B@@@B@@@BA@@D@B@BB@@@@BABBB@@@BB@BB@@@@@B@@@@@@@BB@@@@B@BBB@B@@@BB@@@@@B@B@@BB@@B@@@@AB@@BB@B@BA@@B@@@@B@B@@B@@@@BBAB@B@B@B@D@D@B@@BBA@@B@@@B@B@@@B@@@@@@@B@B@@B@@D@@ABB@@@@DBB@@@B@@@B@@@B@BADCB@B@@@DAB@B@B@B@BB@AD@B@@@B@@@@B@@@@@@@@@@B@@@DAB@BABADAD@@@B@B@B@B@B@@AB@B@B@B@B@B@D@@@BA@@B@@@B@B@B@@@B@FAB@@@@@BB@@B@@@@B@@@B@B@@B@BB@ABABC@C@E@CAECC@@AACCAEAICA@AB@DCHABA@AAC@GAG@AAAABCBA@@@AABC@EDGBABC@@ACC@A@AC@ABC@E@C@C@C@ABADCB@DA@@LDB@BBHBB@DAF@F@F@F@D@F@B@FBB@@DDDB@@BB@BBF@DADABIBEBA@CB@BCBC@ABCBABCBABADADCBAD@BABABC@E@C@C@A@ABA@ABA@@@A@@AAAACAAAECCCAAAA@A@@@A@C@ABABCBA@A@AAAAACA@A@ABA@@DCBABA@ADCBABAB@DCBA@ABEDABCBC@@@ABCBA@CBABA@@B@@@D@DBDBD@DBB@B@D@B@B@B@B@DBDBBBDBB@DB@@H@D@B@B@BB@@@B@@BB@@B@D@B@@BDD@BDB@@DBDBB@@@BD@BBBBBB@BBDBBBBBDADBB@DBFDD@BBB@@BB@@B@BCB@@AD@BA@@BABAD@BA@@B@BCF@@@D@D@BB@@BB@B@BBF@B@DBB@B@B@B@B@FBB@B@B@DABAB@@A@A@ABA@A@@B@B@B@B@BAB@B@@@BA@@@A@@@A@A@@@@@AB@@BBBBB@B@@B@@BB@@BDFBB@@D@@@FDBD@@@@B@B@B@DAB@FB@@@@BBDBBDB@BBBB@FBFBD@BBBDBDBFBDBD@F@FBDAD@BBB@B@BBBAD@D@B@@@B@BBBBB@B@B@DABCDAB@DAB@DADAB@BAF@BAB@BABCBC@@@@BA@@DADCDA@@BADE@@BA@A@@B@DABAF@F@DBDBB@@AB@BABE@@BAFAD@BAD@D@F@@BF@FBBBB@B@DA@A@A@AACCCAAAC@E@CDEAA@A@@BCBCBCBCDCBCBABCBADAB@BA@CBAB@@A@CBCBC@ABCDABADAB@@ABABABA@A@@@A@A@AACACECA@@AAACC@@AA@AAAAC@A@A@A@C@EBE@EBC@A@C@CBA@A@@BA@A@@@@@A@C@A@AAA@A@@@@AA@AA@AAA@EBC@A@ABABA@C@A@A@ABA@A@@BA@A@A@C@CBCBCBABABAB@BABA@A@A@C@A@@BA@AB@@ECEDABADA@A@A@AAA@A@A@C@A@@@@@A@@AAE@@@ABADA@ABCBC@ADC@@@A@A@CBE@C@EBC@C@I@A@CB@B@BBB@BABABA@C@A@A@AAC@@AAA@AAABA@A@ABABABC@C@@@AAAA@A@ABCDA@AAE@ABABA@ADEBAD@DA@ABA@AFEDCDCDCBABABABE@ABCBABABC@CBEBCBCBCDCDCDCBABA@@BA@A@ABC@CBCDCBABCBCDEB@DCBCBABABABABADAD@D@B@F@D@B@B@B@@@D@B@B@B@DCDAFEBCDABCBE@ABA@A@A@@@A@A@@@AAA@ABCBABCBABEBEBABC@CBADABCDG@@BE@@BCBABCDCBAB@BADC@ABAFABABA@A@ABABEDCDADADCFA@@BADEBADABA@ABAD@BADADABA@CDCDADCDCDCDCBABABABCDCBADADC@A@@BC@@B@BABABCBEBC@CBABA@AB@FCBAB@BABCBADABAD@DCDA@ADAB@BCBAB@DCDAB@DA@ADC@ABAA@A@CAA@AA@A@@@ABC@CBEDCBCBABC@CBG@ABABA@CGKAEAEA[@IIQIQCEGKGOEIAG@G@IAA@A@A@@@A@A@CAC@@AA@A@@AA@C@A@A@A@EAAB@AA@AAA@A@AAA@@@A@AAC@AAE@@BA@A@A@AAA@@AA@AA@@AAACCA@BC@A@@C@A@@B@@@BA@A@C@C@IAEBA@A@IGCCAAA@GAA@AABCACAAAAAA@A@ADCBA@A@C@A@ACC@A@@@ADCBA@C@AB@@A@CAI@@EAAAAA@@A@C@ADEDAB@@A@@@BA@A@C@AAAABC@@@CGA@A@CBCD@DBF@BABABABCBC@ABAECOCKCG@IDK@IAEMOIIEGGMA@AECCIGKGKEGEKIGGIKGGECIEGEMBIBEDA@"],"encodeOffsets":[[101681,25432]]}}],"UTF8Encoding":true});}));