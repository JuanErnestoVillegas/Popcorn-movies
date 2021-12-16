let user = JSON.parse(localStorage.getItem('user'))
if(user.admin){
    let usuario=document.getElementById('navbarAdmin')
    usuario.classList.remove('controlAdmin')
    usuario.classList.add('is-admin')
}