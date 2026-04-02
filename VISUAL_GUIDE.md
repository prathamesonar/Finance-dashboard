# Finance Dashboard - Visual Guide

## Application Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Finance Dashboard                            │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────────────────────────────────────────────┐
│              │  Header                                               │
│              │  ┌─────────────────────────────────────────────────┐ │
│  Sidebar     │  │ Welcome back!                    [Role: Admin ▼]│ │
│              │  │ Here's what's happening...                       │ │
│  ┌────────┐  │  └─────────────────────────────────────────────────┘ │
│  │Finance │  │                                                       │
│  │  Hub   │  │  Main Content Area                                   │
│  └────────┘  │  ┌─────────────────────────────────────────────────┐ │
│              │  │                                                   │ │
│ ┌──────────┐ │  │  [Content changes based on selected page]        │ │
│ │Dashboard │ │  │                                                   │ │
│ └──────────┘ │  │  • Dashboard: Charts and summary cards           │ │
│              │  │  • Transactions: Transaction list and filters    │ │
│ ┌──────────┐ │  │  • Insights: Financial analysis                  │ │
│ │Transact. │ │  │                                                   │ │
│ └──────────┘ │  └─────────────────────────────────────────────────┘ │
│              │                                                       │
│ ┌──────────┐ │                                                       │
│ │Insights  │ │                                                       │
│ └──────────┘ │                                                       │
│              │                                                       │
│ ┌──────────┐ │                                                       │
│ │Dark Mode │ │                                                       │
│ └──────────┘ │                                                       │
└──────────────┴──────────────────────────────────────────────────────┘
```

## Dashboard Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Dashboard Page                              │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  💰 Total Balance │  │  📈 Total Income │  │  📉 Total Expenses│
│                   │  │                   │  │                   │
│    $12,500.00     │  │    $15,000.00    │  │    $2,500.00     │
│    +12.5% ↑       │  │                   │  │                   │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌─────────────────────────────────────┐  ┌──────────────────────────┐
│  Balance Trend (6 months)           │  │  Spending by Category    │
│                                     │  │                          │
│  $                                  │  │      ╭─────╮            │
│  │     ╱‾‾‾╲                       │  │     ╱       ╲           │
│  │    ╱     ╲    ╱‾‾╲             │  │    │  Food   │          │
│  │   ╱       ╲  ╱    ╲            │  │    │  30%    │          │
│  │  ╱         ╲╱      ╲           │  │     ╲       ╱           │
│  │ ╱                   ╲          │  │      ╰─────╯            │
│  └─────────────────────────        │  │   Shopping Transport    │
│    Nov Dec Jan Feb Mar Apr         │  │     25%      20%        │
│                                     │  │                          │
│  ─── Income  ─── Expenses          │  │   Other categories...   │
│  ─── Balance                        │  │                          │
└─────────────────────────────────────┘  └──────────────────────────┘
```

## Transactions Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Transactions                          [Export CSV] [+ Add Trans.]  │
│  20 transactions found                                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Filters                                              [Clear all]    │
│  ┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ ┌────────┐ │
│  │ 🔍 Search... │ │All Types▼│ │All Cats▼ │ │Sort By▼│ │Order ▼│ │
│  └──────────────┘ └──────────┘ └──────────┘ └────────┘ └────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ Date       │ Description      │ Category │ Merchant    │ Amount     │
├────────────┼──────────────────┼──────────┼─────────────┼────────────┤
│ Apr 1,2026 │ ↑ Monthly Salary │ [Salary] │ Tech Corp   │ +$5,000.00 │
│ Apr 1,2026 │ ↑ Freelance Work │ [Free]   │ Client XYZ  │ +$1,200.00 │
│ Mar 30     │ ↓ Shopping       │ [Shop]   │ Fashion St. │ -$450.00   │
│ Mar 28     │ ↓ Groceries      │ [Food]   │ Supermarket │ -$85.00    │
│ ...        │ ...              │ ...      │ ...         │ ...        │
└─────────────────────────────────────────────────────────────────────┘
                                                    [Edit] [Delete] →
```

## Insights Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Financial Insights                              │
│  Key observations from your financial data                           │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────┐  ┌──────────────────────────────┐
│  📊 Highest Spending Category │  │  📅 Monthly Comparison       │
│                               │  │                               │
│  You spent the most on        │  │  Your expenses increased by  │
│  Shopping with a total of     │  │  15.2% compared to last      │
│  $880.00                      │  │  month                        │
└──────────────────────────────┘  └──────────────────────────────┘

┌──────────────────────────────┐  ┌──────────────────────────────┐
│  💵 Average Transaction       │  │  ⚠️  Spending Pattern        │
│                               │  │                               │
│  Your average transaction     │  │  Consider reviewing your     │
│  amount is $625.00            │  │  expenses this month to      │
│                               │  │  stay on budget              │
└──────────────────────────────┘  └──────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Top 5 Spending Categories                                           │
│                                                                       │
│  Shopping    ████████████████████████ $880.00 (35%)                 │
│  Food        ████████████████ $550.00 (22%)                         │
│  Transport   ██████████ $350.00 (14%)                               │
│  Utilities   ████████ $280.00 (11%)                                 │
│  Entertainment ██████ $200.00 (8%)                                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Add Transaction Modal

```
┌─────────────────────────────────────┐
│  Add Transaction              [X]   │
├─────────────────────────────────────┤
│                                     │
│  Type                               │
│  ┌───────────────────────────────┐ │
│  │ Expense                     ▼ │ │
│  └───────────────────────────────┘ │
│                                     │
│  Date                               │
│  ┌───────────────────────────────┐ │
│  │ 2026-04-02                    │ │
│  └───────────────────────────────┘ │
│                                     │
│  Amount                             │
│  ┌───────────────────────────────┐ │
│  │ 50.00                         │ │
│  └───────────────────────────────┘ │
│                                     │
│  Category                           │
│  ┌───────────────────────────────┐ │
│  │ Food                        ▼ │ │
│  └───────────────────────────────┘ │
│                                     │
│  Description                        │
│  ┌───────────────────────────────┐ │
│  │ Coffee                        │ │
│  └───────────────────────────────┘ │
│                                     │
│  Merchant (Optional)                │
│  ┌───────────────────────────────┐ │
│  │ Cafe                          │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌──────────┐      ┌──────────┐   │
│  │ Cancel   │      │   Add    │   │
│  └──────────┘      └──────────┘   │
└─────────────────────────────────────┘
```

## Color Scheme

### Light Mode
```
Background:     White (#FFFFFF)
Text:           Dark Gray (#111827)
Primary:        Sky Blue (#0EA5E9)
Success:        Green (#10B981)
Danger:         Red (#EF4444)
Border:         Light Gray (#E5E7EB)
```

### Dark Mode
```
Background:     Dark Gray (#1F2937)
Text:           White (#FFFFFF)
Primary:        Sky Blue (#0EA5E9)
Success:        Green (#10B981)
Danger:         Red (#EF4444)
Border:         Gray (#374151)
```

## Category Colors

```
Salary:         🟢 Green
Freelance:      🔵 Blue
Investment:     🟣 Purple
Food:           🟠 Orange
Transport:      🟡 Yellow
Shopping:       🩷 Pink
Utilities:      🔷 Indigo
Entertainment:  🔴 Red
Healthcare:     🩵 Teal
Education:      🔷 Cyan
Other:          ⚪ Gray
```

## Icon Reference

```
Dashboard:      📊 LayoutDashboard
Transactions:   🧾 Receipt
Insights:       📈 TrendingUp
Settings:       ⚙️  Settings
Dark Mode:      🌙 Moon
Light Mode:     ☀️  Sun
User:           👤 User
Admin:          🛡️  Shield
Income:         ↗️  ArrowUpRight
Expense:        ↘️  ArrowDownRight
Search:         🔍 Search
Filter:         🔽 Filter
Edit:           ✏️  Pencil
Delete:         🗑️  Trash2
Add:            ➕ Plus
Export:         📥 Download
Close:          ❌ X
Wallet:         💰 Wallet
```

## Responsive Breakpoints

```
Mobile:    375px  - 767px
┌──────────┐
│  Stack   │
│  Vertical│
│  Layout  │
└──────────┘

Tablet:    768px  - 1023px
┌────────────────┐
│  2-Column Grid │
│  Sidebar Stays │
└────────────────┘

Desktop:   1024px - 1919px
┌──────────────────────┐
│  Full Layout         │
│  Sidebar + Content   │
└──────────────────────┘

Large:     1920px+
┌────────────────────────────┐
│  Centered Max-Width        │
│  Optimal Reading Width     │
└────────────────────────────┘
```

## User Flow Diagram

```
Start
  │
  ▼
┌─────────────┐
│  Dashboard  │ ◄─── Default landing page
└─────────────┘
  │
  ├──► View Summary Cards
  ├──► View Charts
  └──► Navigate to other pages
       │
       ├──► Transactions
       │     │
       │     ├──► View List
       │     ├──► Search/Filter
       │     ├──► Add (Admin)
       │     ├──► Edit (Admin)
       │     ├──► Delete (Admin)
       │     └──► Export CSV
       │
       └──► Insights
             │
             ├──► View Insights
             └──► Analyze Spending
```

## State Flow Diagram

```
User Action
    │
    ▼
Component Event
    │
    ▼
Store Action
    │
    ▼
State Update
    │
    ├──► LocalStorage (persist)
    │
    └──► Component Re-render
         │
         ▼
    UI Update
```

## Feature Availability Matrix

```
┌──────────────────────┬─────────┬─────────┐
│      Feature         │ Viewer  │  Admin  │
├──────────────────────┼─────────┼─────────┤
│ View Dashboard       │    ✓    │    ✓    │
│ View Transactions    │    ✓    │    ✓    │
│ View Insights        │    ✓    │    ✓    │
│ Search Transactions  │    ✓    │    ✓    │
│ Filter Transactions  │    ✓    │    ✓    │
│ Sort Transactions    │    ✓    │    ✓    │
│ Export CSV           │    ✓    │    ✓    │
│ Toggle Dark Mode     │    ✓    │    ✓    │
│ Add Transaction      │    ✗    │    ✓    │
│ Edit Transaction     │    ✗    │    ✓    │
│ Delete Transaction   │    ✗    │    ✓    │
└──────────────────────┴─────────┴─────────┘
```

## Quick Visual Reference

### Summary Card Structure
```
┌─────────────────────────────┐
│ Title              [Icon]   │
│                             │
│ $12,500.00                  │
│                             │
│ +12.5% vs last month        │
└─────────────────────────────┘
```

### Transaction Row Structure
```
┌──────────┬────────────┬──────────┬──────────┬──────────┬─────────┐
│   Date   │ Description│ Category │ Merchant │  Amount  │ Actions │
└──────────┴────────────┴──────────┴──────────┴──────────┴─────────┘
```

### Filter Bar Structure
```
┌─────────┬─────────┬─────────┬─────────┬─────────┬──────────┐
│ Search  │  Type   │Category │ Sort By │  Order  │Clear All │
└─────────┴─────────┴─────────┴─────────┴─────────┴──────────┘
```

---

This visual guide helps you understand the layout and structure of the Finance Dashboard at a glance!
