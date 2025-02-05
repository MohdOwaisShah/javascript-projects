let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let copyCode = document.querySelector(".copy-code p");
let rgb1 = "#34cfeb"
let rgb2 = "#eb3477"

//generate random hex color
const hexColGen = () => {
    const hexVal = "0123456789abcdef";
    var hash = "#";
    for(let i=0; i<6; i++){
        hash = hash + hexVal[Math.floor(Math.random() * 16)];
    }
    return hash;
}

//welcome alert after 2 second
const welcomeAlert = () => {
    alert("Welcome to HexBlendify! \nThis website generates gradient colors in hex code, which you can use on your website.");
}
setTimeout(welcomeAlert,2000);


button1.addEventListener("click", () => {
    hexColGen();
    rgb1 = hexColGen();
    button1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1}, ${rgb2})`;
    copyCode.innerHTML=`background-image: linear-gradient(to right ,${rgb1}, ${rgb2});`
});

button2.addEventListener("click", () => {
    hexColGen();
    rgb2 = hexColGen();
    button2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1}, ${rgb2})`;
    copyCode.innerHTML=`background-image: linear-gradient(to right ,${rgb1}, ${rgb2});`
});

//code copy alert
copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerHTML);
    alert("Code copied!");
})