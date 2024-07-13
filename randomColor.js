function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (i=0; i<6; i++) {
        //of all the possible 16 letters i will get one of them
        let index = Math.floor(Math.random()*16);
        color += letters[index];
    }
    return color;
}

function main() {
    //our goal is to assign random colors to the boxes
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(element => {
        element.style.backgroundColor = getRandomColor();
    });
}

main();