const transaction = require("../models/transaction");



exports .getTransactions = (req, res) => {
    const transactions = transaction.getAll 
    const totalCredit = transactions
     .filter(t => t.type === "Credit")
     .reduce((sum , t) => sum + t.amount,0);
     const totalDebit=transactions
     .filter(t => t.type === "Debit")
     .reduce((sum ,t) => sum +t.amount,0);
     const balance =  totalCredit - totalDebit;
     res.json({transactions , balance})
}

exports .addTransaction = (req ,res) => {
    const {amount , type , category , description} = req.body;
    if(!amount|| !type|| !category){
        return res.status(400).json({error : "Amount  , Type , Category are required"} )


    }
    const newTransaction = TransactionList.add({
        amount : Number(amount),
        type,
        category,
        description : description || "" 

    })
    res.status(201).json(newTransaction);
}

exports.updatedTransaction = (req,res =>{
    const {id} = req.params ;
    const updatedTransaction = Transaction.update(Number(id),req.body);
    if(!updatedTransaction) return res.status(404).json({error : "Transaction not found"});
    res.json(updatedTransaction);

})

exports.deleteTransaction = (req , res ) =>{
    
}