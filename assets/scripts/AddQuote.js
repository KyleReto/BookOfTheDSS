// Starts at 0, plus the first message that's placed by default.
let i = 1;
document.getElementById('addMessageBtn').addEventListener('click', addMessage);
// Dynamically add new message submissions to the page
function addMessage(){
	let container = document.getElementById('formContainer');
	// Create the new inputs to add a new message
	addInput(container, 'Sender: ', 'sender', i);
	addInput(container, 'Message: ', 'message', i);
	addInput(container, 'Embed File Name: ', 'embed', i);
	// Create br
	let brElement = document.createElement('br');
	container.appendChild(brElement);
	// i iterates for each new message added.
	i++;
}

// Add an input to a given form.
// container: The container to place the input in
// labelText: The visible text on the label
// name: The name to set for the input
// i: Concatenated onto the name parameter to give the final name.
function addInput(container, labelText, name, i){
	// Create label
	let labelElement = document.createElement('label');
	let textNode = document.createTextNode(labelText);
	labelElement.appendChild(textNode);
	labelElement.setAttribute('for', name + i);
	container.appendChild(labelElement);
	// Create input
	let inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'text');
	inputElement.setAttribute('name', name + i);
	container.appendChild(inputElement);
	// Create br
	let brElement = document.createElement('br');
	container.appendChild(brElement);
}