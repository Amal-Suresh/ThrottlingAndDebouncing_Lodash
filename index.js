const btn = document.querySelector('.btnINC')
const btnP = document.querySelector('.incP')
const incT = document.querySelector('.incT')

var pressCount=0
var trigerCount=0

// debouncing
const debouncedCount =_.debounce(()=>{
    incT.innerHTML=++trigerCount
},800) 

//throttling
const throttlCount = _.throttle(()=>{
    incT.innerHTML=++trigerCount
},1000)


btn.addEventListener('click',()=>{
    btnP.innerHTML=++pressCount
    throttlCount()
})
