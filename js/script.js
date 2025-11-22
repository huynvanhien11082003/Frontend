document.addEventListener("DOMContentLoaded", function () {
    var triggerTabList = [].slice.call(document.querySelectorAll('#v-pills-tab button'));

    triggerTabList.forEach(function (triggerEl) {
        triggerEl.addEventListener('mouseenter', function (event) {
            var tabInstance = bootstrap.Tab.getOrCreateInstance(triggerEl);
            tabInstance.show();
        });
    });

    if (window.innerWidth > 992) {
        document.querySelectorAll('.navbar .dropdown').forEach(function(everyDropdown) {
            everyDropdown.addEventListener('mouseenter', function(e) {
                let el_btn = this.querySelector('.dropdown-toggle'); 
                let el_menu = this.querySelector('.dropdown-menu');  
                if (el_btn && el_menu) {
                    el_btn.classList.add('show');
                    el_menu.classList.add('show');
                    el_btn.setAttribute('aria-expanded', 'true');
                }
            });
            everyDropdown.addEventListener('mouseleave', function(e) {
                let el_btn = this.querySelector('.dropdown-toggle');
                let el_menu = this.querySelector('.dropdown-menu');
                if (el_btn && el_menu) {
                    el_btn.classList.remove('show');
                    el_menu.classList.remove('show');
                    el_btn.setAttribute('aria-expanded', 'false');
                }
            });

        });
    }
});


