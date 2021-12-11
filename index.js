mass = JSON.parse(localStorage.getItem("mass"));
let info = {};
let btnSubmit = document.getElementById("submit");
let divBookName = document.getElementById("bName");
let divAuthorName = document.getElementById("aName");
let divPriority = document.getElementById("priority");
let divCategory = document.getElementById("category");
let divInfo = document.getElementById("Info");
window.onload = () => {
    if (mass == null) mass = [];

    for (i = 0; i < mass.length; i++) {
        bName = document.createElement("div");
        aName = document.createElement("div");
        priority = document.createElement("div");
        category = document.createElement("div");
        bName.innerHTML = mass[i].bookName;
        aName.innerHTML = mass[i].authorName;
        priority.innerHTML = mass[i].priority;
        category.innerHTML = mass[i].category;
        divInfo.append(bName, aName, priority, category);
    }
};

const validateForm = () => {
    if (!form.checkValidity()) {
        alert("не заполнено bookname");
    } else {
        info.bookName = divBookName.value;
        info.authorName = divAuthorName.value;
        info.priority = divPriority.value;
        info.category = divCategory.value;
        mass.push(info);
        divBookName.value = "";
        divAuthorName.value = "";
        divPriority.value = "";
        divCategory.value = 1;
        mass = JSON.parse(localStorage.getItem("mass"));
        if (mass == null) mass = [];
        mass.push(info);
        localStorage.setItem(`mass`, JSON.stringify(mass));
        bName = document.createElement("div");
        aName = document.createElement("div");
        priority = document.createElement("div");
        category = document.createElement("div");
        bName.innerHTML = `${info.bookName}`;
        aName.innerHTML = `${info.authorName}  `;
        priority.innerHTML = ` ${info.priority} `;
        category.innerHTML = ` ${info.category} `;

        divInfo.append(bName, aName, priority, category);
    }
    return false;
};
btnSubmit.onclick = validateForm;
