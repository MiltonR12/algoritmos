import { options } from '../config'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
);

type Props = {
  matriz: number[][],
  title: string,
  labels: number
}

function Grafico({ matriz, title, labels }: Props) {
  return (
    <div className='max-w-2xl mx-auto p-5' >
      {
        matriz.length > 0 && <Line options={{
          ...options, plugins: {
            title: {
              display: true,
              text: title,
              fullSize: true,
              color: "rgb(255,255,255)",
              font: {
                size: 20
              }
            },
          }
        }} data={{
          labels: Array.from({ length: labels }, (_, index) => index),
          datasets: [
            {
              label: 'Recorrido',
              data: matriz.map((item) => item[0]),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        }} />
      }
    </div>
  )
}

export default Grafico