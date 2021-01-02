/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c22588586ba88dabc41a69dab3c1cc49"],["/about/index.html","0cdafad3f7a5f550314cee04cf7e0daf"],["/archives/2019/index.html","3c70dcfe0d7354280015953fd5003f28"],["/archives/2020/index.html","0ab5718c8841c28f5b7f6e1f89d898fc"],["/archives/index.html","345742e6de9ad263f7aef2173d845c19"],["/categories/Java/index.html","d2a1f4b15a66f0c59fa883ba6815f79d"],["/categories/algorithm/index.html","1566afa23b4c3b37995a96ef3999301f"],["/categories/blog/index.html","71d5d24fce29fe0a9462f101214a227a"],["/categories/front-end/index.html","12412b6ab5cb10548ae39fa6221c07d3"],["/categories/index.html","09b9d7957c25c6d67dd9e72c51a71b03"],["/categories/linux/index.html","679c92e04086d2ec329ea2565974a825"],["/categories/mac/index.html","86ecdc0c3ab8405f41d7224962104cd4"],["/categories/other/index.html","db28e0e26e42a0f10da2b77d7fe14577"],["/css/main.css","6b05c9734eb17beec8aab2ef4d77a42d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","231a7e9af9b060fc9fe8f3ccf3790555"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","ec040e72f341c06ffe5ab2ffaa506173"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","514e1eabb03254d23729deec5c208859"],["/js/src/algolia-search.js","bf88056158cff060a1d4d276616a2480"],["/js/src/bootstrap.js","0db963514003d850c077db41d970f6fc"],["/js/src/exturl.js","e05c90a945c9478fe4813c780eafadd9"],["/js/src/fireworks.js","dcf42e0daa0daa8837abcd8beb731798"],["/js/src/js.cookie.js","f34cb6087873a8106c139363e0b3133c"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","640fc8de082f740585b30608d4ba336e"],["/js/src/post-details.js","63512c681d9ecdfb69facc3b387975eb"],["/js/src/schemes/muse.js","d638b05a446c60abedcb31eb2d94a792"],["/js/src/schemes/pisces.js","2232ed4c512e1af90b8b9c8bc569dd05"],["/js/src/scroll-cookie.js","da0ca7488d0419da9d5978b553554c88"],["/js/src/scrollspy.js","e34716813cb471b8dc8f6602abfb8aeb"],["/js/src/utils.js","4a8568acf403ebf784dae65a37102194"],["/lib/font-awesome/css/font-awesome.css","1a801feb6a4e09e631ecacefe780e659"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","00c8d93df296a2bca768d912598d248f"],["/lib/velocity/velocity.js","6403d813e80dffc4b51c38ab5bdaafd6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","196ed80898fce7a36b51f53e818037a7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/1136132855/index.html","f548dd96f49e82cb8d631cc6035abc8f"],["/p/1243066710/index.html","559be94a4a498dd79ba108634f962955"],["/p/1326311149/index.html","523622c70a0d44e67285f64529276d83"],["/p/1330414162/index.html","30aa754abc489e380da168c5570b6e60"],["/p/1507653627/index.html","c6df07980e6a9112786a9c18ca84608d"],["/p/1616465807/index.html","5fc27cf6967ccb46d2138c231f3c15de"],["/p/1925762643/index.html","c8ef71744726c4e27b6e3b4f382ed2fe"],["/p/2027328352/index.html","9bf0d69fcdcebeacbf586b7daab899dc"],["/p/2054314647/index.html","30d55133d792663fdfb1a22413c554aa"],["/p/2094704911/index.html","6cac8d048cd026c93a38f4f469e1ee4e"],["/p/2480269034/index.html","2285fe1ae430cd819a5963e4f33ea454"],["/p/2622962694/index.html","666db0cc2333c8f4150ae18ded7344b4"],["/p/2914875511/index.html","23d0aadcb9b9e89db94e3a7494df48c1"],["/p/2993615910/index.html","2bb1f343ea410b99f2ec275ca21d3da7"],["/p/325336281/index.html","b17b82f2c3f765547cf369026ba734a6"],["/p/337471241/index.html","9d98b1c60ac9c5a097472cd00e81bfa6"],["/p/3535319776/index.html","e602669120c67dd6b179b14f08286158"],["/p/36920602/index.html","2ed6a35b0021b0f5d308b1e4c065caaa"],["/p/3741091999/index.html","a64926d58e5dd66c20c2b0f3b96ff737"],["/p/3811859892/index.html","4e1230ee23c1403b74b37f5e74008f1e"],["/p/3871219887/index.html","c616ef66b05a5c9654616bb88d7419e7"],["/p/3907919010/index.html","cd49b8f4db30605578fb9d5320453b6b"],["/p/3958123573/index.html","0dc224bb019e7d292fa0a001a39b9220"],["/p/4048823559/index.html","e2ed28531b63a791adc9d7d0f98d1b42"],["/p/4288673006/index.html","ae5187f675311e42c8fc09b34a81e9a0"],["/p/556968818/index.html","8808f9212ef9f156d0b0db57be466211"],["/p/739861978/index.html","9088515260e25cdd78e6362e597bacdb"],["/p/850238276/index.html","dfecaee69df1d39ec5da1201f014cc30"],["/p/964429882/index.html","9bca031c7ca01697fa2a51bad83f8878"],["/p/985515144/index.html","3aa0e309b9b7ebd1a37271e7f327784b"],["/page/2/index.html","edb98efab34720016ee50dad63c5c66a"],["/sw-register.js","faa546fd5bb79243dbe5839586b69aea"],["/tags/JVM/index.html","73bcdee7b2ea1206f8e28316a0a4ffb1"],["/tags/OS/index.html","6cca16ab31447b9c43913e7750435c83"],["/tags/a-recommend/index.html","5d0d0be3d416159a826273b76b4b6936"],["/tags/android/index.html","5c6a089d4a4e7f794bdb2261ba34e570"],["/tags/annotaion/index.html","8144527db69c8abf7480db41cea7d41b"],["/tags/array/index.html","397b83b29db41a3cccf04c1408ae02ba"],["/tags/audition/index.html","71763521608919db2c15f9418de27ab1"],["/tags/demo/index.html","8d867ff12f8260972bf956deb5432fa1"],["/tags/git/index.html","e7e2d8a1540577e68bb6422f465f3dcb"],["/tags/grammer/index.html","7a1350345171f0f94a64fcc9db3bb2c8"],["/tags/hexo/index.html","62515dcf32a8561cb61a4abc9f2723e5"],["/tags/idea/index.html","d6453b76a664cc71702c37546caa29dd"],["/tags/index.html","66dc915b652f378b3dbeb5a92ac79f6f"],["/tags/list/index.html","515da51f2ff8fdf7514ac583481e87c2"],["/tags/map/index.html","ca7f5b19eb85673cb413062dc425090b"],["/tags/md/index.html","d391f918d0ffc6bfc3f752da523c1489"],["/tags/module/index.html","d2a2381c4e7f417b29bca1b767a89831"],["/tags/reprint/index.html","e374027bef4dd62b4e85f265e5f09dbc"],["/tags/set/index.html","05bfccd980adb72a0d02d6f67253470d"],["/tags/software/index.html","e001ce632b5cfd31ba445df632ea8165"],["/tags/springboot/index.html","47664d564165d138f424e7a2a054d940"],["/tags/ssm/index.html","d0740addfca74aa3c7ed041c19410921"],["/tags/summary/index.html","779340cdaf8be02af5cc0568b4a4d08a"],["/tags/thread/index.html","06fd85dc9bda622556cc94b74547e93f"],["/tags/tips/index.html","d51d293919eb9d66a98be5d902d4deba"],["/tags/un/index.html","9279826dcafa16925e4bf52e56d5f516"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","43a813da0bec760a92ba0c0e9f89ecc5"],["/面试/知识点.html","39864f928482ac2407238c91142b79ad"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
