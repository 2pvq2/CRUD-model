const getHomepage = (req,res) => {
    res.send('Home page')
}

const getABC = (red,res) => {
    res.send('ABC')
}

const getHoidanIT = (req,res) =>{
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getABC ,getHoidanIT
}
