/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f6af146999fcef1a101e1159961c2714"],["/about/index.html","13d6f13bf9112311185745984e7dcb36"],["/archives/2019/index.html","f3ef6d6425eddca70baec769416e1801"],["/archives/2020/index.html","327206876572fc2bd2fa921700b99eb0"],["/archives/2021/index.html","6fd1a1c9d44854fbccb6df330ea0ee06"],["/archives/index.html","f760f33fdffa59d22b10afa6f479a17c"],["/categories/Java/index.html","35ca8cc06db8d2dcfdfa35f294ba3a8f"],["/categories/algorithm/index.html","0b789fa577332a18352a877b613cf45b"],["/categories/blog/index.html","7f2faaf5dee651bfc4b73a275583de17"],["/categories/front-end/index.html","c3bb2a39cbc1d051d03e51578ecdd60e"],["/categories/index.html","46d4629e0c0b1fc433db1a3027607952"],["/categories/linux/index.html","093fc7bef4fec0005ae9b9e8bef89d04"],["/categories/mac/index.html","55878ffe040b3dc0008c4031e7a55c67"],["/categories/mysql/index.html","f4574c159922bbe208b027503f78ad0e"],["/categories/network/index.html","88bcd3291c1ea51a2386888476d025c3"],["/categories/other/index.html","00deb2a82ab1f2c61c47bdda33f2fa0f"],["/categories/win/index.html","e719a36ecf95bcf4fc0b80b4656023bc"],["/css/main.css","7c602f150f195a6a77b256345dbedde1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","5761feaa3c1cfc702254636da580355e"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","7182dfd5f34a6ff786df263a8c3adfd4"],["/js/src/algolia-search.js","4fbe662caf6dbeaba3ac1e292ce201ce"],["/js/src/bootstrap.js","c159cf0c7409a0310d982584222cbe06"],["/js/src/exturl.js","cc516f989d63d086c38fb8a3ff7fe8a7"],["/js/src/fireworks.js","406701b496a39eb4dc740bdcff2ec067"],["/js/src/js.cookie.js","f52378a7aef5e2db15a9edb277a1182d"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","9c98eb676eda656846474bc12994731c"],["/js/src/post-details.js","48a15f38be784b06c995551c76b75f4d"],["/js/src/schemes/muse.js","6a5e6cc8e04753b5024c1894b5d2554b"],["/js/src/schemes/pisces.js","2fa5dd48d82634e76b0c65c11889cfb9"],["/js/src/scroll-cookie.js","f3626a0f1d936528407569c97dcc8208"],["/js/src/scrollspy.js","63a36f0aec9fb97624ac701db285b550"],["/js/src/utils.js","e347e35eb8b9ed73dfbe5e1d1126720f"],["/lib/font-awesome/css/font-awesome.css","4a14e8f6e08601312751c748c8d651dd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7a7d2100052b421efe3002b29b6bc29e"],["/lib/velocity/velocity.js","d1f7bb269c4f82d1893d14c5b236bfc9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","03b0a7e9e63af0c8ea3724fde73e9dde"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","fd343c2edc2849a738984d26e8dbf374"],["/p/1136132855/index.html","28f7e90ffdddb5aaa115fb222675dc35"],["/p/1243066710/index.html","2935d287d0710e8f6019660d90f2bb59"],["/p/1326311149/index.html","94a5412629dcc6d38325c9ce8b3af71c"],["/p/1330414162/index.html","d0f070cbf485025ac752f8326db27df5"],["/p/1507653627/index.html","e820666c9a9e604d826e4581195794d8"],["/p/1616465807/index.html","e93e4ccf5d8ad8d3d0fdf241ea038adf"],["/p/1925762643/index.html","7c055d98329e8dbc97f27a3c8ae26f54"],["/p/2027328352/index.html","3beb37d8916975e3fcf93483a7746568"],["/p/2054314647/index.html","e2541ca3f462e4e40e514a727adeca8e"],["/p/2094704911/index.html","11c193434eb11db34620890c36b7f529"],["/p/2112220981/index.html","fbafedaeaa1b30e8c2ea9c5c95b738b6"],["/p/2480269034/index.html","700b1808c180fd3b85420322a7b9b4e3"],["/p/2595394334/index.html","5187de12a3770c4801a58936b7201b1e"],["/p/2622962694/index.html","38e2a7f0e261cfe7d618ad5676999c4f"],["/p/2914875511/index.html","fec3f3a7302f16c26f21915144ee9a8f"],["/p/2993615910/index.html","dcc3652dced7a9587f89765a2a09cc0b"],["/p/3216883251/index.html","c367c4251b378809d63ad1befc8ed9f2"],["/p/325336281/index.html","445a41b356b38b94eb17817052fa7f8b"],["/p/325336282/index.html","772df421801b74c0dd8ec3add7f0f127"],["/p/3310093647/index.html","9cc0672dead39d79e163c0e84a186f9d"],["/p/337471241/index.html","56ff59da56193657b80642965c24120d"],["/p/3535319776/index.html","68c49a302f6494002045859ad999c33c"],["/p/36920602/index.html","853f499e645400206c8c7607867a00c4"],["/p/3741091999/index.html","62d563ef618cba8e7681ced79ee9f2ca"],["/p/3811859892/index.html","6c131b7c9df5571a626c3e7b06fc37c0"],["/p/3871219887/index.html","283991b846a568ce4956355ebb459ed3"],["/p/3907919010/index.html","54398e4bed0c0005f27d4c68d59ed2f0"],["/p/3958123573/index.html","6e81a5861fdf4e4eb102b48bc686ea9d"],["/p/3960214993/index.html","330474cf17dd52528ff4c8775a03d34c"],["/p/4048823559/index.html","7d625b316aa28882354483e6b41fec35"],["/p/4159564062/index.html","9fcdabb9d058f28fb58010ffa4651c01"],["/p/4288673006/index.html","be4364136e68cacb9bafc4d50dfa55e7"],["/p/556968818/index.html","39b7a54e6d77446207476dc70f5e6fc0"],["/p/739861978/index.html","26b5cc0791068a20f760908a6beeb65c"],["/p/850238276/index.html","4cc4db0e254931596ddf9596ca0f0ebd"],["/p/866021247/index.html","a07199ff55753ce2304f1767fbb06799"],["/p/964429882/index.html","54c6cb754361c92119f53cb9fe967872"],["/p/985515144/index.html","458bc1cc082f3cfb005f441d2e42dda0"],["/page/2/index.html","f231660885a3ec0e4554ebf7ac868fbe"],["/sw-register.js","09e1268d35eb21627a57937310d908ad"],["/tags/JVM/index.html","57252da66cc6837102da55cc87efca9a"],["/tags/OS/index.html","a561156c0e978588887a7ff3dc119bc6"],["/tags/a-recommend/index.html","0cff3fd7d182940c7c4e6e34f0ca6540"],["/tags/android/index.html","a83ba7dcd4b0ffc12e39f15e4942e021"],["/tags/annotaion/index.html","f84d33c79a2e4801361318577929de92"],["/tags/array/index.html","b0cb92ceb8f9bf4b3a9d7bcef28cb891"],["/tags/audition/index.html","59cac9705e36a213fe0083e909cd63cf"],["/tags/demo/index.html","1a8dfe927b1accc36d2b562802478e03"],["/tags/git/index.html","4795c46d91b3ef57cba510f6b0460300"],["/tags/grammer/index.html","0061a786d8d7a2da30bc0906ac0ca46a"],["/tags/hexo/index.html","e2b64b5415fb1c31eb4a0c03d8609f97"],["/tags/idea/index.html","7d3e7a239c73261cc1e38de44f566b8e"],["/tags/index.html","8c3341bbfbf27f13334a7d77f0afab84"],["/tags/list/index.html","d9b7ea4479cdef6a3e8f43f5271feea2"],["/tags/map/index.html","00bbc504dd38f09185f74aeee3d32fa8"],["/tags/md/index.html","1c616ecf134fdf81268931c65cd73ab0"],["/tags/module/index.html","499bc76491c916d183b6ad9f42ae0622"],["/tags/reprint/index.html","5c510420e4bfc9b106e808cd764030a2"],["/tags/set/index.html","b996283fecf2c67b2417c4b5a5a30e5b"],["/tags/software/index.html","fd8b6742d630922f20f575d108c1e103"],["/tags/springboot/index.html","35b61d0f38258049f878211aaa0432c2"],["/tags/ssm/index.html","65202eba5dc48248d2b1e2345596942d"],["/tags/summary/index.html","952052410aefdf0e02d270cc59b3577d"],["/tags/thread/index.html","abbfcc7fd97e7f68ef2fdf7dfaa4481c"],["/tags/tips/index.html","0be5765fcf11d1714c98ed4673dc5bdf"],["/tags/un/index.html","f3e90253fba01057316804fdaf6ca702"],["/tags/并发/index.html","4b9261e00b3a0d8c245298c636e4108f"],["/tags/脚本/index.html","4cd74219dc05a4c42dac1a1445bc30f7"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
