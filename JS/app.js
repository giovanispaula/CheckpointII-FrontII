// Declaração de variáveis
const form = document.querySelector('form')
const initalDate = document.querySelector('.initialDate')
const limitDate = document.querySelector('.limitDate')
const descricaoTodo = document.querySelector('.descricaoTodo')
const btnSubmit = document.querySelector('.btnSubmit')
const listaTodos = document.querySelector('.listaTodos')
let todos = []
let keyLocalStorage = 'info'

//Pegando as data atual
let newDate = new Date()
let today = newDate.toLocaleString('pt-BR').substr(0, 10)
initalDate.value = today

//quando a pagina carregar, renderiza as informacoes do local storage
window.onload = () => {
  carregarInfoLocalStorage()
}

//validação de dados e armazenamento de valores dos inputs
btnSubmit.addEventListener('click', e => {
  e.preventDefault()
  console.log(newDate.value, limitDate.value)
  if (limitDate.value === '')
    return alert('Favor inserir a data limite da tarefa!')
  if (descricaoTodo.value.length < 10)
    return alert(
      'Favor inserir a descrição da tarefa com mais de 10 caracteres'
    )
  let limitDateValor = limitDate.value.split('-')
  limitDateValor = limitDateValor.reverse()
  limitDateValor = limitDateValor.toString().replace(',', '/')
  limitDateValor = limitDateValor.replace(',', '/')

  let tarefa = {
    descricao: descricaoTodo.value,
    dataLimite: limitDateValor
  }
  //colocando informações no array de tasks

  todos.push(tarefa)
  adicionarLocalStorage(tarefa)
  carregarInfoLocalStorage()
  //esvaziando inputs
  limitDate.value = ''
  descricaoTodo.value = ''

  document.getElementById('addCardContainer').style.display = 'none'
})

//Adição de informações no local Storage em JSON
let adicionarLocalStorage = obj => {
  let infoLocalStorage = localStorage.getItem(keyLocalStorage)
  if (infoLocalStorage !== null) {
    todos = JSON.parse(infoLocalStorage)
  }
  todos.push(obj)
  localStorage.setItem(keyLocalStorage, JSON.stringify(todos))
}

//Renderização de informações do Local Storage
let carregarInfoLocalStorage = () => {
  let infoLocalStorage = localStorage.getItem(keyLocalStorage)
  if (infoLocalStorage !== null) {
    todos = JSON.parse(infoLocalStorage)
    console.log(todos)
  }
  let dataToUse = todos.map((x, y) => {
    return `<li class="card">${x.descricao} ${x.dataLimite}
                   <button class="terminar" onclick="terminar(${y})"><img src="./icons/done.svg" id="done"></button>
                   <button onclick="excluir(${y})"><img src="./icons/erase.svg" id="delete"></button>
                   </li> `
  })
  listaTodos.innerHTML = ''
  listaTodos.innerHTML += dataToUse
}
let btnShow = document.querySelector('.Add-Button')
btnShow.addEventListener('click', event => {
  event.preventDefault(),
    (document.getElementById('addCardContainer').style.display = 'block')
})

//Função para exclusão de task
function excluir(int) {
  if (confirm('Tem certeza que deseja deletar este item?')) {
    let infoLocalStorage = localStorage.getItem(keyLocalStorage)
    todos = JSON.parse(infoLocalStorage)
    todos.splice(int, 1)
    localStorage.setItem(keyLocalStorage, JSON.stringify(todos))

    carregarInfoLocalStorage()
  }
}

//Função para finalizar uma tarefa, a qual ficará riscada.
function terminar(y) {
  let index = y
  let infoLocalStorage = localStorage.getItem(keyLocalStorage)
  todos = JSON.parse(infoLocalStorage)
  const li = document.querySelectorAll('li')
  li[index].classList.add('riscado')
}
