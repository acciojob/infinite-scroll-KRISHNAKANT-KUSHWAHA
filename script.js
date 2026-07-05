//your code here!
// const list=document.getElementById("infi-list");
// const item=document.createElement("li");
// item.innerHTML="Item 11";
// list.appendChild(item);


const list = document.getElementById("infi-list");
let itemCount = list.children.length;

list.addEventListener("scroll", () => {

    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {

        for (let i = 0; i < 2; i++) {
            itemCount++;

            const li = document.createElement("li");
            li.textContent = "Item " + itemCount;

            list.appendChild(li);
        }

    }

});