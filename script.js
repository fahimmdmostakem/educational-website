function calculateFee() {
  const program = document.getElementById("program").value;
  const years = parseInt(document.getElementById("years").value);
  let feePerYear;

  switch (program) {
    case "bachelor": feePerYear = 12000; break;
    case "masters": feePerYear = 18000; break;
    case "diploma": feePerYear = 8000; break;
    default: feePerYear = 0;
  }

  const totalFee = feePerYear * years;
  document.getElementById("fee-output").innerText = `Estimated Tuition Fee: $${totalFee}`;
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Your inquiry has been submitted successfully!");
  return true;
}
