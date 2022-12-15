

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert ('[Erro] Verifique os dado e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 7) {
                //Crianca
                img.setAttribute('src', 'babym.png')
            } else if (idade <15 ) { 
                //adolecente
                img.setAttribute('src', 'boy.png')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'teenm.png')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultm.png')
            } else {
                //Idoso
                img.setAttribute('src', 'bigm.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 7) {
                //Crianca
                img.setAttribute('src', 'babyf.png')
            } else if (idade <15 ) { 
                //adolecente
                img.setAttribute('src', 'girlf.png')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'teenf.png')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultf.png')
            } else {
                //Idoso
                img.setAttribute('src', 'bigf.png')
            }
        }
        
        res.innerHTML = `Detectamos que é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}
