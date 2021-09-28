var rec = new webkitSpeechRecognition();
var contain = document.querySelector('.container')

rec.lang = 'uz-UZ';


rec.onresult = function (evt) {
	var recvoice = evt.results[0][0].transcript;
	Element.innerHtml = null;


	if (recvoice.includes('1') ) {
		var newIframe = document.createElement('iframe');
		newIframe.setAttribute('src' , 'https://www.youtube.com/embed/VdcrHd_BdNc?list=PLwsopmzfbOn_1XLqRYV7gu8ozcYvPEqmd')
		newIframe.textContent = recvoice;
		contain.appendChild(newIframe);
	} 	
	if (recvoice.includes('2') ) {
		var newIframe = document.createElement('iframe');
		newIframe.setAttribute('src' , 'https://www.youtube.com/embed/QUMzEd8XCkI')
		newIframe.textContent = recvoice;
		contain.appendChild(newIframe);
	} 
	if (recvoice.includes('3') ) {
		var newIframe = document.createElement('iframe');
		newIframe.setAttribute('src' , 'https://www.youtube.com/embed/mA_O7onmKQ8?list=PL8O4u0nxMURsQZHX2G8B3ttbhvRzxJ3md')
		newIframe.textContent = recvoice;
		contain.appendChild(newIframe);
	} 
	
	

};


recBtn.addEventListener('click', function () {
	rec.start();
});





