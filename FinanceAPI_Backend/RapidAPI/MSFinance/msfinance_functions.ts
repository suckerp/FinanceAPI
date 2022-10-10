const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7b09cfecfmshfa2dc8dc247a515p1324b9jsnc915c2b6b3ec',
        'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
        }
    };

export async function getPerformanceID(symbol:any) {

    const url = 'https://ms-finance.p.rapidapi.com/market/v2/auto-complete?q=' + symbol

    const performanceID = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));

    const results:any[] = performanceID.results;

    return results.find(stock => stock.ticker == symbol).performanceId;
}

export async function getPrice(performanceId:any) {

    const url = 'https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=' + performanceId;

    const price = await fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));

    return price.lastPrice;
}

export async function getDividend(performanceId:any) {

    const url = 'https://ms-finance.p.rapidapi.com/stock/v2/get-dividends?performanceId=' + performanceId;

    const dividend = await fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));

    //console.log(result.rows[0].datum[result.rows[0].datum.length-2]);

    console.log(dividend)

    return dividend

    //return (Number(dividend.rows[0].datum[dividend.rows[0].datum.length-2]));
    
}


export async function getYield(performanceId:any) {

    const url1 = 'https://ms-finance.p.rapidapi.com/stock/v2/get-dividends?performanceId=' + performanceId;
    const url2 = 'https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=' + performanceId;


    const result = await Promise.all([
        fetch(url1, options)
            .then(res => res.json())
            .catch(err => console.error('error:' + err)),
        fetch(url2, options)
            .then(res => res.json())
            .catch(err => console.error('error:' + err))
    ]);

    //console.log(result[0].rows[0].datum[result[0].rows[0].datum.length-2])
    //console.log(result[1].lastPrice)

    return Number((Number(result[0].rows[0].datum[result[0].rows[0].datum.length-2]) / result[1].lastPrice * 100).toFixed(2));
    
}