document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('#start-listening-input') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
      mask: '00{:}00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами


    let sectionIndex=1;



    
    document.querySelectorAll('.navigation>button').forEach(e=>{
      e.addEventListener('click',(event)=>{
        if (event.target.classList.contains('nav-next') && sectionIndex!=6){
          sectionIndex++
        }

       
        if (event.target.classList.contains('nav-prev') && sectionIndex!=1){
          sectionIndex--;
        }
        
        sectionIndex==6?document.querySelector('.nav-next').setAttribute('disabled','true'):document.querySelector('.nav-next').removeAttribute('disabled');
        sectionIndex==1?document.querySelector('.nav-prev').setAttribute('disabled','true'):document.querySelector('.nav-prev').removeAttribute('disabled');

        document.querySelectorAll('.form-section').forEach(e=>{
          e.style.display='none';
        }) 
        document.querySelector('.load>p').textContent=`${sectionIndex}/6`;
        document.querySelector(`.form-section:nth-child(${sectionIndex})`).style.display='block'
      })
    })
    
    // document.querySelector('.nav-next').addEventListener('click',()=>{
    //   sectionIndex++;

    // })



    // document.querySelector('.nav-prev').addEventListener('click',()=>{
    //   sectionIndex--;
    //   document.querySelectorAll('.form-section').forEach(e=>{
    //     e.style.display='none';
    //   }) 
    //   document.querySelector('.navigation>p').textContent=`${sectionIndex}/6`;
    //   document.querySelector(`.form-section:nth-child(${sectionIndex})`).style.display='block'
    // })


  })