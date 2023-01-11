/*-----------------RECEIVED FUNCTION-----------------------*/
const form1El = document.getElementById("form");
const tbody1El = document.getElementById("tbody");
const table1El = document.getElementById("table");

function onAddWebsite(e){
    e.preventDefault();


    const name1 = document.getElementById("name1").value;
    const orders1 = document.getElementById("orders1").value;
    const mobileNumber1 = document.getElementById("mobileNumber1").value;
    const department1 = document.getElementById("dapartment1").value;
    const date1 = document.getElementById("date1").value;
        tbody1El.innerHTML +=`
            <tr>
                <td>${name1}</td>
                <td>${orders1}</td>
                <td>${mobileNumber1}</td>
                <td>${department1}</td>
                <td>${date1}</td>
                <td><button class="receiveBtn">Receive</button></td>
            </tr>
            `;
}

function onDeleteRow(e){
    if(!e.target.classList.contains("receiveBtn")){
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

form1El.addEventListener("submit", onAddWebsite);
table1El.addEventListener("click", onDeleteRow);
