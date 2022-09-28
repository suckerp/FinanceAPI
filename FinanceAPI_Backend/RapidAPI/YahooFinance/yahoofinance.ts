import express = require('express')
const rapidyahoofinance = express.Router()




rapidyahoofinance.get('/y_dividends', async (req,res)=>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("symbol", "FRE.DE");

    const url = 'https://yahoo-finance97.p.rapidapi.com/dividends';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f7b09cfecfmshfa2dc8dc247a515p1324b9jsnc915c2b6b3ec',
            'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
        }

    async function getDividends() {
        return fetch(url, options)
        .then(res => res.json())
        //.then(json => console.log(json))
        .catch(err => console.error('error:' + err))
    }

    const result = await getDividends().then(res =>{return res})

    console.log(result.data)

    const quarter:number = Number(result.data[result.data.length-1].Dividends)

    //res.json(result.data[result.data.length-1].Dividends)
    res.json(quarter*4)

})


rapidyahoofinance.get('/y_price', async (req,res)=>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("symbol", "ALV.DE");
    encodedParams.append("period", "1d");

    const url = 'https://yahoo-finance97.p.rapidapi.com/price';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f7b09cfecfmshfa2dc8dc247a515p1324b9jsnc915c2b6b3ec',
            'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
        }

    async function getPrice() {
        return fetch(url, options)
        .then(res => res.json())
        //.then(json => console.log(json))
        .catch(err => console.error('error:' + err))
    }

    const result = await getPrice().then(res =>{return res})

    console.log(result.data)

    //res.json(result.data[result.data.length-1].Dividends)
    res.json(result.data[0].Close)

})


export { rapidyahoofinance }