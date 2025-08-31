function genTicket(n) {
    let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10));
    return arr;
}


function sum(arr){
    return arr.reduce((sum, curr) => sum + curr, 0 );
}

export {genTicket, sum};