/**
 * Reformate performence datas for Recharts chart
 * @param { Object } data
 * @return { Object }
 */

import { Component } from 'react'

class PerformanceDatas extends Component {
    constructor (data) {
        super(data)
        this._userId = data.userId
        this._kind = data.kind
        this._data = data.data
        this._kindFrench = {
            "cardio": "Cardio",
            "energy": "Energie",
            "endurance": "Endurance",
            "strength": "Force",
            "speed": "Vitesse",
            "intensity": "Intensité"
        }
        this._chartData = []
      }

  /**
    * Get the user id value.
    * @return {Number} The id.
    */ 
  get userIdid () {
    return this._userIdid
  }

  /**
    * Get the reformated sessions datas for this user.
    * @return {Array} The data.
    */ 
  get datas () {
    this._chartData = []
    // Remplace "kind" value by its french traduction for each object of the array.
    this._data.forEach(element => {
        const kindName = this._kind[element.kind];
        let newKind = {};
        newKind["kind"] = this._kindFrench[kindName];
        newKind["value"] = element.value;
        this._chartData.unshift(newKind);
    });
    return  this._chartData
    
  }
}
 
export default PerformanceDatas