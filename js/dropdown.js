function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdown = document.getElementById("myDropdown");
      if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  };
  