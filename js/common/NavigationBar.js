import React ,{Component,PropTypes} from 'react' ;
import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  StyleSheet,

} from 'react-native';

/*自定义常量*/
const NAV_BAR_HEIGHT_ANDROID=50;
const NAV_BAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;

/*初始化StatusBar的形状*/
const StatusBarShape={
   backgroundColor:PropTypes.string,
   barStyle:PropTypes.oneOf('default','light-content','dark-content'),
   hidden:PropTypes.bool
}

/*自定义NavigationBar 组建*/
export default class NavigationBar extends Component{
  /*自定义 NavigationBar的属性数据约束*/
   static propTypes ={
       style:View.propTypes.style,
       title:PropTypes.string,
       titleView:PropTypes.element,
       hide:PropTypes.bool,
       leftButton:PropTypes.element,
       rightButton:PropTypes.element,
       statusBar:PropTypes.shape(StatusBarShape)
   }
   /*自定义 NavigationBar的属性数据默认值*/
   static defaultProps={
       statusBar:{
         barStyle:'light-content',
         hidden:false
       }
   }
   /*构造函数*/
   constructor(props){
       super(props);
       this.state={
         title:'',
         hide:false
       }

   }
   /*渲染界面*/
   render(){

        let status = <View style={styles.statusBar}>
             <StatusBar {...this.props.statusBar}/>
        </View>

        let titleView = this.props.titleView?this.props.titleView:
        <Text style={styles.title}>{this.props.title}</Text>


        let content = <View style={styles.navBar}>
            {this.props.leftButton}
               <View style={styles.titleViewContainer}>
                  {titleView}
               </View>
            {this.props.rightButton}
        </View>

        return (
          <View style={[styles.container,this.props.style]}>
                {status}
                {content}
          </View>
        )
   }

}
/*NavigationBar样式*/
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF'
    },
    navBar:{
      justifyContent:'space-between',
      alignItems:'center',
      height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
      flexDirection:'row',

    },
    titleViewContainer:{
       justifyContent:'center',
       alignItems:'center',
       position:'absolute',
       left:40,
       right:40,
       top:0,
       bottom:0
    },
    title:{
       fontSize:20,
       color:'#FFFFFF'
    },
    statusBar:{
      height:Platform.OS==='ios'?STATUS_BAR_HEIGHT:0,
    }


});
