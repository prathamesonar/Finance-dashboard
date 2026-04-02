# Get Started in 3 Minutes! 🚀

## Quick Start

### 1. Install (30 seconds)
```bash
npm install
```

### 2. Run (10 seconds)
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:5173`

**That's it!** You're now running the Finance Dashboard.

---

## First Steps Tour (2 minutes)

### Step 1: Explore the Dashboard (30 seconds)
You'll see:
- 3 summary cards showing your financial overview
- A line chart with 6 months of balance trends
- A pie chart showing spending by category

### Step 2: Check Transactions (30 seconds)
1. Click "Transactions" in the sidebar
2. See the list of all transactions
3. Try the search box - type "grocery"
4. Try the filters - select "Food" category
5. Click "Clear all" to reset

### Step 3: Try Admin Features (30 seconds)
1. Look at the top-right header
2. The role dropdown should show "Admin"
3. Click "Add Transaction" button
4. Fill in the form:
   - Type: Expense
   - Date: Today
   - Amount: 50
   - Category: Food
   - Description: Coffee
5. Click "Add"
6. See your new transaction at the top!

### Step 4: View Insights (15 seconds)
1. Click "Insights" in the sidebar
2. See financial insights and recommendations
3. Check the top 5 spending categories

### Step 5: Try Dark Mode (15 seconds)
1. Click "Dark Mode" button in the sidebar
2. Watch the entire UI switch themes
3. Click again to go back to light mode

---

## Key Features to Try

### 🔍 Search & Filter
- Search for any transaction
- Filter by Income or Expense
- Filter by specific category
- Sort by date or amount

### 👤 Role Switching
- Switch to "Viewer" role (top-right)
- Notice Add/Edit/Delete buttons disappear
- Switch back to "Admin" to edit

### 📊 Export Data
- Go to Transactions page
- Click "Export CSV" button
- Check your downloads folder

### ✏️ Edit Transaction (Admin only)
- Click the pencil icon on any transaction
- Modify the details
- Click "Update"

### 🗑️ Delete Transaction (Admin only)
- Click the trash icon on any transaction
- Confirm deletion
- Transaction is removed

---

## Understanding the Interface

### Sidebar (Left)
- **FinanceHub** - Logo and title
- **Dashboard** - Main overview
- **Transactions** - Transaction list
- **Insights** - Financial analysis
- **Dark Mode** - Theme toggle

### Header (Top)
- **Welcome message** - Greeting
- **Role selector** - Switch between Viewer/Admin
- **Role badge** - Current role indicator

### Main Content (Center)
- Changes based on selected page
- Fully responsive
- Scrollable content

---

## Sample Workflows

### Workflow 1: Add Monthly Salary
1. Go to Transactions
2. Click "Add Transaction"
3. Select Type: Income
4. Enter Amount: 5000
5. Select Category: Salary
6. Add Description: "Monthly Salary"
7. Click "Add"

### Workflow 2: Track Grocery Shopping
1. Add Transaction
2. Type: Expense
3. Amount: 85
4. Category: Food
5. Description: "Weekly Groceries"
6. Merchant: "Supermarket"
7. Click "Add"

### Workflow 3: Analyze Spending
1. Go to Dashboard
2. Check Total Expenses card
3. Look at Spending Breakdown chart
4. Identify highest category
5. Go to Insights for recommendations

### Workflow 4: Review Last Month
1. Go to Transactions
2. Use date sort (descending)
3. Scroll through transactions
4. Check Dashboard for monthly trend
5. Compare with previous month

---

## Tips & Tricks

### 💡 Pro Tips
- Use search to quickly find transactions
- Combine filters for precise results
- Export filtered data to CSV
- Dark mode is easier on the eyes
- Data persists even after refresh

### ⌨️ Keyboard Shortcuts
- Tab: Navigate between fields
- Enter: Submit forms
- Escape: Close modals

### 📱 Mobile Usage
- Fully responsive on mobile
- Touch-friendly buttons
- Swipe to scroll tables
- All features available

---

## Common Questions

### Q: Where is my data stored?
**A:** In your browser's local storage. It persists across sessions.

### Q: Can I clear all data?
**A:** Yes, open browser console and run: `localStorage.clear()` then refresh.

### Q: How do I add more transactions?
**A:** Click "Add Transaction" button (Admin role required).

### Q: Can I export my data?
**A:** Yes, click "Export CSV" on the Transactions page.

### Q: How do I switch roles?
**A:** Use the dropdown in the top-right header.

### Q: What's the difference between roles?
**A:** 
- **Viewer**: Can only view data
- **Admin**: Can add, edit, and delete

---

## Next Steps

### Explore More
- [ ] Add 5 more transactions
- [ ] Try all filter combinations
- [ ] Export data to CSV
- [ ] Switch between light/dark mode
- [ ] Check insights after adding data
- [ ] Test on mobile device

### Learn More
- Read `README.md` for full documentation
- Check `FEATURES.md` for feature details
- Review `ARCHITECTURE.md` for technical details

### Customize
- Modify mock data in `src/data/mockData.ts`
- Change colors in `tailwind.config.js`
- Add new categories in `src/types/index.ts`

---

## Need Help?

### Documentation
- **README.md** - Complete overview
- **SETUP.md** - Detailed setup guide
- **FEATURES.md** - Feature documentation
- **QUICK_REFERENCE.md** - Quick reference

### Troubleshooting
- Check browser console for errors
- Verify Node.js version (v18+)
- Try `npm cache clean --force`
- Restart development server

---

## Enjoy! 🎉

You're all set! Start exploring the Finance Dashboard and track your finances with style.

**Happy tracking!** 💰📊

---

**Quick Commands Reference:**
```bash
npm install          # Install dependencies
npm run dev          # Start development
npm run build        # Build for production
npm run preview      # Preview production build
```
