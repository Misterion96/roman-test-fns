/*
* должна выводить массив всех чисел, которые есть в каждом массиве на входе
* если совпадении нет, вернуть пустой массив
* */
function findIntersectArrays(...args) {
  // console.log(args, 'args'); 
   
  let m = [];             // выходной массив
  let minLength = 0;      // мин длина входного массива
  let minArray = 0;       // номер ячейки мин. масcива, в отсортированном по возрастанию args

  function findMinArray(){                                // сортируем по возрастанию длины вх. массивов 
    args.sort(function(a, b) {
      return a.length - b.length;
    });
    // console.log(args, 'sorted');
    minLength = args[0].length;
    // console.log(minLength, 'minLength')
    minArray = 0;
    return args, minArray, minLength
  }
  
  function findEqual(){ 
    let index=0;                                  
    for (let i=0; i<minLength; i++){                         //  берем число из мелкого массива 
      let counter=0;
      for (let j=minArray+1; j<args.length; j++){            //  по каждому входящему массиву args
        for (let k=0; k<args[j].length; k++){
          if(args[minArray][i]==args[j][k]){
            console.log('совпадение', args[j][k])
            counter=counter+1;
            break  
          }
        }
      }
      if (counter==args.length-1){
        m[index]=args[minArray][i];
        index=index+1;
      }
    }
    console.log('собранный массив совпадений m=', m)
    return m  
  }
  // for(let k=0; k<args[j].length; k++){
  //   if(args[minArray][i]==args[j][k]){                 //  если есть совпадение, то пишем это число в массив m
  //     m[i]=args[j][k];                                 //  если есть совпадение, то пишем в массив совпадений
  //     console.log('пишем новое совпадение', m[i])
  //   } 
  // }
  
  function emptyArray(){                                   // формируем пустой массив, если нет совпадений
    m=[];
    // console.log('нет совпадений, обнуляем m:', m)
    return m
  }
  
  function sortingArray(){                        // сортировка массива по возрастанию
    m.sort(function(a,b){
      return a-b
    })
    // console.log(m,'m - сортированное по возрастанию')
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

  if (args==[] || args.length<2){                                          // если входной массив пустой
    emptyArray()                                          // если нет совпадений, то обнуляем массив 
  }
  else{
    findMinArray()
    findEqual()
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