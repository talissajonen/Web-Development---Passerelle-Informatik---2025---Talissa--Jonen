this.onload = () => {
    const body = document.querySelector('body');
    const title = document.createElement('h1');
    title.textContent = 'adding my first text via code';

    const mySpan = document.createElement("span");
    mySpan.textContent = " (span) ";
    title.appendChild(mySpan);

    body.appendChild(title);

    const unwanted = document.querySelector('.info');
    if (unwanted) {
        unwanted.remove();
    }
}