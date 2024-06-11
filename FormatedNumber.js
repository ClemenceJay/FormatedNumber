//Nombre au format américain (une virgule tous les 3 chiffres)

  const formatNumberSlice = number => {
    let stringNum = number.toString();
    const startIndex = stringNum.indexOf(".");
    if(startIndex === -1){     //pour les nombre entiers
        for (let i = stringNum.length-3; i>0; i-=3){
            stringNum = stringNum.slice(0, i) + "," + stringNum.slice(i);
        }
    } else {     //pour les décimaux
        for (let i = startIndex-3; i>0; i-=3){
            stringNum = stringNum.slice(0, i) + "," + stringNum.slice(i);
        }
        }
    return stringNum
  }
