const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/gallery', express.static(path.join(__dirname, 'gallery')));

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'gallery.html'));
});

app.get('/weddings-a', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'weddings-a.html'));
});

app.get('/weddings-b', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'weddings-b.html'));
});

app.get('/weddings-c', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'weddings-c.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.post('/send', (req, res) => {
  console.log('Received body:', req.body);

  const { name, phone, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ success: false, message: 'Please fill all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ success: false, message: 'Invalid email address.' });
  }

  const entry = {
    name,
    phone,
    email,
    message,
    date: new Date().toLocaleString()
  };

  const filePath = path.join(dataDir, 'messages.json');
  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  messages.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  res.json({ success: true, message: 'Message sent successfully! We will soon contact you!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});