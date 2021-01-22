/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","de42cf22a61950ff8db04b14ba87bedd"],["/about/index.html","6078f51680ca869f8a37a8272523de42"],["/archives/2019/index.html","e66c87980d6e0707217df53033bf3638"],["/archives/2020/index.html","43241307318820eddfb02a3425494a01"],["/archives/2021/index.html","635bcc0449b91c88a84ef89a4f02f9ab"],["/archives/index.html","bf8de0f689f6a86029f0effcb52e8874"],["/categories/Java/index.html","28d1a642aadbed71650b42d05d675a0d"],["/categories/algorithm/index.html","6abd59eec9657d0dd75cf8e3c89befbe"],["/categories/blog/index.html","d3f4b796bfdade4ac52ac87047b41821"],["/categories/front-end/index.html","05eb5c70e392f3bed881b82d89f048ce"],["/categories/index.html","72c4bacc8f0d51d08d1af18a5495f1f4"],["/categories/linux/index.html","d4d5079fb2e5015afcccac032ad3b1aa"],["/categories/mac/index.html","ee4e4b608c015b271b7624abf220fb53"],["/categories/mysql/index.html","278e2132833938a635651ac5cba7a2a1"],["/categories/network/index.html","6f4bc5e8b2fe0573f4c07fb721a0fdb6"],["/categories/other/index.html","d764724982d5e3225f3ece1bf98acec3"],["/css/main.css","f697aafb93d16d8b403549226b43854c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","5a77585fd37c99a2aafdc6964274d794"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","0af8c9310f6ad50e22be17bebc572b0f"],["/js/src/algolia-search.js","fb23ccb09b401db8326b43ae69837c46"],["/js/src/bootstrap.js","1853734b50db6b8500b8dce8e3a95a8f"],["/js/src/exturl.js","849ca9c6ed20fe382c0216c6505c10ea"],["/js/src/fireworks.js","9a676ea21db2def7fdea98d5af0e13e1"],["/js/src/js.cookie.js","7b848adf0806380f883f057049578b57"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","8b58e5bb64ffc9cde4de42698e2ac7e6"],["/js/src/post-details.js","71afe24a387b2da88c19f8d84f69606b"],["/js/src/schemes/muse.js","e7c555aa82a79a315ffaa7351ea4e21c"],["/js/src/schemes/pisces.js","3047e7e90125f295772b809687526650"],["/js/src/scroll-cookie.js","142ed17ec619aa320ddd4ebb7ea79cc7"],["/js/src/scrollspy.js","ca3052046ea08dd26014be03efe1b5f8"],["/js/src/utils.js","2ab7cb0ef156a53ab5cabd8e32b58609"],["/lib/font-awesome/css/font-awesome.css","b43625033db18123ccde9c625223fb11"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","39cfcceb76e528657b0c1374fe26d90a"],["/lib/velocity/velocity.js","17ddf89457059263d8442100ce5bd0f0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","da1b0d3d8fb46544926b4078e0600626"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","d7a05a38d27a82eb1c989d8c9886ab0b"],["/p/1136132855/index.html","f2e9a128cea220b6e652d44bcef849a1"],["/p/1243066710/index.html","2b3edd73c543f9730d895dc50ee7e9da"],["/p/1326311149/index.html","5a7d63990b7babbd5153dc271108aebb"],["/p/1330414162/index.html","2be7028095996faec1265dc1d28e6ab7"],["/p/1507653627/index.html","bfc27d88c214910bc44f7fcebb8cd578"],["/p/1616465807/index.html","f7da191b1dbd999f0cebae4822182c7a"],["/p/1925762643/index.html","dbcb275b7769e35cdfe9d8d2625b8d83"],["/p/2027328352/index.html","0f4135ff400d79c5440c6333b6ca7f67"],["/p/2054314647/index.html","a0d67aa664045aaaec7cc53ac8d776d8"],["/p/2094704911/index.html","d79289214f80d681c0cf9b4e9e6e0071"],["/p/2480269034/index.html","6c2aa41e6ad499fd42d4eee1d743e1a7"],["/p/2595394334/index.html","7459d2f675b12024fe663b669d9fa0de"],["/p/2622962694/index.html","7f955c1430762690d9fa29b5e18cd953"],["/p/2914875511/index.html","f69a5cc09294aa3d1f3dc17640464c4a"],["/p/2993615910/index.html","aa7b7d17557f544f53a97820756f172c"],["/p/3216883251/index.html","c8898093d627a6ed864e7c6947feda52"],["/p/325336281/index.html","350649969e7af17bd68026b88d83939f"],["/p/3310093647/index.html","20775e198d22839d0b428b6f3d1bbf26"],["/p/337471241/index.html","8dacfaeb32e3a98b957e7de407d35125"],["/p/3535319776/index.html","f10d3a144fd46ee8286238c834e8766b"],["/p/36920602/index.html","3df5216b2167e24b73f521b4bf1abcbf"],["/p/3741091999/index.html","35e6c4003e178dd48192ebd55e2eb45c"],["/p/3811859892/index.html","65368e23c424158c9dced275b8d75a4b"],["/p/3871219887/index.html","1e6ffa6701bdf52d0ab1fa038e37d929"],["/p/3907919010/index.html","8c9256b82eccece05d3a34517d884a3c"],["/p/3958123573/index.html","0edeaeb3ef4dad507ec02ccb56eb7f47"],["/p/3960214993/index.html","b6f3a5295b13d2be50136533f603cd6f"],["/p/4048823559/index.html","3c4d45133034c3b985070ad3dd406c76"],["/p/4159564062/index.html","04bb53e35b68c65db63f86140d0fa994"],["/p/4288673006/index.html","43cfc384378fc9b2e544e42eb95a21f0"],["/p/556968818/index.html","0c7eb57b65552b171709e7143b088dfc"],["/p/739861978/index.html","992e105bf3f255471538d947592459d4"],["/p/850238276/index.html","b9db7b2775f7b1b4db56a42ee0877757"],["/p/866021247/index.html","cbac1bca955e7b1647554317fab445e2"],["/p/964429882/index.html","800a2279def14be45716004a58db512e"],["/p/985515144/index.html","8f8459279f474cb2292a008e224ce39e"],["/page/2/index.html","9da738f7b45500c88cddb0c1d67e440c"],["/sw-register.js","301012becb63183d9899d8e65220617a"],["/tags/JVM/index.html","2f7701f363b31da33a52c66518df69e0"],["/tags/OS/index.html","d89a48e4c628ff46ac5e9974d12e22a3"],["/tags/a-recommend/index.html","39c5140b97903e4d93ad6b16d8fa0298"],["/tags/android/index.html","d1889a9f616bfde14aaf0fca419626b7"],["/tags/annotaion/index.html","93c35a0d2911fa88ee4bda7610d3c02b"],["/tags/array/index.html","698ba1b29e04df7a6beed71c7707584f"],["/tags/audition/index.html","c7ef123f8c0d1be200e23ef19a2cc685"],["/tags/demo/index.html","6ada7a0242694667d3f7e92126e3fec6"],["/tags/git/index.html","f9a937a9d70cf008e81a270d61f2fbae"],["/tags/grammer/index.html","c8a809e5045935cc92dd5818bc9406fa"],["/tags/hexo/index.html","3e6cc80122028cec163bbe57ca937abb"],["/tags/idea/index.html","4707dc8a1dfe237e354cfe8073e5ab4a"],["/tags/index.html","bb4c2bd41f58ea06d238613f9e6ac61a"],["/tags/list/index.html","2564cb355256a2c9037fdd045fa2002b"],["/tags/map/index.html","9557a6234b5fd755a384e6e523b5b69c"],["/tags/md/index.html","900cee8edf15180e375c615018b064a1"],["/tags/module/index.html","a50f6b1ffea2881398e0aface470863d"],["/tags/reprint/index.html","deeb311a44a7dc3d4c7391dd0c171419"],["/tags/set/index.html","6c44acb0933b3096d6af0a3e2dfc2e09"],["/tags/software/index.html","cc036e6c115496ca86e8e28f66dbe173"],["/tags/springboot/index.html","d39223762d55f12873d0711fae696052"],["/tags/ssm/index.html","39e5727e1114ee1d05c06607ba6c1c1f"],["/tags/summary/index.html","d0144377c15f5f2e3826f98945629734"],["/tags/thread/index.html","db2e7b07e1725cd67c8caf95386d46e2"],["/tags/tips/index.html","a815829dc781ceba9065107ccf2996f9"],["/tags/un/index.html","e05c48da63988c6e54f74f5c7601b912"],["/tags/并发/index.html","1e0e9181c9289f5e465b137ab2b4bb7a"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
