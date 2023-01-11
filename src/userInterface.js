

    let sidebar = document.querySelector("aside");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    let searchBar = document.querySelector(".searchBar");
    let searchBtn = document.querySelector(".searchBtn");

    sidebarBtn.onclick = function(){
        sidebar.classList.toggle("active");
    }

    searchBtn.onclick = function(){
        searchBar.classList.toggle("active");
    }

  