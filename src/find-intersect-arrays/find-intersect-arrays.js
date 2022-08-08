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

    function findMinArray(){                    // ищем минимиальный входной массив
      for (let i = 0; i <= args.length-2; i++){   
        minLength=args[i].length;
        minArray= i;
        
        for(let j = i+1; j <= args.length-1; j++){
          newminLength=args[j].length;
          if(newminLength<minLength){
            minLength=newminLength;
            minArray= j;                         // номер минимального входного массива
          }
        }
      }
      return minLength, minArray
    }
    
    // console.log('Длина самого короткого массива равна = ', minLength);
    // console.log('Самый короткий массив ', minArray);
    // console.log(args[minArray]);
    // console.log('проверка длины самого короткого массива ', args[minArray].length);
    
    function findEqual(){ 
      for (let i=0; i<minLength; i++){                         //  берем число из мелкого массива 
        for (let j=0; j<args.length; j++){                     //  по каждому входящему массиву args
          if(j!=minArray){                                     //  кроме самого короткого массива, его пропускаем
            for(let k=0; k<args[j].length; k++){
              if(args[minArray][i]==args[j][k]){               //  если есть совпадение, то пишем это число в массив m
                m[i]=args[j][k];                               //  формируем массив m
              } 
              // else {
                //   m[i]=NaN;
                // }
              }
            }
          }
        }
        return m  
      }

      function emptyArray(){                                   // формируем пустой массив, если нет совпадений
        m=[];
        console.log('нет совпадений, обнуляем m:', m)
        return m
    }
    
    function sortingArray(){                        // сортировка массива по возрастанию
      for (let i=0; i<=m.length-2; i++){                        
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
      return m
    }
    
    function deleteItem(){
      for(let i=0; i<m.length; i++){
        for(let j=i+1; j<=m.length-1; j++){
          if(m[i]==m[j]){
            m.splice(j, 1);
            console.log('удаляю дубликат');
            // i=0;
          }
        }
      }
      return m
    }

    if (args==[]){                                          // если входной массив пустой
      emptyArray()                                          // если нет совпадений, то обнуляем массив 
    }
    else{
      findMinArray()
      findEqual()
      console.log('собранный массив совпадений m=', m)
      for(let i=0; i<m.length; i++){
        if(m[i]===undefined||m[i]===NaN||m[i]===''){         // проверка на несовпадение
          emptyArray()                                       // если нет совпадений, то обнуляем массив 
        }    
        else{                                                // если ненулевой массив
          sortingArray()                                     // то его сортируем по возрастанию  
          deleteItem()                                       // удаляем одинаковые ячейки
        }
      }
    }

    console.log('итоговый массив совпадений m =', m)
    return m
  }
  
module.exports = findIntersectArrays