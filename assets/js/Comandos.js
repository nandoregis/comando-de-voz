/**
 *  classe com finalidade no caso de inserir comandos por fala.
 * 
 */

class Comandos {

    constructor() {
        this.texto;
    }

    corDeTela(texto) {
        let body = document.querySelector('body')
        if (texto === 'tela escura') body.style.background = 'rgb(26, 26, 26)';
        if(texto === 'tela clara') body.style.background = 'rgb(238, 238, 238)';
    }

    verificarCodigo(codigo) {
        this.corDeTela(codigo);
    }

    executar(codigo) {
        this.texto = new Texto(codigo);
        codigo = this.texto.procurarPalavrasCodigo();

        if (codigo.success) this.verificarCodigo(codigo.text);

    }   
}