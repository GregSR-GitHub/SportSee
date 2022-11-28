/**
 * Display a chart based of the performences datas
 * @param { Array.<{kind: String, value: Number}> } datas
 * @return { HTMLElement }
 */

import './performances.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

function Performances({datas}) {

    return (
      <div className="performances">
        <ResponsiveContainer>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={datas}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind"  fill="#FFFFFF"  
                  tick={{ fill: '#FFFFFF', fontSize: 'calc(0.8vw)' }} 
                  tickLine={{ fill: 'red' }}
                />
                <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
      </div>
    );
}

Performances.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  )
}

export default Performances;
