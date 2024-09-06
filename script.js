// const typingtext=document.querySelector(".typingtext p")
// const input=document.querySelector(".input-field")
// const time=document.querySelector(".time span b")
// const mistake=document.querySelector(".mistake span")
// const wpm=document.querySelector(".wpm span b")
// const cpm=document.querySelector(".cpm span b")
// const btn=document.querySelector("button")
// console.log(wpm)
// // set up values
// let timer;
// let maxtime=60
// let timeleft=maxtime
// let charindex=0
// let mistakes=0
// let istyping=false
// function loadparagraph(){
//     const paragraph=["Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"]
//     let index=Math.floor(Math.random()*paragraph.length)
//     for(const char of paragraph[index]){
//         typingtext.innerHTML+=`<span>${char}</span>`
//         typingtext.querySelectorAll("span")[0].classList.add("active")
//     }
// }
// loadparagraph()
// function typing(){
//     count=0
//     let char=typingtext.querySelectorAll("span")
//     const typedchar=input.value.charAt(charindex)
//     if(!istyping){
//         timer=setInterval(timestarts,1000)
//         istyping=true
//     }
//     if(charindex<char.length && timeleft>0){
//         if(char[charindex].innerText===typedchar){
//             char[charindex].classList.add("correct")
//         }
//         else{
//             console.log()
//             char[charindex].classList.add("incorrect")
//             mistakes++
//             mistake.innerHTML=mistakes
//             cpm.innerHTML=`${charindex-mistakes}`
//         }
//         console.log(charindex)
//         charindex++
//         // char[charindex].classList.add("active")
//     }
// }
// document.addEventListener("keydown",(e)=>{
//     // if(e.key=="Backspace"){
//     //     charindex-=2
//     // }

//     input.focus()
// })
// function timestarts(){
//     if(timeleft>0){
//         timeleft--
//         time.innerHTML=`${timeleft}`
//         const wp=Math.round(((charindex-mistakes)/5)/(maxtime-timeleft)*60)
//         wpm.innerHTML=`${wp}`
//     }
//     else{
//         clearInterval(timer)
//     }
// }
// function reset(){
//     typingtext.innerHTML=``
//     input.value=``
//     loadparagraph()
//     clearInterval(timer)
//     timeleft=maxtime
//     time.innerHTML=timeleft
//     charindex=0
//     mistakes=0
//     mistake.innerHTML=mistakes
//     istyping=false
//     wpm.innerText=0
//     cpm.innerText=0
// }
// typingtext.addEventListener("click",()=>input.focus())
// input.addEventListener("input",typing)
// btn.addEventListener("click",reset)



const typingtext=document.querySelector(".typingtext p")
const input=document.querySelector(".input-field")
const time=document.querySelector(".time span b")
const mistake=document.querySelector(".mistake span")
const wpm=document.querySelector(".wpm span b")
const cpm=document.querySelector(".cpm span b")
const btn=document.querySelector("button")
console.log(wpm)
// set up values
let timer;
let maxtime=60
let timeleft=maxtime
let charindex=0
let mistakes=0
let istyping=false
function loadparagraph(){
    const paragraph=["Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"]
    let index=Math.floor(Math.random()*paragraph.length)
    for(const char of paragraph[index]){
        typingtext.innerHTML+=`<span>${char}</span>`
        typingtext.querySelectorAll("span")[0].classList.add("active")
    }
}
loadparagraph()
function typing(){
    let char=typingtext.querySelectorAll("span")
    const typedchar=input.value.charAt(charindex)
    if(!istyping){
        timer=setInterval(timestarts,1000)
        istyping=true
    }
    if(charindex<char.length && timeleft>0){
        if(charindex+1<char.length-1){
            if(char[charindex+2].classList.contains("typethis")){
                char[charindex+2].classList.remove("typethis")
            }
            char[charindex+1].classList.add("typethis")
        }
        if(char[charindex].innerText===typedchar){
            if(char[charindex].classList.contains("incorrect")){
                char[charindex].classList.remove("incorrect")
            }
            char[charindex].classList.add("correct")
            char[charindex].classList.remove("typethis")
        }
        else{
            char[charindex].classList.add("incorrect")
            mistakes++
            mistake.innerHTML=mistakes
            cpm.innerHTML=`${charindex-mistakes}`
            char[charindex].classList.remove("typethis")
        }
        charindex++
        char[charindex].classList.add("active")

    }
}
document.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace"){
        charindex-=2
    }

    input.focus()
})
function timestarts(){
    if(timeleft>0){
        timeleft--
        time.innerHTML=`${timeleft}`
        const wp=Math.round(((charindex-mistakes)/5)/(maxtime-timeleft)*60)
        wpm.innerHTML=`${wp}`
    }
    else{
        clearInterval(timer)
    }
}
function reset(){
    typingtext.innerHTML=``
    input.value=``
    loadparagraph()
    clearInterval(timer)
    timeleft=maxtime
    time.innerHTML=timeleft
    charindex=0
    mistakes=0
    mistake.innerHTML=mistakes
    istyping=false
    wpm.innerText=0
    cpm.innerText=0
}
typingtext.addEventListener("click",()=>input.focus())
input.addEventListener("input",typing)
btn.addEventListener("click",reset)