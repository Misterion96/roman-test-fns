/*
* должна выводить массив всех чисел, которые есть в каждом массиве на входе
* если совпадении нет, вернуть пустой массив
* */
function findIntersectArrays(...args) {
  // сюда код
 
    let m = [];             // выходной массив
    let minLength = 0;      // мин длина входного массива
    let minArray = 0;       // номер мин масива
    let newminLength = 0;   // вспомогательная переменная  
    
    for (let i = 0; i <= args.length-2; i++){   // ищем минимиальный входной массив
      minLength=args[i].length;
      minArray= i;
      
      for(let j = i+1; j <= args.length-1; j++){
        newminLength=args[j].length;
        if(newminLength<minLength){
          minLength=newminLength;
          minArray= j;
        }
        // console.log('Длина самого короткого массива равна = ' + minLength);
        // console.log('Самый короткий массив ' + minArray);
        // console.log(args[minArray]);
        // console.log('проверка длины самого короткого массива ' + args[minArray].length);
      }
    }

    for (let i=0; i<minLength; i++){                         //  берем число из мелкого массива 
      for (let j=0; j<args.length; j++){                     //  по каждому входящему массиву args
        if(j!=minArray){                                     //  кроме самого короткого массива, его пропускаем
          for(let k=0; k<args[j].length; k++){
            if(args[minArray][i]==args[j][k]){               //  если число самого мелкого массива равно числу текущего массива
              m[i]=args[j][k];                               //   формируем массив m
            } 
          }
        }
      }
    }  
    
    console.log('собранный массив совпадений m=', m)


    for(let i=0; i<m.length; i++){
      if(m[i]===undefined||m[i]===NaN||m[i]===''){                                   // проверка на несовпадение
        m=[];
        console.log('нет совпадений, возвращаем m', m)
        return m
      }
    }

    for (let i=0; i<=m.length-2; i++){                // сортировка массива по возрастанию
      let minNumber=m[i];
      
      for(let j = i+1; j<=m.length-1; j++){
        let newminNumber=m[j];
        if(newminNumber<minNumber){
          m[i]=newminNumber;
          m[j]=minNumber;
        }
      }
    }
    console.log('m по возрастанию =', m)
    
    for(let i=0; i<m.length; i++){
      for(let j=i+1; j<m.length-1; j++){
        if(m[i]==m[j]){
          m.splice(j, 1);
          console.log('удаляю')
          i=0;
        }
      }
    }
  console.log('m =', m)
  return m
}

module.exports = findIntersectArrays