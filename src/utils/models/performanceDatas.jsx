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

    
  get userIdid () {
    return this._userIdid
  }

  get datas () {
    this._chartData = []
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