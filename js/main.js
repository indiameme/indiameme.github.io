function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

document.addEventListener("DOMContentLoaded", function() {
  const ad = document.createElement("script");
  ad.setAttribute("async", "");
  ad.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3723218062742398");
  ad.setAttribute("crossorigin", "anonymous");
  document.head.append(ad);
  // script("Injected script 4/4 (Ad stuff)");

  const stats = document.createElement("script");
  stats.setAttribute("defer", "");
  stats.setAttribute("data-domain", "player.work");
  stats.setAttribute("src", "https://stats.senty.com.au/js/script.js");
  document.head.append(stats);
  console.log('init complete')

});
