hello(goodbye);



function hello(callback){
    console.log('Hello');
    callback();

}

function goodbye(){
    console.log('GOODBYE')
}

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(resutl){
    console.log(resutl);
}

sum(displayConsole,1,2);
