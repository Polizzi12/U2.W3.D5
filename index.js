const riga = document.getElementsByClassName("row")[0];
 
function createCard(image, title, description){

const col = document.createElement("div");
  riga.appendChild(col);
  col.className = "col-6 col-md-3";
  

  const card = document.createElement("div");
  col.appendChild(card);
  col.className = "card";
  col.textContent = "width: 18rem";

  const image = document.createElement("image");
  card.appendChild(image);
  image.className = "card-img-top";
  image.src=imageSrc

  const body = document.createElement("div");
  card.appendChild(body);
  body.className = "card-body";
  

  const h5 = document.createElement("h5");
  body.appendChild(p);
  h5.className = "card-title";
  h5.textContent = title;

  const p = document.createElement("p");
  body.appendChild(p);
  p.className = "card-text";
  p.textContent = description;

  const btna = document.createElement("a");
  body.appendChild(btna);
  btna.className = "btn btn-primary";
  btna.textContent = "Dettaglio";

  const btnb = document.createElement("a");
    body.appendChild(btnb);
  btnb.className = "btn btn-success";
  btnb.textContent = "Modifica";
}
const handleBtnClick = () => {
  window.location.assign("./backoffice.html?agendaId=" + appointmentId)
}

const apikey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxZGEzOTRjNTllYzAwMTk5MGQ5MzMiLCJpYXQiOjE3MDkzMDAyODEsImV4cCI6MTcxMDUwOTg4MX0.JoB7IPuCds_Xi_p_VybQZNTI7IvoK7hOZMgss6rX8IE"
const url ="https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";

fetch(url, {
    
  method: "GET", 
  body: JSON.stringify(data), 
 
  headers: {
    
    Authorization: apikey,
    "Content-Type": "application/json",
  },
});
then((response) => {
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
    console.log(newAppointment);

   newAppointment.forEach((ogg) => {
    createCard (ogg.image, ogg.name, ogg.description);
   });
  })
  .catch((err) => console.log(err));
