let string = "";
const buttons = document.querySelectorAll("button");
const clean = document.querySelector("#clean");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e.target.innerText);
        console.log(string);
        
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('#screen').value = string;
            console.log(string);
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("#screen").value = string;
        }

        if(string != ""){
            clean.style.display="block";
            clean.addEventListener("click", () => {
                string = "";
                document.querySelector("#screen").value = "";
                console.log(string);
                clean.style.display="none";
            })
        }
    })
})

