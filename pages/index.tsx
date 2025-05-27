import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const barDiameters = ['34', '42']
  const barWallThickness = {
    '34': ['2.5', '2.8', '3.2'],
    '42': ['2.5', '2.8', '3.2']
  }

  const [barDiameter, setBarDiameter] = useState('42')
  const [barWall, setBarWall] = useState('3.2')

  return (
    <>
      <Head>
        <title>Конструктор Воркаут</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Конструктор Воркаут Комплекса</h1>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Диаметр турников (мм):</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={barDiameter}
              onChange={(e) => {
                setBarDiameter(e.target.value)
                setBarWall(barWallThickness[e.target.value][0])
              }}
            >
              {barDiameters.map((d) => (
                <option key={d} value={d}>{d} мм</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Толщина стенки (мм):</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={barWall}
              onChange={(e) => setBarWall(e.target.value)}
            >
              {barWallThickness[barDiameter].map((w) => (
                <option key={w} value={w}>{w} мм</option>
              ))}
            </select>
          </div>

          <div className="mt-6 p-4 border rounded bg-gray-50">
            <p><strong>Вы выбрали:</strong></p>
            <p>Диаметр: {barDiameter} мм</p>
            <p>Толщина стенки: {barWall} мм</p>
          </div>
        </div>
      </main>
    </>
  )
}
