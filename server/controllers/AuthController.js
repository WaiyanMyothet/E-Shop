const login=(req,res)=>{
    console.log(req);
    console.log(res);
    res.status(200).send('success')
}
module.exports={
   login
}