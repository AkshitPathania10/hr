const API_URL = "https://my-backend.onrender.com"; // Replace with your backend URL

fetch(`${API_URL}/api/some-route`)
  .then((res) => res.json())
  .then((data) => console.log(data));
