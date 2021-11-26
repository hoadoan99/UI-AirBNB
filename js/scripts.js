const floatingBtn = document.querySelector('.footerBtn');

floatingBtn.addEventListener('click',e => {
    //select the footer
    const footer = document.querySelector('.footer');
    // we add the active  class to the footer 
    if(footer.classList.contains('active')){
        footer.classList.remove('active');
        e.target.innerHTML = 'Terms, Privacy, Currency & more';
    }else{
        footer.classList.add('active');
        e.target.innerHTML = 'X Close';
    }
    // check if the class exists (active) then remove 
})