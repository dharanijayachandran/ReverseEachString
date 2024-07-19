let string = ['hello', 'hi', 'welcome'];
let result = reverseEachString(string);
console.log("Result: "+result);

function reverseEachString(string){
    return string.map(str =>{
        return reverseString(str);
    })
}

function reverseString(str){
        let reverse = '';
        for(let i = str.length - 1 ;i >= 0; i--){
            reverse += str[i];
        }
        return reverse;
}