function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

//等待 DOM 加载完成后再执行广告初始化函数
docReady(function () {
  _PlaceholderadsInit();
});

function _PlaceholderadsInit() {
  //获取用户浏览器设置的语言，优先获取本地缓存的内容，如果没有获取到则默认为中文
  var broLang =
    localStorage.getItem("locale") ||
    window.navigator.language.toLowerCase() ||
    "zh-cn";

  //此处需改 data-id 为你的万维广告的广告单元ID，可自定义 style
  let wwadsDiv =
    '<div class="wwads-cn wwads-horizontal" data-id="116" style="max-width:300px;background-color:#fff;margin-top:0px;box-shadow:0 1px 3px rgb(26 26 26 / 10%)"></div>';

  //此处输入你的国外广告网络的代码（包括 Javascript 和 Div 代码），不可换行。以下以 Adsense 广告单元代码为例（需要先在 Adsense 创建一个网站广告单元并复制其代码）
  let thirdPartyDiv =
    '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-" data-ad-slot="" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';

  //把用户的语言写入缓存，供下次获取使用
  localStorage.setItem("locale", broLang);

  //判断用户的语言
  if (broLang.startsWith("zh") || true) {
    //针对中文访客展示万维广告
    $(".placeholderads").replaceWith(wwadsDiv);
    var _sr = document.createElement("script");
    _sr.type = "text/javascript";
    _sr.async = false;
    _sr.src = "https://cdn.wwads.cn/js/makemoney.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(_sr);
  }
  //针对非中文访客展示国外广告
  else {
    $(".placeholderads").replaceWith(thirdPartyDiv);
  }
}