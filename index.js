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


  gsap.from("#navigation", { opacity: 0, duration: 1, y: -20, ease: "power2.out", delay: 0.5 });

  const headerText = document.querySelector("header h1");
  gsap.from(headerText, { opacity: 0, scale: 0.8, duration: 1, ease: "elastic.out(1, 0.5)", delay: 1 });

  gsap.from(".icon", { x: -20, opacity: 0, duration: 1, ease: "power2.out", delay: 2 });

  gsap.to(".icon", {
    rotation: 360,
    duration: 4,
    ease: "elastic.out(1, 0.5)",
    repeat: -1,
    yoyo: true,
    delay: 1
  });

gsap.to(".nav-link", { color: "#f25849", duration: 2, ease: "power2.out", stagger: 0.2, repeat: -1 });
gsap.to(".btn", { scale: 0.9, opacity: 0.8, duration: 1, repeat: -1, yoyo: true, ease: "power2.in", delay: 3 });

gsap.from(".start-page-item img", { opacity: 0, scale: 0.8, duration: 4, ease: "elastic.out(1, 0.5)", stagger: 0.5});


  
  
  
  
  
  
  
  
  


