const { Router } = require("express")
const { getReceitas, getReceita, patchReceita, deleteReceita} = require("../controladores/livros.js")


const router = Router()

router.get("/", getReceitas)

router.get("/:id", getReceita)

router.post("/", postReceita)

router.patch("/:id", patchReceita)

router.delete("/", deleteReceita)

module.exports = router