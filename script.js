const container = document.querySelector(".container");
const boxItens = document.querySelector(".box-itens")
const frm = document.querySelector("form");

const elementTemp = (item) => {

    const li = document.createElement("li");
    li.classList.add("item")
    boxItens.appendChild(li)

    const divCont = document.createElement("div");
    divCont.classList.add("item-cont")
    li.appendChild(divCont)

    const p = document.createTextNode(item);
    divCont.appendChild(p)

    const divButns = document.createElement("div");
    divButns.classList.add("butns")
    li.appendChild(divButns)

    const btCheck = document.createElement("button");
    const itemCheck = document.createElement("i")
    btCheck.classList.add("btn")
    itemCheck.classList.add("bi-check") 
    divButns.appendChild(btCheck)
    btCheck.appendChild(itemCheck)
    
    const btEdit = document.createElement("button");
    const itemEdit = document.createElement("i")
    btEdit.classList.add("btn")
    itemEdit.classList.add("bi-pencil-fill") 
    divButns.appendChild(btEdit)
    btEdit.appendChild(itemEdit)

    const btDelet = document.createElement("button");
    const itemDelt = document.createElement("i")
    btDelet.classList.add("btn")
    itemDelt.classList.add("bi-trash3")
    divButns.appendChild(btDelet)
    btDelet.appendChild(itemDelt)

    btCheck.addEventListener("click", () => {
        li.classList.toggle("hidden")
    });

    btEdit.addEventListener("click", () => {
        const eddText = prompt(`Editar item` )

        item.innerHtml = eddText
    });

    btDelet.addEventListener("click", (e) => {
        const targtElemt = e.target;
        const parentElemt = targtElemt.closest("li")

        parentElemt.remove()
    })

}


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = frm.inItem.value;
    
    if(item == "") {
        alert("Pfvr, adicione um item para continuarmos!")
        frm.inItem.focus();
        return
    }

    elementTemp(item)
    frm.reset()
    frm.inItem.focus()  
})
