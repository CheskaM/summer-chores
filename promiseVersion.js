const mowYard = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mowYard = true;
                resolve(`${name} mowed the yard`);
        }, 2000)
    });   
};


const weedEat = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished using the weed eater.`);
            }else{
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
};


const trimHedges = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished trimming the hedges.`);
            }else{
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);  
    });
};  

const collectWood = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished collecting wood.`);
            }else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
};

const waterGarden = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random() < 0.5) {
                resolve(`${name} finished watering the garden.`);
            }else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
};

function doSummerChores(name) {
    mowYard(name)
        .then(result => {
            console.log(result);
            return weedEat(name);
        })
        .then(result => {
            console.log(result);
            return trimHedges(name);
        })
        .then(result => {
            console.log(result);
            return collectWood(name);
        })
        .then(result => {
            console.log(result);
            return waterGarden(name);
        })
        .then(result => {
            console.log(result);
            console.log(`${name} finished all their chores!`);
        })
       .catch(error => {
            console.log(error);
       });
        
    
}