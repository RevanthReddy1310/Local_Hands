function validateForm() {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm_password").value;
      const errorMessage = document.getElementById("error-message");

      if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }

    function showPreview() {
      const imageInput = document.getElementById("image");
      const preview = document.getElementById("preview");
      const tickIcon = document.getElementById("image-tick");

      if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
          tickIcon.style.display = "inline-block";
        };
        reader.readAsDataURL(imageInput.files[0]);
      } else {
        preview.style.display = "none";
        tickIcon.style.display = "none";
      }
    }

    function handleClose() {
      //if (confirm("Are you sure you want to exit the form?"))
       {
         window.location.href = "index.html";
      }
    }