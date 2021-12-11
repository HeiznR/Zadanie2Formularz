mass = JSON.parse(localStorage.getItem("mass"));
let btnSubmit = document.getElementById("submit");
let divBookName = document.getElementById("bName");
let divAuthorName = document.getElementById("aName");
let divPriority = document.getElementById("priority");
let divCategory = document.getElementById("category");
let divInfo = document.getElementById("info");
const form = document.forms.form;
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

const addBook = () => {
    bName = document.createElement("div");
    aName = document.createElement("div");
    priority = document.createElement("div");
    category = document.createElement("div");
    if (!form.checkValidity()) {
        form.reportValidity();
    } else {
        bName.innerHTML = divBookName.value;
        aName.innerHTML = divAuthorName.value;
        priority.innerHTML = divPriority.value;
        category.innerHTML = divCategory.value;
        divInfo.append(bName, aName, priority, category);
        mass = JSON.parse(localStorage.getItem("mass"));
        if (mass == null) mass = [];
        mass.push({
            bookName: divBookName.value,
            authorName: divAuthorName.value,
            priority: divPriority.value,
            category: divCategory.value,
        });
        localStorage.setItem(`mass`, JSON.stringify(mass));
        divBookName.value = "";
        divAuthorName.value = "";
        divPriority.value = "";
        divCategory.value = 1;
    }
    return false;
};
btnSubmit.onclick = addBook;
