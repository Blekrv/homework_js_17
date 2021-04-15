function preLoader() {
  addBtn.addEventListener("click", () => {
    overlay.style.height = "100vh";
  });
  closebtn.addEventListener("click", () => {
    overlay.style.height = "0vh";
  });
  createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let user = person();
    localStorage.setItem(`${user.email}`, JSON.stringify(user));
    console.log(user);
    $trambon.innerHTML = "";
    checkStorage();
  });
  let $details = document.querySelector(".details"),
    $trambon = document.querySelector(".jumbotron");

  // console.log(localStorage.key(0))
  function checkStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
      addCard(user);
      // deleteItem(user)
     
    }
  }
  checkStorage();
  let buttonDelete = document.querySelectorAll(".delete");
  console.log(buttonDelete);
  for(let i = 0; i < buttonDelete.length; i++){
 let buttonDelete = document.querySelectorAll('.delete')
      buttonDelete[i].addEventListener('click', ()=>{
        console.log(i)
        localStorage.removeItem(localStorage.key(i))
        $trambon.innerHTML = "";
        checkStorage();
      })
    }
  function deleteItem(i) {
 
      $trambon.addEventListener("click", function (event) {
        if(event.target.tagName == 'BUTTON'){
          console.log(localStorage.key(this))
        localStorage.removeItem(user.email);
        $trambon.innerHTML = "";
        checkStorage();
        }

      });
  }

    // deleteItem();
  function addCard(user) {
    $trambon.insertAdjacentHTML(
      "afterbegin",
      `<div class="row">

<div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
    <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" class="img">
</div>
<div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
    <div class="container" style="border-bottom:1px solid black">
      <h2>${user.firstname} ${user.lastname}</h2>
      
    </div>
    <ul class="container details">
      <li><p><i class="fas fa-phone-alt"></i><a href="tel:+" >${user.phone}</a></p></li>
      <li><p><i class="fas fa-envelope"></i><a href="mailto:">${user.email}</a> </p></li>
      <li><p><i class="fas fa-map-marker-alt"></i><a href="#">${user.location}</a></p></li>
    </ul>
</div>
<button class="delete">Delete</button>
</div>
`
    );
  }
    function person() {
      return {
        firstname: firstname.value.trim(),
        lastname: lastname.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        location: loc.value.trim(),
      };
    }
}
document.addEventListener("DOMContentLoaded", preLoader);
