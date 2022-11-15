import './activity.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Activity({datas}) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="activity-tooltip">
              <p>{`${payload[0].value} Kg`}</p>
              <p>{`${payload[1].value} kCal`}</p>
            </div>
          );
        }
      
        return null;
      };
    
    return (
        <div className='activity'>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={datas} barSize={ 7 }>
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis dataKey="number"  tickLine={false}  tickMargin="15"/>
                <YAxis orientation='right' axisLine={false} tickLine={false}/>
                <Tooltip  content={<CustomTooltip />}  wrapperStyle={{ outline: 'none' }}/>
                <Legend 
                payload={[{ value: 'Poids (Kg)', type: 'circle',  color: '#000' }, { value: 'Calories brulées (kCal)', type: 'circle',  color: '#f00' }]} 
                formatter={(value, entry, index) => <span style={{color : "#74798C"}}>{value}</span>} 
                iconSize={8} verticalAlign="top" align='right' height={70}/>
                <Bar dataKey="kilogram" fill="#000"  radius={ 3.5 }/>
                <Bar dataKey="calories" fill="#F00"  radius={ 3.5 }/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Activity;