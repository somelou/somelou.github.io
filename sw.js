/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","21398000b4966d9c863046f503787de9"],["/about/index.html","6ae407ffcd0226e7bbbc386e2a382e3c"],["/archives/2019/index.html","ca7af4f2dc63d160dd625ccbd9cfd448"],["/archives/2020/index.html","206949c7ba0b99cd084630be47139aef"],["/archives/2021/index.html","15d3bc0b6fae882aaaa3bcf19fed3d02"],["/archives/index.html","39124216a7633746cc89c436dc6381ac"],["/categories/Java/index.html","b0ca3b8d083a98d1c7258486823618d0"],["/categories/algorithm/index.html","b5258ca437e9cca3c9e32bb7c0a2cbe0"],["/categories/blog/index.html","6697d5c47d4fb2720f3b950b2e819a14"],["/categories/front-end/index.html","2672273d268cd576527a3fa12402738a"],["/categories/index.html","6a4af5390017509742778d0948c5042b"],["/categories/linux/index.html","5ea712ed7ffbd2d4790adb9985da8b77"],["/categories/mac/index.html","9cc1372798ad9bcd47c08b28037f1396"],["/categories/mysql/index.html","10e2bbeef78bbefab053cc5090ab6814"],["/categories/network/index.html","d985b9dfc0e8e8bf5c62d09808ba467f"],["/categories/other/index.html","7fc983c11c69a7858dca898eca2c2086"],["/css/main.css","973ea1dca9d30aabbe4ecbc61b8235ef"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","41d395d63dbfdaa4038fc37a0cfcf1ec"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","418dcbde45e53733c3d24dbd6bd61496"],["/js/src/algolia-search.js","28481076689dd9e73ef019d64c672aef"],["/js/src/bootstrap.js","94d7e3a5f58f418dcba72c9a4aa5182e"],["/js/src/exturl.js","e56b9b10ffecda95c2e5016af5fff18b"],["/js/src/fireworks.js","da37a56385efe1b5cd99f5b53ec6e3b3"],["/js/src/js.cookie.js","29521b2109bb89778097a7156ea5c5e7"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","a371da158df4d01b1ec3c6d015717462"],["/js/src/post-details.js","c40986454f651909840a891531e43251"],["/js/src/schemes/muse.js","4177a87d85a620965a85b9da807f61ba"],["/js/src/schemes/pisces.js","4e507289caec82be46541e2f447d23a0"],["/js/src/scroll-cookie.js","9ae2ca0f0d2dded913943df5182feb82"],["/js/src/scrollspy.js","be2a75e6fc3478f91788818c897ab184"],["/js/src/utils.js","e9c95ceb98314464dbac1ff8582f9a3a"],["/lib/font-awesome/css/font-awesome.css","ea1e64d3da8e7dc144036502e1561d14"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","82aaae9c15322de7c8516719e1c721af"],["/lib/velocity/velocity.js","13db6d61afda970ac601ddc5f19b1196"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e101473d641498997ca0e9cc2efa4c8d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","fe4dc3ea7a1402f16155bc5f9e2c6099"],["/p/1136132855/index.html","0e0b4c965b04d5d397cadc58a3688caa"],["/p/1243066710/index.html","9e4cd60c2391e2b8ab0c43269bec8c1d"],["/p/1326311149/index.html","72276a601007fdea5443d12cbeb56e92"],["/p/1330414162/index.html","2ebd89fdf9976f79e88f0e5e4aabb3c9"],["/p/1507653627/index.html","d6d9276d90fb7948a367c0e903aeacb6"],["/p/1616465807/index.html","f4c24158a8838301c7424b8f09c01129"],["/p/1925762643/index.html","e9b71f5dec180f8cfb512cf41f86b0e9"],["/p/2027328352/index.html","cbb971e2e572dc10d826eb9e4ab7484f"],["/p/2054314647/index.html","91e83f9b1d8eff3f315fe90412d6c13a"],["/p/2094704911/index.html","fe91a6a099532f7024bb78170e9a7c48"],["/p/2480269034/index.html","735769504796e6d3d6fd794677b4deb9"],["/p/2595394334/index.html","b1142b517aa6353905756ffb62552f4b"],["/p/2622962694/index.html","1f364b99ef4e926e722eef1c3ee48883"],["/p/2914875511/index.html","57d654054f8b37876a4538833a047931"],["/p/2993615910/index.html","8d704f6e0ae71b9ad9a03ef3643f2e9f"],["/p/3216883251/index.html","decd8ea2ed7fda36400eba4163e37138"],["/p/325336281/index.html","ed3ab1038dfe9ea2027fa135b8bfb7f5"],["/p/3310093647/index.html","b1fec62cd3f8f35db58b01d2ebdce973"],["/p/337471241/index.html","c050ee5c01d9bc2df38d42ad2378709d"],["/p/3535319776/index.html","8b4ca6eac6f8aa03903b14a8c0d9521b"],["/p/36920602/index.html","529dcd3181b3aa86ff80b7a034a85e66"],["/p/3741091999/index.html","eef8dff846467d18155b5da68d53873f"],["/p/3811859892/index.html","99aa43bf8a7a1b02ff1931443079b076"],["/p/3871219887/index.html","bf2ce4cbef981b0cd902465f0411e5fc"],["/p/3907919010/index.html","8f8c16413a302b28659c792f9d3dad59"],["/p/3958123573/index.html","7ec10da1bff32a0a2e90cbd907ce3a1d"],["/p/3960214993/index.html","916903dd24c0fa3de00e4b550af01ddc"],["/p/4048823559/index.html","9dc9f59384d01b3206e6a3dd47512f22"],["/p/4159564062/index.html","b1f09f4f2918da3d730ce15cbd786c35"],["/p/4288673006/index.html","f7169d638623f98b9bfefa90d577c9ab"],["/p/556968818/index.html","496e2bec3f4ba8306a9651a65e82eb6d"],["/p/739861978/index.html","173dc8d5e227aa7a9a7d97f4751f4164"],["/p/850238276/index.html","012225bc66a2ac038b659ddfad17ab17"],["/p/866021247/index.html","2ec1abea461fcf268ee7b5ddd9ceb5a2"],["/p/964429882/index.html","ba0ea49885bbc1fa14a93a2507490aac"],["/p/985515144/index.html","ef9664c7a02ac915eb018fe500dc32be"],["/page/2/index.html","678072f04972d30549e3706bf7f2a6d9"],["/sw-register.js","1c9e65a07ac0e53f65df4e00bbd689c9"],["/tags/JVM/index.html","da955ebe31ca4315e8f70fa696b0f827"],["/tags/OS/index.html","4663ee77db8f75448f2fdae74e09ae7f"],["/tags/a-recommend/index.html","03d1eccf05d8a2b7a63140998337540e"],["/tags/android/index.html","82441518f9dc2820341c0d5498543214"],["/tags/annotaion/index.html","d16ffef3845ee0dffe65b95b249de8d1"],["/tags/array/index.html","9662220981b0c691fd72a533b3011fe4"],["/tags/audition/index.html","7b16c7ecce67a12bf63e9d096ed8659d"],["/tags/demo/index.html","09739a41b13f495f4f21e7053c471d4b"],["/tags/git/index.html","c245ed0e4532fe6b7a554987c2054b91"],["/tags/grammer/index.html","35090d9f49a7f39a71d7f7998b650307"],["/tags/hexo/index.html","774f7c85070a39e5a7efe62aac6d3a06"],["/tags/idea/index.html","7fe3520b345c156aa2ba457a508a913b"],["/tags/index.html","425d682d53655d6a148ee3dd79231637"],["/tags/list/index.html","2a349fcfe5b69e275084b141d9cf3449"],["/tags/map/index.html","5a6b52f8ac8c6f69c6036a594ff53f3f"],["/tags/md/index.html","bf8bf5c1bc3fb3e622210eae420293f8"],["/tags/module/index.html","bc180c8618deea6296b6a9c76855a7fa"],["/tags/reprint/index.html","c8a6cc480cbb90b213f3775a6b15aa14"],["/tags/set/index.html","d536f25bae6291aae06bcbe8f6ec8453"],["/tags/software/index.html","d8f059d4ac0223c8eda45a613ff83e67"],["/tags/springboot/index.html","a91d24003d16daa912dd201db293d03c"],["/tags/ssm/index.html","d330c80cc91f713a7bfe7f49f04a44f2"],["/tags/summary/index.html","2ed37042d07be84d70737ebe72e1eac4"],["/tags/thread/index.html","b242b7d5ac7e5cc5001ae24ca3d946e2"],["/tags/tips/index.html","2078e62b020ff001d690ef91a34da932"],["/tags/un/index.html","fbd56aa835495c29cf1ef1f457b52457"],["/tags/并发/index.html","89399fe68cc08cd70d7cad7d1d35f31c"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"]];
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
