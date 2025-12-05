document.addEventListener("DOMContentLoaded", function () {
    var triggerTabList = [].slice.call(
        document.querySelectorAll("#v-pills-tab .nav-link")
    );
    if (triggerTabList.length > 0) {
        triggerTabList.forEach(function (triggerEl) {
            triggerEl.addEventListener("mouseenter", function (event) {
                var tabInstance = bootstrap.Tab.getOrCreateInstance(triggerEl);
                tabInstance.show();
            });
        });
    }

    if (window.innerWidth > 992) {
        document
            .querySelectorAll(".navbar .dropdown")
            .forEach(function (everyDropdown) {
                everyDropdown.addEventListener("mouseenter", function (e) {
                    let el_btn = this.querySelector(".dropdown-toggle");
                    let el_menu = this.querySelector(".dropdown-menu");
                    if (el_btn && el_menu) {
                        el_btn.classList.add("show");
                        el_menu.classList.add("show");
                        el_btn.setAttribute("aria-expanded", "true");
                    }
                });
                everyDropdown.addEventListener("mouseleave", function (e) {
                    let el_btn = this.querySelector(".dropdown-toggle");
                    let el_menu = this.querySelector(".dropdown-menu");
                    if (el_btn && el_menu) {
                        el_btn.classList.remove("show");
                        el_menu.classList.remove("show");
                        el_btn.setAttribute("aria-expanded", "false");
                    }
                });
            });
    }

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const imgContainer = document.querySelector(".aspect-ratio-169");
    const dotItem = document.querySelectorAll(".dot");

    if (imgPosition.length > 0 && imgContainer && dotItem.length > 0) {
        let index = 0;
        let imgNumber = imgPosition.length;

        imgPosition.forEach(function (image, i) {
            image.style.left = i * 100 + "%";

            dotItem[i].addEventListener("click", function () {
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

            dotItem.forEach(function (dot) {
                dot.classList.remove("active");
            });

            if (dotItem[targetIndex]) {
                dotItem[targetIndex].classList.add("active");
            }
        }

        setInterval(imgSlide, 5000);
    }
});

function changeImage(clickedThumbnail) {

    const mainImage = document.getElementById("mainImage");


    mainImage.src = clickedThumbnail.src;


    document.querySelectorAll(".thumb-img").forEach((thumb) => {
        thumb.classList.remove("border-dark"); 
        thumb.classList.add("border-transparent"); 
    });


    clickedThumbnail.classList.remove("border-transparent");
    clickedThumbnail.classList.add("border-dark");
}


function updateSize(size) {
    const sizeLabel = document.getElementById("selectedSize");
    if (sizeLabel) sizeLabel.innerText = size;
}


function increaseQty(btn) {
    let input = btn.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decreaseQty(btn) {
    let input = btn.nextElementSibling;
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.rating-stars i');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-value');
            
            stars.forEach(s => {
                s.classList.remove('bi-star-fill');
                s.classList.add('bi-star');
            });

            for(let i = 0; i < rating; i++) {
                stars[i].classList.remove('bi-star');
                stars[i].classList.add('bi-star-fill');
            }
        });
    });
});
function validateRegister(e) {
            e.preventDefault(); // Ngăn form gửi đi để kiểm tra trước
            
            const pass = document.getElementById('regPassword').value;
            const confirmPass = document.getElementById('regConfirmPassword').value;
            const errorMsg = document.getElementById('passwordError');

            if (pass !== confirmPass) {
                errorMsg.classList.remove('d-none'); // Hiện lỗi
                return false;
            } else {
                errorMsg.classList.add('d-none'); // Ẩn lỗi
                alert('Đăng ký thành công!'); // (Giả lập)
                // window.location.href = 'login.html'; // Chuyển hướng
            }
        }