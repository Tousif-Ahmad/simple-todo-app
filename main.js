let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector(".addInput");
let addBtn = document.querySelector(".addBtn");

let lists = [
  //   { id: 123, text: "sam" },
  //   { id: 321, text: "uffexx" },
];

function renderList(arr) {
  listContainer.innerHTML = "";
  arr.forEach((obj) => {
    // console.log(list);
    let divElem = document.createElement("div");
    divElem.classList.add("list");
    divElem.innerHTML = `
     <div class="list">
                <p>${obj.text}</p>
     </div>
    `;
    let btnElem = document.createElement("button");
    btnElem.textContent = "❌";
    divElem.append(btnElem);
    listContainer.append(divElem);

    btnElem.onclick = ()=>{
        handleRemoveBtn(obj.id)
    }
  });
  addInput.value = "";
  
}
renderList(lists);

function handleAddBtn() {
    if (!addInput.value.trim()) return
  let obj = {
    id: Date.now(),
    text: addInput.value,
  };
  lists.push(obj);
  renderList(lists);
}

function handleRemoveBtn(id){
    let filteredList = lists.filter((obj)=>{
        return obj.id !== id;
    })
    lists = filteredList;
    renderList(filteredList)
}
addBtn.addEventListener("click", handleAddBtn);

addInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleAddBtn();
});