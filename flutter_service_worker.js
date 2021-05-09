'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "4827088003d3e3bb81a9adae417a8aac",
"assets/assets/germanflag.png": "9eb06064425d56aca896ce1a28a7ddb6",
"assets/assets/croatianflag.png": "fc1a8eb2830d3ba8ce34eefdeeb6da2a",
"assets/assets/tijelo.png": "50ac835cbea28d391a980d5216dfe8ec",
"assets/assets/sunshineblue-256x256.png": "032a42e719a30b6d23fb2c05bf26a016",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "538597065f35868f3009bd6263ec7cec",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d316a9bf87eb3b30d8b3ff24c3d618bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/FETCH_HEAD": "24b275a2fd97956596dd87d78f2dcd26",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b538ce2b6dcb293788f6b240635e4cf0",
".git/refs/heads/master": "d72a984e06f312c67deb36d562097ac1",
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
".git/index": "48362e0edf8db38f44d9378414c41e6c",
".git/objects/f1/c501a8bcabeea2ed4d0c55725330a555b8218c": "f17d2dcfb0ac715e7a94fe29ced961f4",
".git/objects/0d/5ecd74b85e33451b4afe647e1581aefa2fa252": "0612119b8662c2cd0f738d771e013d2b",
".git/objects/5d/bbf5d5de85296de200067b5c3db15e498d19f9": "a583fe64a8c563f1311c7ce6fff35b70",
".git/objects/65/aa7003927f8f35ded234aa0b4eb58bb82c0cff": "97bac9915f4343b36e02b7321c14b3bd",
".git/objects/0a/b85cfde9c8e6861450579e3dc87331745216ae": "8c6d098b69e1537e3a1c078530eebf49",
".git/objects/11/ea3c854831470b1808008605753e10b6e7b1ce": "ae56987cb996142cc317efaf16a45a8f",
".git/objects/eb/3a2e35ac3018d7608ea4a1e10912375f259142": "97fd91d4e421e10a8ba5da8bd71d8259",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/5e/b4f99f304c984ad399624e39b25ed3dbbb6119": "8ebc20a235f672693575d300926d85a6",
".git/objects/7f/aaf447bafa8f11c057ebbd37273da637dcf3b4": "df248f5c777bb28778e950a596d84252",
".git/objects/c7/d4eb599289e1a6dad176cc8fb8b65ef5d072dc": "87a941a6088138b4fd95449f6e7e128e",
".git/objects/29/755d2ab4d05d69fc1bd29d2a5d11f7e70bc2e9": "dc73314def92284ebcb0fe1cf88e3f75",
".git/objects/e6/f7f22a6afe10d3dba7c3221218a1cff0b27ee9": "3adb88a2cece1880d3d5880c00475f33",
".git/objects/6d/b37159940b7f82bda0dfffa7f352e071069be9": "61a1080fa144751d5f2021ff800cf567",
".git/objects/68/9d16de77b3bc46edee7a75dfda4fb9dcd48b15": "7e0dfe9cecab231ef99b9720d6ddc69f",
".git/objects/1a/afd7d07625cad808ce98dc42e688da32d1d1eb": "42a4c950edb480a7a484bb8766d54056",
".git/objects/aa/c87a63a7dc1abaa2f34876bc545ab407f14633": "80275b5f44e7d008e1b168c4af2570df",
".git/objects/cf/15c788da24f15c8de561e38df2a4be42a6b2df": "788830ea4e28ec68c7dd41000081a6cc",
".git/objects/pack/pack-f9cf56b09c93f65402c7b880b447c92f87c7d71d.idx": "8e6558fff7e0130ae42e379f0f42ca91",
".git/objects/pack/pack-f9cf56b09c93f65402c7b880b447c92f87c7d71d.pack": "53151334c9954c1f61b4608ea0f0c04b",
".git/objects/e0/a431acd2c44cd2c2ba8f353a359269aefc1094": "cdaa9d27300f56bde691a05503e101f1",
".git/objects/e0/20493eec572820220e9719771654b1437fce44": "37ddd6890e43d35b6a41bdd526fec3f1",
".git/objects/69/7a2e5cd79983b764a876cba441bc99a36cf846": "b2c0f996e4dd76556d15671ab7350ec7",
".git/objects/53/1a005f4d17b13ebf44a4c7dec8adf533242bc6": "053d4e6f4efb088681ac4c2b6eff2285",
".git/config": "06113b55954ae592e20f382c46924fd1",
".git/COMMIT_EDITMSG": "2d4a9c4c31576b5640d27dc0f67a2229",
".git/logs/HEAD": "8ffe5d69d430244630d3c5d007da1fa8",
".git/logs/refs/remotes/origin/HEAD": "ab71d84dd7327ef51fcc5abd88a8213a",
".git/logs/refs/remotes/origin/master": "3e7d60796f9b3f6758a4cd70eca7f072",
".git/logs/refs/heads/master": "8ffe5d69d430244630d3c5d007da1fa8",
".git/packed-refs": "7faa3bf4354923d74e0e6a366c7f6007",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "0d6521e5329d38bdbc600027ccea1702",
"manifest.json": "e64d5c676984f6295829470aaafad8c0",
"version.json": "94441729a2c866ba2125d4354ec3a20c",
"icons/Icon-512.png": "4827088003d3e3bb81a9adae417a8aac",
"icons/Icon-192.png": "4827088003d3e3bb81a9adae417a8aac",
"threelittlebirds/three_little_birds.apk": "7c84f2b9434d5650fc3d545e16592ec8",
"threelittlebirds/database.json": "8ce3841f517189b568527a4f4f2dc901",
"index.html": "b6c8d89e72d9d2d25735d54a93d8235a",
"/": "b6c8d89e72d9d2d25735d54a93d8235a"
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
