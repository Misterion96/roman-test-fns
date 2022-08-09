/*
* должна выводить массив всех чисел, которые есть в каждом массиве на входе
* если совпадении нет, вернуть пустой массив
* */
function findIntersectArrays(...args) {

  let m = [];             // выходной массив
  let minLength = 0;      // мин длина входного массива
  let minArray = 0;       // номер ячейки мин. масcива, в отсортированном по возрастанию args

  function findMinArray(){                                // сортируем args по возрастанию длины вх. массивов 
    args.sort(function(a, b) {
      return a.length - b.length;
    });
    minLength = args[0].length;
    minArray = 0;
    return args, minArray, minLength
  }
  
  function findEqual(){ 
    let index=0;                                             // счетчик совпадающих чисел во входных массивах
    for (let i=0; i<minLength; i++){                         // берем число из мелкого массива 
      let counter=0;                                         // счетчик совпадений в каждом массиве
      for (let j=minArray+1; j<args.length; j++){            // по каждому входящему массиву args
        for (let k=0; k<args[j].length; k++){
          if(args[minArray][i]==args[j][k]){
            // console.log('совпадение', args[j][k])
            counter=counter+1;
            // console.log(counter, 'counter-after')
            break  
          }
        }
      }
      if (counter==args.length-1){
        m[index]=args[minArray][i];
        console.log(m[index], 'm[index] - совпадающее число')
        index=index+1;
      }
    }
    // console.log('собранный массив совпадений m=', m)
    return m  
  }
  
  function emptyArray(){                                   // формируем пустой массив, если нет совпадений
    m=[];
    return m
  }
  
  function sortingArray(){                                 // сортировка массива совпадений m по возрастанию
    m.sort(function(a,b){
      return a-b
    })
    return m
  }
  
  function deleteItem(){
    for(let i=0; i<m.length; i++){
      for(let j=i+1; j<=m.length-1; j++){
        if(m[i]==m[j]){
          m.splice(j, 1);
          console.log('удаляю дубликат');
        }
      }
    }
    return m
  }

  if (args==[] || args.length<2){                         // если входной массив пустой или он один
    emptyArray()                                          // если нет совпадений, то обнуляем массив 
  }
  else{
    findMinArray()                                        // ищем самый короткий массив
    findEqual()                                           // ищем совпадения
    sortingArray()                                        // то его сортируем по возрастанию  
    deleteItem()                                          // удаляем одинаковые ячейки
  }

  console.log('итоговый массив совпадений m =', m)
  return m
}
  
module.exports = findIntersectArrays