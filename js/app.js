function flip(card) { 
	console.log (card)
	document.getElementById(card).style.transform= 'rotateY(180deg)'
	if (document.getElementById(card).style.transform==='rotateY(180deg)') {
		setTimeout(function () {document.getElementById(
			card).style.transform= 'rotateY(0deg)';
		}, 1000);
	}
}


var card = [];
card[0] = '/assets/happy-face-sun-clipart-best-clipart-best-JTj5mT-clipart.jpeg';
card[1] = '/assets/happy-rain-cloud-clip-art-iMKFdA-clipart.png';
card[2] = '/assets/happy-cloud-clipart-happy-cloud-clipart_550-400.jpeg';
card[3] = '/assets/flower-clipart17.jpg';
card[4] = '/assets/happy-face-sun-clipart-best-clipart-best-JTj5mT-clipart.jpeg';
card[5] = '/assets/happy-rain-cloud-clip-art-iMKFdA-clipart.png';
card[6] = 'assets/happy-cloud-clipart-happy-cloud-clipart_550-400.jpeg';
card[7] = 'assets/flower-clipart17.jpg';

var clicks = 0; 
var firstSelect; 
var secondSelect;
var match = 0;
var cardBack = "/assets/valentines-day-heart-clip-art-33947.jpg";

