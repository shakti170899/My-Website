// JavaScript to dynamically add multiple videos
document.addEventListener("DOMContentLoaded", function() {
    // Array of video URLs from Google Drive
    const videoUrls = [
        "https://drive.google.com/file/d/19m5W6Ua3I_AUrNKhkqWRjEEGryA1Gn0x/view?usp=drive_link", // Example video URL
        "https://drive.google.com/file/d/1AbcdefGhijkLmnopQrstuVwxYz123456/preview", // Add more video URLs here
        "https://drive.google.com/file/d/2XyZzAbcdefGhijklmnopQRstu/preview" // Add more video URLs here
    ];

    // Function to create an iframe for a given video URL
    function createVideoIframe(url) {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.allow = "autoplay";
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "315px"; // Adjust height as needed
        iframe.style.maxWidth = "640px"; // Maximum width of the video
        return iframe;
    }

    // Insert iframes for each video URL into the video section
    const videoSection = document.getElementById("video-section");
    videoUrls.forEach(url => {
        const iframe = createVideoIframe(url);
        videoSection.appendChild(iframe);
    });
});
