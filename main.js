



// let changToRana =()=>{
//     document.getElementById("change-name").innerText="Rana Almalki";

//section_white
let h1 = document.getElementById("change-name");
let originalText = h1.innerText

let major= document.getElementById("change-major")
let major_original=major.innerText

let profile_text =document.getElementById("profile-text")
let profile_text_original = profile_text.innerText

let list_experience = document.getElementById("list-exp1")
let list_experience_original = list_experience.innerText


let list_experience2 = document.getElementById("list-exp2")
let list_experience_original2 = list_experience2.innerText

let list_experience3 = document.getElementById("list-exp3")
let list_experience_original3 = list_experience2.innerText

let list_nameall = document.getElementById("list-name")
let list_nameall_original = list_nameall.innerText

let list_nameall2 = document.getElementById("list-name2")
let list_nameall_original2 = list_nameall2.innerText


let list_nameall3 = document.getElementById("list-name3")
let list_nameall_original3 = list_nameall3.innerText

// let ullist = document.getElementById("grc-list")

// let ullist_original=ullist.innerText
// let lilist=document.createElement("li")

// ullist.appendChild(lilist)




h1.onmouseover = ()=>{
    h1.innerText="Rana Almalki"
    major.innerText="computer science"
    profile_text.innerText="A Software & Network Engineer with background in Computer Science.Proficient in Front-End development and Web/App Design. Seeking a role in a fastgrowing company to start my career path."
list_experience.innerText="CYBERSECURITY (GRC GRCCONSULTANT) –INTERN 2021 SAUDI FEDERATION FOR CYBERSECURITY"
list_experience2.innerText="SOFTWARE ENGINEER – PARTICIPANT 2020 GENERAL ASSEMBLY MISK ACADEMY"
list_experience3.innerText="COMPUTER SCIENTIST –INTERN 2019"
list_nameall.innerText="GRC GRCCONSULTANT"
list_nameall2.innerText="SOFTWARE ENGINEER"
list_nameall3.innerText="computer science"
bodybg.style.backgroundColor="#0a4d47"


//contact
list_phone.innerText="+966-505-2298-356"
list_email.innerText="ranaalmalki12@gmail.com"
list_adress.innerText="Ryiadh"
list_github.innerText="https://github.com/ranaalmalki"
img_profile.src="/HW-DOM/image/linkdin-img.png"

}


h1.onmouseout=()=>{
    h1.innerText =originalText
    major.innerText=major_original
profile_text.innerText=profile_text_original 
bodybg.style.backgroundColor=bodybg_original

list_experience.innerText=list_experience_original
list_experience2.innerText=list_experience_original2
list_experience3.innerText=list_experience_original3

list_nameall.innerText=list_nameall_original
list_nameall2.innerText=list_nameall_original2
list_nameall3.innerText=list_nameall_original3

list_phone.innerText= list_phone_original
list_email.innerText=list_email_original
list_adress.innerText=list_adress_original
list_github.innerText=list_github_original
img_profile.src=img_profile_original

}

//end-section-white


//section_blue
let bodybg = document.getElementById("blue_section")
let bodybg_original= bodybg.style.backgroundColor

let img_profile=document.getElementById("img-profile")
let img_profile_original = img_profile.src

let list_phone = document.getElementById("list-phone")
let list_phone_original = list_phone.innerText

let list_email = document.getElementById("list-email")
let list_email_original = list_email.innerText

let list_adress = document.getElementById("list-adress")
let list_adress_original = list_adress.innerText

let list_github = document.getElementById("list-github")
let list_github_original=list_github.innerText



//end_section_blue

