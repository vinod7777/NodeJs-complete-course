module.exports = function (temp, product,index){

    let output = temp.replace(/{%title%}/g,product.name)
    output = output.replace(/{%price%}/g,product.price)
    output = output.replace(/{%image%}/g,product.image)
    output = output.replace(/{%ID%}/g,product.id)
    output = output.replace(/{%class%}/g,index %2 ? "top":"buttom")
    

    return output;

}