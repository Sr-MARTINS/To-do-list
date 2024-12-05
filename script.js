const container = document.querySelector(".container");
const boxItens = document.querySelector(".box-itens")
const frm = document.querySelector("form");

const lista = []

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = frm.inItem.value;
    
    if(item == "") {
        alert("Pfvr, adicione um item para continuarmos!")
        frm.inItem.focus();
        return
    }
    lista.push(item);

    elementTemp(item)
    frm.reset()
    frm.inItem.focus()
})

const elementTemp = (item) => {
    `
    <li class="item">
                <div class="item-cont">
                    <p></p>
                </div>

                <div class="butns">
                    <button class="btn" id="btEdit"> <i class="bi bi-check"></i> 
                    </button>
                    <button class="btn" id="btDelet"> <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </li>
    `

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

    const btEdit = document.createElement("button");
    const itemEdd = document.createElement("i")
    btEdit.classList.add("btn")
    itemEdd.classList.add("bi-check")
    divButns.appendChild(btEdit)
    btEdit.appendChild(itemEdd)
    

    const btDelet = document.createElement("button");
    const itemDelt = document.createElement("i")
    btDelet.classList.add("btn")
    itemDelt.classList.add("bi-trash3")
    divButns.appendChild(btDelet)
    btDelet.appendChild(itemDelt)

    btEdit.addEventListener("click", () => {
        let itemText = item
    })

    btDelet.addEventListener("click", (e) => {
        e.target;
        console.log(e)
        
    })

}