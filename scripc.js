function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var img = window.document.getElementById('foto')
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagem/crianca-m.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagem/jovem-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagem/adult-m.jpg')
            } else {
                img.setAttribute('src', 'imagem/idos-m.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagem/crianca-f.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagem/jovem-f.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagem/adult-f.jpg')
            } else {
                img.setAttribute('src', 'imagem/idos-f.jpg')               
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}