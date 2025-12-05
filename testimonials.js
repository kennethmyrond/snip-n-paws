const testimonials = [
    {
        img: "assets/images/edures.jpg",
        title: "Happy Pet Owner",
        text: "Snip N' Save helped my dog get the proper care she needed. The team is friendly and professional!"
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
