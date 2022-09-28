import express = require('express')
const rapidmsfinance = express.Router()


rapidmsfinance.get('/ms_price', async (req,res)=>{

    //const url = 'https://ms-finance.p.rapidapi.com/market/v2/auto-complete?q=apple';

    //const url = 'https://ms-finance.p.rapidapi.com/stock/v2/get-dividends?performanceId=0P000000GY';

    const url = 'https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=0P000000GY';
    
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7b09cfecfmshfa2dc8dc247a515p1324b9jsnc915c2b6b3ec',
        'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
    }
    };



    async function getPrice() {
        return fetch(url, options)
        .then(res => res.json())
        //.then(json => console.log(json))
        .catch(err => console.error('error:' + err))
    }

    const result = await getPrice().then(res =>{return res})

    console.log(result)

    //res.json(result.data[result.data.length-1].Dividends)
    res.json(result.lastPrice)

})


export { rapidmsfinance }