/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e24d94fd172002a67bf9335cf2150b1f"],["/Java/Java8新特性.html","abeb465736b157f56fb282d119b4961d"],["/Java/Java基础.html","18d1c5252d46a4d83c4e27e528d8a658"],["/Java/Java基础补充.html","77b93ad1e638aab1ef08a849f134e5ec"],["/Java/Java多线程与并发.html","87d23c7eedade9392f29530113d5e3fe"],["/Java/Java虚拟机.html","52426c2b19549a004a637fcdca1e0979"],["/Java/Java集合.html","beb3691106fcb05e6e90c75acfb64116"],["/Java/Spring Boot.html","90e8e9be3b6278cd951ca7c99593fe96"],["/Java/Spring.html","575ee6c0900efb427f04f8d08a453034"],["/Java/计算机网络.html","1b6404460b676c65790b6d4875d22005"],["/about/index.html","4f2b116e6aca2eef81ca51bdda1a183e"],["/archives/2019/index.html","dc67ca1170954add032c18e67090ddb5"],["/archives/2020/index.html","ca06da88688ed1b7fb62f7a66002a858"],["/archives/2021/index.html","c44ed8b5f5d7573aedf1563ba0a9e098"],["/archives/index.html","a2b701fe36b2d7f81ae647815f47ca8d"],["/categories/Java/index.html","974b595b9133345b67d6120a76c2070d"],["/categories/algorithm/index.html","c3e277d5800f5bba026eeb143b208d80"],["/categories/blog/index.html","7f22c3fd1804c1efc48afac8dd62bdf6"],["/categories/front-end/index.html","8e8bccaf166abd28b4dce02fbe786b73"],["/categories/index.html","773b399cfad81104368bc8817463df8a"],["/categories/linux/index.html","736abb4c9759c52cbc160320b87a6eda"],["/categories/mac/index.html","4dd20624dc8626c541dc711ac6899c30"],["/categories/network/index.html","861508505f45d722cca2698995fbb0f3"],["/categories/other/index.html","9dd59ab078a37468bc63710f1292d457"],["/css/main.css","9ccdef6f168579c6cd1c46f7d87d61f7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","c0374fbe017da4c3471887055be63c16"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","5ba6e01c6b60ad8e05149c7b75cb31f8"],["/js/src/algolia-search.js","15fab22923bf622c30dbbb1eb0a4248e"],["/js/src/bootstrap.js","a53dd4701c5fb476c9c559eaacb193a3"],["/js/src/exturl.js","6237194b8f89bbe4ca4b40f2e6d4eae6"],["/js/src/fireworks.js","c7bc8675d0c70cc898675b84833de2c5"],["/js/src/js.cookie.js","8beba37cb80ce32b76536e5cf089be27"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","838f83e6e3dcda94b669ac2a195da2c7"],["/js/src/post-details.js","90c044e40567fce96aa0ed97e5045445"],["/js/src/schemes/muse.js","22c2590d0ed46b5be74fa1dd19484b17"],["/js/src/schemes/pisces.js","605e09e5491558fbf252cc963bdf9b54"],["/js/src/scroll-cookie.js","40c9b8ec036d3f4329b8d78735d7c5b5"],["/js/src/scrollspy.js","289a07fca5362ebf82e9c104017f4f4a"],["/js/src/utils.js","923ea3196574efcb0b7a091d1b87e780"],["/lib/font-awesome/css/font-awesome.css","3c5814dd69ecacccf928f70790a6241b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1649a55e16a06ebd34e7946c63a03c7b"],["/lib/velocity/velocity.js","50aa3e1f750b072bcdc23bd4306278be"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a9ca50674e1c91c9680c8e8e32365d8a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","359c8355754e029df4d126ffcfef4a8a"],["/p/1136132855/index.html","b21c9d840e218bab8072417f70879969"],["/p/1243066710/index.html","e26700539291bfe97f600a394954cca7"],["/p/1326311149/index.html","d4862ebf9a470dc953d82f06f1a60b98"],["/p/1330414162/index.html","7353521f8ab1537f22d25cfa49b9afc7"],["/p/1507653627/index.html","bd38dbe665ff56e3585cb4a443095d3f"],["/p/1616465807/index.html","6b518a087ce15badaff8137626ac171a"],["/p/1925762643/index.html","3e12449df94686a60cd20e8994aee21b"],["/p/2027328352/index.html","02712edb8fa4902886116f2b492dbd08"],["/p/2054314647/index.html","6ef1a91947f28d17f96fc432cebba19a"],["/p/2094704911/index.html","d89e7496c783004b0bf46ff5c15755d8"],["/p/2480269034/index.html","b1d74169299bf7b50edeb46114d43428"],["/p/2595394334/index.html","71c205561bdd9bf35deccbeb8024f21d"],["/p/2622962694/index.html","d3d4e3314ab01d9806e97042947d3060"],["/p/2914875511/index.html","a75a85978fbf9876d175684ad70de325"],["/p/2993615910/index.html","bb280b398d9b3a0551e54a6fcfc117d4"],["/p/3216883251/index.html","61715e0819a577988ccbfa18de5799a5"],["/p/325336281/index.html","9a243fd7f381ce23b2bf4d8464c978b1"],["/p/337471241/index.html","04a687924366c84be58ab1f2d57a1128"],["/p/3535319776/index.html","fe6a7de19a5ae1dc778bb9417979dc1a"],["/p/36920602/index.html","70eea787ecd9846d3d1744897b0a5ac6"],["/p/3741091999/index.html","491617deb0e002e578f909b5859684c2"],["/p/3811859892/index.html","e5e08f88d273e21c7c781331e0871689"],["/p/3871219887/index.html","f86f53365d1f5477e43424735e03a470"],["/p/3907919010/index.html","a982785aa23c259d952503f710acb47b"],["/p/3958123573/index.html","c130eb5e2bfa73369b86ccce16985c32"],["/p/3960214993/index.html","eff46b5b5b180e6792b6f474a272c952"],["/p/4048823559/index.html","81ee6d9eec7d1b34400eb95f75353d45"],["/p/4159564062/index.html","c5d34e560fb17e8bd3cb6af45a5b492a"],["/p/4288673006/index.html","011a102e3c6bdad66001c448e920bd11"],["/p/556968818/index.html","574b7f5fa316edccfd0cb4513514787d"],["/p/739861978/index.html","606cf8b9adadf8d552b6b7aaf783469f"],["/p/850238276/index.html","e71e86e820fb01c613a0776eea2aff0a"],["/p/866021247/index.html","67b98d1b362d1fb085036bd6d34847f4"],["/p/964429882/index.html","52a0b9882357d72c6840c6025d6036c7"],["/p/985515144/index.html","6fce573f8c8d297345b1d25536f613f7"],["/page/2/index.html","023797cfab105cd48d2a642eb0c34726"],["/sw-register.js","01b03074e4e3dc89fc9f249d60cb99fd"],["/tags/JVM/index.html","9d9e41836b410c51eb3573814f820586"],["/tags/OS/index.html","3626f826037195473cedf03b5b76171d"],["/tags/a-recommend/index.html","072f118c30ffd5caa8cfdf60887fe399"],["/tags/android/index.html","0dd55ebb11707e5ce1987f2e5a2ad515"],["/tags/annotaion/index.html","7e06b0b2884b11d1e26f1846868928a4"],["/tags/array/index.html","12cdd42830f81dbfb2e37610ad347ccf"],["/tags/audition/index.html","2454b3310688397690dfb89d54704b39"],["/tags/demo/index.html","74869d511cfec11ed77355a9889e8b94"],["/tags/git/index.html","9ae545b0852156e549f032968d735b59"],["/tags/grammer/index.html","f8b62e31c8b896e118754d26478e0d57"],["/tags/hexo/index.html","18bd73dc0c07da5ed0a7cff3826800e3"],["/tags/idea/index.html","adaa0d2e886a0176ec6ca7d558dfa329"],["/tags/index.html","ac1e0577ab24ece76568af22fbbbbaaf"],["/tags/list/index.html","624cb74d571f8e7e1fcbead7b6714970"],["/tags/map/index.html","c9124fecbf45a0c6694b2d816afff6a5"],["/tags/md/index.html","7a732441aaa5cc19dd7f8dccac141079"],["/tags/module/index.html","23f6095d482398916b2ad44e7ead132a"],["/tags/reprint/index.html","078bbf1765823723a8a76424b49940ea"],["/tags/set/index.html","c85d971cf218d12368160948f95990cb"],["/tags/software/index.html","2144ee289c81c9d79c571312269656e7"],["/tags/springboot/index.html","0948610380e7b164e76536cb8660c5b7"],["/tags/ssm/index.html","40c888ff72e71d8a879160c22f77d855"],["/tags/summary/index.html","2d2b28948266ef2ce3e031b95394baf5"],["/tags/thread/index.html","d8ceaa400d32ddea3fe212f653cc7ffa"],["/tags/tips/index.html","7f950046776bc5c8b0ccf991fdba945a"],["/tags/un/index.html","d6706b4fe05cd6491c07b94019040f29"],["/tags/并发/index.html","8482887e5c2d7481f62042a8ca84d4db"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","2bb7840acf40048ca9e3cbe475171959"],["/面试/知识点.html","95da982dfe4ac939b836b78226a4af62"]];
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
