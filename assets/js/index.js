(()=>{
    
    window.addEventListener('keydown', (e) => {
        let code = e.keyCode;
        // console.log(code);
        if(code === 109){
            const gravar = new Gravador;
            gravar.inicializar();
        }   
    });

    
})();

