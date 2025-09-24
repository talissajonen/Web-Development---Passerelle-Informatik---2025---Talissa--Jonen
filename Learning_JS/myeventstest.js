this.onload = () => {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");

    btn1.onclick = onclick1;
   // btn1.onclick = onclick2;

    btn2.addEventListener("click", onclick1);
  //  btn2.addEventListener("click", onclick2);

    let tests = document.querySelectorAll("p");
    tests.forEach((i) =>
        i.addEventListener("click", (e) =>
            e.target.classList.toggle("selected")
        )
    );

    function onclick1(e) {
        console.info("onclick1", e.target.textContent);
    }

  //  function onclick2(e) {
  //      console.info("onclick2", e.target.textContent);
  //  }
};