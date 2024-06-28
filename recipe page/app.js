document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('onclick').split("'")[1];
            sections.forEach(section => {
                if (section.id === targetId.substring(1)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
