document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('jobSearch').value;
    document.getElementById('jobListings').innerHTML = `<p>Searching for jobs related to "${searchQuery}"...</p>`;
    
    // Simulate a search operation (this should be replaced with actual search logic)
    setTimeout(() => {
        document.getElementById('jobListings').innerHTML = `
            <ul>
                <li>Software Engineer at ABC Corp</li>
                <li>Data Analyst at XYZ Inc</li>
                <li>Product Manager at LMN Ltd</li>
            </ul>
        `;
    }, 1000);
});
