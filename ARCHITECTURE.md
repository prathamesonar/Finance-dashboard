# Finance Dashboard - Architecture Documentation

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Finance Dashboard                        │
│                    (React + TypeScript)                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Dashboard   │  │ Transactions │  │   Insights   │     │
│  │     Page     │  │     Page     │  │     Page     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Component Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Layout     │  │  Dashboard   │  │ Transaction  │     │
│  │ Components   │  │  Components  │  │  Components  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   State Management Layer                     │
│                    (Zustand Store)                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  • Transactions State                                 │  │
│  │  • User Role State                                    │  │
│  │  • Theme State (Dark Mode)                           │  │
│  │  • Filter State                                       │  │
│  │  • Actions (CRUD, Filters, Theme)                    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Mock Data   │  │ Calculations │  │   Utilities  │     │
│  │  (20 Trans)  │  │   Functions  │  │   (Format)   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Persistence Layer                          │
│                   (Local Storage)                            │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── Sidebar
│   ├── Navigation Menu
│   └── Dark Mode Toggle
│
├── Header
│   ├── Welcome Message
│   └── Role Selector
│
└── Main Content (Route-based)
    │
    ├── Dashboard Page
    │   ├── SummaryCard (x3)
    │   │   ├── Icon
    │   │   ├── Amount
    │   │   └── Trend
    │   │
    │   ├── BalanceTrendChart
    │   │   └── LineChart (Recharts)
    │   │
    │   └── SpendingBreakdown
    │       └── PieChart (Recharts)
    │
    ├── Transactions Page
    │   ├── Page Header
    │   │   ├── Title & Count
    │   │   ├── Export Button
    │   │   └── Add Button (Admin)
    │   │
    │   ├── TransactionFilters
    │   │   ├── Search Input
    │   │   ├── Type Filter
    │   │   ├── Category Filter
    │   │   ├── Sort By
    │   │   └── Sort Order
    │   │
    │   ├── TransactionList
    │   │   └── Table
    │   │       ├── Headers
    │   │       └── Rows (with actions)
    │   │
    │   └── TransactionModal
    │       └── Form
    │           ├── Type Select
    │           ├── Date Input
    │           ├── Amount Input
    │           ├── Category Select
    │           ├── Description Input
    │           └── Merchant Input
    │
    └── Insights Page
        ├── Insights Cards (x4)
        │   ├── Icon
        │   ├── Title
        │   └── Description
        │
        └── Top Categories
            └── Progress Bars (x5)
```

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Action                           │
│  (Click, Type, Select, etc.)                                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Component Event Handler                   │
│  (onClick, onChange, onSubmit)                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Store Action                            │
│  (addTransaction, setFilter, toggleDarkMode)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     State Update                             │
│  (Immutable state change)                                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  Persist to LocalStorage                     │
│  (Automatic via Zustand middleware)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Component Re-render                        │
│  (React detects state change)                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      UI Update                               │
│  (New data displayed to user)                               │
└─────────────────────────────────────────────────────────────┘
```

## State Management Flow

```
┌──────────────────────────────────────────────────────────┐
│                   Zustand Store                           │
│                                                           │
│  State:                                                   │
│  ├── transactions: Transaction[]                         │
│  ├── userRole: 'viewer' | 'admin'                       │
│  ├── darkMode: boolean                                   │
│  ├── searchQuery: string                                 │
│  ├── filterType: 'all' | 'income' | 'expense'          │
│  ├── filterCategory: TransactionCategory | 'all'        │
│  ├── sortBy: 'date' | 'amount'                          │
│  └── sortOrder: 'asc' | 'desc'                          │
│                                                           │
│  Actions:                                                 │
│  ├── setUserRole()                                       │
│  ├── toggleDarkMode()                                    │
│  ├── addTransaction()                                    │
│  ├── updateTransaction()                                 │
│  ├── deleteTransaction()                                 │
│  ├── setSearchQuery()                                    │
│  ├── setFilterType()                                     │
│  ├── setFilterCategory()                                 │
│  ├── setSortBy()                                         │
│  ├── setSortOrder()                                      │
│  └── resetFilters()                                      │
└──────────────────────────────────────────────────────────┘
```

## Filtering Pipeline

```
Raw Transactions
      │
      ▼
┌─────────────────┐
│ Search Filter   │ ──► Filter by description, merchant, category
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Type Filter    │ ──► Filter by income/expense
└─────────────────┘
      │
      ▼
┌─────────────────┐
│ Category Filter │ ──► Filter by specific category
└─────────────────┘
      │
      ▼
┌─────────────────┐
│   Sort Logic    │ ──► Sort by date or amount
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Sort Order     │ ──► Apply ascending/descending
└─────────────────┘
      │
      ▼
Filtered & Sorted Transactions
```

## Calculation Flow

```
Transactions Array
      │
      ├──────────────────────────────────────┐
      │                                       │
      ▼                                       ▼
┌──────────────────┐              ┌──────────────────┐
│ Financial        │              │ Category         │
│ Summary          │              │ Spending         │
│                  │              │                  │
│ • Total Balance  │              │ • Group by       │
│ • Total Income   │              │   category       │
│ • Total Expenses │              │ • Sum amounts    │
│ • Monthly Change │              │ • Sort by value  │
└──────────────────┘              └──────────────────┘
      │                                       │
      ▼                                       ▼
┌──────────────────┐              ┌──────────────────┐
│ Summary Cards    │              │ Pie Chart        │
└──────────────────┘              └──────────────────┘

      │
      ├──────────────────────────────────────┐
      │                                       │
      ▼                                       ▼
┌──────────────────┐              ┌──────────────────┐
│ Monthly Trend    │              │ Insights         │
│                  │              │                  │
│ • Group by month │              │ • Highest        │
│ • Calculate      │              │   category       │
│   income/expense │              │ • Monthly        │
│ • Compute balance│              │   comparison     │
└──────────────────┘              │ • Averages       │
      │                           └──────────────────┘
      ▼                                       │
┌──────────────────┐                        ▼
│ Line Chart       │              ┌──────────────────┐
└──────────────────┘              │ Insight Cards    │
                                  └──────────────────┘
```

## Role-Based Access Control

```
┌──────────────────────────────────────────────────────────┐
│                    User Role State                        │
│                  (stored in Zustand)                      │
└──────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        ┌──────────────┐          ┌──────────────┐
        │    Viewer    │          │    Admin     │
        └──────────────┘          └──────────────┘
                │                           │
                ▼                           ▼
    ┌───────────────────────┐   ┌───────────────────────┐
    │ Permissions:          │   │ Permissions:          │
    │ • View Dashboard      │   │ • View Dashboard      │
    │ • View Transactions   │   │ • View Transactions   │
    │ • View Insights       │   │ • View Insights       │
    │ • Use Filters         │   │ • Use Filters         │
    │ • Export CSV          │   │ • Export CSV          │
    │                       │   │ • Add Transaction     │
    │ Restrictions:         │   │ • Edit Transaction    │
    │ • No Add button       │   │ • Delete Transaction  │
    │ • No Edit button      │   │                       │
    │ • No Delete button    │   │ No Restrictions       │
    └───────────────────────┘   └───────────────────────┘
```

## Technology Stack Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  • React Components                                          │
│  • Tailwind CSS                                              │
│  • Lucide Icons                                              │
│  • Recharts                                                  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                      Logic Layer                             │
│  • TypeScript                                                │
│  • Custom Hooks                                              │
│  • Utility Functions                                         │
│  • date-fns                                                  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                   State Management Layer                     │
│  • Zustand                                                   │
│  • Persist Middleware                                        │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                      Build Layer                             │
│  • Vite                                                      │
│  • TypeScript Compiler                                       │
│  • PostCSS                                                   │
│  • ESLint                                                    │
└─────────────────────────────────────────────────────────────┘
```

## Build Process

```
Source Code (src/)
      │
      ▼
┌─────────────────┐
│  TypeScript     │ ──► Type checking & compilation
│  Compiler       │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Vite           │ ──► Module bundling & optimization
│  Bundler        │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  PostCSS        │ ──► CSS processing & Tailwind
│  Processor      │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Minification   │ ──► Code compression
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Tree Shaking   │ ──► Remove unused code
└─────────────────┘
      │
      ▼
Production Build (dist/)
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                   Optimization Layers                        │
│                                                              │
│  1. Component Level                                          │
│     • useMemo for expensive calculations                    │
│     • useCallback for event handlers                        │
│     • Avoid inline functions in render                      │
│                                                              │
│  2. State Level                                              │
│     • Zustand (minimal re-renders)                          │
│     • Selective subscriptions                               │
│     • Immutable updates                                     │
│                                                              │
│  3. Build Level                                              │
│     • Code splitting                                         │
│     • Tree shaking                                           │
│     • Minification                                           │
│     • Asset optimization                                     │
│                                                              │
│  4. Runtime Level                                            │
│     • Lazy loading                                           │
│     • Debounced search                                       │
│     • Efficient filtering                                    │
│     • Memoized calculations                                  │
└─────────────────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Development                               │
│  • npm run dev                                               │
│  • Hot Module Replacement                                    │
│  • Source maps                                               │
│  • Fast refresh                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Build                                   │
│  • npm run build                                             │
│  • TypeScript compilation                                    │
│  • Asset optimization                                        │
│  • Output to dist/                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Deployment                                │
│  Options:                                                    │
│  • Vercel (recommended)                                      │
│  • Netlify                                                   │
│  • GitHub Pages                                              │
│  • Any static host                                           │
└─────────────────────────────────────────────────────────────┘
```

## Future Architecture Considerations

```
Current: Frontend Only
┌──────────────┐
│   React App  │
│  (Mock Data) │
└──────────────┘

Future: Full Stack
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   React App  │────▶│  REST API    │────▶│   Database   │
│              │     │  (Node.js)   │     │  (PostgreSQL)│
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │     Auth     │
                     │  (JWT/OAuth) │
                     └──────────────┘
```

---

This architecture is designed for:
- **Scalability**: Easy to add new features
- **Maintainability**: Clear separation of concerns
- **Performance**: Optimized rendering and calculations
- **Developer Experience**: Type-safe, well-organized code
- **User Experience**: Fast, responsive, intuitive interface
