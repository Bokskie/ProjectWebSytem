
    

 const formEl = document.querySelector("form");
 const tbodyEl = document.querySelector("tbody");
 const tableEl = document.querySelector("table");

 function onAddWebsite(e){
     e.preventDefault();


     const name = document.getElementById("name").value;
     const orders = document.getElementById("orders").value;
     const mobileNumber = document.getElementById("mobileNumber").value;
     const department = document.getElementById("dapartment").value;
     const date = document.getElementById("date").value;
         tbodyEl.innerHTML +=`
             <tr>
                 <td>${name}</td>
                 <td>${orders}</td>
                 <td>${mobileNumber}</td>
                 <td>${department}</td>
                 <td>${date}</td>
                 <td><button class="receiveBtn">Receive</button></td>
                 <td><button class="cancelBtn">Cancel</button></td>
             </tr>
             `;
 }

 function onReceiveRow(e){
     if(!e.target.classList.contains("receiveBtn")){
         return;
     }

     const btn = e.target;
     btn.closest("tr").remove();
 }

 function onCancelRow(e){
    if(!e.target.classList.contains("cancelBtn")){
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

 formEl.addEventListener("submit", onAddWebsite);
 tableEl.addEventListener("click", onReceiveRow);
 tableEl.addEventListener("click", onCancelRow);




   