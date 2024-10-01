
/*버튼 클릭시 밑으로 자동 스크롤*/
function goToScroll(name) {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
  };
   
  const togglebtn =document.querySelector('.tooglebtn');
 const navs = document.querySelector('.index_all');
 
 togglebtn.addEventListener('click',() =>{
    navs.classList.toggle('active');
 });


  
 