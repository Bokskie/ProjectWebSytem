const profileAdmin = document.querySelector("#user-image");
var display_image = "";

profileAdmin.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        display_image = reader.result;
        document.querySelector("#admin-image").style.backgroundImage = `url(${display_image})`
    });
    reader.readAsDataURL(this.files[0])
});

document.getElementById("admin-image").innerHTML = ChangeProfile;
