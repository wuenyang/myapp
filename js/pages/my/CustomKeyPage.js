import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import NavigationBar from '../../common/NavigationBar';
import ViewUtils from '../../utils/ViewUtils';
import LanguageDao ,{FlAG_LANGUAGE}from '../../expand/dao/LanguageDao';
import CheckBox from 'react-native-check-box';
import ArrayUtils from '../../utils/ArrayUtils';


export default class CustomKeyPage extends Component{
  constructor(props){
    super(props);
    this.languageDao = new LanguageDao(FlAG_LANGUAGE.flag_key);
    this.changeValues=[];
    this.state={
      dataArray:[]
    }
  }

 componentDidMount(){
    this.loadData();
 }

  loadData(){
    this.languageDao.fetch()
        .then((result)=>{
             this.setState({
               dataArray:result
             })
        })
        .catch(error=>{
          console.log(error);
        })

  }

  onBack(){
     this.props.navigator.pop();
  }

  onSave(){
    if(this.changeValues.length===0){
      this.props.navigator.pop();
      return;
    }
    this.languageDao.save(this.state.dataArray);
    this.props.navigator.pop();
  }

  renderView(){

    if(!this.state.dataArray||this.state.dataArray.length===0) return ;
    var len = this.state.dataArray.length;
    var views=[];
    for(var i= 0 ,l =len-2; i<l ;i+=2){
      views.push(
        <View key={i}>
             <View style ={styles.item}>
                 {this.renderCheckBox(this.state.dataArray[i])}
                 {this.renderCheckBox(this.state.dataArray[i+1])}
             </View>
             <View style={styles.line} />
        </View>
      )
    }
    views.push(
      <View key={len-1} >
          <View style={styles.item}>
              {len%2===0?this.renderCheckBox(this.state.dataArray[len-2]):null}
              {this.renderCheckBox(this.state.dataArray[len-1])}
          </View>
      </View>
    )

     return views;
  }

  onClick(data){
    data.checked=!data.checked;
    ArrayUtils.updateArray(this.changeValues,data);
  }

  renderCheckBox(data){
      let leftText =data.name;
      let isChecked = this.isRemoveKey?false:data.checked;
      return (
         <CheckBox
            style={{flex:1,padding:10}}
            onClick={()=>this.onClick(data)}
            isChecked={isChecked}
            leftText ={leftText}
            checkedImage={<Image source={require('../../pages/my/img/ic_check_box.png')}/>}
            unCheckedImage={<Image source={require('../../pages/my/img/ic_check_box_outline_blank.png')}/>}
         />
         );
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
       <View style={styles.container} >
             {navigatorBar}
             <ScrollView style={styles.view} >
               <View>{this.renderView()}</View>
             </ScrollView>
       </View>);
  }



}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f3f2f2'
  },items:{
    flexDirection:'row',
  },title:{
    fontSize:20,
    color:'#fff'
  },line:{
    height:1,
    backgroundColor:'gray',
  },item:{
    flexDirection:'row',
    alignItems:'center',
  }
})
