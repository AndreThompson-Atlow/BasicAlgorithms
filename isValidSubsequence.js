function isValidSubsequence(array, sequence) {
    // Time  Complexity O(N) 
    // Space Complexity O(1)
  
    let pos = 0;
    
    for(let i = 0; i < array.length; i++){
      if(array[i] == sequence[pos]){
        pos += 1;
        if(pos >= sequence.length){
          return true;
        }
      }
    }
    return false;
}