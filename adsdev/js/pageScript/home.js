document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let elements = document.querySelectorAll('.content-works .row .work');
        elements.forEach(function (element) {
            let position = element.getBoundingClientRect();
            let elementHeight = element.clientHeight;
            let threshold = elementHeight * 0.3; // 40% ของความสูงของ element

            // เช็คว่าองค์ประกอบมีอย่างน้อย 40% ของตัวมันเองอยู่ใน viewport
            if (position.top < window.innerHeight - threshold && position.bottom >= threshold) {
                element.style.animationName = 'moveLoadUp';
                element.style.animationDuration = '1.8s';
            }
        });
    });
});