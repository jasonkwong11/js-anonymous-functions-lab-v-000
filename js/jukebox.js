$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[randomNumber() * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', handleMenuOptions);
}

function handleMenuOptions(e){
 $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function play() {
  $('#play').on('click', handleSongPlaying);
}

function handleSongPlaying(e){
$('#songPlaying').html(phrase);
  return phrase;
}

function phrase(){
 return "now playing " + songToPlay + " by " + theArtist;
}

function pause() {
  $('#pause').on('click', handlePause);
}

function handlePause(e){
 $('#songPaused').html(pauseSong);
}

function pauseSong(){
  return songToPlay + " is paused";
}

function show() {
  $('#show').on('click', handleShow);
}

function handleShow(e){
    var songs = "";
    for (var key in jukeboxSongs) {
      songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
    }
    $('#showSongs').html(songs);
}



