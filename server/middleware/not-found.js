const notFound = (req,res)=> res.status(404).send("Route Does not exists")
module.exports = notFound