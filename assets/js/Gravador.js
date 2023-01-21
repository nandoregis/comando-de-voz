
class Gravador {

    constructor() {
        this.MySpeech;
        this.comandos = new Comandos;
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

            const voz = new Falar(text);
            voz.inicializar();

            // verificar comandos.
            setTimeout(()=>{
                this.comandos.executar(text);
            }, 2000);
            
            
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
                    this.ouvir();
                break;
        
            default:
                alert(check.message);
                break;
        }
        
    }

}





