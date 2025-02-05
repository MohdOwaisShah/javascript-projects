const typeList = document.querySelector("#type-list");
const addBtn = document.querySelector("#add");
const itemsContainer = document.querySelector(".items-container");
typeList.focus();

let arr = [];

//creating items
const creatingItems = (value) => {
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    const item = itemsContainer.appendChild(div);
    item.innerHTML = `<li>${value}</li><button id="remove">Remove</button>`;
    return div;
}

//adding data in local storage
const addingDataInLS = (uValue) => {
    arr.push(uValue);
    localStorage.setItem("item", JSON.stringify(arr));
    console.log(arr);
}

//remove items from container as well as local storage
const removeItems = (div, user) => {
    // remove items from container
    div.querySelector("#remove").addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.parentElement.firstChild.innerText);
        let clickValue = e.target.parentElement.firstChild.innerText;
        // removing items from local storage

        // arr = arr.filter((currElem) => {
        //     currElem !== user;
        //     console.log(arr);
        // })
        console.log(user);

        if (clickValue == user) {
            div.remove()
            console.log(arr);
            arr = arr.filter((curElem) => {
                return curElem !== clickValue;
            })
            console.log(arr);
        }
        localStorage.setItem("item", JSON.stringify(arr))
    })


}

//add and remove data
const addAndRemoveitems = () => {
    const userVal = typeList.value.trim();
    // add items to container
    if (userVal !== "") {
        const div = creatingItems(userVal);
        typeList.value = "";
        addingDataInLS(userVal);//adding data in local storage
        removeItems(div, userVal);//remove data from local storage
    }
}

//adding items
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addAndRemoveitems();
    typeList.focus();
})

//displaying items which have in local storage
arr = JSON.parse(localStorage.getItem("item")) || [];
console.log(arr);
arr.forEach((curElem) => {
    const div = creatingItems(curElem);
    removeItems(div, curElem);
})

