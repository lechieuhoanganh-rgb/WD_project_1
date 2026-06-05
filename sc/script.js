const uploadInput = document.getElementById('sketchUpload');
const previewContainer = document.getElementById('previewContainer');

uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewContainer.innerHTML = ''; 
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.display = 'block';
            img.style.maxWidth = '100%';
            img.style.border = '1px solid #000';
            previewContainer.appendChild(img);
        }
        
        reader.readAsDataURL(file);
    }
});