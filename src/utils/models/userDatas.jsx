import { Component } from 'react'

class UserDatas extends Component {
    constructor (data) {
        super(data)
        this._id = data.user_main_datas.id
        this._firstName = data.user_main_datas.userInfos.firstName
        this._lastName = data.user_main_datas.userInfos.lastName
        this._age = data.user_main_datas.userInfos.age
        this._todayScore = data.user_main_datas.todayScore
        this._calorieCount = data.user_main_datas.keyData.calorieCount
        this._proteinCount = data.user_main_datas.keyData.proteinCount
        this._carbohydrateCount = data.user_main_datas.keyData.carbohydrateCount
        this._lipidCount = data.user_main_datas.keyData.lipidCount
      }

    
  get id () {
    return this._id
  }

  get firstName () {
    return this._firstName
  }

  get lastName () {
    return this._lastName
  }

  get age () {
    return this._age + ` ans`
  }

  get todayScore () {
    return this._todayScore
  }

  get calorieCount () {
    return this._calorieCount  + `kCal`
  }

  get proteinCount () {
    return this._proteinCount  + `g`
  }

  get carbohydrateCount () {
    return this._carbohydrateCount  + `g`
  }
  
  get lipidCount () {
    return this._lipidCount  + `g`
  }
}
 
export default UserDatas