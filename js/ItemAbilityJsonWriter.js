ACTIVETAGS=1;
$(document).ready(function(){ 
generateTag("1");
});


function textclear(){
	$("#name").val('');
	$("#desc").val('');
	$("#output").val('');
	$("#stats").empty();
	generateTag("1");
	ACTIVETAGS = 1;
}

function generate(){
	 name = $("#name").val();
	 type = $("#type").val();
	 desc = $("#desc").val();
	 update(writeEntry(name, type, desc));
}

function update(string){
$("#output").val(string);
}

function writeEntry(name, type, desc){
	var string = "\t{\n";
	string += '\t\t"name":"' + name + '",\n';
	string += '\t\t"type":"' + type + '",\n';
	string += '\t\t"desc":"' + desc + '",\n';
	string += '\t\t"tags":[' +getTags()+ ']\n';
	string += "\t}"
	return string;
}

function getTags(){
var string = "";
if ($("#1").text() == "None"){
return string;
} else	{
	for (var i = 1; i <= ACTIVETAGS; i++){
		var target = "#" + i + " option:selected";
		if($(target).text() != "None"){
			string += '"' + $(target).text() + '"'
			if ( i < ACTIVETAGS -1){
			string +=', ';
			}
		}
	}
	return string;
}
}

function generateTag(id){
	var SelectBox = document.createElement('select');
	var options = ["None", "Attack Damage", "Attack Penetration","Attack Speed","Attack Lifesteal", "Critical Chance", "Health", 
					"Health Regen", "Attack Armor", "Power Armor", "Resilience", "Power Damage", "Power Penetration", 
					"Power Lifesteal", "Will", "Will Regen", "Move Speed", "Cooldown Reduction", "Credits" ] ;
	for (var i = 0; i < options.length; i++){
		var currentoption = document.createElement('option');
		currentoption.innerHTML = options[i];
		$(SelectBox).append(currentoption);
		}	
	SelectBox.setAttribute("onchange", "checkBoxes(" + id + ")");
	SelectBox.setAttribute("id", id);
	$("#stats").append(SelectBox);
}

function checkBoxes(id){
	if (id == ACTIVETAGS){
		generateTag(id + 1);
		ACTIVETAGS +=1;
	}
	if (id < ACTIVETAGS){
		var target = "#" + id + " option:selected";
		if ($(target).text() == "None"){
		for (var i = id + 1; i <= ACTIVETAGS; i++){
			var RemovalTarget = "#" + i;
			
			$(RemovalTarget).remove();
				}
		ACTIVETAGS = id;
		}
		
	}
}