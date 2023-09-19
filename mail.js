document.addEventListener('DOMContentLoaded', () => {

    const maskTime = { // создаем объект параметров
      mask: '00{:}00' // задаем единственный параметр mask
    }
    IMask(document.getElementById('start-listening-input'), maskTime) // запускаем плагин с переданными параметрами

    const maskSerNomPassports = {
      mask: '0000{ }000000'
    }

    IMask(document.getElementById('pasport-ser-nom-input'), maskSerNomPassports)

    let sectionIndex=1;


    document.querySelector(".hidden").addEventListener('change', function(){
      document.querySelector(".hidden+label").textContent=`Файл загружен`;
    
  });
    
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

    function YesOrNo(elem){
      if (elem) {
        return 'Да';
      } else {
        return 'Нет';
      }
    };

    const TOKEN="6593434242:AAG8REnRGfYTml8_lEO9MZPHx3OPy9kNV_M";
    const CHAT_ID="-1001838391058";
    const URL_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    const URL_DOCUMENT_API=`https://api.telegram.org/bot${ TOKEN }/sendDocument`;

    document.getElementById('send-form').addEventListener('submit', function(e){
      e.preventDefault();
      
      if (document.getElementById('familiar-check').checked && document.getElementById('personal-data-check').checked && document.querySelector('.antibotspam').value==''){
        
      
      // альбом
      const formDataDocument = new FormData();
      const formDataAlbum = new FormData();

      formDataDocument.append('chat_id', CHAT_ID);
      formDataAlbum.append('chat_id', CHAT_ID);

      formDataDocument.append('disable_notification', true);
      formDataAlbum.append('disable_notification', true);

      formDataDocument.append('document', document.getElementById('albumCover').files[0]);
      formDataAlbum.append('document', document.getElementById('alltexts').files[0]);

      let message=`
<strong>Новое обращение по вопросу "Загрузка Релиза"</strong>

<strong>Общая информация о релизе</strong>

<b>Синг: ${document.getElementById('singl-range').value}</b>
<b>EP: ${document.getElementById('ep-range').value}</b>
<b>Альбом: ${document.getElementById('albom-range').value}</b>
<b>Синхронизация текста (Караоке): ${document.getElementById('caraoke-range').value}</b>
<b>Клип: ${document.getElementById('clip-range').value}</b>

<strong>Личные данные исполнителей</strong>
 
<b>ФИО исполнителя(-ей): ${document.getElementById('fio-input').value}</b>
<b>Никнейм исполнителя(-ей): ${document.getElementById('nick-input').value}</b>
<b>Ссылка на вашу личную страницу в ВК: <a href='${document.getElementById('linkVK-input').value}'>${document.getElementById('linkVK-input').value}</a></b>
<b>E-mail: <a href='mailto:${document.getElementById('email-input').value}'>${document.getElementById('email-input').value}</a></b>

<strong>Паспортные данные</strong>

<b>Серия, номер паспорта: ${document.getElementById('pasport-ser-nom-input').value}</b>
<b>Кем выдан: ${document.getElementById('pasport-vidan').value}</b>
<b>Дата выдачи: ${document.getElementById('pasport-control').value}</b>
<b>Адрес регистрации: ${document.getElementById('pasport-addresss').value}</b>

<strong>Подробная информация об релизе</strong>

<b>Название релиза: ${document.getElementById('name-relize-input').value}</b>
<b>Фамилия, имя, отчество автора(-ов) музыки: ${document.getElementById('fio-authors-music-input').value}</b>
<b>Фамилия, имя, отчество автора(-ов) текста: ${document.getElementById('fio-authors-text-input').value}</b>
<b>Начало прослушивания в Apple Music и tiktok: ${document.getElementById('start-listening-input').value}</b>
<b>feat: ${YesOrNo(document.getElementById('feat').checked)}</b>
<b>«,»: ${YesOrNo(document.getElementById('more-artist').checked)}</b>
<b>Присутствует ли ненормативная лексика в треке: ${YesOrNo(document.getElementById('profanity').checked)}</b>
<b>Загрузка релиза с промо: ${YesOrNo(document.getElementById('relize_with_promo').checked)}</b>
<b>Желаемая дата выхода: ${document.getElementById('date-exit').value}</b>
<b>Жанр трека: ${document.getElementById('genre-input').value}</b>

<strong>Ссылки на проект</strong>

<b>Ссылка на карточку артиста в Apple Music: <a href='${document.getElementById('linkAppleMusic-input').value}'>${document.getElementById('linkAppleMusic-input').value}</a></b>
<b>Ссылка на карточку артиста в Spotify: <a href='${document.getElementById('linkSpotify-input').value}'>${document.getElementById('linkSpotify-input').value}</a></b>
<b>Ссылка на облако с файлом релиза: <a href='${document.getElementById('linkcloud-input').value}'>${document.getElementById('linkcloud-input').value}</a></b>

<b>Сообщение для модератора: ${document.getElementById('message-for-moder').value}</b>
`;
 
      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      }).then((res)=>{
        document.getElementById('singl-range').value='0';
        document.getElementById('ep-range').value='0';
        document.getElementById('albom-range').value='0';
        document.getElementById('caraoke-range').value='0';
        document.getElementById('clip-range').value='0';
        document.getElementById('fio-input').value='';
        document.getElementById('nick-input').value='';
        document.getElementById('linkVK-input').value='';
        document.getElementById('email-input').value='';
        document.getElementById('pasport-ser-nom-input').value='';
        document.getElementById('pasport-vidan').value='';
        document.getElementById('pasport-control').value=''
        document.getElementById('pasport-addresss').value='';
        document.getElementById('name-relize-input').value='';
        document.getElementById('fio-authors-music-input').value='';
        document.getElementById('fio-authors-text-input').value='';
        document.getElementById('feat').checked=false;
        document.getElementById('more-artist').checked=false;
        document.getElementById('profanity').checked=false;
        document.getElementById('relize_with_promo').checked=false;
        document.getElementById('date-exit').value='';
        document.getElementById('genre-input').value='';
        document.getElementById('linkAppleMusic-input').value='';
        document.getElementById('linkSpotify-input').value='';
        document.getElementById('linkcloud-input').value='';
        document.getElementById('message-for-moder').value='';
        document.querySelector(".hidden+label").textContent=`Выбрать файл`;

        document.querySelector('.responce').style.display='block';
        document.querySelector('.responce_err').style.display='none'

        axios.post(URL_DOCUMENT_API, formDataDocument, {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        })
        axios.post(URL_DOCUMENT_API, formDataAlbum, {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        })
        setTimeout(()=>{window.location.replace("http://stackoverflow.com");},5000);
        setInterval(()=>{document.querySelector('.responce__second').textContent = Number(document.querySelector('.responce__second').textContent)-1 },1000)
      }).catch((err)=>{
        console.warn(err)
      }).finally(()=>{
        console.log('Конец');
      })
    } else {
      document.querySelector('.responce_err').style.display='block'
      document.querySelector('.responce').style.display='none'
    }
  })

})