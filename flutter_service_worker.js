'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "a607088e6862b0f9db199258cf0ddb96",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "062671787fc9ee2e7a2e9bad6c1f79eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/json_data/test.json": "800de6c869a6ba1309b4e817290d7c00",
"assets/packages/flag/res/flag/cy.svg": "135c77a66ab99f0e5b41be14b4f8d4c1",
"assets/packages/flag/res/flag/ga.svg": "4544cd0bb3faf33f633ddb36b134b8f8",
"assets/packages/flag/res/flag/al.svg": "9ca1e7c55a76c6f0c5b34c29ed911c8f",
"assets/packages/flag/res/flag/eg.svg": "98f7dcbe7af8749848ba688e9fc1af2c",
"assets/packages/flag/res/flag/pe.svg": "23f4fbf5e318c51dcdd76271c0c6604a",
"assets/packages/flag/res/flag/ye.svg": "209af6bf0b2f47057aab72bd0392d6f4",
"assets/packages/flag/res/flag/dm.svg": "815a2329fc6db449afed64d280c0ccea",
"assets/packages/flag/res/flag/uy.svg": "f639e12989ff9aa7bbfb4ed47fa8ae8a",
"assets/packages/flag/res/flag/nr.svg": "2526a443e0f48c0a8ee7c3314bf15f85",
"assets/packages/flag/res/flag/hr.svg": "3e56776d23fdd54b4ed116481dd19d2b",
"assets/packages/flag/res/flag/nz.svg": "7d1ea3d5c1fee2c14d81152169da672b",
"assets/packages/flag/res/flag/kn.svg": "1ab2d7d4d373306c4d9ffdca79c80128",
"assets/packages/flag/res/flag/in.svg": "7a482fd38133dd2ac91dbb7a0cfc51c6",
"assets/packages/flag/res/flag/tr.svg": "2254e9c06c40bfac15d3fb9ddf2421e5",
"assets/packages/flag/res/flag/sd.svg": "a53d817395b239599901627a36a6a335",
"assets/packages/flag/res/flag/gy.svg": "3d50da7f6eff25385a33bd1c0cab7fbe",
"assets/packages/flag/res/flag/dj.svg": "3c879837e330f212b02669fd5cb1485f",
"assets/packages/flag/res/flag/gm.svg": "51399c19982b57b330c58dbae394d5c7",
"assets/packages/flag/res/flag/il.svg": "71dbb46044e8f441aad32fb9a91f8436",
"assets/packages/flag/res/flag/ro.svg": "15da9998583a8bece6fd90bf201b310e",
"assets/packages/flag/res/flag/ht.svg": "94f110940245856b0e37d6bd3d814cb0",
"assets/packages/flag/res/flag/sb.svg": "79392615aa0527d6d741de6742d0a811",
"assets/packages/flag/res/flag/pw.svg": "2104cf16e5d8b2927269348f649b641f",
"assets/packages/flag/res/flag/fj.svg": "4541ca5ba2cd691b30245e7d5a2d9d7b",
"assets/packages/flag/res/flag/us.svg": "ad5dff63fcfd4539295434c0013c3afa",
"assets/packages/flag/res/flag/af.svg": "056c4dbcaf56932bee246bb751309c9f",
"assets/packages/flag/res/flag/pa.svg": "1a65c4313238fbc4b8cfbce75172a24f",
"assets/packages/flag/res/flag/bt.svg": "ce4684f240e15637d2c67eb222d63fe5",
"assets/packages/flag/res/flag/za.svg": "8f50c35985eab084114711cad6776eb6",
"assets/packages/flag/res/flag/lr.svg": "177182a8e32845d6535283ebae12b9ea",
"assets/packages/flag/res/flag/tj.svg": "c8b3c4946503ec9a6e6d9a251ced60d4",
"assets/packages/flag/res/flag/cm.svg": "e48da92d4f4f63eb91152ca126cedc8b",
"assets/packages/flag/res/flag/lb.svg": "db1d8d6564dba6e1babeb04983a2b4d5",
"assets/packages/flag/res/flag/bo.svg": "1bc18cd73405b56c1f6ee39d059b3961",
"assets/packages/flag/res/flag/mg.svg": "65482ca562875ff1337f0cccbdaa46ce",
"assets/packages/flag/res/flag/zm.svg": "4bd901a04f4821e61fc158e3c28d09a6",
"assets/packages/flag/res/flag/tn.svg": "179c4fc6765bf7369d8136ae3986e517",
"assets/packages/flag/res/flag/et.svg": "120ea455502dbaa6dffe199a6b589e8b",
"assets/packages/flag/res/flag/mx.svg": "b4d928c17dfc94c56858c3da56e94188",
"assets/packages/flag/res/flag/ke.svg": "aa572e0e7ad47c23e37633f1b370da8d",
"assets/packages/flag/res/flag/bf.svg": "8c9b84ac3c7851f2e34ab4935f33397e",
"assets/packages/flag/res/flag/lc.svg": "e094620d44bd68ca32fd104d474028fb",
"assets/packages/flag/res/flag/hu.svg": "2e0e3e500ac9a0f691900d3e27c6e8b2",
"assets/packages/flag/res/flag/li.svg": "071b1d57a0ece6b2b738a3de7dfd0ccd",
"assets/packages/flag/res/flag/mw.svg": "6ae05cd68db4fdec0c31f4eeaca3d7d7",
"assets/packages/flag/res/flag/cl.svg": "11f7f79f090e3ee5fd8763722af3a99c",
"assets/packages/flag/res/flag/se.svg": "97ce2d679f8d8ede50153b91124cd264",
"assets/packages/flag/res/flag/nl.svg": "e53fc83f569b904b5b883c87a37b5607",
"assets/packages/flag/res/flag/bd.svg": "73c177e4545c26b844551aa8038970b0",
"assets/packages/flag/res/flag/ad.svg": "6a14dcd1af407b41e8921b9bc6c90e32",
"assets/packages/flag/res/flag/cg.svg": "5911439801b0aa84bcb9f67d90c4ed89",
"assets/packages/flag/res/flag/ng.svg": "6fea46bec5cbabaf3502436889e93ca0",
"assets/packages/flag/res/flag/cv.svg": "66a51943bb7c8560ccaa06b955ea3ce6",
"assets/packages/flag/res/flag/kz.svg": "0fe9097bba1cc582f03d6b845bea512a",
"assets/packages/flag/res/flag/tg.svg": "5e565ac50245c96dfd9f9753e11a64e5",
"assets/packages/flag/res/flag/ar.svg": "2236d9b396c4475234b1f050758631b9",
"assets/packages/flag/res/flag/az.svg": "d1c6ff3d2c6137ed6dc59deff9ca1795",
"assets/packages/flag/res/flag/tt.svg": "30180834dc0602f19f8dd332b3e027f9",
"assets/packages/flag/res/flag/ve.svg": "d6be56f106bf5454a6555518aaf3c1e0",
"assets/packages/flag/res/flag/do.svg": "68cc45c8b6a1d9f2d900782c017aca56",
"assets/packages/flag/res/flag/it.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/packages/flag/res/flag/gr.svg": "b41b5f52dd7dbffc35801da4400b0cd5",
"assets/packages/flag/res/flag/sa.svg": "c9373219b085ed5791458bf23a7aa361",
"assets/packages/flag/res/flag/ba.svg": "38a248a0da355ec7d6591e67489ed08b",
"assets/packages/flag/res/flag/ge.svg": "c9a85b6eea715acb3d71c35aa913b6ec",
"assets/packages/flag/res/flag/xk.svg": "af02b9e4d3da01c09359aa23c7ceef74",
"assets/packages/flag/res/flag/ki.svg": "64cf951cfc4bcec910b2d5911dcf78b4",
"assets/packages/flag/res/flag/rw.svg": "559f166d947d2e7b4e0d4bb426d6632b",
"assets/packages/flag/res/flag/to.svg": "f4d05f56b92d182344f767567eb17211",
"assets/packages/flag/res/flag/by.svg": "46f88d7e094f95ce28a74b570bb5e395",
"assets/packages/flag/res/flag/th.svg": "e7f18a5477d4f250f136c54ce56f7081",
"assets/packages/flag/res/flag/sm.svg": "16dab5ad5a24fc6af779439d1ef21724",
"assets/packages/flag/res/flag/eu.svg": "9491b689ec6a5a12ca42ec1096568b80",
"assets/packages/flag/res/flag/bb.svg": "68cbe43424c89d45c4d06fda5195fdcd",
"assets/packages/flag/res/flag/no.svg": "4b57a28e497b81a0fb3063015dfbe800",
"assets/packages/flag/res/flag/jo.svg": "34d7eca815fff085db34d0e97ef84ac3",
"assets/packages/flag/res/flag/dk.svg": "07be12773c9bacc7883f41cf806ad7e5",
"assets/packages/flag/res/flag/ec.svg": "94317befb597bfc7cbe5a664dbe34afd",
"assets/packages/flag/res/flag/ru.svg": "7a8b3a7d8204983d246e6edbcbe21413",
"assets/packages/flag/res/flag/bi.svg": "1a2bcfb909091ebc0c6d3fea31eef993",
"assets/packages/flag/res/flag/kh.svg": "6e722bc2d4535eb7655d4f8f95ad90be",
"assets/packages/flag/res/flag/ly.svg": "592a5116d907a28ce6a435bf71899c20",
"assets/packages/flag/res/flag/vu.svg": "f0b65910f246ae5cbecedc933029f482",
"assets/packages/flag/res/flag/lt.svg": "f81172011b0b0fd8f95db12e196458f6",
"assets/packages/flag/res/flag/pg.svg": "d2ad188348d575dd628d65efef4b94ee",
"assets/packages/flag/res/flag/my.svg": "417cba3cc8c4121cf0d2250fd5c9697b",
"assets/packages/flag/res/flag/cf.svg": "66eaa7d7fa8434f3966af11188be0028",
"assets/packages/flag/res/flag/rs.svg": "74b32a84deba1c68326d0aad4173f7ec",
"assets/packages/flag/res/flag/so.svg": "6e5f13371514efbf71ddfdcc5eaa2c14",
"assets/packages/flag/res/flag/jm.svg": "684650029f9dad09d779663fcb809282",
"assets/packages/flag/res/flag/ag.svg": "0538fa90e8ba12bad017f05975aa0841",
"assets/packages/flag/res/flag/gt.svg": "c79e10d99aee6f0f66c9d2907075a7bd",
"assets/packages/flag/res/flag/er.svg": "67f5cd294f998bb172bd8c6e702c411c",
"assets/packages/flag/res/flag/sc.svg": "90c9327b714637cdf6c46586068d1f45",
"assets/packages/flag/res/flag/lk.svg": "faa1949523b46e9f67c4cbac775a0cbc",
"assets/packages/flag/res/flag/km.svg": "6d07496344175e577266949b2833b0c3",
"assets/packages/flag/res/flag/sn.svg": "4db98c0bbb98adc9ae3d8fd689a97600",
"assets/packages/flag/res/flag/am.svg": "69727bec1f2a92340d3a6822131ffc23",
"assets/packages/flag/res/flag/ni.svg": "90df73abfa958b37c5f1a041938826c3",
"assets/packages/flag/res/flag/cz.svg": "9c5898c620005bd48fed5f3ea9210894",
"assets/packages/flag/res/flag/ir.svg": "6d32f5794b10d03a50057b8fd5ecea46",
"assets/packages/flag/res/flag/mh.svg": "15e740f7d94caa54c706b3da4a14545e",
"assets/packages/flag/res/flag/na.svg": "a830d0864b6aa393b629c1baa5246d2a",
"assets/packages/flag/res/flag/bj.svg": "203c8d481e7303757026d65cf6a1e43f",
"assets/packages/flag/res/flag/ci.svg": "9996d349c36e0856832977d6b70ae09c",
"assets/packages/flag/res/flag/me.svg": "d8e4f69a717279564d11c383372db23c",
"assets/packages/flag/res/flag/bs.svg": "5d04b31e6259544bb975cdc259c32551",
"assets/packages/flag/res/flag/ls.svg": "f9ff2c953a4d9fb2b68876ae6c684152",
"assets/packages/flag/res/flag/iq.svg": "f7890d3258ca62b7efcedf3f4aae3751",
"assets/packages/flag/res/flag/np.svg": "0e7b6b2545dc384690c597aa1db4d1c8",
"assets/packages/flag/res/flag/ua.svg": "1aeecd60c245f84d7db8bd634f0e870b",
"assets/packages/flag/res/flag/au.svg": "ac7ddacad338b6d1074f8b0d2e6fd2ac",
"assets/packages/flag/res/flag/ug.svg": "a3dccd48c0aa42614749ff9dcca8be6c",
"assets/packages/flag/res/flag/br.svg": "248da95ef49cb528b8ef16e4b2dc36d9",
"assets/packages/flag/res/flag/hn.svg": "81ab9078acf460af828739861f250713",
"assets/packages/flag/res/flag/la.svg": "b76f93a9d626679c2aed426bc3fcd758",
"assets/packages/flag/res/flag/fm.svg": "cfc3756759f4002983b49217456fc8e4",
"assets/packages/flag/res/flag/sz.svg": "609860b29fbc32697847b72b40c3feba",
"assets/packages/flag/res/flag/mv.svg": "dd23d9966716c14519286a72ca9308ca",
"assets/packages/flag/res/flag/cn.svg": "9caece66507768334f68bc3ec25e5ceb",
"assets/packages/flag/res/flag/py.svg": "8156f5f7586b7d92c0fb46aeda70ce68",
"assets/packages/flag/res/flag/mt.svg": "dcb55d4236b9977a909882974a12e924",
"assets/packages/flag/res/flag/bz.svg": "6f7fb09570637e205ebd010e6b0a70c4",
"assets/packages/flag/res/flag/bw.svg": "f9750ef2e25bda43bdd29b454b9e32ca",
"assets/packages/flag/res/flag/fi.svg": "a814e980a8184e1efa297d90d6284c4c",
"assets/packages/flag/res/flag/sv.svg": "1b29ca9e5a0b70bc2be8c55423c891c7",
"assets/packages/flag/res/flag/tl.svg": "f34c9a0193bb410985e04f4ba8e8d415",
"assets/packages/flag/res/flag/ao.svg": "ea0a59870bfb372f25c6f56271eb6808",
"assets/packages/flag/res/flag/vc.svg": "2cc0562abbb0a32483c12d29fa0ad79f",
"assets/packages/flag/res/flag/co.svg": "230d6931448dc893671ff6a59e6fb753",
"assets/packages/flag/res/flag/cd.svg": "ed47822b634dfe5707d57321a76f13ab",
"assets/packages/flag/res/flag/sg.svg": "2d6223aec3513bb057ed8540b2dae40a",
"assets/packages/flag/res/flag/gw.svg": "6c1ff733c39d9e4e76f0eb9a0f269c7c",
"assets/packages/flag/res/flag/fr.svg": "2f9befe94ef9076d58b0a2ae38e1a025",
"assets/packages/flag/res/flag/lv.svg": "9fa6c690c05867c2240c179909de5f85",
"assets/packages/flag/res/flag/sr.svg": "6905244b5370ff2cc10d5420affa03f6",
"assets/packages/flag/res/flag/zw.svg": "227d02aa1aa0f29e691ad7566b7c9521",
"assets/packages/flag/res/flag/jp.svg": "a1e1ea513a3fcd801e85db4373ce8cd6",
"assets/packages/flag/res/flag/ws.svg": "69b52e9a76c73fc5ea231fb5a1499b1e",
"assets/packages/flag/res/flag/ne.svg": "0c4322271e2aecc54aec87a8935228f0",
"assets/packages/flag/res/flag/gq.svg": "8be10c943b439a856aad59ab88fdab64",
"assets/packages/flag/res/flag/mn.svg": "39bcb3ef04696298430ca84b7ff2d6fa",
"assets/packages/flag/res/flag/ss.svg": "de6a14955a3a56cdfb032bd70c0c8a0d",
"assets/packages/flag/res/flag/es.svg": "e511dceedff1a2f71233ed3907c73199",
"assets/packages/flag/res/flag/tz.svg": "5ec3b115b6f327284a2414d7ec3f5a9b",
"assets/packages/flag/res/flag/dz.svg": "daeb5108dcabc9e00e731ee40e546b40",
"assets/packages/flag/res/flag/ml.svg": "12f23b6b05cc66725e2374f8dc78f5c0",
"assets/packages/flag/res/flag/si.svg": "d718e9d1b5dedd27e4114371fd00dd80",
"assets/packages/flag/res/flag/be.svg": "df57b33ad7b80d3b04a92c263130d26e",
"assets/packages/flag/res/flag/gb.svg": "68b4d8305c4f90577e6357bb0c247d29",
"assets/packages/flag/res/flag/pl.svg": "aa3ad8a9daa8ec9d6018955708fe5737",
"assets/packages/flag/res/flag/ps.svg": "77872242acfe696929d9a56b55748709",
"assets/packages/flag/res/flag/ch.svg": "69547e25f5fe58a8b78777dc82725e04",
"assets/packages/flag/res/flag/is.svg": "1310d11c16a0a3ad8bbec39084d98d6a",
"assets/packages/flag/res/flag/ae.svg": "8ae6708cbab0fe2eeddb8152d87e302c",
"assets/packages/flag/res/flag/at.svg": "0d38e4d825bb3176af4507d2bdf60eba",
"assets/packages/flag/res/flag/gn.svg": "a783ea888c06b7d64cf5bcd08ef20ad8",
"assets/packages/flag/res/flag/cu.svg": "3e5f9c8b3f8b7173d008e5cfd1682418",
"assets/packages/flag/res/flag/bh.svg": "30728ffe1993377df3a9fc5f6fc42713",
"assets/packages/flag/res/flag/td.svg": "8812ba91dbffba55946efdba3b2569d7",
"assets/packages/flag/res/flag/mk.svg": "93c15186533262b4a99e531c484d4459",
"assets/packages/flag/res/flag/uz.svg": "f0eb4284776fa1378666495d136303b3",
"assets/packages/flag/res/flag/cr.svg": "b6d92c95d7229492a298cf3631f8f368",
"assets/packages/flag/res/flag/kg.svg": "c08e9251ab996b005655d6b5c56f4115",
"assets/packages/flag/res/flag/gd.svg": "84b1ac78a6e909f7244d56c7a7b5f17d",
"assets/packages/flag/res/flag/kw.svg": "0887d9941c4f694048087ec864fcc7ef",
"assets/packages/flag/res/flag/gh.svg": "7d6d7a831497ce467b888fbba4cf7d21",
"assets/packages/flag/res/flag/mz.svg": "bc33186e77bd479f472c214c1e5de5d5",
"assets/packages/flag/res/flag/ph.svg": "21edfa6742a6843aacaff53b937e5c15",
"assets/packages/flag/res/flag/ma.svg": "7e55bd5403440cc1d3e17652420571e3",
"assets/packages/flag/res/flag/bn.svg": "82577bde2a2f18a74bece06113782219",
"assets/packages/flag/res/flag/kp.svg": "a9f988e5c3b8644f1555b6830600581c",
"assets/packages/flag/res/flag/sk.svg": "a63549e8450fff840984650a9b0c5a64",
"assets/packages/flag/res/flag/md.svg": "7e4c0d86dcf33627148f9cd67bee6b51",
"assets/packages/flag/res/flag/ee.svg": "8665c242c58dc75c99b4e1e46e607b39",
"assets/packages/flag/res/flag/mm.svg": "2d22272029a2d705b4cd5c0a4895ef16",
"assets/packages/flag/res/flag/vn.svg": "cc2e55f0f5f8b70997ac88191a8561e6",
"assets/packages/flag/res/flag/sl.svg": "7755f12e8da38a69f6347c901557b429",
"assets/packages/flag/res/flag/ca.svg": "6cafa17d9715922ebb496b6384cc1541",
"assets/packages/flag/res/flag/mu.svg": "139f91a3aebd9bb7f8d15aa0a996a5ff",
"assets/packages/flag/res/flag/pt.svg": "8399d871b0102e3df032cc9f69ca06aa",
"assets/packages/flag/res/flag/bg.svg": "e3e193057e741aaeb9486d0af77f8f8b",
"assets/packages/flag/res/flag/sy.svg": "d8e896be0dd656174ccb831f6b42a997",
"assets/packages/flag/res/flag/pk.svg": "52975d36167e1ad68ecd379b6854530e",
"assets/packages/flag/res/flag/om.svg": "c7dcd8ebb9ad2dbdf06fe5bd0d9b0f41",
"assets/packages/flag/res/flag/mc.svg": "3d1d95bfa7445052d8173a5722f8de6e",
"assets/packages/flag/res/flag/de.svg": "85f98c37ca46ee50b5c8ba121baacf2d",
"assets/packages/flag/res/flag/kr.svg": "b62df313096b2d0205e937926db159a5",
"assets/packages/flag/res/flag/lu.svg": "4e06269e2a86d334d7185881d21a298f",
"assets/packages/flag/res/flag/tv.svg": "7dbc961e1a282d5760cc7d3cd321b30f",
"assets/packages/flag/res/flag/mr.svg": "e12cbc42ed04c6a1ae1bbe8cfa185029",
"assets/packages/flag/res/flag/qa.svg": "1dcd82370d3912273a15c26d264400fd",
"assets/packages/flag/res/flag/ie.svg": "4a6b333e1b344bd04ee59f19fbd4abaa",
"assets/packages/flag/res/flag/st.svg": "f48819e95d956ddbcb37a7be63f56faa",
"assets/packages/flag/res/flag/tm.svg": "c7bf7db7254400133131a7b4b2552828",
"assets/packages/flag/res/flag/id.svg": "e9b657b839dba5a312c5ea243cf43c3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/GIT_COLA_MSG": "68b329da9893e34099c7d8ad5cb9c940",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/FETCH_HEAD": "a7eba4c546c40e7d53d2c18c692cbce5",
".git/refs/remotes/origin/new": "8e035c92da8cf37265f8b34a1b8ce23d",
".git/refs/remotes/origin/main": "1f952467b8db26df52fc83d7f4340f35",
".git/refs/remotes/origin/master": "8e035c92da8cf37265f8b34a1b8ce23d",
".git/refs/heads/master": "5b717203b686d1b75d4765088b77842d",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/index": "3d3d104464af79daded8422e0979aaae",
".git/objects/a5/196d1be8fb59edf8062bef36d3a602e0812139": "8374dff94cc2712df9e03766e1bdab62",
".git/objects/a5/d7b84a673458d14d9aab082183a1968c2c7492": "1147c855c784299ac507e5ff917b239d",
".git/objects/fe/998b0022258d4fa9f35edf2fe5962bfa1897fc": "5ad49b0f84be7d254696494b7126ece3",
".git/objects/e1/51c2e4e23eb8e42a4bcd061ffebe0c5de85acd": "3465b4c5739b634af5756edb4b1921c8",
".git/objects/e1/44712c85c055bcf3248ab342592b440a477062": "a6d6c05c8c2d89f17151094e33e6b857",
".git/objects/0e/3bd107ed925da466618a332d94c2e88dad3aee": "22c91b2d03e16187587ecbd4eb44c7f7",
".git/objects/ce/a7fdc393a0e8db9dabc3da4f93dcead5accad5": "c1e00e5e07ef9daf4bb40ed6cda6ba34",
".git/objects/e5/abd63cb3a8f55a642bb88ce8532544f9ffdbd8": "acfe587e06018706ea98f9efc9eab4ff",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/34/35bfe46d97a45032d74699852c992a05fb7a69": "f7f9496e304a418c41dd2fe5981bd56b",
".git/objects/34/82bba027dbdb330c86f519131026b525e1db41": "75f2505728046769aac673acbe67c922",
".git/objects/f1/9bd004e5ec716cbd73f54d57dda953a2196de9": "52f537c7b1d8c78dde19314a99c904ef",
".git/objects/f1/531348c8536f3640b98ca216c90da16c80bacc": "e6c5e6f818860afff05ab69d081c0a2e",
".git/objects/f9/4d6e537b6ffdb48628d428e69440e29ab20c4b": "4fd95e021d1f96aa716bffcb67c8f518",
".git/objects/f9/d95d150d3180db749632dfeecf57bd40ea9650": "425bdcc681c72ae3e072ccf4a1d7a561",
".git/objects/90/a3ec1c4484ecc483354901d6d4605615946ae9": "d6f8a48e1a749731d8b3c9d194a85013",
".git/objects/99/67a7bcde3020b1b8195819bed84635f9558be4": "90712929415309dae16359d7d1c07914",
".git/objects/fb/6dde7ea1ffa02fabc2aab7fa974633681f07af": "9de71bcdeb8654b38b3110d8792b5682",
".git/objects/fb/a167dd60573d42b698769d10c2c8222e944114": "17922a116c1470959153f868259637b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a9/cd1cdc4302b71c18a83994f9d9004079f5c136": "dfed66e7844e3c2e81fd932e6adba00c",
".git/objects/a9/d5fa59b145dc3041bfc122f1575b82aeee0221": "f1d508ef94a1b2a26104d18e365b1fbb",
".git/objects/bd/b0af1e36b9c7287c8879e55dd344c8d9a7524a": "62a5505a73935476e55de4d8408d4d3c",
".git/objects/bd/633eda8fa391b866332664dbc8d461d33b41d2": "a83c94aa95bf50a6b964ee136c6387bf",
".git/objects/08/55ee3911249fb6eee95b21f594c48c39cd0e6c": "ec280cb89837168e837133ad757aec86",
".git/objects/08/e808aec8eb438d18b33e39c32bfbff4da912db": "3af288044bbe5322f11ff06b06d65ac7",
".git/objects/b8/d1bd2c48655f14adcad2c15a06d14ec5dd0ed5": "bc8d0faa650f80a3e3c358fd6868b78d",
".git/objects/07/d359d07cf1ed0c0074fdad71ffff5942f0adfa": "22155efed4397dada220e5e28997899e",
".git/objects/2c/2df390f3bc1bbeeba0ad27d92f3ee58560a2f0": "0fc57f1c48fb1c21e4340270964b2d57",
".git/objects/73/12590d64d7109d8330754382a09f24c9e1718b": "b2d7b37528356b0cc243dee7c105b1d8",
".git/objects/98/c58e473280e278f4802b9720cea13ab3a10d53": "d7c0e2b10a5b17c0e181ad4d9c919fa0",
".git/objects/8f/454752469e22c05bd3f9391d8ccbae7e5cdc8f": "f325e178787b13f9f50ff1948dbc1497",
".git/objects/8f/77bff82ab7554d2749e6fbf292ab0af784314a": "fef7027ae032dc838bcddc6a2e2338df",
".git/objects/8f/4b0a436adb76b22f136cf5de0260e5345bde54": "879912409568183e906ab3f01cf4e391",
".git/objects/71/e21c71da1475b35e4bee0cda8f9b5dcd2e8534": "36a4e3e41ecfd0ad5600d0e75a116550",
".git/objects/23/44a497c6505a0579b8c3ea7ecf4a961eaf5bdd": "1edcee5505abc5a51277d08ed90637e1",
".git/objects/85/e90465e25e4cdd9ee3c8c1bb298af97d1b1f51": "ce7bdfe8f420b52aa84031f5bb3cfd92",
".git/objects/85/5b805a5542e53b5cfa5a945c63a8fb6e99f4d6": "06bef7cb45015a186656770d7c3b5baf",
".git/objects/18/e339ba4d306934bff6d3fa5590eae417447973": "2df4165cd5549b1a7a569336605c00df",
".git/objects/c0/da2d2854566b7a6ea897fbe1c3af94b47f40cf": "177e7b13519fd1188acebe6691f51844",
".git/objects/65/e9a01af0428f3697cdde99ea6ea9dcdda64381": "0f21f450f3503dba2d947d23d4ba495a",
".git/objects/28/8f6a4f81ad041e21c04692952fcafad01ce611": "10f98839f65a6229f2fd6082630606a2",
".git/objects/89/af62a84aebb414717384735a4ddeca634e328c": "6dbad10a5566df2fef9bd054608a7ce3",
".git/objects/89/771966f896212850090c74d89665b4b89cc2ea": "9e5566187d750398718717e754479c2c",
".git/objects/3d/b47461fe19be3930437eb5e4e6087bff5578ec": "1f1259ed40ccc7948bd9845649e638be",
".git/objects/3d/d8d19f343c22abe3a27a3f8e98fd855782091d": "548e01db55f9537e2c371472074fecd5",
".git/objects/5c/19329c526e2eac9c4875afbba4a96e7d8c67a8": "950202030a62e7638cab09632fab791d",
".git/objects/41/42082bcb939bbc17985a69ba748491ac6b62a5": "7d58c721d71ff79020bf3e0fa89aa2c0",
".git/objects/4b/adf78a2956e05af24087582f80834e09cf26e7": "5f890595c235b05ed6513a36ed8e3864",
".git/objects/1e/74af0f0b45380931f555080051a739bedcf15e": "ca1f95d28621d569e08494f4784cb0fb",
".git/objects/74/bf7699c621f87e072082f8d81be4d346f81cb9": "227ee3dbceedc96e9510dcd4514616a4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/10/fa14c5ab0134436e2ae435138bf921eb477c60": "b66fa166f383cab25b410a5e0ff8c63c",
".git/objects/25/87e37bed4be9a3b52ad92e59909b7ddad7b158": "a5196d6430452e3ac065cd5f0d34c9b0",
".git/objects/14/0020a8feb8a41b5374d46e5f1e2baf4564b4a6": "a44aef2533b85db6ad4d419a59843ee9",
".git/objects/14/2aa16009d654f1db5f9b72524a90ef64109523": "187d629052784756f9200c335371a414",
".git/objects/14/ed0aa42de0f291c0f696922110e70544c3dae2": "8eb713638cf2a985c1b77199a39bb836",
".git/objects/96/83115a652d3e8e488c76c39a22416914f9c568": "f0f90294c1b3f74b4162c7ab0babb5a0",
".git/objects/44/83ea67e5fe64ba0d1aa4c12f3134ff1b97924a": "87454194c14c2380789214f7998b702b",
".git/objects/44/f0409f5fb1ccc57b7319cbe0eca00351fcec47": "ebb956c9fbd0df6ae04c8584fd8eefbc",
".git/objects/b0/4a87c19c57b944cbb9b8c33bdc96ac1019c627": "a3cee4607d48b768dc1ceea59cb31ae2",
".git/objects/b0/8f0127353b0ca108c73bc115d46141362f5170": "25363d76c8d516b0918b39aa4290c152",
".git/objects/5a/7d75692cddb732751acfc3f53f3dc445c53597": "bc669a20777996ce586e33894e2b1066",
".git/objects/52/9c5c13c9ccea1a15037a319065b9f01928b823": "1621f15a6e22e3f0b368fb6f90108d3b",
".git/objects/52/30d504b7f1bb539d382b2e8898680cc12837a6": "337b34aedabc809ea616eca61aa3d765",
".git/objects/52/fc5febf9a480d55a05b40855b102fdb40515e2": "340a5a211ba7a615634a1bc21d327355",
".git/objects/2a/9fa1c3d2ee24d387a83ec55a2dcb009f7903f8": "0eb748ef99379d1e4565c4dd24a375a3",
".git/objects/2a/b2319c1b80abad2952ec0c48984ba3862e461c": "5bf99b841207f767631d9878625e4623",
".git/objects/2a/af8a736edac2fac1201e86e4e8f75ec939b09c": "25faf97c52fa690efddd74a9bf8286f8",
".git/objects/2a/67ac0234377be7e9fce984189f7b6d615fcd54": "f458391cf373694c1d2bb4c22466f86a",
".git/objects/5e/91347dbae397959fdf038a83bbff2e4e9a84b1": "14ee0d96117ed342ed4f192c0225d8e6",
".git/objects/54/e5c41f0df0ae9a6525578090b74b67fb95d45b": "c5ed9ceea2d0344344cf6a240cec8d3f",
".git/objects/7f/20c1a9ca70e4fe5a3715d538f4273ce403d7a0": "ff652f9c1dc1ffa04500e8ffbe10bbda",
".git/objects/7f/3cac6f498e48e73cb4244ef020e0b93eaa847b": "9c5db5b581ae42ecb67f0eaca0697c32",
".git/objects/7a/f9ccecca6a3f95149eac5afc8037cb763fcfed": "09d1cd38846987acf99537a143b410e1",
".git/objects/7a/80b6fc34e38b83fabdab7e7fa878852656b866": "6ecf452dff92897d2252ee0a7cca16f8",
".git/objects/7a/8574532b1c93996ae7c6a9fff94f5816c7f1af": "f16e65dc9733cf24b16b00261dcdcc68",
".git/objects/7a/4f3335f069ebe9159c38a54a2c236fbf9bd514": "27a1c992a4c2b9a333b1b313d27cee35",
".git/objects/ef/0abf4edf7d5b9b8d50b64082863d00a78b5741": "54782fbf4ee9b3e74340c1509f39e74a",
".git/objects/50/14c4b31cb9700dbd458c8841d8cd91d3b8773c": "829ef3d1fb3de014f9c41447763f1a20",
".git/objects/09/bd77a331298601209249024585062d68862376": "b4e168ffea46970dd2fda8e1139b0b52",
".git/objects/39/9eab1924e39da570b389b0bef1ca713b3b05c3": "10b4b7d33299f6cc3934898f6662cc0d",
".git/objects/9f/dd0d77eabdc8819fe8dd85966b2b78f3bcff3c": "a30b029989c411a5df0c2fe1d24c19ce",
".git/objects/46/945749bf8c75d9c1014eb2e5eac4a163986155": "803e403f1ab250ab6de376259c6aa20b",
".git/objects/46/b761b340ee8f98b2adeae303ba152ee94c891f": "2146db82e59cca792cb9c6eacc65f2c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/c3/2376c96ef2605a7d49bf2c3318b2954e63d0b9": "ba0856cb1165c5f3afe58b071783ba64",
".git/objects/29/5d4f9d6dc1e08f2d7da64feafbd7f13740fbe9": "d69e096f400b210b9a8010040d71a423",
".git/objects/29/3140ec1cc1f8c31a88e1ddcbae14f71000f285": "bb1e1f2962000eb76157b85986bc99ef",
".git/objects/9e/1e38a0d3a11e86fb0d3fd52b8cd2e494e314ee": "1a644fbdce5518f3a55bb94213cf5b58",
".git/objects/e6/4f6ebb5ca35c0205c9b1591da11fd3a5c76538": "9e4466b32da278674477f0190cdeecf1",
".git/objects/b5/8d1184a9d43a39c0d95f32453efc78581877d6": "a4619d0453ea53d85d3e54a1aef42c2b",
".git/objects/b5/59b63538163f2a2532ee194f57be1a5aa695f7": "a20d51c97bafc106fecd8783ffdb5950",
".git/objects/56/487b083a99a5314dbe109e928f97b7d05050d4": "afb967c4fb1981fd3bdff97f95d3f6d7",
".git/objects/56/e65d363a4afe9a4daadec86698d31c729ef725": "9432100019d1559e6b2aa4bc519268a5",
".git/objects/f5/bf1eac8b605b01dba59406ebb2fba269f9e114": "2d1ff4269c51693b376cef0690ce103a",
".git/objects/f5/31d94fdfaac188c85cf9063aead0b35f43b912": "f31683dd429cabb8cb3b5dbed21c4dbc",
".git/objects/88/1430f4a9ecf1b4492fbe325d77b4a4d643fa7a": "0b50db38e13b20a4371052b72e021878",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9b/247801dabb718dfc2f529078c5a2e668206465": "38809a1ea17c84719a55a7388522352f",
".git/objects/b1/1097a92510cde7f7acf3f206602c7eea47988a": "5b83ba54d16eaa9efbac613eed92a65b",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/61/87dbf4390fc6e28445dd3d988aefb9d1111988": "efc94a2c91a917fc03d760fdca762cba",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/64/c07880988fb491c606a312cf57240b9f175500": "7add13b32306aa830b2c24e628029862",
".git/objects/de/409b7ee4644055957b5f41ed589850b1304a9f": "9309db3ff5224c836fe974445352f025",
".git/objects/6b/b3842a9531c379272e7c1e5493db124bda0aa7": "3f439c5511923e71a0cade30506c281f",
".git/objects/02/5fd7b54b34e59b325c1935b908a6a57ece83ae": "68ecac46a9602e63960269f0d2b11d0e",
".git/objects/51/e74bf41437466eb4364bc72b9d210bc1e79000": "19556ffa38460b0bb1c9dabd21f169b0",
".git/objects/51/ea3abf699f4fb09dfc674c2f3aec85f2f66641": "a408bad0d209072a8f40651d307c8dbd",
".git/objects/05/4d82da184160f47d52f43fe120a8c8f49b0285": "1610ce53ab55df5a93a7a0e17b0a87eb",
".git/objects/4e/620aac0526155ebdff5f0ca52ddadb0768a44c": "410b5a2e8b32cbce73822331f06ca591",
".git/objects/4e/093d715a4bb1d30bf35296caf97096257d3bd4": "1ea99b22341b7a907a6095467c9b6ab6",
".git/objects/2f/9828fe1b06f6c8ffa5f90d33c802fa4178bbb5": "05a06c1ad85c08b2670706020e0695f4",
".git/objects/2f/6bc382bc7a73c9331b843ccc187e6ce8618d73": "5aa852d1bc2a1ac669c34ccce29567c6",
".git/objects/8e/3e0189efc94ff4da413708032b63b11875d76a": "f688956083eca17fbf279ef3b3ca0ae3",
".git/objects/6d/cc544ec0dc0ee59539b6cd1bd8a0a9dbfce3f9": "9115d3c9594f17bb8b9cb382030a6993",
".git/objects/45/40f33d77d3c796a5acc3afef9c73fe95f53c06": "711c9b532ea0c846ad424315c56b9df7",
".git/objects/8d/ee874aa9abe1b428f55a36f22dd6cc8b27acbc": "39cd9e20ccbc9f6653a0b9ba24c07794",
".git/objects/6c/7079fe85247c5ac0a1ed9f676e54b7e6f0973d": "70bdd299e89246d4030e24970ea466cb",
".git/objects/6c/bef5c370d8c3486ca85423dd70440c5e0a2aa2": "49717c57f49cdbfbbd598f2b63f32f8f",
".git/objects/30/2af445abbc7961b3e159ed1d4659ed5a8a5006": "59d3a1b200e9946055d0dd98393090a4",
".git/objects/30/524de46d8476ecc9e214cbb6f5840c336fdd6d": "a13dd1907259d6b0c3fc73b90d798918",
".git/objects/d9/275ba61eb88ef367819f549d4b01fe4fc45316": "c339e46e326442c08cbf72ec6311e18d",
".git/objects/3f/d1d259076d79eac3342c8cf49086438cf74231": "65c84c19cd40e420d78b639fac34f50c",
".git/objects/3f/84935e0434549d951fcca03db725c9db501ac6": "987c03859a8bee89c104d17579ea88ad",
".git/objects/55/b92fd3e01f0f023cef5a295f827d12164bd9e5": "6f403fa0644cbe9a50f350adddd023c0",
".git/objects/55/56266bb40f0ac720bd4298bfd2a7921076d050": "9d49bf81ecf18c3fbd0c46951e534092",
".git/objects/b4/417cb9f14771d0146ee20d16c27b2664fa0560": "a25655c51c9b3d1d6dc7ad04a9c0348c",
".git/objects/c8/8b2a15165058d5921a3ffd7cdffe9fd5c73f48": "30620df6a655176b6c5e1b1a232d6489",
".git/objects/82/d108535a1dbc8af79f7746c7d0d031e919a44d": "b0841ce8a59110009f780df4b7029bea",
".git/objects/82/5e4e1c65cd11b08eb811d70215bfba09218ab2": "784e77cdd80a17706397ee78a93369b9",
".git/objects/3e/f19ce30f40059d17d92a1c005c52ff58a6a72b": "e2dd2662bbf8031f5b640bbc675874d9",
".git/objects/17/288fa19a7f439d4845788d5451f44196cc8c12": "28ade74c6f3b425be401500aea34e195",
".git/objects/1c/1b73d7e4b3974506a8c5e3ce3fd8017be271e1": "db22f8485c22b16f9d9909ce42a0a2ed",
".git/objects/12/731238e04bc1c4e69fb5a4889967a67408e470": "c695f7f72c2da8634b6ad12499a78ac4",
".git/objects/12/1772d5633d68bf373577af1a5b87e65dc04fde": "7a9506206cd9b04580010b60baba87e6",
".git/objects/2e/4531270e707343a702ccee2efdda7860a02095": "218bfeb6374ec443e15df45aeb4a494d",
".git/objects/2e/7dacdcb762a2613c951797d716573d427d9939": "d62b6b4bb2679e1c4f31cb42075d4cd7",
".git/objects/cd/b98a223affe896bc84855b2b8c7d96be55ae93": "b5722a6147aef28700ba906b7e0d3d3e",
".git/objects/cd/a09d7ac72e2a9530ed8b4a847d3c8f7417d397": "9b26d57a709405e723bb58368ff32486",
".git/objects/ee/46023bc96fae099d0eab18a22203458b47d64a": "ff1ea8cef0ec83814fa712c81ba67b97",
".git/objects/ee/d2873be806a5f816d3d08338ef702d44f796ff": "cc81064ef4acfffe5f1011cc63f601b5",
".git/objects/49/c19264a3a312308fb5fa16515421343d7da745": "576a926b35e26b7e4d1e7d81c8375e8d",
".git/objects/49/8b267a8c7812490d6479839c5577eaaec79d62": "dc5a81f09c45d0c2a9f1fcd46546d422",
".git/objects/5b/4f3b7ad40055ca6dbe27bb4749643ea1cf809f": "6fc3569be5705dd9f6b5d63011b833c5",
".git/objects/5b/d27921a6d2da55ea8e9c537d48ab1579887859": "a6ecef27fd19a097b3d17e4bce2eb5f7",
".git/objects/43/dd03ab75aee24d5ab300907fde1c1c3f1fb1a9": "6c5b4f769d786770c1e4d9105a164b05",
".git/objects/43/008e0264dd6f3cc93d0692d0b1d753012408db": "4be80aafa5567292a8842e0205439fcf",
".git/objects/fc/76d3e966fb859ee4157ab8f89cc009ff7923ad": "21bd4b9739bcfa14f68a0b5f48611d45",
".git/objects/32/b526cbbd9281fe19645389a757036fab8cb1ab": "a0dda73fc127b80c559d770b2375f656",
".git/objects/ad/7738f9a387755cf9b147521fada2b46c703b6d": "3433017c6973e2f44acade29c779caf9",
".git/objects/df/345c248003671655d29f7060e4ef8ada2c74d7": "51c0ae5a1ff6e9c963db06b8de8f48e6",
".git/objects/df/1ceab95c962f64870628a0f570dfe280c4795a": "9595454dd7df5649375bd101d02d55cc",
".git/objects/df/8451fcdd735892dd0dcf2bfb32cd3927b7cb51": "7dd1180440148e1f9ddd5fa758a30dd6",
".git/objects/0b/cf5b014d0fa3efbdb91e3afc33171779891344": "352403148aede2e3c42c91a3033663d1",
".git/objects/42/9d77cc4a996b976b641852a19a38d49ad13c4b": "f832e926c35bb0cba8dd34aea7548f48",
".git/objects/ec/17ec1939b7c3e86b7cb6c0c4de6b0818a7e75e": "f653c0ab06e6663638aeffbe233c68a8",
".git/objects/03/91173047f35c5ac166e43971ee3430edbd943d": "8a32cd05d778525df74ee1ca31e0d823",
".git/objects/d2/9544a7ff9b04efccc61a3f9032588b81cf031d": "c835ea277d241ca5371ef85ac73cb8c4",
".git/objects/d2/6ad35327f306753dbec40549ca3228ef509148": "5f61a7f125a5f31e06b724b559ee668f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/cebc21fbe1c357e79955c960be51eeb59e2185": "f0c9f667c7bc44d91128ee53387abdc4",
".git/objects/79/f42b1f3a7e09df164e3165dc88a18dd50906b3": "27dee1024af99ef5d5e21ba30dc7efcd",
".git/objects/79/7f9f2953f7054e9965c9fed0d11d607304ccfe": "e11c0d1460b3b0a6c6ec57294c3ef8e8",
".git/objects/8c/ad454f76d2992466f8b564d4a77be172ffbfbb": "45a63a7275f160889530ec00e6488960",
".git/objects/fa/3fa990d2b367bc343637563963af42ab134e22": "dfb810a5e2ccac7642d2643e3fd80b8f",
".git/objects/e9/a37a67c183bbfe5e9c109fc24caf6077496204": "ce6719ff4cdb4c985258af11b1a092a8",
".git/objects/be/c0439ede67e46e9bd69c4dfd9ca672128e54b0": "04718f82a820ec816f2288aa9225a88c",
".git/objects/4d/83efa267f43a7f9070f9b2d355b44f9f5b63e0": "e6150bf4eecb85675964781a594b6790",
".git/objects/4d/31ec365e0ea56887ac7f15cba2e2c77652ef05": "bc03d8c1aa567695cbe9004083b533a8",
".git/objects/4d/457b9872272a16c9819ed66fbd83ac22f16f7d": "5c2eee1c4053d5a82ed8317b45df5f96",
".git/objects/3a/23c7545d4e4058e52fd998b10bab9a419776d5": "83d936328a6b91a9552c49f8600a71a9",
".git/objects/8b/cd69b37a77d4c905ac717e08093b6b26b796b8": "72d2e7eb07fc84bf41281b7edfbab30d",
".git/objects/bf/c4d06d0fc20dd3668003677dd8d9a3c4e5092e": "c1a113cf12d8e0cf496182277d23e940",
".git/objects/bf/ed23f6a5c0a49c98d93b350e9c342762507088": "7d67bcc9ab38e4c3edcb96925881e032",
".git/objects/36/fb2bf82cb2ba3fed0ccebdacd3b43a6d2f623f": "9452bdd07b9877562e62748f9a41c0af",
".git/objects/7e/6bc0b0b7acbbac2919c18f12e5040cf765eac5": "c5f4d06f3548371bc93c7ce542bda424",
".git/objects/9a/cd10692c3e2eb6298f45bde7db145669bf72ea": "b5a3ef47259232a1d7955996007c5be4",
".git/objects/cb/397ca12e27682f09d5080a03318c518ec1b0a5": "bf8f901c3dccfb2a78457a12a7797488",
".git/objects/cb/089cd89a7d7686d284d8761201649346b5aa1c": "6d2d6d9c5be91cc65040a602060a8293",
".git/objects/e7/f293bf3eee0eeb56343d9ddba00a6e74baf85f": "63d79f90f29b8a9972fe1545e2aa6a8a",
".git/objects/e7/324ee94de1c2ee0f85f59f414d291fb87f58c9": "927700f8ade06c1f88fd3d5cf39c606b",
".git/objects/27/2f52078a6115810b8eeca65a9615b948af0955": "f91e8382e3996ffe21b5106e292c3836",
".git/objects/04/ccd21a1e2314b362cf45c04cb45021500cb498": "9cf5e835f87c45d2bf6c6d5ced6cc1df",
".git/objects/d6/a9fcf0ff3f4328905d3cd4118fcd0f61264604": "231782a8b2699999217d59efb6ed1bed",
".git/objects/d6/e05f5743a63eaa18c8f2e3269fa8b4e48b5368": "29a682cd94ee7d6d67f5675edc89e95f",
".git/objects/d6/0a8120c90c11d6b8fb93f78e4d1af8924b4d75": "66609009e70ebc4c3ebad51344f40629",
".git/objects/7b/ebea9dabaa1638c67ae16f4110384f36327f7e": "d7f9364883875d0cb3a1baa77edb637b",
".git/objects/7b/1af9ccbc8bf8536a4ad6f8b7a6353859fcb8a4": "81e50871b2cbaec33a7b3580d8f9450b",
".git/objects/1b/90dd81499d453e8638c310ce29298fb1c6fafb": "99a049013715e75f02f3c1a771411d28",
".git/objects/83/6a85dd7b5e7410730a3536eb22821c6b19b800": "042fe44886a6a6d461b207d2ac33e6e2",
".git/objects/83/eddedf1b31f711063f8bf1e4c4173c15dfa8a2": "2bcecaa051e22fcffe05e40a3017436f",
".git/objects/70/fb5e26bc2a8a8ce92b986de2e97f777d3c6f1d": "ed0d6c7f70e2b5594606f2a520a5b6b9",
".git/objects/35/d588ac665f972382c162d5a384baec28991b4b": "bef66578541013b61e76ff26338551de",
".git/objects/a7/a89f5faf014730f6ef3309a8bfae601f93931a": "6c9b089d1478cec2e24e45ad68ddb843",
".git/objects/a7/305601c867e583cea607b2a4b3e8f420579a34": "6d476984124a434f4bfba554ca80063f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/6c063a4bccb2f0df8f3ce19ef0315c7ad33e1b": "108b3379d99e61a03990634de1127ca2",
".git/objects/a2/c7ca7cfef1fe7b4003ce65780d902a2e4befaa": "c1778459f9db5721f600da539f825c37",
".git/objects/13/ae4bbf1484162934f7ac05bea36c6f7eb4e054": "c00bd81ee321cb5838a7117326690811",
".git/objects/87/f9f6e66831807b1b2ffdd9fad0cb3f2c32d9ca": "69171d82023efc3397e2e885ae03978e",
".git/objects/cf/9abf45ee94bd56a61f01fb4201a297b0af1281": "4dcc9eec89a9c047d0ce4c6e2cbc3d4f",
".git/objects/38/3b0996ffeeede872ec4fa1431fdad7dec61c4c": "3de8095b4e51ea746f1185562a63de64",
".git/objects/72/27f8e34448cf2cbcacbbcbc8d4b8649edfbae3": "5d06ea03b8f993f7163251d1c889abc5",
".git/objects/c1/8c40a31b7fba8101cc7fbd3ba6bf9bd5862a44": "544f19b529c9eb27555acb1ceae727e3",
".git/objects/01/83822bf4c4f73cd86b1f598cc3b4006b392da8": "e3acf8981529ed7858c14ff5ef9de9d5",
".git/objects/01/76169dec97cbb00c09fbeed6303dbce47583d8": "c2cf86d86cd8f843f3732f9a818e6ea2",
".git/objects/01/72cf55d86a49614fc81158a9156f250e102360": "05fe4628290d45f9902578a603ffb242",
".git/objects/a1/bda569635b22026a575eb32b7ff647d33f61a1": "cf7ca9376cb1bcb94fc4d4bb49962fe8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fd29ec14823d8bc4a8d1a2cfe35451580f5118": "5421ec3d945409d2a8f19ad9389cfc68",
".git/objects/a1/cf24016927b2b80034d9ba2e502c58731eab6e": "e62cb57354e0b70ad9f991acc9e7e85f",
".git/objects/33/3140a15d8946b46c164c80a7e98c9a02a78ae4": "78832fe0b10271bd1c4ee77ebb70d7da",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/63/a88cde0dcc53744c09e703c655eaaa72d294f7": "92aa9964a585c768f39718d62fdd76a2",
".git/objects/15/880129e9ac8cf8aee513a1501c144ef92893a1": "f950bbf678798bc7baa78beb6c66f763",
".git/objects/a4/bded524b8fbd9384a7cc92caaab523a9fc1d12": "24a6c133c0a05b49061af1358b1d27be",
".git/objects/a4/b5c757335efa8cbe5b1b9846efc671203705a5": "21f14298c7cedf01dff1387dfb0b6334",
".git/objects/62/104186fdb1c93ca1dafb8a3adf70c16c0ac484": "44e7cb9680e78c7c104e1cbabb14c9d2",
".git/objects/pack/pack-6259b73f14fbc65f1ee3bc4609ec7ee23bf8d2ba.pack": "887c9bb28dbcf6a17906d46d9dcb966f",
".git/objects/pack/pack-6259b73f14fbc65f1ee3bc4609ec7ee23bf8d2ba.idx": "dc407ba34af25bd5f73d920df1a4c3a7",
".git/objects/d7/d0e300291020eebca1a48f1f572397679ab18c": "435d7cb8d92c23551f127b8da39ddbf4",
".git/objects/16/8a29a7ab97aab6fe83aaa0bdb9e11eca7bf19b": "c50c01317e923c16dddec61cf8a02cd9",
".git/objects/16/9abdad692912617f128bc088a87923e36ccd6d": "7b9126c82fcbc982b5d08066c5296c81",
".git/objects/81/635e49c112aa3c8c247515f90821e5a822ebc9": "dbf315ef40a83a72d5261cd42649d091",
".git/objects/58/f5ee6e1eff97e9eeaccb08c69df3aab2e5a77f": "96a0ad20dc9fcf19aec8b85f4f0b289b",
".git/objects/69/d8c7eb6761e106e39d97303673efe728610618": "6b02a05688cada4c6ca3541df9862ab3",
".git/objects/6e/f9b9383817f1f76941c0363e5c37194c9019f8": "c28bae2e3849ad4077bbffe781959e32",
".git/objects/6e/8bdc78173c302f269327d33e28937ac12ac1d5": "d26fe1ff5adaf5948c3a46bee531c71d",
".git/objects/53/2046f616fad202f3757315521483fb66f28881": "41274c8526776d31d687747785a71333",
".git/objects/97/d48bec841b8a65b442cf15b22cbf901743f6e7": "0838ad7285c40527176f512bc4f68e44",
".git/objects/77/c92073f98ae5c1df9ab3262cdb46be0c028026": "49bc89a8dfeeb137bbbde9c6b50c2c71",
".git/objects/77/4b0cbac6ba88098c9b4dfe4222134806ddcb26": "1f0e9f45bd1c75ff049ede6346944743",
".git/objects/67/a651e8f36f77d877d4e37633ed0c967c8f811b": "3634e1b849e3c377a8bc549df027d105",
".git/objects/f3/eeb2b27858b8d5134d93040cc69ee79e0b245a": "d8a85a48a56ba068205d94ea19d0ad5d",
".git/objects/bb/c643c86e7b0548a983290bdbae639a03c8ffa3": "2746fdb387d00e7a5e94d4f2027ee3f2",
".git/objects/2d/0cdca2b40316a404e0d0b91e5e59d2d767437b": "93903fd21639d1545895234981a0ae10",
".git/objects/40/9e3db06b97b5830fe3b8ea163f4d978f2d83f9": "8710941fd3ffc3e21a5b0c41ef9582e4",
".git/objects/e8/8e393cd4088eb0670ff071de741721bbb616ff": "1b11a954286590e12a0faa31b48d98fa",
".git/objects/e8/97cb6eb21ae7087cbfaa0f9041b31638e1ee32": "8da086cdb11820a95f3ba337ad4356b5",
".git/objects/e8/e950de1f0778722a28815d1c2f101f708c3592": "62c26e34b5b4fcdf15ae20d34437ab1d",
".git/objects/e8/9ad687f1ec5de996f005f34ad25364f1e1f16d": "010a1b6365bf1584c48526648a179aab",
".git/objects/3b/cf0851555b7da58a30abddcdc3bf91bbe7f92b": "553e900da4e8926e9cd408755701a40b",
".git/objects/ae/b6ea638c3b2a11e838c6c2a5e6d192b3ae9861": "f5262f2a15c127454d5cd73fabc044c9",
".git/objects/ae/354c3b0a5d501b980e8014791e707d8938bf96": "c641287ffa8368ff93d8fe8983a2ee08",
".git/config": "10e831d975cf3b148c0513f6e643877d",
".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/logs/HEAD": "db18cc1725acae2a0ebde741f4bc400b",
".git/logs/refs/remotes/origin/new": "b3c072c7b592bacae5be90bb33fe1aa0",
".git/logs/refs/remotes/origin/main": "846f36ca313c9f7086dbea1ed054c2d1",
".git/logs/refs/remotes/origin/master": "be04cc15c6504338678256e63419db3e",
".git/logs/refs/heads/master": "727d8fde19a0f703e792a1b447954d5d",
".git/ORIG_HEAD": "5b717203b686d1b75d4765088b77842d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "f1afc6c8c170c820641c3092ced4c96d",
"manifest.json": "dab5bfda3da1c939fd84e12c4d742301",
"version.json": "ecd4047abc9755c08549656ad30ec2e7",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "deea91aeee5ed8ed8c56aa0457952d48",
"/": "deea91aeee5ed8ed8c56aa0457952d48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
