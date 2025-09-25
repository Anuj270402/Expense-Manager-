let transactions = [];
let idCounter = 1;

module.exports = {
    getAll : ()=> transactions,
    add:(transactions)=>{
        transactions.id =idCounter++;
        transactions.push(transactions)
        return transactions
    },
    updated : (id , updatedData)=>  {
        const index = transactions.findIndex(t => t.id === id);
        id(index!==-1){
            transactions[index] = { ...transactions[index] , updatedData}
            return transactions[index]
        }
        return null;
    },

    delete :(id) =>{
        const index = transactions.findIndex(t = t.id === id)
        id(index !== -1){
            return transactions.splice(index, 1)[0];
        }
        return null 
    }
}