var urlApi = 'http://vps774456.ovh.net:3000/'
//var urlApi = 'http://localhost/'

function request(endPoint,fct){
  return fetch(`${urlApi}${endPoint}`)
  .then(response => {
    // Vérifier si la réponse est réussie (statut 200-299)
    if (!response.ok) {
      throw new Error(`Erreur de réseau : ${response.statusText}`);
    }
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Faire quelque chose avec les données JSON
    console.log (fct(data));
      return fct(data);
      
  })
  .catch(error => {
    // Gérer les erreurs
    console.error('Erreur lors de la récupération des données:', error);
  });
}

function user(data){
  return data;
}

document.addEventListener('DOMContentLoaded', function() {
  let userInformation = request(`user`,user);
  console.log(userInformation.value);
    let headerDom = createHeaderDom(
      "Développement Front End en Alternance 2 ans",
      "Jeune étudiante à la recherche d'une alternance dans le développement Web / Front End pour élargir mon cercle de connaissance autour de la créaion et ainsi me spécialiser dans la conception de site internet / logiciel.",
      "Henel Aemue",
      null
    );
    
    document.querySelector('#header').append(headerDom);

});


function createHeaderDom(titleText,descriptionPerso,identite,tete){


  let headerContact= document.createElement('header');
  let shortIdentity = document.createElement('h1');
  let title = document.createElement('div');
  let description = document.createElement('div');
  let photo = document.createElement('div');
  let longIdentity = document.createElement('div');

  title.textContent =titleText;
  description.textContent = descriptionPerso;
  shortIdentity.textContent =identite;

  headerContact.appendChild(shortIdentity);
  headerContact.appendChild(title);
  headerContact.appendChild(description);
  headerContact.appendChild(photo);
  headerContact.appendChild(longIdentity);
  
  return(headerContact);

}






