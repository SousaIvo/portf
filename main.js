function getCursorPosition(event) {
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerHeight + "%";

    const eyes1 = document.getElementById("eyes1");
    const eyes2 = document.getElementById("eyes2");

    eyes1.style.left = x;
    eyes1.style.top = y;
    eyes1.style.transform = `translate(-${x}, -${y})`;

    eyes2.style.left = x;
    eyes2.style.top = y;
    eyes2.style.transform = `translate(-${x}, -${y})`;
}