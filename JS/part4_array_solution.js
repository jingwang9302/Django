var names = [];
function addNew() {
    var newName = prompt("What name you want to add?");
    names.push(newName);
}
function remove() {
    var reName = prompt("Which name you want to remove?");
    var index = names.indexOf(reName);
    names.splice(index,)
}

function display() {
    console.log(names)
}

var start = prompt("would you like to start name web app? y/n");
var request = 'empty';

if (start === 'y'){
    while (request != 'quit'){
        request = prompt("Please select an action: add, remove,display, or quit.");
        if (request === 'add'){
            addNew();
        } else if(request === 'display'){
            display();
        } else if(request === 'remove'){
            remove();
        } else{
            alert("not recognized.")
        }
    }
     alert("Please refresh to start over.")
}