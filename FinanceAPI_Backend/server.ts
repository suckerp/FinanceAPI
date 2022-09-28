import express = require('express')
import { alphavantage } from './AlphaVantage/aplhavantage';
import { rapidalpha } from './RapidAPI/AlphaVantage/aplhavantage';
import { rapidmsfinance } from './RapidAPI/MSFinance/msfinance';
import { rapidyahoofinance } from './RapidAPI/YahooFinance/yahoofinance';

const app = express()

app.use(
    express.json(),
    express.urlencoded({extended: false}),
    express.Router({caseSensitive: false}),
    alphavantage,
    rapidalpha,
    rapidmsfinance,
    rapidyahoofinance
)


app.get('/', (req,res)=>{
    res.json("TEST")
})


const port = 3000
const server = app.listen(port,()=>{ 
    console.log('Server started')
    server.requestTimeout = 0
    server.headersTimeout = 0
    server.keepAliveTimeout = 0
    server.timeout = 0
    server.setTimeout(0)
})