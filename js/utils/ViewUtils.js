import React from 'react';
import {
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native'

export default class ViewUtils{
    static getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,tintColor:'white'}}
                source={require('../../res/images/nav/back.png')}/>
        </TouchableOpacity>
    }

}
