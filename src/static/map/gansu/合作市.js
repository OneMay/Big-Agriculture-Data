(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('合作市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"623001","properties":{"name":"合作市","cp":[102.910484,35.000286],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GCCC@@AA@A@C@ABAB@@A@@ACAAAECCAEAA@AC@G@A@CCA@A@AAE@@@A@@E@AA@A@A@C@G@A@CBAA@@ACCC@A@AAA@A@AAAA@A@A@C@AAA@ACAAA@C@AAC@A@A@A@CJ@@EBGDCBEB@B@@A@@F@DAB@D@B@@ED@B@@@B@DABAD@B@B@BDDDFBBAB@@AD@@@B@@@DBB@@A@@@EBIBCBA@CBC@@BABCF@@ADBFAD@L@D@@BBHBB@BB@B@B@@AD@B@BCHEFABA@C@EAA@ABA@GFCDC@G@CBEBABCDEFAB@@CB@B@JBFBD@JADC@GBC@CA@B@BBB@B@@BBBBBB@@BDBBDBBB@@DB@BBBBDDD@BB@@BBBAB@@BB@B@B@@@DBB@B@B@BBF@DBJDH@BBBDDFBHDFDFBDBBBBBDDDHBD@D@DABAD@@BBDDDB@B@B@DADAD@D@DAFAF@D@B@DBF@B@BABCDCF@DAB@D@BAD@F@BAD@B@BBB@DFHFLDFBB@B@B@BABADCB@BAD@F@BAB@@A@O@C@EAA@A@ABC@C@C@E@E@@@EBABCB@@ABAB@BAD@@AHBBBLBBBD@@@B@B@@ABCBABC@CFC@ABA@C@A@AAE@C@CAG@A@A@@@@B@BAB@BABCBC@A@CBAAE@A@A@C@A@C@CBABC@ABA@IAE@CBA@@@@B@B@BAB@BA@AB@BAFABADA@EF@@CBCB@@AB@BCBCBA@CBC@C@C@C@A@CBA@ABCB@@@BAB@D@D@@@DBBBBFBBB@B@B@D@D@D@D@D@B@@@BGFAB@DAB@B@D@H@DBBBDDBDBJFBBB@B@D@F@D@FBHBD@JDD@N@B@HBDBD@D@B@@@@B@B@B@BA@AB@B@@@B@@BDBB@B@BBF@B@DAB@BADA@ABA@A@CBCAC@@BAB@@@B@B@B@BBBBBDF@BBB@B@BADAJ@B@BBBD@DBF@@@B@@BBBBBB@FBBBB@@BBDBBBDBBHFDBDDBBDBB@@B@BB@B@DDBB@B@BA@ABA@E@@BC@A@A@A@@@@@@BB@@@B@@@B@B@B@@@@@@B@B@@AB@B@@@@ABA@EB@@@@@@@BB@B@DBB@BB@B@B@BAB@BADCDEDEDEHEDADCB@B@B@B@NAD@@B@DDBBBB@@DB@BBBBH@D@BABADABCBA@AB@@AB@@BB@D@@@BCD@BAD@BABABDBDB@DBBB@@BDBBBBB@BB@B@B@@BBBB@@BBB@@@@B@BBB@@@@B@B@BB@B@B@FCD@F@H@J@F@B@D@@BB@DBB@@BBBBD@BBBB@DB@@DBDF@@DBDBD@FBDB@@B@@BAB@@ABABA@@@BB@@D@F@D@D@D@DB@@BB@BBBB@F@B@B@BBDBBBBBBB@BBDDHB@@BBDBH@BB@@BB@B@BBDBHHDBDF@BBBBBBFBBBBBBDBBB@BDD@B@D@B@@ABCDAB@@@B@B@D@DBF@DBDDDBF@B@B@F@F@BCD@BEDFDDFB@D@@BB@@B@D@DFFFFBB@B@D@B@B@D@DBB@BBBBBJFBBBB@B@BB@@@DCD@BAB@BAF@@@BCB@B@B@B@BAB@HAB@@@@@B@BA@@@@FBBBB@B@BAB@BAB@@@B@B@@BBBB@B@D@@@@ABA@ABCBCDABABAB@B@B@@@BAB@BAB@BBB@B@B@B@B@@@B@BBB@B@B@B@D@B@B@B@@@B@BAD@@@DB@@D@DBB@@@F@F@BB@@@AAC@A@ABEBAB@BC@@@A@AAA@A@A@ABC@ADG@A@GBA@@BA@BB@D@D@D@F@BAB@@@@E@ABGDAB@BAB@B@BAB@D@BB@@BA@@DBB@B@@@BAB@@ABABAD@FAHAL@@ADALGFEJEJEFCDCBCBCBA@ABCDABAD@LCBAH@L@FABANBHAP@L@F@VCXGNAV@J@H@BBB@BADAD@JAB@F@B@HCFADCB@FEFEB@D@N@@@B@@A@ABA@@B@DA@@DCJEB@@@ACBA@AFAFADADABAFAB@FCJGBAB@FB@@DGFCDABAB@D@DAB@D@HADAD@@BB@@BBB@@B@B@BAB@D@FAB@FBD@B@D@BACC@A@ABEBCDCBC@ADG@CDC@A@AA@ACCAAAA@Q@EBC@CB@DAD@D@H@BAB@BGDEDGFKBCBEAA@C@EAA@A@@@@A@ABAJGDAJCB@@A@A@C@C@CBCDABABEDEDADCBADGBCB@ACACAE@G@CBCDCFCFAB@B@DAB@BA@CBABABA@ABADCJE@@@AACACCCAA@CAIACCCECCCAAAAAC@C@A@@@@FCBADC@@BCBA@C@I@EA@@@CCA@@AAA@CAE@CAAAAA@A@ABEAA@A@GDCBA@CAC@E@E@EAC@AACEA@CAC@A@@@CA@@@A@@@@@@BAB@@ABEDC@CBC@@BA@@B@B@BABA@@BA@@BC@AA@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@A@@@@A@@@@@A@@@@@@@@@@A@@@@@@A@@A@A@@@@@@@A@@@@@@AA@@@@@@@@@A@@@@@@@@AA@@@@@AA@@@@@@@@@@@@@@@@@A@@A@@@@@AC@@A@@@@@@@@@@@@@@@A@@@@@@A@@A@@@@@AA@@@@A@@@@@@@AA@@@@@AA@@@@@@AA@@@@@@@A@@@@@@A@@@@@@@@@@A@AA@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@A@@@@A@@A@@@@@@@A@@@@@@@@@@A@@@@@@@A@@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@A@@@@AA@@@@@@@@@@@@A@@@@@@AA@@@@@A@@@@@@@@B@@@AA@@@@@@@@@A@@A@@A@@@@@A@@@@@@AA@@@@@@@@AA@@@@@@@@@AA@@@@@A@@@@A@@@AE@@@@@@AAA@@@@@@@A@A@@@@@@AA@@@@@@@A@AA@@A@A@C@@@@@A@@@@@@@@@@@@@A@@@@@@A@@A@@@@@@@@@A@@@A@@@@@@@A@@A@@@@A@@@@@@A@@A@@@A@@@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@AA@@@@@AAAA@@@@AAA@A@@A@@@@A@@A@@@@AA@@@@@@@@AAAA@@A@@A@@@@@@@@A@@@@A@@A@@@@@@A@@AAAA@@@AA@@@AAAA@@@@@@@@A@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@AA@@@@@@@@A@@@@@@@AA@@@@@@@@@@@@A@@@@A@@@@@@@A@@A@@A@@@@@@@@A@@@@@AAAAA@@@@@@@G@C@A@CAAA@ACCACAAA@A@A@A@CAAACA@A@A@AACAAAACAAAC@AAAAAAAA@A@AA@A@A@@A@@@AA@AA@@AAA@@@@@C@@@AA@A@A@@CA@A@AAAAACAAACACA@A@@BEBA@A@C@@@AA@@@K@A@A@CDABIDA@@@ADCDABC@A@C@CAA@A@CBEDCFABAB@@EBABCBCBCBA@A@A@A@@AACAA@@C@IBC@C@CAA@C@A@C@A@CBABCAE@@@C@@@ABABABA@C@A@A@@BABA@A@A@ABCBABC@C@A@AA@@@C@@@AA@A@@@AAA@A@@@A@AB@@A@A@A@A@AAABA@CBCBCBABA@AAAA@@@@A@AB@@ABC@@AA@@@AAC@ABA@EB@@A@ABAAA@AACACCEAAAA@@A@C@CBCBC@@AACA@@C@A@ABEBA@GBC@A@CDEBK@A@AA@@@A@ABCBCDAHEDEDA@@@E@ABCBCBCDAHEDCDADAB@JAB@FCHCDAB@BCDCBCBA@CBG@ADABABAD@BA@@@@BA@A@A@@BA@@B@DDD@DBD@FAFAB@DAD@@@B@BD@BB@@@@@B@NEDAFCDABABABGBCBABA@@AE@ABA@C@A@C@ABCBADE@CBEBA@A@AAAAACAAA@C@G@A@CBA@@@A@@@AAE@ABCDCBAB@B@B@@@BC@ABABABADCDCDCBA@AD@H@B@@A@AAA@AAC@AAACAAAAA@AAA@@A@C@C@CAAAA@AAE@C@A@ABCBCBA@C@C@EAIAI@G@E@C@IAEBAAG@AAA@ACCAECAAAAAA@C@A@ABA@A@I@ABCDEBABCBABE@A@A@AAACAAAAA@AAC@ABC@CAAAAAAECCCA@AAAA@AAC@AAACAIA@A@@BAF@B@@@@@@CA@CECAACAEAAGCAAACCCCC@@@@@ABABA@A@AAA@AEEEEACAC@@AAA@A@A@CDA@A@AA"],"encodeOffsets":[[105508,35462]]}}],"UTF8Encoding":true});}));