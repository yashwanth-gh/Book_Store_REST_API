export interface ExpenseByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface MonthlyData {
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
    _id: string;
    id: string;
}

export interface DailyData {
    date: string;
    revenue: number;
    expenses: number;
    _id: string;
    id: string;
}

export interface Data {
    _id: string;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpenseByCategory;
    monthlyData: MonthlyData[];
    dailyData: DailyData[];
    __v: number;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface ApiResponseKPIData {
    success: boolean;
    data: Data[];
}
