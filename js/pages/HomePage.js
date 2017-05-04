/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';
import ListViewTest from './ListViewTest';
import PopularPage from './PopularPage';
import AsyncStorageTest from './AsyncStorageTest';


export default class myapp extends Component {

  /*初始化*/
  constructor(props){
     super(props);
     this.state={
        selectedTab:'home',
        text:'欢迎来的吉集号物流平台'
     }

  }


  render() {
    return (
              <View style={styles.container}>

                  <TabNavigator>
                   <TabNavigator.Item
                     selected={this.state.selectedTab === 'home'}
                     title="首页"
                     //selectedTitleStyle={{color:'red'}}
                     renderIcon={() => <Image style={styles.navimg} source={require('../../res/images/menu/menu1.png')} />}
                     renderSelectedIcon={() => <Image style={styles.navimg}  source={require('../../res/images/menu/menu1on.png')} />}
                     badgeText="1"
                     onPress={() => this.setState({ selectedTab: 'home' })}>
                     <View style={styles.page1}>
                       <Navigator
                            initialRoute={{
                               component:Boy
                            }}
                            renderScene={(route,navigator)=>{
                            let Component =route.component;
                            return <Component  navigator={navigator} {...route.params}/>
                       }}></Navigator>
                     </View>
                   </TabNavigator.Item>
                   <TabNavigator.Item
                     selected={this.state.selectedTab === 'shop'}
                     title="车商城"
                     //selectedTitleStyle={{color:'red'}}
                     renderIcon={() => <Image style={styles.navimg} source={require('../../res/images/menu/menu2.png')} />}
                     renderSelectedIcon={() => <Image style={styles.navimg}  source={require('../../res/images/menu/menu2on.png')} />}
                     onPress={() => this.setState({ selectedTab: 'shop' })}>
                     <View style={styles.page2}>
                         <ListViewTest/>
                     </View>
                   </TabNavigator.Item>
                   <TabNavigator.Item
                     selected={this.state.selectedTab === 'servise'}
                     title="服务"
                     //selectedTitleStyle={{color:'red'}}
                     renderIcon={() => <Image style={styles.navimg} source={require('../../res/images/menu/menu3.png')} />}
                     renderSelectedIcon={() => <Image style={styles.navimg}  source={require('../../res/images/menu/menu3on.png')} />}
                     onPress={() => this.setState({ selectedTab: 'servise' })}>
                     <View style={styles.page3}>
                         <Navigator
                              initialRoute={{
                                 component:PopularPage
                              }}
                              renderScene={(route,navigator)=>{
                              let Component =route.component;
                              return <Component  navigator={navigator} {...route.params}/>
                         }}></Navigator>
                     </View>
                   </TabNavigator.Item>
                   <TabNavigator.Item
                     selected={this.state.selectedTab === 'mine'}
                     title="我的"
                     renderIcon={() => <Image style={styles.navimg} source={require('../../res/images/menu/menu4.png')} />}
                     renderSelectedIcon={() => <Image style={styles.navimg}  source={require('../../res/images/menu/menu4on.png')} />}
                     onPress={() => this.setState({ selectedTab: 'mine' })}>
                     <Navigator
                          initialRoute={{
                             component:AsyncStorageTest
                          }}
                          renderScene={(route,navigator)=>{
                          let Component =route.component;
                          return <Component  navigator={navigator} {...route.params}/>
                     }}></Navigator>
                   </TabNavigator.Item>
                 </TabNavigator>


                {/*<Navigator
                     initialRoute={{
                        component:Boy
                     }}
                     renderScene={(route,navigator)=>{
                     let Component =route.component;
                     return <Component  navigator={navigator} {...route.params}/>

                }}></Navigator>*/}

              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex: 1,
    backgroundColor: 'pink',
  },
  page2:{
    flex: 1,
    backgroundColor: 'skyblue',
  },
  page3:{
    flex: 1,
    backgroundColor: 'orange',
  },
  page4:{
    flex: 1,
    backgroundColor: 'gray',
  },
  navimg:{
    width:24,
    height:24,
  },
  navimg2:{
    width:24,
    height:24,
  },
  nav:{
   width:'100%',
   height:285,
   backgroundColor: '#ffffff',
  },
  txt:{
    width:1000,
    height:28,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'#fff',
    fontSize:24,
  }

});
