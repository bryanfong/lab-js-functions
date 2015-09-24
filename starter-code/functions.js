// Question 1
function maxOfTwoNumbers(a,b) {
    if(a>b){
        return a
    }else{
        return b
    }
}

// Question 2
function maxOfThree(a,b,c) {
    if(a>b>c){
        return a
    }else if(b>a>c){
        return b
    }else{
        return c        
    }
}


// Question 3
function isCharacterAVowel(letter) {
    if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"){
        return true
    }else{
        return false        
    }
};

// Question 4
function sumArray(sth) {
     var sum = 0;    
     for(var i=0; i<sth.length; i++){
         sum += sth[i];
     }   
    console.log(sum);
}


// Question 4
function multiplyArray(sth) {
     var result = 1;    
     for(var i=0; i<sth.length; i++){
         result *= sth[i];
     }   
    console.log(result);
}


// Question 5

function numberOfArguments() {
    return arguments.length;
}

// Question 6
function reverseString(str){
 return str.split("").reverse().join(" ");
}



// Question 7
function findLongestWord (sth) {
    sth.sort();
    console.log(sth[sth.length-1]) 
}


// Question 8
function filterLongWords (sth, num) {
    sth.sort();

    for(var whatever in sth){
	    if(sth[whatever].length > num){
	        console.log(sth[whatever]);
	    }    
    }
};


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

