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