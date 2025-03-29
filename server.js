const express = require('express');
const path = require('path');

const app = express();
const PORT = 5501;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
