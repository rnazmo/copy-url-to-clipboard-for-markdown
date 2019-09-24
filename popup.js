'use strict';

// Ref:
// https://developer.chrome.com/extensions/tabs#method-query
// https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tab) {
  var result = document.getElementById('result');
  var activeTab = tab[0];

  var contents = 'title: ' + activeTab.title + '\n';
  contents += 'url: ' + activeTab.url + '\n';

  // Update textarea.
  result.value = contents;

  // for debug
  console.log(activeTab.title);

  // Select the textarea.
  result.select();

  // Copy result to clipboard.
  document.execCommand('copy');
});
