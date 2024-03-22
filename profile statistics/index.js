const counters=document.querySelectorAll('.counter');


counters.forEach(counter=>{
    counter.innerText='0';
    
    const incrementCounter=()=>{
        let currentNum = +counter.innerText;
        const dataCeil=counter.getAttribute('data-ceil')
        const increment = dataCeil/15;
        currentNum +=Math.ceil(currentNum + increment)
        counter.innerText=currentNum
        if(currentNum<dataCeil){
            setTimeout(incrementCounter,50)
            counter.innerText=currentNum
        }else{
            counter.innerText=dataCeil
        }
    }
    incrementCounter();
})