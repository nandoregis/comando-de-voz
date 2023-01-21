

class Texto {

    constructor(texto) {
        this.texto = texto.toLowerCase();
        this.dados = [];
    }

    dividirTextoPorEspaço() { return this.texto.split(' '); }

    procurarPalavrasCodigo() 
    {
        let arr = this.dividirTextoPorEspaço();
        
        for (let k=0; k < arr.length; k++) {

            for(let i = 0; i < TEXTO_CODIGO.length; i++) {
                if (arr[k] === TEXTO_CODIGO[i]) {
                    let obj = { key: k, text : arr[k]};
                    this.dados.push(arr[k]);
                }
            }

        }

        if (this.dados.length > 0) {
            return { success : true, text : this.dados.join(' ') };

        } else return { success : false, text : '' };

    }

}