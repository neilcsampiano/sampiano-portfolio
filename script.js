function showMore() {
    var text = document.getElementById("extra");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
  function downloadCV() {
    alert("Downloading CV...");
  }
  
  function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
  
    if (name === "" || email === "" || msg === "") {
      document.getElementById("result").innerText = "Please fill out all fields.";
      return false;
    }
  
    document.getElementById("result").innerText = "Message sent!";
    return false;
  }