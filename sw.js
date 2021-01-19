/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1748172dc36a247103ddcd4acd076dba"],["/about/index.html","8ea9119a84d5b46eeda9e40ca72df538"],["/archives/2019/index.html","1dc773f7845c93f6ff708e1c8168c0e8"],["/archives/2020/index.html","8de2e595f4ea14d6d9fde70bece49ae5"],["/archives/2021/index.html","57b02f48218d29d2558509c76abf86ae"],["/archives/index.html","7f677c0f6bd4d70c03b1ebbb38e41839"],["/categories/Java/index.html","c7321a20393bf65b81ab89270fa55416"],["/categories/algorithm/index.html","d2fea694fca07eeca447ebcff2ea719b"],["/categories/blog/index.html","0d383f111fb094d5e6b9e3c61fb5350a"],["/categories/front-end/index.html","8315a0fc5cac1393a7028ba826ac0984"],["/categories/index.html","5e5a69f38c626a28410f9481e6b64dd0"],["/categories/linux/index.html","342b4cac9cf275e5d67d5df06e90e013"],["/categories/mac/index.html","c7247e26d9be18b9370d794701ed8358"],["/categories/mysql/index.html","0dae32481259f3a70dd02fcb5bfaf589"],["/categories/network/index.html","ec7a20525810a3e23505eef026c8bb1c"],["/categories/other/index.html","5f754810e3653e02ae5ff1a6320ca38b"],["/css/main.css","3df6d0c903b3eba2cd70de62dec23a8f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","cbc9f96f70c50a433bc5417ffa92a60e"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","b0fe443d9a7101f9112a012fcbbad33a"],["/js/src/algolia-search.js","90ca5ea83b0a43afb1ada05fa1fcf62e"],["/js/src/bootstrap.js","87d0a9f0694988fee3890a7d62b77aac"],["/js/src/exturl.js","4ff5e524a0140de585fd814704355608"],["/js/src/fireworks.js","90d6d9625a3547d03c245840c4c7be7b"],["/js/src/js.cookie.js","62b21e5f0e1cd336520527f254f067f8"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","b00837d360598afead48b8af47b22e9f"],["/js/src/post-details.js","47c1b576a188d13ec525d69718d366ff"],["/js/src/schemes/muse.js","5b1dbebc9088fb66b54ddd062476379f"],["/js/src/schemes/pisces.js","a7b2fb862733ceeb14c86811da6c7842"],["/js/src/scroll-cookie.js","b23ee42cfc3058965f20ccaf48b4892b"],["/js/src/scrollspy.js","16060b900ba150709c633eef03d20a41"],["/js/src/utils.js","f80d83d47e7f05e42f03c34471191c74"],["/lib/font-awesome/css/font-awesome.css","1778a4eecd9463f0e67f64def17d0ba9"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1030293bb3f745c73825f9a63b2b9cd4"],["/lib/velocity/velocity.js","428e77e5210a9fc075dbe75f6f111edd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a805790327084afd30a50a19d178884f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","e6e27e7d0b3322ac6ad6c379328f3400"],["/p/1136132855/index.html","f6a1b65174ef9c1dbe6ae4e23c2ac3be"],["/p/1243066710/index.html","e5b9156831854b7126cef04864a7cf9d"],["/p/1326311149/index.html","b97e33c550dba5842434f47cfc9fb6b5"],["/p/1330414162/index.html","85a436c8b8860c7479e8b4c343c4717f"],["/p/1507653627/index.html","907b046e0abfacaeda3d9d7f48f29383"],["/p/1616465807/index.html","da3ed4191fed5b2a5dc0147156fe295b"],["/p/1925762643/index.html","177e111ed7098611a0474b72cbf7b1e2"],["/p/2027328352/index.html","8184674097f9ae73ca234b446f1bd546"],["/p/2054314647/index.html","6718759112749981c9eb81d212b934a9"],["/p/2094704911/index.html","d5c14f5bb37abb43c31d87efeb92c1c2"],["/p/2480269034/index.html","2c11aeecdf557fe15f8e99d515f9bdbf"],["/p/2595394334/index.html","34a0680cf797b2be85a5ad88cb34348b"],["/p/2622962694/index.html","23742aa16db36f3a8e9cd76d78d3bdde"],["/p/2914875511/index.html","303bdb24b47ad9d93a4157e87316cb57"],["/p/2993615910/index.html","b6a1d811e7baefa1ae516c7b41db8b66"],["/p/3216883251/index.html","b70e8b48ecd77fc58eb620b7c731d501"],["/p/325336281/index.html","f7b2abc6f919264860e32634500c6bf7"],["/p/3310093647/index.html","dfa84a0f06e615d7d5b3a184ba4b0310"],["/p/337471241/index.html","f7f23dd2380cf512d53bfff9a00154d9"],["/p/3535319776/index.html","9c6285199b57197e97b28a97c1274f9c"],["/p/36920602/index.html","0d6006c48ed0c54494f006facce45d7d"],["/p/3741091999/index.html","44b8913f8ff12bce61ea88d8abbad011"],["/p/3811859892/index.html","1acf675be178ca193802af38c4c20925"],["/p/3871219887/index.html","60fd58d26ea5181cba65cbc88ade115d"],["/p/3907919010/index.html","9376959a4e4e34e4a2d568786c99f40b"],["/p/3958123573/index.html","712b96f6ef55ba8f8e7f9cdeefb55b52"],["/p/3960214993/index.html","694863281d9e97ff480a8f5859d03992"],["/p/4048823559/index.html","1782929f91b2576e5bab2bcabd3b188d"],["/p/4159564062/index.html","457f04eeda1bf46fa21261b380e3cfd7"],["/p/4288673006/index.html","4681ff7a78f068f48418d8811266b8ce"],["/p/556968818/index.html","ea566b2d7a8dcbf6a6cbbf7c42cb06ab"],["/p/739861978/index.html","9f868eb7c391089d4b8eedf0bece0cc6"],["/p/850238276/index.html","fa9bf8104ad24ef6a214ad185f94b75e"],["/p/866021247/index.html","c47e151add6e32f88c94fecbb8052cd5"],["/p/964429882/index.html","0f26cc062a86b7b2187f6258c3508448"],["/p/985515144/index.html","e2537b06fc351950f530b88dc0a06895"],["/page/2/index.html","2832e374d7659b58406f3ee0a53268fc"],["/sw-register.js","86b2110a649b5a353e9088acd810b9b5"],["/tags/JVM/index.html","7322b4506f8ef7009a360be34f846df0"],["/tags/OS/index.html","3dc2d661105d4043280ea36e48f9f67c"],["/tags/a-recommend/index.html","181f34beac8811d136434b5dda988e24"],["/tags/android/index.html","41ecf14700c72059a395525600acfa65"],["/tags/annotaion/index.html","00700b7e9419b862d906985132de2e91"],["/tags/array/index.html","e890631405c469f95fb04ea55c1c8d94"],["/tags/audition/index.html","57e3ce5806dd4de82663b3b4e5c18ce3"],["/tags/demo/index.html","8c5967998eef1c9f42c4c48ccbda34fa"],["/tags/git/index.html","d9b7898c413138ae343e9b2060e7bfea"],["/tags/grammer/index.html","04a95b3d833d0e3028703ae1ecd32e0a"],["/tags/hexo/index.html","74974e1441160d1dd7391c1c9e7709b0"],["/tags/idea/index.html","6c3bca3586ba535479cd560431df2d63"],["/tags/index.html","fc6e027e244295a015f4a6fcd57fff0c"],["/tags/list/index.html","1a70be5bdb971efcf70bd81586e561db"],["/tags/map/index.html","a5656496a273ca940b684cb9b1538df1"],["/tags/md/index.html","f777a2a8a5f465440ef1d365ae6d29e5"],["/tags/module/index.html","d9255fad545a60411eadff13cde56256"],["/tags/reprint/index.html","cba5d2efa674d3ceb925e861b211f50d"],["/tags/set/index.html","8db73f33b2b159e9e2de0cd15b2d6ce2"],["/tags/software/index.html","c25b17fab34eb67d0b110d4aad6e89cc"],["/tags/springboot/index.html","f2cce4d4b1644003bc61f18715da1f80"],["/tags/ssm/index.html","fa9fcf5e61dc5eef3978468aa2096033"],["/tags/summary/index.html","db8c12820bf0a1e53388104be558e287"],["/tags/thread/index.html","344b94f458a08fbd6d68759be63da619"],["/tags/tips/index.html","18389614f797368bec15be8003c2513d"],["/tags/un/index.html","e3521ee8d09a3c743fccd4ccc7d4a6cb"],["/tags/并发/index.html","065cc664490e4273aa0fdc8c9e0075a1"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
