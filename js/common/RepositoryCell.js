import React ,{Component} from 'React';
import{
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

export default class ReositoryCell extends Component {


  constructor(props){
     super(props);
     this.dataArray=[];

  }

  render(){
    return (
      <TouchableOpacity
         style={styles.container}
      >
      <View style={styles.cell_container}>
              <Text style={styles.title}>{this.props.projectModel.full_name}</Text>
              <Text style={styles.description}>{this.props.projectModel.description}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text>Author:</Text>
                      <Image
                      style={{height:22,width:22}}
                      source={{uri:this.props.projectModel.owner.avatar_url}}
                       />
                     </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text>Stars:</Text>
                      <Text>{this.props.projectModel.stargazers_count}</Text>
                    </View>
                    <Image style={{width:22,height:22}} source={require('../../res/images/nav/collect.png')} />
                </View>

           </View>
         </TouchableOpacity>
         )
  }

}

const  styles= StyleSheet.create({
       container:{
         flex:1,
       },
       cell_container:{
         backgroundColor:'white',
         padding:10,
         marginLeft:5,
         marginRight:5,
         marginVertical:3,
         borderColor:'#dddddd',
         borderWidth:0.5,
         borderRadius:2,
         shadowColor:'gray',
         shadowOffset:{width:0.5,height:0.5},
         shadowOpacity:0.4,
         shadowRadius:1,
         elevation:2

       },
       title:{
          fontSize:16,
          marginBottom:2,
          color:'#212121'
       },
       description:{
         fontSize:14,
         marginBottom:2,
         color:'#757575',
       }

})
