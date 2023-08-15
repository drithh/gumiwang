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
} from "chart.js";
import { useTheme } from "next-themes";
import { Doughnut, Line } from "react-chartjs-2";
import { Dusun } from "~/types";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

interface Props {
  data: Dusun[];
}

export default function PieChartDusun({ data }: Props) {
  const sumDataDusun = data.reduce(
    (acc, curr) => {
      acc.jumlahWarga.lakiLaki += curr.jumlahWarga?.lakiLaki ?? 0;
      acc.jumlahWarga.perempuan += curr.jumlahWarga?.perempuan ?? 0;
      acc.jumlahWargaBalita.lakiLaki += curr.jumlahWargaBalita?.lakiLaki ?? 0;
      acc.jumlahWargaBalita.perempuan += curr.jumlahWargaBalita?.perempuan ?? 0;
      acc.jumlahWargaUsiaSekolah.lakiLaki +=
        curr.jumlahWargaUsiaSekolah?.lakiLaki ?? 0;
      acc.jumlahWargaUsiaSekolah.perempuan +=
        curr.jumlahWargaUsiaSekolah?.perempuan ?? 0;
      acc.jumlahWargaLansia.lakiLaki += curr.jumlahWargaLansia?.lakiLaki ?? 0;
      acc.jumlahWargaLansia.perempuan += curr.jumlahWargaLansia?.perempuan ?? 0;
      return acc;
    },
    {
      jumlahWarga: {
        lakiLaki: 0,
        perempuan: 0,
      },
      jumlahWargaBalita: {
        lakiLaki: 0,
        perempuan: 0,
      },
      jumlahWargaUsiaSekolah: {
        lakiLaki: 0,
        perempuan: 0,
      },
      jumlahWargaLansia: {
        lakiLaki: 0,
        perempuan: 0,
      },
    } as Dusun,
  );
  const reducedDataDusun = {
    ...sumDataDusun,
    jumlahWarga: {
      lakiLaki:
        sumDataDusun.jumlahWarga.lakiLaki -
        sumDataDusun.jumlahWargaBalita.lakiLaki -
        sumDataDusun.jumlahWargaUsiaSekolah.lakiLaki -
        sumDataDusun.jumlahWargaLansia.lakiLaki,
      perempuan:
        sumDataDusun.jumlahWarga.perempuan -
        sumDataDusun.jumlahWargaBalita.perempuan -
        sumDataDusun.jumlahWargaUsiaSekolah.perempuan -
        sumDataDusun.jumlahWargaLansia.perempuan,
    },
  };
  const { theme } = useTheme();
  const rgbOpacity = theme === "dark" ? 0.9 : 0.5;
  return (
    <Doughnut
      datasetIdKey="id"
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: theme === "dark" ? "white" : "black" } },
        },
      }}
      data={{
        labels: ["Dewasa", "Balita", "Usia Sekolah", "Lansia"],
        datasets: [
          {
            label: "Warga",
            data: [
              reducedDataDusun.jumlahWarga.lakiLaki +
                reducedDataDusun.jumlahWarga.perempuan,
              reducedDataDusun.jumlahWargaBalita.lakiLaki +
                reducedDataDusun.jumlahWargaBalita.perempuan,
              reducedDataDusun.jumlahWargaUsiaSekolah.lakiLaki +
                reducedDataDusun.jumlahWargaUsiaSekolah.perempuan,
              reducedDataDusun.jumlahWargaLansia.lakiLaki +
                reducedDataDusun.jumlahWargaLansia.perempuan,
            ],
            backgroundColor: [
              `rgba(255, 99, 132, ${rgbOpacity})`,
              `rgba(54, 162, 235, ${rgbOpacity})`,
              `rgba(255, 206, 86, ${rgbOpacity})`,
              `rgba(75, 192, 192, ${rgbOpacity})`,
            ],
          },
        ],
      }}
    />
  );
}
