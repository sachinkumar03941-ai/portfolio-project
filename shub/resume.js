function generateResume() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let skills = document.getElementById("skills").value;
  let experience = document.getElementById("experience").value;
  let education = document.getElementById("education").value;

  if (!name || !email || !phone) {
      alert("Please fill out all required fields!");
      return;
  }

  let resumeContent = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Skills</h4>
      <p>${skills}</p>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p>
  `;

  document.getElementById("resumeContent").innerHTML = resumeContent;
  document.getElementById("resumeOutput").classList.remove("hidden");
}

function printResume() {
  let printContents = document.getElementById("resumeOutput").innerHTML;
  let originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}