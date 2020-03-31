'use strict';

// Ref:
// https://developer.chrome.com/extensions/tabs#method-query
// https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tab) {
  var result = document.getElementById('result');
  var activeTab = tab[0];

  // TODO: 特定の URL のとき, title を良い感じに加工する（自分用）
  // - youtube.com の場合は, Share リンクから見れる短縮URL を使う？
  // - youtube.com の場合は, （オプション次第で）現在の開始時刻のクエリも付与したURLにしたい

  // TODO: format を自分で指定できるようにしても良いかも. 指定した形式の変数を使って記述してもらう. markdown なら, "[$title]($url)" みたいな. 使える変数はどうする？$title, $url, etc...
  let contents = generateMarkdownLink(activeTab.title, activeTab.url);

  // Update textarea.
  result.value = contents;

  // for debug
  console.log(activeTab.title);

  // Select the textarea.
  result.select();

  // Copy result to clipboard.
  document.execCommand('copy');
});

function generateMarkdownLink(title, url) {
  let markdownLink = '[' + title + '](' + url + ')';
  return markdownLink
}
