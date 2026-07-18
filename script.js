const container = document.getElementById("container");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) =>{
    const numOfSquares = prompt("Enter a # of squares per side: ");
    if(numOfSquares>100){
        alert("Too Many Squares! Maximum is 100");
    }
    else{
        makeSquares(numOfSquares);
    }
});

function makeSquares(numOfSquares){
    container.innerHTML = "";
    for(let i=0; i<numOfSquares; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList = "row";

        rowDiv.style.display = "flex";
        container.appendChild(rowDiv);
        for(let j=0; j<numOfSquares; j++){
            const colDiv = document.createElement("div");
            colDiv.classList = "column";
            colDiv.style.display = "flex";

            colDiv.addEventListener("mouseenter", (event) =>{
                let color = randomRgba();
                event.target.style.backgroundColor = color;
            });
            rowDiv.appendChild(colDiv);
        }
    }
}

function randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
