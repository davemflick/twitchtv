const $ = require('jquery');




let urlStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
let urlChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
let callback = '?callback=?';
let username = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW", "brunofin"];

//THIS IS FOR THE PRE-PLACED STREAMER CONTAINER
let listLink = '';
let listOn ='';
for (let i=0; i<username.length; i++){
	listLink = urlChannels+username[i]+callback;
	listOn = urlStreams+username[i]+callback;
	$.getJSON(listOn, (data)=>{
		// console.log(data);
		listLink = urlChannels+username[i]+callback;
		if(data.stream != null){
			$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamList = $('#streamList');
		let linkUrl = data.url;
		let logoUrl = data.logo;
  $streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`<span id="liveNow">  Is Streaming "${data.game}" Live Now!<span></a></li>`);
})} else{
	$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamList = $('#streamList');
		let linkUrl = data.url;
		let logoUrl = data.logo;
		let errorUrl= 'http://errorlogz.com/wp-content/uploads/2015/08/no-error-300x300.jpg';
		if(data.status != 404)
  {$streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`</a></li>`)}
  else {$streamList.append(`<li id="listed"><img id="logoImg" src="${errorUrl}" alt=""><a id="urlLink" href="#" target="_blank">`+username[i]+`<span id="liveNow"> Unidentified Streamer<span></a></li>`)}
}) //ends third get.json
} // ends if/else
}) //ends first get.json
} // ends for loop


// THIS IS FOR THE SEARCH CONTAINER
$('#form-container').submit(function loadData(){
let urlStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
let urlChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
let callback = '?callback=?';
let searching = $("#search").val();
let searchStream= urlStreams+searching+callback;
let searchChan= urlChannels+searching+callback;
$.getJSON(searchStream, (data)=>{
	if(data.stream != null){
		$.getJSON(searchChan, (data)=>{
		let linkUrl = data.url;
		let logoUrl = data.logo;
  $('.search-container').html(`<img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+searching+`<span id="liveNow">  Is Streaming "${data.game}" Live Now!<span></a>`);
	})}else{
$.getJSON(searchChan, (data)=>{
	let linkUrl = data.url;
	let logoUrl = data.logo;
	if(data.status != 404 && data.status!=403)
		{$('.search-container').html(`<img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+searching+`<span id="liveNow"> Currently Offline<span></a>`)}
		else if(data.status===403){$('.search-container').html(`<p>You didn't input anything numb nuts...</p>`)} 
		else{$('.search-container').html(`<p>Your search was a complete failure, try something else or GTFO!</p>`)}
	})
}
})
return false;
});








// Array of Twitch.tv usernames who regularly stream
// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];