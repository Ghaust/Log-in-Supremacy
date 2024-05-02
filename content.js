document.querySelectorAll('h1, h2, h3, h4, h5, a, button, p, span').forEach(element => {
	const elementText = element.innerText.trim().toLowerCase();
	const reg = /.*sign in.*/
	
    if (elementText.match(reg)) {
		console.log(elementText)
        const index = elementText.indexOf('sign in');
		const newText = elementText.substring(0, index) + 'Log in' + elementText.substring(index + 'sign in'.length);
		
		console.log(elementText.match(reg))
		
		element.innerHTML = newText;
    }
});