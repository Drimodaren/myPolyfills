module.exports = function () {
  //проверим сначала существует ли вообще этот метод (т.е. не равен undefiend)
  if (!Array.prototype.myMap)
  Array.prototype.myMap = function () {

  }

}








// Метод Map возвращает новый массив (newArray) т.е. не мутирует исходный массив. В его callback функцию передается три аргумента value, index, array
const  arr = [1,2,3,4];
const newArr = arr.map ((value,index,arr) => {
  //теперь мы можем модифицировать наш массив, например вернув только единицу return 1 или модифицировать value и прибивать к каждому значению единицу
  console.log(1)///1,1,1,1,
  console.log(value + 1);//2,3,4,5
  ;
  // т.е происходит какое то вычесление и возврат значения

})
