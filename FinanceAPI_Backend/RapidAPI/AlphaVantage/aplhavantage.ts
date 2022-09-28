import express = require('express')
const rapidalpha = express.Router()

rapidalpha.get('/rav_price', async (req,res)=>{
    
    const url = 'https://alpha-vantage.p.rapidapi.com/query?symbol=MSFT&function=TIME_SERIES_INTRADAY&interval=5min&output_size=compact&datatype=json';

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7b09cfecfmshfa2dc8dc247a515p1324b9jsnc915c2b6b3ec',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
    }


    async function getPrice() {
        return fetch(url, options)
        .then(res => res.json())
        //.then(json => console.log(json))
        .catch(err => console.error('error:' + err))
    }

    const result = await getPrice().then(res =>{return res})

    console.log(result)

    //res.json(result.data[result.data.length-1].Dividends)
    res.json(result)

})

export { rapidalpha }
