let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let abouttext = document.getElementById("about-text");
let contact = document.getElementById("contact");
let title = document.getElementById("title");
let dir = document.getElementById("bd")

arabic.onclick=()=>{
    setlang("arabic")
    localStorage.setItem("lang","arabic")
}

english.onclick=()=>{
    setlang("english")
    localStorage.setItem("lang","english")
}

onload =()=>{
    setlang(localStorage.getItem("lang"));
} 

function setlang(getlang){
if(getlang==="arabic"){
      title.innerHTML = "جافا سكريبت"
      welcome.innerHTML = " مرحبا بكم فى صفحة مبرمج AR "
      about.innerHTML = "حولنا"
      contact.innerHTML = "اتصل بنا"
      abouttext.innerHTML = "انا اتعلم البرمجة فى شيار اكادمى"
      dir.dir = "rtl"
      
}else if(getlang==="english"){
    title.innerHTML = "javaScript"
    about.innerHTML = "About"
    contact.innerHTML = "Contact Us"
    welcome.innerHTML = "Welcome to AR The Programmer Page "
    abouttext.innerHTML = "I am learning programming in Shyiar Academy"
    dir.dir = "ltr"
}
   
}