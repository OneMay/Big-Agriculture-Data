(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('合肥市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340102","properties":{"name":"瑶海区","cp":[117.309546,31.857917],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBEBAB@BAB@D@@EDCBABA@ABC@ADA@@@A@ACCAA@@@GFABA@@@@@@@GB@@@@@@A@CBAB@@@@@@ED@B@@@@@@@@@@@BA@@@BB@@@B@B@@@B@B@@@@@B@@@BABA@@@@@CBA@@B@@@@@D@@@FA@@BEBCD@@@B@@@@@@@B@@@DA@@@@@@@AB@BCB@@@@@B@@@@@B@@@B@B@B@BAD@BAD@B@B@B@@HHHDDB@@@B@@B@@B@@A@@@@@@BA@@@BB@@@@@BA@@@@@ABA@@@@B@@@B@@@BAB@@@@@B@BBBAB@B@@BBB@@@B@@B@@@@@BB@BB@@@@@@@B@@@@@B@@@BAB@@AB@@@@@@ABB@A@A@@B@@@@@@@@B@@@@BB@@@AB@B@@@@BB@@@@AB@@@@@B@@@BAA@@@B@@ABA@@B@@B@@@BB@@@B@@BA@@B@@B@@@@@BA@@@BB@B@@A@DDBDBFBF@FBNBD@J@@FHFDBJAH@LBHBBHFBFEJGDIDCDCDFJ@J@HBHBHPF@DDJCJB@DD@D@DHFHDJDHBDABCBCDADAJ@F@FBJBFBF@F@DBF@D@F@FABCFCDAFE@C@CFCDA@A@CA@AAA@@BA@A@@AA@@@A@@@@@@@AAC@CAAACAAEAC@E@E@EAE@EDECCAG@GDEBI@AAA@AACDABAB@BADA@EDE@C@BBBD@@B^LJC@AHCNGJCJEJB@@B@DBHEF@JDBOCCDQL_@CBGEEAEAA@@@@A@AAC@C@IKGIAAGC@GECCECI@EULETC@Fc@EBCAG@@@A@@@@AAAAC@@C@@@ABA@CD@B@DA@@D@@A@AB@@AE@KA@CBAA@@C@@@AB@@@D@B@ABF@DBFDJ@HAF@FKA@GEQEICGFEJI@CAG@C@CAAAAA@ABCACAC@ADAFAJAHABAB@@CB@BC@C@CBCE@@@A@@A@@B@@AABAABAAA@@C@A@@@A@A@@@A@A@C@ABAAABA@@@C@@A@@@A@AABAA@BA@A@AE@CAEAEBEC@C@A@ABABA@@B@B@D@B@BABABE@A@@@A@CAA@A@A@ABCDA@C@A@A@A@@BA@ABCDCB"],"encodeOffsets":[[120163,32597]]}},{"type":"Feature","id":"340122","properties":{"name":"肥东县","cp":[117.469382,31.88794],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CC@A@@CECEEGAAEC@@AAA@GEAAGGGGEKGGAAAACEGGCGEIAG@C@@DM@@BIBGCGHGAIMBIBIAEIAEEGEGKEME@@@@MEIEKIIEIIACN@@IGAE@CHE@AG@CP@JECE@@AAA@@@EEEE@GDI@@CCACHE@M@@EAG@EJADAD@BCBAAC@C@EH@B@BA@A@AGDIFGBGAEEGACECCE@CCIAEGGCCGCOSC@C@CADEIIGI@@BG@ABAAAIBG@K[IMGGKKGGCCEIEGAC@CIKIEIAEBG@ECCCECE@@EGEGKC@CDCBAFCFEP@@@DAJ@B@B@BAL@FCX@JAH@FAJAP@LA\\@DAN@JBDAR@H@R@F@FBD@@DDBF@B@FCF@DAFCDGDCBADAB@BBB@BDDBFBDBDBDBFBFBBBB@BDDBDBB@DBDBD@@DBBBDBHBFBBDB@@@BBBD@D@B@@@D@B@B@BABABA@@@AB@@AB@@@D@B@D@@ABAB@BABABCBC@A@A@A@ABA@A@AB@BAB@BADABABCBA@@@ABA@A@C@CBABA@ABABABCBA@A@A@A@A@C@A@@@A@A@@@AB@@AB@B@B@@@BABBD@DBBAD@@@BAFBFBF@DBFB@B@@ABBBA@B@B@@@BD@@@B@BABBBAD@B@B@@@B@B@@@B@D@@@BBABBBBA@BA@@@@BB@@@F@AD@D@DADA@@DA@ABGBIBEBCB@BBDBDAD@BBBBBDBD@H@DBJ@FIHEJDRFHFB@ELE@GBI@ECCAE@BAA@C@@@A@@B@@@DB@AB@DLBF@@BA@@B@BC@@@CBA@C@@DAB@B@@@DD@BBBB@@@@@B@@BHAD@FEdD@FSVK@FDJDFFD@HHDBBHJJLD@D@BBB@@@@@BBBFFFAH@DK`CRDDAPICE@GFCAA@@@IAIFIDMHGD@BID]K@AC@AA@A@DCF@FCBABA@ABCBBD@BBB@BAJCF@HBHDDCF@FBF@F@F@FBDBFDBBBDBD@BB@@@@@@B@@@B@@BB@B@@AB@BBB@@D@BCBED@D@DEFCBEDADEBE@C@E@CAE@E@EAIAEAE@I@CBCBADADCBCDCD@DAFABADBFDFDDFBDBHBHFFDDF@FAFCDCB@@@@A@CACAA@A@ABCBA@E@CBEBCBAF@HBDBDDFBF@BBD@BAD@FH@FBJ@D@FBHBB@@@BD@B@@BBNBBB@@@DCFCDCF@DDBBBBBFBFBFBFBFBFDFBDBDDDDDDDDC@G@ABE@AB@@ABCDC@ADCDCDADADCFGBC@IBEDCF@DCD@FADAH@HAF@DBFAD@DBFBF@DDDDFBB@BDDDDDBDDFBHFDAFBD@HBJBD@FBDBJBDBDBDBDBDDBDDDBFDHAFHAB@DDL@BC@EDAHCBE@C@C@E@E@A@@@@BA@EBCFEDAFCHAFAF@HAFAFCDAHCFCDAFCDABCDADCDABABBD@F@@EA@AAFA@AFAFCDAFCFAB@BAF@FBDBHDHBF@DBF@FBD@BBF@BBB@B@B@@@BBF@FBF@HBHDDDD@BBDDDBFFFBDBDDFDHBDDDBDBFBF@FDDBB@LAD@NR@@@@DFR@DBPLAQ\\TPFTATB@MBGD@D@F@BD@@B@@@ABD@BAJBB@@@F@B@B@DEBBLAFABKBCDEDCD@FBFBDFHBBDB@BBFBB@DBD@J@BAFA@KFAJBDDDAD@H@HAHAHADCDCFCDCFGBADC@@BCBAFCD@F@B@BBD@DBDBDDDBFDFDFFF@DCDCFCDCDAJCD@FAHCDCDCFCBAF@BA@CAC@A@ABCDADEBCBEBE@GBC@CBE@E@E@CBE@CBEBE@CBEAGBEDG@CACEGGECCCCCCEECCCIACBEBCBCDC@IAC@EBA@EDAHEDCDE@CBE@A@A@A@ABABCBABCFEFAD@HADCECCCCACEAAGCCC@@@@@@@A@A@AAAA@E@A@CAGAEAA@EAIAGACAECAACCAC@C@C@CBEBC@CAC@CCCCAC@ECCACACCA@AAAAA@AACCCA@@IGBEGCEBICMIAAGEEECCGCGAGAI@EBEDIAACIEAACAAAA@@AAA@@AK@GCGCCAACCGGGKACACEKCICCCGCKCGACKEA@IEAAEEGIAG@@AACMAE@CCG"],"encodeOffsets":[[120507,32637]]}},{"type":"Feature","id":"340111","properties":{"name":"包河区","cp":[117.309519,31.793859],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CC@AAA@ABABCDAHCDCBE@CDE@E@AAECC@@AC@E@E@Q@GBQAC@IBM@CB[ģhC@AB@B@D@B@BABA@A@GAGCAAABAACAAAAA@C@C@C@A@C@A@AA@@AA@A@@@A@A@ABC@A@A@A@C@A@A@@@ABA@ABABA@ABA@A@ABA@ABA@@B@B@B@@@B@BAB@@@BADAD@B@@@B@@@DA@ABA@A@@@A@A@A@A@@BAB@@ABB@@BAB@@ABA@C@BB@F@BBD@DBD@DBDBDBFDH@BFFFHHFBBHHFFFFHJBDBBDF@BDFBFDF@DBBDRBH@D@B@D@B@B@D@B@D@B@D@B@D@B@@@B@D@D@B@D@B@FAFAFEFEBGACAC@CAC@A@E@C@CACACC@@C@ABEBE@MB@@BBBB@BFF@BBBBBDF@@@@HJBD@@DBBB@BBB@@BB@@BB@BB@BD@@DD@BBBB@@B@@BBBB@BB@@B@@BBBB@B@BB@@B@@@@@@@B@@@B@@@@@@@@@@@B@@@B@@@BB@@@@D@@@@B@@@BD@@@@@@@@@@@@@@BB@@@@@BBB@@@BB@@B@@@@@@@@B@@BBB@@@@@@BB@B@@@@@@@@B@@B@@@@@@BB@B@@BB@@@@@@@@@@@@@@@BB@B@@@B@B@@@@@B@BBB@B@DBB@B@B@@@B@BBB@@@BBB@BBB@@@BBB@@@@B@@@@B@@B@@@@@BB@@@@@B@DA@@@@B@BA@A@@@A@@@@@A@A@@@A@A@@AA@@B@@A@@@@@@@@@@@AFC@@@@@@BADAB@@@@@@@HA@@@@@@B@BAHE@@B@DBBDB@@@B@BCD@BAB@BADAFC@@@CBA@ABAFAFADADCBAB@@AB@B@B@D@B@DCBAB@B@B@DBB@@@B@F@BABA@A@A@C@A@AB@BABAB@D@D@@A@@BCAA@CACBA@A@@@A@ABA@@BA@@B@B@@@B@D@B@B@B@B@B@DABABABAB@BADAD@B@B@BA@@B@DABABABC@ABA@ABAB@B@BAB@B@B@D@DABABA@ABABA@@@C@A@C@@BA@@BA@@B@BABA@A@A@A@C@@@A@CACAA@@A@ACEAGACAAACA@@ACAC@CAAACCC@AAAAAAEAEACACACAE"],"encodeOffsets":[[120221,32487]]}},{"type":"Feature","id":"340103","properties":{"name":"庐阳区","cp":[117.264786,31.878589],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AC@A@@BA@@@AB@@ABABAB@@@BA@@D@@BB@@B@@B@@@DA@@DB@@@@F@D@D@@@@EAECA@A@@@A@A@A@AB@@A@@BAA@@A@@@@@@BA@@BA@@@@@A@@BA@A@@@@@@@@@@@A@@@A@@@A@@@@@AB@@@BA@@@@A@AA@@AA@@@@@@B@@@@@B@AA@A@@@@@@D@@@@A@@BA@ABA@@@A@@AA@@A@@@@AB@B@BA@@@@@A@AAA@@@@@@@BAB@@@@A@@A@@A@@CBA@A@@@@BABBB@@BD@@BB@@@@@@AB@@AB@@@@A@A@AB@@A@@A@A@@@@@@@AA@CAEAA@@@@@CAC@@@A@A@@A@@@@A@@A@@@A@@B@@A@@ABA@AA@@@@@AB@@@A@A@@@@A@@AA@@CA@@@BB@@B@@AB@@B@@BBB@@@BAB@@@@A@A@@@@@@@@B@@A@@BA@A@@@@C@A@@@@@@ABA@@A@A@@@A@@AA@A@@@AA@@A@@BA@@BA@@@C@@@@@@@A@AA@B@@A@@@A@@AA@@@@AABA@@@@@@A@@A@@@@@A@@A@@@A@@@@@@B@@@B@BABA@@AACA@@@A@@@@BAB@@ABA@@@@@@@B@@BD@@A@BB@@@BB@@@BB@A@@@A@@A@@@BA@@@BB@BB@BB@@@B@@@@A@@B@@@@@B@@@@BB@@@@A@@B@B@@A@@@A@AA@@A@A@@B@@B@BB@@@@AB@@AB@@@@B@@@@@B@@A@@BB@@@@B@@AB@@@B@@BA@@B@@@B@@@DA@@BA@@BB@AB@@@@E@@B@@@@C@@@@A@AB@@A@@AA@DA@@@@@@@@B@@AB@@A@@B@@@@A@@AA@@@AA@@@A@@A@BA@AA@@AB@AA@@@@A@@A@@ABA@BB@@@DAD@BB@@B@@@@@@A@A@@@A@CD@J@DL@ADDBBDADED@DEFGBA@GD[@@GBCN@BEH@JGDC@G@E@E@@@AA@AB@@@@AB@@@A@@@@@AA@@A@A@@@A@@A@@@@@@A@A@@@@@AAB@@AA@@@@A@@A@A@@@A@@@@A@AA@B@B@@@@@B@D@BB@@BABB@@B@BB@BB@@@BBB@@@@CB@@A@@B@@A@@B@@AA@@AB@BA@@B@@@B@@B@@@@@@B@@AB@@@@@A@@A@@A@@A@A@@B@B@B@@@@@@A@EB@@A@@@AA@AA@@@A@A@AAAA@A@@@AA@@@@A@A@@@@@@A@@FCDEFCDAFCDCDABCBA@ABA@A@C@A@A@CBA@ABA@CBC@CBABA@@@ABA@@@@@A@@A@BA@BB@@B@@B@@AB@@A@A@@BA@ABA@@B@@@@A@@@A@@B@@B@@@@BA@@BBB@@A@@@AB@@@B@BB@@BA@@@A@A@@@A@ABGHCDCD@BCDA@C@@@C@CDCBABADCN@DAF@D@D@AB@@@B@@@BAB@BA@@B@BAB@@@BABA@@B@@@D@@@B@B@@@B@B@DA@@DAB@@@B@D@B@@@BBBD@B@B@B@@B@@B@@BBBB@@B@B@BAB@BAB@@@@AB@@@BADAB@@@B@@@BAB@@AB@@@B@B@@@B@@@DADAFAB@@@BABA@@BA@@@@BAD@FAB@BAD@BAB@BADA@@B@D@D@B@B@D@B@@@BB@@FBDBHFDDB@@B@BB@@B@@BBBADABADA@ABCFADCFEDABE@A@@BCAC@@@A@A@@AEBC@ABADAD@BBBBBDDDBDBBD@DBJ@DBLDFBHBDBHBBAD@DABA@E@ABABAD@BAB@DABABADBFRFTDDBBD@@@HAD@BBD@BBLBBB@@DBDBF@BADAB@FEDCBA@ABE@C@E@GB@B@B@FBFBB@B@@@@AAA@@B@@A@@@@@AA@@@AB@@@A@@AA@@A@@@@AB@BA@@@A@@BB@A@@@A@@@@BA@@@@AA@@@@@ABA@@A@@A@@A@@@@@@@@@@AB@B@A@BA@@@@@@BA@@BA@A@@@A@@@@@A@@@@@@AAA@@A@@@@@AA@@@A@AA@@@ABAAA@A@A@@@@BA@A@@@A@@@A@@B@BA@@@@B@@A@@@@AA@@B@@A@@@@B@@@@AA@@@@A@@CAGCGG@@@A@A@ABC@ABC@A@A@A@A@@@A@@@@@A@@@@DA@ABA@@@@@@B@@C@@@A@@@@@@@A@@DCFA@AB@@E@@@C@@@@@A@@@@A@@A@@@@@AA@@@@@@A@@A@AA@@A@AAA@AA@@A@AAA@@@A@A@A@CAA@A@AAA@@@@@A@A@@@A@A@"],"encodeOffsets":[[120092,32619]]}},{"type":"Feature","id":"340121","properties":{"name":"长丰县","cp":[117.167564,32.478018],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@AACCESEQCAABABCBA@ABC@ABAB@B@FABCBC@ABGACAGAEAKCCAI@CAC@AAACCCACAAAAC@CBAB@BADBF@@@B@B@@BDAD@@@BAFCBEFCDEBAD@BCBABCBABAA@@@AA@@A@AA@CCGECAEA@@AA@@A@C@A@A@C@C@A@@@CBABA@ABC@ABA@EBC@AB@@@@AB@@ABAB@@A@EBCBCB@@A@@@A@A@@@A@@BA@AB@@A@@@A@CBAB@@A@@B@@A@ABA@ABA@A@@@AAAA@@@AA@@@@A@A@AACAA@@A@C@A@@@A@CB@@CBA@A@@@A@A@@@C@@@A@@@ABAB@@A@ABA@@@ABA@AB@@A@@@A@@BA@@B@DDHDH@BDHBD@D@F@B@@CBA@C@E@C@CFGFGBM@A@@BCFEFEBEDEDEBDD@BBBFHDHBFDDBFBFDFBFBH@D@DBD@H@FCFCDABABEBCDEBEDCDCDABAFAD@@@DAFAD@F@DAD@D@D@@@DABAFADAHADAF@@EFCFEDA@C@E@GB@@CBGDCB@BADADCDADAFADAH@FADCH@FAB@FBFBFFBF@F@HAF@F@F@HBD@HDDBDBDDDBBDDHFF@F@D@@@D@FADBD[NMJ@DAL@D@DFFDFFDDBH@FADBD@F@D@F@F@D@H@FBB@FBFDDBBBFDBDFDBDBBBBBD@DBFBH@B@DBHDDDHBD@D@DAH@DAD@@@@ADCDCFGDEACACAAACACCECC@E@CDAFAHAD@FAF@DBF@DDFBDDDDDDDBH@BBF@DHDFFFHBBBDADEBEBCAECG@AFCDADCFDDFBBF@D@F@JBH@JBFBHAF@J@D@BABA@A@OCO@EAKBIBQDFF@HBJAF@@@B@@BB@@BD@@@@@@B@@@B@@@B@@BB@B@B@BBB@@BBBB@BB@BB@D@@BB@BBDB@@HBB@D@B@B@@@DBB@@@B@@@@BB@@DB@@B@B@@@B@@BB@@BA@@BDBBBB@B@DB@@BBB@DA@BBABB@@B@@BB@@AB@@AD@BB@@B@@B@BBBB@@B@@D@@BBB@BFBBB@BB@@BDB@BDBB@@BBBBBDB@BB@BDFBDBFA@@BA@@B@B@B@B@B@@A@@@@B@D@B@D@DDDBD@@BDBBB@BD@F@HBBBDDB@HBJADCDEBBJBDBBDBHFB@@@@@@BB@@@@@@@@B@@@BB@B@B@B@@@B@B@B@B@BBBB@A@@BA@@BAD@B@@@BB@@B@@A@@BA@@B@@@@@DB@B@@B@B@BADA@AB@FGB@@CB@@@BBB@DBDBB@DABBB@B@@@DCB@B@B@@@B@B@BA@@@@@AB@@@B@@@@@B@@@@@@AB@@@@@BB@@B@@BB@@AB@@@@@@B@@DBBBB@BBFD@@BB@@@BB@BF@@DD@@@@@BB@BBB@D@@@FAB@B@B@B@@@BB@@B@H@DBH@@ED@F@B@`@@@BGBCBCBCFGDCDC@C@E@EAA@AAO@E@CBUBG@ECC@CBA@@BABABADE@AB@BA@@B@B@DAB@D@H@F@D@D@D@FAB@FAB@FAFADAB@DABAD@JEDAD@DCLEDAFADA@AB@B@D@D@F@FBFDFDJFDBD@DAFCFCDCDCD@FAF@DBF@HDHBFDHBHDHDFBDBD@FBHDFBDDDBFDFBDDDFFJBBFDDBFAHCBCDCDCFA@AACEEEEEECAEECECEEGAE@ACGACAC@E@C@C@A@C@GBEAE@CAGAECEACCAEACCGAECCCCCACHCHAF@HBF@FBHBFBFBFBFCDEFCBCFEDAJCFADAB@F@HAF@HAFAH@JCBGDM@I@G@GECIAMACACAEECECGEGGGACCECIAA@AAGACCECGCEACACAE@C@@BCDEBCDCDEBEBECGAECCACCCCACACACAIACAEAC@IAGAC@EACBGEEACCCACCCC@AAACECC@CAEAE@CBCAE@CBE@GBGBC@EDC@CDEFCJAD@HADEBCBCDCDCBCD@DCBA@@BAF@BAH@D@CCCCCCCCCAEAECEAEAEAEAEAAAAACA@CDEDCDE@C@@AAMAAA@@@AAC@@A@GAEAC@I@EAG@@EBC@AAC@AAECEACAC@GBEDAFADAF@B@DABAB@B@DBDBB@@@@@DADCBE@ECEECGEGACAEACCCEAEBCBABE@CDCDCGAICGCGE@C@CCCA@DICI@COEAGAG@G@IEIDCDCJCHCFIAEGEAAAG@KBGAIECEG@@@IACAM@EAEAEACCCA@EAEAA@A@A@@H@F@DAF@BABCDEFA@CBABE@CACA@@AAKAAAC@AAC@GB@@"],"encodeOffsets":[[120067,32720]]}},{"type":"Feature","id":"340104","properties":{"name":"蜀山区","cp":[117.260521,31.85124],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EE@ACGAEACAC@CAC@CAC@A@EAAEBAB@BA@AFAD@BAHADAFEJ@D@B@F@F@B@DCHADE@@@I@@D@BBB@B@B@FMBCDCDABGJILGLABGNFDDCDBEDJHHGBAGC@CDAHF@BBBB@BBFCEEDAHF@FHJDACCBAEC@@HEHCFJ@BDHC@BDAB@BHABBGDBD@@HCHJQLEDABAABAGG@@@AC@CCC@@AEG@@GCA@EAEAMIGFCDCBEFEDBDDF@D@LADAF@BCFN@D@JBAGD@@ADCBDB@BDDDB@@HDABED@@C@CF@@BA@@@AB@BB@@BB@@HABCDADA@BB@@@@@@@ADADBDFA@BBEDA@A@CB@BA@ADAB@@@@@@AB@BDD@BC@CBABACDA@ACBAAA@ABA@AB@@A@A@@@ABA@A@ABA@EBGDIE@ABAAA@IKBCGAAABAACBA@@B@BFBABFDABBBABBDCBA@ADCD@@EAGEAAICACQMOKIIEE@@A@A@A@A@A@AA@@A@A@A@@AA@A@A@A@@@AAAAAA@AKC@@@@AB@@@@@AA@@AA@@@@@@@AAA@@A@@ABA@@@AAAA@@AA@@A@AAC@@@A@@@@AA@@@A@ABAB@@@BA@AA@B@BA@AAA@A@A@A@A@@@A@A@@AA@@@ABA@@B@@@BA@@@@BBB@@@@@@A@@@CB@@@@@@@DA@A@@@@@A@A@@AA@@BA@A@A@@@A@@@A@@A@@AB@@@@G@@GI@EAE@G@GBE@EAC@CEMOEAABE@E@E@G@G@EACAEAE@E@EBE@E@C@EAEAEACD@BBDBBFDHBBBADCFCFABBD@B@HABABEBGBC@CBKFEDEBCAAACCEEE@CBEREJEFCBIFABCLCBADEBEF@BBDB@D@FBRBPBNDHBFB@D@D@BADCDEJABADBD@BDDBDBBBFBFABAFANBB@BBDDBDBKDC@GEMHGFGBIF@JGFGFANBDG@KHGBAFAHEFED@BADC@ADABEDABADA@@DABCDAB@BARFDDFBFHFNFNDXBHBD@PBPDRDHDDBHDHDBBBBOR@PGJCDBDBBDBFBFH@FADAHADCJHBPCHELAD@DBTGFAL@F@H@L@BCAMBG@CFCHGHCDIAIAELBJFNDNDDBDBDDFB@BFAFCFCFAFEDE@AB@N@HAHEDED@F@D@B@DA@@@A@E@CACCG@ACGCG@C@AB@@C@CBE@CDMBCBADADCD@@@D@B@DC@ADCDCHGBAB@@@B@B@@@B@@AA@@A@A@@BA@@B@@@AA@AB@@A@@A@@@@AB@@@B@@@@@@AB@BAB@@AB@B@@@BA@@@AA@@@AAB@@A@BB@@@@@B@BA@@B@BADAD@DAB@BAB@DAB@B@D@B@B@BAB@DABADCDCBEDCFEDC@EB@@@@@@@@B@B@@B@@B@@@BBBBBB@B@@@B@@BBB@@B@@@FAB@@@@@@@@A@A@AB@B@@@@BB@@@@B@@@@BA@@@A@@@@A@@@@A@@@AB@@ABA@@BB@@@AB@@@@AB@@@DA@@@@AA@A@@AAA@@A@AA@BA@AA@@A@C@A@@@@@A@ABBB@@@@@@B@@@B@BB@@@@@BB@@BA@B@@@@@B@B@@@@B@@@@B@@@B@BB@@B@@@@@B@@BA@@@@BAB@@B@@@F@F@HCDIHG@AFM@AD@H\\@HCB@HAFE@CFCBCACCABCK@@C@IDCB@@@B@B@@@@@@@@AA@@ABC@C@@AAB@BA@@@BB@@@@@BBA@@BB@@BABB@@@@B@@BB@@B@@BB@@@@@@AB@@@BA@@@A@@@@@@B@@CBB@@@BA@@B@B@@D@@@@@@AF@@@@@BAA@@AB@@AB@@C@@@A@@@AB@@AA@@@A@@BA@@@@@AA@@@BA@@@@@A@@@@@BA@@BA@@@@AAA@@@@AB@B@@@BBB@@@B@@@@A@AB@@@@@AA@@@@@A@@@@@AB@@@@@@A@@AAA@@AAA@@B@@A@@@BB@@@B@A@@A@@AA@@A@@A@BC@@AA@@@@@@@B@BA@@BA@A@@B@@@B@BD@BB@BA@A@A@@@A@@@@B@@@B@@@@B@@@@@BB@@@@@@@ABBB@@@@BB@@@B@@@BA@B@@B@B@@@@@@@D@@AB@@AB@@@BB@@B@@@BBB@@@B@@@B@BB@BA@@@@@@@B@D@@B@B@@AB@@@@A@@@@@@B@B@@@@@BA@A@@AA@AA@@@BA@@@AA@@A@@DB@@BB@@@B@@B@B@@@A@@B@@@@BBB@BA@@@BA@@@@B@@@BB@@@@@@BB@B@@@D@DB@@@@B@FBDBB@@B@@@@@@@B@BB@@@BAB@B@@@@@BA@@BA@@@@@@AA@@AC@@AABA@A@@B@B@DA@@@BB@@@@B@@A@AB@@@@@@B@BBB@@@@@B@@A@ABA@@@@@BB@@BB@@@B@BAB@@AB@@@@@@C@@@@B@B@@B@A@@@@@A@@@@B@@BB@@B@B@@B@@A@@BA@@@@B@@@B@@@B@@@@@@@@@@@B@B@@AB@@@@@B@@AB@@A@@@@B@@@BB@AB@@@BAB@B@B@@@B@B@FDFB@@@@@C@C@E@@A@@CB@@C@@@AA@@@AA@@@CB@@A@@BABABA@@BA@@B@@AB@D@@B@A@@@@@@@@@@@@@@AA@@@AAA@@@@@@@AA@@@@@@@@@@AAA@@@@@@AA@AA@@@@@@@@@@AA@@A@@AA@A@@@@AA@@@@@@@@@@@@@@AC@@A@@@@@@C@@A@@A@@@A@@@A@@@@@@@@@@@A@@@A@@@@@@@AA@@A@AAAAA@@@AA@@AAAAA@@@AA@AA@ACC@@ACA@@AAA@@AA@@AA@AAACA@@ACGI@@@@CEAAAA@AEE@AAAAA@@NAF@FABAD@@@DDDBDBD@F@B@D@DBD@DBHBFAFEBEBE@E@A@C@A@C@C@A@@@A@C@A@C@A@C@A@C@A@A@C@A@CAGCQAA@CCEAECE@ACEAAACGIEEEEGGAAGEEG"],"encodeOffsets":[[120061,32462]]}},{"type":"Feature","id":"340123","properties":{"name":"肥西县","cp":[117.157981,31.706809],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EIGDGF@@FDABDDCBGI@EGECBFFEDAAA@AA@AGECB@DHDABGHIGFCCACDECHMBAHKJKHIBADCDCNA@E@A@AAA@A@CJ@@@F@BCDG@C@A@E@E@A@CFIBEBCBG@ABCBEB@@ABAFAD@B@BA@@BA@AA@BA@@BA@AB@B@B@B@@@B@B@BAB@@C@@@A@@@ABCBC@A@@BA@A@A@@@A@A@AB@BAB@BAB@B@BAB@BABAB@BA@@B@B@D@B@B@B@D@BAB@B@@@B@B@@BB@@B@B@D@B@D@D@DBBBBDBBBBABBHDHBB@B@BA@A@A@C@ABAD@Ĥg@KBOBI@EBG@IDW@EBK@A@A@ABI@C@@FODEBEDADCD@AAAACAIAK@I@E@E@C@EBI@G@IAICAACACAMESGIKM@G@I@@@MEKCGBC@MCS@KCGCGEE@AACAA@ECEC@AEC@AA@ACCCKIGCIGEFEFAAABCA@@CBA@@BAB@B@@@@CFBBBBCBAJ@BBH@@BBMD@LA@ITCBCAEEAAG@EDAB[RI@M@GA@@GCKAA@KAKAEAC@C@AJEFIDK@ECA@CC@KAEGBGBSEMDODE@G@CBABEDGFEBGAGBC@OGEGMI@GAAIDC@C@ABAFGDOBAFA@CAE@GFAEC@I@GDGBA@MAGCAADCCKIDAGDCEACFA@GCABDBBBCHC@@CCACDE@A@MCOKKJUACDCAICG@KAA@GDC@AEI@C@ABBDADOEGBA@IAGFCEOCACGAIAA@E@MCI@KEGCCAAA@@A@@@C@AA@B@BC@@@A@@@@@A@@@A@AB@B@BABCB@BAD@@A@@@A@@@A@@B@@@B@BAB@@C@A@@BA@A@@@AAA@@@A@@@A@@B@@BB@B@@@BABCDA@@@EBA@CBABABC@@@A@@DADADABABCDABADCBA@ABCBCBAD@BA@@B@BABAB@BGDABAB@B@B@B@BCDAF@B@B@B@BDF@BBB@B@DAF@B@B@D@F@D@B@D@D@DBFAJABAB@BCBAB@@@@@DAFCFCBAHABAL@H@HBFBDDFDD@BDFHHDDBD@FAH@DADEF@D@BAD@BBJ@H@DBBAHAHADCDCFGLAF@FBFDH@@BBBDBHBF@J@@BHAFAHEDEBG@E@I@EAE@A@ABC@@FBB@BBBBB@BBD@FCFEBABCAIEC@CB@BAB@BAB@@A@@@@@@@A@@@@@@@@BB@@@@@@BA@@B@@@B@@@B@@@B@B@@B@@@@B@@@@A@@@@DAB@@AB@@AB@@@@@B@AAB@A@@@@A@@@@@@BB@@@@B@@@@A@A@@@@BABA@@@CB@@AB@@@B@BA@@@A@@@A@@@@B@@@B@@@@@@C@@@@@A@@B@@@B@@@@A@@@@BA@@@A@@B@@@B@@@@A@AB@BA@@B@BCB@@@BA@ABABBB@BB@B@D@BA@DBDDHFDFFHDHDJDHDHBHFFDBBFBBDDBFHDFGBEAK@E@EHCFBD@D@FCDEDCH@DDFDDHDHBHDJ@JFJDHFJDLDHCNDB@NDNUFBEPBJLDNF@DNNJ@HBDDDBFFJFDFHDLBHHCHDFFDFFHFHDBBBQ@ABADCBA@CB@BCBAFCBABCD@BC@AFCFEBGBEHALGH@ACBMHEHE@IJEHAHENGHFD@LCCACAAC@AAABMBEBAAEAEAAACCC@AACBCBAFIDCBC@A@C@CEAGAMCOAQAEAC@A@AC@AFEFABCDADKBAJEDAFEFIFQDAF@FFDDBBDBFAFCLEDAD@HAFABABA@G@AACBADEDEBCAAGAECAAAC@ADCFBFBFBD@F@F@FAF@F@FBDBFBH@H@F@F@F@BAFBNPDFD@FBF@HAH@F@FBJ@@HH@@@@@BA@@@BB@@@B@@@B@B@B@@AB@@BB@B@@@@@B@B@@C@@@@@@DA@@B@@@@@@@AA@A@@B@@A@@@AB@BA@@B@@BB@B@@@B@B@B@B@B@BBB@@A@ABBB@@A@@BABAB@@@B@@B@@B@@@D@BBB@@@BB@@BBBB@@B@BA@@@BB@BB@@@@@@B@@BB@@B@@@@BA@@@@LD@BBBBBBB@@B@B@B@B@@BB@B@B@@@BBB@B@B@B@B@@@FFJJPLRNBDJDBBHFFB@@DCBCB@DAACBAAABAECBAEA@A@AB@DABBBABBDHLA@JBBAB@BJFHCFAB@BAB@B@BA@@B@B@@@BAB@BAB@BBDA@BCBBDBADAD@@ACC@ABA@@@@@@BABCB@@ADAB@B@FCAAB@CECACB@B@@@@@@AAB@BCDCBA@GA@@AA@@ABA@@B@@AE@@D@DC@AFCB@GA@CCACA@ACCD@BC@BHIAC@M@DE@ABEBC@K@CCEACFCFEDADCHENJFBFBB@HD@@FH@BD@DDD@@B@@HHABBBBAFCRKGIGD@@ACHCAAGB@ABAACD@CG@A"],"encodeOffsets":[[120035,32517]]}},{"type":"Feature","id":"340124","properties":{"name":"庐江县","cp":[117.2882,31.256524],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBEBGBE@EAECA@ECMGICE@ECAC@E@A@G@AACIAC@I@CBCBAFADADB@DBBDBBAJCFEJGJEH@D@BCBEDEBEBEAEAEEE@EBM@GFEFGJCBG@C@GMCGCGEAG@GCCAEBKDEFGHIHMLKLEDABCBIFKDGHCDA@AHAJ@FCFEJGFCJCJCFKFEBCDEDCBEDEDCBCDAHCDKJCBCBA@E@ECKMEECAEBC@E@CAC@GAE@CBOJGDMJ@BBNBH@BBBDF@BANAF@DCDAB@DAF@FDBBDDB@B@BABAD@B@F@BBBBBBDBB@FAFEDCF@DEJABGN@B@FCHEF@BAB@B@@AF@F@BEDGJMTCF@B@@OXAH@B@DENCBCBE@C@KAE@A@C@C@CDEDCHGRCDCBCBG@FJHFFFFDBB@H@FAF@FFFHDLBLBDDHLBH@H@NAJ@JBHBHDLDFFHFH@HCHEFCDADAH@FBHBFDHFFDF@BFF@BDFDJFLFLFHDHFHFHDHFLFHHJDHFFFFHHHHHHFHFHFFDJBDBBDBDBDBBBDBRFdDB@b@HAJAV@N@Z@HBB@JJFF@BADABGDA@ABDBBABBFEFEJHHDLJDDBDB@@BFD@BFDFDB@DBBBF@HFHDLDT@NDD@HALDNF@@J@H@N@JLTHNFDBDBBBJDJBH@J@FAD@F@F@J@L@JBDBBBBBHLHFAE@CBCBAHCJ@BAJCB@JGDMLMHIHIDIFIDEHEHCHEHCHCHGDEJIFGDCFEFIDCDGJIHGHGFGFGDEBCBCDCBADA@E@GBC@C@ABCBE@AAEAE@IBK@K@E@@CCACMMACACAEAACAAACEAEAACCEICGCECCAAAAAACE@A@Q@Q@CAIKYIQNGCMJBBAD@B@DAAA@@B@@@BAB@@AAAlEHAZCFAB@@ABAFGDE@A@@DSBEBGAGW_EGCCASAGIGMGGCUEICTUDALEJEPKDKDE@SIGBKCEAAIEI@KCKECEAE@G@G@EAECEG@G@ECCG@CBCFG@@LGDCDEBE@GBG@ABAAGCGCIGICKEIAEAAA@U@MAKCGECCBGJEDCFADGDGDEP_GCEAKIEAIAEAA@EAI@QAMCMGEACAAEAEAGAECCIBCBABGBID"],"encodeOffsets":[[120244,31718]]}},{"type":"Feature","id":"340181","properties":{"name":"巢湖市","cp":[117.890354,31.624522],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@AAIGOAI@GAIAEAMA@@@BCFEHAB@BA@EBYDGBkFBB@BA@AB@@A@@@BBCBA@C@ABIADNMHJRLZBJ@D@R@R@BDFBBBBBBDDDFDHFJDDBBBFDFBBDBBBBFBDBDNNBDDD@@@F@LAL@JBFBF@BAFAD@B@DAD@H@FCBABCDADADCFEHEHGHGHIJCHCDEJEFCDEHIJCFGHGDGDGFGDGFCFEJCJGJGJKNCNIHA@IDABI@GDABAD@DBF@FF@FDDDFDH@FAJBJFJL@DBDFHFJDDHHLLHHJNL\\H@JABBAB@BAH@@HJJJCFDBD@D@PTHDDDHHBFDJ@DDFFDBDFHBFAHEHCJBHB@B@@A@AFGD@D@BBDA@ABCBCFIH@FB@@@NGFBDDD@@CJ@HFFFF@@B@BB@@DFIFO@@DBHF@DGF@HB@JM@BDJJJFLJJFNF@@@@NFLFFHFHBFFJJBJANABJGHDHAHAJ@@CN@@@DBHFJDHHHDFBBBBHHFLHHHHBBHFB@BB@@FDBBFHDFDF@@@BDDDH@DBFDNBB@@BHHJFFBBJFB@LFBDDHDLDHDDDJFLBDBDHLHHDDBBDDDH@HBL@@BB@BB@BBDBBBJFBDJBFCFAJ@HBHBHDDDFFHFBBNJJDFAHDAFJHHEDCB@LALC@@BABEBA@AB@@@@AB@@AB@@A@A@A@@@AA@@@@A@@BCBA@@BAD@@ABA@@B@B@@B@@@@@ABAB@@@@A@@@A@@@AA@@@@A@@A@AB@@AA@A@@B@BAB@@@BADI@@@A@@B@D@@AB@B@BBBA@@@@@A@A@ABABAB@@@B@@A@@@@BAB@BBB@@@B@@@B@FA@A@@@A@@@@A@A@@A@@@A@@BA@AA@@@@AB@@@B@B@@@B@@ABC@@AAA@@@@A@@@@@@@AA@@@AA@@BA@@B@DB@@B@AABA@@@@B@@DB@@A@@@A@@A@@@CA@@BC@A@A@A@@A@@@AB@@AA@@@@DAB@@@@@@A@@A@@@A@@C@@B@B@@@B@@@B@@@@AB@@AB@@BDBB@BA@@@B@@@@BB@@BA@@BA@@B@@@@@@B@@B@@@BADA@@B@@@B@B@@BBAD@B@BBJBB@B@DARGFCB@B@V@BAB@BAhS@ABADEA@AACC@A@@BABC@ECI@AAA@C@@@@@ACIAI@@AGAGACCEAECE@A@CCCECCAACEAECCAGCEAEGACCE@EAEACAEAEACACAEDKDGBCBEDCFED@@ADCDEKACEACAACC@EAABEDCDCBADAD@@@D@DAFADABABA@A@@A@AACCEACCAA@C@E@C@ADCBADO@KCIGMCABWDINKB@BEDEDCHEDAHADAD@@A@@@A@A@CAACCF@DALBHEDCTGD@EE@EFACCDODGHG@@@@@A@@@A@@@@@A@A@@@@AW@A@A@@@@WGALFJ_@ABA@CACAAAAE@@ACA@AC@@AAAADE@@@ABA@A@@AAAACAA@@@@A@A@CDEBA@C@@@E@EBA@A@@@AAC@AC@A@CB@@A@@C@A@CBAB@BA@@B@B@@BBA@@@A@A@AAAAA@AA@AAA@AA@C@A@AAAC@A@A@A@AAA@A@A@A@A@CA@@A@AA@A@C@AIEAA@@BG@AAA@A@A@CBAPHD@BAFELODAD@FBHBFBF@F@FABABA@AA@AAACAAAAAACCGEAA@ADCHAJAD@DCDC@EBEBEFAFABCBAAG@@CACAEAECKGCACAE@C@C@E@CBEDAB@BCBCDCDCBCDABCBIBI@EBI@EAEAA@EAGEE@IEGCGGKEEDA@CAECEAEAEAEBGBCBE@I@E@EAECCCGAI@GBGBGBGBG@E@E@IACCAAACAECGAEACG@ABCFCBA@IBICCACCCCEAE@EBG@SFEBGAGACCECCCAEACCM@@AIAE@EAECCAE@EAE@GAEAIAEAAAEEGGG@@GGEGCECEEIEICICICC@AAGEICIAI@GCK@ACGAGCICGEKCGCGCEEEIAEDIAEACCCGAECEEE"],"encodeOffsets":[[120432,32033]]}}],"UTF8Encoding":true});}));