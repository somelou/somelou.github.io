/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b4cbcf64c3de89253040573707a0ff6a"],["/about/index.html","cc529e13f012aa81c937ee6ca0cf465b"],["/archives/2019/index.html","ccb8cbc9f04f13600cb7e11dc83da0f7"],["/archives/2020/index.html","1ad15c5ecd626de655bb730906793cfc"],["/archives/2021/index.html","8f90f5444513ce3d68a39d008d9ba1f4"],["/archives/index.html","7fd34e1d1940ddfe6f79b6ae5103967a"],["/categories/Java/index.html","a9dc85526a1b6a228999e75082538e90"],["/categories/algorithm/index.html","68aa504395c9e386cdef751939e1363a"],["/categories/front-end/index.html","8edbcf676a44cf79d1ffff753184f3c8"],["/categories/index.html","c0e84efa79aab49ace97cd9b93369a65"],["/categories/linux/index.html","27a09d4ff4c7e737db1006bba371e07c"],["/categories/mac/index.html","6bbb43d75712f87f4b91713e644f0bc7"],["/categories/mysql/index.html","97c744d6eaab8c3411bf3f3c31c7e6b8"],["/categories/network/index.html","1f48c424afbbb0724cad2528e7384261"],["/categories/other/index.html","210fd11fdc11c647dd994fb13878925e"],["/categories/site/index.html","0fa0ce2eef9f453592b86df88c29d459"],["/categories/win/index.html","a9b552e5cd7cd3f76ab3107f2d2eb402"],["/categories/博客/index.html","1109e3db2da51a6f37611749aeeb84d4"],["/css/main.css","db133fa93970bea93f6c4925ae487b88"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","cc429b177a2004e2ba0b1ea4ba0041eb"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","6f179ee1e1662ed22010232f3e679f8d"],["/js/src/algolia-search.js","f204012a20071bff0dca1d08cb027144"],["/js/src/bootstrap.js","60e97ad5f4e4b8cab6b1cf8c08434411"],["/js/src/exturl.js","571fbb8db70fb8a4f6d2bdefabf5951b"],["/js/src/fireworks.js","27d3793ecaf1bd4081124d4ff4002674"],["/js/src/js.cookie.js","9c6cba2407efe7ca743929c3c37ce91f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","5b7c22a8fb12af0a37573312df908129"],["/js/src/post-details.js","bc4ddbdbf3e48e69e398d6c67ba03bdc"],["/js/src/schemes/muse.js","65afbc41024204fbbb102269f5cec823"],["/js/src/schemes/pisces.js","79cf597aa8b32672936d14e007d93957"],["/js/src/scroll-cookie.js","e14e1e041758b03ad46b28160aef1b5d"],["/js/src/scrollspy.js","449948f358da234591da175e281ea2e0"],["/js/src/utils.js","e5abb8459381a1731ff1f52d4fbcd66a"],["/lib/font-awesome/css/font-awesome.css","6f1373e188091bc04a786efaa3f0133f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2faab34c25c64f06035cbe234f719117"],["/lib/velocity/velocity.js","7b95d108f449c10d5c31d61de9ac7db1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","69f5b39d9175df40e9356746b0a29f4a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","4c389fa63e0276f584d711c2f95a2081"],["/p/1136132855/index.html","d621858b59c2ebaf918e0c2285222978"],["/p/1243066710/index.html","eb0ad5a265a15c81dec6a9dfd8b5be31"],["/p/1326311149/index.html","2504a01cc3f31d954449d92b2e9de9b7"],["/p/1330414162/index.html","7daa37c6f797eaf5e37010aab28b971e"],["/p/1507653627/index.html","ddd1c0d152b62479c6fd2cf71d37d320"],["/p/1616465807/index.html","6b3f67eba6802f0e0be567100cc06a04"],["/p/1925762643/index.html","68b2f85ce206e852e257a5bf97380a76"],["/p/2027328352/index.html","3098c96737bec30483b4cddf55f0a7c7"],["/p/2054314647/index.html","a72bf899ca5d92a81ac4375233791df5"],["/p/2094704911/index.html","497b6ebb5b585841d07d1b7868861c21"],["/p/2112220981/index.html","1dd0420302d6000d15851672611c1f25"],["/p/2112220982/index.html","cf2112ce15baf48cb9013ea1eb01e133"],["/p/2480269034/index.html","46bc85f962e19180952c076c00ca5b62"],["/p/2595394334/index.html","0656c9be9353bfc4e6530abe64b5be8a"],["/p/2622962694/index.html","1ad0cfd4071c77a8095591f4e67dfbf7"],["/p/2914875511/index.html","765f741388da32a7e0859c1cf617603f"],["/p/2993615910/index.html","6f84942b2787cc819cf3fd0689f7101d"],["/p/3216883251/index.html","b73a7744df6d1ee9424a49f17519395b"],["/p/325336281/index.html","19af33a7e8a2b15f4240e8803a21b996"],["/p/325336282/index.html","13fe13cd0ef5903be04da54092029532"],["/p/3310093647/index.html","8b935324a17fa47f1a0cefbf6625328b"],["/p/337471241/index.html","e499c3162f2d3c3b1d10bb82bda49c29"],["/p/3535319776/index.html","0aa8956b0c0693f8e13c3d66fded07db"],["/p/36920602/index.html","894c7b9f259728321560411a4a9fa389"],["/p/3741091999/index.html","11fea61bc07bac17412aa1830cb0ee66"],["/p/3811859892/index.html","60d46f8d2049453100bda0ccc4f71965"],["/p/3871219887/index.html","b7a04a9f931694d698cf576a4910b26c"],["/p/3907919010/index.html","503b418f68bfd54da9ef18df893d1809"],["/p/3958123573/index.html","5a526c4dbaf194093cf54e707d097b7c"],["/p/3960214993/index.html","52891fad6f386ffd6445594b5b8cd454"],["/p/4048823559/index.html","dd6687a0bf6858e554b8a3e2ffefe265"],["/p/4159564062/index.html","1bac4fc2dec95fcc3c35ef287d3678f6"],["/p/4288673006/index.html","96decd4653a1f86f7b2a6f89613cd7c1"],["/p/556968818/index.html","7aefd4e456430eefbf4596d20f0701bd"],["/p/739861978/index.html","a589d08395e481ff4e0335ff2858cb83"],["/p/850238276/index.html","406615041b2a61c24caaba41bba70cbb"],["/p/866021247/index.html","25ef90f2939075693a6878c18ebc7d53"],["/p/964429882/index.html","0bcc8401f2b4c55106bc095a6fd88180"],["/p/985515144/index.html","a68eda34045e4021397a4527d8ca3820"],["/page/2/index.html","8046301cd0685b7abb4f881ffcc61f50"],["/sw-register.js","cd782d926c049d5fdb610fbbf0a9ed80"],["/tags/JVM/index.html","4a864e2ca58a4202832d7dba8c577ea6"],["/tags/OS/index.html","ad90b78a088a81b165770242f0bf7d4a"],["/tags/a-recommend/index.html","59d5cf0b921cec4fdb6bb1e9d3f2ebab"],["/tags/android/index.html","57407e6c1268c9801a57061e0f49991e"],["/tags/annotaion/index.html","eeab724e0c8e6becf69b171d17508fb1"],["/tags/array/index.html","909ebfe30f06adb8500ed267c02c168b"],["/tags/audition/index.html","ea1ce7b311227253b3fb0e037127b3e0"],["/tags/demo/index.html","37c3f210e7747e74fb558447f773d8f5"],["/tags/git/index.html","9b544388d214f6c95c57e3f3858530c2"],["/tags/grammer/index.html","d00312902ffc7ae6c1ab35d8aa1e45bb"],["/tags/hexo/index.html","56b31f577270bbf4497ccfe4dbd07d1c"],["/tags/idea/index.html","c061df2daa30387fa9ea56d748747050"],["/tags/index.html","ca62f9186389a6d80902106a7c1994fa"],["/tags/list/index.html","54c6895bc31ee6d997a86b03cdbf3a23"],["/tags/map/index.html","e2c8897cfe566e0a5ff1f92ee3b287f8"],["/tags/md/index.html","36be3e668f0401517eb1d6be7002b3aa"],["/tags/module/index.html","3197306bf955a35eb479e8c11044971d"],["/tags/reprint/index.html","7d8ee496120824b8bc4c7e11bb980095"],["/tags/set/index.html","ec4f86bdded9282454f6a98c8f020140"],["/tags/software/index.html","a56825cbd35713750295cb5e27ece167"],["/tags/springboot/index.html","54cd2010a3ad8ab60566f3eb69d48caf"],["/tags/ssm/index.html","d3576113e678e408427c5a2750fd8539"],["/tags/summary/index.html","5dff93ddd18f17fddec6078d972ce9af"],["/tags/thread/index.html","585957b4a2debd1e2c43da9375a893b4"],["/tags/tips/index.html","9cde486916a858cfc2b2f31d80957ec2"],["/tags/un/index.html","f1ba86fe25b4d2bf9bda408930e455ce"],["/tags/并发/index.html","d26d9b14dde0b3e909f3594c3cb04f4c"],["/tags/脚本/index.html","07ea687dab0ff626c3d8962c1118bf9f"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
