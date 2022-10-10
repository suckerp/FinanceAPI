import express = require('express')
const polygon= express.Router()

const api_key = 'lORqRtZeTvDsomIKcYitbeRx11CGTuKp'

polygon.get('/poly_dividend', async (req,res)=>{


    async function getDividends(symbol:any) {

        const url = 'https://api.polygon.io/v3/reference/dividends?apiKey=' + api_key + '&ticker=' + symbol + '&dividend_type=CD&limit=1'

    
        const results = await fetch(url)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
    
        return results
    }


    //console.log(req.query.symbol)

    //const performanceId = await getDividends(req.query.symbol)

    const dividend = await getDividends('AAPL')

    console.log(dividend.results[0].cash_amount * dividend.results[0].frequency)

    res.json(dividend)

    //res.json(dividend.results[0].cash_amount * dividend.results[0].frequency)

})


export { polygon }