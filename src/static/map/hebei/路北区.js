(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('路北区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130203","properties":{"name":"路北区","cp":[118.200692,39.624437],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@@@@@C@A@@@@A@A@@A@@@A@@@@BC@@BAD@@@DC@ACAA@@@@@E@@EC@@E@@@E@E@@@A@A@G@C@@@C@@A@ECCA@@@@AACAA@EB@@A@C@ABC@ABE@EBCBCBA@G@I@CB@BCHABCDCBADAFCFCHCD@D@B@BFJ@D@@@B@B@B@B@@ABAD@B@@B@@D@DAHAF@DB@BBBBLFFBDBFBDBDDB@DFNP@@@@BBBBJJJDFDDBFD@BB@@D@D@@EF@BCFAB@B@@BDDDBB@@B@BBBBF@B@D@B@FB@@@@@@F@BBB@FA@@@@D@LBHBB@DBBB@@@@B@@B@@@@AB@@@BBDJAJFBFP@L@LBL@H@D@B@D@BA@@@IB@HBB@@A@@@A@@C@C@C@@A@A@@@@@@@@@E@@@@@@NB@GE@@@@@@@@CB@@C@AD@B@@@@AB@@AB@B@@@D@BA@@BEDBFBFDDEGGIG@A@CAA@A@@AA@@@@BA@@@ABA@@B@@@@A@ABA@CAABAA@@@@A@@@@@@@AAA@A@@@A@@BA@@BB@CBAB@@C@A@A@AB@@@BCB@B@@AFB@AFAB@@EB@H@CCAA@@@AGEAAEE@@@@@@@@@@AA@AAA@@@AA@@@ABA@AB@@A@@@@@AAA@@AAA@@CACA@@A@@@A@@@AAEACA@@A@@@@A@@@@A@CAAA@@A@@@A@A@@@EBA@@@@@C@C@A@A@@@C@@@A@@@@BC@A@A@A@A@A@A@C@C@@@I@@@@@@@@@K@@@@@A@C@@@G@C@E@A@A@E@@@E@C@E@@@C@A@C@@@E@@@@@@A@@@@@C@@@@@@"],"encodeOffsets":[[120970,40574]]}}],"UTF8Encoding":true});}));