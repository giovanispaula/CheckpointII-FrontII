const checked = document.querySelector('.checked')
const notChecked = document.querySelector('.notChecked')

//Requisição de API e renderização na pagina
const getTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  if (response.status !== 200) {
    throw new Error('cannot fetch')
  }
  const data = await response.json()
  return data
}
//Chamada da função getTodo e armazenando na pagina.
getTodo()
  .then(data =>
    data.map(item => {
      if (item.completed) {
        checked.innerHTML += `<li class="card"><div class="checked riscado ">${item.title}</div></li>`
      } else if (!item.completed) {
        notChecked.innerHTML += `<li class="card"><div class="notChecked">${item.title}</div></li>`
      }
    })
  )
  .catch(err => console.log(err.message))
