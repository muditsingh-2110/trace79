document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Alert for successful submission
    alert('Your message has been sent. Thank you!');
  
    // Open a popup window for successful submission
    openPopupWindow();
  
    // Reset form after successful submission
    document.getElementById('contact-form').reset();
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function openPopupWindow() {
    // Define popup window properties
    const popupWidth = 400;
    const popupHeight = 200;
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;

    // Open the popup window
    window.open('popup.html', 'Popup', `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
}
