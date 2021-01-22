/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a0e02a338f3b720fc574f56c521f87a"],["/about/index.html","b7ee7a4866aec02a25389cb5d17b3c43"],["/archives/2019/index.html","58f755fcc440a7624e3b665f4d0c4e73"],["/archives/2020/index.html","b2050b840a2ea2b74929d19b4f00ed1c"],["/archives/2021/index.html","d2558c68bb14c341339c15ad404e4589"],["/archives/index.html","fe2e36a87563ec9b1814587ca0e0142e"],["/categories/Java/index.html","ed688793ce39b797f753c2172ad7a58e"],["/categories/algorithm/index.html","c8fea17e960fdf7d5ced501b750b859b"],["/categories/blog/index.html","75b729997d450727bf9ecadfd986576d"],["/categories/front-end/index.html","b587ba647cd11ace2471c248160f24b2"],["/categories/index.html","c380b4758266a52b3a032f925a51f9c5"],["/categories/linux/index.html","70ec5a70f25bf5bb4686b0c7b51ae9db"],["/categories/mac/index.html","e739f98b9295fc6fdd3449aaf3b69444"],["/categories/mysql/index.html","5a6a80e83cf2663fc3423c9488104910"],["/categories/network/index.html","7f519db3ac43715f1a6762518a303364"],["/categories/other/index.html","f1b8edb92f541927f5736297e3ad38e3"],["/css/main.css","af2d5ae09d843e50397bbdcae3a47acb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","d5fea62f6032966341d01c58183faac8"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","c241b607c25aee071ea352e2165e1805"],["/js/src/algolia-search.js","d9c7b262701268fd1c893cc7a3807320"],["/js/src/bootstrap.js","6bd7342dceb27da994d479059ba9cc26"],["/js/src/exturl.js","dae6b0ff05c4f2b9d49a7d21837f7e4a"],["/js/src/fireworks.js","94df0dc3d7f74f8a8e00217daadacdef"],["/js/src/js.cookie.js","dcb7ab6eb62fa000b566dac5a3fd389f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","6893ecc4caf48c4658e426d472accbe6"],["/js/src/post-details.js","ae5f9f48ac82080d966f0eb9b01897fb"],["/js/src/schemes/muse.js","239a7418a4fd41ed9bb1091485925b2a"],["/js/src/schemes/pisces.js","6f8b457ca8877f9414f438f122c8e000"],["/js/src/scroll-cookie.js","cacf747e5fa3a5749a527bff8c80e505"],["/js/src/scrollspy.js","88b4181f5208b18324ccb1aff9169d09"],["/js/src/utils.js","8ccd93027d500f726959a6e52b3f9159"],["/lib/font-awesome/css/font-awesome.css","3f6e50096f5b24b41062e3a110c9a8fc"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1019aed2e1c799f5d1f11a6b742b33c7"],["/lib/velocity/velocity.js","72fd33345d1f94627330b3d1c302c5c3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e8186cb693ba0a1d9214c2a232a08241"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","359524e1d9afa4eb0789ff91a1244f04"],["/p/1136132855/index.html","74b3d95ad737efe5f6a1e6245c1351bc"],["/p/1243066710/index.html","4bd1ac8c1b2d0b6c00e90518ed041ea3"],["/p/1326311149/index.html","9b7daf5c6f4beaa342b34b6e6b93abcb"],["/p/1330414162/index.html","844bd81d6754321a54c5a3926e18f49e"],["/p/1507653627/index.html","c3bc20722778d37778267ea3b6309313"],["/p/1616465807/index.html","7996b533e5f24c0e4040151eaa63285e"],["/p/1925762643/index.html","2bb25f12c2ccd188a6c02699763ad62a"],["/p/2027328352/index.html","966e40fc0bf81f7da6015a2dae73b837"],["/p/2054314647/index.html","0fa5ef11601d62696ff19301a721e5fb"],["/p/2094704911/index.html","3210962b67707dc02268daa864cf0752"],["/p/2480269034/index.html","a0c879820b154edc20ce9b304bf0437f"],["/p/2595394334/index.html","ce8ce128b62e4a1aec99f249965db883"],["/p/2622962694/index.html","ca8c77c7d171afc167c8ee93f585db9d"],["/p/2914875511/index.html","f7e9e737c94f3a830606b63f43ff0eeb"],["/p/2993615910/index.html","131d8d377a5d35474c6dcdcc3caac01b"],["/p/3216883251/index.html","67493eb0f2518d2d6bea963548a8a915"],["/p/325336281/index.html","111131abee791caa3fe1bc7ccadecc2f"],["/p/325336282712/index.html","393d59332cc108734145b97839403a47"],["/p/3310093647/index.html","ae47561cce11bcb8499781db2a2d2f83"],["/p/337471241/index.html","4b00ceb96114920061310cd63eb22a44"],["/p/3535319776/index.html","1e6ad55dad057de0b2429c7e53719e20"],["/p/36920602/index.html","0a663e1b4d6cda655cd49db8d331226a"],["/p/3741091999/index.html","c66fbdcd516ba5c96372043b1d6ce1f1"],["/p/3811859892/index.html","d09e0e7895befff2cf027cc92b733e86"],["/p/3871219887/index.html","52c893b9db11cdee467c02e46247f9f1"],["/p/3907919010/index.html","6e0b196b8b3fff0216abc871f1c79166"],["/p/3958123573/index.html","82b56d04ecb384b3780e558abedc49ed"],["/p/3960214993/index.html","5bd58c446fba1cef7bb7f00e505baaa5"],["/p/4048823559/index.html","e181c74a5016e9e14edcb5de9231b174"],["/p/4159564062/index.html","d71c5dd83ca6b582c0520a7d3cf6e7a1"],["/p/4288673006/index.html","0ae312af15df30900e11dc41791ab2c4"],["/p/556968818/index.html","4418571743cc6f148fde4d501d50d553"],["/p/739861978/index.html","dd495220c5e195043b0a798739bf84f0"],["/p/850238276/index.html","e2cd81c6460c5b71e678316e59fe4777"],["/p/866021247/index.html","8e7b09eb2b8d3546ef34fc5173542229"],["/p/964429882/index.html","31334808b7780da10f1605c1666fb5d7"],["/p/985515144/index.html","3bf921d1ac3db7e4b80f05248e7e4aee"],["/page/2/index.html","486a73d31df21dcd1667f6c398c2debd"],["/sw-register.js","398a35a9372593e4a9eb1f55525138e9"],["/tags/JVM/index.html","d5910973713a20584f5fb7f50b82c59d"],["/tags/OS/index.html","39e2fc1b18f103a5c6ccecfce5c74c39"],["/tags/a-recommend/index.html","5e7fa1b72130a46b95a9ca9525aa65f9"],["/tags/android/index.html","6933eed17762ae888e5906ba099bd583"],["/tags/annotaion/index.html","2a55fa5b0318329d343c49a98c3be65d"],["/tags/array/index.html","2f2894c4731007ef492e545de2863acc"],["/tags/audition/index.html","6bd09ba4644a533198f12471253beae0"],["/tags/demo/index.html","0efb94dfce3de788a52f33439d2084e1"],["/tags/git/index.html","c71f136cf11be8cfa7b5334aae837c40"],["/tags/grammer/index.html","11a6e1e2136231836de97db89b26bef2"],["/tags/hexo/index.html","7bcb30921572c2645b05bf73e08119a2"],["/tags/idea/index.html","800f513b406e059b9689b39b7d405038"],["/tags/index.html","69925f599ce4c456e512ec824cdd26ab"],["/tags/list/index.html","7015c8bc42532c7d212219d5f0719478"],["/tags/map/index.html","b125f5718660fedc54303c381fbff376"],["/tags/md/index.html","3eecf98b1942e9025e6e02710703173e"],["/tags/module/index.html","4f0beabc65b2ce9b3135c92675d56de3"],["/tags/reprint/index.html","f9bd7874198fa78e721850fda9c06abf"],["/tags/set/index.html","41aaa459e96a465bb8d62c075e2199dc"],["/tags/software/index.html","1a8a413919d48905a2fb765c0667357e"],["/tags/springboot/index.html","e47daed48e91df3816bf3890f48b30e5"],["/tags/ssm/index.html","9986dcd0f7f960ec9de421e5f8686db2"],["/tags/summary/index.html","0ecc066f6275058b0bcf104f95785c41"],["/tags/thread/index.html","fbc0a0a16ace0826d68293785f8fd436"],["/tags/tips/index.html","563bc470f76727ebfe40080e32bd9be0"],["/tags/un/index.html","a037e8dd48b64213f1f589bc80c4dd2e"],["/tags/并发/index.html","1aa8d9f376038f14f779d40e09e2ffb8"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
