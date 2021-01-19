/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d6d16a8123a14b4a931ed707155df320"],["/Java/Java8新特性.html","a535247dce3bf8fe4ffd64acc2da3d6a"],["/Java/Java基础.html","fffb290c09c105a7b0be2e0ca5566b12"],["/Java/Java基础补充.html","11e01c635a52ccc2beb7bc0c0da199d1"],["/Java/Java多线程与并发.html","f407be9311299986bd500a1786e79e1b"],["/Java/Java虚拟机.html","61eaa80ff1cf4a5c536176df29cbb350"],["/Java/Java集合.html","7ddd3a846a70b79b804eebab6f440f8d"],["/Java/Spring Boot.html","d379ca602d69d71e369a0c17b558c3dd"],["/Java/Spring.html","2a084960b6be2928dfd26747b95311f0"],["/Java/计算机网络.html","f397ac1a5c5d70cffc2fe956b4bea12e"],["/about/index.html","87d70c997149aab5e333d26d1b9880e6"],["/archives/2019/index.html","29b09195a33d411f990f2a4c65558e75"],["/archives/2020/index.html","cb0cf26ffa7944e10cb5396253bfc076"],["/archives/2021/index.html","b2d327007c055b2405d4818c6d59d422"],["/archives/index.html","16dfd61885abd6dc964e55beebed6ab1"],["/categories/Java/index.html","153bee351efe59280c241dbe955075db"],["/categories/algorithm/index.html","4914767499cd5944066ffc7240797317"],["/categories/blog/index.html","0298db92430a9d31db8b447a573bb796"],["/categories/front-end/index.html","95015df5f2570cc5fbe9978fb47bd643"],["/categories/index.html","668b7b87c4c2a2884685c03cf4192ae7"],["/categories/linux/index.html","e9f429307de7e57bdc3b52de41ebacb3"],["/categories/mac/index.html","fb26cf5b2275058de44b30b401bcad63"],["/categories/mysql/index.html","b97c813c01df3b995d751c7f0e1ed96b"],["/categories/network/index.html","5e28d82bdd63213a78d56f637f92712d"],["/categories/other/index.html","d5dd589c44498c4f84e32bf13caa0774"],["/css/main.css","d48fb1f59af047c8a15246d2bb5b882e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","153fd99bb3e60c634656a5ad067af506"],["/images/apple-touch-icon-next.png","c59821d0b9611c436a5029156db025fd"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","36fc7dd573fdd93897d1a91f56249109"],["/images/favicon-32x32-next.png","7e94f6485e0b023a8e0a4d5aefa4fb82"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","7d6993afb21e513b09e9c865c56eb9dc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41a9c79abbd83d0f9cbc9d9136696fee"],["/index.html","1d680f1f6640fa39d78bf29954d922a6"],["/js/src/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/js/src/affix.js","71767dfde1cd24fbecf2a29942042df1"],["/js/src/algolia-search.js","8afa624e075ca0b74a74a2679ae019f1"],["/js/src/bootstrap.js","f653a6a73016c4743d49beb765f94dda"],["/js/src/exturl.js","851dccdd039bcef6a9bda018393af7bd"],["/js/src/fireworks.js","61189c10cb39f31acafe5d2fe00d51ad"],["/js/src/js.cookie.js","651936e6c2d17ba3509047981bcb7db3"],["/js/src/love.js","c065a075ee020443ad0798aee8f1646e"],["/js/src/motion.js","114952ece4d749fc9260918b204631cf"],["/js/src/post-details.js","c3b27a755ba2ef0ac5558b396c2bbd8d"],["/js/src/schemes/muse.js","d66295034cf3207edfcce38909940508"],["/js/src/schemes/pisces.js","41d42d47c68615f546c82f0f08c20f05"],["/js/src/scroll-cookie.js","721db89b5c05b8e85851acc064a42e1b"],["/js/src/scrollspy.js","82666e0ad7eade725d8132d93503f900"],["/js/src/utils.js","b50a746222454d8e392cf22d32a48082"],["/lib/font-awesome/css/font-awesome.css","43de6217725b02a56b72c087ab4b494f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1e661f573c0907fa38b0734aa3a5567c"],["/lib/velocity/velocity.js","ac1014d3cdbad3e0951b120b9040f13c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","012df475782be6dde994c91502d5735e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/p/104474348/index.html","850bc2aebc2a377aba4988391955b3d6"],["/p/1136132855/index.html","41036a75af71005e454f835e08336cde"],["/p/1243066710/index.html","16adfa2fd4b71341955475b63b379e1b"],["/p/1326311149/index.html","f1f9897bf70bdaf03b50799043d5c5e7"],["/p/1330414162/index.html","89d2b602a8468aa42f30ab89b309afbe"],["/p/1507653627/index.html","858043b0668a2573ea6b663f4a4c1750"],["/p/1616465807/index.html","e4a9f09892ff0931c8ea96f0070132c6"],["/p/1925762643/index.html","d50b89c16524070f07130f3870f01d15"],["/p/2027328352/index.html","8337657e1fb4ac3e8f79d44223ddd285"],["/p/2054314647/index.html","ad4a2560ea96f79c7aedb47cd22b307d"],["/p/2094704911/index.html","d16d34316098e8d58975d64942209938"],["/p/2480269034/index.html","1868fd5b793e04f97155932900c447f8"],["/p/2595394334/index.html","0ce38530c7aad9d262df36eeee3a8ae6"],["/p/2622962694/index.html","efaee4b034a722be621d2723eb66dc79"],["/p/2914875511/index.html","7fc6e946676c1555d3e18121bae5cccb"],["/p/2993615910/index.html","59ccfcad414c1835b9f2afd8bd827d73"],["/p/3216883251/index.html","7400497377a35efa6b8e7b97536ce6ed"],["/p/325336281/index.html","fc6c5338615a33a36c796b5568055b1b"],["/p/3310093647/index.html","b328ac40b09a4ebf31f10138c24fee7b"],["/p/337471241/index.html","73e5f2c31208f7d031e2f13657d07d18"],["/p/3535319776/index.html","c8ebbcedba0d36638da1a569c27df6b1"],["/p/36920602/index.html","93a0f84040afa22eea20bf4f85833d80"],["/p/3741091999/index.html","bc6af3aaa383993eab4eb8e93ab94dce"],["/p/3811859892/index.html","36dd665abec25e930330355ed7f1e087"],["/p/3871219887/index.html","96e1ab022f5ccd2ad5a13b38fa172d6a"],["/p/3907919010/index.html","72a50594db68dba9f7de6b2f8cbed66f"],["/p/3958123573/index.html","a89b1df98222207c5a0b77482a2b0fb2"],["/p/3960214993/index.html","9035b5e92ea3bd9b2f902216d8db4441"],["/p/4048823559/index.html","d12b80f3458d72cb7f7928b5010b711f"],["/p/4159564062/index.html","bb013ad88a133be090c3636b69a148a5"],["/p/4288673006/index.html","a30d2b9524748e11995c74bc75335641"],["/p/556968818/index.html","78dde00a52077ce221176a39441fd1c7"],["/p/739861978/index.html","dc28c42b055958cdf04300f0dd4f54f8"],["/p/850238276/index.html","97fc80e74cdb7709d0685b7815ebc463"],["/p/866021247/index.html","2e8b805a49f7eda330fcf2eafb8ed01d"],["/p/964429882/index.html","ecd680c306a0cce3163eaf9048886774"],["/p/985515144/index.html","5974a151487e2861e49981ee01be9ffd"],["/page/2/index.html","c6f4db255b673494b7619eac4c975121"],["/sw-register.js","151813a230632d1fac0912a8773bbb65"],["/tags/JVM/index.html","9e7d9530c7a2972dfb460c9919114bae"],["/tags/OS/index.html","11a21b98f14f533a057bf7bf231114b3"],["/tags/a-recommend/index.html","30a3aa4af0dcec66bd40526c53c4df8a"],["/tags/android/index.html","b3461c9d96bf8bc06bd2406c3863efc9"],["/tags/annotaion/index.html","9ad07bc7880a87218c5d01fa02152b44"],["/tags/array/index.html","b1b9be84144a179b025d52d8eabce0a2"],["/tags/audition/index.html","c37b2cc3b418be49b23f1971df6c0d46"],["/tags/demo/index.html","9cec584f7314adf168bb8ad5ce72c498"],["/tags/git/index.html","4307e32c1b7a8fbb7a27670a3c782d5f"],["/tags/grammer/index.html","8aba4ed32ad3a4ae124b7e8962dbf167"],["/tags/hexo/index.html","6f7af69900ad252d3ad64c20dab8d7ea"],["/tags/idea/index.html","e5323f37aca029432855ff351f560a0c"],["/tags/index.html","c7b0f04513896216f80c52b0c512a142"],["/tags/list/index.html","79e2677d59590a7828073ed42fcf5d96"],["/tags/map/index.html","64c86258a439f2932df342376907b139"],["/tags/md/index.html","753edfc3b3ad12f67fed051e265da63e"],["/tags/module/index.html","35662b1ebee9afee896db8f0968fc0e3"],["/tags/reprint/index.html","ccc4dfdaa878c8cb4664f5d9be46d417"],["/tags/set/index.html","f58e61dbdb2d04d85982beeb8b55efb5"],["/tags/software/index.html","9869ba6ccc53f54365c17531ea2857f0"],["/tags/springboot/index.html","079a59be74a03e201df231670ef9a6c5"],["/tags/ssm/index.html","268855dbeb5a91228777314da4e3de4e"],["/tags/summary/index.html","dab96f68e1ce1ec123dde97c427bdf7e"],["/tags/thread/index.html","883bbad499d80fe81f8a1e35125a0f3e"],["/tags/tips/index.html","8cf4583cddf873e6ce56cefd4575ac27"],["/tags/un/index.html","3b116aab6b48817571d56973613ae186"],["/tags/并发/index.html","547a11aabaa23703762ec42c464a9f60"],["/uploads/avatar.jpg","517631273dfb59a355a9cf961cfb1970"],["/面试/MySql必知必会.html","ae1c1764805b742f150ddf7e3e896a21"],["/面试/知识点.html","4f49a614403f2e6c3d6eec08c2698473"]];
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
