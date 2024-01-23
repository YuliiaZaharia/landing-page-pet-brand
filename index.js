function toggleNavigation() {
    const element = document.getElementById("navigation");

    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }

  function showStep(step) {
    const listOfElements = document.querySelectorAll(
      ".interactive-form > div"
    );
    for (const element of listOfElements) {
      if (element.classList.contains(step)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  }

  function showStep2() {
    const inputElement = document.querySelector(
      ".step-1 input[type='input']"
    );
    const spanElement = document.querySelector(".step-2 > p > span");
    spanElement.innerHTML = inputElement.value;
    showStep("step-2");
  }

  function showStep4() {
    const inputElement = document.querySelector(
      ".step-1 input[type='input']"
    );
    const spanElement = document.querySelector(".step-4 > p > span");
    console.log(spanElement, inputElement);
    spanElement.innerHTML = inputElement.value;
    showStep("step-4");
  }

  function showStepExit() {
    const inputElement = document.querySelector(
      ".step-1 input[type='input']"
    );
    const spanElement = document.querySelector(".step-exit > p > span");

    spanElement.innerHTML = inputElement.value;
    showStep("step-exit");
  }