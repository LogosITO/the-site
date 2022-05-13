function changeTextColorInName(name, new_color){
    let about = document.getElementsByName(name).item(0);
    about.style.color = new_color;
}

function hideBlock(name, time){
    let about = document.getElementsByName(name).item(0);
    about.style.visibility = 'hidden';
}