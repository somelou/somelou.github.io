/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1aadc5b712bfbe2bdbe52bb0bed98d70"],["/about/index.html","178843c2fa5a0931ac2c1d7a2b39c9e9"],["/archives/2019/index.html","57263962e5020e0a534c43c070713df6"],["/archives/2020/index.html","9ea39ba12e4e87bfabbbe12674f61e8c"],["/archives/index.html","7f96a73aa9970c4ae75231009fa5deb2"],["/categories/Java/index.html","4f504fc0bcb226cad1802b4864cf1c8d"],["/categories/algorithm/index.html","d84e89ee0dba862216f0f42b82e079d1"],["/categories/blog/index.html","bf91605222dd28918d0936d05028433b"],["/categories/front-end/index.html","f5e2330d5033caee94f06cda436db1ed"],["/categories/index.html","a50b461271b9dfa65bb54b314ab26ac0"],["/categories/linux/index.html","67dee58e680ad2000ec22e811deca926"],["/categories/mac/index.html","fe62729d2debee2a8a0289259d626d2f"],["/categories/other/index.html","3b94df8b3f0dd9357e7cab75d5d630dc"],["/categories/网络/index.html","68dddefa3227997451bdbf9256235734"],["/css/main.css","5223f8d31cf0dcb616dbaef3f2b61b84"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","876000e29d9171967c2116f5a8c0b89f"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","67691e1bcaabf5929268af9716736a50"],["/js/src/algolia-search.js","0d8e297086c4a68863b7d8a18f19a25a"],["/js/src/bootstrap.js","becf288936c09db55b76dd9e10428e64"],["/js/src/exturl.js","9b19e06a351024be20c32e012258be7d"],["/js/src/fireworks.js","df6c5a3265798d9d3189276ed24e5078"],["/js/src/js.cookie.js","5473776fd9ebb104b2cddbb2f2ca21bf"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","c6c405ec5d72dfa5f74cbd524dac6867"],["/js/src/post-details.js","5a637a612972dd124f70571d6cb25bb2"],["/js/src/schemes/muse.js","500ce0564a4946c8bc6babab4c5d2405"],["/js/src/schemes/pisces.js","d448ece804960c306832305a14abb4f2"],["/js/src/scroll-cookie.js","3f7b8c9469fa3e888dd5fdb488454fd4"],["/js/src/scrollspy.js","092ff86d52a03b2ff2d35463a1768adb"],["/js/src/utils.js","9ae56018bba32bfede82448006f91228"],["/lib/font-awesome/css/font-awesome.css","a48dd45e9e1088d976dd17eb5f499ad5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b458adbf74787bf35f9a0c42a10dca7"],["/lib/velocity/velocity.js","f05377bd10488d2c876127b0437ee37d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bb8ea66953c8479c5485a90a611355d7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/1136132855/index.html","420e5af31a8fe03594608f002d1980ce"],["/p/1243066710/index.html","3f5e06db653e9b846d623f40c9828187"],["/p/1326311149/index.html","f0261da16cb8b69e382c338802b92f7f"],["/p/1330414162/index.html","0d783c6559a21c797b46eff694d46c26"],["/p/1507653627/index.html","2526e2f72c8e2233e5ae4a1482de0ea1"],["/p/1616465807/index.html","36ef629e5e76ef1abb6c4f81e87a8c01"],["/p/1925762643/index.html","56725b1389ef42b049f676a3da76b500"],["/p/2027328352/index.html","f1b0747b3c3c28f64c2ff8ea0a399be3"],["/p/2054314647/index.html","1ef6a3b972ed003ccde65aa21ec49775"],["/p/2094704911/index.html","14736b0aa1ea1cddd8e27fb3bef63be0"],["/p/2480269034/index.html","aab3b9a5a9da37935e7a5d16ef04de46"],["/p/2595394334/index.html","bccc735d0136d3ef209a02c148e3b825"],["/p/2622962694/index.html","3da403dea5547962a222a0bef8032806"],["/p/2914875511/index.html","2a0e53a1af564baeaed2a4d3126b2997"],["/p/2993615910/index.html","d146929f7065b9116fab0c513416d6e5"],["/p/325336281/index.html","4ff994583180075452c2aac826775b25"],["/p/337471241/index.html","8fbdd7fa4adf3b90c26c8bd3070c4dc8"],["/p/3535319776/index.html","f2932b11bce5a2da8d30154e7438feef"],["/p/36920602/index.html","4d5c8aa2b5f23e498691427b89886911"],["/p/3741091999/index.html","83d08fa96c0d0b810c1c68b8b69ed7e4"],["/p/3811859892/index.html","83af549c914582888bafd3c8908bdc85"],["/p/3871219887/index.html","7c250b8e1140779c8d7d724e51e29623"],["/p/3907919010/index.html","fb88423a492d5900fe0a7392594d3da7"],["/p/3958123573/index.html","4dc7d5ed8d76d5213cd576f14e91d45d"],["/p/4048823559/index.html","fd70d56e08a470db8f78c56b280ad66d"],["/p/4288673006/index.html","16fe6357cc5355d901834773d56cf9c7"],["/p/556968818/index.html","be8f22af208928dd06443bbe6c9519e1"],["/p/739861978/index.html","48647d3a38c5730621257f9e33edc752"],["/p/850238276/index.html","8d5d7b20041d44c13dfbda9f253e37b4"],["/p/964429882/index.html","969275656247b7aa38cb8d221465d584"],["/p/985515144/index.html","5d0f3f86b3dba7f5ce40413d4ebbeb40"],["/page/2/index.html","638f17f96bbb17728a1992fc23b95b38"],["/sw-register.js","5ed31b1b3149b85230dca93d7175657a"],["/tags/JVM/index.html","b130fd357c9b2f015a3632315982dd70"],["/tags/OS/index.html","aaae0ed80eff903ae6402dbadd1251ba"],["/tags/a-recommend/index.html","34d396b240097335190e1abd73fd3471"],["/tags/android/index.html","8f59622d8acba3766a32f84ec6ec4cb8"],["/tags/annotaion/index.html","6a62e0e0e8ba37303c7fae374ebb3681"],["/tags/array/index.html","01529444109688868e692b309b342049"],["/tags/audition/index.html","00d928701a18b93ecde5a9f13d507561"],["/tags/demo/index.html","6c1b8a602d7c9e0c02db586eb34a5bf0"],["/tags/git/index.html","348df17e6ae51d3865fb0f3159e92f07"],["/tags/grammer/index.html","a9c03472d667b756549b4b31a1a841d7"],["/tags/hexo/index.html","292a990744dae3ad1c24f8a211e47843"],["/tags/idea/index.html","939c4443e6f9b35346347b6257f38c18"],["/tags/index.html","c48faddab4d4689541533885306d500e"],["/tags/list/index.html","2975461a06cc515507545dd9e4be6f47"],["/tags/map/index.html","f3dda2baca79d118e784627cd8cbf6cd"],["/tags/md/index.html","1c879496789484b5efbd657ec29aba3b"],["/tags/module/index.html","289ee5fb17ce008a6097df250d8022f3"],["/tags/reprint/index.html","58496dfa007ee87be4054c842e4d2bf1"],["/tags/set/index.html","b0bb22bdfeb071e179019a037df86e1e"],["/tags/software/index.html","6097ba8c39219cb783806e7d0fc92ae6"],["/tags/springboot/index.html","666502d7f08adbc55de79d988634a7cc"],["/tags/ssm/index.html","c15cf70000d6262450831aa22af8cad3"],["/tags/summary/index.html","66d3967e8c6fc22184f4dbc6c89a170f"],["/tags/thread/index.html","7300b0e72a3ea622f0902ec2e28d5fa3"],["/tags/tips/index.html","3bd099e9c13308fec6a8e493424a2ef9"],["/tags/un/index.html","e319d6c23cf5b8a23b9f4c3ee909dad3"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","c7d050e8dd0635be3fe2140d9e005577"],["/面试/知识点.html","5e6dcc2a0e381e42d3b5aadc9df2c4dc"]];
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
