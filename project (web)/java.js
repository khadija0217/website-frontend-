
  const learnButtons = document.querySelectorAll('button');
  learnButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.innerText.toLowerCase().includes('learn more')) {
        alert("Thanks for your interest! We'll guide you further.");
      }
    });
  });

  const rows = document.querySelectorAll("table tr");
  rows.forEach(row => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#f0f0f0";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor = "";
    });
  });

  const topButton = document.createElement("button");
  topButton.innerText = "↑ Top";
  topButton.style.position = "fixed";
  topButton.style.bottom = "20px";
  topButton.style.right = "20px";
  topButton.style.padding = "10px";
  topButton.style.display = "none";
  topButton.style.backgroundColor = "#333";
  topButton.style.color = "white";
  topButton.style.border = "none";
  topButton.style.borderRadius = "5px";
  topButton.style.cursor = "pointer";

  document.body.appendChild(topButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

