
// typing animation
var typed = new Typed(".typing", {
    strings: [
        "Student",
        "Blogger",
        "Competitive Coder",
        "WebDeveloper",
        "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});
var typed = new Typed(".typing-2", {
    strings: [
        "Student",
        "Blogger",
        "Competitive Coder",
        "WebDeveloper",
        "Freelancer",
    ],
    typeSpeed: 99,
    backSpeed: 90,
    loop: true,
});
// slide-up script
$(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
});

$(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
});
/* Adding the gmail contact facility */
function sendemail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "60mqcs20shivamyadav@gmail.com",
        Password: "31B40B31E46C12C1557EE411D5B9361510F4",
        From: "60mqcs20shivamyadav@gmail.com",
        To: "shivamyadavatr@gmail.com",
        ReplyFrom: document.getElementById("email").value,
        Subject: "New Enquiry Customer",
        Body: "Name: " + document.getElementById("name").value
            + "<br>Subject: " + document.getElementById("subject").value
            + "<br>Message: " + document.getElementById('msg').value
            + "<br>Email: " + document.getElementById("email").value,
    }).then(
        message => alert("Thanks for contacting with us. Our Team will reach out soon.")
    );
}
