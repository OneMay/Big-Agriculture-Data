(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('蚌埠市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340302","properties":{"name":"龙子湖区","cp":[117.379778,32.950611],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AB@JGFEB@DMAGCGEEE@E@I@CCGCOUCIEKCCKGI@EDKDEBC@K@]@CBOFC@@@ABCFAB@BA@@@@@BB@B@F@B@@@B@B@B@B@B@BADAB@@CBABA@AH@@ABEBBBBBB@BBB@BB@@@@B@@@B@@@B@B@@@B@@@BB@@B@BBBBB@DBF@DBB@FBDB@@B@BBD@HBB@D@D@AB@B@BBB@B@D@B@B@B@@AB@B@@@B@B@@ADE@CTRB@BD@D@B@@@@F@B@@@BA@@@A@C@A@A@E@A@A@@LBFEAI@@@A@@@A@@@@B@@B@@@@B@@JJBD@@@BABA@ABABA@@@@@@BC@AAACAAAA@A@A@@@@CC@@KBAA@AACD@@CB@@C@A@AEB@B@DC@@DBBBHIB@B@@BDBFC@CBA@ABC@EAC@AA@CAAA@E@CB@@G@AB@@A@A@@@A@A@A@E@E@A@@@C@C@A@G@@@@@@@@B@B@@@@@B@@@@@B@@@@A@ABA@@@@B@@A@ABABABABCD@@DDBBHDDDDBB@@@BBDBB@D@FBLBFBB@@@B@H@B@@@@@H@B@B@F@FAD@J@H@DAF@H@F@DBH@FBJDHDDBFDHDHDBBJDDBFBFBD@F@DAFEDCBADAF@D@HBJBHBFDHDDDBBD@B@B@LAFA@A@ACMAIBK@EBI@EAI@@@C@C@ECACAC@@@E@A@@@ECCACAAECCACAC@EAGAC@C@A@C@CACACCCAEAC@AFE"],"encodeOffsets":[[120323,33684]]}},{"type":"Feature","id":"340303","properties":{"name":"蚌山区","cp":[117.373595,32.917048],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@A@@@A@@@@@AAA@AAA@AAAAFABA@@BGB@BADA@@BABC@A@A@A@A@A@A@@@A@E@AAA@@@@B@@ABADEBA@@@@CG@OEEKBOBKFGBO@Q@A@K@IFC@MGGMMAGA]CMBABABA@A@A@AACAAACK@AE@A@AAE@CA@BBFBDFRBB@DBBBDBH@B@@@B@BAH@B@@@BB@@BFJ@BDFBD@@DF@BFJ@@@BFJBB@B@BBD@@@DBF@B@@DF@BBB@BBB@@BBDB@@@B@@DBLJDB@@@@F@BA@@@@BD@@BDBB@@BFBBBBBD@B@BB@@@@B@D@@@@BD@B@B@B@@DB@B@@@D@@@B@B@@@D@@@@AB@F@F@@@BAD@@@B@DAD@B@@DBD@B@BB@@FBBBDCBABABABAB@@@@A@@B@BAB@@@@@@A@@@@@A@@@@@A@A@@@@@@H@B@D@D@@@B@F@F@B@B@B@@@B@B@@@BAH@@@DAF@B@BB@DBBD@FBD@BAB@DAD@AEAC@@@AJAAGAA@CD@@C@AFA@B@B@DA@@DC@BD@BBBLA@@DD@@@@@B@BBBBBBDBBD@@A@@@@B@BABAB@BA@A@@ACII@@@A@@A@@@@A@@B@@@B@@@J@FBAE@KB@B@F@B@B@D@B@@@B@@A@@@A@E@@A@C@C@@AQADSF@BC@@@A@A@@@ABA@@@A@A@A@C@AAA@A@ABAC@C@A@GAC@AAA@@@CAEAA@CAE@CAA@AAAAA@@@AA@@A@@@A@"],"encodeOffsets":[[120233,33668]]}},{"type":"Feature","id":"340311","properties":{"name":"淮上区","cp":[117.35933,32.965435],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@G@OBA@C@MB@@C@@@CBWBABA@C@A@C@K@A@G@ABE@A@@@A@@@@@A@K@E@A@QB@@BB@HBD@B@@BDA@BD@@@BB@@@BDEBBDB@DA@DD@AAB@@@BB@BFNBF@@BBC@@DB@B@@@@@@DA@@BK@@DG@K@A@@B@JBD@L@@@L@DG@MB@@C@@DA@A@A@A@@F@FC@C@@D@D@@D@D@@F@BDB@BDD@BBBFBAB@B@BB@B@BBDDDB@DBBDD@@BB@BB@BF@BBD@@A@A@@@@@ABBDBBDBB@F@F@F@B@BAFADABABA@@BAB@BAD@D@FA@ALA@FDADNBAFTHP@BL@B@@BBL@@NAB@BJ@@@@BAFCB@D@HBLDD@FBF@D@D@HADAFAFABAF@B@DBBBBBDFBBB@FBB@DA@@FADAD@D@FBD@F@D@HAD@FADAFEFCB@BBB@B@@@B@BCDEHKPDD@@@BE@E@QBM@M@ABCDCBABA@AAEGAECCCACBE@C@I@A@BBBBBFHDFFDFH@@DDDDFABA@@BAFAFAFAFDFFDH@F@BBB@B@BBD@FDDDDFDDBDBFBFDFDHDFBHDHBDBDBHDDDBDBDBIHEN@\\BF@LFL@PAD@D@DANCJAN@NCH@LDH@FG@KBIDGHIDIHE@ECCACBCJEPIFIG@AAGEECGECGHAACBCAGL@@KC@BE@C@@@A@AAAAAA@G@AACCAAABAD@BCFABACECGIIICACFGFAB@@C@EAEAOCCAGBEBEB@@@@A@@@ACBA@A@CAG@@CE@@A@A@CCCECCADCBADCBCDCDCBCDABEFEDABIDEBEBKBA@A@C@AACCGCECGAIAGAC@E@CBABCDEFCBE@C@EAEACAICAAGCGCECCAGCICEAG@CAE@G@E@CBG@I@C@EBE@A@A@G@@@@@A@G@A@@@A@EAKAEAC@A@CAAA@@A@CACCGCAACC@@AAEA@@AAA@C@CA@@E@@@C@@@@@@@A@@@GB"],"encodeOffsets":[[120159,33740]]}},{"type":"Feature","id":"340322","properties":{"name":"五河县","cp":[117.879486,33.127823],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EAG@EAE@G@AAG@C@CDCDCBCDEFCDEBIDEDEDCFCD@@EFAFCBCDCDCDA@DDDFDDB@B@@@DF@@BH@D@BABBD@@B@@@@@FAFAHADBPDFBFBD@@@BAHEDEDBJJHJFDBDBADE@ABCBABBDDBBH@B@BBBB@B@B@@@DAFD@@LK@BHADBDGBDHHFFDHFBBH@EJOJIFADBDDD@FGFCJGJCHAJ@LEHG@KCG@MDM@IBMDCBC@C@OBK@KEE@[AM@GFAJBDBLCDADADDFIVCHFLNF@@PJNJD\\DLDD@DBDBDFFFFDDDD@BKFKFCD@@@D@F@D@F@B@BBDBFBLAB@@ABE@EB@BBF@@ANAF@B@BR@B@@DBBFDFFB@B@R@B@BAF@F@HBDDDDBDDFBBBFBDBDBD@FAF@@@D@DDFF@HBDBDDBF@DCDADCBGFAHCD@DDHBDFDBD@HADCBEDADEHADAF@H@D@D@F@BFBRLFBHDPLVNLAFANSH@@@^EPCDAHUHGDEZI@CFWVENKdDDCLKDCFBfFDB^FJAFAB@FAFAFAHAFBFBDDFDBFBF@DAF@FDDB@FBD@FBFAD@FAFAHADAFAD@FBD@HDBDDFBDAHBF@DBF@FBDBDDDFDFBHBDBH@F@F@F@H@FBD@D@DBFD@@AJ@B@B@@VHFEBCBCFG@@@E@AHB@@H@J@D@F@HAF@F@F@D@FAF@FBF@F@F@FBH@@@@@B@@@@B@@B@@BB@BB@@B@@@BBB@@AB@@@B@B@@@B@@@B@@@B@B@@@B@@@B@@@B@B@@@B@@@B@@A@@BA@@A@@A@@A@@A@@A@@A@@@AA@@A@@@A@@@AA@@A@@A@@@@AA@@A@@AA@A@@@@@A@@@A@@@AA@@A@@@A@@@A@@@A@@@@@A@A@@@A@@@@@A@AA@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@@@AA@@A@@@@@A@@A@@@@A@@@@@AA@@AA@@AA@@@@A@@AA@@@AA@@@@A@@AA@@@@@AA@@@@A@@@A@@@A@@AA@@@A@A@@@@@AA@@@@@AA@@A@@@AA@@A@@@AA@@A@A@@@AA@@A@@@AA@@A@@@A@@AA@@@A@CCMEGCA@@AKELKDG@EAGEGIOAC@CHIHAP@XDN@J@HADADCHKB@@A@@BA@@BA@@@@BA@@BA@@@A@@@AB@@@@A@@@A@@@A@@@@AA@@A@@@A@@@A@@@AAA@@@A@@@A@A@@@AA@@@@AA@@A@@AA@@AA@@A@@@A@@@A@@BA@@@A@@B@@AB@@@B@@@BA@@BA@@@A@@@A@@@A@@@@@A@A@@@@@AB@@A@@@A@@@A@@BA@@@A@@@A@@@A@@@AB@@@B@@AB@B@@@B@@@B@B@@@B@@@B@B@@BBA@@B@@@B@B@@@@@BA@@@@@@BA@@@@@ABA@@@A@@@A@@@@@A@@@AB@@@@A@@B@@A@@B@@AB@@@B@@AB@@@B@B@@AB@@@B@B@@AB@@@@@B@@AB@@@@@@AB@@@@@@A@@@@@@B@@A@@@@BA@@@@@AB@@@@AB@@@@AB@@@@@BA@@B@@@BA@@B@@@B@@AB@@@B@B@@@BA@@B@B@@@B@@AB@@@@A@@@A@A@@AA@@@A@@@A@@@@@A@@@A@@@A@@@AB@@A@@@@@A@@@A@@@A@@@A@@@A@@BA@@@@B@B@@@@@B@B@@B@@B@@@BBB@@@@BB@B@AB@@@B@@@B@@@B@@@B@@@B@@@B@@@@B@@@B@@@B@B@@@B@@@@@@A@@@A@@@A@@BA@@@@@A@@@A@@@AB@@@BB@@B@@@B@@@B@@@B@@@B@@@@@B@@BB@B@@@B@@@B@@@B@@@B@B@@@B@B@@@B@@@B@@@AA@@@A@@AA@@@@@A@@AA@@@@A@@@A@A@@@A@@@AB@@A@@@A@@@A@A@@@AA@@A@A@@@A@@@A@@@A@@AA@@@A@@@@@AAA@@@@@A@@AA@@@A@@A@@@AA@@A@@@A@@AA@@@AB@@@@AB@@@BA@@@@B@@@B@@@B@@@B@BB@@B@@BB@B@@BB@@@BBB@@@BBB@@@BB@@B@@BB@B@@@@@BBB@@@B@BB@@B@B@@BB@B@@@B@@BB@@@@A@E@GBC@E@E@CACAC@CCGEECEAC@EDEBCDEDE@EBECCECEAEAK@IAABE@IBG@EAEAECCCICACEEACEAECEAEACAAEACCGAEAE@EBEBADAFAFBHBFBF@HCF@DAF@FCDADCDC@ECECAACCAGECACAECCAECCCECG@GBCBCBCDEDCBCBIBEBCECCACCCCAG@C@ABCBGFCBEDCDGDE@CACAEAEEECEEAAGECAEECCCCECCCIACBCBCBGBABCBCBCDA@@@ABABABEDEBCBA@@B@B@BB@DBB@B@HFHFFDDDBB@@@FAB@BAB@B@B@@A@A@@@ABCLFFINCJ@@A@ECEEGAEAEAA@CAEAE@A@@AG@E@EAE@EAGACAA@GAEAE@CAGAG@C@E@G@E@@@IDA@ABCFADABEFADCDEDEBGBC@A@C@E@CAEAAAECCCAAACACAEAAAC@CCECEACACAEAACGCECEAAAAGAE@A@EBCBGBGD@@C@EAEACAEACCCEAC@CCEAEAEAC@CAEAC@CAE@CCECEAACCAECEACCEACCGAGAEAE@EAEAEACCICAGCECAAAAEAE@CBG@EBCBEBCBCBABEDCDCDED"],"encodeOffsets":[[120450,33716]]}},{"type":"Feature","id":"340321","properties":{"name":"怀远县","cp":[117.205237,32.970031],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@DBB@BBF@@BB@BDH@BBB@B@BBF@D@B@BABAH@B@B@BBH@B@BDH@@BF@BBDBDBDDFBDBBFF@B@D@@AFBDBBAB@B@@@D@BBBF@FBB@BBBBBBD@B@BA@CAA@ABAB@B@DBBFD@B@BA@A@AAA@A@AA@BA@AB@@@D@B@B@B@BBB@D@DCD@B@BAB@B@D@B@D@BBAB@DABB@BBB@B@DC@@BCB@FAB@@@B@DFBB@DDXARIL@@OJEBA@aNWJA@IFWJ@DAFCBAD@HAF@FBDBFBBDFFDFFFFDDBBBFBD@HAD@FBDAB@B@D@FADAHCFCFCBADAFAB@DADBDBDDDBDDDFD@@BBDFDBBBDDNEBDHLFFDFDBFFBABAHG@@FCFEDCDCBDBDBDBD@D@@@@@BBF@FBF@FAHBD@D@DBH@@@@@BBDBBBFDDDFBDDFBBBD@F@DBFBHAFAHADADCDADA@CFADAFADABCFCJAFAD@BAD@F@FADAFADBF@B@D@DAHAD@HAJAD@F@FF@DBFAF@DAFAFCDEDAFCFCFGFCDAFEFADAHAF@F@F@D@FBHBDDDH@DDDBHDB@BD@HBD@F@F@F@H@D@FAF@DBFBFBFBD@FFFBFADAHAFCFADCDCFEBCFCDCFCDAHCJCFCHAH@H@HDHBHAFAFAD@HAH@H@DB@@DFDDDFDD@@BDHJBBHCHAFAJ@FANAZADAB@H@F@JAF@B@JAPC@@@@HCHCB@B@BALBB@LE@AF@B@F@HA@@NAL@JANCL@H@FA@@BAB@JCFAJAFAF@LCNCJCBABEB@@G@@@CDEGMBCEEC@CAG@IAEA@AEABE@CBEDCDEBGAE@C@AACBEDCDAFCDCB@D@DAFBFDHBD@F@H@FADAFABAHC@@FCFAHCDC@ADABADAJCDADCD@JAD@B@DAD@FAD@DCGEGECCAAAACCCCAAACDCD@B@F@DAFAFAFAB@HAFAHAJAFCF@DAF@HCDCBCCGACAC@ACE@CBC@EBCBABADC@AD@AIAM@@HA@A@M@AJA@@@@@@AIA@MB@@AK@AA@K@@AGOESABCMCB@EKB@BEBC@C@ABA@AB@@ABABCBEBABA@E@E@E@A@CAAAACBA@@@@B@B@@@AC@AAEA@@AAA@@CCAA@CCACCAAA@A@@A@ABAEAAA@ACC@ACA@A@EC@C@@@@C@CD@D@@E@EB@B@B@B@@CD@@@NAH@@C@K@@@KAC@I@AB@L@H@@CL@@AB@@C@@@@A@A@@CD@AA@@AEEM@AAA@@A@BBC@@CCBA@ACFAAC@@A@@A@@ACB@AC@@@AAC@GAA@@ACSDMDC@I@G@I@A@C@QEEC@AKIAA@@CIAA@@CGAAOAMAGACAEEAE@E@EBEBEBCAA@@@ABABCBCBCBABADEB@BABCMICKFEJK`EBA@CAECIEECCKEOAG@M@gBOCWCGAAAIKGKAACM@ACI@ACE@CCM@CAKAC@EAEACACAEAEAEEOSoAGCAA@CCACAC@CAEBA@AFCFCB@DAUMKGC@IJADC@GAGAIEECAAC@@@@@A@@@EF@BBBRHFD@BADE@EBKBCBAD@B@DCHGLE@C@BF@B@H@B@DA@EACAC@EBCBAD@@@D@BABEJABEDABABABABADABAB@@C@A@C@A@@@BB@@@@@BCBEBGBKBYHEBGBC@EFIFIFCBKHEDCDIAC@KBA@@D@DDD@DGDQLCBKJEDEDDBBD@FCFEFEBE@EAGCCBEDABAB@@GFC@GHGFSL@BYP@@CDCBABDBBHFH@DAB@BEBIBO@A@IDABA@ABGDIHABCAEAE@ABCDC@CBAD@HABCBA@AJSFMB@ACEAACACBCDAD@FCBC@UDOD"],"encodeOffsets":[[119538,33719]]}},{"type":"Feature","id":"340304","properties":{"name":"禹会区","cp":[117.342155,32.929799],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@DDF@BDJ@BDNBBHLJLBBHBXDPDhAN@H@PBLFDDFFDJBF@DAB_FILEFDLNJADABA@CFABABADADADAB@B@@BBADAFAF@F@FBFFFDBHBNBPBBBDH@@BBDJ@@BBLJ@BFDRFD@B@J@H@J@D@NCTCBDRAB@F@L@B@@@@@B@@@B@F@BAH@B@L@D@B@D@B@BAXADA@@D@@@NAD@B@PAH@B@HA@@B@@@@@@@D@@@F@@ABC@C@A@@BC@A@@@E@EBA@@@@@C@@@A@A@@@C@@@ACA@@@A@A@AAC@@@@@C@A@@A@@A@AACAAAAAE@@AAAC@@AC@@@@ABE@@@@@CAKICA@@@A@@CAAA@@AA@AAA@ACE@@@AAE@C@@AC@A@AAAEI@A@@EI@ACE@@ACCE@AEI@AA@@A@@@ABG@A@A@@@AAGACAA@CAAEQACAE@AG@A@CBA@A@C@@@A@@@C@AAAEAAAGIGAAA@GCIAKDGDA@CAEECCCCAE@ECEACCGCACE@ACCACACEECCCEEEACCCCEA@CC@@GCCCCCGACEGG@EAAKBCBCAC@ADE@AD@BEBEAIACAGBC@ADAF@DBDABABCBC@E@E@C@GBEDCBEBKBEBEACACC@@@@C@ICEAEAKCEAOABHTpFPBFBFBFBDBDBF@FBDBL@DDN"],"encodeOffsets":[[119924,33605]]}},{"type":"Feature","id":"340323","properties":{"name":"固镇县","cp":[117.316913,33.31688],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@ECGEEECEBEBEBAB@@ABEBCCCC@@EGECCEEGAAAA@A@B@J@DAFBDDDFDHBBF@BABABCDAD@B@NAN@R@FAF@@C@OCGLCFADA@@@A@A@AAA@EDEFCBEBC@GBC@E@C@EAC@C@CBEB@@CBA@EAA@AACEAAAACAA@E@ABEBEBCBGBC@C@E@EAC@KCGAC@A@EDAB@@@@@@IB@B@N@BGB@@BNBJC@@BCDABABAD@FAD@DDF@BBDBDDHADCDGDE@CBE@EDIBGBEBGBA@EBEBEBCBE@A@C@CDBDBBDDDDBBBBDDHFHFCDC@EBC@CBA@C@IBC@CDCBIDCBABCB@BCDGDEBED@@GDABEBCBEBG@E@C@GAECEACBC@A@CDEDCBCDAFBD@B@DBFAHCFCDAF@DAFFB@BFBJBH@DBD@FFADHNCF@D@@@HA@AFABIDMDKDE@EBIBEBIDA@AB@@EBG@K@MDIBK@MB@@GBE@A@E@@BKFA@KAABA@A@GDGD@BBB@@@D@B@@@BBB@B@@@B@B@B@@@BBB@@@B@B@B@B@BBB@D@@@D@@@B@@GL@@EDA@CBE@@BE@YBKD@BAVDBJ@F@B@BBBDDJBD@@BBTDFBB@BBBDBD@DA@CDGHCFCDCBEBEBMFQF@@A@@@CE@@A@OBLZHPHBFDBB@BDD@AB@BB@@BBBDBBDBBBDBDBB@B@B@B@@A@ABABABAD@@ABA@@BABAB@@@DBB@@@B@B@@ABAB@B@B@@@B@@BBB@@BB@@B@@@BA@@@A@@AA@A@A@@@AAA@ABA@@@AFABABABADAB@B@@AB@B@@@B@B@B@@@B@BA@AB@@A@@B@@@BBBD@@BB@@@@BBB@@B@@B@B@@@BBDH@BBDBDBB@BBB@BB@@B@@BD@B@B@BBDBBA@CFEFADED@BEBEBC@DL@LBBBBHABBB@@BBDFF@@F@LA@@FCBA@@B@BBFRDTDAFEJGHEFCJGHGJGJEFEFCDCBJBFBNBHBH@D@HBBJ@@@DH@@D@@F@@FFFDFFDFFFDDDFDFBD@@BDBBDH@BBH@NF@D@B@B@B@B@@@BADAD@DADADAD@D@B@FAF@H@DAB@B@D@B@D@B@DAB@B@B@F@F@D@JAJAHAVcLB\\C\\C^I^GBAJGPYDGBEGE@EBCAEBADAFKFABCBCDABEDGHCBCFAFDFB@C@GCCFMDEBGFORC@@JIbUHEPKHAFCJDJAZ@B@DGPGJBPEPKHCL@FCB@D@HHJADAJ@JEHCFCLB@A@E@C@C@GBEBCFGBCFCDABC@GACECACCG@CDCBGHEDABCDC@CAECCCAGAE@CE@C@C@@BE@EACACACAEAACEACCCCCGAE@E@ABA@Q@A@A@EEECAA@CA@Q@@A@ABEBM@@AE@AFAF@BA@@BAAKAEAC@A@A@E@C@E@C@@DCLELE@ACCCCEEEEACAC@CCCCKC[MIOI@@MEEKDGJUCEBCBCDCAKACACACCCGCCACAGAGCEAGCECECEACACAECCCCC@EAC@A@AAA"],"encodeOffsets":[[120296,33839]]}}],"UTF8Encoding":true});}));