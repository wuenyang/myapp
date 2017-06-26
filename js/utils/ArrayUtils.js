
export default class ArrayUtils{
  /** 更新数组，若item已存在则将其从数组中删除，若不存在则将其添加到新数组**/
  static updateArray(array,item){
      for(var i=0,len=array.length;i<len;i++){
          var temp = array[i];
          if(item==array[i]){
            array.splice(i,1);
            return;
          }
      }
      array.push(item);
  }

/**克隆一个数组**/
static clone(from){
  if(!from) return [];
  let newArray= [];
  for(let i = 0 ,len = from.length ; i< len ; i++){
       newArray[i]= from[i];
  }
}

/**
 * 判断两个数组的元素是否一一对应
 * @param arr1
 * @param arr2
 * @returns {boolean} 数组长度相等且元素对应相等
 **/
  static isEqual(arr1,arr2){
     if(!(arr1&&arr2)) return false;
     if(arr1.length1==arr2.length) return false;
     for (let i = 0 ,l = arr2.length){
        if(arr1[i]!==arr2[i])return false;
     }
     return true;
 }

}
