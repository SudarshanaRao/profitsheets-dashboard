document.addEventListener("DOMContentLoaded", () => {
    const createTaskLink = document.getElementById("createTask");
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopupBtn = document.getElementById("closePopup");
    const popupForm = document.getElementById("popupForm");
  
    createTaskLink.addEventListener("click", (event) => {
      event.preventDefault();
      popupOverlay.style.display = "flex";
    });
  
    closePopupBtn.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  
    popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const domain = document.getElementById("domain").value;
      const description = document.getElementById("description").value;
  
      if (domain && description) {
        alert(`Task Created!\nDomain: ${domain}\nDescription: ${description}`);
        popupOverlay.style.display = "none"; // Close popup after submission
      } else {
        alert("Please fill out all fields!");
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const updateTaskLink = document.getElementById("updateTask");
    const updatePopupOverlay = document.getElementById("updatePopupOverlay");
    const closeUpdatePopupBtn = document.getElementById("closeUpdatePopup");
    const updatePopupForm = document.getElementById("updatePopupForm");
  
    updateTaskLink.addEventListener("click", (event) => {
      event.preventDefault();
      updatePopupOverlay.style.display = "flex";
    });
  
    closeUpdatePopupBtn.addEventListener("click", () => {
      updatePopupOverlay.style.display = "none";
    });
  
    updatePopupForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const domain = document.getElementById("updateDomain").value;
      const description = document.getElementById("updateDescription").value;
  
      if (domain && description) {
        alert(`Task Updated!\nDomain: ${domain}\nDescription: ${description}`);
        updatePopupOverlay.style.display = "none"; // Close popup after update
      } else {
        alert("Please fill out all fields!");
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const deleteTaskLink = document.getElementById("deleteTask");
    const deletePopupOverlay = document.getElementById("deletePopupOverlay");
    const closeDeletePopupBtn = document.getElementById("closeDeletePopup");
    const deletePopupForm = document.getElementById("deletePopupForm");
  
    // Open the delete confirmation popup when clicking on the "Delete Task" link
    deleteTaskLink.addEventListener("click", (event) => {
      event.preventDefault();
      deletePopupOverlay.style.display = "flex";
    });
  
    // Close the delete popup when clicking the cancel button
    closeDeletePopupBtn.addEventListener("click", () => {
      deletePopupOverlay.style.display = "none";
    });
  
    // Handle form submission to delete the task
    deletePopupForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Simulate task deletion
      alert("Task deleted successfully!");
  
      // Close the popup after deletion
      deletePopupOverlay.style.display = "none";
    });
  });
  