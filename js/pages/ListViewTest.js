import React ,{Component} from 'react';
import {
View,
Text,
Image,
TouchableOpacity,
ListView,
RefreshControl,
StyleSheet
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import Toast,{DURATION} from 'react-native-easy-toast';
var data ={
    "result":[
      {"tel":"18970131987","name":"伍恩阳"},
      {"tel":"13767767277","name":"杨枫"},
      {"tel":"15970964566","name":"张龙英"},
      {"tel":"13727076669","name":"梁涛"},
      {"tel":"18188990019","name":"黄巍"},
      {"tel":"18970131987","name":"伍恩阳1"},
      {"tel":"18970131987","name":"伍恩阳2"},
      {"tel":"18970131987","name":"伍恩阳3"},
      {"tel":"18970131987","name":"伍恩阳4"},
      {"tel":"18970131987","name":"伍恩阳5"},
      {"tel":"18970131987","name":"伍恩阳6"},
      {"tel":"18970131987","name":"伍恩阳7"},
      {"tel":"18970131987","name":"伍恩阳8"},
      {"tel":"18970131987","name":"伍恩阳9"},
      {"tel":"18970131987","name":"伍恩阳10"}
    ]

};

export default class ListViewTest extends Component {

   constructor(props){
     super(props);
     const ds = new ListView.DataSource({
          rowHasChanged:(r1,r2)=>{r1!==r2}
     });
     this.state ={
       dataSource:ds.cloneWithRows(data.result),
       isLoading:true
     }

     this.onLoad();
    }

    renderRow(item){
      return <TouchableOpacity
           onPress={()=>{
               this.toast.show('姓名:'+item.name+'   手机:'+item.tel)
           }}>
          <View>

                  <Text style={styles.tips}>姓名:{item.name}</Text>
                  <Text style={styles.tips}>手机:{item.tel}</Text>
      </View>
        </TouchableOpacity>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
      return <View  key={rowID} style={styles.line}></View>
    }

    renderFooter(){
      return <Image style={styles.adimg} source={require('../../res/images/ad/ad-b.jpg')} />
    }

    onLoad(pgn){
       return fetch('http://test.5656580.cn/wj-api/car/getPageList',{
         method:'POST',
         header:{
           'Accept':'application/json',
           'Content-Type':'application/json'
         },
         body:JSON.stringify({
            'accountid':'',
             'token':'',
             pgn:pgn,
             pgs:12
         })
       })
       .then((response)=>response.json())
       .then((ret)=>{
         return ret.result;
       })
       .catch((error)=>{
         this.toast.show(JSON.stringify(error));
       })
    }

     render(){
          return (
             <View style ={styles.container}>
                <NavigationBar
                  title={'ListViewTest'}
                  style={{
                    backgroundColor:'#FF82AB'
                  }}
                />
                <ListView
                   dataSource={this.state.dataSource}
                   renderRow={(item)=>this.renderRow(item)}
                   renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                   renderFooter={()=>this.renderFooter()}
                   refreshControl={
                     <RefreshControl
                         refreshing={this.state.isLoading}
                         onRefresh={()=>this.onLoad()}
                     />}
                />
                <Toast ref={toast=>{this.toast=toast}} />
             </View>
          )
     }
   }
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  tips:{
    marginTop:3,
    marginLeft:10,
    fontSize:18
  },
  line:{
    height:1,
    margin:10,
    backgroundColor:'gray',
    opacity:0.2
  },
  adimg:{
    margin:2,
    width:'99%',
    height:150
  }



});
