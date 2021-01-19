/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","052df3d5248da0b8c0570eef9aa1674b"],["/Java/Java8新特性.html","e75340e7ee2e61a8ccabf71eba14a4f2"],["/Java/Java基础.html","f826aa75495e70a7eaff4ac3bb4bf1df"],["/Java/Java基础补充.html","97059403f7a5328314595435ec70a476"],["/Java/Java多线程与并发.html","8fe0f52912c12265b17b10954049e380"],["/Java/Java虚拟机.html","5b6cad805294ed26a70f19e3013eb583"],["/Java/Java集合.html","52df54fc6962ba06de5d9018353a4444"],["/Java/Spring Boot.html","bc22bf7c95151a799bb0d0e89866ec4a"],["/Java/Spring.html","1296d334b8896716aa5192763ea34de0"],["/Java/计算机网络.html","757c2e2baafce7c94863090a4fc95b58"],["/about/index.html","b3378646837587bdddb8d4f23ea2b40c"],["/archives/2019/index.html","b68e6129a2f39b4efcf488c092aa524e"],["/archives/2020/index.html","0dfbe63de9e5779446b1c885a8e77097"],["/archives/2021/index.html","c359fee2fc551a0b06f8075af50cd271"],["/archives/index.html","9046c2f05011012d275c93be93a775b2"],["/categories/Java/index.html","87d8657d5aa06993ebaec801536e8f58"],["/categories/algorithm/index.html","a9605c4578ababd9210f2ca44a12daf6"],["/categories/blog/index.html","60254cc763d3b26319514eea7dcc7594"],["/categories/front-end/index.html","0c50c67bb352ee47e6c37e728a9ee3c5"],["/categories/index.html","4dfdbe5ec2da54e6eca60b8c7ce84e15"],["/categories/linux/index.html","c11e93329f657e56d4ac21c6f07d48f0"],["/categories/mac/index.html","5cdb11c998c87ac9f5dec18af0d6e3d7"],["/categories/mysql/index.html","56fd85aed88a126007f0012b890c2ef0"],["/categories/network/index.html","a5088b97269e8b70c43f08130adcb54a"],["/categories/other/index.html","5ea8844fbd0f5039d04c781cc4ec88e7"],["/css/main.css","d6aa9775e443ee3976f4297e90369d2e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","0dfec2d732d6af942046cd3a19f97d45"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","6cb52f3dd6e7af0a3162055f15a44cca"],["/js/src/algolia-search.js","70196a9cb814b3346cb8cbbccc2a4048"],["/js/src/bootstrap.js","6b8b773d1d4359d80b8e9cc00ed9a126"],["/js/src/exturl.js","639c47023f9ffda2f0c5411376fc0993"],["/js/src/fireworks.js","822cd8485f113cb2a6ecdff630110dbb"],["/js/src/js.cookie.js","3b4061541fc5e4586a73f46e7549260f"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","65d0202bc3a70b59f7ad4432c56284c9"],["/js/src/post-details.js","1ee7f611106cd2e05ba284b802846a23"],["/js/src/schemes/muse.js","e4997afe397b991278b9b8602a70413f"],["/js/src/schemes/pisces.js","45be5606e26b3aff183673f3a3e26e05"],["/js/src/scroll-cookie.js","bfdd91f70d607179c40a419440abd747"],["/js/src/scrollspy.js","1dce42e7961ba2f5cc530c8c8cc5f0f2"],["/js/src/utils.js","7273e222c19724a110a476db0c34a8a9"],["/lib/font-awesome/css/font-awesome.css","82f21e47789a7feddb74fce47ef8ff49"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","75c574e5ce9b84275694741eaf913da8"],["/lib/velocity/velocity.js","80569d01cf058c85941af142ea55f398"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","90779e269c7843970eac083c7f2aa8a0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","834884b655175f40c6fea1fea57ac9da"],["/p/1136132855/index.html","ff3a9c27d27a4fe369c6e6983868e0fd"],["/p/1243066710/index.html","bdb4cd9cea02b9cf7649d533d98988ff"],["/p/1326311149/index.html","d931b085a31f8d8987d5cfc7f358484a"],["/p/1330414162/index.html","1734edc772a391c4db7a4be15397d899"],["/p/1507653627/index.html","4da3d4daa02b700c62905db18ee7a970"],["/p/1616465807/index.html","8c8a772110a5ec79e083955a126e81f1"],["/p/1925762643/index.html","d7223f8af9a28c5cdb6b7b92c12a08d9"],["/p/2027328352/index.html","bb4560fcc5898f880e634d93f88220c3"],["/p/2054314647/index.html","3661470948d78597ff4437bc997440ce"],["/p/2094704911/index.html","1e2e8d03abe7e9393b96a8fb37678f08"],["/p/2480269034/index.html","ddbc5995a595b2d1f8e41ed8f6a03947"],["/p/2595394334/index.html","020df60cf76cff69db2aff24caf087ae"],["/p/2622962694/index.html","b019706b5a74af0b96e9eae2e7f96489"],["/p/2914875511/index.html","5ccecfa5bad0bd1ce67813daba23a1fa"],["/p/2993615910/index.html","42dc31bfe2ec474e44429d159eaad199"],["/p/3216883251/index.html","1d16a257bae57f4136532c0be8c833f1"],["/p/325336281/index.html","e865ade5e15ea48130bf2cecde365ede"],["/p/3310093647/index.html","61a5be097a6d90e269fee64587c5b750"],["/p/337471241/index.html","fc31eb195e5af6a05a5db1857825e825"],["/p/3535319776/index.html","d59659f5bef3d7ce70cb90a7f09800d8"],["/p/36920602/index.html","118fe4fa3746317880581b005b01c8aa"],["/p/3741091999/index.html","19dcd1cdbaad521bd5461cae58cad195"],["/p/3811859892/index.html","83476aa3b9b9a46cf6a256a980a5d768"],["/p/3871219887/index.html","5ef67c5b29eb9a1cea402b274c0a8784"],["/p/3907919010/index.html","cfad0a2ffaf7352355e237130b5fe571"],["/p/3958123573/index.html","911ec9f5760c6b3b1e2d141bd9c787b3"],["/p/3960214993/index.html","b5e3ba0021f5dd3d3e41052a5aadd86b"],["/p/4048823559/index.html","e20cd1610f51e2ac0a89eea57cec95fd"],["/p/4159564062/index.html","53cde411004ee63c78e58b607ac68793"],["/p/4288673006/index.html","4a2bbb6d7aa15dd49c84d035ca399646"],["/p/556968818/index.html","a24a92636e73ba98861910e1a37970a4"],["/p/739861978/index.html","f0cd8eb06a138ee86f8ffb4416883a77"],["/p/850238276/index.html","e977e4b325f0c34aa5af5c9f156e43e3"],["/p/866021247/index.html","0e3a60824601031cddb6abd3aca8de2a"],["/p/964429882/index.html","b609e134bf6c950c24f9d5e185af3095"],["/p/985515144/index.html","24a10294db35d9452bcfa5f60ddf0063"],["/page/2/index.html","cd7d4a509b2f9a1b9dbd3b4c5bfa2f93"],["/sw-register.js","361038899acd7da8b3e18424b97dc84a"],["/tags/JVM/index.html","8fcaa92b79ac81bbd509be01f5288fa8"],["/tags/OS/index.html","3deb58a902b23e38bc2ac1e5321c17c2"],["/tags/a-recommend/index.html","0c84f052ccadc66b0185f6e81dafffb3"],["/tags/android/index.html","de2b8fa982d39e902cd85679d83af509"],["/tags/annotaion/index.html","5648dc38f4fa46d4d2d74f0d031bdd9e"],["/tags/array/index.html","3e6b98248193e451c2c8446d1c3dfe60"],["/tags/audition/index.html","dae806e9cc41d2d6b919e61f261d35bc"],["/tags/demo/index.html","27e41b3df7f20751f38cf64ba096b6f2"],["/tags/git/index.html","93196bff61db08bb08184c4e5bd1466c"],["/tags/grammer/index.html","16be3acbcd804d239edff5a2fbc6594d"],["/tags/hexo/index.html","c22661b26f8447733b03e044825d6818"],["/tags/idea/index.html","6d4a7daa0694761e143b49b7844d8a6a"],["/tags/index.html","9aa609485e13e504821240b43cf0685c"],["/tags/list/index.html","cefbfe15c131d9eaede861ad85103296"],["/tags/map/index.html","054bad0f4377d75ad37b8ae8eb46a240"],["/tags/md/index.html","43968be9510ab071bee40d6a79a499f0"],["/tags/module/index.html","64aba101c232a04f7fda6b6f3e077083"],["/tags/reprint/index.html","9a16d54601488315d3061fb606fa8da4"],["/tags/set/index.html","968885a2d2b4b0f7d85f67d61251f2b5"],["/tags/software/index.html","d2708e24559b439756ff982e37d52f4f"],["/tags/springboot/index.html","6ed742eab062528ea5d19e62433c8ee2"],["/tags/ssm/index.html","c651b9437f9151d06e80d3afeb4a8bbe"],["/tags/summary/index.html","56ef75feb2c60237a228b3937cd28d12"],["/tags/thread/index.html","dbe8d4813a5d566a2563a470b351edf3"],["/tags/tips/index.html","ea384ef9ad2aa43fec1d9b1d758cffce"],["/tags/un/index.html","d1507af22722a1e7d97e9f46f40622c3"],["/tags/并发/index.html","d34684e5f635c0c7f1867dffeefdb22a"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","deb6bee20249d8924f26b43829e8f267"],["/面试/知识点.html","5efd577d77d1d1922fc1772b8c6c1285"]];
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
