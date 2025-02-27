
function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}
console.log('Promise lecture start')
delayFn(2000).then(()=>console.log('after 2 seconds promise resolve'));
console.log("end");  
 
function myDivide(num1 , num2)
{
    return new Promise((resolve, reject)=>
    {
        if(num2 == 0)
        {
            reject('cannot perform divsion by zero');
        }
        else{
            resolve(num1/num2);
        }
    })
}

myDivide(10,2).then(result=>console.log(result,'res')).catch(error=>console.log(error,'err'));