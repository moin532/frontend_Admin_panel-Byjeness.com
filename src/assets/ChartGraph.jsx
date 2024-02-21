import React,{useEffect} from 'react'
import 'chart.js/auto';
import { useDispatch,useSelector } from 'react-redux';
import { AllProducts } from '../action/AllActon';
import { Line } from 'react-chartjs-2';


const ChartGraph = () => {
    const dispatch = useDispatch();
    const { products} = useSelector((state)=> state.products);
   
  

    const prd = products && products.length
 
    
    const data = {
      labels: [ "initial" , "middle" , "final"],
      datasets: [
        {
          label: 'Dataset 1',
          data: [0,prd,50,prd],
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
        // You can add more datasets here if you want multiple layers
      ],
    };
    
    const options = {
      plugins: {
        legend: {
          display: true, // Set to false to hide the legend
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          tension: 0.4, // Adjusts the curve of the line
        },
        point: {
          radius: 0, // Adjusts the size of the point markers
        },
      },
    };


    

  useEffect(()=>{
    dispatch(AllProducts());
  },[]);

  return (
    <Line data={data} options={options} />
  )
}

export default ChartGraph
