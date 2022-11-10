import './score.css';
import { PieChart, Pie, Cell, Label } from "recharts";
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

console.log(score);
  return (
    <div className="score">
        <h2>Score</h2>
          <PieChart width={210} height={210}>
            <Pie
                data={data01}
                dataKey="value"
                cx={105}
                cy={105}
                outerRadius={85}
                fill="#FFFFFF"
                isAnimationActive={false}
            />
            <Pie
                stroke="none"
                legendType="circle"
                data={data02}
                dataKey="value"
                cx={105}
                cy={105}
                startAngle={90}
                endAngle={-270}
                cornerRadius={100}
                innerRadius={85}
                outerRadius={100}
                fill="#FF0000"
                isAnimationActive={false}
            >
                <Cell fill="#FBFBFB" />
                <Cell fill="#FF0000" />
                <Label width={60} position="center" className='label-score' fontSize='26px'>{score + '%'}</Label>
                <Label width={80} position="center"  className='label-score-text' fontSize='16px' fill={'#74798C'} >de votre score</Label>
            </Pie>
    </PieChart>
    </div>
  );
}

Score.propTypes = {
    score: PropTypes.number,
}
 

export default Score;