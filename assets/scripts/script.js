function myFunction() {
    const burgerMenu = document.querySelector("#burger");
    const myLinks = document.querySelector("#myLinks");
    if (myLinks.style.display == 'block') {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
}