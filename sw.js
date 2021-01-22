/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8f710980c7356c65e9dc1cc818e77ff"],["/about/index.html","68890186a826e3936068a57d9a414205"],["/archives/2019/index.html","0e79ea8b5f4206cc2e3b48316feff668"],["/archives/2020/index.html","b0ff0984bf58090fea5ad8c825405f7f"],["/archives/2021/index.html","a85c2b6c4b7c9bc3ef26255d05ebe8e6"],["/archives/index.html","db6309cb0b5f0ac9c3711a50d59e30bf"],["/categories/Java/index.html","73a5d243b65f149fa72a3a54e5f18205"],["/categories/algorithm/index.html","1423525dffec68f048e6cec9e4e22a6e"],["/categories/blog/index.html","837969684901dac0d037afcceb29dc35"],["/categories/front-end/index.html","dbb69d75ddde8095172198aeba66ec46"],["/categories/index.html","18809b616b757c87135e1ac45c95ba74"],["/categories/linux/index.html","41529471c3e9d172957e72624f1fd716"],["/categories/mac/index.html","a21bb1345dc05c7fc7060deac3f1a54c"],["/categories/mysql/index.html","e145b8bbb652b892ecaa483fbc2e6751"],["/categories/network/index.html","192dea0e20dca55a6de8f3a9b46dcfc2"],["/categories/other/index.html","015f5aedc32f7d4ecf9d16ecafcc83c4"],["/css/main.css","cb5a73b23ad4b43e1bc37c1fff9b7da0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","f67d6897a88657ef6a44be1a8fd39665"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","3550e58655cba536ba600a4fa89505f5"],["/js/src/algolia-search.js","3eb1d03eed504928fa9a52f172e83da7"],["/js/src/bootstrap.js","8e6f0b924b2a8e71b46e5ece31d09264"],["/js/src/exturl.js","00135df675f6c953adb064757eb0b530"],["/js/src/fireworks.js","d3af0a5852b8d726f63314121e639e36"],["/js/src/js.cookie.js","a2311d1490149b5e35f8950189bac25f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","0fce22df1a8ce71450622f26fb421fdd"],["/js/src/post-details.js","3ec9302c1802a64c385a04bc0cccc5c2"],["/js/src/schemes/muse.js","7cbdeef3970d70250a8c4753c0f456cb"],["/js/src/schemes/pisces.js","59da297d1d4f680def3377ded51bd9f0"],["/js/src/scroll-cookie.js","52efd52786414477886f4c7b21eafb1f"],["/js/src/scrollspy.js","a54f584ece2b01069c1f1d688daafd50"],["/js/src/utils.js","08b6b96c5e3f0a7d1d67452882e4e59c"],["/lib/font-awesome/css/font-awesome.css","5a9a01fba7df86d020be7606c29d628a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","88d6ce05757c75654113799270bdc85d"],["/lib/velocity/velocity.js","15101a9cfaf06a47734119097e870b59"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ae7aec157250b10010807c04bd2dc44e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","1c3c13125ef674ed3ec1ad23849f6f9a"],["/p/1136132855/index.html","dd3515ee3c12da9355129238cf1430b5"],["/p/1243066710/index.html","70a00a02f070ff3d725feead6d1a55eb"],["/p/1326311149/index.html","a56ad646035659994c4c7923bf24c3c6"],["/p/1330414162/index.html","57b5b8a7b53cd608971e45200ebc3530"],["/p/1507653627/index.html","db034243da9a3e475139d25aa4b5b88e"],["/p/1616465807/index.html","261311d87af4fcb26dca120ca5fd296a"],["/p/1925762643/index.html","163c8bf89a82558007397c4d35bea130"],["/p/2027328352/index.html","c1decd61673091fcec0eabc08e57f1d2"],["/p/2054314647/index.html","5f5a009bfc84ead02233a3e6c5a5347b"],["/p/2094704911/index.html","15f9f6893978fc37c973212bc9ff5dc5"],["/p/2480269034/index.html","a6163e72a18b3c36e4af32a9f9ab7765"],["/p/2595394334/index.html","7bfca13870426fd3c9278cd647207331"],["/p/2622962694/index.html","cdbf5435519626f1c2bc608783e45299"],["/p/2914875511/index.html","f5a061e90ed49c38a61caeb2feae0a0a"],["/p/2993615910/index.html","7eff144798bc55874d6c5a443c9d4d2a"],["/p/3216883251/index.html","eb68f43ec7913d799935db24844f7b7d"],["/p/325336281/index.html","dfc343a2afe88aadbe0f345a68504313"],["/p/325336282/index.html","572f572fbb8781afb4fe225c11a2729f"],["/p/3310093647/index.html","5cd5fa20ae3a0485642f0dcaa12779db"],["/p/337471241/index.html","e1080fbd55cab53c754594cc1095284a"],["/p/3535319776/index.html","54b8d7a30e0d32e28984960659e03831"],["/p/36920602/index.html","4c7d8a4cdd2643223af8f496192b29d9"],["/p/3741091999/index.html","c23fba34e85f5d286c3fb45a9dc9cc55"],["/p/3811859892/index.html","090d776087440f5fadf82f0e5f7f2ca0"],["/p/3871219887/index.html","d0c1d2b362c3d5799df6579f16b77ec5"],["/p/3907919010/index.html","e203adc643e5b80d4931c7280bc1e9c7"],["/p/3958123573/index.html","ac4ca74e844f7c7caea1be759790dfaf"],["/p/3960214993/index.html","f18590b5a2b79dcb9430853f02716109"],["/p/4048823559/index.html","183c9f3c8a09a6f157384fb4eb34986b"],["/p/4159564062/index.html","46479e82c3f3f66609acd99ec976a5c4"],["/p/4288673006/index.html","7a9ff422d0c4c38cce7d6f92c17b9c59"],["/p/556968818/index.html","4bd86252df27aa49ddce3aec0abfb236"],["/p/739861978/index.html","20d0d18f1729b79e58521f4edbc8d06b"],["/p/850238276/index.html","ac9e9f84a38b98edac8757d1f521f43e"],["/p/866021247/index.html","1f8b64e6c782749f113a9fbaf83b454f"],["/p/964429882/index.html","b768c203c53a4da7a382dd58973706b6"],["/p/985515144/index.html","0badb0d1ae069d4d34772c5f3f615420"],["/page/2/index.html","aff7cd5f97bcf1aa8481b6e2f493fe3d"],["/sw-register.js","5b7fb40e9ae1bda9bbd21b574eacc5d1"],["/tags/JVM/index.html","cf7531ec6444cdc5e03ecc2971720954"],["/tags/OS/index.html","dd388e487ed21e1a3e0b1391fe0ef3af"],["/tags/a-recommend/index.html","90a7ff3aba4f468f1baa66188ea09ebe"],["/tags/android/index.html","e775a0af08159ab6ae7d61d9c412e825"],["/tags/annotaion/index.html","7b6c95ce33019963c9ae755709387f8f"],["/tags/array/index.html","ee367ede6d572499c097f00d3d493675"],["/tags/audition/index.html","76bdf350e331e422d2f87cac1c3cdf51"],["/tags/demo/index.html","9ccac9cedb976709cd9b5f602b6d373b"],["/tags/git/index.html","d1821ec7d4ece3715de1d6638adf3503"],["/tags/grammer/index.html","a9c1b391d71b2b8b2c7f5f72d3d32acd"],["/tags/hexo/index.html","543a60eba30e8d29d50b98fdd1cd6ed4"],["/tags/idea/index.html","49ec52fa3c135342adae3f68afb80cfe"],["/tags/index.html","5df1fff75cedc374e8acc800a938e72e"],["/tags/list/index.html","6056b0393873d1509d7b2497ac628a04"],["/tags/map/index.html","7513916091527396781fff5aa1cfcc2a"],["/tags/md/index.html","4222d78fde8150dc8a200e479dc3f5a6"],["/tags/module/index.html","a4f1cf353c4b82b31520f905de179dc3"],["/tags/reprint/index.html","32181b7cc31d2ce1307515a110278f5c"],["/tags/set/index.html","363f87590c074e92d7cee92d70cdb68e"],["/tags/software/index.html","fc25746a283e0d0cc6e038d4dddfa56b"],["/tags/springboot/index.html","2c069f57b77988012bdd34efec7de136"],["/tags/ssm/index.html","1698200fae747e5b7097959189e769af"],["/tags/summary/index.html","df314a8eb06aca1b191b7861ef5cbfbc"],["/tags/thread/index.html","4762d5d4c90ceb029e117b89372ed7ed"],["/tags/tips/index.html","7f073c3fd546b7e699c89b48cbcb7554"],["/tags/un/index.html","47b900647db5f20b90b844c7cef9c900"],["/tags/并发/index.html","f4ed8a39cde1e338d1ec3bcc108cc39a"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
