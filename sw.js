/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bf446aea79f6b0a110cab5cd89a90492"],["/about/index.html","dce68913485982b91dfd75b1cd21159c"],["/archives/2019/index.html","cd7104c2346dd48bd1a73f422e38a708"],["/archives/2020/index.html","8b97d14c8db731fa8f52bd442c23561e"],["/archives/2021/index.html","92799767ce9185113b31664c7b34946c"],["/archives/index.html","c5dec81247ac8faf248e568d34e16fca"],["/categories/Java/index.html","eba1d6f85a9920e6237be16deccaf5f5"],["/categories/algorithm/index.html","83a2d3d8ff7b1fb0645c961c277836d8"],["/categories/blog/index.html","d06fdbb138d5cf3fcfa28119d4e61242"],["/categories/front-end/index.html","73276ec690f7d5b50abbc9527f9aa229"],["/categories/index.html","6d47315f2eda1946b1bc18f3b2353a5d"],["/categories/linux/index.html","d9db60bbdb0bbc7a04148d3fb862f90f"],["/categories/mac/index.html","cc877b2cac23ec8605f740569abf80ec"],["/categories/mysql/index.html","9ccad32dd0a3b09a50fea40db24f7480"],["/categories/network/index.html","dc9f371e3bba8a7e701e83fbda304bca"],["/categories/other/index.html","5827613ac4a9cd6329a7596335b72e5f"],["/categories/win/index.html","fd51310c5a98e08233c136ec6567d9fd"],["/css/main.css","0326889cda2fa3789519e0b4dc04bddf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","d1b818f143521a9278118d18dcea5043"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","60cfdc047bccf9d73702224b4a3767bf"],["/js/src/algolia-search.js","f68506484c3e6b6c7c14dce53245142b"],["/js/src/bootstrap.js","54a2fefc9df3f8d8245ca534e7ffc5d3"],["/js/src/exturl.js","bd9d3747b74f786eb0915cf243a63950"],["/js/src/fireworks.js","268d564f0fbe93bda3c0ba37f457715d"],["/js/src/js.cookie.js","027a236dd246f8bac4cb54e022f34fad"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","7cd0260b350fee5268a29d33a12ee04c"],["/js/src/post-details.js","a060023399aec906c59c7a88af845606"],["/js/src/schemes/muse.js","367903af47e2ac04a7c742bb283dabb2"],["/js/src/schemes/pisces.js","760dfef53fdd2455b7cc71147e3e2697"],["/js/src/scroll-cookie.js","1ca6d3426ed50fcbfa1329e30e60d1db"],["/js/src/scrollspy.js","20bd13af854d360762dba6ad779b5aef"],["/js/src/utils.js","ed859dd32e1f118a5621153c43815fb4"],["/lib/font-awesome/css/font-awesome.css","2254aff9185caede16a01b1b6aae66ee"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","407e8ecdce3d2a305d320018f6de4363"],["/lib/velocity/velocity.js","978395b95868ec8c123f5802242a534b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","eb7392a50f6189b638e7ddf0f2e69bcb"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","040f5fbd7bb5f98c1c5a19e6f48ae144"],["/p/1136132855/index.html","125614aaae5466467ef414193277465c"],["/p/1243066710/index.html","210f19f53ec96d0912cfb88c506bde0b"],["/p/1326311149/index.html","a8752d78cac8dba971b39533e2433d98"],["/p/1330414162/index.html","54a756688c96c137ea224bddd31e6a0b"],["/p/1507653627/index.html","0e9ace1dfb1a6e04fb98e9352c0f0f38"],["/p/1616465807/index.html","c35baaf40670cc1279fdfff88b3c81dc"],["/p/1925762643/index.html","a498caa5c226f8b78378e919295fbc47"],["/p/2027328352/index.html","a136086a38740883d91b385c77b78865"],["/p/2054314647/index.html","f89519784d09d2ea6b0dea5bee476967"],["/p/2094704911/index.html","4c4750e1f65dbb3d32c99cfafc409709"],["/p/2112220981/index.html","42b9fe21ea23f6d1abb639b29e972a97"],["/p/2112220982/index.html","371907a72576049e10bd7c137ca55946"],["/p/2480269034/index.html","15c6c58bd6c884d2423d6afb3bec5fc1"],["/p/2595394334/index.html","7907dc7eb1c042424159b07fd098f1b6"],["/p/2622962694/index.html","55c42e28c99227fb0a46d8ef1e99f6f9"],["/p/2914875511/index.html","cbf7b6dfb0df1becbb3cabf412dc9409"],["/p/2993615910/index.html","d4e8bd46a66e319c780ecd81fadfb847"],["/p/3216883251/index.html","36248aea8049697c7b099daff72d002d"],["/p/325336281/index.html","1a229594ad972e572b931d29b0f9941d"],["/p/325336282/index.html","51dfa22a7a5f3390654207658a9d0c1a"],["/p/3310093647/index.html","adcd83e1d1b62994c4a7e7247b02a86b"],["/p/337471241/index.html","cc8c4881578294ebb6dcade4742e42cc"],["/p/3535319776/index.html","68f652397bcf69f958c9fb75f420e7a0"],["/p/36920602/index.html","3782f7fcc8456c63c5bd4dd51bc9fd0e"],["/p/3741091999/index.html","2c84e7246987322ce7dc069445bf8a0c"],["/p/3811859892/index.html","3d0c766c62400018e52fe51ac2b94c4c"],["/p/3871219887/index.html","c010f931fa275648006691b574959476"],["/p/3907919010/index.html","4b50c434e3a024878e39f31658787e26"],["/p/3958123573/index.html","b34a2e21fbe65398f61ddb9f82974821"],["/p/3960214993/index.html","b33d9b9e14b6ee691ad509ed1ac07ef5"],["/p/4048823559/index.html","979b8fbdce4a09d9f9e6f2d4752ca6ae"],["/p/4159564062/index.html","fdffa79fcbee7c943332d9b095ba0bd2"],["/p/4288673006/index.html","e28bec3ebcd00625b1318fa6e68858d0"],["/p/556968818/index.html","a43364bd71012ed974c22e8e278ccadb"],["/p/739861978/index.html","96022599a7f0bf2c30e15077d1bf3642"],["/p/850238276/index.html","13bb86731a96434cc74f42e71da627c5"],["/p/866021247/index.html","85fafbd4166f2f5611ce421270455f2e"],["/p/964429882/index.html","fda11fb0b6d3823902b66f6b575f1744"],["/p/985515144/index.html","e29167d0b36962e6662339d2d0759e02"],["/page/2/index.html","db8b4169dfaa936ea024a9fe40eaadca"],["/sw-register.js","39c8bea47b97bc27eaa78adf6acbba87"],["/tags/JVM/index.html","35fdbf5fb320bb623342d30e88d969c0"],["/tags/OS/index.html","2278e44ce39a91c42fc2098fd4c7a6b8"],["/tags/a-recommend/index.html","2e6b62c040951a518bf86dccce2c7dd4"],["/tags/android/index.html","29773a885ecaad3864484f29b53b6021"],["/tags/annotaion/index.html","22aa1306084c51a729952a6d3bbe111f"],["/tags/array/index.html","bd8ca8c3f93e20267b3945edbc2b2255"],["/tags/audition/index.html","a8b0f402c1bacf780af991902df1f52a"],["/tags/demo/index.html","a47676007a19fd2d509d8f4699802e80"],["/tags/git/index.html","8d9482d3af913db96dbb4001b04fb9eb"],["/tags/grammer/index.html","34be912d6daeb2f6232b369a369c9ed7"],["/tags/hexo/index.html","b335193a06370b72913200a80fdb127b"],["/tags/idea/index.html","29fa0ed4caca617e2431f7cae008e99c"],["/tags/index.html","b8a924bbb7b082931211e1fb04076e4a"],["/tags/list/index.html","5fc618ea75611e944f9133a15133fd16"],["/tags/map/index.html","48313ba1f9e255edb283967dad650d25"],["/tags/md/index.html","1308163cb720de04a36de1b1eef50f22"],["/tags/module/index.html","797a19772b02e2228de2a1b48e546317"],["/tags/reprint/index.html","11a7219527d1b960d8d9f77591cf1547"],["/tags/set/index.html","cfc4fb3858848d34e63134984a97beb3"],["/tags/software/index.html","fa56781f259cb6a619efd71ec16c8770"],["/tags/springboot/index.html","19475788b76ca78c8f8b546f6e2749a2"],["/tags/ssm/index.html","abff03b41cbea8caa751c138016c4180"],["/tags/summary/index.html","4c6d25ea89083c5e7ee62e128696dafd"],["/tags/thread/index.html","f6441bea86b9cd6403d557f91d149dd9"],["/tags/tips/index.html","466ea0661130f17a888f8a056b27af09"],["/tags/un/index.html","7af6d1a8c58b955a13e110835bbace2a"],["/tags/并发/index.html","3d965c5e3627abba539d332bfbdcf3fe"],["/tags/脚本/index.html","6e68a7350910c79f9c81e0dc7c52f927"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
