// Toggle Sidebar on Mobile
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const navLinks = document.querySelector('.nav-links');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    container.classList.toggle('sidebar-active');
}

// Add event listener for sidebar toggle (e.g., a button or menu icon)
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('div');
    toggleBtn.classList.add('sidebar-toggle');
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header').appendChild(toggleBtn);

    toggleBtn.addEventListener('click', toggleSidebar);
});

// Adjust Layout on Resize
function adjustLayout() {
    if (window.innerWidth <= 768) {
        // Collapse sidebar by default on mobile
        sidebar.classList.remove('active');
        container.classList.remove('sidebar-active');

        // Adjust nav-links for mobile
        navLinks.style.flexDirection = 'column';
    } else {
        // Reset sidebar and layout for larger screens
        sidebar.classList.add('active');
        container.classList.add('sidebar-active');
        navLinks.style.flexDirection = 'row';
    }
}

// Run on page load and window resize
window.addEventListener('resize', adjustLayout);
adjustLayout();

// Add touch-friendly interactions
document.querySelectorAll('.event-card, .target-card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.add('touched');
    });

    card.addEventListener('touchend', () => {
        card.classList.remove('touched');
    });
});