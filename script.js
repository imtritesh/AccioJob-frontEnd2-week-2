let count = 0;
function random(abc){
    abc.forEach(element => {
        let p = document.createElement("p");
        p.innerText = addedItems.indexOf(element) + 1 + ".";
        let userName = document.createElement("b");
        userName.innerText = element.name;
        let userProfession = document.createElement("b");
        userProfession.innerText = element.profession;
        let userAge = document.createElement("p");
        userAge.innerText = element.age;
        let userDiv = document.createElement("div");
        userDiv.append(p, userName, userProfession, userAge);
        userDiv.className = "userContainer";
        user.append(userDiv);
    });
}
let addedItems = [];
let me = document.querySelector("#chogya");
me.addEventListener("click", addUser);
let user = document.getElementById("professionn");
user.innerHTML = "";
random(addedItems);
function addUser() {
    let divForm = document.querySelector(".div-form");
    let firstItem = divForm.children[0].children[2];
    let secondItem = divForm.children[1].children[2];
    let thirdItem = divForm.children[2].children[2];
    let name = "name : " + firstItem.value.trim();
    let profession = "profession : " + secondItem.value.trim();
    let age = "age : " + thirdItem.value.trim();
    let id = ++count;
    if (name != "" && profession != "" && age != "") {
        addedItems.push({ name: name, profession: profession, age: age, id:id });
    }
    let user = document.getElementById("professionn");
    user.innerHTML = "";

    random(addedItems);
    firstItem.value = "";
    secondItem.value = "";
    thirdItem.value = "";
}

function filter() {
    console.log("entered");
    let user = document.getElementById("professionn");
    let filteredValue = document.getElementById("select").value;
    let filteredArray = addedItems.filter(user => user.profession == filteredValue);
    if (filteredValue == "") {
        alert("select a profession");
    }
    else {
        user.innerHTML = "";
        random(filteredArray);
    }
}