/**自定义标签排序**/
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

import NavigationBar from '../../common/NavigationBar';
import ArrayUtils from '../../utils/ArrayUtils';
import ViewUtils from '../../utils/ViewUtils';
import LanguageDao ,{FlAG_LANGUAGE}from '../../expand/dao/LanguageDao';
import SortableListView from 'react-native-sortable-listview';

export default class SortKeyPage extends Component {
     constructor(props){
      super(props);
      this.dataArray=[];
      this.sortResultArray=[];
      this.originalCheckedArray=[];
      this.state={
        checkedArray:[]
      }
     }

     componentDidMount(){
       this.languageDao = new LanguageDao(FlAG_LANGUAGE.flag_key);
       this.loadData();
     }

     onBack(){
        this.props.navigator.pop();
     }
     onSave(){
       if(ArrayUtils.isEqual(this.originalCheckedArray,this.state.checkedArray)){
          this.props.navigator.pop();
          return ;
       }
       this.getSortResult();
       this.languageDao.save(this.sortResultArray);
     }

     getSortResult(){
         this.sortResultArray=ArrayUtils.clone(checkedArray);
         for(let i = 0 ,j = originalCheckedArray.length;i < j;i++){
          let item = this.originalCheckedArray[i];
          let index =this.dataArray.indexOf(item);
          this.sortResultArray.splice(index,1,this.state.checkedArray[i]);
         }

     }

     loadData(){
        this.languageDao.fetch()
        .then((result)=>{
          this.getCheckItems(result);
        })
        .catch((error)=>{

        })
     }

     getCheckItems(result){

          this.dataArray= result;
          let checkedArray=[];
          for(let i = 0,len =result.length; i<len; i++){ let data = result[i];
            if(data.checked)checkedArray.push(data);
          }
          this.setState({
            checkedArray:checkedArray
          })

          this.originalCheckedArray=ArrayUtils.clone(checkedArray);

     }

     render(){

       let rightButton =<TouchableOpacity
         onPress={()=>this.onSave()}
         >
              <View style={{margin:10}}>
                <Text style={styles.title}>save</Text>
              </View>
         </TouchableOpacity>;

       let navigatorBar =<NavigationBar
      　   style={{backgroundColor:'#2196F3'}}
           title={'自定义标签'}
           leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
           rightButton={rightButton}
         />;

          return (
            <View style={styles.container}>
              {navigatorBar}
                <SortableListView
                style={{flex: 1}}
                data={this.state.checkedArray}
                order={Object.keys(this.state.checkedArray)}
                onRowMoved={e => {
                  this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0]);
                  this.forceUpdate();
                }}
                onMoveStart={ () => console.log('on move start') }
                onMoveEnd={ () => console.log('on move end') }
                renderRow={row => <SortCell data={row} />}
              />
            </View>
          )
     }


}

class SortCell extends Component{
   render(){
     return <TouchableHighlight
               underlayColor={'#eee'}
               delayLongPress={100}
               style={styles.item}
               {...this.props.sortHandlers}
       >
       <View style={styles.row}>
         <Image source={require('./img/ic_sort.png')} resizeMode='stretch' style={styles.image}  />
         <Text>{this.props.data.name}</Text>
       </View>
     </TouchableHighlight>
   }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontSize: 22
  },title:{
    fontSize:20,
    color:'#fff'
  },item:{
    padding:15,
    backgroundColor:'#F8F8F8',
    borderBottomWidth:1,
    borderColor:'#eee',
    height:50,
  },row:{
    flexDirection:'row',
    alignItems:'center',
  },image:{
    tintColor:'#2196F3',
    height:16,
    width:16,
    marginRight:10
  }


});
