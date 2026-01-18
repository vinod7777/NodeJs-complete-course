module.exports = function (temp, product,index){

    let output = temp.replace(/{%TITLE%}/g,product.name)
    output = output.replace(/{%TYPE%}/g,product.type)
    output = output.replace(/{%MATERIAL%}/g,product.type)
    output = output.replace(/{%PRICE%}/g,product.price)
    output = output.replace(/{%IMAGE%}/g,product.image)
    output = output.replace(/{%AVAILABLILTY%}/g,product.availability ? 'in stock': 'out of stock')

    let features = product.features.map( feature => `<li>${feature}</li>`).join(" ")

    output = output.replace(/{%FEATURES%}/g,features)
    output = output.replace(/{%DIMENSIONS%}/g,product.dimensions.width + product.dimensions.height + product.dimensions.length)


    

    return output;

}