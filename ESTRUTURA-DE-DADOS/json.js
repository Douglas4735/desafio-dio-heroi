


let invoice = {
    name: 'douglas',
    age: 32,
    medalhas: {
        0: ["prata" , 29.99],
        1: ["bronze" , 20.99],
        2: ["ouro" , 100]
    }
}
generateInvoice(invoice);

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`e tem ${invoice.age} anos de idade`)
    console.log(`------------------------------`)

    //console.log(`E ele tem varias medalhas que são ${invoice.medalhas[2]}`)
    
    for(let index in invoice.medalhas){
        let [productName, productPrice] = invoice.medalhas[index]
        console.log(`${productName}: R$ ${productPrice}`)
    }
    
}