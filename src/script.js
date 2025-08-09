console.log("verificar que funciona!")
const jsonInfo = fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Conexion realizada correctamente", data);
    const autor = document.getElementById("autor-card");
    const tag1 = document.getElementById("skill_card1");
    const tag2 = document.getElementById("skill_card2");
    const frase = document.getElementById("frase_card");
    
    random_buttom.addEventListener("click",() => {
        let indice = Math.floor(Math.random() * data.length)
        autor.textContent = data[indice].author;
        tag1.textContent = data[indice].tags[0];
        tag2.textContent = data[indice].tags[1];
        frase.textContent = data[indice].quote;
    })

    share_buttom.addEventListener("click",() =>{
        let texto = frase.textContent;
        navigator.clipboard.writeText(texto)
        .then(() => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });  
    })

  })
  .catch((error) => {
    console.error("Sucedio un error ", error.message);
  });

