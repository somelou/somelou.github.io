/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","105da4b874cf0f8cb74af0a5d55bfe27"],["/about/index.html","df786bb8c040dc88b11ac050491b5b4f"],["/archives/2019/index.html","29df923aeeb40b1188dfe884d6312b73"],["/archives/2020/index.html","4dab32b68734e41c32f67e726800f229"],["/archives/2021/index.html","1841660a39c9e391ccc527f4de2427ba"],["/archives/index.html","3b9573942e0d4dbb955942f0aa36eeea"],["/categories/Java/index.html","149db6e3de0b43ee5fc994aff432a4b0"],["/categories/algorithm/index.html","b47581b6025137e6f22c97b97a7c166a"],["/categories/blog/index.html","d6e3999cd835e4cacd8219190c9d1a98"],["/categories/front-end/index.html","8a84cb8d3a06cd1e021962339187e076"],["/categories/index.html","999bec32cb516dbbf35b1614e58bb4d6"],["/categories/linux/index.html","acbaf8e68d2c911587ef8533bd1844e8"],["/categories/mac/index.html","f7e72e0edae1400fdf877ca1296b6bdd"],["/categories/mysql/index.html","578aa5f4a3390af02ed0ba827db15e60"],["/categories/network/index.html","ba1ee60edfa9d12edcb7cf8b9a1b270d"],["/categories/other/index.html","0043024dbe67f24d563dbff3b5eff386"],["/css/main.css","360b9c29ba1451407d341a430cfb7964"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","e2e204c8a5a9f3b64b206e48c037e0ce"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","61ae96fa7e23aa7f2b6462a21ebc0c19"],["/js/src/algolia-search.js","031b2b597ba1fb30cba0139d0335d875"],["/js/src/bootstrap.js","52d0776a52c4da1ef0a2d691b198814d"],["/js/src/exturl.js","e4f371480c566f1203635c4242efbe1b"],["/js/src/fireworks.js","6c4ce72c0acfbc2770e76fa510cbdc09"],["/js/src/js.cookie.js","51cc45a3cafdab79af449f64a19e67bb"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","e3cd338e37c9641758db79a2bf3efc82"],["/js/src/post-details.js","57c0feca38c40243e22d5e3b6351804e"],["/js/src/schemes/muse.js","945babe8e7d536e5254d5bb86c59c457"],["/js/src/schemes/pisces.js","82314648d6a2bf0284cb650e7ca2a6e4"],["/js/src/scroll-cookie.js","ad38a2026f5efda6b49d1df18c48943d"],["/js/src/scrollspy.js","5bfb09bfbcb080998feeab48e92c422f"],["/js/src/utils.js","dcdac67dd4f4992b2c54471a812d11d1"],["/lib/font-awesome/css/font-awesome.css","f7430158f7382d9b26b69b9fb91d6159"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6d00a995943fce25f58a76cad9766dce"],["/lib/velocity/velocity.js","0c904c43bf4deca42c38c22157fda8cb"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","90d6489384a6e3a42d8127193acb0c21"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","e1d421f7b04fd50142486bc3c2e256e6"],["/p/1136132855/index.html","da7ca9dca7aaa0b1d086aff333a1501d"],["/p/1243066710/index.html","d54aadce63af2ffc23712512bf7db62c"],["/p/1326311149/index.html","a7ba9cae534c1f6ad25b38394d9e9ffc"],["/p/1330414162/index.html","d044a83e4aed7f20b606b5a2c9d5dbce"],["/p/1507653627/index.html","456e8f86daab16a5c073b5146540c4e9"],["/p/1616465807/index.html","c405331f1402909ce31d7a50c9de892d"],["/p/1925762643/index.html","07ae675326d7cec0240e8bdec5cc5fbd"],["/p/2027328352/index.html","f3bf521a2ddba2f66a10e69ec1a00c5d"],["/p/2054314647/index.html","1cbcacbe4ff2b9a1e94c58006b690a03"],["/p/2094704911/index.html","779beb626bc04b6ea4427770450cbdfd"],["/p/2480269034/index.html","48b165e4c9d7e203181c404a412ecb48"],["/p/2595394334/index.html","7b4ddacd1d7619878428afc66bdf4393"],["/p/2622962694/index.html","d147965d7e09af9e1e17d80a7c6f0073"],["/p/2914875511/index.html","eb064e932d1af86334ce03693b325c20"],["/p/2993615910/index.html","f9e440617cc71f63661f64573d4336a3"],["/p/3216883251/index.html","bfccee708cd0912b3af4a813467ba119"],["/p/325336281/index.html","f0972ee6f3e07470da648cb312c73734"],["/p/3310093647/index.html","1fdcce4dde07fb2567b3ea8aa19b09d3"],["/p/337471241/index.html","0252139da6170a97d7dbcf6ffb8ede6d"],["/p/3535319776/index.html","0298b80950b3ecfed8925ed1ceddca9d"],["/p/36920602/index.html","a48003c316469d973c5f2877f53172bd"],["/p/3741091999/index.html","f00b3648082b2f995157c1964e91ef60"],["/p/3811859892/index.html","cfb32f52e0d9b944cf48e27b5465095d"],["/p/3871219887/index.html","8a6257f50ca66c69aadfd0b355ea297e"],["/p/3907919010/index.html","c90d2730a8345e6df02e74368f165dee"],["/p/3958123573/index.html","27ee436cec7172b87b98a7e40f1ea8c6"],["/p/3960214993/index.html","b8b7392f5228aa84aea8c972e93ef539"],["/p/4048823559/index.html","6c8ac293de93dd607107b3c91ba17432"],["/p/4159564062/index.html","eaf7d00d465293da920e922697055f3d"],["/p/4288673006/index.html","62986571653d3986a8483e442f43232b"],["/p/556968818/index.html","8e5a2f2723f28aacd0e87286a8247931"],["/p/739861978/index.html","8cb8052797081079d3f370c0ea2477fe"],["/p/850238276/index.html","c0e59dd8518a4a9e49e5cead50bc9626"],["/p/866021247/index.html","144ad8d860f3aa7a18d4e404647f4a23"],["/p/964429882/index.html","fd28044a1a9367ff38b441971ab5b34f"],["/p/985515144/index.html","1c68187787ac91493ed6a8672d584262"],["/page/2/index.html","daa370edaa28700f6fc556b987fa22c7"],["/sw-register.js","b28ae6a431f1b432d4317c584a7a463e"],["/tags/JVM/index.html","5b96606d06c2100c5b96c7620e54ba32"],["/tags/OS/index.html","f77a949d837050eda644aa4bdfab367e"],["/tags/a-recommend/index.html","78336383a902830a97a742a6c02f1cb5"],["/tags/android/index.html","beb16aebdf4903d189535a7ef3874b05"],["/tags/annotaion/index.html","f7446389fd2461f704e5f9cc8b528ce3"],["/tags/array/index.html","5c90b08cfcf702002becf0f271225f00"],["/tags/audition/index.html","5b7b7d1af075cd55d2f446ae9101da8e"],["/tags/demo/index.html","761653577a8dff3ee58ea9a3e51aad7f"],["/tags/git/index.html","dad35b6860c0b787057d8664ea6bb9e7"],["/tags/grammer/index.html","04e9e7642fbdb67976c14aa64cabeae8"],["/tags/hexo/index.html","fca5b54ad88141b684f11c0c96452ff7"],["/tags/idea/index.html","07290ad15e0318d96ce677db024cf3c1"],["/tags/index.html","a83c504250cf319994612fa07d524a16"],["/tags/list/index.html","9f975ac2a8cf44851b6d39c75c8219b6"],["/tags/map/index.html","4ea84c05a5ebe6b708c2537763bd3373"],["/tags/md/index.html","21dd0e023f3c0ad4540887d550d608ba"],["/tags/module/index.html","98db39c56c991818098c608aadd01008"],["/tags/reprint/index.html","45acd776fb6d81802f29e8f632653c81"],["/tags/set/index.html","96cf9f30538233bc32dce92605ab7375"],["/tags/software/index.html","54ede7d4370dcae45e6cd7ff8e3be3b8"],["/tags/springboot/index.html","b767bb62ca0f7533e9a436ec140c4b37"],["/tags/ssm/index.html","e194c7afc6c77d440efe1868a7ae3194"],["/tags/summary/index.html","d873b76c5b3b6687f3e5d289c70576fa"],["/tags/thread/index.html","34d326a83ada87d4c5b21f01f35cd3e1"],["/tags/tips/index.html","7a6a41f8ea36c4f5a0914b3734c27f9b"],["/tags/un/index.html","d7dd08cc7af4ec4b7c1f7d6f2e3f8a9c"],["/tags/并发/index.html","c6ef6b9bfd999f344ea25c5353667732"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
