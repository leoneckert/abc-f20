let button = document.getElementById("button");
let look = document.getElementById("look");
let gift = document.getElementById("gift");
let garden = document.getElementById("garden");

function addItem(item){
    let p = document.createElement("p");
    // p.className = "gift";
    let ranX = Math.random()*(window.innerWidth-50)
    let ranY = Math.random()*(window.innerHeight-50)
    p.style.left = ranX + "px";
    p.style.top = ranY + "px";
    p.style.position = "absolute";
    p.innerHTML = item;
    garden.append(p)
}

button.addEventListener("click", ()=>{
    console.log(gift)
    let text = gift.value;
    fetch("/gift/"+text)
        .then(response => response.json())
        .then(data => console.log(data));
})

look.addEventListener("click", ()=>{
    fetch("/garden")
        .then(response => response.json())
        .then(data => {
            
            garden.innerHTML = "";
            data.gifts.forEach(d=>{
                addItem(d);
            })
            // console.log(data)
        });
})