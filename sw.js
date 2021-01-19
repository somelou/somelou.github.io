/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e30c0acb5e3f76f16f323482c0a4afec"],["/Java/Java8新特性.html","f8e2c547d2a9add9ddb667b6946feb42"],["/Java/Java基础.html","3447a1fbcb237ec63b65fb94f6e5f465"],["/Java/Java基础补充.html","2f59a2d5f40fa35ee6f316783f77713f"],["/Java/Java多线程与并发.html","e58a82b3d19cbc6968b063f05a39839f"],["/Java/Java虚拟机.html","9194dfc0d64dc3fc90554a16098fe755"],["/Java/Java集合.html","381cba24f7a59868ba21fd3e53a4eba2"],["/Java/Spring Boot.html","84f6ef29bc722af9faf2418a9c7659ad"],["/Java/Spring.html","5a2440d1924a263e4300224799db6c94"],["/Java/计算机网络.html","cfd46c6a20724fadc7a15d83b4351018"],["/about/index.html","98bf5481c054a16a76dc248dfda286f8"],["/archives/2019/index.html","66855f4519300272f767063ff24e3c03"],["/archives/2020/index.html","aecc6eadbb7b48000e7cac1bb583d9b7"],["/archives/2021/index.html","61bb0eb465a7a7aed6417aa7adc61821"],["/archives/index.html","630124a0b41dc791acddbf23bd8d6ee3"],["/categories/Java/index.html","e89387da021f7476533397bd23cd3e64"],["/categories/algorithm/index.html","07421a35f6189923aec7994115be1ce3"],["/categories/blog/index.html","f02454cc7636e319390c008e8136b5fe"],["/categories/front-end/index.html","a090a0ffd825e7315a1c5cfcd5e738a3"],["/categories/index.html","d9159cc65a8ba0c0dde716f548bd85f3"],["/categories/linux/index.html","bd48d446cacde65b1e2fb571594f71a0"],["/categories/mac/index.html","520b90836b5a1320870737139f07ceb2"],["/categories/mysql/index.html","dd07a3df5a2680cae05c22e032af434c"],["/categories/network/index.html","ae9f9429f0924479ad001308f6fa8dce"],["/categories/other/index.html","6d52141efca518fe0e3be04bcef59f45"],["/css/main.css","ab1e2d05053219e5478ff4f46e5eb029"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","c92e46a3a32f5773b9a0b009ca143b65"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","8a43b7487d3c4a4c8187f06efa64c0fa"],["/js/src/algolia-search.js","bb184e85d019c831454530869ecb808f"],["/js/src/bootstrap.js","f7445dae79cfbbbe4f048103d34ef301"],["/js/src/exturl.js","9b9232ed67b42078b349b519007bd03e"],["/js/src/fireworks.js","788f110fac43b30a1f2d2bd076068d4e"],["/js/src/js.cookie.js","e1236aa382470d5aae49dc5596022f8a"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","49dffa9d5f5f4fe08f6a6812bc22cad3"],["/js/src/post-details.js","d4a99cf0795438d8022fba51e49242f6"],["/js/src/schemes/muse.js","044a5d179e5a95644505f93945f87140"],["/js/src/schemes/pisces.js","a707c053073d4aa584d77b6d3c8f28e5"],["/js/src/scroll-cookie.js","487b011db41ca7870e7eea352a394881"],["/js/src/scrollspy.js","e6ac1176a725b5ae39090e519c7dc428"],["/js/src/utils.js","37c247115cd6eb09ed3af5ea59e5e82b"],["/lib/font-awesome/css/font-awesome.css","be018efcf3991a42f021001d00adcdba"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","cbdb9b3e10e9f3027b81fe835ec2217a"],["/lib/velocity/velocity.js","b82c8b2913580f39a002c2271cf3a9a2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","dd6499318a23348051598a7479b57060"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","ff3efd4ab22b0685b6fc34e3a024eda8"],["/p/1136132855/index.html","6f20ceb3140a7cb0eee85475e929053d"],["/p/1243066710/index.html","b94e800ab9c644e9bed89463cc3ea9d4"],["/p/1326311149/index.html","fa7ad0c0a12a1ee73428bfd1136548fa"],["/p/1330414162/index.html","c2d714a84f86e8c72bdc0145202ba517"],["/p/1507653627/index.html","70f410b4d9b4ba9778e03d02e6cb3282"],["/p/1616465807/index.html","8cbd06157fdebe2b0b8421c74186aaa9"],["/p/1925762643/index.html","cc617bd1d28f4f86a136c616547bd0d4"],["/p/2027328352/index.html","743e350687eaea464395a71f371f1258"],["/p/2054314647/index.html","be970d2586b20c9f85534d479536ca01"],["/p/2094704911/index.html","c41880b5857e8d244ec8e891689b8e5a"],["/p/2480269034/index.html","3c37c69df24e74980df79664f18bd5f3"],["/p/2595394334/index.html","cdea7052df760590d159aede14359b65"],["/p/2622962694/index.html","3b5f6e2026a1aae05a7a1e6998975da5"],["/p/2914875511/index.html","7c247062027972d3d4d37ff71cbddf9d"],["/p/2993615910/index.html","3e2a47700b2ab75c6f1f9b2e0cb99449"],["/p/3216883251/index.html","c882020e87d0d311ddaadc1080830e2c"],["/p/325336281/index.html","73b3e288ade0fc39ccf4e7089b0c95fe"],["/p/3310093647/index.html","6cc55d85b5105506f396c3d0c26531bf"],["/p/337471241/index.html","d29189170914fa47aa58577c90c66077"],["/p/3535319776/index.html","dc29f7ff2db20e5d5ac1149bcd724ed2"],["/p/36920602/index.html","cbd7ac10edb6bef94f0f782fb775e9bd"],["/p/3741091999/index.html","9304887a103eaf943b18a72f396982a4"],["/p/3811859892/index.html","789862e79a1a873db5581fc99c0f9ebb"],["/p/3871219887/index.html","9488a7fa4182eb5c2975ee2fba53accf"],["/p/3907919010/index.html","77d8b31638e89b0a5444200a857351ea"],["/p/3958123573/index.html","33ac69ad46678e7dd6156f201082aebf"],["/p/3960214993/index.html","25459d2d4d4f17dd8bd5b84e8449e95f"],["/p/4048823559/index.html","5d65930ced927d4a2be1c478f412cf9a"],["/p/4159564062/index.html","eea14a95f68e780867e90e32e1842e67"],["/p/4288673006/index.html","c59952e52e8240bc3c612176a6e16632"],["/p/556968818/index.html","c4041906dda899f393513832a2e7ca96"],["/p/739861978/index.html","7d670ba9208bfb558c32d4b21bfe4569"],["/p/850238276/index.html","832c510b1bdfd353c91cb567a529752f"],["/p/866021247/index.html","0ff02ad9594fd07c071922f501168cbd"],["/p/964429882/index.html","f0a402873a05f0a40eccb03fc152b0e6"],["/p/985515144/index.html","bc42108827f1d2417fb63fd5fba0d6d1"],["/page/2/index.html","0da39ff90dd17b868863793617b510d1"],["/sw-register.js","a6dc396295cf4fa9e657a8d54ce3cc71"],["/tags/JVM/index.html","ba7763fc6506d696dc1cdf8949c3acc9"],["/tags/OS/index.html","8d8c3cbb100e9c1329fa94085a92428a"],["/tags/a-recommend/index.html","add16f30528f5fc460953ff34082c138"],["/tags/android/index.html","07e62200feee295b2167c8ef6947ddac"],["/tags/annotaion/index.html","ddbc579fbb257be745aeba2217663d02"],["/tags/array/index.html","5a94fda3be1345970ad20f86e3450db5"],["/tags/audition/index.html","12915e1a2c305c62865577f3303b8d9f"],["/tags/demo/index.html","35d9d9a484845dede76c3aeefbde31b7"],["/tags/git/index.html","3a00ab6cb9c555563027f0d12f53c5e5"],["/tags/grammer/index.html","2fbfc1cddd24d24d0ace52418403b70b"],["/tags/hexo/index.html","5cf2ce6af5b3ad8c3b4f50a7d4da26b5"],["/tags/idea/index.html","01f0c540af20ba0d5ed060bd6f096934"],["/tags/index.html","c0b9dd62c6ec39b970d45d694070363e"],["/tags/list/index.html","6e681377ea846e47ffd643356ffc9880"],["/tags/map/index.html","de0acdb83f0f3d3cbbcbac3e5cae697a"],["/tags/md/index.html","f9bef59a935f7be4e4b12de4d00b0fae"],["/tags/module/index.html","7b5954a6c7d06fa84b216dbca643d26f"],["/tags/reprint/index.html","e463f12490c4c8d9688a81e594e61773"],["/tags/set/index.html","1c867514d84b1c9fda639dfe979aee31"],["/tags/software/index.html","4605353e3160f2d323a97876c1734785"],["/tags/springboot/index.html","2abe7436677e1eb3375103e9d465bbbe"],["/tags/ssm/index.html","a9951f916aa5ca03d57a33bbb3f569d7"],["/tags/summary/index.html","c4e7a959eed8d44c98fa832d1395df3d"],["/tags/thread/index.html","65b22d908e3f2b8458397b251c828d47"],["/tags/tips/index.html","bbe3129e7a3dcb16952e28d351ab7cc5"],["/tags/un/index.html","9c99c65a9c07df594c8f00f7ede51f9c"],["/tags/并发/index.html","0a169290b769065f0b87eb569b7c8b34"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","5054246198cdea5c9d285645ee26739f"],["/面试/知识点.html","b470cb27c47b8b5f10c891d3cec76f25"]];
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
