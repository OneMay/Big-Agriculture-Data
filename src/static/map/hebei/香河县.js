(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('香河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"131024","properties":{"name":"香河县","cp":[117.006093,39.761424],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AD@@C@@@@B@@AAE@GAA@A@@@@@@BA@CAB@@A@@@@A@@@CF@@B@BBFBAD@@@@DB@@CD@@@@@@@@@B@B@@A@@@ABA@A@A@@B@@A@@@DB@@AF@B@@@@@@A@@@@B@BBD@B@BAB@B@@B@@@ADC@CD@@B@BB@B@@BB@DB@@@B@@D@@J@B@@@B@@@@@@@B@@BB@B@@@B@@@D@@@@B@BD@B@ABBBB@@@B@B@BB@@B@B@B@@@B@BB@@JA@@@D@@@B@DG@@@@@@D@@@@@@A@@@A@@F@@@@@@@@B@DB@@B@ADA@@B@@@AABDB@@AB@@AB@@@@A@@@@B@@@@@@A@@@@@@FA@A@@@@@@@@B@B@@@@@@@@@B@D@@A@EAC@@@ADA@@B@@@@BBB@B@@@AF@@@B@@@@DBFBDD@A@@@@@ADE@@B@DA@@@@@@@@@B@@@@B@BB@@@@@@AB@@@@A@@@BB@@@@A@@@B@@BB@@@@@B@@@@BDBB@BBB@@@CFABAB@BAB@@FFDDFBJ@D@F@J@FCBAD@B@@A@@@@B@B@B@BB@@@B@BA@@B@@@B@BAB@@@@@BB@DBB@B@BA@B@@@B@BAB@@@BA@AB@@@@A@@@@@A@@@C@GBC@ABA@@@A@@@AB@B@@A@@@@@@B@@@@B@ABAF@B@@@@D@@@@@@@@@@@F@@@@@@@@@B@D@@@@@@DA@ABC@@BGFEDCBAB@BA@@B@BBD@B@B@DAD@B@BAD@D@@@FAD@DCFCFABCDADABB@HBAFHBBDB@BBB@LB@@BCPBBA@AB@B@@@@@B@HAF@BBJDAD@@DBD@@ADEDGACDCDE@@J@B@JDBBCHLBPDB@FELABCBI@@B@P@DC@AF@BA@GC@@E@@DEB@BCFGDBBB@DB@@DB@D@FBD@H@D@B@DBDCFDFI@@HKAA@AGCFABBBCFCHCLCH@DBBB@B@@B@@@N@B@B@F@B@F@B@@@H@@@D@DA@@F@B@F@D@CJFHJD@BFBD@VDHBFBJ@B@B@B@D@FCB@BAB@BAB@DA@CA@@CA@@CJQA@AAEBBC@E@@A@BKHB@@@BB@@@B@B@BA@ADFHBBEF@@ABA@@F@@C@A@@@A@C@@@ABA@A@A@@@@@@@@@EDA@@@AB@BABAHADABABAB@@@BADCB@B@@CBAFCFEAA@AECG@@AEB@A@@@@@ACEC@C@C@CE@@@AGBEA@@CBEAC@@@CA@@CA@@@@A@CB@@AAA@AA@@@A@A@@BCBCDC@CBAAA@@A@@@ABABA@A@@@@@A@@ABAMAACB@@A@@B@@ACCFACEAC@AL@@@A@@AF@@AHA@A@@BA@@@@BB@FDA@A@A@@BCG@@@@AA@AABGDB@BF@@ABGC@@GD@@@C@@AB@@ABAB@AEAA@@@@@EBI@AA@BCE@@@BEAA@@BA@@BG@C@A@@BCC@C@@GC@@A@@@@@A@@@AA@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@A@@@@@A@@@A@@@@A@@@@@@@@@@@@@@A@@@@@A@@@@@@B@@A@@@@@@B@@@@A@@@@@AB@@@@@@@@@@B@@@@@@D@A@@@@AB@@@@A@@@@@A@@@@@@A@@A@@@@B@@A@@@A@@@@@@@A@A@@@@@@B@@@@@BB@@B@@@@A@@@@@@B@B@@@@@B@@@@@@G@@BAB@B@B@@A@@B@B@B@@@B@@@@A@@@@BA@@@@@@@A@@@@A@@@A@@@A@@@@@A@@@@@@A@@@@@@@AA@@@@@@A@@@A@@@A@@@A@@A@@@@@@@A@@@A@@@A@A@@@@@@@@@@A@@@@A@A@@@A@@@A@@@A@@@@@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@@AA@@@@A@@@A@@A@@@@A@@AA@@@@@@@@@@@@@@@@@@@@AA@@@@A@@@A@@@@@A@@@@@@@@A@@AA@@@@B@BA@@BAB@@@@@@@@AA@A@@@@@@AB@@@@A@@C@@@AA@@A@A@@@C@BAAA@@E@A@C@CCC@@AGDC@IDAA@@@@@A@@BA@@@A@@D@@AA@A@A@A@AB@@A@@@@@@B@B@B@@A@@B@@@@@@@ABACAC@@B@BA@@@@@@@@BA@@AAB@@C@@B@@@B@B@@A@@@CBA@@@@@@@@@@A@@@A@@@A@@AB@@@B@@@BC@@@C@A@@@@B@B@@@B@@A@A@@@A@BB@@@@@@MDKDKFGDIBMDIDIDIBE@GBIBEBIDC@GBEBIBC@A@@A@@@AA@A@A@A@@AA@@@@@@@@@@@@@@A@@@@@A@@@A@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@AA@@@@@@A@@@@@A@@C@A@@@@@@A@AA@A@@@A@@@C@@@EAC@@AA@@@A@@@A@@@A@@@@AA@@@@@@@BA@@@@BAC@@@@BA@@@@@A@A@@@@@AA@@A@A@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@A@@@A@@@@B@@AB@@@@@@B@@@B@@@@D@D@D@B@@@BA@ABABA@@@A@@@AAACA@CA@AA@@@@AA@@BA@ADCDADAB@DAB@B@BAD@B@B@B@BBDBF@@@@@@C@@BA@A@@@ABA@@@CBA@A@@BA@A@@B@@@B@B@@@@@@@B@@@@@@AB@@B@@@@@@@@@@@@B@@@@@@DB@@@@D@@@B@@@@@BB@@@@@@A@@B@@@@@@AB@@@@@@@@@@A@@@@@@BABA@@B@@@AABAD@BAB@@BB@@@D@@A@BB@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@B@@@@@@BB@@@@@@@@@B@@@@@@@B@@@@BB@@@B@@B@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@@B@@@@@BA@@@A@AB@@@@@@@@@B@@DCJ@@@@A@@@A@A@A@@@A@C@@@@@A@A@@@A@@@A@A@@@A@@@@@@@@AAAA@@A@@A@@@@@@@@@AB@B@@@@@@@@@AA@@@@@@B@@@@@@@@@@@@@@@@@@AB@@@@@@A@G@A@A@A@@@C@A@A@@@@@A@A@A@A@@A@@@A@@@A@@@@@@@A@@@@@A@@@@@A@@@A@@BAB@@@BA@@@A@A@@@@@@@@@BA@A@AB@@A@@B@@@AA@@@A@A@@@@@@@@@@@@AB@@A@@@@@@CA@@@B@@@@@@@@@@@@@@@@@A@A@@@AB@@A@A@@@@@@@A@@@A@@A@@@A@@@A@@@@@A@@AE@"],"encodeOffsets":[[119712,40641]]}}],"UTF8Encoding":true});}));