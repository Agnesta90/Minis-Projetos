const conteiner = document.getElementById("conteiner")

const text = [
   {Titulo:"What is Frontend Mentor, and how will it help me?", Texto: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},  
   
   {Titulo: "Is Frontend Mentor free?", Texto: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."}, 
   
   {Titulo: "Can I use Frontend Mentor projects in my portfolio?", Texto: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"}, 
   
   {Titulo: "How can I get help if I'm stuck on a Frontend Mentor challenge?", Texto: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."},
]

text.forEach((e,index) => {
   const article = document.createElement('article')
   conteiner.appendChild(article)
   
   const div = document.createElement('div')
   div.setAttribute('class','caixa')
   div.innerHTML = `<h3>${e.Titulo}</h3>`
   article.appendChild(div)

   const img1 = 'images/icon-plus.svg'
   const img2 = 'images/icon-minus.svg'
   const caixa = document.createElement('img')
   caixa.setAttribute('class', 'botao')
   caixa.src = img1
   div.appendChild(caixa)

   const span = document.createElement('span')
   span.setAttribute('class', 'caixa2')
   span.innerHTML = `<p>${e.Texto}</p>`
   article.appendChild(span)

   let aberto = false

   caixa.addEventListener('click', () => {
      aberto = !aberto
      caixa.src = aberto ? img2 : img1
      span.classList.toggle('caixa2')
   })

})


