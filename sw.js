/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","607e441a0dddc0196b92b07354fdabf1"],["/about/index.html","a8fcfdfe2ed31e3c7a9c207cee8e51ba"],["/archives/2019/index.html","3e21f94a751e344bc9e439b8e1e3c897"],["/archives/2020/index.html","975769f4116c46326d2ac282186532af"],["/archives/2021/index.html","ca77b2279b3508d61e33087cf723d94e"],["/archives/index.html","e49aaf50236385c8c0206c283edfff17"],["/categories/Java/index.html","041757c4f40d683722da64bfd9091431"],["/categories/algorithm/index.html","51c1d5640520b1189e888e30b8c11dc1"],["/categories/blog/index.html","86801491cbc68d3e1841807baa2a99d7"],["/categories/front-end/index.html","3ad2b07e3ebfca7fc2141d90c0ce1f71"],["/categories/index.html","f71a62cd6f4aba96646c9189acf70d25"],["/categories/linux/index.html","bb0305f470d90051c97d31852cef9687"],["/categories/mac/index.html","5df1b976752ff58c4e0aee11f71bfb4c"],["/categories/mysql/index.html","5b9dd9c2c35d0c65e350b01ffafc0534"],["/categories/network/index.html","c8e5e07b6c7b37317942ddd4e4ba7e41"],["/categories/other/index.html","181b830a062a7ad2bc496c224049a626"],["/categories/win/index.html","6cd30f3a7f0b21182dfd5d5a877c272c"],["/css/main.css","383c540a1751fb757b02f111df376f76"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","0ca0c988517d520a2dc265708b7c0f83"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","60527e18f50daf87c2bdc445498bc13a"],["/js/src/algolia-search.js","d831246eb4a0c07df7d9620aa94dc918"],["/js/src/bootstrap.js","fa9a7ac6f440026d3821c9be2dd10858"],["/js/src/exturl.js","ac5f29dfe713780832d696ac8b5f4d35"],["/js/src/fireworks.js","315b74974917abdc51ce6ad3feead4f6"],["/js/src/js.cookie.js","16f14861cc8649cc1d1f6667e4f8521c"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","a583d022a0930a7a131d6fc8285da446"],["/js/src/post-details.js","4cd8baeab6147d86c481dc629d960ebf"],["/js/src/schemes/muse.js","671314328ca40eeaecaf00343f89d7b6"],["/js/src/schemes/pisces.js","14f3744576d478300b679f9656f8cd0e"],["/js/src/scroll-cookie.js","93535b3c7057054b784c19aefc2768f8"],["/js/src/scrollspy.js","7d8cf369229430a173ca8e7505b1f569"],["/js/src/utils.js","1a58176e0f64062192bd58c21a61229f"],["/lib/font-awesome/css/font-awesome.css","20c618eccfa5717cc0284f2cae8962eb"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a4631a89330d2ddfe24fb7a85635a10b"],["/lib/velocity/velocity.js","3a5f958bb7fb355d212c4a3f61020914"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9a147973e0de7b80edc6708005e22608"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","6502472ee779c2d76b06a2353638b018"],["/p/1136132855/index.html","5f8ce065cff3dd3311489c10a33a2b05"],["/p/1243066710/index.html","d2ac8bd22830329051d32947dd2f5206"],["/p/1326311149/index.html","fb773ed4ba658eaf6afd59733604d42c"],["/p/1330414162/index.html","0e788edf5d2e92af010b1fc679eaf25a"],["/p/1507653627/index.html","018f9429e2c3d34fc36dffb007c50b97"],["/p/1616465807/index.html","3630d0ba6fb95dbc85b9fb7a1eeeb45b"],["/p/1925762643/index.html","2b83aebb7cbce8e3692f0d35a41dbb50"],["/p/2027328352/index.html","f106fac96e8aae1586ca915930cab558"],["/p/2054314647/index.html","e7de49bad7fd560b91765c6844553ca6"],["/p/2094704911/index.html","4bf59e7cb678a1a431540a1bbb2c4193"],["/p/2112220981/index.html","c66f63a8ea2b0dc9f27dcbc7ae4562fc"],["/p/2112220982/index.html","c7dea34a0a0bb05c83f4b86a594ed5fb"],["/p/2480269034/index.html","401264f7aee83f7d9dcb60e64ec2a692"],["/p/2595394334/index.html","e7ab9cea5cff47678771589484e5f118"],["/p/2622962694/index.html","a0d148e08530b61103ebeaa7eaf60349"],["/p/2914875511/index.html","1f11b722537040d8c19c6df2c7c421bf"],["/p/2993615910/index.html","e636aa94cf1218ce7bffd0d55b98dac9"],["/p/3216883251/index.html","388b2257d5d97bd1ee71c2c065c8984f"],["/p/325336281/index.html","551a4ba3bebef95a84ad22709a9b3072"],["/p/325336282/index.html","3681242e92ee768e1f5e20ff8124797c"],["/p/3310093647/index.html","abb6e1bfb2813bfe11a2ca6a62f24e15"],["/p/337471241/index.html","ac872d833fd7aad6d8290a53d270eae1"],["/p/3535319776/index.html","7a6302c8e882588171d3feaa361c27ce"],["/p/36920602/index.html","0da049b2db225f44388bda97f66ff93d"],["/p/3741091999/index.html","b04498e10c8734f803e9818f06275101"],["/p/3811859892/index.html","14021ee73092a965e66bb57c0113321c"],["/p/3871219887/index.html","2785655e3ed59fa8618331fc0a017f31"],["/p/3907919010/index.html","0195eb42083831c579b4cfa7ca96b015"],["/p/3958123573/index.html","926bf69f9f8b79bab8e25677a4abd6fa"],["/p/3960214993/index.html","e34fa2c7f55f8eee7306a4d028f2934f"],["/p/4048823559/index.html","ba45d537007da273773d0c51c67df657"],["/p/4159564062/index.html","b89e15b42c95150627bc36322ddc5966"],["/p/4288673006/index.html","bda36f3b73db5ac5c32ee52babee9be3"],["/p/556968818/index.html","d5946c7bbf2732c0a2f37b43f9e46f22"],["/p/739861978/index.html","518ab624a3b9c3e629fce6b8ec78fd94"],["/p/850238276/index.html","a864212d1ac1c1db963c129818694d16"],["/p/866021247/index.html","a583e315b1db3e1162d7675b95c293e7"],["/p/964429882/index.html","6fa24ce7fe8f14f3a766134fd50004bf"],["/p/985515144/index.html","150fe172e7640da65c1b36286f561079"],["/page/2/index.html","66eb531d91e609d4b9f2c178d9b71c53"],["/sw-register.js","2bb4c19b40a928313964ca5eb3dd123a"],["/tags/JVM/index.html","37906e7038a23939332b99d783315f58"],["/tags/OS/index.html","ed056da251ac572a63f9163ac275eacf"],["/tags/a-recommend/index.html","dc280dba4a393236c771ea41cabf35a5"],["/tags/android/index.html","e28bc07f0fc131044156b5b152e83581"],["/tags/annotaion/index.html","e65c17c859f67e69747394c17d6778fb"],["/tags/array/index.html","2ee077650f087297d6d99403e57b0bf4"],["/tags/audition/index.html","fe8a9628694471f7f01c9ab2e2195a0a"],["/tags/demo/index.html","40693eed9e8cb9e4004fce7e7beb05c4"],["/tags/git/index.html","05333a9db5c87740b4300e8f7580f16f"],["/tags/grammer/index.html","19fbfa06fcbed04d7e3babf587fec0a7"],["/tags/hexo/index.html","d07395acd835b396c5e2521873fbdc3c"],["/tags/idea/index.html","f3a6e0469023d32f4ff0f69f043b2586"],["/tags/index.html","8cc60a07e4d7b4b67a81ce2709c687fe"],["/tags/list/index.html","974ff30c1c767b9a3a4970a4804af4b5"],["/tags/map/index.html","e1d3dbd6844a23396b7457e2ddd19e3d"],["/tags/md/index.html","6f46f4996d09135d701728ba93cd8ae7"],["/tags/module/index.html","083716fa814cf7bd1c0f39810d29e4ba"],["/tags/reprint/index.html","784c42d6d226df0d237d44a402669b81"],["/tags/set/index.html","a36ba6d7854c13196469a47c8ed4b91d"],["/tags/software/index.html","3f1b4b9e1064452062a22c904ddb56d0"],["/tags/springboot/index.html","f55c9bacb616fc7e496079e1cbb7e8b6"],["/tags/ssm/index.html","e597c9ca68a43071e1d594942db13fd2"],["/tags/summary/index.html","5b40c9b07a454308c83e6bab0a69cd8f"],["/tags/thread/index.html","5bc283025b723f6dd0c9e9473b619849"],["/tags/tips/index.html","1e20326a691a7d601eb3537acdac9055"],["/tags/un/index.html","8a4b9bf243dedbdfb6a6a04cd809d4c2"],["/tags/并发/index.html","c25a9bc44cf8054f8173b057749daca8"],["/tags/脚本/index.html","179c7be6a50eff46d08de5919965fd78"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
