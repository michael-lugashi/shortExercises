'use strict';
form.addEventListener('submit', submitted);
async function submitted(event) {
  event.preventDefault();
  //     console.log(nameApp.value)
  //   console.log(event);
  //   axios.get('http://localhost:8080/').then(res=>{
  //       console.log(res)
  //   })
  let applicantInfo = {
    name: nameApp.value,
    age: age.value,
    abilityApp: ability.value,
  };
  axios
    .post('http://localhost:8080/', JSON.stringify(applicantInfo))
    .then((res) => {
      console.log(res);
      if (!res.data){
          alert('You were rejected')
      }
      if (res.data) {
          alert('Congrats youve been accepted')
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // try {
  //     const data = await axios.get("http://localhost:8080/");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
}
