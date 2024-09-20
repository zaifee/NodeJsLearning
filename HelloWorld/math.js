function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// exports nhi likha tha yha galti ki thi

// module.exports = add; if we have to export single item or func it will work

// but if we have to exports multiple function then we have to make a object


module.exports =  {
    addFn: add,
    subFn: sub
};