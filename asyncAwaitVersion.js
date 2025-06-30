
const mowYard = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`${name} mowed the yard`);
        }, 2000)
    })   
};


const weedEat = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished using the weed eater.`)
            }else{
                reject(`${name} fell asleep after mowing the yard.`)
            }
        }, 1500)
    })
};


const trimHedges = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(Math.random() < 0.5) {
                resolve(`${name} finished trimming the hedges.`)
            }else{
                reject(`${name} fell asleep after weed eating the yard.`)
            }
        }, 1000)     
    })
};  

const collectWood = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished collecting wood.`)
            }else {
                reject(`${name} fell asleep after trimming the hedges.`)
            }
        }, 2500)
    })
};

const timeWaterGarden = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished watering the garden.`)
            }else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, 500)
    })
};

const doSummerChores = async (name) => {

    try{
        const taskOne = await mowYard();
        console.log(taskOne);

        const taskTwo = await weedEat();
        console.log(taskTwo);

        const taskThree = await trimHedges();
        console.log(taskThree);

        const taskFour = await collectWood();
        console.log(taskFour);

        const taskFive = await waterGarden ();
        console.log(taskFive);

        console.log(`${name} finished all their chores!`);
    }
    catch(error) {
        console.log(error);
    }
}

doSummerChores();