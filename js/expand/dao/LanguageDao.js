import React ,{Component} from 'react';
import {
  AsyncStorage,
} from 'react-native';
import keys from '../../../res/data/keys.json';

export var FlAG_LANGUAGE ={flag_language:'language_dao_language',flag_key:'language_dao_key'}

export default class LanguageDao {
    constructor (flag){
      this.flag = flag;
    }

    fetch(){

      return new Promise((resolve,reject)=>{
          AsyncStorage.getItem(this.flag,(error,result)=>{
            if(error){
                reject(error);
                return;
            }else{
                  if(!result){
                    var data = this.flag ===FlAG_LANGUAGE.flag_language?keys:null;
                    this.save(data);
                    resolve(data);
                  }else{
                    try{
                    resolve(JSON.parse(result));
                    }catch(e){
                      reject(error);
                    }
                  }
            }
          })
      })
    }

    save(data){
      var stringData=JSON.stringify(data);
      AsyncStorage.setItem(this.flag,stringData,(error)=>{
      });
    }
}
