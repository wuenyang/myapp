import React ,{Component} from 'react';
import {
View,
Text,
Image,
TouchableOpacity,
StyleSheet
} from 'react-native';
import NavigationBar from '../common/NavigationBar';

export default class Girl extends Component {
   constructor(props){
       super(props);
       this.state={
          word:''
       }
    }
     renderButton(image){
        return <TouchableOpacity
           onPress={()=> {
                this.props.navigator.pop();

           }}>
                  <Image style={{width:22,height:22,margin:8}} source={image} />
        </TouchableOpacity>

     }

     render(){
          return (
             <View style ={styles.container}>
                <NavigationBar
                  title={'Girl'}
                  style={{
                    backgroundColor:'#FF82AB'
                  }}
                  leftButton={
                    this.renderButton(require('../../res/images/nav/back.png'))
                  }
                  rightButton={
                    this.renderButton(require('../../res/images/nav/collect.png'))
                  }
                />
                <Text style={styles.tips}> 我是女孩。</Text>
                <Text style={styles.tips}>我收到了男孩送的:{this.props.word}</Text>
                <Text style={styles.tips}
                    onPress={()=>{
                      this.props.onCallBack('一盒巧克力');
                      this.props.navigator.pop();
                    }}>回赠巧克力</Text>
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
    fontSize:22
  }
});
