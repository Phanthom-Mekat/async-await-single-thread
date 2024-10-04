const myLoader = ()=> {
    return new Promise((resolve,reject)=>{
        const success =true;
        if(success){
            resolve(0.3)
        }
        else{
            reject(0.7)
        }

    } )


}


const myLoader2 = ()=>{

    return new Promise((resolve,reject)=>{
        const fails =false;
        if (fails){
            resolve(0.7)
        }
        else{
            reject(0.3)
        }


    })

}
myLoader()
myLoader2()


const myLoader3 = ()=> {
    return new Promise((resolve,reject)=>{
        const mekat = Math.random()
        if(mekat>0.5){
            resolve(mekat)
        }
        else{
            reject(mekat)
        }
    })
}

myLoader3()
.then(data => console.log('resolve data',data))
.catch(err => console.error('error data ', err))






const myLoader4 = ()=>{
    return new Promise((res,rej)=>{
        const value =Math.random();
        if(value<0.5){
            res(value)
        }
        else{
            rej(value)
        }

    })
}

myLoader4()
.then(data=>console.log('yeap data found',data))
.catch(err=>console.error('error khailam',err))



async function test(){
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
}

const loadData = async ()=>{
    try{
        const res = await fetch('');
        const data = res.json();
        console.log(data)
    }

    catch(err){
        console.error('error lol',err)
    }
}


const load = async ()=>{
    try{
        const res = await fetch('')
        const data = await res.json()
        console.log(data)
        return data
    }
    catch(err){

    }
}

const myLoader5 = ()=>{
    return new Promise((resolve,reject)=>{
        const mekat = Math.random()
        if (mekat>0.1){
            resolve(mekat)
        }
        else{
            reject(mekat)
        }
    })
}





setTimeout(()=>{
    myLoader5()
.then(data=>console.log('data pailam',data))
.catch(err => console.error('data de koi',err))
},4000)


const timeout = setTimeout(() => {
    console.log(2)
}, 2000);



let sum=0;
const time=setInterval(() => {
    sum++;
    console.log(sum)
    if (sum>6){
        clearInterval(time)
    }
}, 2000);