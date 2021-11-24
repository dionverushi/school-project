const infSlide = () => {

    const button = document.querySelector('button');
    const information = document.querySelector('.information');
    const title = document.querySelector('.project');

     button.addEventListener('click', () =>{
         information.classList.toggle('information-active');
         title.classList.toggle('project-active');
     })
}

infSlide();