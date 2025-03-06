async function handleCandidateLogin(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/candidate/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginId, password })
    });

    const result = await response.json();
    if (result.success) {
        localStorage.setItem('candidateName', result.candidate.name);
        localStorage.setItem('candidateEmail', result.candidate.email);
        navigate('/candidate-dashboard');
    } else {
        alert('Invalid login ID or password');
    }
}
