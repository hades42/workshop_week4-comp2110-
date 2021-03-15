let [...btnLists] = document.querySelectorAll(".button");
let btn = document.querySelectorAll(".button");
let changeColor = function(btn1, btn2, color){
    btnLists[btn1 - 1].style = `background-color: ${color}`;
    btnLists[btn2 - 1].style = `background-color: ${color}`;
}
let toggleColor = function(e){
    const className =e.target.classList[1];
    switch(className){
        case "button-1":
            changeColor(2,4,"red");
            break;
        case "button-2":
            changeColor(1,4,"yellow");
            break;
        case "button-3":
            changeColor(2,3,"yellow");
            break;
        case "button-4":
            changeColor(1,3,"red");
            break;
        default:
            return;
    }

}

btnLists.forEach(btn => btn.addEventListener("click", toggleColor));
