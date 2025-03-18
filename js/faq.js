document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const question = dropdown.querySelector('.dropdown-question');
        const content = dropdown.querySelector('.dropdown-content');

        question.addEventListener('click', () => {
            const isOpen = dropdown.classList.contains('active');

            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                    d.querySelector('.dropdown-content').style.maxHeight = null;
                }
            });

            dropdown.classList.toggle('active');

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});