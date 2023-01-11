const Profile = document.querySelector("#user-image");
var uploaded_image = "";


Profile.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0])
})

document.getElementById("#display-image").innerHTML = ChangeProfile;