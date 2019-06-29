setTimeout(function deleteDivs(){
  console.log("content.js loaded")

  let cornerDiv = document.getElementById("js--friends-widget")
  cornerDiv.style.display = 'none'

  let topBanner = document.getElementsByClassName("level level--add-padding-early")[0]
  topBanner.style.display = 'none'
}, 2000)


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse){
  if (message.txt === "lb executed"){
    let cornerDiv = document.getElementById("js--friends-widget")
    let topBanner = document.getElementsByClassName("level level--add-padding-early")[0]
      if (cornerDiv.style.display === 'none') {
        let cornerDiv = document.getElementById("js--friends-widget")
        let topBanner = document.getElementsByClassName("level level--add-padding-early")[0]

        cornerDiv.style.display = 'block'
        topBanner.style.display = 'block'
      } else {
        cornerDiv.style.display = 'none'
        topBanner.style.display = 'none'
      }
  }
}

// may have to utilize the sendResponse argument to store user preference
