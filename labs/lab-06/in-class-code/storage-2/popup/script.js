let button = document.getElementById("button");
let count = document.getElementById("count");
let counter = 0;

chrome.runtime.sendMessage({type: "getCount"}, function(response) {
  console.log(response);
  counter = response
  count.innerHTML = response;

});

button.addEventListener("click", ()=>{
  counter++;
  chrome.runtime.sendMessage({type: "increase"});
  count.innerHTML = counter;

})
