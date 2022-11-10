import './performances.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function Performances({datas}) {

    return (
      <div className="performances">
        <ResponsiveContainer>
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={datas}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind"  fill="#FFFFFF"  tick={{ fill: '#FFFFFF', fontSize: '12px' }} tickLine={{ fill: 'red' }}/>
                <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Performances;
