// =========================
// HEADER BUTTON
// =========================

const searchButton = document.querySelector('.header-icons button:nth-child(1)');
const heartButton = document.querySelector('.header-icons button:nth-child(2)');
const cartButton = document.querySelector('.header-icons button:nth-child(3)');

searchButton.addEventListener('click', () => {
  alert('검색 기능을 준비 중입니다.');
});

heartButton.addEventListener('click', () => {
  alert('관심상품 기능을 준비 중입니다.');
});

cartButton.addEventListener('click', () => {
  alert('장바구니 기능을 준비 중입니다.');
});


// =========================
// SHOP NOW BUTTON
// =========================

const shopButton = document.querySelector('.hero-text button');

shopButton.addEventListener('click', () => {
  document.querySelector('.products').scrollIntoView({
    behavior: 'smooth'
  });
});


// =========================
// PRODUCT HOVER
// =========================

const products = document.querySelectorAll('.product');

products.forEach((product) => {

  product.addEventListener('mouseenter', () => {
    product.style.transform = 'translateY(-5px)';
    product.style.transition = '0.3s';
  });

  product.addEventListener('mouseleave', () => {
    product.style.transform = 'translateY(0)';
  });

});