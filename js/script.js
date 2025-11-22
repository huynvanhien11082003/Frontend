document.addEventListener("DOMContentLoaded", function () {

    var triggerTabList = [].slice.call(document.querySelectorAll('#v-pills-tab .nav-link'));
    if (triggerTabList.length > 0) {
        triggerTabList.forEach(function (triggerEl) {
            // Sự kiện: Rê chuột vào nút -> Chuyển Tab
            triggerEl.addEventListener('mouseenter', function (event) {
                var tabInstance = bootstrap.Tab.getOrCreateInstance(triggerEl);
                tabInstance.show();
            });
        });
    }

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
            // Chuột ra -> Ẩn menu
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
    
    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const imgContainer = document.querySelector('.aspect-ratio-169');
    const dotItem = document.querySelectorAll(".dot");
    
    if (imgPosition.length > 0 && imgContainer && dotItem.length > 0) {
        
        let index = 0;
        let imgNumber = imgPosition.length;

        imgPosition.forEach(function(image, i){
            image.style.left = i*100 + "%"; 
            
            dotItem[i].addEventListener("click", function(){
                slider(i);
                index = i;
            });
        });

        function imgSlide() {
            index++;
            if (index >= imgNumber) {
                index = 0;
            }
            slider(index);
        }

        function slider(targetIndex) {
            imgContainer.style.left = "-" + targetIndex * 100 + "%";
            
            dotItem.forEach(function(dot) {
                dot.classList.remove("active");
            });
            
            if (dotItem[targetIndex]) {
                dotItem[targetIndex].classList.add("active");
            }
        }

        setInterval(imgSlide, 5000);
    }

});