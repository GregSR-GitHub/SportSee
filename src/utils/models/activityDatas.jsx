/**
 * Reformate activity datas for Recharts chart
 * @param { Object } data
 * @return { Object }
 */

import { Component } from 'react'

class ActivityDatas extends Component {
    constructor (data) {
        super(data)
        this._userId = data.userId
        this._sessions = data.sessions
        this._chartData = []
    }

    /**
      * Get the user id value.
      * @return {Number} The id.
      */  
    get userId () {
        return this._userId
    }

    /**
      * Get the reformated sessions datas for this user.
      * @return {Array} The data.
      */ 
    get datas () {
        let currentNumber = 1;
        // Add "number" propriety for each object of the array.
        this._sessions.forEach(element => {
            element["number"] = currentNumber;
            currentNumber++
        });
        return  this._sessions
    
  }
}
 
export default ActivityDatas