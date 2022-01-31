//These links are of websites you can ad block, say you dont want a scam, or some type of virus website, you can put the url link in here and it will block it from your browser. 
//These webistes are randomly choosen :) 
const defaultFilters = [
	"*://*.facebook.com/*",

	"*://.sketch.io.com//*",

	"*://*.mathgames.com/*",

	"*://*.aircanada.com/*",

	"*://*.y8.com/*",

	"*://*.twitter.com/*",
	
	//As seen above, i have put 6 random website links that can be blocked based on having the chrome extension on your browser.
    //You can pick ANY type of website to block, and example can be, say you have kids and you dont want them on certin website then you can use the extension to block them from not gaining access to them.
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return{cancel:true }},
    { urls: defaultFilters },
    ["blocking"]
)