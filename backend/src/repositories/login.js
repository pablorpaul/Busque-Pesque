class RepositoriesLogin{
    async PegarUmPorEmail(email){
      const estabelecimento = await Estabelecimento.findOne({
        where: { id },
        transaction
      })
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return estabelecimento
    }
}
module.exports = RepositoriesLogin