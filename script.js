// Thêm hiệu ứng khi cuộn
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
// Tạo một observer để phát hiện phần tử khi nó vào vùng nhìn thấy của người dùng
const fadeElements = document.querySelectorAll('.fade-up'); // Chọn tất cả các phần tử cần thêm hiệu ứng

// Cấu hình observer
const observerOptions = {
    root: null,  // Theo dõi trong vùng nhìn thấy của viewport
    rootMargin: '0px',
    threshold: 0.1 // Phần tử sẽ xuất hiện khi ít nhất 10% của nó vào màn hình
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Thêm lớp 'visible' khi phần tử xuất hiện trong viewport
            observer.unobserve(entry.target); // Dừng theo dõi phần tử sau khi nó đã xuất hiện
        }
    });
}, observerOptions);

// Quan sát tất cả các phần tử cần thêm hiệu ứng
fadeElements.forEach(element => {
    observer.observe(element);
});
