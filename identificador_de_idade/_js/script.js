function verificar()
{   
    //idade
    let ano = new Date ()
    let anoAtual = ano.getFullYear()
    let anoNascimento = parseInt(document.querySelector("#nascimento").value)
    let idade = anoAtual - anoNascimento

    //sexo
    let sexo = document.getElementsByName("sexo")
    let genero = ''

    //imagem
    let img = document.querySelector("#imagem")

    if (anoNascimento < 1900 || anoNascimento > anoAtual)
    {
        window.alert("Insira um ano entre 1900 e o ano atual.")
    }
    else
    {
        if (sexo[0].checked)
        {
            genero = "feminino"
            if (idade < 10)
            {
                img.src="_images/criancaf.png"
            }
            else if (idade < 20)
            {
                img.src="_images/jovemf.png"
            }
            else if (idade < 50)
            { 
                img.src="_images/adulta.png"
            }
            else
            {
                img.src="_images/idosa.png"
            }  
        }
        else
        {
            genero = "masculino"
            if (idade < 10)
            {
                img.src="_images/criancam.png"
            }
            else if (idade < 20)
            {
                img.src="_images/jovemm.png"
            }
            else if (idade < 50)
            { 
                img.src="_images/adulto.png"
            }
            else
            {
                img.src="_images/idoso.png"
            }
        }

        //resultado
        let resultado = document.querySelector("#resultado")
        resultado.textContent = `Você tem ${idade} anos e é do sexo ${genero}.`
    }
}