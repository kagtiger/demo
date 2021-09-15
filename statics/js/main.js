function animation(){
  var slide_hero = anime({
    targets: '.slide',
    keyframes: [

      {translateX: 0},
      {translateX: "-100%"},
      {translateX: "-200%"},
      {translateX: "-100%"},
      {translateX: 0},

    ],
    duration: 12000,
    delay: 1000,
    easing: 'easeInOutQuart',
    loop: true
  });
}
function top_main_web(){ 
  var a = window.innerWidth;
  if (a/1.6 < window.innerHeight*0.9){
    a = a/1.6;
  }
  else{
    a = window.innerHeight*0.9;
  }
  document.documentElement.style.setProperty('--top_web_main', a+"px");
}

function borderRadius(element){
  var list_element = document.querySelectorAll(element);
  var rec_element = document.querySelector(element).getBoundingClientRect();
  
    
    if(rec_element.height < rec_element.width){
      for(var i=0;i<list_element.length;i++){
        list_element[i].style.borderRadius=rec_element.height/20+"px";
      }
    }
    else{
      for(var i=0;i<list_element.length;i++){
        list_element[i].style.borderRadius=rec_element.width/20+"px";
      }
      
    }
  
}

function elementBorder(element){
  for (var i=0;i<element.length;i++){
    borderRadius(element[i]);
  }
}

function set_footer(footer){
  var khoang_cach_section =parseInt(getComputedStyle(document.documentElement)
  .getPropertyValue('--khoang_cach_giua_cac_section')) ;
  document.querySelector(footer).style.top= parseInt(document.body.scrollHeight) + khoang_cach_section + "px";
}
function slider_button(flex_view){

  var step = ((100 - flex_view[0]*flex_view[1])/(flex_view[0]))/flex_view[1];
  step = flex_view[3]*parseInt((1 + step)*100, 10) ;

  var str = (document.querySelector(".tieu_bieu_sub").style.transform);
  str = str.slice(11, str.length-2);
  
  if (str.length===0){
    str = 0;
  }
  else{
    str = parseInt(str);
  }

  if((flex_view[3]===-1)&(str===parseInt((flex_view[2]-flex_view[0]))*step)){
    return 0;
  }
  if ((flex_view[3]===1)&(str===0)){ 
    return 0;
  }
  var trans = parseInt(str/step,10)*step + step + "%";
  var slide_tieu_bieu = anime({
    targets: '.tieu_bieu_sub',
    keyframes: [
      {translateX: trans},
    ],
    duration: 500,
    delay: 50,
    easing: 'easeInOutQuart',

  })
  
}