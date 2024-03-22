const starsEl=document.querySelectorAll('.fa-star')
const emojiEl=document.querySelectorAll('.fa-regular')
const colorsArray=['red','orange','blue','lightgreen','green']


starsEl.forEach((star,index)=>
star.addEventListener('click',()=>{
    updateRating(index);
})
)

const updateRating =(index)=>{
    starsEl.forEach((star,idx)=>{
        if(idx<index+1){
            star.classList.add('active')
        }else{
            star.classList.remove('active')
        }
    })
    
    emojiEl.forEach(emoji=>{
        emoji.style.transform=`translateX(-${index * 50}px)`
        emoji.style.color=colorsArray[index]
    })
}
updateRating(0);