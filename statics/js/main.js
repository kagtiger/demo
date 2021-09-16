function animation(){
  var slide_hero = anime({
    targets: '.hero_sub',
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

function slider_button(id_this,flex_view){
  var step = ((100 - flex_view[0]*flex_view[1])/(flex_view[0]))/flex_view[1];
  step = flex_view[3]*parseInt((1 + step)*100, 10) ;
  var class_sub_fullname = id_this.parentElement.parentElement.children[3].children[0].className;
  var class_sub_name = class_sub_fullname.split(" ")[1];
  class_sub_name = "." + class_sub_name;
  var str = (document.querySelector(class_sub_name).style.transform);
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
    targets: class_sub_name,
    keyframes: [
      {translateX: trans},
    ],
    duration: 300,
    delay: 10,
    easing: 'easeInOutQuart',

  })
  
}
function setup_slide(arrow_id) {
  var id_arrow = document.getElementById(arrow_id);
  var arrow_child = id_arrow.children;
  var arrow_brother= id_arrow.parentElement.children;

  for(var i =0;i<arrow_brother.length;i++){
    var class_name = arrow_brother[i].className;
    if (class_name.search("slide_ngang")>0){
      var class_slide = document.getElementsByClassName(class_name)[0];
      break;
    }
  }
  var rec_slide = class_slide.getBoundingClientRect();
  id_arrow.style.height=rec_slide.height+"px";
  id_arrow.style.top = rec_slide.top - id_arrow.parentElement.getBoundingClientRect().top +"px" ;
}