
function main() {
    let Adjective = {
        "first": "Crazy",
        "second": "Amazing",
        "third": "Fire"
    }
    let shopName = {
        "first": "Engine",
        "second": "Food",
        "third": "Garment"
    }
    let anotherWord = {
        "first": "Bros",
        "second": "limited",
        "third": "hub"
    }
    let randStart = Math.random();
    let randMiddle = Math.random();
    let randEnd = Math.random();
    let Start;
    let Middle;
    let End;
    if (randStart<0.33) {
        Start = Adjective.first;
    } else if (randStart<0.66) {
        Start = Adjective.second;
    } else {
        Start = Adjective.third;
    }

    if (randMiddle<0.33) {
        Middle = shopName.first;
    } else if (randMiddle<0.66) {
        Middle = shopName.second;
    } else {
        Middle = shopName.third;
    }

    if (randEnd<0.33) {
        End = anotherWord.first;
    } else if (randEnd<0.66) {
        End = anotherWord.second;
    } else {
        End = anotherWord.third;
    }

    alert(`${Start} ${Middle} ${End}`);
}

main();