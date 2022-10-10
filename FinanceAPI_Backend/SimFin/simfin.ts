import express = require('express')
const simfin = express.Router()

const api_key = 'LLhMywTgsJJX1ex1Rg0C2RrIJrRXw4QN'


/*
function getLastBusinessDay() {
    const today = new Date()
    console.log(today.getDay())
    if (today.getDay() == 1) 
    { return today.setDate(today.getDate() - 3) }
    else 
    { return today.setDate(today.getDate() - 1) }
}
*/

simfin.get('/sf_price', async (req,res)=>{

    //const lastBusinessDay = new Date(getLastBusinessDay()).toISOString().split("T")[0]

    //console.log(lastBusinessDay)

    async function getDividends(symbol:any) {

        const url = 'https://simfin.com/api/v2/companies/prices?ticker=' + symbol + '&api-key=' + api_key

    
        const results = await fetch(url)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
    
        return results
    }


    //console.log(req.query.symbol)

    //const performanceId = await getDividends(req.query.symbol)

    const dividend = await getDividends('O')

    console.log(dividend[0].data[dividend[0].data.length-1])

    res.json(dividend[0].data[dividend[0].data.length-1])

})
 

export { simfin }