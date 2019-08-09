console.log("Olá mundo");


const tl = new TimelineMax({paused: true});
// Vinyl Img
const vinyl = document.querySelector(".vinyl");


const playButton = document.querySelectorAll(".button")[0];
const reverseButton = document.querySelectorAll(".button")[1];
const stopButton = document.querySelectorAll(".button")[2];

tl.to(vinyl, 1, {rotation: 360, repeat: -1, ease:Linear.easeInOut});

playButton.onclick = function() {
	tl.play();
	console.log("Vinil Tocando!");
}

reverseButton.onclick = function() {
	tl.reverse();
	console.log("Tocando a musica da Xuxa - ao contrário");
}

stopButton.onclick = function() {
	tl.pause();
	console.log("A festa acabou!");
}