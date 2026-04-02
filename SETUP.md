# Quick Setup Guide

## Step-by-Step Installation

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- TypeScript
- Tailwind CSS
- Zustand (state management)
- Recharts (data visualization)
- Lucide React (icons)
- date-fns (date utilities)
- Vite (build tool)

### 2. Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.2.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 3. Open in Browser

Navigate to `http://localhost:5173` in your web browser.

## What You'll See

### Dashboard Page (Default)
- Three summary cards: Total Balance, Total Income, Total Expenses
- Balance trend chart showing 6-month history
- Spending breakdown pie chart by category

### Transactions Page
- Filter bar with search, type, category, and sort options
- Transaction table with all details
- Add Transaction button (admin only)
- Export CSV button

### Insights Page
- Key financial insights cards
- Top 5 spending categories with progress bars
- Monthly comparisons and recommendations

## Testing Role-Based Features

1. **Switch to Admin Role**
   - Click the role dropdown in the top-right header
   - Select "Admin"
   - Notice the "Add Transaction" button appears
   - Edit and delete buttons appear in the transaction table

2. **Switch to Viewer Role**
   - Select "Viewer" from the role dropdown
   - Notice all edit/delete/add buttons are hidden
   - You can still view all data and use filters

## Testing Features

### Add a Transaction (Admin)
1. Go to Transactions page
2. Click "Add Transaction"
3. Fill in the form
4. Click "Add"
5. See your new transaction at the top of the list

### Filter Transactions
1. Use the search bar to find specific transactions
2. Select a type filter (Income/Expense)
3. Select a category filter
4. Change sort order
5. Click "Clear all" to reset

### Export Data
1. Apply any filters you want
2. Click "Export CSV"
3. Check your downloads folder for the CSV file

### Toggle Dark Mode
1. Click the Dark/Light Mode button in the sidebar
2. Watch the entire UI switch themes
3. Refresh the page - your preference is saved

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically try the next available port (5174, 5175, etc.)

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
npm install
```

### Build Errors
Make sure you have Node.js v18 or higher:
```bash
node --version
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build:
```bash
npm run preview
```

## Project Features Checklist

- ✅ Dashboard with summary cards
- ✅ Balance trend visualization
- ✅ Spending breakdown chart
- ✅ Transaction list with filtering
- ✅ Search functionality
- ✅ Sort by date/amount
- ✅ Role-based UI (Viewer/Admin)
- ✅ Add/Edit/Delete transactions (Admin)
- ✅ Financial insights
- ✅ Dark mode
- ✅ Data persistence (localStorage)
- ✅ CSV export
- ✅ Responsive design
- ✅ Empty state handling

## Next Steps

1. Explore all three pages (Dashboard, Transactions, Insights)
2. Try switching between roles
3. Add some transactions as admin
4. Test the filtering and search
5. Export data to CSV
6. Toggle dark mode
7. Resize your browser to see responsive design

