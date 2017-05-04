import React ,{Component} from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';
import Girl from './Girl.js';
import NavigationBar from '../common/NavigationBar';

export default class Boy extends Component {
  constructor(props){
      super(props);
      this.state={
            word:''
      }
  }

  render(){
      return (
          <View style={styles.container}>
              <NavigationBar
                title={'Boy'}
                style={{
                  backgroundColor:'red'
                }}
              />
               <Text style ={styles.text} >我是男孩！</Text>
               <Text style ={styles.text}
                  onPress={()=>{
                    this.props.navigator.push({
                      component:Girl,
                      params:{
                        word:'一枝玫瑰花',
                        onCallBack:(word)=>{
                            this.setState({
                              word:word
                            })
                        }
                      }
                    })
                  }}
               >送女孩一枝玫瑰花</Text>
               <Text style={styles.text}>{this.state.word}</Text>
          </View>
      )
  }
}

const styles=StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'#FFFFFF'
   },
   text:{
    fontSize:22
   }


});
