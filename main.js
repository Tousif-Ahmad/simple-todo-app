let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector(".addInput");
let addBtn = document.querySelector(".addBtn");

let lists = [
  // {id : 23, text : "sam"},
  // {id : 23, text : "uffexx"},
]

function render(arr){
  listContainer.innerHTML = ""
  arr.forEach((obj)=>{
    let divElem = document.createElement("div");
    divElem.className = "list";
    let para = document.createElement("p");
    para.textContent = obj.text;
    let btn = document.createElement("button");
    btn.textContent = "❌";
    divElem.append(para, btn);
    btn.dataset.id = obj.id;

    listContainer.append(divElem);
    
  })
}
render(lists)


function addHandleBtn(){
  let text = addInput.value.trim();
  if (!text) return;
  let obj ={
    text : text,
    id : Date.now(),
  }
  lists.push(obj)

  render(lists);
  addInput.value = ""
  
}

addBtn.addEventListener("click", addHandleBtn);
addInput.addEventListener("keypress", (e)=>{
  if (e.key === "Enter") addHandleBtn()
})


function handleDeleteBtn(id){
  lists = lists.filter((obj)=> obj.id !== id);
  render(lists)
  
}
listContainer.addEventListener("click", (e)=>{
  if (e.target.tagName === "BUTTON"){
    let id = Number(e.target.dataset.id);
    handleDeleteBtn(id)
  }
})

