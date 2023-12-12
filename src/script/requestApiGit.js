const button = document.querySelector('.search>button')

const input = document.querySelector('.search>input')

const ApiUrl = "https://api.github.com/users"


async function fetchApi (value){

    try {
            
        const User = await fetch(`${ApiUrl}/${value}`)
            
            .then(rest => rest.json())
        
        const getRepositories = await fetch(`${ApiUrl}/${value}/repos`)
        
            .then(rest => rest.json())
          
            if(User.name){
                
                sessionStorage.setItem('credentials' ,JSON.stringify(User.name))
                
                sessionStorage.setItem('image',JSON.stringify(User.avatar_url)) 

                sessionStorage.setItem('UserGit',JSON.stringify(User.html_url))   
                
                localStorage.setItem('Repositories', JSON.stringify(getRepositories))
               
                window.location.href = 'https://gbizarria.github.io//User.html'       
        
            }else{
            
                throw new Error('usuário não encontrado')
            }

        }catch (erro) {           
            
            window.location.href = 'https://gbizarria.github.io/nofoud.html'
        }       
}



 export async function buttonPress (){

        button.addEventListener('click',() =>{
            
            if(input.value.length > 0){
                
                fetchApi (input.value)        
                
                input.value = ''
           }
 
        })

        input.addEventListener('keypress',(element) =>{
            
            if(element.key === 'Enter'&& input.value.length > 0){
                
                fetchApi (input.value)        
                
                input.value = ''
            }
        })
   
    
 }
