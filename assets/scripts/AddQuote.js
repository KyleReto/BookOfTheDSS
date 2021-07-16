$("#addMessageBtn").click(addMessage);
$("#avatarImage").change(reloadAvatar);
$("")

// Dynamically add new message submissions to the page
function addMessage(){
	let container = $('#formContainer');
	// Create the new elements to allow an extra message
	let avatarContainer = $("<div class=\"avatar\"></div>");
	let avatarImg = $("<img src=\"/assets/avatars/Kyle.png\">");
	avatarContainer.append(avatarImg);
	container.append(avatarContainer);
	// This is kind of absurd, I realize, but it is what it is.
	let contentsDiv = $('<div class="contents"><h2 class="nameHeader"><div class="username"><input type="text" name="sender" placeholder="Kyle" class="username" ><br></div></h2><div class="messageText"><textarea rows="14" cols="10" wrap="soft" name="message" placeholder="Test Message" class="messageText"></textarea></div><div class="embed"><input type="text" name="embed" placeholder= "ImageEmbedFile.jpg"><br><img src="/assets/embeds/GodYourePathetic.jpg"></div></div><br>');
	container.append(contentsDiv);
}

function reloadAvatar(){

}