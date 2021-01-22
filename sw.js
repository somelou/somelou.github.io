/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cd550dcf963568b33fceab1bb71c181b"],["/about/index.html","970e4ec8bb66ad0c1e4d7be1e038db6a"],["/archives/2019/index.html","47ba62c272bfaf81a52371b0944d538e"],["/archives/2020/index.html","eabbfb20ceca81049faccb0fb2ced32e"],["/archives/2021/index.html","911ea78dce3b0b183328548a76c593aa"],["/archives/index.html","547142652b53655776757c36e55c9024"],["/categories/Java/index.html","ecc6a6aa9365d72a3fa7e55b12824837"],["/categories/algorithm/index.html","de40ae4ab8c95615f1db970eaab3a599"],["/categories/blog/index.html","570419882ff2d2d8c02d77e18fc050fd"],["/categories/front-end/index.html","bdc207170a62c102e09346c52c5162e6"],["/categories/index.html","0429b208b62f2acea919ea693ff0e59a"],["/categories/linux/index.html","d213719e66d7e76f481af316ff98ff0d"],["/categories/mac/index.html","a982c58caa2cbc99895eb6da5de0735e"],["/categories/mysql/index.html","70327dbdb41b5c1a2707bc84cab59b65"],["/categories/network/index.html","e9c59497d96116a1679ff4180a29a7dd"],["/categories/other/index.html","cf424e3558a43716ca36e059c68fe5af"],["/css/main.css","bd8937337af0cd92f591c0c386d66b9b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","5928f7d89a5ec8030f97d338f28865b6"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","a5dda28ef525fc8a41e510dc1feb6cbc"],["/js/src/algolia-search.js","fd09b66a8e2eb038ff391d62f75ad7a6"],["/js/src/bootstrap.js","f968c373cf8c0b6c31a2e81711ba8124"],["/js/src/exturl.js","cbbdab418ee4498efa86892c64f7ebc2"],["/js/src/fireworks.js","3e191ecc3bb113b03a049b892e79af0d"],["/js/src/js.cookie.js","ba21b763141a8352ffedec39bb17288f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","f011ec8162f7a98d4bdaf9951cafbb42"],["/js/src/post-details.js","65df9986c817039c8f3faf6ef9d6433a"],["/js/src/schemes/muse.js","447e48a452c4956554f0ac0c30068e0b"],["/js/src/schemes/pisces.js","acd868898bdaa14860b94bc797e687fd"],["/js/src/scroll-cookie.js","00e4831ad5ceaadf947d734f85e14e5d"],["/js/src/scrollspy.js","bb258ea7065f865fb848da0df8aa357b"],["/js/src/utils.js","0fe00afcd01ead140eb34c5451ac80be"],["/lib/font-awesome/css/font-awesome.css","aa2cdcc7e7dbd5f46416f1089dd34bea"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5ba4fd9ad5658e182bd2ca4d4c98154f"],["/lib/velocity/velocity.js","13a54d756e4400b1ac578ccaf322aed6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5342d31d3680bb5f325cf2e4ac2e254c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","aceef0bdbdf966f62149c15f3c85311a"],["/p/1136132855/index.html","b9a7b2a8c93ca7198b44a668b2e3e072"],["/p/1243066710/index.html","49748481ffb7e89e705723cb312c756d"],["/p/1326311149/index.html","c632e6d9755cd7396e8a82b7999c4159"],["/p/1330414162/index.html","27f1f0650e00f163c7e0ca1e05a3024f"],["/p/1507653627/index.html","6bb3fcecb10f22d62b18d7796d93b5c3"],["/p/1616465807/index.html","2b2f3ebf5b53f0cfa5c2d12fdf609a5b"],["/p/1925762643/index.html","855645ffd9538274fdfee2b19f6791b6"],["/p/2027328352/index.html","b4057ab5b4da427063b2f03b51c37dff"],["/p/2054314647/index.html","08196697bef2c161713dfa6e704f05df"],["/p/2094704911/index.html","08f99c54a0d3dfec11d909bec358f69c"],["/p/2480269034/index.html","9a8c84bf90d8654ec34d0e39563038c8"],["/p/2595394334/index.html","5603943c125be2e15623ee6b24a1bf52"],["/p/2622962694/index.html","e6c42f187dc47e249db2104a8525b505"],["/p/2914875511/index.html","deed70d84f7dc885cb84f2217c13eb1f"],["/p/2993615910/index.html","ae5fa182ca6eaa91a0f107918b4a86cd"],["/p/3216883251/index.html","e2afea43d0c3545d9621d4737dc280e9"],["/p/325336281/index.html","8f62f3c335257905197b09cd1e961b32"],["/p/325336282/index.html","8aa71e96a7e84cec8171bb203ded971f"],["/p/3310093647/index.html","bfb10879cc845c7dc174f49cd54a9a5c"],["/p/337471241/index.html","437db77f4f015190691af8fb7e11de2d"],["/p/3535319776/index.html","f5a44622bcfcb3d952b5c0cb7cfb7ce0"],["/p/36920602/index.html","da79ac151b0b74363ba0489aaa8cae3d"],["/p/3741091999/index.html","c768a49dba76c5e9a2295a06e7ec98d7"],["/p/3811859892/index.html","ad86600e5bb6741dacb85b1c27f2cefc"],["/p/3871219887/index.html","adac1d8df6ff106fdc181d8c22bbf304"],["/p/3907919010/index.html","6433634ff938139112b14c7559ddae9e"],["/p/3958123573/index.html","121e01739325e1fd9a7415bc9d0ab3b7"],["/p/3960214993/index.html","3e0c376543295784d12101441041debe"],["/p/4048823559/index.html","943f7336702cdc2b670efc99a2dbc9fa"],["/p/4159564062/index.html","e48cea89c99241fceeef81d27cf03222"],["/p/4288673006/index.html","3ab8178cd75096b2a8a0511b178925b7"],["/p/556968818/index.html","0eee04949aa7a71f093403fe395384b1"],["/p/739861978/index.html","81d4fd6e968cd37bdaf28e37ed552c1b"],["/p/850238276/index.html","2a4721ae848ef4deaed2c7a760197c96"],["/p/866021247/index.html","d6af127ad9e04c8e4d18fa3876edde8c"],["/p/964429882/index.html","4eef836e143b5f8728f52749793ac451"],["/p/985515144/index.html","df5e31fe69e0d325ebb939d5fae069cd"],["/page/2/index.html","40285961f66b8a6c6e31ca44cea7487f"],["/sw-register.js","3ec56290381ebee97778b8df0b221fa1"],["/tags/JVM/index.html","d0cc043877a67ce3f7f26b61ddc6cab0"],["/tags/OS/index.html","a5e2ac14063ae4cfc1a12728a1b8f94a"],["/tags/a-recommend/index.html","21ce568312a6ee2ae7cedde8b4f25c3e"],["/tags/android/index.html","eb30ccfaf6403469e8c50254789f147c"],["/tags/annotaion/index.html","5473c2ca00b5a09fc97db0f2980468cc"],["/tags/array/index.html","6aa85dd6f0f5380ae414d02b38594932"],["/tags/audition/index.html","a79e9d83669812395cc3d797343ac754"],["/tags/demo/index.html","f7f1c026a4bcff86b9b1af136749a7f9"],["/tags/git/index.html","20bfad60ee1da3d9e3e8df40caf42d69"],["/tags/grammer/index.html","1a8bd1ba58a67183a09fd7a4fb71d64b"],["/tags/hexo/index.html","d6789ca0105c5519685901be205093cc"],["/tags/idea/index.html","bea2896077c33b1b6f70c8de8a49de97"],["/tags/index.html","344ad2426f875856ed3f8adf48e50442"],["/tags/list/index.html","a2b47f987d9e183000fbacf4c6c80425"],["/tags/map/index.html","a5ebdbf029694a9eb8daaaa698f8abef"],["/tags/md/index.html","edfeaa00a554111e74dd00349823806d"],["/tags/module/index.html","47db52e8f84f28483d7d2c40c1f6ee03"],["/tags/reprint/index.html","6e1f23f348a9d99ab3d2c81822178080"],["/tags/set/index.html","ca9955698a6e70d359cf46e5ad922259"],["/tags/software/index.html","d1e8ae360b248283da95ae92c81b6cea"],["/tags/springboot/index.html","366c785b19d21e172bc89fada03e88b8"],["/tags/ssm/index.html","57a835315337705edead52bec041a4c3"],["/tags/summary/index.html","aeeb51741e2e013464ae9c9a39fad1a5"],["/tags/thread/index.html","993dca50084fdb7797fa91fa5f104c2d"],["/tags/tips/index.html","50f99a92d8485c8154542dc1f98d2128"],["/tags/un/index.html","7b19d17064060456da9dba23560bf46b"],["/tags/并发/index.html","c75c393db984f669f9bbcee55cba6b2f"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
