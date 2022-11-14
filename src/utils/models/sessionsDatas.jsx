import { Component } from 'react'

class SessionsDatas extends Component {
    constructor (data) {
        super(data)
        this._userId = data.userId
        this._sessions = data.sessions
        this._days = {
            1: "L",
            2: "M",
            3: "M",
            4: "J",
            5: "V",
            6: "S",
            7: "D"
        }
        this._chartData = []
      }

    
  get userIdid () {
    return this._userIdid
  }

  get datas () {
    this._chartData = []
    this._sessions.forEach(element => {
        let newSession = {};
        newSession["day"] = this._days[element.day];
        newSession["value"] = element.sessionLength;
        this._chartData.push(newSession);
    });
    return  this._chartData
    
  }
}
 
export default SessionsDatas