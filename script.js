const API_KEY = "60d47e42ee80c1fe8f30a08ec2a82012f95bc6a758130b7d64e4428dfb531190";
const API_URL = "https://verifyright.io/verify/email@example.com?token=API_KEY";

 function verifyEmail() {
      const email = document.getElementById("email").value;
      const resultElement = document.getElementById("result");

      if (!email) {
        resultElement.textContent = "Please enter an email.";
        resultElement.style.color = "red";
        return;
      }

      resultElement.textContent = "Verifying...";
      resultElement.style.color = "#333";

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ${API_KEY}"
        }
      })
      body: JSON.stringify({ email })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          resultElement.textContent = data.message || "Email is valid.";
          resultElement.style.color = "green";
        } else {
          resultElement.textContent = data.message || "Email is invalid.";
          resultElement.style.color = "red";
        }
      })
      .catch(error => {
        resultElement.textContent = "Error verifying email. Please try again.";
        resultElement.style.color = "red";
        console.error(error);
      });
    }