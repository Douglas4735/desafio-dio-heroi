let name = 'douglas';
let age = 33;
let products = ['Mouse xwp','Teclado fino','Monitor']
let productsValues = [29.90, 129.99, 899.99]


function generateInvoice(name,age,products,productsValues){
    console.log('O comprador ' + name )
    console.log(' A idade é ' + age + ' anos' )
    console.log('Comprou um ' + products[0])
    console.log('No valor ' + productsValues[0])
}
generateInvoice(name,age,products,productsValues);