import React ,{Component} from 'react';
import {
Text,
View,
TextInput,
StyleSheet,
Image,
ListView,
RefreshControl,
} from 'react-native';

import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository.js';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import RepositoryCell from '../common/RepositoryCell'

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
                      <ScrollableTabView
                       tabBarBackgroundColor="#6495ED"
                       tabBarActiveTextColor="#FFFFFF"
                       tabBarInactiveTextColor="mintcream"
                       tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
                      renderTabBar={()=><ScrollableTabBar/>}>
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
         isLoading:false,
         dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
       }

  }
  /*通过*加载控件时候区调研*/
  componentDidMount(){
    this.onLoad();
  }
  onLoad(){
     this.setState({
       isLoading:true
     })

     let url = this.getUrl(this.props.tabLabel);
     this.dataRepository.fetchNetRepository(url)
     .then((result)=>{
           console.info(result);
           this.setState({
              dataSource:this.state.dataSource.cloneWithRows(result.items),
              isLoading:false
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

  renderRow(data){
    return (
        <RepositoryCell
        key={data.id}
        projectModel ={data} />
    )
  }

  render(){
       return(
      <View style={styles.container} >
          <ListView
           dataSource={this.state.dataSource}
           renderRow ={(data)=>this.renderRow(data)}
           refreshControl={
             <RefreshControl
                 refreshing={this.state.isLoading}
                 onRefresh={()=>this.onLoad()}
                 colors={['#2196F3']}
                 tintColor={'#2196F3'}
                 title={'Loading...'}
                 titleColor={'#2196F3'}
             />}
          />
       </View>
     )

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
