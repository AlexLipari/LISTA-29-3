
class Cliente {
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataNascimento(dataNascimento)

    }
    setNome(nome) {
        if (nome.length <= 50) {
            this.#Nome = nome
        } else {
            alert("Esse nome não é valido!")
        }
    }
    getNome() {
        return this.#Nome
    }
    setCpf(cpf) {
        if (cpf.length <= 11) {
            this.#Cpf = cpf
        } else {
            alert("Esse cpf não é valido!")
        }
    }
    getCpf() {
        this.#Cpf
    }
    setDataNascimento(dataNascimento) {
        this.#DataNascimento = dataNascimento
    }
    getDataNascimento() {
        return this.#DataNascimento
    }


}
class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal
    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.setTitular(titular)
        this.setPassagemIda(passagemIda)
        this.setPassagemVolta(passagemVolta)
        this.setValorTotal(valorTotal)
    }
    setTitular(titular) {
        this.#Titular = titular
    }
    getTitular() {
        return this.#Titular
    }
    setPassagemIda(passagemIda) {
        this.#PassagemIda = passagemIda
    }
    getPassagemIda() {
        return this.#PassagemIda
    }
    setPassagemVolta(passagemVolta) {
        this.#PassagemVolta = passagemVolta
    }
    getPassagemVolta() {
        return this.#PassagemVolta
    }
    setValorTotal(valorTotal) {
        this.#ValorTotal = valorTotal
    }
    getValorTotal() {
        return this.#ValorTotal
    }

}
class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino
    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }
    setEmpresa(empresa) {
        this.#Empresa = empresa
    }
    getEmpresa() {
        return this.#Empresa
    }
    setNumero(numero) {
        this.#Numero = numero
    }
    getNumero() {
        return this.#Numero
    }
    setData(data) {
        this.#Data = data
    }
    getData() {
        return this.#Data
    }
    setHorario(horario) {
        this.#Horario = horario
    }
    getHorario() {
        return this.#Horario
    }
    setLocalPartida(localPartida) {
        this.#LocalPartida = localPartida
    }
    getLocalPartida() {
        return this.#LocalPartida
    }
    setLocalDestino(localDestino) {
        this.#LocalDestino = localDestino
    }
    getLocalDestino() {
        return this.#LocalDestino
    }

}
class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo
    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraClasse)
        this.setValor(this.CalcularValor(valor))
        this.setPassageiro(passageiro)
        this.setVoo(voo)
    }
    CalcularValor(valor) {
        if (this.#PrimeiraClasse == true) {
            return valor * 1.5
        }
        return valor
    }
    ExibirResumo() {
        console.log("Passagem em nome de:", this.#Passageiro.getNome(), "No assento:", this.#Assento, "Do voo:", this.#Voo.getNumero(), "Com destino:", this.#Voo.getLocalDestino())
    }
    setAssento(assento) {
        this.#Assento = assento
    }
    getAssento() {
        return this.#Assento
    }
    setPrimeiraClasse(primeiraClasse) {
        if (primeiraClasse == true || primeiraClasse == false) {
            this.#PrimeiraClasse = primeiraClasse
        } else {
            alert("Esse valor é invalido")
        }
    }
    getPrimeiraClasse() {
        return this.#PrimeiraClasse
    }
    setValor(valor) {
        if (valor > 0) {
            this.#Valor = valor
        } else {
            alert("Valor invalido!")
        }
    }
    getValor() {
        return this.#Valor
    }
    setPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    getPassageiro() {
        return this.#Passageiro
    }
    setVoo(voo) {
        this.#Voo = voo
    }
    getVoo() {
        return this.#Voo
    }
}
let cliente = new Cliente("Sara", "22222200022", "20/07/2002")
let voo = new Voo("Azul", "200", "28/09/2022", "22:10", "São Paulo", "Natal")

let passagemAerea = new PassagemAerea(20, true, 1200, cliente, voo)
passagemAerea.CalcularValor()
passagemAerea.ExibirResumo()

let CadastroCliente = []
let CadastroVoo = []
let CadastroPacoteViagem = []
let Opcao = 0


while (Opcao != 4) {
    Opcao = prompt("(1) Cadastre um Novo cliente:\n (2) Cadastre um novo voo:\n (3) Cadastre um novo pacote:\n (4) Encerrar")
    switch (Opcao) {
        case "1":
            CadastrarCliente()
            break;
        case "2":
            CadastrarVoo()
            break;
        case "3":
            CadastrarPacote()
            break;
        case "4":
            console.log("Encerrar sistema")
            break;
        default:
            alert("Opção invalida!")
            break;

    }
}
function CadastrarCliente() {
    let nome = prompt("Nome:")
    let cpf = prompt("Cpf:")
    let dataNascimento = prompt("Data de nascimento:")
    CadastroCliente.push(new Cliente(nome, cpf, dataNascimento))

    ExibirCliente()
}
function ExibirCliente() {
    CadastroCliente.forEach((cliente, index) => {
        console.log([index + 1]-- - (cliente.getNome()), (cliente.getCpf()), (cliente.getDataNascimento()))
    })
}
function CadastrarVoo() {
    let empresa = prompt("Empresa:")
    let numero = prompt("Número:")
    let data = prompt("data:")
    let horario = prompt("Horário:")
    let localPartida = prompt("Local partida:")
    let localDestino = prompt("Local destino:")
    CadastroVoo.push(new Voo(empresa, numero, data, horario, localPartida, localDestino))

    ExibirVoo()
}
function ExibirVoo() {
    CadastroVoo.forEach((voo, index) => {
        console.log([index + 1]-- - (voo.getEmpresa()), (voo.getNumero()), (voo.getData()), (voo.getHorario()), (voo.getLocalPartida()), (voo.getLocalDestino))
    })
}
function CadastrarPacote() {
    ExibirCliente()
    let nomeCliente = prompt("Qual o cliente?")
    cliente = CadastroCliente.find(x => x.getNome() == nomeCliente)
    let passagemIda = CadastrarPassagemIda(cliente)
    let passagemVolta = CadastrarPassagemVolta(passagemIda)
    let pacoteViagem = new PacoteViagem(cliente, passagemIda,passagemVolta)
    CadastroPacoteViagem.push(pacoteViagem)
}
function CadastrarPassagemIda(passageiro) {
    ExibirVoo()
    let numeroVoo = prompt("Qual o número do voo?")
    voo = CadastroVoo.find(x => x.getNumero() == numeroVoo)

    let primeiraClasse = prompt("Viagem primeira classe? (1) SIM (2) NÃO")
    if (primeiraClasse == "1") {
        primeiraClasse = true
    } else {
        primeiraClasse = false
    }
    let valor = parseFloat(prompt("Qual valor?"))
    let poltrona = prompt("Qual poltrona?")
    return new PassagemAerea(poltrona, primeiraClasse, valor, passageiro, voo)
}
function CadastrarPassagemVolta(passagemIda) {
    let passageiro = passagemIda.getPassageiro()

    ExibirVoosDeVolta(passagemIda.getVoo().getLocalDestino())
    let numeroVoo = prompt("Qual o número do voo?")
    let voo = CadastroVoo.find(x => x.getNumero() == numeroVoo)

    let primeiraClasse = prompt("Viagem primeira classe? (1) SIM (2) NÃO")
    if (primeiraClasse == "1") {
        primeiraClasse = true
    } else {
        primeiraClasse = false
    }
    let valor = parseFloat(prompt("Qual valor?"))
    let poltrona = prompt("Qual poltrona?")
    return new PassagemAerea(poltrona, primeiraClasse, valor, passageiro, voo)
}
function ExibirVoosDeVolta(localDestino) {
    CadastroVoo.forEach((voo, index) => {
        if (voo.getLocalPartida() == localDestino) {
            console.log([index = 1], (voo.getEmpresa()), (voo.getNumero()), (voo.getData()), (voo.getHorario()), (voo.LocalPartida()), (voo.LocalDestino()))
        }
    })
}