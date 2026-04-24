const fs = require("fs")
const { getTodasReceitas, getReceitaPorId, inserirReceita, modificaReceita, deletaReceita} = require("../servicos/livro.js")

function getReceitas(req, res) {
    try {
        const receitas = getTodasReceitas()
        res.send(receitas)
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" })
        res.send(error.message)
    }
}

function getReceita(req, res) {
    try {
        if(id && Number(id)) {
            const id = req.params.id
            const receita = getReceitaPorId(id)
            res.send(receita)
        } else {
            res.status(442)
            res.send("O id deve ser um número")
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" })
        res.send(error.message)
    }
}

function postReceita(req, res) {
    try {
        const novaReceita = req.body
        inserirReceita(novaReceita)
        res.status(201).json({ mensagem: "Receita criada com sucesso" })
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" })
        res.send(error.message)
    }
}

function patchReceita(req, res) {
    try {
        if(id && Number(id)) {
            const id = req.params.id
            const modificacoes = req.body
            modificaReceita(id, modificacoes)
            res.json({ mensagem: "Receita atualizada com sucesso" })
        } else {
            res.status(442)
            res.send("O id deve ser um número")
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" })
        res.send(error.message)
    }
}

function deleteReceita(req, res) {
    try {
        if(id && Number(id)) {
            const id = req.params.id
            deletaReceita(id)
            res.json({ mensagem: "Receita deletada com sucesso" })
        } else {
            res.status(442)
            res.send("O id deve ser um número")
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" })
        res.send(error.message)
    }
}

module.exports = {
    getReceitas,
    getReceita,
    postReceita,
    patchReceita,
    deleteReceita
}