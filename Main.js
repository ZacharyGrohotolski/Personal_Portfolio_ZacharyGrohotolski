/* 
Zachary Grohotolski
IST 256
DOM Interactivity
*/

// ================= ACCORDION =================
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("active");
    });
});

// ================= DARK MODE =================
const darkSwitch = document.getElementById("darkSwitch");

if (darkSwitch) {
    darkSwitch.addEventListener("change", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
    });
}
// ================= IMAGE HOVER =================
const projectImage = document.getElementById("projectImage");

if (projectImage) {
    projectImage.addEventListener("mouseover", function () {
        projectImage.style.transform = "scale(1.1)";
    });

    projectImage.addEventListener("mouseout", function () {
        projectImage.style.transform = "scale(1)";
    });

}
