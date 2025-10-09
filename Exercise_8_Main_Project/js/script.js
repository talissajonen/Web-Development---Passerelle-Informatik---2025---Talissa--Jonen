const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  // --- Validation ---
  if (!data.name) return showError('Name is required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return showError('Invalid email address.');

  try {
    const response = await fetch('/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await response.json();

    if (json.success) {
      result.style.color = 'green';
      result.textContent = json.message;
      form.reset();
    } else {
      showError(json.message);
    }
  } catch (err) {
    showError('Error sending data. Check the server.');
  }
});

function showError(msg) {
  result.style.color = 'red';
  result.textContent = msg;
}