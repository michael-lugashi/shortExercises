'use strict';
form.addEventListener('submit', submitted);
async function submitted(event) {
  event.preventDefault();
    console.log(nameApp.value)
  console.log(event);
  axios
    .post('..//back//index.js', )
    .then((res) => {
      console.log(res);
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
