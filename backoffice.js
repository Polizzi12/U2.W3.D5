const apikey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxZGEzOTRjNTllYzAwMTk5MGQ5MzMiLCJpYXQiOjE3MDkzMDAyODEsImV4cCI6MTcxMDUwOTg4MX0.JoB7IPuCds_Xi_p_VybQZNTI7IvoK7hOZMgss6rX8IE"
const url = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";


  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    postData();
  });

  
function postData() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const image = document.getElementById("image").value;
  const prezzo = document.getElementById("price").value;

  const data = {
    name:title,
    description: description,
    brand: brand,
    image: image,
    price: prezzo,
  };

  fetch(url, {
    
    method: "GET", 
    body: JSON.stringify(data), 
   
    headers: {
      
      Authorization: apikey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 400) {
          throw new Error("400 - Errore lato client");
        }

        if (response.status === 404) {
          throw new Error("404 - Dato non trovato");
        }

        if (response.status === 500) {
          throw new Error("500 - Errore lato server");
        }

        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((newAppointment) => {
      if (newAppointment) {
        alert("Appuntamento con id: " + " è stato modificato con successo ");
      } else {
        alert("Appuntamento con id: " + " è stato creato correttamente");
        e.target.reset();
      }
    })
    .catch((err) => console.log(err));
}
