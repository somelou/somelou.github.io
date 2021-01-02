/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e03ad9e86b5dc4a0074617f4c72ef3a8"],["/about/index.html","c0aec5837d55a2fc4ec997b17107da22"],["/archives/2019/index.html","d1b883eeb4fd68e82a770c7e61b2843c"],["/archives/2020/index.html","f2444fd0b42d86a68d70ec26494f0e14"],["/archives/2021/index.html","7f144190ec9d2cc2afe5d2fa0cbb90dc"],["/archives/index.html","19b44515d93ff9513605a3f7995eb2e9"],["/categories/Java/index.html","8575b3231c401bbe8fac1e0c9cb903ad"],["/categories/algorithm/index.html","0de1a570666a5063bee1621d62e7814a"],["/categories/blog/index.html","71a43dea6c85c4abc745c42db1c26a42"],["/categories/front-end/index.html","13f65af1baaa92b554a0b2f67db25bc8"],["/categories/index.html","e4de230fe418663dab7d8055e3b23cf4"],["/categories/linux/index.html","da68dea8cb1a8ee82bb3719db879cb89"],["/categories/mac/index.html","6c46e820bb61c9e6f44a4cd9901b121a"],["/categories/mysql/index.html","a090178f6ba49dc2676afcc4b032e503"],["/categories/network/index.html","de180997b63a744ddf53e751aee5abfa"],["/categories/other/index.html","5ae228d4ce353cf6bcfc430b78700b71"],["/css/main.css","8789d333f17c5f2f9c457ef42e8d6f4d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","05788317c02c19924ba9a15281b3576b"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","6b86efe2a8e3a0690b3dadc4fa451a77"],["/js/src/algolia-search.js","9862b863b58367c4218a979e37bc95dc"],["/js/src/bootstrap.js","d6a7b7c2ac10eaa97a81f74564d834b2"],["/js/src/exturl.js","f19f8c776cadc1518639913abed5191b"],["/js/src/fireworks.js","50e464de6cb5b54e16e4b6b7e6652d55"],["/js/src/js.cookie.js","8ac28e7ddc636cec97ca8102d86af09a"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","00de55dcc671518263a9722468ee709c"],["/js/src/post-details.js","a4004df3492a14bf7b54bdf6f9a91d27"],["/js/src/schemes/muse.js","5c3252addd9e82a38aa9b4ae5711e494"],["/js/src/schemes/pisces.js","3b8272caebef4f782724f15545a69fcd"],["/js/src/scroll-cookie.js","fd3ab47c5a401c37264e7ceff85a5385"],["/js/src/scrollspy.js","64d9cd6d4d8c2e68b97e80cc02f54841"],["/js/src/utils.js","304412c9b2cd7ff75a13cce5cb200f81"],["/lib/font-awesome/css/font-awesome.css","3ec77baa302bccd1863cc5802430e925"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bef0cf6f3b020825c6b8af6d0cb5b3a0"],["/lib/velocity/velocity.js","e67a492ed4597310fb37e81352674754"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6f43adfe85f48c6046064b9612d46e5a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","5f45fe9560542c8418fab0b2eccf0bb2"],["/p/1136132855/index.html","8e540083aff8389e82590fb5624a2d15"],["/p/1243066710/index.html","537dc61add55d33bef0890f9d931edcb"],["/p/1326311149/index.html","060067563125eb9204ff22a7d95cebb1"],["/p/1330414162/index.html","2f1bda37144215ae537f19cb32445dc1"],["/p/1507653627/index.html","2014c518a9f52e2ca79aa4c3fa5b8aa4"],["/p/1616465807/index.html","d9c72bdf9b040ff815cd421e8a90f958"],["/p/1925762643/index.html","cb406358e50227d83e099ad13b8ae111"],["/p/2027328352/index.html","6da622115a618b101bf1606255973f2e"],["/p/2054314647/index.html","b6da1cae5dc6b7dd3f41b8315254fe4d"],["/p/2094704911/index.html","454b29cc74c0c7bb1d442e5b64aeb48b"],["/p/2480269034/index.html","712d8315d2953d7846be0a82d790abc5"],["/p/2595394334/index.html","cc0657e68524eb79e7c60981255609cf"],["/p/2622962694/index.html","fd0663fb0b50c84ed0a3c1ce4d01e408"],["/p/2914875511/index.html","9e94e1e8421739f0060327fcc2b90792"],["/p/2993615910/index.html","d3d6eaf3d51ba21a8a12f1bbd8de35b4"],["/p/3216883251/index.html","c4eea3c53c9a9befa78e20c2545ce95e"],["/p/325336281/index.html","8ad763aedeb790d0b834fcf3622d3813"],["/p/3310093647/index.html","bc2f468091346a7e7b6a8c00f2defca6"],["/p/337471241/index.html","c4285061c1f7815943fb729ef1e8c95c"],["/p/3535319776/index.html","9d85f0f71f211a66249ec47402636238"],["/p/36920602/index.html","16f3783557740e5676e1c0d9cc330c67"],["/p/3741091999/index.html","58b77648597e5edcda3f8fc464726a96"],["/p/3811859892/index.html","c323570bcbf83c922ac347c8427f33c0"],["/p/3871219887/index.html","4deaa17de90a9b4ca3a6a5c5288a2ac5"],["/p/3907919010/index.html","0934fe89561a52f3e424fade87ecdf32"],["/p/3958123573/index.html","fa01e180b843a562b1227b27eb611a2e"],["/p/3960214993/index.html","53c38da0762385fe5c762952d2f9d8af"],["/p/4048823559/index.html","b9672d6c30ce9d42c8c7ede394144934"],["/p/4159564062/index.html","e6c93ff6e8e95837b019d294d4ad0c43"],["/p/4288673006/index.html","de3f8c42dc337b3cc9a468e5a6f17e7f"],["/p/556968818/index.html","045c70c78047156d301dc9277faacf83"],["/p/739861978/index.html","96a033f9b4b93b4ca9caf88c9a209ccf"],["/p/850238276/index.html","1d84ae21453a164f31fc58b1b2f22a81"],["/p/866021247/index.html","325fd1227d28feaf6a8d8673289f9cac"],["/p/964429882/index.html","1ffd617580830f3c8c139804adf08fa8"],["/p/985515144/index.html","9b75e41dc18f8188d1b979bece7eb12d"],["/page/2/index.html","d28bfbcb4cda82d77f844e697ab4e963"],["/sw-register.js","2e885f2bcbcab6993ad1487ebdb0dcf2"],["/tags/JVM/index.html","8b2da9062c8120c3925b4eef53aa14a6"],["/tags/OS/index.html","4f81b8a0beb4f9ccbc8d0000490cafe3"],["/tags/a-recommend/index.html","2f2a3737c689ed32e3076652a5dd171b"],["/tags/android/index.html","60136d366d5b7a73f6d9906803925793"],["/tags/annotaion/index.html","89d44d728ac03b9ab94785f9b1825625"],["/tags/array/index.html","4734d283bfea3c0f61bd1237908dd8dc"],["/tags/audition/index.html","e39cfb64de5ef4bc56f207295a680deb"],["/tags/demo/index.html","bbf702041fb463ff672d00c72cfba984"],["/tags/git/index.html","b7296cb21c97a058475ecc02c75be17c"],["/tags/grammer/index.html","e3e61476b82779eb71bc6d8c9e383652"],["/tags/hexo/index.html","d4f5bce33d6de6110beb92809d24099e"],["/tags/idea/index.html","7a3beb579159650fb80d8aa973a4bc73"],["/tags/index.html","63f09e0531a4e3b0d0e96e433dec64b4"],["/tags/list/index.html","2b1d84fa6daddb0ba4f0b35075599e80"],["/tags/map/index.html","600b50b35087a5fc943726fc83ef9152"],["/tags/md/index.html","88ba260461711068c4a81209f0595ce8"],["/tags/module/index.html","ca78d05bae32b2a55e54635f0d676834"],["/tags/reprint/index.html","ccbbe47197e2088ea65b9637fcfc7908"],["/tags/set/index.html","c1cc223848ea85a689cfad1bca884cdc"],["/tags/software/index.html","3262f28c43c0920c41deb064c2ec2bb0"],["/tags/springboot/index.html","56fd35179fe8a6ef4ec60e1ffe4e7dd9"],["/tags/ssm/index.html","6c7db6ff289afe6e140346e70734e5d0"],["/tags/summary/index.html","c3a4add6b7eecf13c2fb4a8182bafcfa"],["/tags/thread/index.html","bf1b21a1e3f83f4ec95784fefcdf6d90"],["/tags/tips/index.html","72dde0248d9bb2f07146d5b279f13b96"],["/tags/un/index.html","053618ab183c733c6095a895027dd470"],["/tags/并发/index.html","30e557ae00b9e78da45b7115fdff3172"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","545b45687b912abc63d8d02a647f953f"],["/面试/知识点.html","935e856245c618f896f337eedd613bb8"]];
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
