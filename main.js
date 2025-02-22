const image = document.getElementById('bg-image');
const popup = document.getElementById('popup');
// const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');



image.addEventListener('click', () => {
    // image.pause("true");
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

 const hidePopup = () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    // image.play();
};

closeBtn.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);


const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Buy button clicked!');
    });
}); 





