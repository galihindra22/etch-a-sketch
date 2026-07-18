const container = document.getElementById("container");

for(let i=0; i<16; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList = "row";

    rowDiv.style.display = "flex";
    container.appendChild(rowDiv);
    for(let j=0; j<16; j++){
        const colDiv = document.createElement("div");
        colDiv.classList = "column";
        colDiv.style.display = "flex";

        colDiv.addEventListener("mouseenter", (event) =>{
            event.target.style.backgroundColor = "red";
        });
        rowDiv.appendChild(colDiv);
    }
}

