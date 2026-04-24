const fs = require("fs")

function getTodasReceitas() {
    return JSON.parse(fs.readFileSync("receitas.json"))
}

function getReceitaPorId(id) {
    let receitas = JSON.parse(fs.readFileSync("receitas.json"))

    const receitasFiltradas = getTodasReceitas()
    return receitasFiltradas.filter(receita => receita.id === id)[0]
}

function inserirReceita(receita) {
    let receitas = JSON.parse(fs.readFileSync("receitas.json"))

    const novaListaDeReceitas = [...receitas, receita]
    fs.writeFileSync("receitas.json", JSON.stringify(novaListaDeReceitas))
}

function modificaReceita(id, modificacoes) {
    let receitas = JSON.parse(fs.readFileSync("receitas.json"))

    const indiceDaReceita = receitas.findIndex(receita => receita.id === id)

    const receitaModificada = { ...receitas[indiceDaReceita], ...modificacoes }
    receitas[indiceDaReceita] = receitaModificad
    fs.writeFileSync("receitas.json", JSON.stringify(receitas))
}

function deletaReceita(id) {
    let receitas = JSON.parse(fs.readFileSync("receitas.json"))
    receitas = receitas.filter(receita => receita.id !== id)
    fs.writeFileSync("receitas.json", JSON.stringify(receitas))
}

module.exports = {
    getTodasReceitas,
    getReceitaPorId,
    inserirReceita,
    modificaReceita,
    deletaReceita
}   