let currentRole = '';

function selectRole(role) {
    currentRole = role;
    
    // Add active class to selected button
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === role) {
            btn.classList.add('active');
        }
    });

    // Show/hide certificate section based on role
    const certificateSection = document.getElementById('certificateSection');
    if (role === 'teacher') {
        certificateSection.style.display = 'block';
    } else {
        certificateSection.style.display = 'none';
    }

    // Switch to step 2
    setTimeout(() => {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    }, 300);
}

function goBack() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    currentRole = '';
    
    // Remove active class from buttons
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}