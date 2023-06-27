function calculate(pages, price) {
  price = parseInt(price);
  pages = parseInt(pages) / 2;
  console.log("pages", pages);
  console.log("price", price);
  var bmi = price * pages;
  console.log("BMI: ", bmi);
  document.getElementById("bmi").innerHTML = bmi;
}

function clear_calculator() {
  console.log("Clear");
  document.getElementById("range").classList.remove("bad");
  document.getElementById("range").classList.remove("good");
  document.getElementById("range").classList.add("neutral");
  document.getElementById("range").innerHTML = "Enter Measurements";
  document.getElementById("bmi").innerHTML = "--.--";
  document.getElementById("pages_input").value = "";
  document.getElementById("price_input").value = "";
  document.getElementById("pages_input").focus();
}
