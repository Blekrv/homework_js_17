addBtn.addEventListener("click", () => {
  overlay.style.height = "100vh";
});
closebtn.addEventListener("click", () => {
  overlay.style.height = "0vh";
});
createBtn.addEventListener("click", (event) => {
    event.preventDefault()
  let user = person()
  localStorage.setItem('user',JSON.stringify(user))
  console.log(user)
  $trambon.insertAdjacentHTML('afterend',`<div class="row">
  <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
      <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" class="img">
  </div>
  <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
      <div class="container" style="border-bottom:1px solid black">
        <h2 id="idint">${user.firstname} ${user.lastname}</h2>
      </div>
      <ul class="container details">
        <li><p><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span><a href="tel:+" id="userPhone">${user.phone}</a></p></li>
        <li><p><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span><a href="mailto:" id="userMail">${user.email}</a> </p></li>
        <li><p><span class="glyphicon glyphicon-map-marker one" style="width:50px;"></span><a href="#" id="userLoc">${user.location}</a></p></li>
      </ul>
  </div>
</div>
`)

});
let $details = document.querySelector('.details'),
    $trambon = document.querySelector('.jumbotron')
function person() {
  return {
    firstname: firstname.value.trim(),
    lastname: lastname.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    location: loc.value.trim()
  };
}
function addCard(obj){
    idint.textContent = `${obj.firstname} ${obj.lastname}`,
    userPhone.textContent = `${obj.phone}`,
    userMail.textContent = `${obj.email}`,
    userLoc.textContent = `${obj.location}`

    $trambon.insertAdjacentHTML('afterend',`<div class="row">
    <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
        <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" class="img">
    </div>
    <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
        <div class="container" style="border-bottom:1px solid black">
          <h2 id="idint">John Doe</h2>
        </div>
        <ul class="container details">
          <li><p><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span><a href="tel:+" id="userPhone">125125</a></p></li>
          <li><p><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span><a href="mailto:" id="userMail">somerandom@email.com</a> </p></li>
          <li><p><span class="glyphicon glyphicon-map-marker one" style="width:50px;"></span><a href="#" id="userLoc">Hyderabad</a></p></li>
        </ul>
    </div>
</div>
`)

}
