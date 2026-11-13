const productService = require("../services/product.service");

// READ
const getProduct = async (req, res) => {
        try {
            const id = req.params.id;
            let products = await productService.getProduct(id);

            res.status(200).render('products',{
                products, 
                msj:"Tus productos!!"
            })
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

module.exports = {
    getProduct
}