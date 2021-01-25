function prime(nbre){
  if(nbre === 1){
   return false;
  }
  else if(nbre === 2){
     return true;
  }
  else{
    for(var x = 2; x < nbre; x++){
      if(nbre % x === 0)
       return false;
    }
     return true;
  }
}
prime(37);
