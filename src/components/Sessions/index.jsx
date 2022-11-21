/**
 * Display au chart based of the session datas
 * @param { Array } datas
 * @return { String }
 */

import './sessions.css';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

function Sessions({datas}) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="session-tooltip">
              <p className="label">{`${payload[0].value} min`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
      <div className="sessions">
        <h2>Durée moyenne des sessions</h2>
        <div className='weekend'></div>
        <ResponsiveContainer height="75%">
        <LineChart 
          data={datas}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
        <defs>
            <linearGradient id="colorDay" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="15%" stopColor="#fff"  stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#fff"  stopOpacity={1} />
            </linearGradient>
        </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin="15"  stroke="#FFFFFF" opacity={0.5} padding={{ left: 20, right: 20 }}/>
          <Tooltip  content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }}  cursor={false}/>
          <Line type="monotone" dataKey="value"  stroke="url(#colorDay)"  strokeWidth={2}  dot={false} activeDot={{ r: 3 }} />
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

Sessions.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            value: PropTypes.number
          })
    )
  }
  
export default Sessions;