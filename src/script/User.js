const userName = document.querySelector('.name__user')

const image = document.querySelector('#avatar')
    
const button = document.querySelector('header>button')


    
    
const getName =  JSON.parse(sessionStorage.getItem('credentials'))
   userName.innerHTML = getName
    
const getImage =  JSON.parse(sessionStorage.getItem('image'))
   image.src = getImage
   image.alt = getName


        
//location user git
const linkUserGit = JSON.parse(sessionStorage.getItem('UserGit'))
   
image.addEventListener('click', () => {
    
      window.open(linkUserGit)
})
    
   
userName.addEventListener('click', () => {
   
   window.open(linkUserGit)   
}) 




   

const localRepositories = JSON.parse(localStorage.getItem('Repositories'))
   
const repositories = document.querySelector('.repositories')

    localRepositories.forEach(element => {
         
      const cards = document.createElement('div')
         
         cards.classList.add('cards')
         
         repositories.appendChild(cards)

      const titleRepo = document.createElement('h3')
         
         titleRepo.innerText = element.name
                   
      const descriptRepo = document.createElement('p')
         
         descriptRepo.innerText = element.description
            
      const button = document.createElement('button')
         
      const link = document.createElement('a')

         link.classList.add('link')
         
         link.innerText = 'Repositório'
         
         link.href = element.svn_url
         
         link.target = '_blank'
         
         button.appendChild(link)
         
         
      cards.appendChild(titleRepo)
      cards.appendChild(descriptRepo)
      cards.appendChild(button)

    

   });
   
    button.addEventListener('click', ()=>{
      
      window.location.href = 'https://gbizarria.github.io/index.html'       
    })


