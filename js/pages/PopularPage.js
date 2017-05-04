import React ,{Component} from 'react';
import {
Text,
View,
TextInput,
StyleSheet
} from 'react-native';

import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository.js';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component{


       render(){
             return(
               <View style={styles.container}>
                      <NavigationBar
                       title={'Popular'}
                       style={{backgroundColor:'#6495ED'}}
                      />
                      <ScrollableTabView renderTabBar={()=><ScrollableTabBar/>}>
                           <PopularTab tabLabel="Java">Java</PopularTab>
                           <PopularTab tabLabel="ios">Ios</PopularTab>
                           <PopularTab tabLabel="Android">Android</PopularTab>
                           <PopularTab tabLabel="JavaScript">JavaScript</PopularTab>
                      </ScrollableTabView>
               </View>
             )
       }

}
/*封装Tab模块*/
class PopularTab extends Component{
  constructor(props){
       super(props);
       this.dataRepository = new DataRepository();
       this.state={
         result:'sdsdas'
       }
  }
  /*通过*加载控件时候区调研*/
  componentDidMount(){
    this.onLoad();
  }

  onLoad(){
     let url = this.getUrl(this.props.tabLabel);
     this.dataRepository.fetchNetRepository(url)
     .then((result)=>{
           console.info(result);
           this.setState({
              result:result
           })
     })
     .catch(error=>{
        this.setState({
             result:JSON.stringify(error)
        })
     })
  }

  getUrl(key){
    return URL+key+QUERY_STR;
  }

  render(){
       return <View style={styles.container} >
             <Text style={{height:600,fontSize:18,backgroundColor:'gray'}}>{this.state.reusult}</Text>
       </View>

  }


}

const styles =StyleSheet.create({
     container:{
       flex:1,
      backgroundColor:'#FFFFFF'
     },
     tips:{
       fontSize:29
     },
     txtinp:{
        margin:8,
        height:40,
        borderWidth:1,
        borderColor:'gray'
     },
     panel:{
       height:'68%',
       margin:8,
       borderWidth:1,
       borderColor:'gray'
     }
})
