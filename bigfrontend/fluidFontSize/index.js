document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded');

    const heightOutput = document.querySelector("#height");
    const widthOutput = document.querySelector("#width");

    window.addEventListener("resize", () => {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
    })
});