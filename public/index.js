// Function to decode JWT and extract the payload
function decodeJWT(token) {
    const payload = token.split('.')[1]; 
    const decodedPayload = atob(payload); 
    return JSON.parse(decodedPayload); 
}

// Function to check if token is expired
function isTokenExpired(token) {
    const decodedToken = decodeJWT(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decodedToken.exp < currentTime; // Check if token has expired
}

// Function to restrict page access
function restrictAccess() {
    const token = localStorage.getItem('access_token');
    
    if (!token || isTokenExpired(token)) {

        // If no token or token is expired, redirect to login page
        window.location.href = 'signin.html';
    } else {
        // Token is valid, display username
        displayUsername();
    }
}

// Display the username on the page
function displayUsername() {
    const token = localStorage.getItem('access_token');
    if (token) {
        const decodedToken = decodeJWT(token);
        const username = decodedToken['cognito:username']; // Cognito stores the username under 'cognito:username'
        document.getElementById('username').textContent = username;
    }
}

// Logout functionality
document.getElementById('logout_button').addEventListener('click', (event) => {
    event.preventDefault();
    // Clear the access token
    localStorage.removeItem('access_token');
    // Redirect to the login page
    window.location.href = 'signin.html';
});

restrictAccess();
displayUsername(); 