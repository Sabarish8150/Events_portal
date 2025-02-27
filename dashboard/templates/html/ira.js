// Function to start assessment
function startAssessment(eventCode) {
    alert(`Starting assessment for event: ${eventCode}`);
    // Redirect to the assessment page or start the exam logic
}

// Sidebar toggle for mobile
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    container.classList.toggle('sidebar-active');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('div');
    toggleBtn.classList.add('sidebar-toggle');
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header').appendChild(toggleBtn);

    toggleBtn.addEventListener('click', toggleSidebar);
});

// Adjust layout on resize
function adjustLayout() {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        container.classList.remove('sidebar-active');
    } else {
        sidebar.classList.add('active');
        container.classList.add('sidebar-active');
    }
}

window.addEventListener('resize', adjustLayout);
adjustLayout();