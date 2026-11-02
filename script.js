// 1. التبديل بين نموذج Login ونموذج Sign Up
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// 2. التحكم بفتح وإغلاق قائمة التخصيص
const customizerBtn = document.getElementById('customizer-toggle');
const customizerMenu = document.getElementById('customizer-menu');

customizerBtn.addEventListener('click', () => {
    customizerMenu.classList.toggle('active');
});

// 3. التبديل بين الوضع النهاري والليلي
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeBtn.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        html.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'ليلي';
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'نهاري';
    }
});

// 4. تغيير درجات الألوان
const colorDots = document.querySelectorAll('.color-dot');

colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        const selectedColor = dot.getAttribute('data-color');
        html.setAttribute('data-color', selectedColor);
    });
});