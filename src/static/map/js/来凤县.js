(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('来凤县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "422827",
            "properties": { "name": "来凤县", "cp": [109.407828, 29.493484], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AA@E@C@AAC@A@A@EAE@C@E@ABABCBA@ABCBC@ABCBA@@@C@@AC@@A@AAC@CBAB@@ADCBABC@A@ABABAB@B@B@D@DAB@BCBA@E@AACBA@@BA@A@A@CAAAAAAA@A@ABC@A@AB@BA@AAC@C@C@A@AB@AG@CBC@ADADEDADA@@@CBCAAACA@CA@@A@ABA@CBCDIFCBA@CBA@A@A@@@AACAAA@AAACCBC@ABCB@@A@C@EAAAECC@@CCACAA@ABABCBCBABCDADCDCDA@ABA@C@CA@AAABAB@BC@A@CAAAAAIC@@AABADABABAAA@C@A@@BA@@@A@AA@A@@@ABABABIDCBC@CACAAAAC@CA@@ACA@@CAEACAAACAAAA@@A@A@@@A@AA@AA@@@A@@@@@A@@@A@@AA@@@AAA@A@A@A@AB@B@BABAB@BA@AB@@AB@@@BABA@ABABABCBABABCBA@C@CCCAEAA@AB@BAB@B@B@BCDCBABABC@A@@@AA@@@A@C@GDODABCHCBABC@AACAGCA@ECA@IACAECCCAC@G@@AA@K@KAK@AAEAK@AH[@GBG@ECE@CBAF@HAB@BAAC@CBCBC@A@A@@@A@@@@A@@A@@@A@@AA@AA@@AB@@A@A@@@A@A@AAAAA@@AAAAAAAAA@@@A@@AAAAA@AAAA@AAA@AA@ACACCAAAAA@AAACCCAACAAACAA@AAAAA@AAAAAAABAAiOKCCAOIOGMGEE@E@EBADA@@DA@AFEFEHGDEBC@CACAKCIAE@E@EDEBA@A@ACAECEAIMAG@IBCDG@@@ABADC@AD@NIDC@I@C@EECUAID@@C@EEEEECCAEB@@IDGDA@@@@@AFAHABCFEHIFADCFA@@D@@@BA@GDIFGDABEHCDEFCBEBEDEDABADADA@CBA@A@A@ABADAB@BGBEDA@A@CCCACCAAAC@AA@AACBC@GAGCA@A@@@CFGHCHINGH@BDBBB@D@@CFABGFCDAD@@@B@B@BCFABCB@BA@BB@BJPB@DDB@@BAHFJDFBD@@@D@@@D@@BBD@@@B@BDBB@BBF@BBBBBJNHNCFILCBEFKDMDIB@@@@A@A@@@A@@@A@ABA@@@CH@BFJBFB@DNBFBF@D@BCBC@AB@B@BBFFLBDBB@B@BABADABCF@B@@BDBHDH@BADAF@BBB@BABABGF@BABADCFABEDA@EBCBEBKRGHQFABILCBA@EBABEAC@A@DHBDBDBBBD@HCDIPGJGLELIJCJ@HFFLFHHB@@BBD@DBDBBBDBBBBBDBDBDBD@B@BAFSH[@GFAJFNHPLLRAHANFBH@HAHBFBDNA\\UFCB@FBHDJDJHHHHHDJHFJFFFHLDJFHDDHDDBJDNHJDPHB@JDHDDDBBBD@H@DBBBBD@BBDB@B@H@DBDB@D@B@BABC@G@GBE@AFEHAB@BAFBD@BDBB@B@D@J@DBAH@D@JBDB@BBBBBDBB@DB@BABABA@@@B@D@B@DAB@BAJIBAD@BB@D@DAD@DBBB@B@@@B@BBADAD@B@D@DBBB@B@BCBCBGBADCB@BAD@FAFCB@FADB@@BB@F@D@DBBBB@BDDFFBBHJDLDJDPDHHFJBL@HCN@NAJEAIEGBGLKTIJA@ALCJGFKBIBMAK@A@IDIBCFELIBBFJDJAHBLDFDFB@F@HAB@B@D@DABCBAB@F@FAD@DCB@BADCBC@C@C@C@CDIB@B@D@BBD@DCFEB@@ABAAA@A@A@C@CAAAC@C@ABCFEDAFCB@B@HCLCRCLA"],
                "encodeOffsets": [
                    [112089, 30262]
                ]
            }
        }],
        "UTF8Encoding": true
    });
}));