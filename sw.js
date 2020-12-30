/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a4b1d39aa60562243186ee020ea49b3c"],["/about/index.html","df3363e7458387f555b1bf76e76f3aa6"],["/archives/2019/index.html","7af82b51ea22d971e32f0cd7a127f879"],["/archives/2020/index.html","29212cee0d08f2c5193c111fda82cdfc"],["/archives/index.html","4a7e413c8dae97a164990492ad2a66d4"],["/categories/Java/index.html","90af6d4841f1344de6457ceb18123aac"],["/categories/algorithm/index.html","66dc6e5ef44c19b47dd9b3b6b25b7596"],["/categories/blog/index.html","bab9640ff5a66572ca2a0e0f7c3b625a"],["/categories/front-end/index.html","00e5eaf1d3ac0c533fad12c83ebc6563"],["/categories/index.html","83001f0aab4bb63c7c14e775a7ab6257"],["/categories/linux/index.html","88aa09d2b96543dd1f39d41f93214f74"],["/categories/mac/index.html","98fec906d838e25dd9937e1ce183a976"],["/categories/other/index.html","128f6ab01ccf305294e0f416ec33a60a"],["/css/main.css","ef35b6281e5433d0c3ae85c3c5a3d92b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","231a7e9af9b060fc9fe8f3ccf3790555"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","f26d73da820ddb8a0d8e5c2339c7dd69"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","824af11a2cae4855268878e7eceb4b00"],["/js/src/algolia-search.js","02b86d37e7a823473be50da9e2cfc804"],["/js/src/bootstrap.js","c762dbd55bf686e89b5a1430a045aa50"],["/js/src/exturl.js","8a3bceaaeda20978c24512c952b14518"],["/js/src/fireworks.js","e79632ea879156d7768ed45d0bd85f86"],["/js/src/js.cookie.js","87d5dff307153f0efad427da2cabd36f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","2e1a04a1b1491f8493cdedac98affbe6"],["/js/src/post-details.js","ef91cd3aedfbe25025369618cf15a317"],["/js/src/schemes/muse.js","7a7825a780f2602bf5ab0f46bead72d4"],["/js/src/schemes/pisces.js","06fe774ae5f35b7a3a314347e5c3b372"],["/js/src/scroll-cookie.js","08e3e532ae6013196477b07cf86ff66a"],["/js/src/scrollspy.js","d8d78ff0f2f4937c2dd35d0972e532c9"],["/js/src/utils.js","c15dc40799c3273d260dc1db967ae73e"],["/lib/font-awesome/css/font-awesome.css","a6a40730f5f18ab728c678a550f208dd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","347053e738ec82d779a6b985d0026be5"],["/lib/velocity/velocity.js","93428ed083b1d5c18538806bcd8f3e8d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","52b20bc2446c6dde1b45c92245ee02d0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/1136132855/index.html","fa13d9bd1e97738ee7aeffda0df44c84"],["/p/1243066710/index.html","e490d34cee0a8aa2735e3380c2bf5c88"],["/p/1326311149/index.html","a19b713f9ed3d78ce0c35f080d866c0d"],["/p/1330414162/index.html","f2ac5303e3f8a330834cd9d2a3ba0a1c"],["/p/1507653627/index.html","a29d17c92574b8c464ffd045f6139ac4"],["/p/1616465807/index.html","dafbad3cf508e165a8e15097d0be87bb"],["/p/1925762643/index.html","4cb8e6f49a531a098924a244102cccdf"],["/p/2027328352/index.html","578e14b182eacebf83a41ba8c06b2a0d"],["/p/2054314647/index.html","3b4f4959e58e73bcf1cead5533abbef6"],["/p/2094704911/index.html","68f05975c4dbcfc88bc7d808e92e4680"],["/p/2480269034/index.html","53c514c3b58961c3f56c5f7b1821c037"],["/p/2622962694/index.html","0227f02b33be7e2030f9731dfd435227"],["/p/2914875511/index.html","cd1a920b3950ed53d2db091fc209a114"],["/p/2993615910/index.html","78f7fa8d63c0adbca2088f5473b329fc"],["/p/325336281/index.html","25f498d023c8c1a163a2cb6c98bac26e"],["/p/337471241/index.html","b0a89ef33eda4196995163489325859a"],["/p/3535319776/index.html","a71537bec2e8ff940d26bcb12c35904b"],["/p/36920602/index.html","e2aaa3f6a151c478c051f3b09e7c350c"],["/p/3741091999/index.html","67d46e8662ecd80f4f5555063afb38fb"],["/p/3811859892/index.html","c8f2cdc06dd4f62c0cbb775da7b9973a"],["/p/3871219887/index.html","56e52190d910791497e9c320138aa76d"],["/p/3907919010/index.html","eff5c8f9d746257c42b3b9b9ab511b41"],["/p/3958123573/index.html","6fbd916c8d74649fec50db5a1baf37a4"],["/p/4048823559/index.html","c84db696bf6bbc7bcfe3343b0fb16618"],["/p/4288673006/index.html","481f066198ee485ff882b82f870ac199"],["/p/556968818/index.html","253d9de96438b6fff871b048ff8ee0e0"],["/p/739861978/index.html","c2187253facc14e03d0f47533e167cd0"],["/p/850238276/index.html","d7a9175d9c196a0cc6a2c212f7a4aac5"],["/p/964429882/index.html","b97db22d8903ad6f30bf35a61d9d2597"],["/p/985515144/index.html","2f1e07048df9b96d534229c5489ac041"],["/page/2/index.html","e64b71aae41960693eece192b38d76a6"],["/sw-register.js","3b71513e7c04c13cd13094bdebdf156a"],["/tags/JVM/index.html","c2c5108e336dff8fd2997383a4384ae5"],["/tags/OS/index.html","afb76d912a4393b0567646dd4e7a91bb"],["/tags/a-recommend/index.html","d0c32ec71e5ffffeb77574a0dfc87c7e"],["/tags/android/index.html","f7d18d5921b67064152620f3ef497c63"],["/tags/annotaion/index.html","ec40f98ddb9b7de97363533bd829872f"],["/tags/array/index.html","90a26e0afb0ca19719d8c083d0cc10ac"],["/tags/audition/index.html","9da409eac67b1b3964d26e532ceeced6"],["/tags/demo/index.html","03eb4ce90f65e8c9b0192b817032113a"],["/tags/git/index.html","d474d182f146703d17d29effab27562c"],["/tags/grammer/index.html","5400f22f6e3d5ed8225d2de5ac0490d1"],["/tags/hexo/index.html","cb80518f8b8d8a82b9968fe89e581911"],["/tags/idea/index.html","60b8dc9abd8e705006e05f9bc7c3d228"],["/tags/index.html","fbda1ace6bab480afaa98491512928df"],["/tags/list/index.html","534c58666c2ee088ea3a303951b7fb1c"],["/tags/map/index.html","092e951dc845c23ddd8c9184c087082d"],["/tags/md/index.html","989afc03e20c72d7931c22fbf767b90d"],["/tags/module/index.html","006645dd11b40b07726c0bffdc750e19"],["/tags/reprint/index.html","511b3fd3f790fb942dbe928535353c94"],["/tags/set/index.html","f4a83d2d771c78feb78a619d00dd324a"],["/tags/software/index.html","72a3c39e63bc4165246ea02cc0cd15df"],["/tags/springboot/index.html","ab82a2746a6d03b634936bb601427ad9"],["/tags/ssm/index.html","ddda3002ec1a321de0a2191e159e2187"],["/tags/summary/index.html","b3f3c4a1bf723974207af23d2c553844"],["/tags/thread/index.html","290cbdbd133ce5214e0e77fbdef6dbdf"],["/tags/tips/index.html","abe16c93a2a3b06f7955bcf5af7cfdf3"],["/tags/un/index.html","f4de1dc794b081ad8e3d1d033a2f3cf2"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","30313a8e556839beda1da233cefb093c"],["/面试/知识点.html","682d9b83ff083ff8698f1a97a0812f45"]];
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
