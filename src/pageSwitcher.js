/*
window.onload = () => {
    const tab_switchers = document.querySelectorAll("[data-switcher]");

    for (let i = 0; i < tab_switchers.length; i++){

    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener("Click", () => {
        document.querySelector(".tabs .tab.is-active").classList.remove("is-active");
        tab_switcher.parentNode.classList.add("is-active");

        SwitcherPage(page_id);

        
    });
         
    }
}
    function SwitchPage (page_id){

        console.log(page_id);

        const current_page = document.querySelector(".pages .page.is-active");

        current_page.classList.remove("is-active");

        const next_page = document.querySelecor(`.pages .page[data-page="${page_id}"]`);
        next_page.classList.add("is-active");

    }
*/

    function setupTabs () {
        document.querySelectorAll(".tabs_button").forEach(button => {
            button.addEventListener("click", () => {
                const switcherPage = button.parentElement;
                const tabsContainer = switcherPage.parentElement;
                const tabNumber = button.dataset.forTab;
                const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabNumber}"]`);

               switcherPage.querySelectorAll(".tabs_button").forEach(button => {
                    button.classList.remove("tabs_button--active");
               });
               tabsContainer.querySelectorAll(".tabs_content").forEach(tab => {
                tab.classList.remove("tabs_content--active");
                });

                button.classList.add("tabs_button--active");

                tabToActivate.classList.add("tabs_content--active");
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () =>{
        setupTabs();
    });


