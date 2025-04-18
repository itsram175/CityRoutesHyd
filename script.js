const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.features');
const dots = document.querySelectorAll('.dot');
let index = 0;

function updateSlider() {
    track.style.transform = `translateX(-${index * 300}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
}

// Allow clicking on dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

setInterval(autoSlide, 2000); // Slide every 3 seconds


function downloadNow() {
    closePopUp();

    getId('popUp').classList.remove('hide');
    getId('chooseBox').classList.remove('hide');
}

function supportDownload() {
    closePopUp();

    getId('popUp').classList.remove('hide');
    getId('supportDownload').classList.remove('hide');
}

function directDownload() {
    closePopUp();
    getId('popUp').classList.remove('hide');
    getId('chooseBox').classList.add('hide');
    getId('downloadBox').classList.remove('hide');

    window.location.href = "https://neon-crisp-c2dd29.netlify.app/cityroutesHyd.apk";
}

function downloadHere() {
    window.location.href = "https://neon-crisp-c2dd29.netlify.app/cityroutesHyd.apk";
}

function supportDLink() {
    window.location.href = "https://modijiurl.com/cityroutesHyd";
}

function closePopUp() {
    getId('popUp').classList.add('hide');
    getId('chooseBox').classList.add('hide');
    getId('downloadBox').classList.add('hide');
    getId('supportDownload').classList.add('hide');
}

function getId(element) {
    return document.getElementById(element);
}
