/**
 * Reformate user datas
 * @param { Object } data
 * @return { Object }
 */

import { Component } from 'react'

class UserDatas extends Component {
  constructor (data) {
      super(data)
      this._id = data.id
      this._firstName = data.userInfos.firstName
      this._lastName = data.userInfos.lastName
      this._age = data.userInfos.age
      this._todayScore = data.todayScore
      this._score = data.score
      this._calorieCount = data.keyData.calorieCount
      this._proteinCount = data.keyData.proteinCount
      this._carbohydrateCount = data.keyData.carbohydrateCount
      this._lipidCount = data.keyData.lipidCount
  }

  /**
    * Get the user id value.
    * @return {Number} The id.
    */   
  get id () {
    return this._id
  }

  /**
    * Get the user first name.
    * @return {String} last name.
    */    
  get firstName () {
    return this._firstName
  }

  /**
    * Get the user last name.
    * @return {String} last name.
    */  
  get lastName () {
    return this._lastName
  }

  /**
    * Get the user age.
    * @return {String} age with "ans" word.
    */  
  get age () {
    return this._age + ` ans`
  }

  /**
  * Get the user today score.
  * @return {Number} score multiply by 100.
  */  
  get todayScore () {
    if(this._score){
      return this._score * 100
    }else{
      return this._todayScore * 100
    }
    
  }

  /**
    * Get the user calorie count.
    * @return {String} calorie data with the unit of measurement "kCal".
    */  
  get calorieCount () {
    return this._calorieCount  + `kCal`
  }

  /**
    * Get the user protein count.
    * @return {String} protein data with the unit of measurement "g".
    */  
  get proteinCount () {
    return this._proteinCount  + `g`
  }

  /**
    * Get the user carbohydrate count.
    * @return {String} carb data with the unit of measurement "g".
    */  
  get carbohydrateCount () {
    return this._carbohydrateCount  + `g`
  }
  
  /**
    * Get the user lipid count.
    * @return {String} lipid data with the unit of measurement "g".
    */    
  get lipidCount () {
    return this._lipidCount  + `g`
  }
}
 
export default UserDatas