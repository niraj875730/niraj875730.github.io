
       

    document.getElementById('downloadButton').addEventListener('click', function() {
            // Get the image URL
            var imageUrl = document.getElementById('imageToDownload').src;

            // Create an anchor element and set the download attribute
            var link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'cv_download.jpg'; // Specify the download file name

            // Append the anchor to the body
            document.body.appendChild(link);

            // Programmatically click the anchor to trigger the download
            link.click();

            // Remove the anchor from the body
            document.body.removeChild(link);
        });
       
   
        document.getElementById('hamburger').addEventListener('click', function () {
            var navLinks = document.getElementById('nav-links');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
            }
        });
        