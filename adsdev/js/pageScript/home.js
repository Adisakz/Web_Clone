document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let elements = document.querySelectorAll('.content-works .row .work');
        elements.forEach(function (element) {
            let position = element.getBoundingClientRect();

            // เช็คว่าองค์ประกอบอยู่ใน viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.style.animationName = 'moveLoadUp';
                element.style.animationDuration = '1.5s';
            }
        });
    });
    
});