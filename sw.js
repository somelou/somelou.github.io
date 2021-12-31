/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","17b4a1a7e0bacbc45791d2e877905a36"],["/about/index.html","c0e86e29d8d692d5788f508319547d40"],["/archives/2019/index.html","95be7c12acb109519f22194ad7163844"],["/archives/2020/index.html","60eb27e726d5bcf0a81357a53659a864"],["/archives/2021/index.html","1f73227d73b5e046e26821e7b087ea9c"],["/archives/index.html","e7c7be72e2b776f32a5f1d14b9ab3c3a"],["/categories/Java/index.html","f1ea2745afbae0ff949a01d4bb955307"],["/categories/algorithm/index.html","8df2434611f61add1569d1530f3fd4ac"],["/categories/front-end/index.html","01a4e4b3f895cce5e294e1c48d90fa14"],["/categories/index.html","eb6df59c2af62ed34f183df54dc68591"],["/categories/linux/index.html","c51076f9f176f766a8097d01c6e22e41"],["/categories/mac/index.html","4b8e02497e5cf59a20d17c00b5f31a55"],["/categories/mysql/index.html","e59b1d46e48433960fce7986eb43659a"],["/categories/network/index.html","b353959ea8508c22eadeb5d0a7ad14a0"],["/categories/other/index.html","61065d69e7ab32fb0ed7fec8830af37c"],["/categories/win/index.html","04eb2f6b96a29f9d144fc4c6f25f0b7c"],["/categories/博客/index.html","e6644d93f453b6d8fb30b750ebc770c4"],["/css/main.css","9c3fde2ddb9bc3352be3ebeabf3ec5f0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","b446241a558369587b99d953de16a03d"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","c2bcdaabc5978c1a22712c851ba08201"],["/js/src/algolia-search.js","84e267cf22cb05d3866063e521042875"],["/js/src/bootstrap.js","42039f720cbcc56a12e0a7d4d60c08cc"],["/js/src/exturl.js","a638237ccf1d6b0e3c4f1fae9d7fa7d5"],["/js/src/fireworks.js","b7377c09371d1afbb65c490b76bc856b"],["/js/src/js.cookie.js","f64e5086323e798a8f92d26e990dbb85"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","7ca21bb62df5a59436265326fa27031b"],["/js/src/post-details.js","54c533d90992c5f2d3140e4bfdae01ea"],["/js/src/schemes/muse.js","b0473339de67e98821ea78b8906281a3"],["/js/src/schemes/pisces.js","ebcc451a458db50062140d84ecdb40a6"],["/js/src/scroll-cookie.js","0a3db909a2a03f00ae18e80a5654d0e8"],["/js/src/scrollspy.js","a59d22c08df6b22effbdd7bafa78ee09"],["/js/src/utils.js","2ba7cbdcf373c40f8e33d70b73287acc"],["/lib/font-awesome/css/font-awesome.css","a83735c2f7ae189adb67cee55e212387"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f5b2f3f5d138a3a696f34c7ce7aaea52"],["/lib/velocity/velocity.js","1b160e73ba9617bbed81b55046e93842"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5c83cfe6f4ba0b54e5e15227fd3a9fcf"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","f8628dc9e7fc03c17a9fabadf6915a39"],["/p/1136132855/index.html","cf84a3dc86ed9e8a1b44d62bb24a5196"],["/p/1326311149/index.html","0a863dc97276099c13b0a719745447ee"],["/p/1330414162/index.html","6536ff2ae1eac22ca02ad661ea2e0233"],["/p/1507653627/index.html","1adb08c92d1423c99a9ce8f4d31d8247"],["/p/1616465807/index.html","a769fe6329f4f3884fb704077c72aa7c"],["/p/1925762643/index.html","b51bc2d22f75cf054209fb4046edd0e4"],["/p/2027328352/index.html","cb37e45f6f04267ba850e0cd8afd8081"],["/p/2054314647/index.html","489a4a23269ffdc1e00c01e14837cbe2"],["/p/2094704911/index.html","4facb5928e2186198656c58c27cd6a88"],["/p/2112220981/index.html","ef6da0b0ff847537e692efa69388badd"],["/p/2112220982/index.html","500c45d2a520d482065e9baaa2b8c596"],["/p/2480269034/index.html","5857e3563dc00a2dc72e6a4ba39ca5f6"],["/p/2595394334/index.html","8d86f83ac80566b523971d64bd228c8d"],["/p/2622962694/index.html","b87cb3ce681007dfbfd19b5f75a79700"],["/p/2914875511/index.html","d7f56b6edaf7f476e9a1805a40a007aa"],["/p/2993615910/index.html","4f849c111d83e400a42c86f87bca2fe4"],["/p/3216883251/index.html","587b0e9c0b0c2efceb796f09cacbcfb6"],["/p/325336281/index.html","f010bd558ee1bb6347a7ef4a5043b801"],["/p/325336282/index.html","5a2efc6ebd8d4ba540aaf351f89ece6f"],["/p/3310093647/index.html","d6c4d988edcfdb31ce8d7860be835279"],["/p/337471241/index.html","bea0a0cba997243f11ab0170811446db"],["/p/3535319776/index.html","652a4746b74cb59b139cc0a501621cb2"],["/p/36920602/index.html","dd6c8a2186f341de4045197f401f253e"],["/p/3741091999/index.html","be3d634dd91b21f07ed4d36b1b983757"],["/p/3811859892/index.html","6883fde799e67909fcacf240fc8460f0"],["/p/3871219887/index.html","6158439699b067c8db9c994260220d8a"],["/p/3907919010/index.html","1e008c8834675f323be0862011c47985"],["/p/3958123573/index.html","82dcc2cee22b89c620b2147f5e241bbd"],["/p/3960214993/index.html","1caca456adc6fe892bbac57e9eb5b498"],["/p/4048823559/index.html","9c4901354f7466a74dc944fc22dfe0d1"],["/p/4159564062/index.html","6a78c7821e69bbe0f942b924ff9bb5b3"],["/p/4288673006/index.html","3cd34cfd03d7b44b561c7970773a8368"],["/p/556968818/index.html","6b31eb22b8ecde64ea7487a9f28427c6"],["/p/739861978/index.html","c707af286b056eb2c92b690a9deacd96"],["/p/850238276/index.html","3a2fffad830b917c13e74d603fe12c74"],["/p/866021247/index.html","b822aea2cdf71575c6125b5e7913209c"],["/p/964429882/index.html","5aea560f612162b69c784288fb5acdfc"],["/p/985515144/index.html","d4de8a7110ffb32e522d6ab8cc076c39"],["/page/2/index.html","020bcc2e28749a16d3bd0630aedc8e3a"],["/sw-register.js","d08a4e95c049eb108fc805e62d5026f6"],["/tags/JVM/index.html","1b6b2e39a6aaabfeaa4dc673881a3679"],["/tags/OS/index.html","cafa1e7d9af526bf2931608222ed8c0b"],["/tags/a-recommend/index.html","397265d9823d9173aa05ac7641d58dab"],["/tags/android/index.html","828336b05e9463c98731f30e2c05a6ea"],["/tags/annotaion/index.html","cac6b3bec613f787820673c7448bd0b8"],["/tags/array/index.html","a1e16f3cbe7f63ab044a868d6d92ef8d"],["/tags/audition/index.html","b865ac14d2f2f5f747b638e4e6c2dd65"],["/tags/demo/index.html","dd1067c844d58a1409397006619a63a6"],["/tags/git/index.html","0d0324cbdbc35499479ffc846634be12"],["/tags/grammer/index.html","7e5009eb3c11e3247224cf5042850545"],["/tags/hexo/index.html","7e5b4c56dda1a297aa40b9c933314c7d"],["/tags/idea/index.html","b613f13895580cbeadbd36ff61d1cfda"],["/tags/index.html","cb35e43d0d6e64d9bc3de0307d926a2d"],["/tags/list/index.html","bb5758d18b065cf01c3c5cc76ccf38aa"],["/tags/map/index.html","641cadd300e9a9f49253c8625dadae99"],["/tags/md/index.html","baf225424334d4083136d38e865cf5b8"],["/tags/module/index.html","52455728a30e4bd9b5ad3052bb00c677"],["/tags/reprint/index.html","bd4bab1bb61c54df31b74cd457cf918d"],["/tags/set/index.html","acf3217f3f3d357352579130bd60232a"],["/tags/software/index.html","8cd27ece07186789cf1b452d3fe07415"],["/tags/springboot/index.html","a277eb642c2a9e2d9fd57705dc23ce8d"],["/tags/ssm/index.html","65eb96f2d9b18c414b698940ccf35fd0"],["/tags/summary/index.html","7fa57f7633e08b868c5a51f856ae629d"],["/tags/thread/index.html","2d64d1dc813fa10331578b764ee371ce"],["/tags/tips/index.html","e3c0259732b7f62ffb7c543d845ed8d9"],["/tags/un/index.html","b4a340725910129d072fdcaed61d7815"],["/tags/并发/index.html","e6493e314d3a12b2773fa5a3d2f6d794"],["/tags/脚本/index.html","34c50b9054de83fc095888cfd32e2de4"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
