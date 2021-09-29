let today = new Date().toLocaleString('pt-BR').substr(0, 10) // Setando dia atual como data de criação do card.
let actualDate = (document.getElementById('actualDate').value = today)

let form = document.getElementById('form') // Evitando o evento padrão do Submit form para que se façam as verificações;
form.addEventListener('submit', e => (e.preventDefault(), e.createCard(form)))

function validate(form) {
  // função para validade entrada de dados.
  if (form.description.lenght <= 10) {
    alert('A descrição deve ter mais de 10 caracteres!')
    form.description.focus()
    return false
  }
  if (finalDate < actualDate) {
    alert('A data final não pode ser anterio a data atual!')
    form.finalDate.focus()
    return false
  }

  return true
}

function createCard(form) {
  // Função para criação dos eventos.
  let title = document.getElementById('title').value // armazenando dados do input dentro de variavel
  let description = document.getElementById('description').value // armazenando dados do input dentro de variavel
  let finalDate = document.getElementById('finalDate').value // armazenando dados do input dentro de variavel
  finalDate = finalDate.split('-').reverse().join('/') // Convertendo padrão americano de data em padrão brasileiro

  if (validate(form) == false) {
    // chamando a função de validação de dados
    return false
  }

  let cardSection = document.querySelector('.cards-section') // Criando variável para receber o grid-container
  cardSection.innerHTML += `<div class="card">
  <div class="header-card">
  <h2 class="card-title">${title}</h2>
  <a href="#"
  ><img src="./icons/edit.svg" alt="Edit icon" class="edit-icon"
  /></a>
  </div>
  
  <p class="card-description">${description}</p>
  <div class="main">
  <h3 class="create-date">Criado em: ${actualDate}</h3>
      <h3 class="Deadline-date">Prazo final: ${finalDate}</h3>
      </div>
      `
  document.getElementById('form').reset()
  document.getElementById('addCardContainer').style.display = 'none'
}

let btnHide = document.getElementById('btnHide')
btnHide.addEventListener('click', event => {
  event.preventDefault(),
    (document.getElementById('addCardContainer').style.display = 'none')
})

let btnShow = document.querySelector('.Add-Button')
btnShow.addEventListener('click', event => {
  event.preventDefault(),
    (document.getElementById('addCardContainer').style.display = 'block')
})
