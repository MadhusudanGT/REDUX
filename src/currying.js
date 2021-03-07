function add(a){//fucnation with single param
    return function(b){
        return a+b;
    }
}

const add2 = a =>b => a+b;//
add(1)(5);

//currying is a technic that allows us to take 
//a funcation that has in arugments and convert it to a
//fucntion that has a single arugument soto applu currying here
//we get