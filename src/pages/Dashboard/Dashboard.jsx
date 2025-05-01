import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/ofertas");
        const data = await response.json();

        // Agrupa per data (día)
        const conteoPorDia = {};

        data.forEach(oferta => {
          const fecha = new Date(oferta.posted).toLocaleDateString('es-ES'); // Format dd/mm/aaaa
          conteoPorDia[fecha] = (conteoPorDia[fecha] || 0) + 1;
        });

        // Ordenar per data
        const fechasOrdenadas = Object.keys(conteoPorDia).sort(
          (a, b) => new Date(a) - new Date(b)
        );

        // Preparar dades para Chart.js
        const graficoData = {
          labels: fechasOrdenadas,
          datasets: [
            {
              label: 'Ofertas por día',
              data: fechasOrdenadas.map(fecha => conteoPorDia[fecha]),
              fill: false,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(75,192,192,1)',
              tension: 0.1,
            },
          ],
        };

        setChartData(graficoData);
      } catch (error) {
        console.error('Error obteniendo ofertas:', error);
      }
    };

    fetchOfertas();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-5 fw-bold">📊 Estadísticas de Ofertas</h1>

      <div className="mb-5">
        <h3 className="mb-3">📈 Ofertas por Día</h3>
        {chartData ? <Line data={chartData} /> : <p>Cargando gráfico...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
