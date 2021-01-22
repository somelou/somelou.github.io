/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cc765d5c60dd7ab16f90b8947ef0487e"],["/about/index.html","4a2154c0187660eccf0589eba7b0bd9d"],["/archives/2019/index.html","cdce778c1a10a63f47050f756f5a179d"],["/archives/2020/index.html","8681055de572d19ac90c03cc1014707c"],["/archives/2021/index.html","4b9cc742f59a73f8c34f20f2fea0be8b"],["/archives/index.html","b3d9f6b02411d8d74380e0e2e8b01894"],["/categories/Java/index.html","48e2ccbfec3d949f5d6f1f84bad3fe03"],["/categories/algorithm/index.html","f59e9a4e354f3bce92082269235f21aa"],["/categories/blog/index.html","b59e5c980862fd62b6050334bee3e7f0"],["/categories/front-end/index.html","7590f5fe2d1b05de6a7f5c4216e0dfa1"],["/categories/index.html","cec098c7a0f45c2a04f56e9dd55ea925"],["/categories/linux/index.html","235c5f0a36d7897402de2aca2cfed854"],["/categories/mac/index.html","7f15f69ae876b9936220147783e948a1"],["/categories/mysql/index.html","a493a451dc1a70c1a8cc3d266263d1e0"],["/categories/network/index.html","fa899e708284a230493feadf91662582"],["/categories/other/index.html","9eb859cb98dc08f4bbca087100652634"],["/css/main.css","27f50db18f6b4cf53147a6f5a8b4a7c2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","516f0fc9af66709fdcd171776f237751"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","32ce037c745d78daf774210713480101"],["/js/src/algolia-search.js","67f02971e0beb81cfc236e6353936654"],["/js/src/bootstrap.js","cd6b01b573d360d233232fbc78aa49ed"],["/js/src/exturl.js","a9e3693746c25ca2f20284acc69f3b18"],["/js/src/fireworks.js","0d8c106ea6772be9703cf45bb5bf2fd0"],["/js/src/js.cookie.js","07bf567b60ef34bedbb8fc19df73aa68"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","b64e656c5d95e689ed3daf1b5171f503"],["/js/src/post-details.js","5ea4ef362f75c6138ce546b670781904"],["/js/src/schemes/muse.js","0a07ab2b92d1da1c90ce799a2fe5c02b"],["/js/src/schemes/pisces.js","e889d5426c5c66824cfd16674a84b48e"],["/js/src/scroll-cookie.js","6572aa304b7baffe2d1df8d6c34faa37"],["/js/src/scrollspy.js","c1f315615cb825d9809108cb637207ed"],["/js/src/utils.js","755a9640d0c322ec587bc5f3520c7988"],["/lib/font-awesome/css/font-awesome.css","af2ed422dac25b5ef4b23e64a9cd3203"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f7b3201b707ce94fc4edd3ec775f5c2a"],["/lib/velocity/velocity.js","d5193c9d4ce231c07325a18be5dc01dd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","954efecffcfd6dbf3764f496210e75e7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","fe32c3d260bc08f066e984907149d83a"],["/p/1136132855/index.html","824566588a529bf22c1b3a2d9c2f52a4"],["/p/1243066710/index.html","6a9fdb509177a1eb1bd9b4cfc78faa90"],["/p/1326311149/index.html","c20bae147cc4bbf02a6519bce7d7afa0"],["/p/1330414162/index.html","b42cf98f5a80b264002110c003f0e15c"],["/p/1507653627/index.html","345dc30d2c95991cfce4eeb92b479ff7"],["/p/1616465807/index.html","b0ae885b9ba431c5520062d887d64a3f"],["/p/1925762643/index.html","aa6e142e255eb1aac4caf853630d44b1"],["/p/2027328352/index.html","ad329326f094f23f67df7eaa4d29a33e"],["/p/2054314647/index.html","1cdeccb0d532128803d991a7fc2ebd33"],["/p/2094704911/index.html","b5f9ff24ebac382b19da7484dd5a7777"],["/p/2480269034/index.html","456042291275f12bf94e92b807fcd317"],["/p/2595394334/index.html","b1e92670c2d1593a8aa58dd11018eda9"],["/p/2622962694/index.html","6dd6162908e1c7fb0039036cf0062dfa"],["/p/2914875511/index.html","772a86171339be5ee272d3e1c7798d65"],["/p/2993615910/index.html","c12c853ce58672a2ae5e682c46d56d40"],["/p/3216883251/index.html","778c329bad03feba7036360bdf3d0b01"],["/p/325336281/index.html","0a08b2dbded5f906a9a93306cf6a916b"],["/p/3310093647/index.html","c10c8c0bef743f0d0aa5a06ac5c4bcd4"],["/p/337471241/index.html","a38074d4b67d28216450811ae6a4ceab"],["/p/3535319776/index.html","bd5e4d3909f456df13182331ef9d2489"],["/p/36920602/index.html","fdc0ae68c02450ec281bfe098145d861"],["/p/3741091999/index.html","fc719d5287cdb014b76e19c2a47de1db"],["/p/3811859892/index.html","a3310d6c2128eaa722776c21ad01e15f"],["/p/3871219887/index.html","3c70f79ce33055abfce410de166f8986"],["/p/3907919010/index.html","afe2e0709ae1eae5a53bed3d039bfdc5"],["/p/3958123573/index.html","86e858a8786d0ccfabeee1a868c67341"],["/p/3960214993/index.html","33075443e84dd26edde5de1ad25f0906"],["/p/4048823559/index.html","72b397d33970e0456fdbecc09f2ee442"],["/p/4159564062/index.html","3aa84ebbe201749794d50c86275a0140"],["/p/4288673006/index.html","db35686875fb3495c82cfe19656a8e5a"],["/p/556968818/index.html","af09204db75e1ba7e9332691d097e855"],["/p/739861978/index.html","c09abd16d4adfb4aae2293480b63f987"],["/p/850238276/index.html","cdfc7b2690c5cfbb7a0ddecdf4f6e23c"],["/p/866021247/index.html","8c6d4b86d4e3c87466f6dc9b052bb2b9"],["/p/964429882/index.html","79c3e79c6b00665930733b5066003eec"],["/p/985515144/index.html","d1290e34891c008072a6f94744e4c7cd"],["/page/2/index.html","d9073b8bfe6a3eedd4d9761296ab69fc"],["/sw-register.js","4d34dd8fbb48ee48cae0a4b91e18a0fb"],["/tags/JVM/index.html","008c31c635cb4986dfd4c63b406d394d"],["/tags/OS/index.html","c4a8fba2ce404d1bb86367b507bc8013"],["/tags/a-recommend/index.html","8b0df17c35dc9cf4543d2b51201b0f7e"],["/tags/android/index.html","3dfa27c66cb37dcf57096ec5b4fc6ca4"],["/tags/annotaion/index.html","532ce78c333eaf25c41672add9b58bd2"],["/tags/array/index.html","23ac67a19844fca622a45e80414d9647"],["/tags/audition/index.html","1b0f8cf3056026ddd04ae9d951a16501"],["/tags/demo/index.html","961367735bab390fc440fafdb631b356"],["/tags/git/index.html","5462ccf1907873d838b3c06409b02b41"],["/tags/grammer/index.html","d5bdbedb385ca11cb8f538f2b5c0d21b"],["/tags/hexo/index.html","1189ad7d5e940c32f1f7ff9b91d4f19a"],["/tags/idea/index.html","d8437c2922a39a056512eca881754e4b"],["/tags/index.html","8f938ce4ce501dc94cbe36319eed3b59"],["/tags/list/index.html","022a6f7da363a100af76b561e56dc4f4"],["/tags/map/index.html","5ae2a5afc02f53cae64c157de6a989b4"],["/tags/md/index.html","ba651bbc7e75a57327ca9d936f4e9901"],["/tags/module/index.html","a455ee60c1962e526be01b8d500b0039"],["/tags/reprint/index.html","2bbba88d9cdc79d7e4cea13f2f188041"],["/tags/set/index.html","f71504e81cf72fae98012339b11b5b7b"],["/tags/software/index.html","ee89e1524a9a6edac53090ef104b4e69"],["/tags/springboot/index.html","43e968d1c5d466b0945f3a6f079723b0"],["/tags/ssm/index.html","caeb1b592f3bdce8a91fb1c8742f549d"],["/tags/summary/index.html","b086610dce1bb455742727f6490f5c07"],["/tags/thread/index.html","e0d98ebd1bff66ff01f56b27b718f832"],["/tags/tips/index.html","cddaec582b26773366ff0a365107bb0a"],["/tags/un/index.html","ddafee1e6d1f585350704c4d5eb6cdd2"],["/tags/并发/index.html","01779fa035905003bc83b49ff47d0863"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
