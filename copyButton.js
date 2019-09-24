'use strict';

// Copy button
function copy() {
  var copyText = document.getElementById('result');
  copyText.select();
  document.execCommand('copy');
}
document.getElementById('copy').addEventListener('click', copy);
