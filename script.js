const div = document.getElementById("login");

div.addEventListener("click", () => {
    alert("Div clicked!");

    // Create a new div
    const newDiv = document.createElement("div");
   newDiv.style. width="50%";
   newDiv.style. height = "60%";
    newDiv.style. position = "fixed";
    newDiv.style.backgroundColor ="#ffff00";
    newDiv.style. top = "20%"; 
    newDiv.style.left ="25%"; 
    newDiv.style. color='white';
   newDiv.style.zIndex ="1000";
 


    // Add form elements inside newDiv
    newDiv.innerHTML = `
        <button id="close" style="margin-bottom: 10px; padding: 5px 10px; cursor: pointer;">Close</button>
        <br>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
        <br>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">
    `;

    // Append the div to the body
    document.body.appendChild(newDiv);

    // Select the close button after appending the new div
    const btn = document.getElementById("close");

    // Add event listener to remove the div
    btn.addEventListener("click", () => {
        document.body.removeChild(newDiv);
    });
});


const div1 =document.getElementById("submit");
        div1.addEventListener("click", () =>{
        alert("submit completed");
        })

