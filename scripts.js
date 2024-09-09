document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const addImageBtn = document.getElementById('add-image-btn');
    const uploadInput = document.getElementById('upload-image');
    const gallery = document.querySelector('.gallery');

    // Tab Switching Logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContents.forEach(content => {
                content.style.display = content.id === tab.dataset.tab ? 'block' : 'none';
            });
        });
    });

    // Add Image Logic
    addImageBtn.addEventListener('click', () => {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newImage = document.createElement('img');
                newImage.src = e.target.result;
                newImage.alt = 'New Image';
                gallery.appendChild(newImage);
            };
            reader.readAsDataURL(files[0]);
        }
    });
});
