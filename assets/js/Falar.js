
/** 
 *  Classe de voz do browser - falar
 */
const resposta = document.getElementById('resposta');

class Falar {
    
    constructor(texto) {
        this.synth;
        this.texto = texto;
    }

    verificarCompatibilidade() {
        try {
            if( window.speechSynthesis ) {
                
                this.synth = window.speechSynthesis;

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


    async pegarVozes() {
        return await this.synth.getVoices(); 
    }

    verificarSeExisteVozes(matriz = []) {
        if (matriz.length === 0) return false;
        return true;
    }

    async falar() {
        if( await this.verificarSeExisteVozes(this.pegarVozes() )){
            let voice = this.pegarVozes();
            let toSpeak = new SpeechSynthesisUtterance(this.texto);
            toSpeak.voice = voice[0];

            this.synth.speak(toSpeak);
        }else {
            // Não tem voz no browser - ativar função de texto
        
            let p = document.createElement('p');
            p.innerText = this.texto;

            resposta.prepend(p);

        }
    }

    inicializar() { 
        let check = this.verificarCompatibilidade();
        
        switch (check.success) {
            case true:
                // chamar metodo.
                    this.falar();
                break;
        
            default:
                alert(check.message);
                break;
        }
    }
}


