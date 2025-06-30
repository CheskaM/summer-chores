function mowYard(name, callback) {
    
    setTimeout(() => {
            console.log(`${name} mowed the yard`);
    }, 2000); 
}


function weedEat(name, callback) {

    setTimeout(() => {
        if(Math.random() < 0.5) {
            console.log(`${name} finished using the weed eater.`);
            callback(name);
        }else{
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 1500);
}


function trimHedges(name, callback) {
    
    setTimeout(() => {
       if(Math.random() < 0.5) {
            console.log(`${name} finished trimming the hedges.`);
            callback(name);
        }else{
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);     
}  

function collectWood(name, callback) {
    
    setTimeout(() => {
       if(Math.random() < 0.5) {
            console.log(`${name} finished collecting wood.`);
            callback(name);
        }else {
            console.log(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
}

function waterGarden(name, callback) {
    
    setTimeout(() => {
       if(Math.random() < 0.5) {
            console.log(`${name} finished watering the garden.`);
            callback(name);
        }else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
}

function doSummerChores(name){
    mowYard(name, () => {
        weedEat(name, () => { 
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`)
                    });
                });
            });
        });
    });
}


doSummerChores();







/*------ I MIGHT'VE DONE THIS WRONG BUT ALSO I MIGHT NOT HAVE, SO I'M SAVING THIS AT THE MOMENT-----
const mowYard = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mowYard = true;
                resolve(`${name} mowed the yard`)
        }, 2000)
    })   
};


const timeWeedEat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weedEat = true;

            if(weedEat) {
                resolve(`${name} finished using the weed eater.`)
            }else{
                reject(`${name} fell asleep after mowing the yard.`)
            }
        }, 1500)
    })
};


const timeTrimHedges = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trimHedges = true;
            
            if(trimHedges) {
                resolve(`${name} finished trimming the hedges.`)
            }else{
                reject(`${name} fell asleep after weed eating the yard.`)
            }
        }, 1000)     
    })
};  

const timeCollectWood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const collectWood = true;

            if(collectWood) {
                resolve(`${name} finished collecting wood.`)
            }else {
                reject(`${name} fell asleep after trimming the hedges.`)
            }
        }, 2500)
    })
};

const timeWaterGarden = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const waterGarden = true;

            if(waterGarden) {
                resolve(`${name} finished watering the garden.`)
            }else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, 500)
    })
};

const doSummerChores = async () => {

    try{
        const taskOne = await mowYard();
        console.log(taskOne);

        const taskTwo = await timeWeedEat();
        console.log(taskTwo);

        const taskThree = await timeTrimHedges();
        console.log(taskThree);

        const taskFour = await timeCollectWood();
        console.log(taskFour);

        const taskFive = await timeWaterGarden ();
        console.log(taskFive);

        console.log(`${name} finished all their chores!`)
    }
    catch(error) {
        console.log(error)
    }
}

doSummerChores(); */