// Open Register Modal
function openRegisterModal(eventCode = '') {
    const modal = document.getElementById('registerModal');
    const eventCodeInput = document.getElementById('event-code');
    if (eventCode) {
        eventCodeInput.value = eventCode;
    }
    modal.style.display = 'flex';
}

// Close Register Modal
function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'none';
}

// Handle Form Submission
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const eventCode = document.getElementById('event-code').value;
    const whatsappNumber = document.getElementById('whatsapp-number').value;

    if (eventCode && whatsappNumber) {
        alert(`Registration Successful!\nEvent Code: ${eventCode}\nWhatsApp Number: ${whatsappNumber}`);
        closeRegisterModal();
    } else {
        alert('Please fill out all fields.');
    }
});

// Sidebar Toggle for Mobile
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

// Adjust Layout on Resize
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