(()=>{

    const resposta = document.getElementById('resposta');

    class Gravador {

        constructor() {
            this.MySpeech;
            
        }
    
        verificarCompatibilidade() {
            try {
                if( window.SpeechRecognition || window.webkitSpeechRecognition ) {
                    this.MySpeech = new webkitSpeechRecognition();
                    
                    return {
                        success: true,
                        message: "sucesso"
                    };
                }else throw new Error ("Seu navegador não tem compatibidade com recurso de voz");

            }catch(error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        }

        liguagem(lingua) { this.MySpeech.lang = lingua; }

        start() {this.MySpeech.start();}

        evento() {
            this.MySpeech.addEventListener('result', (e) => {
                const text = e.results[0][0].transcript;

                let p = document.createElement('p');
                p.innerText = text;

                resposta.prepend(p);
                
            });
        }

        ouvir() {
            try {
                this.liguagem('pt-BR');
                this.evento();
                this.start();
                
            }catch(e) {
                alert('erro: ' + e);
            }
        }

        inicializar() {
            let check = this.verificarCompatibilidade();
            
            switch (check.success) {
                case true:
                    // chamar metodo.
                        this.ouvir();
                    break;
            
                default:
                    alert(check.message);
                    break;
            }
            
        }

    }

    window.addEventListener('keydown', (e) => { 
        let code = e.keyCode;
        if(code === 109){
            const gravar = new Gravador;
            gravar.inicializar();
        }   
    });

})();

