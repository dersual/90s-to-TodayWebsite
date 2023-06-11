let viewWidth =  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); 
if(viewWidth < 350) {   
    document.querySelector("dialog").showModal()
}