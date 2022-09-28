import express = require('express')
const alphavantage = express.Router()

alphavantage.get('/av_price', async (req,res)=>{

    //const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=JCFTEUU0KSN364KT'

    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ALV.DE&apikey=JCFTEUU0KSN364KT'
    
    const options = {
    method: 'GET'
    }

    async function getPrice() {
        return fetch(url, options)
        .then(res => res.json())
        //.then(json => console.log(json))
        .catch(err => console.error('error:' + err))
    }

    const result = await getPrice().then(res =>{return res})

    console.log(result.toString)

    const keys = (Object.keys(result))
    const keys2 = (Object.keys(result[keys[1]]))
    const keys3 = (Object.keys(result[keys[1]][keys2[0]]))

    console.log(result[keys[1]][keys2[0]][keys3[3]])

    //res.json(result.data[result.data.length-1].Dividends)
    //res.json(result['Time Series (Daily)']['2022-09-27']['4. close'])
    res.json(Number(result[keys[1]][keys2[0]][keys3[3]]))


})

export { alphavantage }