/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8f1e07b153a30c6fd49225ef4f679508"],["/about/index.html","31345714986d5d393ed44e2a88426dc6"],["/archives/2019/index.html","55e5f0268f3d1bddae3ded78412be2c4"],["/archives/2020/index.html","6b6022df05b0c3dca6b01cb52c70d735"],["/archives/2021/index.html","c9aca492df5ff7f40654371cc91094f3"],["/archives/index.html","9c26fcdc32c3baf5bdeb8ee9b1b821d2"],["/categories/Java/index.html","976362aec24da043e8fdc21c03386ad8"],["/categories/algorithm/index.html","da972ad31f0698802f66e4017ccbcdc2"],["/categories/blog/index.html","525ecf4fc004fcb92c17e44cc1faff4d"],["/categories/front-end/index.html","d4294986fd4c3b7b02c23460f2b849fa"],["/categories/index.html","bac7bf1e55c9c006c0f37f59f15fdd4c"],["/categories/linux/index.html","c9b4c33adcd91da058fab647f07b74d0"],["/categories/mac/index.html","d501626d03b27a7f6c96e1e595e0425e"],["/categories/mysql/index.html","72f9a718e8fdd6a6887d2121c89711d4"],["/categories/network/index.html","d5edc6a6bacd8e92b8ec4286b49eef69"],["/categories/other/index.html","7e86da79fbe116b2ed60eff9f5fab57b"],["/categories/win/index.html","77dc34bbd8f3588ddf7b1d6e51e7309f"],["/css/main.css","30691ce54f788f84fc27afdbf0c5eaf9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","24b0a7b68f2b75d0e2fdb45486dc0202"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","f6046936ee98147455f2f846e0fff03f"],["/js/src/algolia-search.js","e52fcf1a9fb99557cb7b27789921c554"],["/js/src/bootstrap.js","2c0563e6bfd0bd150cf0b47ccd64dd29"],["/js/src/exturl.js","2d4f9f23094d88bfd50ef10eb3217d75"],["/js/src/fireworks.js","225a60278507d5a27dacf3fe7f27238d"],["/js/src/js.cookie.js","34c48c9d6850ca152bd53f5e74d985e9"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","70f604f03bbcfa958c7d66180cde0721"],["/js/src/post-details.js","91c57c1d82b2d48d2310c4bfa1e027d8"],["/js/src/schemes/muse.js","6e4af219ae51162cef4ae6c9878354fb"],["/js/src/schemes/pisces.js","fdb8cf1a05c51fd927909668c956fbb7"],["/js/src/scroll-cookie.js","a41133b701ddbb251d2f1761942d7e3b"],["/js/src/scrollspy.js","e64db508db02cc22043e906d597c9f85"],["/js/src/utils.js","d02624f0d8b41674df4560215cec77fb"],["/lib/font-awesome/css/font-awesome.css","f2cc357dd7a208428db399f0e460eeac"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4c80d60c30aeeafae72e3064a194318d"],["/lib/velocity/velocity.js","f838539656e74bf4db7a1e2b12660794"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","31de143da0abdf7dbf557231306c21a0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","708a9bb247726c5b701b4371d689d2d9"],["/p/1136132855/index.html","2820170361d501adc9e0e53fbff8e233"],["/p/1243066710/index.html","a5d17e3b265b37857cece5f668aff913"],["/p/1326311149/index.html","8a34c1748a4a4507174eacd1b6c6e226"],["/p/1330414162/index.html","d8eb2db36c214b713ddef0b99055946e"],["/p/1507653627/index.html","322bd78407f663f610cd9df085a0c19c"],["/p/1616465807/index.html","8b6bc037abcafa6acaecf7d8849dd92a"],["/p/1925762643/index.html","59228a15438910ccef20a041b418e03f"],["/p/2027328352/index.html","ce38fbc425793e89e4ac4106656cb24d"],["/p/2054314647/index.html","5f5a3dc81b8afd3a51676c5225ea65a8"],["/p/2094704911/index.html","7da5d66e4e7884726d1b664ab74f5c96"],["/p/2112220981/index.html","d6100d7de83b61175120e8522f284d43"],["/p/2112220982/index.html","1868831c855d0390ffda46e094a9bf77"],["/p/2480269034/index.html","9285e09287d23ac37cc9163758eb2e63"],["/p/2595394334/index.html","eb73258fbf9f36b4284be99bacb0a511"],["/p/2622962694/index.html","d239ce295db33a717c903f1e483067bb"],["/p/2914875511/index.html","3feb685a1247ebc3c1ff28872d20b1d8"],["/p/2993615910/index.html","e72ec4e0fa8e1a6ebdc3e7f30ac0cad3"],["/p/3216883251/index.html","c960849b813076261019fc4fc9b24a28"],["/p/325336281/index.html","55a8bb589af1b479e09c7313e83a5912"],["/p/325336282/index.html","b2749689400657639d9ac96c1cec58c2"],["/p/3310093647/index.html","b0d85be1a87671275d346c0eda55eb8d"],["/p/337471241/index.html","ba553d2996e878394651c7e7121e5dce"],["/p/3535319776/index.html","b07eb8664b13cea9641e1c041378b772"],["/p/36920602/index.html","331c4d1c4b58bbeb81c15152fdd05c5a"],["/p/3741091999/index.html","b3f96d3685f2c716ab5e1eb00d547c5f"],["/p/3811859892/index.html","ca5fefc50ea0fb556fcc4026a08c14e0"],["/p/3871219887/index.html","1f3db161ba8983f8c919dcd70c730170"],["/p/3907919010/index.html","b8ec27a7d7133ee3b1a2f10e3c65a98c"],["/p/3958123573/index.html","31ed891bacc2f56c24539b4e19c40f6c"],["/p/3960214993/index.html","0d828fbc3e9d4c147a8258f9e12f2355"],["/p/4048823559/index.html","dd3382c8c661ce79e2bb865449faa87e"],["/p/4159564062/index.html","1e7696476b98d141da2ee261066d15c5"],["/p/4288673006/index.html","85f6ad63c32ad58f5919db751a7a7dd1"],["/p/556968818/index.html","4e774213235f170715726e6e8bf04abe"],["/p/739861978/index.html","29da4734fc63dc7d4dded71340bd1bba"],["/p/850238276/index.html","04a975012d973c906fb9efac792341b1"],["/p/866021247/index.html","e8670a69c39c1b25444005e092f622dd"],["/p/964429882/index.html","3426584c868f643166b9878e4e1b3892"],["/p/985515144/index.html","32a1cb335dcf874e0fab3a61fa2bd0da"],["/page/2/index.html","c9acb71a964441b13cb2e0c79b105434"],["/sw-register.js","51108269a45c898475a1d147b4014397"],["/tags/JVM/index.html","4ae055ebf94a13150a327b2769b66a87"],["/tags/OS/index.html","797333b642a93c1746826e8b7f8f6721"],["/tags/a-recommend/index.html","5c4a0a0079fcce3a92413afe6d3a8708"],["/tags/android/index.html","86d708d63abb365b8369b24a7f8a49ba"],["/tags/annotaion/index.html","59aa6c68ca8ae3a9c7e33a033242cb13"],["/tags/array/index.html","f4f6d38dcc844458177487d9b7615632"],["/tags/audition/index.html","e869c1dd284546e9085821c4772829d6"],["/tags/demo/index.html","7b040b406936b07c5cb57f1c9fecc271"],["/tags/git/index.html","f8b06ce62ef9af4d2213e7bb8d877641"],["/tags/grammer/index.html","4e2705e29ac76a516d7b4ea90fbcd24c"],["/tags/hexo/index.html","a0f647998162503eecb56f3bd96dac2f"],["/tags/idea/index.html","b7c9d28e67496aff493d9436156f52ba"],["/tags/index.html","70109688fe0badad905ad07237bf7d5e"],["/tags/list/index.html","b0f735e32e21d8e3a2b0736ca32339b2"],["/tags/map/index.html","7ff6dc8e3ab6487260ddad2dc25852f8"],["/tags/md/index.html","1faf37e62d7a182949928bc9a76c28bc"],["/tags/module/index.html","2014f15fadc040c6c1c6622de5364796"],["/tags/reprint/index.html","dad0fd36074be8f0cfe3f5055c0830aa"],["/tags/set/index.html","a9c302f91d09d29822539558f3993c31"],["/tags/software/index.html","bf7138ad4dd880f565c965e61a6f822f"],["/tags/springboot/index.html","c8fed163be26ebf4f256d0239dc876f8"],["/tags/ssm/index.html","8c0074a215575bd5bceeb78b0adcb2dc"],["/tags/summary/index.html","5f61943160638268f7ef1f760ea41757"],["/tags/thread/index.html","b4eb67a19a769f3bcce7b7b491ba3932"],["/tags/tips/index.html","39e4d334645a29ed11c0b80b068fe7eb"],["/tags/un/index.html","df3abad23ee25a7e14eb697570417c5e"],["/tags/并发/index.html","cc637efca35248649c054e4eef79247e"],["/tags/脚本/index.html","25f90d331503fb34974cf30860472471"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
