// Final Card Structure

// <div class="card blue-grey darken-1">
// 	<div class="card-content white-text">
// 	  <span class="card-title">Card Title</span>
// 	  <p>I am a very simple card. I am good at containing small bits of information.
// 	  I am convenient because I require little markup to use effectively.</p>
// 	</div>
// 	<div class="card-action">	
// 	  <a class="waves-effect waves-light btn">Edit</a>
// 	  <a class="waves-effect waves-light btn">Delete</a>
// 	</div>
// </div>

var cardTitleValue = document.getElementById("cardTitleValue");
var textValue = document.getElementById("textarea1");
var postButton = document.getElementById("postButton");
var item = document.getElementById("item");
var itemNo = 0;

postButton.onclick = function(){
	itemNo++;

	var card = document.createElement("div");
	card.className = "card blue-grey darken-1";
	card.id = "card_" + itemNo;

	var cardContent = document.createElement("div");
	cardContent.className = "card-content white-text";

	var cardTitle = document.createElement("span");
	cardTitle.className = "card-title";
	cardTitle.innerHTML = cardTitleValue.value;
	cardTitle.id = "title_" + itemNo;
	cardTitle.ondblclick = updateTitle;

	var cardText = document.createElement("pre");
	cardText.innerHTML = textValue.value;
	cardText.id = "text_" + itemNo;
	cardText.ondblclick = updateText;

	var cardAction = document.createElement("div");
	cardAction.className = "card-action";

	// var cardButtonEdit = document.createElement("a");
	// cardButtonEdit.className = "waves-effect waves-light btn";
	// cardButtonEdit.innerHTML = "Edit";
	// cardButtonEdit.id = "edit_" + itemNo;
	// cardButtonEdit.onclick = editFunction;

	var cardButtonDelete = document.createElement("a");
	cardButtonDelete.className = "waves-effect waves-light btn";
	cardButtonDelete.innerHTML = "Delete";
	cardButtonDelete.id = "delete_" + itemNo;
	cardButtonDelete.onclick = deleteFunction;


	item.appendChild(card);
	card.appendChild(cardContent);
	cardContent.appendChild(cardTitle);
	cardContent.appendChild(cardText);
	card.appendChild(cardAction);
	// cardAction.appendChild(cardButtonEdit);
	cardAction.appendChild(cardButtonDelete);

}

function updateTitle(){
	var newTitle = prompt("Change the Title",this.innerHTML);
	console.log(this.id);
	var selectedItem = document.getElementById(this.id);

	if(newTitle != ""){
		selectedItem.innerHTML = newTitle;	
	}
	
}

function updateText(){
	var newText = prompt("Change the Memo",this.innerHTML);
	console.log(this.id);
	var selectedItem = document.getElementById(this.id);

	if(newText != ""){
		selectedItem.innerHTML = newText;
	}
}

function editFunction(){
	console.log(this.id);
	var cardNo = this.id.replace("edit_","");
	var selectedCard = document.getElementById("card_" + cardNo);
	console.log(selectedCard);
}

function deleteFunction(){
	var cardNo = this.id.replace("delete_","");
	var selectedCard = "card_" + cardNo;

	var sure = confirm("Are you sure?");
	if (sure){
		remove(selectedCard);	
	}
}

function remove(id){
	var elem = document.getElementById(id);
	return elem.parentNode.removeChild(elem);
}