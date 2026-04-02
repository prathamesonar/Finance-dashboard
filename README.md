# Finance Dashboard UI

A modern, professional finance dashboard application built with React, TypeScript, and Tailwind CSS. This SaaS-style interface helps users track their financial activity with an intuitive and clean design.

![Finance Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue)

## Features

### Core Functionality

- **Dashboard Overview**
  - Summary cards displaying Total Balance, Income, and Expenses
  - Monthly trend comparison with percentage changes
  - Interactive balance trend chart (6-month view)
  - Spending breakdown by category (pie chart)

- **Transaction Management**
  - Comprehensive transaction list with detailed information
  - Advanced filtering by type, category, and search query
  - Sorting by date or amount (ascending/descending)
  - CSV export functionality
  - Add, edit, and delete transactions (admin only)

- **Role-Based UI**
  - **Viewer Role**: Read-only access to all financial data
  - **Admin Role**: Full access including add, edit, and delete operations
  - Easy role switching via dropdown for demonstration

- **Financial Insights**
  - Highest spending category analysis
  - Monthly expense comparison
  - Average transaction amount
  - Spending pattern recommendations
  - Top 5 spending categories with visual progress bars

### Enhanced Features

- **Dark Mode**: Toggle between light and dark themes
- **Data Persistence**: Local storage integration via Zustand persist middleware
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Empty States**: Graceful handling of no-data scenarios
- **Professional UI**: Stripe/Razorpay-inspired design with smooth transitions

## Tech Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.4.1
- **State Management**: Zustand 4.5.2 with persist middleware
- **Charts**: Recharts 2.12.2
- **Icons**: Lucide React 0.344.0
- **Date Utilities**: date-fns 3.3.1
- **Build Tool**: Vite 5.2.0

## Project Structure

```
finance-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── BalanceTrendChart.tsx    # Line chart for balance trends
│   │   │   ├── SpendingBreakdown.tsx    # Pie chart for category spending
│   │   │   └── SummaryCard.tsx          # Reusable summary card component
│   │   ├── Layout/
│   │   │   ├── Header.tsx               # Top header with role selector
│   │   │   └── Sidebar.tsx              # Navigation sidebar
│   │   └── Transactions/
│   │       ├── TransactionFilters.tsx   # Filter and search controls
│   │       ├── TransactionList.tsx      # Transaction table
│   │       └── TransactionModal.tsx     # Add/Edit transaction form
│   ├── data/
│   │   └── mockData.ts                  # Sample transaction data
│   ├── hooks/
│   │   └── useFilteredTransactions.ts   # Custom hook for filtering logic
│   ├── pages/
│   │   ├── Dashboard.tsx                # Main dashboard view
│   │   ├── Insights.tsx                 # Financial insights view
│   │   └── Transactions.tsx             # Transactions view
│   ├── store/
│   │   └── useFinanceStore.ts           # Zustand store configuration
│   ├── types/
│   │   └── index.ts                     # TypeScript type definitions
│   ├── utils/
│   │   └── calculations.ts              # Financial calculation utilities
│   ├── App.tsx                          # Main app component
│   ├── main.tsx                         # App entry point
│   └── index.css                        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application should now be running

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage Guide

### Role Switching

- Use the role selector in the top-right header to switch between **Viewer** and **Admin** roles
- Viewer role: Read-only access to all data
- Admin role: Full CRUD operations on transactions

### Adding Transactions (Admin Only)

1. Click the "Add Transaction" button on the Transactions page
2. Fill in the transaction details:
   - Type (Income/Expense)
   - Date
   - Amount
   - Category
   - Description
   - Merchant (optional)
3. Click "Add" to save

### Filtering Transactions

- Use the search bar to find transactions by description, merchant, or category
- Filter by transaction type (Income/Expense/All)
- Filter by specific category
- Sort by date or amount in ascending/descending order
- Click "Clear all" to reset filters

### Exporting Data

- Click the "Export CSV" button on the Transactions page
- A CSV file with all filtered transactions will be downloaded

### Dark Mode

- Click the Dark/Light Mode button in the sidebar to toggle themes
- Preference is saved in local storage

## Design Decisions

### State Management

**Zustand** was chosen for its simplicity and performance:
- Minimal boilerplate compared to Redux
- Built-in TypeScript support
- Easy integration with persist middleware for local storage
- Excellent developer experience

### Styling Approach

**Tailwind CSS** provides:
- Rapid UI development with utility classes
- Consistent design system
- Easy dark mode implementation
- Small production bundle size with purging

### Component Architecture

- **Separation of concerns**: Layout, pages, and reusable components
- **Custom hooks**: Encapsulate complex logic (filtering, calculations)
- **Type safety**: Full TypeScript coverage for better DX and fewer bugs

### Data Visualization

**Recharts** was selected for:
- React-friendly API
- Responsive charts out of the box
- Customizable and themeable
- Good documentation and community support

### Mock Data Strategy

- Realistic transaction data spanning multiple months
- Diverse categories and merchants
- Mix of income and expenses for meaningful visualizations
- Easy to extend or replace with real API data

## Key Features Implementation

### Financial Calculations

All calculations are centralized in `utils/calculations.ts`:
- Summary totals (balance, income, expenses)
- Monthly trend analysis
- Category-wise spending aggregation
- Percentage changes and comparisons

### Filtering System

The `useFilteredTransactions` hook provides:
- Real-time search across multiple fields
- Type and category filtering
- Flexible sorting options
- Memoized results for performance

### Role-Based Access Control

Simple but effective RBAC:
- UI elements conditionally rendered based on role
- Action buttons (edit, delete, add) hidden for viewers
- Easy to extend with more granular permissions

