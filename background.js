chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  let msg = {txt: "lb executed"}
  console.log("background.js executed")
  chrome.tabs.sendMessage(tab.id, msg)
}
