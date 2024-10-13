// Function to load pages dynamically
function loadPage(page) {
    let contentDiv = document.getElementById('content');

    if (page.endsWith('.html')) {
        // If the page is an HTML file, load it dynamically using fetch
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                contentDiv.innerHTML = <p>${error.message}</p>;
            });
    } else {
        // Otherwise, handle as before for non-HTML pages
        switch (page) {
            case 'about':
                contentDiv.innerHTML = "<h2>About Page</h2><p>This is the about page.</p>";
                break;
            case 'contact':
                contentDiv.innerHTML = "<h2>Contact Page</h2><p>This is the contact page.</p>";
                break;
            default:
                contentDiv.innerHTML = "<p>Page not found.</p>";
        }
    }
}