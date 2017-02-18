var card = [];
card[0] = 'http://www.clipartkid.com/images/41/happy-rain-cloud-clip-art-iMKFdA-clipart.png';
card[1] = 
card[2] = '/assets/happy-cloud-clipart-happy-cloud-clipart_550-400.jpeg';
card[3] = '/assets/flower-clipart17.jpg';
card[4] = '/assets/happy-face-sun-clipart-best-clipart-best-JTj5mT-clipart.jpeg';
card[5] = '/assets/happy-rain-cloud-clip-art-iMKFdA-clipart.png';
card[6] = 'assets/happy-cloud-clipart-happy-cloud-clipart_550-400.jpeg';
card[7] = 'assets/flower-clipart17.jpg';

var cardBack = "http://www.clipartkid.com/images/99/happy-face-sun-clipart-best-clipart-best-JTj5mT-clipart.jpeg";

function flip(card) { 
	console.log (card)
	document.getElementById(card).style.transform= 'rotateY(180deg)'
	console.log (document.getElementById(card).childNodes[1])
	document.getElementById(card).childNodes[1].src = "http://www.clipartkid.com/images/41/happy-rain-cloud-clip-art-iMKFdA-clipart.png"
	if (document.getElementById(card).style.transform==='rotateY(180deg)') {
		setTimeout(function () {document.getElementById(
			card).style.transform= 'rotateY(0deg)';
		document.getElementById(card).childNodes[1].src = cardBack
		}, 2000);
	}
}

