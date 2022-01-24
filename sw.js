/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9d4930726bf575ebc8069e584a8688eb"],["/about/index.html","d7ba80f529cb02d1bbde44236d8ff1a3"],["/archives/2019/index.html","b2e8062f588e228bc5441f61a2ae5bbd"],["/archives/2020/index.html","d8b290c9f07693a3b97a873ef6eb1158"],["/archives/2021/index.html","c52119becd51ba4ae69eb97a2a597029"],["/archives/index.html","5ebfe0a5c5b5ac15d557677c82314c56"],["/categories/Java/index.html","a5f3192bd6a2a2a07f2a6b376114f097"],["/categories/algorithm/index.html","861b169245b2b08f54fa9766cfe04d98"],["/categories/front-end/index.html","1ba8ea89711e8b77f6baf48bda5d91ca"],["/categories/index.html","b472e6499b1a45fde17a12fd3cc95a57"],["/categories/linux/index.html","e69e8f020616ef43c6c423e975e1f093"],["/categories/mac/index.html","4a97b7d4817057286b9c8eea1bb4a050"],["/categories/mysql/index.html","b7749bcdbc0acdfdda9715a83f673439"],["/categories/network/index.html","1a4a17da354aef65bafa3060235f6c3c"],["/categories/other/index.html","666fa0744b0df540434a434fad839ab3"],["/categories/site/index.html","ad191d877e8d1ebc485af5560efbdbab"],["/categories/win/index.html","0f07629844c830d63b3a378951e26a5e"],["/css/main.css","d2efc8fe6ccc85944b2f9b23aa1716b4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","568af0b7f137e2a2a13fd5c04302e884"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","14aea270e33a50c37f42b12973235f75"],["/js/src/algolia-search.js","ecee7aa2974e7deec484d285188327c1"],["/js/src/bootstrap.js","9c6d08b87f6c3754ec2888ae7c33aca2"],["/js/src/exturl.js","29799ada8832039d1eec526fd094f7c2"],["/js/src/fireworks.js","662eb6a38a2e45f3a6b3bdcac33ca6ea"],["/js/src/js.cookie.js","0a4ee4353f3bafbc04399da4adc3fa5c"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","5da24b3692b84015ee5832e79d92062b"],["/js/src/post-details.js","35c5c8edbab64f1b25844408f8445782"],["/js/src/schemes/muse.js","b95a8dfae73b7cf0ddd9cc2deab59421"],["/js/src/schemes/pisces.js","6424314e809f48360e825e941cf63201"],["/js/src/scroll-cookie.js","3229767fbe2f98af15d1a7e7136e459c"],["/js/src/scrollspy.js","389bd54bcfd863bd78b6f4ee700053dd"],["/js/src/utils.js","9a9751adae7a62350b547219786dde1e"],["/lib/font-awesome/css/font-awesome.css","d88d69197d9832e898322f04f65bd6c2"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6a6fde3e1e24a0f03e6e15dc55b79d3a"],["/lib/velocity/velocity.js","4962b502fa0befa5969b390afa8f74d1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3a42bd8130fc267fc4ccfbc2c09db796"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","a9c1dc155c05468f2a4f07fba38ae060"],["/p/1136132855/index.html","fe7300bac8c4438f50f869a96e5500ad"],["/p/1243066710/index.html","e298137640b43f7ada824cfe1c57cb59"],["/p/1326311149/index.html","fd9326848174cc1587bdbdede84866f6"],["/p/1330414162/index.html","0e534a3e593585ea07b7091e31cab6b2"],["/p/1507653627/index.html","492c0cd19db4bc579f2e3724dd7a6dfa"],["/p/1616465807/index.html","45f6a63b17e73422c1a5301455a018ca"],["/p/1925762643/index.html","6863554367a33fca16e18d4904e5f3bd"],["/p/2027328352/index.html","85798d5fa28c3b0015a475345b7ffec6"],["/p/2054314647/index.html","94a28ea9a4017610abd34c1206721dee"],["/p/2094704911/index.html","8babecfaebc34663349038405d151813"],["/p/2112220981/index.html","249171f95898cb6e08c2b0516b505326"],["/p/2112220982/index.html","5d036b12dc4eeb99e8efb779bc93b8b7"],["/p/2480269034/index.html","9bc33e787245ef0e839a89012d8eb2ab"],["/p/2595394334/index.html","41a05b628f870c9336f52eb412fcd976"],["/p/2622962694/index.html","b6a3711c215c13784f7dca98d21ad6fb"],["/p/2914875511/index.html","6b74e6d136528ff8e0af77af7a87eca9"],["/p/2993615910/index.html","8450294dfaaa023ccdf5b305c054a4c3"],["/p/3216883251/index.html","326254dce031730c05489e19ca280899"],["/p/325336281/index.html","eab43019bfa6f628486f1591f1add361"],["/p/325336282/index.html","bf7cd52c0ec48398ea7008aea61c20b6"],["/p/3310093647/index.html","3142b1a64157cc8faf03237538c28e7f"],["/p/337471241/index.html","186686b96a39e25f82f271a39981c9b2"],["/p/3535319776/index.html","d7c4301313c59d29270f7ce4fd251496"],["/p/36920602/index.html","9d09c402e4860cb44a0581296e9b9fee"],["/p/3741091999/index.html","81c1dbfba8fd4552228311ebef3298ad"],["/p/3811859892/index.html","29aaee56788e4795e8a19101a33b6831"],["/p/3871219887/index.html","398fd6f8f735cbda94493be5dad6b060"],["/p/3907919010/index.html","a819d753fcfa266fee51b4f879f01a92"],["/p/3958123573/index.html","23eedab0a699dfdb07143d3ae79deeae"],["/p/3960214993/index.html","5fd39a4b961d90f37b8e3f9ea4af196b"],["/p/4048823559/index.html","90dc79945764a085daee545ee9d24254"],["/p/4159564062/index.html","b38f7ea5b71ae4fc8cfff5206e4683d9"],["/p/4288673006/index.html","4ec7e2608ba87249d408036a77206abc"],["/p/556968818/index.html","7ce528cc4836fd42c34561c17c4fd3be"],["/p/739861978/index.html","825df4dc0f20548aa76d8c27c6d2c6f8"],["/p/850238276/index.html","4939cbe81326d8597de21d0de7ff714c"],["/p/866021247/index.html","1ad33f321c6e3ea1be2d01a5b422f764"],["/p/964429882/index.html","3c85838743fb55fb2e18958c45f9d77a"],["/p/985515144/index.html","85b6cdef0d4935a2a03bd921f09da92c"],["/page/2/index.html","c1646a9cd16ffc4ea59d6a1f93cfffe5"],["/sw-register.js","9884a952f72a8425f04be0408cfa2ac0"],["/tags/JVM/index.html","1ffcb190f8fbb70762151d5378d4363d"],["/tags/OS/index.html","4f886faf42c55c0775c433f0eeb46f80"],["/tags/a-recommend/index.html","adb035c47cf05da615f38cc3fe0cf40c"],["/tags/android/index.html","a9a3020cef3e08c517a32ded378036dc"],["/tags/annotaion/index.html","9c81bb8f0147a80563f313fcf374f7b8"],["/tags/array/index.html","27c9f4a8fb8f8a39514c82964f773e01"],["/tags/audition/index.html","eb15bd9b835c6c480cd191d5d1c64fcb"],["/tags/demo/index.html","3fc33a6699479f123c519685d7c50a08"],["/tags/git/index.html","a2f4ac1e29f37f231e55d9ddc3a842d3"],["/tags/grammer/index.html","0db10f434fb40eb4b66367eaed24d529"],["/tags/hexo/index.html","7d2059ef720ca254d435b0898fdbce6a"],["/tags/idea/index.html","9e1e21dc2dec24f1eeb4786b9ae3a2ea"],["/tags/index.html","22356c77ac6e32ea90be5b60ce36a0b3"],["/tags/list/index.html","45c9430541dbe06d7b6c6c5b859f2ddf"],["/tags/map/index.html","57ac5ea2307f9cb9bc4d25b031231e85"],["/tags/md/index.html","ce7bb8feecdd962bab1bab044eb770fc"],["/tags/module/index.html","4ef0591ea87e0a7fc98c74ac1684d4b6"],["/tags/reprint/index.html","6d9c40e0a61bb53a0dcd5aa94a888fe1"],["/tags/set/index.html","b8bfcf1d27af1fac6ed87059a4328cd6"],["/tags/software/index.html","5e85e3367f4ceedb666a40c6e00dbc02"],["/tags/springboot/index.html","07177b912b06d547c6e7fe252938b5b0"],["/tags/ssm/index.html","c9e73391968e571802c01650ca6f4770"],["/tags/summary/index.html","2bb36209dd9089c03b3491beda7a7cff"],["/tags/thread/index.html","df98a17c397e36d3dab0ead2ef825e1d"],["/tags/tips/index.html","01d4de0c4d9c3b18a3619cd42584e2bc"],["/tags/un/index.html","ceed839e45dbb6d32d9ba5c389c1b79f"],["/tags/并发/index.html","08da7dfd61a0dc1ba9924f9d8be23462"],["/tags/脚本/index.html","f9215e9b82020b666346a6ff88923cb8"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
