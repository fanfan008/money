const $ = new Env("ELONGCASH");
//需要买的夺宝码数量选项
var taskcodeNum = $.getdata('elongcashBuyNum') || 1;
var setTaskId = $.getdata('elongcashTaskGid') || 4;
let elongcash = $.isNode() ? require('./USER_CookiesList.js').elongcash :  $.getjson('elongcash', []);
let elongcashkey = $.getval('elongcashkey');
const host = "https://x.elong.com/feifang/activity/baseapi/treasure";
const notifyInterval = 1;
const tgmarkcode = "/submitactivitycodes elongcash@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/elongcash.js'
const taskChannel = "26372";
$.tz = "";
let todaytimems = Math.round(Date.now());
const nowmouth = formatDateTime(todaytimems)
var h = '';
var m = '';
//============================
//+++++++++ 函数部分 ++++++++++
//============================
var _0xodG='jsjiami.com.v6',_0x535a=[_0xodG,'HsO9J3/DrMKn','TEhcw40WUMKx','N1AVcMKaIw==','KMO4NsKsw7VY','wph7w4V8DMK7','TsO6w7U0wo8=','w6ENTkYi','a8KjfcO8w5c=','QMOMGzDCjA==','asOZw6wHwpE=','NMKMCkrDvg==','Z8Kvw4HCg8OH','ZsOeWnVn','PMK6FHXDvMKTw5V9c8KOJMKl','w6xVwq1GVw==','CDHDgMKPOg==','w7rCv8OVQcOpKsKIwo7CtsKWwr4y','w7XDhi4Jwp4=','YzQBb8O1','G3U/U8KB','YMKNWsOsw4s=','NT/Diz8R','wqvDvXLDk3DCq8KJw7VAY8KGbA==','esOMGmPCqm9hwojCpMO6','LiXCkMKUTMKS','w7/CpcObXsOpLcKNwpnCtMKN','WMOcbExQ','w456GzPCmw==','wpzCmhwTMMO9w5/DsMKuJSkX','S35fw4QF','Y8KOCQzCvw==','w4VqAsKPw5jCkHDDp8OFUgsq','YMKuAR7Ckw==','fQDDnMOJUSUywpVWwp/DpR4=','Z3nDuAXCqsK7woTDmgtLesKs','UHJPw4wW','ecKQS8Ogw4k=','ESY/HVg=','RsOaR8Kqw48=','X8OoDVdtwpAIHcKYwpU=','w4oLwq7Ch2I=','RDbCgcOqw44=','BQ49GkE=','IMO1LsKNw4JFw4InwrLCtQ==','w7DCi8KQw7bDqQ==','SMO9ExzCqQ==','QMOIw7kLwrw=','HsOwDsOrwrE=','XsKLT8Ojw6U=','w5YmUcKZwqvDoHnCucKiX8KPVQ==','HsOyJknDvA==','fsOiK39j','wpYxXQfCnE7ChcO3DcO6FCh6w4XCnsKnXGU/QjIKwr5GT8K1wqLCvcK3a8KGwqtXB2nCsTYuaiPCq8OywrPChirDuMOAwpHCqVkDwqzDskTDl8KyTMKINSMtb8KtMT7DlAYIO8OBw6PDpxXDljAnwpBBwonCo1BLw6TCnAzDlMO8aFbCqcKgw4JTQsK8PHPDisKrPMOiKMOtBcKAwprDusKwTwzDukEFwrItdA==','wqLDsx5gw7Q=','w61IWivCgw==','44Od5o2f56Sn44Kv6K+E5YaL5Yql5byH6I605Y+aw4J6a8KGw7k7w5LClF3CuUTwmKGR','TsONADwB','w4BuQgg=','SAUH','RcONGHZD','DW9b','XMO8YMOLw6zDkQhxw4/CvXvCpsK+b8KnwpHCvw==','T8K+w5LCvMOsw5BT','VXrDliXCkQ==','R2zDpTLCrw==','w6jCosOdOzs=','S8OewpM=','w4rCosOiZ8OQ','wpd8w4M=','LfCzg4bCqA==','wqPDrnDDmw==','W8O65b6Y5aSi5Lmi6L656Ia45p6p5L2u55ap5p696Zqd56WV6ZKowpcIwos=','w5YbwqDCjGY=','JcO0I8KLw6RY','w4bDihY=','UE9c','acKMT8Kxw7XCocOfw4TClw==','WcO8w4Y/wow=','I/C4goYX','NMKpFn0=','dcOhw5jDiMOWw4RFWsOkZfC9karohKDmnJHotojljafmlrPphJ7DqQ==','5Luv6Lan5Y6L','aMOzHWBf','RcO4w5orwp3Crw==','wqnDrhs=','w43Cu8Khw63Drw==','L8OyKA==','wonxgKS4w7g=','w415AMKH','bcOGwrvCvMOm','w4BdH8KGw7c=','wpnDvlzDs0s=','wpVGw4hFBA==','XwTDq8OxUQ==','wqbDqmTDrUfCsQ==','w4sncmgifX4=','wqzDrxhUw73CuT8=','Z8KhRcOXw4VM','S8Kzw4fCmsOEw4k=','Tw8Zwrkiw4k=','JhbDgyMnwqUp','UsOGGGRN','EMOWJcKSw48=','IsO6PcKow4g=','YsKCSMOFw5I=','f8KIb8Onw6k=','w7ppEivCqlLCjMOqPMKvMyg=','L8OfC0LDgA==','J3QnYcKD','KQrDiCscwoIuwqNbw6wNwoQ=','w7w2wr3CjEY=','wotRKcOY','wpDDi8OwfOemkumQoumogeiusOaLmOWKgO+/kPCXvpc=','IxfDgA==','YsKlUcOh','w4tfwrk=','bhvDlw==','wrHChMKDw6HnpZ/pkKzpqpvora3lp7PotYTvv6Y=','GPC7p4rCsA==','wpDCtWPCnmDCusKbw7NmYfGHsrss5bO66K2e5pqq5pSBwoXohKPmn7DkvJvnlLfmn6Dpm7fnpqvpk7UYw4/Ci8KD','w4Alwq7CqVk=','MD7Dq8KkAQ==','DPGPlYXCsg==','Ik3lh7HmrZbpqoDorafCoueVp+aLsA==','RsKzc8OLw6Y=','w5foh7LmnZ/kvIHnlZvmn5bpm67CrMODZA==','wr7CrCosAA==','w7DCosOd','w63DiDgL','Ch4Y','wrHChMKDw6HnpZ/pkKzpqpvora3mi5Lli77vv6bwo6+9','w7TDkcKa','f/C5kax3','GsKhMcKgwoYQXBLDgcK+8KyArsOe5ouR6KOT6IWW5p6/T+W8j+WljeaKleijpcOVw7E6Lzk=','55ic6Iak5p+R5Li65Yim','wp/CjzY6Og==','VR/CmMO3w7RUZ8ORUHo=','YF7DpDzCvA==','asK2U8Opw7JWwqDDvcKHazPCmQ==','w7xsSx/Clg==','dMOheMKGw4PDlg5qw6LDukrClw==','B3Meb8KV','WsOyA0htwpcNCsKawo5Icg==','UGHCj8OEwoo=','w4h9QADCr8O1w5DDmsK1Oh03','f8OdChYU','4p2o55WC5omX','w5ZIwq9NRg==','FMOJKB8=','wo56w4A=','woLCkRjDtuemmemRsumok+iup+Wkjui0lu+/uw==','dx3DlA==','wq3impDvu5HnlKjmiJc=','w4FtwoTor7nlnaXnvavlhanmjJjkuarkubzli6TnooFy5aeM5p645bWd5o+q5Lmc6K2R56mS5ZGS5YWj6K+I6Kyt44OaS/C+laPpqpLorLrnoZTmjoTkuI3mooDlvqkP','MSjCn8KBXcKZRMO+fg==','YsOLGw==','wqvDoBFU','4pq677ur55SG5ou0','w4EsT8K5wo4=','fcOlb+itt+Wfvee/jeWGquaOtuS4gOmpn+iujOeincOd5aS05pyD5ba+5o2D5Luh6K+456qL5ZO85YSk6Kyg6K2x44GLQPCtp6HpqJXorpbnooHmj63kurjmoq3lv5XDsg==','aBrDksOWdy48woNw','AxUqWsK4w7ZG','L8OiNELDjA==','JiXCncKcXMKf','w7DDkGvCl2k=','w5fDjTkqwpHCknc=','w5w7WQ==','NSIOJXk=','ScOywqHClcOw','w4FCwrFtY8K3MloPwo0AJg==','w4rClEECRsOpwo/DvsOeNnk=','w69rES/CnQ==','Z8OnccOTw6XDkAx3w4XDsA==','UMOlAkJawpc=','w4MCwoPCg1s=','J3lkMMKi','G8ORD2nDnQ==','w486XlUT','w7d+BBXCnUg=','wpnCgBIMMsOh','FBIFJHjDlA==','w4jDgwfCpADCow==','w4VqVj7CmMOv','w4BwDMKQw5jCl3XDsMOHSQ==','QEPCu8O6wpQ=','woPDuCRmw6w=','w4EASsKawqw=','wpnCgBIMMMO6w5rDp8KsPg==','wrzCmAANJQ==','EnBQDsK/','IcOlCMKOw7g=','K8O+IcOnwqEB','JB3DnhUrwpg=','w5k6WsKRwpDDh34=','ISjCn8KBecKO','jsyOjiamVi.NcLonm.yvtDU6MDkf=='];(function(_0x36ff46,_0x7e299a,_0xc0261b){var _0xeb8a8f=function(_0x152ba2,_0x43f157,_0x5a1afa,_0xf99e08,_0x449132){_0x43f157=_0x43f157>>0x8,_0x449132='po';var _0x1cb905='shift',_0x42a25e='push';if(_0x43f157<_0x152ba2){while(--_0x152ba2){_0xf99e08=_0x36ff46[_0x1cb905]();if(_0x43f157===_0x152ba2){_0x43f157=_0xf99e08;_0x5a1afa=_0x36ff46[_0x449132+'p']();}else if(_0x43f157&&_0x5a1afa['replace'](/[yOVNLnytDUMDkf=]/g,'')===_0x43f157){_0x36ff46[_0x42a25e](_0xf99e08);}}_0x36ff46[_0x42a25e](_0x36ff46[_0x1cb905]());}return 0x98c59;};return _0xeb8a8f(++_0x7e299a,_0xc0261b)>>_0x7e299a^_0xc0261b;}(_0x535a,0xaa,0xaa00));var _0x49d7=function(_0x410526,_0x39de9d){_0x410526=~~'0x'['concat'](_0x410526);var _0x26f9d6=_0x535a[_0x410526];if(_0x49d7['rrbxwH']===undefined){(function(){var _0x182334=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x654fd0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x182334['atob']||(_0x182334['atob']=function(_0x2d56e7){var _0x3a2e33=String(_0x2d56e7)['replace'](/=+$/,'');for(var _0x2d302d=0x0,_0x3662af,_0x8fb2cb,_0x3e7b79=0x0,_0x18ba18='';_0x8fb2cb=_0x3a2e33['charAt'](_0x3e7b79++);~_0x8fb2cb&&(_0x3662af=_0x2d302d%0x4?_0x3662af*0x40+_0x8fb2cb:_0x8fb2cb,_0x2d302d++%0x4)?_0x18ba18+=String['fromCharCode'](0xff&_0x3662af>>(-0x2*_0x2d302d&0x6)):0x0){_0x8fb2cb=_0x654fd0['indexOf'](_0x8fb2cb);}return _0x18ba18;});}());var _0x2167fb=function(_0x31888d,_0x39de9d){var _0x89fc3d=[],_0x1dbf28=0x0,_0x542149,_0x20acc6='',_0x3de437='';_0x31888d=atob(_0x31888d);for(var _0x189e24=0x0,_0x2cdae3=_0x31888d['length'];_0x189e24<_0x2cdae3;_0x189e24++){_0x3de437+='%'+('00'+_0x31888d['charCodeAt'](_0x189e24)['toString'](0x10))['slice'](-0x2);}_0x31888d=decodeURIComponent(_0x3de437);for(var _0x38f527=0x0;_0x38f527<0x100;_0x38f527++){_0x89fc3d[_0x38f527]=_0x38f527;}for(_0x38f527=0x0;_0x38f527<0x100;_0x38f527++){_0x1dbf28=(_0x1dbf28+_0x89fc3d[_0x38f527]+_0x39de9d['charCodeAt'](_0x38f527%_0x39de9d['length']))%0x100;_0x542149=_0x89fc3d[_0x38f527];_0x89fc3d[_0x38f527]=_0x89fc3d[_0x1dbf28];_0x89fc3d[_0x1dbf28]=_0x542149;}_0x38f527=0x0;_0x1dbf28=0x0;for(var _0x30160f=0x0;_0x30160f<_0x31888d['length'];_0x30160f++){_0x38f527=(_0x38f527+0x1)%0x100;_0x1dbf28=(_0x1dbf28+_0x89fc3d[_0x38f527])%0x100;_0x542149=_0x89fc3d[_0x38f527];_0x89fc3d[_0x38f527]=_0x89fc3d[_0x1dbf28];_0x89fc3d[_0x1dbf28]=_0x542149;_0x20acc6+=String['fromCharCode'](_0x31888d['charCodeAt'](_0x30160f)^_0x89fc3d[(_0x89fc3d[_0x38f527]+_0x89fc3d[_0x1dbf28])%0x100]);}return _0x20acc6;};_0x49d7['exVOtm']=_0x2167fb;_0x49d7['eFQlTW']={};_0x49d7['rrbxwH']=!![];}var _0xbd499=_0x49d7['eFQlTW'][_0x410526];if(_0xbd499===undefined){if(_0x49d7['HGpVEP']===undefined){_0x49d7['HGpVEP']=!![];}_0x26f9d6=_0x49d7['exVOtm'](_0x26f9d6,_0x39de9d);_0x49d7['eFQlTW'][_0x410526]=_0x26f9d6;}else{_0x26f9d6=_0xbd499;}return _0x26f9d6;};var Base64={'keyStr':'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=','encode':function(_0xf8b2e4){var _0x376be4={'NrLro':_0x49d7('0','KFm6'),'EijGG':function(_0x255c6a,_0x1aefc4){return _0x255c6a<_0x1aefc4;},'FyXWi':function(_0x407f98,_0x53c7ab){return _0x407f98|_0x53c7ab;},'uUpVZ':function(_0x288ee9,_0x429490){return _0x288ee9>>_0x429490;},'nIQEE':function(_0x127d6d,_0x101b20){return _0x127d6d+_0x101b20;},'msHXI':function(_0x581e19,_0x13d79c){return _0x581e19+_0x13d79c;},'BAPLd':function(_0x31dcc7,_0x5e6260){return _0x31dcc7(_0x5e6260);},'PmTrE':function(_0x157987,_0x2e8c81){return _0x157987<<_0x2e8c81;},'qTtnD':function(_0x375711,_0x53c214){return _0x375711&_0x53c214;},'OfUvo':function(_0x37618a,_0x132ac2){return _0x37618a>>_0x132ac2;}};var _0x148a04=_0x376be4['NrLro'][_0x49d7('1','FX@y')]('|'),_0x2576b1=0x0;while(!![]){switch(_0x148a04[_0x2576b1++]){case'0':var _0x5a95e1='';continue;case'1':_0xf8b2e4=Base64[_0x49d7('2','G]@B')](_0xf8b2e4);continue;case'2':var _0x5f25c5,_0x5a0145,_0x20e95d,_0x1b9f17,_0x4cabc6,_0x1f965c,_0x538859;continue;case'3':while(_0x376be4['EijGG'](_0x4713f7,_0xf8b2e4[_0x49d7('3','^#]A')])){var _0x4c9a46='7|2|4|8|6|0|1|5|3'[_0x49d7('4','YnV2')]('|'),_0x5259ce=0x0;while(!![]){switch(_0x4c9a46[_0x5259ce++]){case'0':_0x1f965c=_0x376be4[_0x49d7('5','f6c[')]((_0x5a0145&0xf)<<0x2,_0x376be4['uUpVZ'](_0x20e95d,0x6));continue;case'1':_0x538859=_0x20e95d&0x3f;continue;case'2':_0x5a0145=_0xf8b2e4['charCodeAt'](_0x4713f7++);continue;case'3':_0x5a95e1=_0x376be4['nIQEE'](_0x376be4[_0x49d7('6','H2hf')](_0x376be4[_0x49d7('7','pT[1')](_0x5a95e1,this[_0x49d7('8','FX@y')][_0x49d7('9','KFm6')](_0x1b9f17))+this[_0x49d7('a','wCBP')]['charAt'](_0x4cabc6),this['keyStr'][_0x49d7('b','w*^[')](_0x1f965c)),this[_0x49d7('c','(!Op')]['charAt'](_0x538859));continue;case'4':_0x20e95d=_0xf8b2e4[_0x49d7('d','r9yv')](_0x4713f7++);continue;case'5':if(_0x376be4[_0x49d7('e','0agi')](isNaN,_0x5a0145)){_0x1f965c=_0x538859=0x40;}else if(_0x376be4['BAPLd'](isNaN,_0x20e95d)){_0x538859=0x40;}continue;case'6':_0x4cabc6=_0x376be4[_0x49d7('f','7tj8')](_0x376be4['PmTrE'](_0x376be4[_0x49d7('10','Q]Ll')](_0x5f25c5,0x3),0x4),_0x376be4['uUpVZ'](_0x5a0145,0x4));continue;case'7':_0x5f25c5=_0xf8b2e4[_0x49d7('11','KFm6')](_0x4713f7++);continue;case'8':_0x1b9f17=_0x376be4['OfUvo'](_0x5f25c5,0x2);continue;}break;}}continue;case'4':return _0x5a95e1;case'5':var _0x4713f7=0x0;continue;}break;}},'decode':function(_0x1d6986){var _0x2cab0f={'FpssV':'5|7|2|0|1|3|6|4','bxGqy':function(_0x57db97,_0x36357c){return _0x57db97<_0x36357c;},'ggAxf':function(_0x29222f,_0x20ea2e){return _0x29222f|_0x20ea2e;},'CDXKx':function(_0x51a3e6,_0x3ee0ca){return _0x51a3e6>>_0x3ee0ca;},'nDqRA':function(_0x5acf54,_0x28fdbd){return _0x5acf54<<_0x28fdbd;},'OtgkB':function(_0x1dac68,_0x2abcf4){return _0x1dac68&_0x2abcf4;},'AyNCC':function(_0x3472a9,_0x81fd65){return _0x3472a9|_0x81fd65;},'wNxnc':function(_0x1ad538,_0x572ad6){return _0x1ad538+_0x572ad6;},'KesFw':function(_0x42a0ae,_0x2affb2){return _0x42a0ae!=_0x2affb2;},'YhJBU':function(_0x3fe383,_0x370a52){return _0x3fe383+_0x370a52;},'aexdo':function(_0x45faf2,_0x4b7ac9){return _0x45faf2!==_0x4b7ac9;},'OMKQZ':'vRwvi','zGlyN':function(_0x2ed928,_0x430369){return _0x2ed928+_0x430369;}};var _0x1dc2f9=_0x2cab0f[_0x49d7('12','KFm6')][_0x49d7('13','f6c[')]('|'),_0x39abb8=0x0;while(!![]){switch(_0x1dc2f9[_0x39abb8++]){case'0':var _0x5c8e60=0x0;continue;case'1':_0x1d6986=_0x1d6986['replace'](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'2':var _0x39b5c0,_0x16e25a,_0x3bb852,_0x16fcb0;continue;case'3':while(_0x2cab0f[_0x49d7('14','bufW')](_0x5c8e60,_0x1d6986[_0x49d7('15','bl1l')])){_0x39b5c0=this[_0x49d7('16','$pwe')][_0x49d7('17','Q]Ll')](_0x1d6986[_0x49d7('18',')]aL')](_0x5c8e60++));_0x16e25a=this[_0x49d7('8','FX@y')]['indexOf'](_0x1d6986['charAt'](_0x5c8e60++));_0x3bb852=this[_0x49d7('19','H2hf')][_0x49d7('1a','XzEc')](_0x1d6986[_0x49d7('1b','x*5#')](_0x5c8e60++));_0x16fcb0=this[_0x49d7('1c','bufW')]['indexOf'](_0x1d6986[_0x49d7('1d','*$9q')](_0x5c8e60++));_0x58b37f=_0x2cab0f[_0x49d7('1e','e(5t')](_0x39b5c0<<0x2,_0x2cab0f[_0x49d7('1f','pT[1')](_0x16e25a,0x4));_0x516fad=_0x2cab0f[_0x49d7('20','aq%@')](_0x2cab0f['nDqRA'](_0x2cab0f[_0x49d7('21','cm8N')](_0x16e25a,0xf),0x4),_0x2cab0f[_0x49d7('22','e(5t')](_0x3bb852,0x2));_0x269885=_0x2cab0f['AyNCC'](_0x2cab0f[_0x49d7('23','DdvO')](_0x2cab0f[_0x49d7('24','wG4i')](_0x3bb852,0x3),0x6),_0x16fcb0);_0xd79632=_0x2cab0f[_0x49d7('25',')y)0')](_0xd79632,String[_0x49d7('26','DdvO')](_0x58b37f));if(_0x2cab0f[_0x49d7('27','MI]Y')](_0x3bb852,0x40)){_0xd79632=_0x2cab0f[_0x49d7('28','!w!F')](_0xd79632,String[_0x49d7('29','4pfh')](_0x516fad));}if(_0x2cab0f[_0x49d7('2a','JPsD')](_0x16fcb0,0x40)){if(_0x2cab0f[_0x49d7('2b','Mw]X')](_0x2cab0f[_0x49d7('2c','x*5#')],_0x49d7('2d','aq%@'))){_0xd79632=_0x2cab0f[_0x49d7('2e','$pwe')](_0xd79632,String[_0x49d7('2f','ezv*')](_0x269885));}else{return![];}}}continue;case'4':return _0xd79632;case'5':var _0xd79632='';continue;case'6':_0xd79632=Base64[_0x49d7('30','cm8N')](_0xd79632);continue;case'7':var _0x58b37f,_0x516fad,_0x269885;continue;}break;}},'utf8encode':function(_0x579ed4){var _0x24abae={'xgZCz':function(_0x2cb097,_0x283fc0){return _0x2cb097>_0x283fc0;},'ILNWT':function(_0x193b9e,_0xbe357c){return _0x193b9e<_0xbe357c;},'Rafur':function(_0x4f1ded,_0x2e3417){return _0x4f1ded!==_0x2e3417;},'nXglk':function(_0x348010,_0x3a5ac2){return _0x348010|_0x3a5ac2;},'VRjaY':function(_0x441e5f,_0x9d7639){return _0x441e5f>>_0x9d7639;},'Urbsu':function(_0x323eaa,_0xb27d26){return _0x323eaa&_0xb27d26;},'uTwdx':function(_0x58da29,_0x5875e9){return _0x58da29|_0x5875e9;},'nQCjT':function(_0x4ea353,_0x16ab28){return _0x4ea353>>_0x16ab28;}};var _0x5c6fdd='';_0x579ed4=_0x579ed4['replace'](/\r\n/g,'\x0a');for(var _0x3cda70=0x0;_0x3cda70<_0x579ed4[_0x49d7('31',')]aL')];_0x3cda70++){var _0x3bed15=_0x579ed4[_0x49d7('32','4pfh')](_0x3cda70);if(_0x3bed15<0x80){_0x5c6fdd+=String['fromCharCode'](_0x3bed15);}else if(_0x24abae['xgZCz'](_0x3bed15,0x7f)&&_0x24abae[_0x49d7('33',')y)0')](_0x3bed15,0x800)){if(_0x24abae[_0x49d7('34','FX@y')]('PEScC','IhTxl')){_0x5c6fdd+=String[_0x49d7('35','KFm6')](_0x24abae[_0x49d7('36','XzEc')](_0x24abae[_0x49d7('37','4^TA')](_0x3bed15,0x6),0xc0));_0x5c6fdd+=String[_0x49d7('38','r9yv')](_0x24abae[_0x49d7('39','4^TA')](_0x3bed15,0x3f)|0x80);}else{output=output+String[_0x49d7('3a','0el@')](chr2);}}else{_0x5c6fdd+=String[_0x49d7('3b','J(0A')](_0x24abae[_0x49d7('3c','XzEc')](_0x24abae['VRjaY'](_0x3bed15,0xc),0xe0));_0x5c6fdd+=String[_0x49d7('26','DdvO')](_0x24abae[_0x49d7('3d','aq%@')](_0x24abae[_0x49d7('3e','wCBP')](_0x3bed15,0x6)&0x3f,0x80));_0x5c6fdd+=String['fromCharCode'](_0x24abae['uTwdx'](_0x3bed15&0x3f,0x80));}}return _0x5c6fdd;},'utf8decode':function(_0x535c6f){var _0x17601f={'FBEaL':'3|5|0|4|2|1','jxIVa':function(_0x412eb1,_0x96a510){return _0x412eb1<_0x96a510;},'zyAmM':function(_0x6067f8,_0x37037f){return _0x6067f8<_0x37037f;},'rAxoy':function(_0x2efd2e,_0xb8eaeb){return _0x2efd2e>_0xb8eaeb;},'stuUc':function(_0x13e836,_0x160e2e){return _0x13e836+_0x160e2e;},'BbGZM':function(_0x4678c2,_0x385095){return _0x4678c2<<_0x385095;},'GEoGg':function(_0x4b75a0,_0x533ca){return _0x4b75a0&_0x533ca;},'iUMGU':function(_0x241eb8,_0x1e91f3){return _0x241eb8&_0x1e91f3;},'YkAkd':_0x49d7('3f','G]@B'),'ROsgT':function(_0x4a6aba,_0x13690a){return _0x4a6aba+_0x13690a;},'kjxed':function(_0x23cb76,_0xcfe63){return _0x23cb76|_0xcfe63;}};var _0x514ab7=_0x17601f['FBEaL']['split']('|'),_0x1189c8=0x0;while(!![]){switch(_0x514ab7[_0x1189c8++]){case'0':var _0x1b028c,_0x3351e3,_0x46f327,_0x49cde2;continue;case'1':return _0x283cd7;case'2':while(_0x17601f['jxIVa'](_0x20b499,_0x535c6f['length'])){_0x1b028c=_0x535c6f[_0x49d7('40','^#]A')](_0x20b499);if(_0x17601f[_0x49d7('41','YnV2')](_0x1b028c,0x80)){_0x283cd7+=String[_0x49d7('2f','ezv*')](_0x1b028c);_0x20b499++;}else if(_0x17601f[_0x49d7('42','uk2*')](_0x1b028c,0xbf)&&_0x17601f[_0x49d7('43','wCBP')](_0x1b028c,0xe0)){_0x46f327=_0x535c6f[_0x49d7('44','bufW')](_0x17601f[_0x49d7('45','4[@$')](_0x20b499,0x1));_0x283cd7+=String[_0x49d7('3b','J(0A')](_0x17601f['BbGZM'](_0x17601f[_0x49d7('46','cm8N')](_0x1b028c,0x1f),0x6)|_0x17601f[_0x49d7('47','e(5t')](_0x46f327,0x3f));_0x20b499+=0x2;}else{if(_0x17601f['YkAkd']!==_0x17601f[_0x49d7('48','bl1l')]){_0x535c6f+=String['fromCharCode'](_0x1b028c);}else{_0x46f327=_0x535c6f['charCodeAt'](_0x17601f[_0x49d7('49','aq%@')](_0x20b499,0x1));_0x49cde2=_0x535c6f['charCodeAt'](_0x20b499+0x2);_0x283cd7+=String[_0x49d7('4a','Q]Ll')](_0x17601f[_0x49d7('4b','H2hf')](_0x17601f[_0x49d7('4c','^#]A')](_0x17601f['iUMGU'](_0x1b028c,0xf),0xc),(_0x46f327&0x3f)<<0x6)|_0x49cde2&0x3f);_0x20b499+=0x3;}}}continue;case'3':var _0x283cd7='';continue;case'4':_0x1b028c=_0x3351e3=_0x46f327=0x0;continue;case'5':var _0x20b499=0x0;continue;}break;}}};!(async()=>{var _0xac0817={'nFtAc':function(_0x53850e,_0x42278f){return _0x53850e<<_0x42278f;},'SKjmN':function(_0x1e27a7,_0x22095c){return _0x1e27a7>>_0x22095c;},'agrWI':function(_0x3eded3,_0x53b9e5){return _0x3eded3|_0x53b9e5;},'HDXJx':function(_0x35f71e,_0x580a86){return _0x35f71e&_0x580a86;},'sLScX':function(_0x5764f9,_0x393e3f){return _0x5764f9+_0x393e3f;},'ZGUnX':function(_0x3fa9be,_0x3b876a){return _0x3fa9be!=_0x3b876a;},'PrAOX':function(_0x1559a4,_0x1115c5){return _0x1559a4!=_0x1115c5;},'LDRfi':function(_0x46427c,_0x5d8a6d){return _0x46427c+_0x5d8a6d;},'aUsTU':function(_0x347d0b,_0x4f6075){return _0x347d0b<_0x4f6075;},'Rcdrz':function(_0x19d783,_0x2c7db6){return _0x19d783&_0x2c7db6;},'yMtSm':_0x49d7('4d','FX@y'),'TqAMx':function(_0x1807c9,_0x449887){return _0x1807c9!==_0x449887;},'FgrZF':function(_0x68d5a0,_0xbf5b80){return _0x68d5a0===_0xbf5b80;},'efsyi':_0x49d7('4e','7tj8'),'QSSgq':_0x49d7('4f','(!Op'),'VoXKz':'【提示】请先前往获取cookie📲','fiOfI':function(_0x494c8b){return _0x494c8b();},'TsqEq':function(_0x3acb59,_0x49816e){return _0x3acb59<_0x49816e;},'NDDNe':_0x49d7('50','ezv*'),'JwOOW':function(_0x7e626b,_0x471edc){return _0x7e626b+_0x471edc;},'cErdl':function(_0x1732e3,_0xe9668f){return _0x1732e3(_0xe9668f);},'DvXUC':'nUlKI','pWACv':function(_0x52f69d,_0x35e357){return _0x52f69d(_0x35e357);},'DDYRs':_0x49d7('51','V$bh'),'egEDI':function(_0x46401f,_0x333a8f){return _0x46401f(_0x333a8f);},'qxqMf':function(_0x12f34c,_0x32642a){return _0x12f34c+_0x32642a;}};cc=$[_0x49d7('52','(!Op')]+'任务执行通知🔔';console[_0x49d7('53','[9OM')](_0xac0817[_0x49d7('54','^#]A')]);console[_0x49d7('55','f6c[')](_0x49d7('56','G]@B')+new Date(new Date()[_0x49d7('57','wG4i')]())['toLocaleString']());if(_0xac0817[_0x49d7('58','J(0A')](typeof $request,'undefined')){if(_0xac0817[_0x49d7('59','J(0A')](_0xac0817['efsyi'],_0xac0817[_0x49d7('5a',']SQ3')])){return!![];}else{$[_0x49d7('5b','t1pv')](_0xac0817[_0x49d7('5c','4pfh')]);}}else if(!elongcashkey){$[_0x49d7('5d','*$9q')](_0x49d7('5e','t1pv')+$[_0x49d7('5f','ezv*')]+_0x49d7('60','d]2K'));await _0xac0817[_0x49d7('61','YnV2')](githubkey);}else{let _0x5892da=elongcash[_0x49d7('62','bufW')](_0x60ccce=>_0x60ccce['hd'])[_0x49d7('63','w*^[')](_0x26cbd4=>({'uid':_0x26cbd4[_0x49d7('64','XzEc')],'sharecode':_0x26cbd4[_0x49d7('65','H7RN')],'headers':JSON[_0x49d7('66','e(5t')](_0x26cbd4['hd'])}));console[_0x49d7('53','[9OM')](_0x49d7('67','e(5t')+$[_0x49d7('68','DdvO')]+_0x49d7('69','wG4i'));console['log']('本次执行共'+_0x5892da[_0x49d7('3','^#]A')]+_0x49d7('6a','7tj8'));for(let _0x537c8c=0x0;_0xac0817[_0x49d7('6b','^#]A')](_0x537c8c,_0x5892da[_0x49d7('6c','e(5t')]);_0x537c8c++){tkList=_0x5892da[_0x537c8c];if(!tkList['sharecode']){$[_0x49d7('6d','7tj8')](_0xac0817[_0x49d7('6e','4[@$')]);}else{$[_0x49d7('6f','bufW')](_0x49d7('70','4[@$')+$[_0x49d7('71','r9yv')]+']:开始验证~用户'+_0xac0817[_0x49d7('72','t1pv')](_0x537c8c,0x1)+'-脚本使用权限...');if(_0xac0817[_0x49d7('73','r9yv')](z,_0x537c8c)){if(_0xac0817[_0x49d7('74','ezv*')](_0x49d7('75','*$9q'),_0xac0817[_0x49d7('76','0el@')])){enc1=this[_0x49d7('77','ezv*')][_0x49d7('78','pT[1')](input['charAt'](_0x537c8c++));enc2=this[_0x49d7('1c','bufW')][_0x49d7('79','7tj8')](input['charAt'](_0x537c8c++));enc3=this[_0x49d7('7a','aq%@')]['indexOf'](input[_0x49d7('7b','wG4i')](_0x537c8c++));enc4=this[_0x49d7('7c','[9OM')][_0x49d7('7d','$pwe')](input['charAt'](_0x537c8c++));chr1=_0xac0817[_0x49d7('7e','^#]A')](enc1,0x2)|_0xac0817[_0x49d7('7f','bufW')](enc2,0x4);chr2=_0xac0817[_0x49d7('80','bufW')]((enc2&0xf)<<0x4,enc3>>0x2);chr3=_0xac0817['agrWI'](_0xac0817[_0x49d7('81','aq%@')](_0xac0817['HDXJx'](enc3,0x3),0x6),enc4);output=_0xac0817[_0x49d7('82','aq%@')](output,String[_0x49d7('83','FX@y')](chr1));if(_0xac0817[_0x49d7('84','H2hf')](enc3,0x40)){output=_0xac0817[_0x49d7('85','x*5#')](output,String[_0x49d7('86','$pwe')](chr2));}if(_0xac0817['PrAOX'](enc4,0x40)){output=_0xac0817[_0x49d7('87','YnV2')](output,String['fromCharCode'](chr3));}}else{$['log']('用户'+(_0x537c8c+0x1)+_0x49d7('88','r9yv')+tkList['uid']+_0x49d7('89',']SQ3'));$[_0x49d7('8a','$pwe')](_0x49d7('5e','t1pv')+$[_0x49d7('8b','aq%@')]+']:~\x20System💲/执行脚本\x0a开始执行\x20👤User'+(_0x537c8c+0x1)+'的脚本任务');await _0xac0817['cErdl'](main,_0x537c8c);}}else{$[_0x49d7('8c','MI]Y')]('用户'+(_0x537c8c+0x1)+'(ID:'+tkList[_0x49d7('8d','0el@')]+_0x49d7('8e','PXig'));$['log'](_0x49d7('8f','G]@B')+$['name']+_0x49d7('90','ezv*'));await _0xac0817[_0x49d7('91','YnV2')](githubkey,_0x49d7('92','!w!F'));$[_0x49d7('5b','t1pv')](_0x49d7('93','d]2K')+$['name']+_0x49d7('94','wCBP')+_0xac0817[_0x49d7('95','aq%@')](_0x537c8c,0x1)+_0x49d7('96','KFm6'));if(z()){if(_0xac0817['FgrZF']('csnXo',_0xac0817[_0x49d7('97','KFm6')])){$[_0x49d7('98','4pfh')]('用户'+(_0x537c8c+0x1)+_0x49d7('99','7tj8')+tkList[_0x49d7('9a','wCBP')]+_0x49d7('9b','PXig'));$[_0x49d7('9c','PXig')](_0x49d7('9d','H2hf')+$['name']+_0x49d7('9e','bl1l')+(_0x537c8c+0x1)+_0x49d7('9f','PXig'));await _0xac0817[_0x49d7('a0','KFm6')](main,_0x537c8c);}else{var _0x1eec79=string[_0x49d7('a1','uk2*')](n);if(_0x1eec79<0x80){utftext+=String['fromCharCode'](_0x1eec79);}else if(_0x1eec79>0x7f&&_0xac0817[_0x49d7('a2','J(0A')](_0x1eec79,0x800)){utftext+=String['fromCharCode'](_0xac0817['SKjmN'](_0x1eec79,0x6)|0xc0);utftext+=String[_0x49d7('a3','aq%@')](_0xac0817['agrWI'](_0xac0817[_0x49d7('a4','(!Op')](_0x1eec79,0x3f),0x80));}else{utftext+=String[_0x49d7('a5','G]@B')](_0xac0817[_0x49d7('a6','x*5#')](_0x1eec79,0xc)|0xe0);utftext+=String[_0x49d7('a7','^#]A')](_0xac0817[_0x49d7('a8','0agi')](_0xac0817['SKjmN'](_0x1eec79,0x6),0x3f)|0x80);utftext+=String[_0x49d7('a9','(!Op')](_0xac0817[_0x49d7('aa','V$bh')](_0x1eec79,0x3f)|0x80);}}}else{$['log'](_0x49d7('ab','[9OM')+_0xac0817[_0x49d7('ac','MI]Y')](_0x537c8c,0x1)+_0x49d7('ad','^#]A')+tkList[_0x49d7('ae','*$9q')]+_0x49d7('af','w*^['));$[_0x49d7('b0','0el@')](_0x49d7('b1','MI]Y')+(_0x537c8c+0x1)+_0x49d7('b2','*$9q')+tgmarkcode+tkList[_0x49d7('b3',')]aL')]);$[_0x49d7('b4','cm8N')]($[_0x49d7('b5','7tj8')],'',_0x49d7('b6','H7RN')+_0xac0817[_0x49d7('b7','Q]Ll')](_0x537c8c,0x1)+_0x49d7('b8','bl1l')+tgmarkcode+tkList[_0x49d7('b9','0el@')]);}}}}}})()['catch'](_0x157077=>{$[_0x49d7('b0','0el@')]('','❌\x20'+$[_0x49d7('5f','ezv*')]+',\x20失败!\x20原因:\x20'+_0x157077+'!','');})[_0x49d7('ba','IFFt')](()=>{$['done']();});function z(){var _0x4d586e={'mfoll':function(_0x16af63,_0x4bed51){return _0x16af63>_0x4bed51;},'ZzjnT':function(_0x5d1ff3,_0x1a8a07){return _0x5d1ff3(_0x1a8a07);},'JUrRu':function(_0x26af6f,_0x22b235){return _0x26af6f(_0x22b235);},'wHmIL':function(_0x53fa78,_0x24bff7){return _0x53fa78===_0x24bff7;},'guQjV':'ICalJ'};const _0x5d5e49=_0x4d586e[_0x49d7('bb','H2hf')](decodeURIComponent,Base64[_0x49d7('bc',')]aL')](elongcashkey));function _0x542d1e(_0x5dbc61){try{if(_0x4d586e[_0x49d7('bd','*KBk')](_0x5d5e49[_0x49d7('be','JPsD')](_0x5dbc61),-0x1)){return!![];}}catch(_0x408cd1){$[_0x49d7('bf','Q]Ll')](_0x408cd1);return![];}}if(_0x4d586e[_0x49d7('c0','wCBP')](_0x542d1e,tkList['sharecode'])){return!![];}else{if(_0x4d586e['wHmIL'](_0x49d7('c1','t1pv'),_0x4d586e['guQjV'])){output=output+String[_0x49d7('c2','MI]Y')](chr3);}else{return![];}}};_0xodG='jsjiami.com.v6';
//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${host}/${url}`,
    headers: {
      'Accept': `application/json, text/plain, */*`,
      'Origin': `https://x.elong.com`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Cookie': tkList.headers,
      'Content-Type': `application/json;charset=utf-8`,
      'Host': `x.elong.com`,
      'Referer': `https://x.elong.com/feifang/activity/snatchTreasure/index`,
      'Connection': `keep-alive`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000528) NetType/4G Language/zh_CN miniProgram`,
      'Accept-Language': `zh-cn`
    },
    body: body
  };
}
function TaskOptions(url, body) {
  return {
    url: `${url}`,
    headers: {
      'Accept': `application/json, text/plain, */*`,
      'Origin': `https://x.elong.com`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Cookie': tkList.headers,
      'Content-Type': `application/json;charset=utf-8`,
      'Host': `x.elong.com`,
      'Referer': `https://x.elong.com/feifang/activity/snatchTreasure/index`,
      'Connection': `keep-alive`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000528) NetType/4G Language/zh_CN miniProgram`,
      'Accept-Language': `zh-cn`
    },
    body: body
  };
}
async function main(i) {
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲用户资讯`)
  await userAccount();
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲用户任务`)
  await userTaskList();
  console.log(`🐲[${$.name}]:~ User${i+1}💲小猪扑满`)
  await pigInfo();
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲签到任务`)
  if (taskSignState) {
    console.log(`→签到任务已完成🎉`);
  } else {
    await runsign();
  }
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲视频任务`)
  if (taskVideoStateCheck) {
    if (taskVideoState) {
      console.log(`→视频任务已完成🎉`);
    } else {
      const num = 10 - taskVideoTimes
      for (let i = 0; i < num; i++) {
        await runvideo(i);
        await $.wait(3000);
      }
    }
  } else {
    console.log("→视频任务判定失效❌");
  }

  console.log(`\n🐲[${$.name}]:~ User${i+1}💲金币气泡`)
  await goldList();
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲提现0.3元`)
  mycoin >= 3000 ? await txcash() : console.log("→账户余额不够提现0.3元");
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲夺宝任务`)
  await guessTaskinfo();
  await guessWaitTaskinfo();
  await guessResultList(taskcodeNum);
  if ((h == 3 && m <= 15) || (h == 0 && m <= 15) || (h == 8 && m <= 15) || (h == 12 && m <= 15) || (h == 17 && m <= 15) || (h == 20 && m <= 15) || (h == 23 && m <= 15)) {
    console.log(`\n🐲[${$.name}]:~ User${i+1}💲助力测试 `)
    await githubkey("again");
    await sharecheck();
    if (sharecode == 0) {
      await runshare();
    } else {
      console.log(`❌助力失败 `)
    }
  }
  // console.log(`\n= = = [ TF调试反馈内容 ] = = = `)
  // console.log(`如果有提醒-夺宝已中奖清单,未领取编码Code:？？- 请将code汇报给群主谢谢！ `)
  console.log(`\n🐲[${$.name}]:~ User${i+1}💲夺宝任务 `)
  await guessFinishList();
  // await showmsg1(i)
}

//============================
//+++++++++ 函数部分 ++++++++++
//============================
async function surprisedTask(SurprisedId, SurprisedNumber) {
  return new Promise((resolve) => {
    const options = initTaskOptions("receive-prize", `{"periodNumber":"${SurprisedNumber}","treasureId":"${SurprisedId}","mobile":"","contactsName":"","idCardNo":"","address":"","cityName":"","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":"0"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log("\n🎁 成功领取夺宝任务奖励!!!");
                $.msg("🎁 成功领取夺宝任务奖励!!!10秒内送到...");

                break;
              case 8:
                console.log("\n🎁 你的奖励掉在路上了...稍后再试!!!");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function guessFinishList() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=2&activityCode=treasure`);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            if (!data.body.elements) {
              console.log("\n👵目前你还没有中过奖,多扶老奶奶过马路在试试👴");
            } else {
              const taskidArr = data.body.elements
              SurprisedId = taskidArr[0].treasureId
              SurprisedNumber = taskidArr[0].periodNumber
              const taskStateCode = taskidArr[0].state
              switch (taskStateCode) {
                case 4:
                  console.log("\n→有未领取的夺宝任务,开始领取奖励");
                  await surprisedTask(SurprisedId, SurprisedNumber);
                  break;
                case 5:
                  console.log("\n→没有未领取的夺宝任务");
                  break;
                default:
                  console.log(`**** guessFinishList ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                  $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//++++++++++++++++++++++++++++++++++++
async function guessTaskinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log("guessTaskinfo")
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                const taskidArr = data.body.elements
                if (!taskidArr[0]) {
                  console.log(`❌ 没有任何夺宝任务可以做`);
                } else {
                  const cashTaskFilter = taskidArr.filter(name => name.treasureName.indexOf("现金") > 1)[0];
                  cashTaskName = cashTaskFilter.treasureName
                  cashTaskValue = cashTaskFilter.treasureValue
                }
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function guessWaitTaskinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=1&activityCode=treasure`);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.log("== guessWaitTaskinfo ==")
            $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                const cashTaskFilter = taskidArr.filter(name => name.treasureName)[0];
                cashWaitTaskName = cashTaskFilter.treasureName
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function guessResultList(taskcodeNum) {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=1&activityCode=treasure`);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.log("== guessResultList ==")
            $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            const taskidArr = data.body.elements
            const taskcoin = cashTaskValue * taskcodeNum
            switch (code) {
              case 0:
                if (taskidArr === null && mycoin >= taskcoin) {
                  console.log("→还未参与任何夺宝任务");
                  await guessTask();
                } else if (taskidArr !== null) {
                  taskidArr.forEach(task => console.log(`→已报名夺宝任务${task.treasureName}${task.periodNumber}场次`))
                  await guessTask();
                } else {
                  console.log(`→账户余额不够参与${cashTaskName}夺宝任务❌`);
                }
                break;
              default:
                console.log(`**** guessResultList ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function guessTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                console.log("→可参加的夺宝任务清单:");
                taskidArr.forEach(info => console.log(`[ID${info.treasureId}]${info.treasureName}:第${info.periodNumber}场`));
                const cashTaskFilter = taskidArr.filter(name => name.treasureId == setTaskId)[0];
                if (cashTaskFilter == undefined) {
                  $.msg(`⚠️夺宝任务ID${setTaskId}无法执行`,`🤳请到BOXJS修改任务ID\n`);
                }else {
                  //任务场次
                  cashTaskNumber = cashTaskFilter.periodNumber
                  //任务id
                  tasktreasureId = cashTaskFilter.treasureId
                  //任务名
                  guessTaskName = cashTaskFilter.treasureName
                  //花费金币
                  guessTaskValue = cashTaskFilter.treasureValue
                  await runguess(taskcodeNum, guessTaskName, guessTaskValue, cashTaskNumber);
                }
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function guessTaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                console.log("→可参加的夺宝任务清单:");
                taskidArr.forEach(info => console.log(`[ID${info.treasureId}]${info.treasureName}:第${info.periodNumber}场`));
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function runguess(taskcodeNum, guessTaskName, guessTaskValue, cashTaskNumber) {
  return new Promise((resolve) => {
    const options = initTaskOptions("exchange-coupon-code", `{"buyCount":${taskcodeNum},"periodNumber":${cashTaskNumber},"treasureId":${tasktreasureId},"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 1008:
              console.log(`\n\n⚠️${guessTaskName}夺宝码已达上限,如需更换任务,请到BOXJS修改任务ID`);
              $.msg(`⚠️夺宝任务${guessTaskName}${cashTaskNumber}场夺宝码已达上限\n🥡如需更换任务,请到BOXJS修改任务ID`);
                break;
              case 1007:
                console.log(`\n🔐请先成功解锁未解锁夺宝任务,手动参加夺宝解锁活动`);
                break;
              case 0:
                console.log(`→ 成功报名夺宝任务${guessTaskName}${cashTaskNumber}场`);
                $.msg(`📍成功报名夺宝任务${guessTaskName}${cashTaskNumber}场`);
                break;
              default:
                console.log(`**** runguess ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function txcash() {
  return new Promise((resolve) => {
    const options = TaskOptions("https://x.elong.com/feifang/activity/baseapi/common/withdrawal/apply", `{"amount": 0.3,"activityCode": "treasure","tcMemberId": "","platFrom": 1,"channel": "26372"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 9:
                console.log("→今天已提现!");
                break;
              case 0:
                console.log("→成功提现0.3元");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function runPigCoin(pigValue) {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page/receive-gold", `{"treasureValue":${pigValue},"frontType":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→成功收取小猪扑满${pigValue}金币`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function pigInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            pigValue = data.body.piggyBankValue
            switch (code) {
              case 0:
                if (pigValue === 0) {
                  console.log(`→小猪扑满没有金币,今天已收完 🎉`);
                } else {
                  console.log(`→小猪扑满有${pigValue}金币,开始收取金币`);
                  await runPigCoin(pigValue);
                }

                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function rungold(rewardId, i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold-collection", `{"rewardId":"${rewardId}","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→收取第${i+1}个气泡成功🎉`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function goldList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold/list?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // console.log(data);
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                data.body.forEach((info) => console.log(`→${info.remark}:${info.rewardId}`));
                rewardIdList = data.body.map(id => id.rewardId);
                if (rewardIdList.length !== 0) {
                  console.log(`→小计:共有${rewardIdList.length}个任务金币未收取`);
                  for (let i = 0; i < rewardIdList.length; i++) {
                    let rewardId = rewardIdList[i]
                    console.log(rewardId);
                    await rungold(rewardId, i);
                    await $.wait(2000);
                  }
                } else {
                  console.log(`→没有任务金币可收取 🎉`);
                }
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function runvideo(i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10004","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取视频第${i+1}次奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function runsign() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10000","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取签到奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function sharecheck() {
  let sharecodeGroup = Base64.decode(elongcashkey);
  let sharecodeGroupList = JSON.parse(sharecodeGroup);
  let randomid = Random(0, sharecodeGroupList.length - 1);
  let userCodeList = sharecodeGroupList[randomid].code;
  let userCodeLength = userCodeList.length;
  let randomcode = Random(0, userCodeLength - 1);
  shareRandomId = sharecodeGroupList[randomid].code[randomcode];
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","helpPreValid":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            sharecode = data.businesscode
            switch (sharecode) {
              case 2:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 6:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 101:
                console.log("→亲,请不要助力自己欧~~");
                break;
              case 102:
                console.log("→今天助力次数已经用完~~");
                break;
              case 100:
                console.log("→七天只可以助力同一个号两次呢~");
                break;
              case 0:
                console.log("→可以助力,开始尝试助力~");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function runshare() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            console.log(`🃏互助码${randomid}号的第${randomcode+1}码`);
            console.log(shareRandomId);
            code = data.businesscode
            switch (code) {
              case 2:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 6:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 101:
                console.log("→亲,请不要助力自己欧~~");
                break;
              case 102:
                console.log("→今天助力次数已经用完~~");
                break;
              case 100:
                console.log("→七天只可以助力同一个号两次呢~");
                break;
              case 0:
                console.log("👏 助力成功");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function userAccount() {
  return new Promise((resolve) => {
    const options = initTaskOptions("account?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            mycoin = data.body.accountAmount
            // for (let body of Object.keys(data.body)) {
            //   console.log(`${body}:${data.body[body]}`);
            // }
            $.log(`→你的助力码为:${data.body.unionId}\n→目前金币${data.body.accountAmount},约${data.body.canWithdrawalAmount}元,好友助力${data.body.riskLevel}位`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function userTaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            taskinfoList = data.body
            taskinfoList.forEach((task) => console.log(`→任务ID${task.taskCode}-${task.taskTitle}:${task.state ? "任务结束\n🔚" : "任务未完成\n🔜"}任务情况:${task.completedTimes}/${task.dayLimit}${task.unit}\n`));
            //签到任务状态
            taskSignState = taskinfoList.filter(state => state.taskCode == 10000)[0].state
            if (!taskinfoList[3]) {
              taskVideoStateCheck = false;
            } else {
              taskVideoStateCheck = true;
              //视频任务状态
              taskVideoState = taskinfoList.filter(state => state.taskCode == 10004)[0].state
              //视频任务次数
              taskVideoTimes = taskinfoList.filter(state => state.taskCode == 10004)[0].completedTimes
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//============================
//++++++++ 自定义函数 ++++++++
//============================
async function showmsg2(i) {
   if ($.isNode()) {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
        }
   } else {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       $.msg(`[${$.name}]:用户${i+1}`, $.tz);
        }
   }
}
async function showmsg1(i) {
   if ($.isNode()) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
   } else {
       $.msg(`🔔 ${$.name}(User${i+1})`, $.tz);
   }
}
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m;
};
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
async function githubkey(keystate) {
  return new Promise((resolve) => {
    let url = {
      url: `${githubkeyUrl}`,
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          switch (keystate) {
            case "again":
              elongcashkey = Base64.encode(data);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
              break;
            default:
              elongcashkey = Base64.encode(data);
              $.log(elongcashkey);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
              $.log(`\n🐲[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg(`🐲请重新执行脚本进行秘钥验证`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
//============================
//+++++++++ 环境函数 ++++++++++
//============================
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient[s](t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: i,
          ...r
        } = t;
        this.got[s](i, r).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date;
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
