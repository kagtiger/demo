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
    duration: 25000,
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
  var class_sub_fullname = id_this.parentElement.parentElement.children[4].children[0].className;
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

  if((flex_view[3]===-1)&(str<=parseInt((flex_view[2]-flex_view[0]))*step)){
    return 0;
  }
  if ((flex_view[3]===1)&(str>-1*step)){ 
    return 0;
  }else{ 
    var trans = parseInt(str/step,10)*step + step + "%";
  }
  
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
      //console.log(class_name);
      var class_slide = document.getElementsByClassName(class_name)[0];
      break;
    }
  }
  var a =class_slide.children[0].children[0].children[0];
  if (a.complete===false){
    var rec_slide = class_slide.getBoundingClientRect();
    id_arrow.style.height=150+"px";
    id_arrow.style.top = rec_slide.top - id_arrow.parentElement.getBoundingClientRect().top +"px" ;
  }
  else{
    var rec_slide = class_slide.getBoundingClientRect();
  id_arrow.style.height=rec_slide.height+"px";
  id_arrow.style.top = rec_slide.top - id_arrow.parentElement.getBoundingClientRect().top +"px" ;
  }

  
}
function my_menu_btn(id_content){
  var class_sub_name = id_content[0];
  var str = (document.querySelector(class_sub_name).style.transform);
  str = str.slice(11, str.length-2);
  var trans = id_content[1]*-100;
  if (parseInt(str)===trans){
    return 0;
  }

  var ani_btn = anime({
    targets: class_sub_name,
    keyframes: [
      {translateY: trans+"%"},
    ],
    duration: 200,
    delay: 10,
    easing: 'easeInOutQuart',

  });
  
  brother_e = id_content[2].parentElement.children;
  for (var i=0; i<brother_e.length;i++){
    brother_e[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    brother_e[i].style.color="#000000";
  }
  id_content[2].style.backgroundColor = "cadetblue";
    id_content[2].style.color="#ffffff";
  

}

function click_color(id_this){
  var bro_e = id_this.parentElement.parentElement.children;
  for (var i=0;i<bro_e.length;i++){
    bro_e[i].children[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
    bro_e[i].children[0].style.color="#ffffff";
  }
  id_this.style.backgroundColor="#ffffff";
  id_this.style.color="rgba(2, 48, 71, 1)";
}
function menu_color(menu_id){
  var tilte = document.title.toLowerCase();
  var bro_e = document.querySelector(menu_id).children[0].children;
  for(var i=0;i<bro_e.length;i++){
    var a_element =bro_e[i].children[0];
    if (a_element.innerHTML.toLowerCase()===tilte){
      a_element.style.backgroundColor="#ffffff";
      a_element.style.color="rgba(2, 48, 71, 1)";
    }
  }
}


function my_menu_btn2(id_content){
  var class_sub_name = id_content[0];
  var str = (document.querySelector(class_sub_name).style.transform);
  str = str.slice(11, str.length-2);
  var trans = id_content[1]*-100;
  
  if (parseInt(str)===trans){
    return 0;
  }

  var ani_btn = anime({
    targets: class_sub_name,
    keyframes: [
      {translateX: trans+"%"},
    ],
    duration: 200,
    delay: 10,
    easing: 'easeInOutQuart',

  });
  
  brother_e = id_content[2].parentElement.parentElement.children;
  
  for (var i=0; i<brother_e.length;i++){
    brother_e[i].children[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
    brother_e[i].children[0].style.color="#000000";
  }
  id_content[2].style.backgroundColor = "cadetblue";
    id_content[2].style.color="#ffffff";
  

}