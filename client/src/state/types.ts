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
export interface ApiResponseProductData {
    success: boolean;
    data: ProductData[];
}

export interface ProductData{
    _id: string;
    price:number;
    expense:number;
    transactionId:string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface ApiResponseTransactionData {
    success: boolean;
    data: TransactionData[];
}

export interface TransactionData{
    _id: string;
    amount:number;
    buyer:string;
    productId:Array<string>;
    __v: number;
    createdAt: string;
    updatedAt: string;
    id: string;
}
