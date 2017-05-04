import React ,{Component} from 'react';
import {
View,
Text,
TextInput,
AsyncStorage,
StyleSheet
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import Toast,{DURATION} from 'react-native-easy-toast';
const KEY ='text';

export default class AsyncStorageTest extends Component {
  constructor(props){
      super(props);
      this.state={
            word:''
      }
  }

  onSave(){

     if(!this.text){
      this.toast.show('保存成功内容不能为空',DURATION.LENGTH_LONG);
       return ;
     }

      AsyncStorage.setItem(KEY,this.text,(error)=>{
        if(!error){
          this.toast.show('保存成功',DURATION.LENGTH_LONG);
        }else{
          this.toast.show('保存失败',DURATION.LENGTH_LONG);
        }
      })
  }

  onFetch(){
    AsyncStorage.getItem(KEY,(error,result)=>{
      if(!error){
        if(result&&result!=''&&result!=null){
             this.toast.show(result,DURATION.LENGTH_LONG);
        }else{
             this.toast.show('没有内容',DURATION.LENGTH_LONG);
        }
      }else{
        this.toast.show('保存失败',DURATION.LENGTH_LONG);
      }
    })
  }

  onRemove(){
    AsyncStorage.removeItem(KEY,(error)=>{
      if(!error){
        this.toast.show('移除成功',DURATION.LENGTH_LONG);
      }else{
        this.toast.show('移除失败',DURATION.LENGTH_LONG);
      }
    })
  }

  render(){
      return (
          <View style={styles.container}>
              <NavigationBar
                title={'AsyncStorageTest的基础使用'}
                style={{
                  backgroundColor:'skyblue'
                }}
              />
               <TextInput style={{borderWidth:1,height:40,margin:6}}
                 onChangeText={text=>this.text=text}
               />
               <View style={{flexDirection:'row'}}>
                 <Text style={styles.tips} onPress={()=>{
                     this.onSave();
                 }}>保存</Text>
                 <Text style={styles.tips} onPress={()=>{
                     this.onRemove();
                 }}>移除</Text>
                 <Text style={styles.tips} onPress={()=>{
                     this.onFetch();
                 }}>取出</Text>
               </View>
               <Toast ref ={toast=>this.toast=toast} />
          </View>
      )
  }
}

const styles=StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'#FFFFFF'
   },
   tips:{
    fontSize:22,
    margin:10
   }


});
