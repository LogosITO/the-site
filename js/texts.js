function getTextFromNames(names){
    let text = '';
    let elements = document.getElementsByName(names);
    if(elements === undefined || elements === null){
        alert('Some javascript error!');
    }
    if (elements.length > 0){
        for(let i = 0; i < elements.length; i++){
            text += elements.item(i).textContent || elements.item(i).innerText;
            if (i < elements.length - 1){
                text += '\n'
            }
        }
    }  
    return text;
}

function changeTextInName(name, new_text){
    document.getElementsByName(name).item(0).textContent = new_text;
}

function doAlertFromTextsByNames(names){
    alert(getTextFromNames(names));
}

/*PogU*/
function smartTextChanging(name, new_text){
    arguments.callee.static_counter = arguments.callee.static_counter || 0;
    arguments.callee.static_counter++;
    arguments.callee.old_text = arguments.callee.old_text || document.getElementsByName(name).item(0).textContent;
    arguments.callee.pname = arguments.callee.pname || name;  
    if(arguments.callee.pname != name){
        arguments.callee.static_counter = 0;
        if( document.getElementsByName(name).item(0).textContent != new_text &&
            arguments.callee.old_text == document.getElementsByName(arguments.callee.pname).item(0).textContent &&
            arguments.callee.static_counter % 2 == 0){
            arguments.callee.old_text = document.getElementsByName(name).item(0).textContent;      
        }  
        arguments.callee.pname = name; 
    }
    if(arguments.callee.static_counter % 2 == 0){
        changeTextInName(name, new_text);
    }
    else{
        changeTextInName(name, arguments.callee.old_text);
    }
}