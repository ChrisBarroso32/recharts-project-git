import React from 'react'

const App = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-10 max-w-[1400px]">
            <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800">

            </div>

            <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800">

            </div>

            <div className="h-[400px] w-full bg-slate-800/50 p-4 rounded-xl border border-slate-800 xl:col-span-1 lg:col-span-2">

            </div>
          </div>
        </main>
    )
}
export default App
