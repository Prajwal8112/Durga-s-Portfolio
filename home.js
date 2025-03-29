function showCertificate(imageSrc) {
    const certWindow = window.open("", "_blank", "width=800,height=600");
    certWindow.document.writeln(`
        <html>
        <head>
            <title>Certificate</title>
            <style>
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background: black;
                    margin: 0;
                }
                img {
                    max-width: 90%;
                    max-height: 90%;
                    border: 5px solid white;
                    box-shadow: 0px 0px 20px white;
                }
            </style>
        </head>
        <body>
            <img src="${imageSrc}" alt="Certificate">
        </body>
        </html>
    `);
     }