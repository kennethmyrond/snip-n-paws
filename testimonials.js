const testimonials = [
    {
        img: "assets/images/testimonial2.jfif",
        title: "Alex R.",
        text: "Snip N' Save is short yet incredibly informative, providing essential insights into spaying and neutering in a straightforward manner"
    },
    {
        img: "assets/images/edures.jpg",
        title: "Amazing Volunteers",
        text: "The volunteers treated our rescued kitten with so much love. We are forever grateful!"
    },
    {
        img: "assets/images/edures.jpg",
        title: "Great Experience",
        text: "Their spay and neuter program significantly helped our community. Highly recommended!"
    }
];

let index = 0;

function updateSlide() {
    document.getElementById("petImg").src = testimonials[index].img;
    document.getElementById("testimonialTitle").innerText = testimonials[index].title;
    document.getElementById("testimonialText").innerText = testimonials[index].text;
}

function nextSlide() {
    index = (index + 1) % testimonials.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateSlide();
}
