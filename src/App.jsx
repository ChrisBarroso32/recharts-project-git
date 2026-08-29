import React from 'react'
import AreaChartComponent from "./components/AreaChart.jsx";
import BarChartComponent from "./components/BarChart.jsx";
import LineChartComponent from "./components/LineChart.jsx";

const App = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-10 max-w-[1400px]">
                <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                    <h2 className="text-center text-xl font-semibold mb-4">Area Chart</h2>
                    <AreaChartComponent />
                </div>

                <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                    <h2 className="text-center text-xl font-semibold mb-4">Bar Chart</h2>
                    <BarChartComponent />
                </div>

                <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800 xl:col-span-1 lg:col-span-2">
                    <h2 className="text-center text-xl font-semibold mb-4">Line Chart</h2>
                    <LineChartComponent />
                </div>
            </div>
        </main>
    )
}
export default App
