let section = document.querySelectorAll('section');
let sidebarLinks = document.querySelectorAll('.sidebar-option a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 140;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            sidebarLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.sidebar-option a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

