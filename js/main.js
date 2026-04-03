// main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("시민통통 플랫폼 리뉴얼 스크립트 로드 완료");

    // Header scroll background effect (if needed)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
