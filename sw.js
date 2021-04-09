/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cf87485a4f78ceecdc406c4edce7d19d"],["/about/index.html","a305a209e8754fb23efb1397d50ba1d1"],["/archives/2019/index.html","45f65af3770b8f97cc68a908cc2eb57b"],["/archives/2020/index.html","84af391e7e285afe755658743565f43f"],["/archives/2021/index.html","4219b196760acd055e6d39cdb3a589c0"],["/archives/index.html","8d385e2acae6b4a192f73d7a1abac26c"],["/categories/Java/index.html","e55b8cb9178b29404b2955b3d754416e"],["/categories/algorithm/index.html","0b444032d2855618ed56cfb90bb5a5fe"],["/categories/blog/index.html","15e339f6289330ca59cc5a3cd110f816"],["/categories/front-end/index.html","6e157da6282f76db736f26ccc99cba76"],["/categories/index.html","73e12bb9f935e1ce77461660d1848bca"],["/categories/linux/index.html","8f2e54b7f160c4e8782162fba3ba76c9"],["/categories/mac/index.html","328267f1f3055857e5bc9f780325e90b"],["/categories/mysql/index.html","f25c5701d8642a600e1fe18d1079c0eb"],["/categories/network/index.html","e408c9a4b1609b82b9fb5e32a21ad80f"],["/categories/other/index.html","1583a3936aaeeb60f5b88a3abb4fe51a"],["/css/main.css","789990cc0de79b6b016a4e91fa8731d4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","46c2b644824ee0415244deb920007968"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","e4482626cc1f4d9771d5298fb804723d"],["/js/src/algolia-search.js","c9b327bdb9dc4dcbb31093aeae18824b"],["/js/src/bootstrap.js","b97e976f5fb1c4705d489e38e1701f7a"],["/js/src/exturl.js","1763e7528b7d6f82178647b24e69740f"],["/js/src/fireworks.js","63177802d29bedb045618daacd65292e"],["/js/src/js.cookie.js","4b3336965196e779eee09c2676cc65ca"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","49640a6613f7cba0c974d1cec2fdfa19"],["/js/src/post-details.js","2ae651b8b18df3fc8845286dee12248a"],["/js/src/schemes/muse.js","cdec5632923c4f527c2b06e88e12240b"],["/js/src/schemes/pisces.js","b1bdc29a83f293cb88daea3427a670d7"],["/js/src/scroll-cookie.js","a2ef1b918a382eb43c73fe15a81a0810"],["/js/src/scrollspy.js","24d73f30d1f6a27443fd98f8edbd4ada"],["/js/src/utils.js","89f81a42f027a0aa29dd0b21905a22d7"],["/lib/font-awesome/css/font-awesome.css","765d233376b58a34b714cee65ba2999d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","351c7e45b52e1894809db812b5251353"],["/lib/velocity/velocity.js","98bfda43c00b2329410314b1884106c4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ce8b4ee9b2d0fb42cbb975e3fc0869f7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","cae4dfae912b14ef9ccefd745efaff6f"],["/p/1136132855/index.html","3173f7c923ea828ffe1b32a0323e8293"],["/p/1243066710/index.html","b5ede611b77a1bffc5d90f79037112ed"],["/p/1326311149/index.html","218d4cab13fd85b92f335a10474ef0f9"],["/p/1330414162/index.html","2f582237ba3b095564ae413b69dd0f1f"],["/p/1507653627/index.html","eb8e478d5b6cdb5472fa9eefadcd1e8a"],["/p/1616465807/index.html","8e2a051eb2b70532b5e73e7d6e3c16ad"],["/p/1925762643/index.html","d3fc2772f5d6a8864d838f0a22cd175e"],["/p/2027328352/index.html","dee5c5a71f1bce9146d7b81654616f7f"],["/p/2054314647/index.html","f918c5dce779a30dc18dd9a39b9050c7"],["/p/2094704911/index.html","ea6fc888f07748bbfbb8f73b5b113caa"],["/p/2480269034/index.html","b1d12032b419b84bbbbdcb1f9fa1c45d"],["/p/2595394334/index.html","995dc381d444b09e2455d85241df9cea"],["/p/2622962694/index.html","3af0e866e630ef177f6a1d4da409849f"],["/p/2914875511/index.html","23e090743669114b89b9b69dd0359cef"],["/p/2993615910/index.html","a42147bb9803e3cfe716fa56c29ed953"],["/p/3216883251/index.html","9e11d8ac0a8cb811d581d0695c2c47ff"],["/p/325336281/index.html","c1d55640365465b65e8373ae31ec5835"],["/p/325336282/index.html","22fafeec8bb777c939a34dc153337f77"],["/p/3310093647/index.html","f0460a87b9005889e018eff632d55a65"],["/p/337471241/index.html","a38ba22219fcff27a7eb61d02c7f7196"],["/p/3535319776/index.html","306d82d86a3c3a9a8324817ea396475d"],["/p/36920602/index.html","aa72552f14578157db27453f0bb20ab1"],["/p/3741091999/index.html","37386b8c25dd9b17d716d8f2951fdef9"],["/p/3811859892/index.html","1faa9cf2cc7a37451929e65fde0dee6a"],["/p/3871219887/index.html","7c09a895245b77f3236d28e73977d3ba"],["/p/3907919010/index.html","b0f0c11c0cf6b1f2f5e7622b4e3ccfff"],["/p/3958123573/index.html","f530007bd483b05b9f956d8f9b45cb20"],["/p/3960214993/index.html","e929b5d6d1d4fb1c37a5b929165c8f12"],["/p/4048823559/index.html","189d3f273917b3a3ca9bbe7c9cc11df3"],["/p/4159564062/index.html","97ba90164332fae8327e5c51d133e24d"],["/p/4288673006/index.html","4a4821092d33972dfefb0d9e211d0efd"],["/p/556968818/index.html","292c4d2ce6a73c6f79b140631b46bd82"],["/p/739861978/index.html","615a9a2be1493211b923d3e83ad183aa"],["/p/850238276/index.html","27665eec73f8414a88368f70d6e70546"],["/p/866021247/index.html","a6645b68a3b89ec63e5a7e4b37856bf0"],["/p/964429882/index.html","870391d5a089ab48616498f1a3ca8a40"],["/p/985515144/index.html","aa22ef42f9bad62a172cfcbaa2f7b8f5"],["/page/2/index.html","30d9d5e38277b0b47fcea5578346cbd5"],["/sw-register.js","5a800cda989641dfb41d08a7a16bb365"],["/tags/JVM/index.html","b117492987dab687e1f93b71c9140563"],["/tags/OS/index.html","d0cde26a5c967631efd4257260e7b34f"],["/tags/a-recommend/index.html","1a3124fc7b474235d87e88f37d9c508c"],["/tags/android/index.html","9bf77d4b248fa1862324d2898d70036f"],["/tags/annotaion/index.html","d1aa86712baea3b111cd8a8940778954"],["/tags/array/index.html","ef5db0f1720080badb4130df862ac49a"],["/tags/audition/index.html","5391fea85635c837802f97ef83838843"],["/tags/demo/index.html","3766138b407e7e0a994b3c5434a3dfc9"],["/tags/git/index.html","74a48f1025720203a662b89a34812703"],["/tags/grammer/index.html","70f7303495fd7bc5e76b2e5cbdaee627"],["/tags/hexo/index.html","3706a60b135120ea031d6592d7e5c70c"],["/tags/idea/index.html","df286788725e86ae990f503be36c0729"],["/tags/index.html","ea7bf0723e622ac82743506252be6a7b"],["/tags/list/index.html","57a10ff50255a5377caf0828e778fd6f"],["/tags/map/index.html","0b07f3af2089852de558ee317daa5573"],["/tags/md/index.html","e463e4152959b7ac7a987aa6d751c391"],["/tags/module/index.html","7a6f9ed76023db386c8c887bf4f0c925"],["/tags/reprint/index.html","ef3c0c43af8d908926db846d1882a365"],["/tags/set/index.html","c065facf6054df57e13fd479a6f44c1a"],["/tags/software/index.html","2e0226f8fa53a1d336c352aa932d294a"],["/tags/springboot/index.html","bceea5c3597bfed6667e196f2319fc5c"],["/tags/ssm/index.html","1ef3b3b1fdbeea8dc47087df51b6c86d"],["/tags/summary/index.html","36363c3ce51123e23042f9d9528b340d"],["/tags/thread/index.html","71e6f40d640eb36fdde8a834b4db4af3"],["/tags/tips/index.html","9dc88eab1c40e6249ca7a224958678ad"],["/tags/un/index.html","ab3128c70e86ddf4fc66f279a822aa45"],["/tags/并发/index.html","15af51eb05cc532449c04fe535754920"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
