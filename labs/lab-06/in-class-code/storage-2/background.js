let count  = 0;


chrome.storage.local.get(['count'], function(result) {
  console.log('Value currently is ' + result.count);
  count = result.count;
  if(result.count == undefined){
    count = 0;
    chrome.storage.local.set({count: count}, function() {
      console.log('Value is set to ' + count);
    });
  }
});


chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
  console.log(request);
  if(request.type == "getCount"){
    sendResponse(count)
  }else if(request.type == "increase"){
    count++;
    chrome.storage.local.set({count: count}, function() {
      console.log('Value is set to ' + count);
    });

  }

});
