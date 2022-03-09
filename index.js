(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    /* const novoProduto = Produto.create({
        nome: 'Teclado USB',
        preco: 30,
        descricao: 'Teclado bacana'
    })
    console.log(novoProduto); */

   /*  const produto = await Produto.findByPk(1);
    console.log(produto);

    produto.descricao = 'Fiz uma alteração';
    produto.save(); */

    await Produto.destroy ({ where: {
        preco: 30
    }})
})();