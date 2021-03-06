const $ = require('jquery');


const urlStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
const urlChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
const callback = '?callback=?';
const username = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW", "YourMammasFace"];

//Allows you to switch between tabs
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).siblings().slideUp(500);
        $('.tabs ' + currentAttrValue).delay(300).slideDown(500);
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });


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
  $streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`<span id="liveNow">Is Streaming "${data.game}" Live Now!<span></a></li>`);
})} else{
	$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamList = $('#streamList');
		let linkUrl = data.url;
		let logoUrl = data.logo;
		let errorUrl= 'http://errorlogz.com/wp-content/uploads/2015/08/no-error-300x300.jpg';
		if(data.status != 404)
  {$streamList.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`</a></li>`)}
  else {$streamList.append(`<li id="listed"><img id="logoImg" src="${errorUrl}" alt=""><a id="urlLink" href="#" target="_blank">`+username[i]+`<span id="liveNow"> Unidentified Streamer, does not exist!<span></a></li>`)}
}) //ends third get.json
} // ends if/else
}) //ends first get.json
} // ends for loop

//LIVE LINK TAB


for (let i=0; i<username.length; i++){
	listLink = urlChannels+username[i]+callback;
	listOn = urlStreams+username[i]+callback;
	$.getJSON(listOn, (data)=>{
		// console.log(data);
		listLink = urlChannels+username[i]+callback;
		if(data.stream != null){
			$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamListOn = $('#streamListOn');
		let linkUrl = data.url;
		let logoUrl = data.logo;
  $streamListOn.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`<span id="liveNow">  Is Streaming "${data.game}" Live Now!<span></a></li>`);
})}
})};

//OFFLINE TAB
for (let i=0; i<username.length; i++){
	listLink = urlChannels+username[i]+callback;
	$.getJSON(listLink, (data)=> {
		// console.log(data);
		let $streamListOff = $('#streamListOff');
		let linkUrl = data.url;
		let logoUrl = data.logo;
		let errorUrl= 'http://errorlogz.com/wp-content/uploads/2015/08/no-error-300x300.jpg';
		if(data.status != 404)
  {$streamListOff.append(`<li id="listed"><img id="logoImg" src="${logoUrl}" alt=""><a id="urlLink" href="${linkUrl}" target="_blank">`+username[i]+`</a></li>`)}
  else {$streamListOff.append(`<li id="listed"><img id="logoImg" src="${errorUrl}" alt=""><a id="urlLink" href="#" target="_blank">`+username[i]+`<span id="liveNow"> Unidentified Streamer, does not exist!<span></a></li>`)}
})
};




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
		else if(data.status===403){$('.search-container').html(`<p>Try inputting something first...</p><iframe src="//giphy.com/embed/l0G18lMKSLQ4wXToI" width="240" height="104" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/movie-the-rock-michael-bay-l0G18lMKSLQ4wXToI"></a></p>`)} 
		else{$('.search-container').html(`<p>That doesn't exist...</p><iframe src="//giphy.com/embed/HteV6g0QTNxp6" width="240" height="133" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/HteV6g0QTNxp6"></a></p>`)}
	})
}
})
return false;
});



