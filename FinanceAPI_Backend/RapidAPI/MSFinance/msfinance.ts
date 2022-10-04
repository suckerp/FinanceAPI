import express = require('express')
const rapidmsfinance = express.Router()
import { getPerformanceID, getPrice, getDividend, getYield } from './msfinance_functions'


rapidmsfinance.get('/ms_price', async (req,res)=>{

    //console.log(req.query.symbol)

    const performanceId = await getPerformanceID(req.query.symbol)

    //const price = await getPrice(performanceId)

    res.json(await getPrice(performanceId))

})

rapidmsfinance.get('/ms_dividend', async (req,res)=>{

    //console.log(req.query.symbol)

    const performanceId = await getPerformanceID(req.query.symbol)

    //const dividend = await getDividend(performanceId)

    res.json(await getDividend(performanceId))
    
})


rapidmsfinance.get('/ms_yield', async (req,res)=>{

    //console.log(req.query.symbol)

    const performanceId = await getPerformanceID(req.query.symbol)

    const actual_yield = await getYield(performanceId)

    console.log(actual_yield)

    res.json(actual_yield)
    
})


export { rapidmsfinance }