import {
    BarChart as RechartsBarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const salesData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 2000, profit: 9800 },
    { name: 'Apr', revenue: 2780, profit: 3908 },
    { name: 'May', revenue: 1890, profit: 4800 },
    { name: 'Jun', revenue: 2390, profit: 3800 },
];

const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
                data={salesData}
                margin={{ right: 30 }}
            >
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" />
                <Bar dataKey="profit" fill="#818cf8" />
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md border border-slate-700">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Revenue:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Profit:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};

export default BarChartComponent;