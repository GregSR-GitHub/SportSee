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
    if(this._score){
      return this._score * 100
    }else{
      return this._todayScore * 100
    }
    
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