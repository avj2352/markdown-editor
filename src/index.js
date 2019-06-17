(function(){
    function onInit(){
        const aboutDom = document.querySelector('#about-link');
        aboutDom.addEventListener('click',(event)=>{
            alert('POC for Markdown editor v1.0');
        });
    }

    window.onload = onInit;
}()); //IIFE