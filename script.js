// Share button
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "This is an amazing LinkTree Website of Chandan Chaudhary 😍",
            url: "https://chandanchaudhary-linktree.netlify.app/",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Social share buttons

// Portfolio Share
const portfolioShare = document.querySelector("#portfolio-share");

portfolioShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Portfolio Wbesite.",
            url: "https://chandanchaudhary-portfolio.netlify.app/",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Linkedin Share
const linkedinShare = document.querySelector("#linkedin-share");

linkedinShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Linkedin Profile.",
            url: "https://www.linkedin.com/in/chandan--chaudhary/",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Github Share
const githubShare = document.querySelector("#github-share");

githubShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Github Profile.",
            url: "https://github.com/iamchandanchaudhary",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Website Share
const websiteShare = document.querySelector("#website-share");

websiteShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Website.",
            url: "https://c2explains-chandanchaudhary.onrender.com",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// YouTube Share
const youtubeShare = document.querySelector("#youtube-share");

youtubeShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's YouTube Channel.",
            url: "https://www.youtube.com/@c2explains",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Instagram Share
const instagramShare = document.querySelector("#instagram-share");

instagramShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Instagram Profile",
            url: "https://www.instagram.com/_.chandan_chaudhary/?hl=en",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// 2nd YouTube Share
const youtubeShare2 = document.querySelector("#youtube2-share");

youtubeShare2.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's YouTube Channel.",
            url: "https://www.youtube.com/@CreativeCMS",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});

// Replit share
const replitShare = document.querySelector("#replit-share");

replitShare.addEventListener("click", (event) => {
    if(navigator.share) {
        navigator.share({
            title: "Chandan Chaudhary's Replit Profile.",
            url: "https://replit.com/@ChandanChaudha3",
        }).then(() => console.log("Thanks for Sharing"))
        .catch((err) => console.log(err));
    } else {
        alert("Something Wrong");
    }
});