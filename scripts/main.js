const $ = require('jquery');

$(document).ready(function(){

let urlStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
let urlChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
let callback = '?callback=?';
let username = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW"];


let listLink = '';
let listOn ='';
for (let i=0; i<username.length; i++){
	listLink = urlChannels+username[i]+callback;
	listOn = urlStreams+username[i]+callback;
	$.getJSON(listOn, (data)=>{
		// console.log();
		listLink = urlChannels+username[i]+callback;
		if(data.stream != null){
			$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamList = $('#streamList');
		let linkUrl = data.url;
		let logoUrl = data.logo;
  $streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`<span id="liveNow">  Is Streaming Live Now!<span></a></li>`);
})} else {
	$.getJSON(listLink, (data)=> {
		// console.log();
		let $streamList = $('#streamList');
		let linkUrl = data.url;
		let logoUrl = data.logo;
  $streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`</a></li>`);
})
}
})
}
});


// $streamList.append('<li>'+username[i]+'</li>');




// $.getJSON(urlChannels + 'freecodecamp' + callback, function(data) {
//   console.log(data);
// });





// 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?'







// Array of Twitch.tv usernames who regularly stream
// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]