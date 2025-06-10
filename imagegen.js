  function openPopup() {
      document.getElementById("popupModal").style.display = "block";
    }

    function closePopup() {
      document.getElementById("popupModal").style.display = "none";
    }

    // Close if clicking outside the modal
    window.onclick = function(event) {
      const modal = document.getElementById("popupModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
