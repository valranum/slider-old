document.addEventListener('DOMContentLoaded', function () {
    const sliderHandle = document.getElementById('sliderHandle');
    const afterImage = document.getElementById('afterImage');

    sliderHandle.addEventListener('mousedown', function (e) {
        e.preventDefault();

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {
            const sliderRect = sliderHandle.parentElement.getBoundingClientRect();
            let newLeft = e.clientX - sliderRect.left;

            // Boundary conditions
            newLeft = Math.max(newLeft, 0);
            newLeft = Math.min(newLeft, sliderRect.width);

            afterImage.style.width = newLeft + 'px';
            sliderHandle.style.left = newLeft + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });
});
