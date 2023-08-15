"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { useTheme } from "next-themes";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Dusun } from "~/types";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
);

interface Props {
  data: Dusun[];
}

export default function BarChartDusun({ data }: Props) {
  const { theme } = useTheme();
  const rgbOpacity = theme === "dark" ? 0.9 : 0.5;
  const namaDusun = data.map((dusun) => dusun.nama);

  return (
    <Bar
      datasetIdKey="id"
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: theme === "dark" ? "white" : "black" } },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
      data={{
        labels: namaDusun,
        datasets: [
          {
            label: "Laki-laki",
            data: data.map((dusun) => dusun.jumlahWarga?.lakiLaki),
            backgroundColor: `rgba(255, 99, 132, ${rgbOpacity})`,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Perempuan",
            data: data.map((dusun) => dusun.jumlahWarga?.perempuan),
            backgroundColor: `rgba(54, 162, 235, ${rgbOpacity})`,
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}
