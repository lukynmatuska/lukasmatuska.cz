var body = document.body;
var switcher = document.getElementsByClassName('js-toggle')[0];
switcher.classList.toggle('js-toggle--checked');

// Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
switcher.addEventListener("click", function () {
    this.classList.toggle('js-toggle--checked');
    this.classList.add('js-toggle--focus');
    // If dark mode is selected
    if (this.classList.contains('js-toggle--checked')) {
        body.classList.remove('light');
        body.classList.add('dark');
        // Save user preference in storage
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        setTimeout(function () {
            localStorage.removeItem('darkMode');
        }, 100);
    }
})

// Check Storage. Keep user preference on page reload
if (localStorage.getItem('darkMode')) {
    switcher.classList.add('js-toggle--checked');
    body.classList.add('dark');
}