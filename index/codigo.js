const conteiner = document.getElementById('conteiner')

const frame = [
   {Nome: 'Site de receita', img: 'index/img/site de receita.png', link: 'https://agnesta90.github.io/Minis-Projetos/Site%20de%20receita/'},
   {Nome: 'Social Link', img: 'index/img/Social Link.png', link: "https://agnesta90.github.io/Minis-Projetos/Social%20link/"},
   {Nome: 'Product preview card component', img: 'index/img/Product preview card component.png', link: 'https://agnesta90.github.io/Minis-Projetos/Product%20preview%20card%20component/'},
   {Nome: 'Preview card component main', img: 'index/img/Preview card component main.png', link: 'https://agnesta90.github.io/Minis-Projetos/Preview%20card%20component%20main/'},
   {Nome: 'Summay', img: 'index/img/Summay.png', link: "https://agnesta90.github.io/Minis-Projetos/Summay/"},
   {Nome: 'Order Summary', img: 'index/img/Order Summary.png', link: "https://agnesta90.github.io/Minis-Projetos/Order%20Summary%20Component%20Main/"},
   {Nome: 'Stats preview card component main', img: 'index/img/Stats preview card component main.png', link: 'https://agnesta90.github.io/Minis-Projetos/Stats%20preview%20card%20component%20main/'},
   {Nome: 'FAQ accordion', img: 'index/img/FAQ accordion.png', link: 'https://agnesta90.github.io/Minis-Projetos/FAQ%20accordion/'}
]

frame.forEach((item,index) => {
   const div = document.createElement('div')
   div.setAttribute('class', `caixa`)
   div.setAttribute('id', `caixa${index+1}`)

   conteiner.appendChild(div)
   
   const img = document.createElement('img')
   img.src = item.img
   div.appendChild(img)
   
   const h3 = document.createElement('h3')
   h3.textContent = item.Nome
   div.appendChild(h3)

   div.addEventListener('click', () => {
      window.location.href = item.link;
      window.EventTarget = '_blanck'
   })
})

