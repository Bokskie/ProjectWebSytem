

function searchPage(){
    var search = document.getElementById("search").value;


    if(search === "Menu"){
        window.open("#menu")
    }
    if(search === "menu"){
        window.open("#menu")
    }
    if(search === "MENU"){
        window.open("#menu")
    }


    if(search === "Recipe"){
        window.open("#recipe")
    }
    if(search === "recipe"){
        window.open("#recipe")
    }
    if(search === "RECIPE"){
        window.open("#recipe")
    }


    if(search === "Order"){
        window.open("#order")
    }
    if(search === "order"){
        window.open("#order")
    }
    if(search === "ORDER"){
        window.open("#order")
    }


    if(search === "CONTACT"){
        window.open("#contact")
    }
    if(search === "Contact"){
        window.open("#contact")
    }
    if(search === "contact"){
        window.open("#contact")
    }

    else{
        window.open("/ErrorPage.html")
    }
}

