function verificar(argument) {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.querySelector('div#res')
	if (fano.value.length == 0 || fano.value > ano || fano.value.length == 1 || fano.value < 19 ) {
		window.alert("VERIFIQUE A MERDA DAS INFORMACOES!!!")
	} else {
		
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero =''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')
		if (fsex[0].checked) {
			genero = "HOMEM"

			if (idade >= 0 && idade < 11) {
				//criança
				img.setAttribute('src', 'foto-bebe-m.png')
			} else if (idade < 21) {
				//jovem
				img.setAttribute('src', 'foto-jovem-m.png')
			} else if (idade < 50){
				//adulto
				img.setAttribute('src', 'foto-adulto-m.png')
			} else {
				//idoso
				img.setAttribute('src', 'foto-idoso-m.png')
			}
		} else if (fsex[1].checked){
			genero = "MULHER"
			document.body.style.backgroundColor = 'pink'
			if (idade >= 0 && idade < 10) {
				//criança
				img.setAttribute('src', 'foto-bebe-f.png')
			} else if(idade < 21) {
				//jovem
				img.setAttribute('src', 'foto-jovem-f.png')
			} else if (idade < 50){
				//adulto
				img.setAttribute('src', 'foto-adulto-f.png')
			} else {
				//idoso
				img.setAttribute('src', "foto-idoso-f.png")
			}
		}

		res.innerHTML = `Voce e  ${genero} e tem ${idade} anos`
		res.appendChild(img)

	}
}