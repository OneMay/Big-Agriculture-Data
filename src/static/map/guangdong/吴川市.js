(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('吴川市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"440883","properties":{"name":"吴川市","cp":[110.778411,21.441808],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@CJ@B@@@BHDBSA@@BA@A@"],["@@@@@ADIAA@@@@@@@@@@@@@@@@@@A@@BAB@B@@A@@AA@@@AC@@@A@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@B@@BBB@@@B@@A@@BC@C@@@ACA@CC@@KAA@@@@@AC@@@@@@A@@B@B@BB@@D@@@B@@@AB@@DBB@B@@@@@B@H@DB@@B@B@BAB@@@@@DAB@B@@@B@@@BBBD@@BB@B@B@BA@A@E@CB@@@BA@@@ABA@A@@F@@@@@@ABA@@BA@A@ABA@@@@A@@@@@@A@@@@B@BB@@@BB@B@@A@A@@AAAB@@@@AA@@@@@AT@@FBHAFCDCDBB@B@@BA@@BAB@@@BB@@@@@@@@@@@@@@@@@@@@B@B@@@@AB@@DBFBB@@@DB@@@@AB@@A@@@@B@@BB@BA@@@AA@@ABAD@@@B@@@B@@@@@BC@C@AB@@@@@DD@BBB@@BA@@@@@@B@@@@A@@@@@@@AA@@A@@@@@@@@@A@@@@J@@@B@@BBDD@@@B@B@FCD@@AD@@@@BB@D@@@@@@@@@BBF@B@BB@BBF@DB@@@@@@@D@@@B@@@@@@DBB@@D@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@B@DBBB@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@B@B@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@B@D@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@ABA@@@@@@@@@ABAB@@@@@B@@@@@D@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@ABA@@BA@A@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@AB@@@B@B@@@BA@@@AB@@BB@@B@@D@BB@BB@@AB@@@@BBB@A@@@@@A@A@@@A@@@@B@@B@@@B@@@@BAB@@A@BB@@FDHDBD@@BB@BBDFB@BB@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@B@@B@ABAB@@B@@@@@@@@@@@@B@@@@@BD@@BB@B@@BB@B@D@@@D@B@@B@@AB@@@@B@@A@@@@@D@B@@@DAD@@BB@@@@@@@B@B@@ABABA@@@A@@B@@@@@BCDABA@@@A@@BA@@DA@@B@B@@@@@B@@@AB@@@@@@B@B@@AB@BAB@@@@@@@@@@A@@@@@@@@@@@@AA@@AA@@B@@@@@@@B@@AB@B@@@@B@@@@B@@A@@@ABA@@B@@@@@@BBBFA@@BB@BA@@@@@B@@@D@@@CA@A@@@AAA@AA@B@@@B@@@BBB@BD@@@B@@@@@@B@ABB@@@@A@@@@@@@AAA@A@@CA@@@C@A@@@@@@@@@A@A@@@A@C@@@ACA@@@@@@@@@@@A@AAC@AAC@A@A@@@AB@@@@@BA@AAA@@@@BAB@@B@@B@AA@@A@A@@@@A@A@@B@@@BB@AAA@@@@B@CEAAACA@@@BA@A@AAA@@@@B@@@B@@A@@@AAA@@B@@@BA@C@@@AA@@AB@@A@@@@C@@A@@@A@@@A@AB@@@@@B@@B@@DB@BB@@@@A@@D@B@B@@@BBDADBH@@@DBBA@@@ABCB@@@B@@@@ABC@A@A@AAA@A@C@A@@@@@@@@@@@ABAB@DABA@AB@@@BABCBA@@CACABGAAGCA@AA@AB@BB@G@ABA@@BB@@DA@A@@AAA@B@@ADBBAB@@D@@B@B@B@@ABC@@@A@@B@@@D@@@BA@@@@BA@@B@@@BA@@BADCBAFC@@BADA@@@CBA@BBB@@@BA@AB@@DBB@@@@@@@@@@@BA@@@AAAAA@AFEB@BA@@@ACACE@@@@BAB@@A@ABABA@@BA@@BAB@B@@@@AAAC@@@A@@A@AFA@@@A@@@@@@@AA@AA@AA@A@CAAAB@B@@@@@@@@CA@@B@@@AA@@@@@@@AB@@A@EAAAEEB@DAD@DA@E@ABCB@B@BDAB@BA@@BAD@@A@BBB@BBBD@@BB@@@@BB@@@@@@BB@@@@BA@@BA@@@@AA@@@A@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@BA@@@@B@@@@@@@@@@@@@B@@D@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@A@@@@B@@@@@@@BBA@@@@B@@@@@@@@@@B@@@@@@DD@B@@BBDDBDBBB@@AB@D@@@@@@AAAAA@@@@BA@@BA@C@AB@BBDABB@@B@@ABA@A@@@A@@@@A@@A@@@@@@@@AA@@@@@A@@@@@@B@@@@@B@@@@A@@@@@A@@@@@A@@@AA@@@@@CC@A@@@@@A@@@@@@@@@@@@BA@@@@@A@@@@@@B@@@@@B@@@B@@@@AA@@@@A@@@@@A@A@@@A@@@@@@@@@@@@AA@@A@@@@AAAAA@@@AA@@@AA@@A@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@B@@@@@@@B@@A@@@@@A@@@@B@@@@@B@@@@@BB@@@@B@@@@@@@@@B@@A@@@@@@B@BABDDB@@B@@@BA@@BC@@DA@@DABA@@BA@@@@DCB@BBB@@@@E@@AC@@@A@@A@@@@@@E@ACA@@@B@BB@@@@B@BAB@@A@@AA@@A@C@@@A@@ACAAAAA@@@AAA@@AA@A@AB@@A@CA@@@A@@B@@A@@@A@@@@D@B@@@B@@@@@@@BA@@DEF@DA@@DC@@AAA@@A@ABC@AB@FB@@BA@A@CB@DABD@@@B@@@BB@B@@@BD@@BD@B@@BAB@@@@@@B@@@@@@@@@@@DBA@B@@B@@B@@A@@B@BBB@@@@@A@A@@@@B@@BB@@@B@B@@@BB@@@@AD@@BB@A@ABA@@BB@@DB@@BB@@DAB@BAD@B@@B@@ABAB@@@B@@BDB@@B@@@@DB@@@@@@DA@AB@@AB@@@@@@AB@@@B@FEB@B@BB@@B@B@@@@@@@@@B@@@DBD@D@@@B@@DBBBB@@BBBBBBB@@@@@@@AC@AA@A@@A@@@A@@BAB@@ABA@@@@AA@@AA@ABABCD@@@@BBB@BBD@B@@@@ABCAAB@B@B@B@B@@@BBBBB@@B@@@B@@@@@@@AA@AAC@@@@@A@A@@@@BAB@@@@@@B@@@BB@@@@@B@@A@A@CAA@A@A@E@@@@@@BAB@B@@@@@BA@A@@@A@@@A@ABA@A@@AC@@@ABE@A@@B@@@D@B@@@BADIHQueGCcSkMgCQ@DFaDE@WCaOIGMKGEIEEEECWYaeU_OUKQOSky]Y@D@P@H@F@F@J@FABAL@H@HCHAHAJAF@H@@@@@@A@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@A@A@@@@@CACB@@@@@@@@A@A@@@AB@A@@A@@@@A@A@@A@@@AA@@BAAAAA@@A@@B@B@@A@A@@A@@@A@@CBA@@B@@AA@@@@@A@AAC@@AA@AA@C@@C@ACAAAAAAA@@BA@A@A@AA@@AA@AAA@C@@@@@E@@@@@@@@@AA@AA@CBAB@B@BAB@@@@AACBEDCB@DB@A@AB@@@BB@@@@@AFA@@@@@@AAA@AAA@@@@A@@@ABAB@@@@DBKF@@AA@@@@@@@@@@@@@@ABA@@B@BCDCBA@@@@@A@CBEB@CA@ABCBEDED@@EDA@CB@B@B@B@BAAAAA@@@@@@@AB@@@B@@@@@@@@@@@@CA@@@@@@@@EA@@A@@@@@@@@@CDCBCB@@@AA@@@AB@@@BAB@@@@@CA@@AC@ABC@@@AB@@B@@@@@@@@@@@@@@@@@@@B@@BB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@DBBB@@@BBD@B@@@@@@@@@@@@@@A@@@A@@B@@@B@@B@@@@@@@B@@@@@@B@D@@@B@D@@@@BBB@BAD@BBB@@BB@BDB@@BBF@@@@@@@@@@@@A@EB@@D@@BB@@@B@@B@BB@@@@@DD@@@A@@AC@@@@BBDDB@@@@BBA@@@@@AB@@@@A@A@@@AB@@@@@@@@@@@@@@@B@@@@ABA@@B@@@BB@@@@B@@@B@B@@@@@DBABA@AB@@B@@B@@@@@@@@@@B@A@A@AB@@@@@@@@@@@@B@@@@@@@@@@@@BB@@B@@@@A@@B@@@@@@BB@@@@BB@@@@B@BA@@@B@@@@@@B@@@@@D@@@B@@@@AB@@@B@@@@@@@@BB@@BB@@@@B@@@@A@@@A@@@@B@@@@@@@@B@@@@@B@@@@@@@@@BB@@@@A@A@@DA@@@@@@@@B@@@@@B@@A@@@@B@BBB@@@@@@BB@@BB@@@B@@@@B@@A@@B@@@@@@@@@BB@@@@@B@B@@@@@BBB@@B@AB@@BB@@@@@@@@B@@@B@@@@B@B@@@@@@@B@@@@B@@@@@@B@@@@A@@@@@A@@B@@@@B@@@@B@@@@B@@@@@BBA@@@@@@B@@AB@@AB@@@@AB@@@@AB@@AB@@@@@@@@@@A@@@@@A@@@CD@@@BA@@@@@@@@@@@@@@BB@@@BB@@@@@B@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@B@@@@@@@B@@B@@B@@@@@AB@@@@@@@@@B@@A@@@@@@@A@@A@@@@A@@@@@A@@@A@@@@@@A@@A@@A@@@A@@A@@@@@@@@@@@AA@@A@@B@@@@@@@@A@@@@B@@AA@@@@@@@@@A@@@@@@A@@@@@@@@@A@@B@@@@AB@@A@@@@@@@@@A@@@@@@B@BA@@@@@@@@@@@A@@@@@A@@@AB@@AB@@@B@@@@AD@@@@@B@@A@@B@@A@@@@@@B@BB@@@@@@@@BA@@@@@@@A@@B@@@@@@@@@@@BB@@@@@@BA@@B@@@@@@A@@@@@@@@B@@@@@B@@@BAB@@BB@B@@@@@@@B@@@@A@@@@@@@AD@@@@@B@@@B@@@@B@@@@@BB@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@A@@@@B@B@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@A@@@@@@B@@@@AB@@ABAB@@A@@BAA@@@AAAA@A@@@AA@@@@A@@@@@@B@@@@A@@F@@@@ABA@CD@@DB@@CAA@A@@@A@@B@@@@@@CB@@@@@@@@@@@@@@@B@@@B@B@@A@A@@BA@AB@@@BBBABBB@@A@@@@B@BAB@B@@BB@@@BA@A@@@C@@@@@@@@@@@@BAB@BC@@@@BCBAA@BA@A@@@@D@@@@@@@@BBA@A@@DA@A@@@AA@@AACBA@@AB@@AB@@@AB@@@@B@@@DAB@BABA@@@AA@@A@@@BABA@@@@@@@@@B@@A@@@AAA@@A@A@A@@@@B@@@@@@A@ADA@@BA@@@A@A@A@@@@BDBAD@@@D@@@@@@@@DBB@D@BD@B@B@BBD@@A@@@@@C@@A@@EB@@@@@B@BA@@@AD@B@@B@B@@A@BB@@D@@CB@@@BB@D@@@@@BA@ABA@@@@AD@@F@BB@@@D@@BB@@BB@BA@@B@@@@@@@@B@B@@B@@A@@@@@@B@@@B@@@@@@B@@@@@@@@@BA@@@@@@BAD@@@@@@@@@@@@@@@@@@B@@@@BBBA@@@@AA@A@@B@@@B@@B@B@@@@B@BA@@@@B@BB@@BA@@@@BB@@@B@@@@@@B@@@@@@@BA@@BBB@BB@@BA@BB@@@@BBD@@BA@@D@@@@@@ABB@@@@@@@@@B@@@@B@@@@@@@AB@@A@@@@@@@@@@A@@@@@@@@A@@@@A@@@@CB@B@@@@@BAA@A@@A@@B@@@@BB@@@B@@A@@@@BC@@B@@ABA@@@AB@@ABAB@@@B@@@B@B@@@@BA@@D@@B@@@@AB@@@@@@B@BAF@B@B@B@B@B@@@@CB@@@BA@@AA@@AB@@@ABAB@A@@@CA@@@@@@@@D@@A@@@A@@AA@A@@B@@@B@@BB@BA@AB@D@BAB@@@B@@BB@BB@BDAB@@@AA@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@A@@BAB@@@@A@@DA@@DAB@BB@@@@@@@@DB@@@DBD@@@B@@AB@DCF@@DB@@BD@@@@@@@@@@@@@@@@@BEDAB@@@BBD@@B@BB@@@BBB@B@@BB@@B@B@@@@B@D@@B@@@@@@@@AAAB@@@B@@@@BDF@@@B@@BB@@BAB@D@@B@D@D@B@@@@@@BBBBDB@@@@BA@AB@@@BB@B@BBB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BAB@B@@@B@@@@@@@@@B@@@@@@@B@D@B@B@@@@@@C@A@@BC@@B@B@@@@A@A@@AG@AAA@A@CBA@@@@B@@@@@@@@@@@@@@@@@@@D@@A@@B@DA@@@@@@B@@@@@@@@BCB@@BB@@BADBBBBB@@BABAB@BBB@BBB@@DBB@@B@@@@@@@@@@@DB@@@@@@@@BBB@@@@AB@@A@@@@@@@@@@@@@A@@@@@@@@A@@A@@@@B@@@BB@@B@@A@@@@@C@A@@BABA@@B@DBB@@AB@@A@@@A@@B@BA@@B@@ABAB@@ABCBCBA@@@AA@A@AA@A@@@AB@B@BA@@BA@@BAB@B@@BBBDABBB@B@@@@@BB@AB@BAB@@A@@B@@@@B@@BB@@D@DB@AB@@CB@@@@@AD@B@AD@BAB@@@BBD@@@@B@@@B@B@B@B@@@B@B@@@@@@@B@B@@@@@@@@@BAB@@@B@BBB@BB@@@A@@AA@A@BF@@@B@@BB@@@@BA@ABB@@BABB@@@BD@@@@@@@@@AAB@@ABD@@B@@@AA@@DAB@BD@@@B@@@BB@BB@@@A@KAC@A@ABAAA@A@@B@@@@@B@@@@@@@@@@BB@@@@@BBD@@@@@@@BA@CB@@A@AB@@@BBD@@@AB@@A@@@AA@@@@@BB@@B@@ADABB@@BB@@BA@@B@B@@B@B@@@@A@A@@@AB@@@AB@@BB@@BAB@B@DAB@FCBA@@@@E@A@AA@@BA@AB@@A@BDB@@B@B@BABBB@BA@@@@@A@@@@@@@@B@@@@@@B@B@@@@@D@@@@@@@@BB@@DAB@@@BDABAB@@BBABABABAB@BA@@@AA@@@A@BA@@B@B@BB@BB@BAB@@@B@@AB@@AB@BA@@@A@@BA@@A@A@@@@A@A@@DA@@@A@A@@B@@@BBB@@AB@D@DBB@@@@@@@@BB@@H@B@DADAHEDADAF@B@B@B@DBFDDDFD@@DDDB"]],"encodeOffsets":[[[113370,22035]],[[113368,22041]]]}}],"UTF8Encoding":true});}));