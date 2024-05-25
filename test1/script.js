function shareToInstagram() {
    var imageUrl = document.getElementById('imageUrlInput').value.trim();
    if (!imageUrl) {
        alert('Please paste an image URL.');
        return;
    }

    // Example of posting to Instagram story
    var instagramLink = 'https://www.instagram.com/stories/';
    window.open(instagramLink, '_blank');

    // Example of posting the link to the website
    var websiteLink = 'https://yourwebsite.com/';
    var caption = 'Check out my personality test result!';
    var messengerLink = 'fb-messenger://share/?link=' + encodeURIComponent(websiteLink) + '&app_id=123456789&hashtag=#personalitytest&quote=' + encodeURIComponent(caption);
    window.open(messengerLink, '_blank');
}

