'use strict';
form.addEventListener('submit', submitted);
async function submitted(event) {
  event.preventDefault();
  let applicantInfo = {
    name: nameApp.value,
    age: age.value,
    abilityApp: ability.value,
  };
  axios
    .post('http://localhost:8080/', JSON.stringify(applicantInfo))
    .then((res) => {
      console.log(res);
      if (res.data) {
        alert("Congrats you've been accepted");
      } else {
        alert('You were rejected');
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
