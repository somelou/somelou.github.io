/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b32313ff30c5e597f16af4c86e5141a4"],["/about/index.html","e260194da62cf1ad1511e4c44cf53860"],["/archives/2019/index.html","091d2001eb37f327d02a61d69edb4113"],["/archives/2020/index.html","a008c153bc81c30d3fb0bd53bb58c243"],["/archives/2021/index.html","530928c13e729b1b9d9c3778a10f60c0"],["/archives/index.html","90a4f53687f28dca1c1c257f0cc32c74"],["/categories/Java/index.html","7329fa4f6f2eb3b0ea2a9ecc6500822a"],["/categories/algorithm/index.html","ef1cdc52e8c9f6feddbfa456157f2206"],["/categories/front-end/index.html","a897c4d1342f46e7c1dd876ce66d5a73"],["/categories/index.html","57a7fcf7232054e8abc4bae426d1db55"],["/categories/linux/index.html","a9c1cd8e094e50f041810c69df2763a1"],["/categories/mac/index.html","8c4b03def7b5381f9e5bb9f7dca96e64"],["/categories/mysql/index.html","8a7d443995ae1757e4a455d39e27b126"],["/categories/network/index.html","e807a9a46857ae8314c554e96161d006"],["/categories/other/index.html","cf18e7d82befa92c198088b599448a08"],["/categories/site/index.html","0a425d592c668745fe9b6589da23a41a"],["/categories/win/index.html","9b5e783d07ead915f43b9a7c5db999af"],["/css/main.css","826524ff3ac93225f8a083f5b495d286"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","4f7c1e5016f836c2a5f21c134bcef0e7"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","e540e21dcfb832264efac9944a2b412d"],["/js/src/algolia-search.js","c7bb48baee03bc4463c28243825eb9c9"],["/js/src/bootstrap.js","52de155d302e169c5e39de8db13b30fe"],["/js/src/exturl.js","aa38b19239f111ce4c21dbc2a71bdfde"],["/js/src/fireworks.js","fcfd1441692f733f973e32dbcf4d3db0"],["/js/src/js.cookie.js","38bf3f117fadb184edc254c9e25e05e6"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","d1cb1c8ece5cc99e5b43103e9226bbe6"],["/js/src/post-details.js","703ca66d3553d3ea6ce875d790f9d577"],["/js/src/schemes/muse.js","3c71e76306d03edb6613696d1cf6dc3c"],["/js/src/schemes/pisces.js","df5e68689bba9963920ccd39b44ba6cd"],["/js/src/scroll-cookie.js","77c46c6c2974f77bc87ec909bf687472"],["/js/src/scrollspy.js","081f1059550758b4d0b29de1685b8ed3"],["/js/src/utils.js","e1b9ba51afd74a12b377ab230b616d75"],["/lib/font-awesome/css/font-awesome.css","96dc5e22249cabe7adfb5fa7bab3c971"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b2768548eea5d7705fafbf137b3c149"],["/lib/velocity/velocity.js","b6353415086dfcb718eb50bf69ba56ab"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2e9ce86e4f6d1b515d786307ea65289a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","bc38dbbc62d9330bfa565dd5fea12536"],["/p/1136132855/index.html","e95cd87b44b50acdf6bc39adb2efe03c"],["/p/1243066710/index.html","f8c016baa096b9a00bbb9d46ffdf6b08"],["/p/1326311149/index.html","10d633fe28cdc21fd9b623f861635be0"],["/p/1330414162/index.html","58fe593f6200123cee29386d52753359"],["/p/1507653627/index.html","c738bd65418d5a1750affeee10e791fe"],["/p/1616465807/index.html","872adf13a413ff59d9358e0bd2b3321d"],["/p/1925762643/index.html","b03f81b4505b1839d568f95537165682"],["/p/2027328352/index.html","ae13eccdd6683422bbd59066c7b638fe"],["/p/2054314647/index.html","9ef085c6a66fda7e977c482e9696b6b2"],["/p/2094704911/index.html","eb299540ca30455b56faee9d8c245dc5"],["/p/2112220981/index.html","3f04630ba8600801072fe355e8c55b13"],["/p/2112220982/index.html","a2f157df55b6133f3201c3e470b859dd"],["/p/2480269034/index.html","aa2c9b9d4e852faa0982f5a9daea439f"],["/p/2595394334/index.html","ebafde1c527b636bf9710374ddbd8a8f"],["/p/2622962694/index.html","3883f169e72692986187f8c26def74ca"],["/p/2914875511/index.html","2bfea06fbddf2f29e022df6d64922025"],["/p/2993615910/index.html","a2a5fc76ad746b2aa5199dc267f4cbc4"],["/p/3216883251/index.html","974a83a6a35fd3ab7e9c97399e5ce190"],["/p/325336281/index.html","aa4c43a469060230ba21234add7c966b"],["/p/325336282/index.html","1ea792605c4eb011950ab02b11bb7a18"],["/p/3310093647/index.html","55c99b260dd42ded56e3749bd8fd9b74"],["/p/337471241/index.html","beb9ccd099b9dcc51e96ee8489e2e5e2"],["/p/3535319776/index.html","b66fafd4bf0419edb6253a80a0e503e3"],["/p/36920602/index.html","7ff00eb33c93818231793bc57d396fd6"],["/p/3741091999/index.html","807ef08f49925cb4d66ee537783bfb1f"],["/p/3811859892/index.html","13ad206ff2a25b7e0443098d378b715c"],["/p/3871219887/index.html","fb308fe1f287b6765aceb4b2c24a4ef0"],["/p/3907919010/index.html","ba5807f6986b8e8604f07e9716bc8de7"],["/p/3958123573/index.html","7bbfefc8dc811692db33cd252b3974cd"],["/p/3960214993/index.html","6ebb9ee23d2d6041a9ca46ec3366f7b7"],["/p/4048823559/index.html","09f144f15b599462350c9a358a9a2f8d"],["/p/4159564062/index.html","fd0734ebb41d8bc1b26415c6b85f6392"],["/p/4288673006/index.html","4f1b0ed4521b80952ed84d35969d7a2d"],["/p/556968818/index.html","c71a4e351e7c375bd50c837d43554d56"],["/p/739861978/index.html","1b01bca08a4678864591c7f46eab2a9f"],["/p/850238276/index.html","edd4c86401e9d84006a42c3473d0c2b1"],["/p/866021247/index.html","285aae77959391a1da1c80b2d02ec7ae"],["/p/964429882/index.html","6b14a3a9ba1f5d9b8788efc0dca456c5"],["/p/985515144/index.html","2fdd1b3f0a97a0282b4f883922f60efa"],["/page/2/index.html","c1d4a7a8ed9786f51e49a7dd6e6f8ef2"],["/sw-register.js","f6f709542474f6105e337636fcc10a8a"],["/tags/JVM/index.html","167553b6ad81f0fed9a85a435945448a"],["/tags/OS/index.html","46b053872dd5616e98e1ce6a25ba52ea"],["/tags/a-recommend/index.html","d36f8304586b37f23f37d89bdb5a0809"],["/tags/android/index.html","b01e244f4b226d9f8f5667f2c6e8b9df"],["/tags/annotaion/index.html","0047f7a713dbea40608cbf16d759483b"],["/tags/array/index.html","06cd27994a3fc8ac6b214898e2dd548b"],["/tags/audition/index.html","41ab05d6fdf2cbe8bd1db392c149d9c2"],["/tags/demo/index.html","a0b2f7b4686109ab7f9ece1cbe5c617a"],["/tags/git/index.html","3954dce550faa16548fffa3ba2fd0cfa"],["/tags/grammer/index.html","be60ea7c2cea07445da48f1055a7fc2f"],["/tags/hexo/index.html","6a46de13d48f6dc8ac5b609cbda9b8a0"],["/tags/idea/index.html","3a259b7b15a274fe0af668be0f8afae3"],["/tags/index.html","bc8b07a3bab40aac13ab7334bf7368f2"],["/tags/list/index.html","b9e1798ecd94b0d5d49f6c040a9586f1"],["/tags/map/index.html","634fcd97f4f35eeea0deaab38ddc7321"],["/tags/md/index.html","8b8c908098ce9292d691b318a0b38ee8"],["/tags/module/index.html","f26de61abcf7a25d3dbcc3f70a790995"],["/tags/reprint/index.html","382dd49f8ce226f3fd9d9a9e18ecc50d"],["/tags/set/index.html","80b3f79a659ffe1793d766d2b5f5bf80"],["/tags/software/index.html","c53136bbe146070a84b0559e1118d236"],["/tags/springboot/index.html","8446e3db066be85ff13222beaf2d151b"],["/tags/ssm/index.html","bbfb33d23480193e1d9539d44bec5783"],["/tags/summary/index.html","08631782499d47a136136cd1499ebb86"],["/tags/thread/index.html","42a29f243703e939ed930fc806229118"],["/tags/tips/index.html","f591bd9a109ec6ea87890ac845cb29a2"],["/tags/un/index.html","a95f24a507d9a145d5d5ccad788da69d"],["/tags/并发/index.html","a4fb3e075dd1b7c92297099d0637e564"],["/tags/脚本/index.html","91d1ec549f8a5c79a2deac88869e5ecc"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
