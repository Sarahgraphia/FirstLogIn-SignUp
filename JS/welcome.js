

let welcomeName = localStorage.getItem('currentUserName');

document.querySelector('.welcomeAlert').innerHTML = `Welcome on board ${welcomeName} :) `;

let logOutBtn= document.getElementById('logOut');

logOutBtn.addEventListener( 'click', function(){

  localStorage.removeItem('currentUserName');

  window.location.href = 'index.html';

} )