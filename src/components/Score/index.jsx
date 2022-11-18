import './score.css';
import { PieChart, Pie, Cell, Label,  ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'


function Score({score}) {
    const fillgray = 100 - score;
    const data01 = [
  { name: "Center", value: 100 },
];
const data02 = [
  { name: "A1", value: fillgray},
  { name: "D2", value:  score }
];

  return (
    <div className="score">
        <h2>Score</h2>
        <ResponsiveContainer>
          <PieChart width="100%">
            <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#FFFFFF"
                isAnimationActive={false}
            />
            <Pie
                stroke="none"
                legendType="circle"
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                cornerRadius={100}
                innerRadius={70}
                outerRadius={80}
                fill="#FF0000"
                isAnimationActive={false}
            >
                <Cell fill="#FBFBFB" />
                <Cell fill="#FF0000" />
                <Label width={60} position="center" className='label-score' fontSize='26px'>{score + '%'}</Label>
                <Label width={80} position="center"  className='label-score-text' fontSize='16px' fill={'#74798C'} >de votre score</Label>
            </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
    score: PropTypes.number,
}
 

export default Score;