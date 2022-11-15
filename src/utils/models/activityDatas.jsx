import { Component } from 'react'

class ActivityDatas extends Component {
    constructor (data) {
        super(data)
        this._userId = data.userId
        this._sessions = data.sessions
        this._chartData = []
      }

    
  get userIdid () {
    return this._userIdid
  }

  get datas () {
    let currentNumber = 1;
    this._sessions.forEach(element => {
        element["number"] = currentNumber;
        currentNumber++
    });
    return  this._sessions
    
  }
}
 
export default ActivityDatas