# Quick Reference Guide

## Installation & Running

```bash
# Install
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## File Locations

### Need to modify...
- **Mock data**: `src/data/mockData.ts`
- **Store/State**: `src/store/useFinanceStore.ts`
- **Types**: `src/types/index.ts`
- **Calculations**: `src/utils/calculations.ts`
- **Styles**: `src/index.css` or Tailwind classes
- **Colors**: `tailwind.config.js`

### Pages
- Dashboard: `src/pages/Dashboard.tsx`
- Transactions: `src/pages/Transactions.tsx`
- Insights: `src/pages/Insights.tsx`

### Components
- Layout: `src/components/Layout/`
- Dashboard: `src/components/Dashboard/`
- Transactions: `src/components/Transactions/`

## Key Features by Page

### Dashboard
- Summary cards (Balance, Income, Expenses)
- Balance trend chart (6 months)
- Spending breakdown pie chart

### Transactions
- Transaction table
- Search & filters
- Add/Edit/Delete (Admin only)
- CSV export

### Insights
- Financial insights cards
- Top 5 spending categories
- Monthly comparisons

## Role Switching

**Location**: Top-right header dropdown

**Roles**:
- **Viewer**: Read-only access
- **Admin**: Full CRUD access

## State Management

### Store Actions
```typescript
// Role
setUserRole(role: 'viewer' | 'admin')

// Theme
toggleDarkMode()

// Transactions
addTransaction(transaction)
updateTransaction(id, transaction)
deleteTransaction(id)

// Filters
setSearchQuery(query)
setFilterType(type)
setFilterCategory(category)
setSortBy(sortBy)
setSortOrder(order)
resetFilters()
```

## Adding New Transaction Categories

1. Update type in `src/types/index.ts`:
```typescript
export type TransactionCategory = 
  | 'existing'
  | 'newCategory';  // Add here
```

2. Add color in `TransactionList.tsx`:
```typescript
const colors = {
  newCategory: 'bg-color-100 text-color-800',
};
```

3. Add option in `TransactionModal.tsx` and `TransactionFilters.tsx`:
```tsx
<option value="newCategory">New Category</option>
```

## Customizing Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR',
      },
    },
  },
}
```

## Data Persistence

**Storage Key**: `finance-storage`

**Stored Data**:
- All transactions
- User role
- Dark mode preference
- Filter preferences

**Clear Storage**:
```javascript
localStorage.removeItem('finance-storage')
```

## Common Tasks

### Add a New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add menu item in `src/components/Layout/Sidebar.tsx`

### Add a New Chart
1. Import from recharts
2. Create component in `src/components/Dashboard/`
3. Add to Dashboard page

### Modify Mock Data
Edit `src/data/mockData.ts` - add/remove transactions

### Change Date Format
Edit `formatDate()` in `src/utils/calculations.ts`

### Change Currency
Edit `formatCurrency()` in `src/utils/calculations.ts`

## Troubleshooting

### Port in use
Vite auto-selects next available port

### Dark mode not working
Check `darkMode: 'class'` in `tailwind.config.js`

### Charts not showing
Verify recharts is installed: `npm list recharts`

### Types errors
Run: `npm run build` to see all TypeScript errors

### Styles not applying
1. Check Tailwind config
2. Verify PostCSS config
3. Restart dev server

## Browser DevTools

### View Store State
```javascript
// In browser console
localStorage.getItem('finance-storage')
```

### Clear All Data
```javascript
localStorage.clear()
location.reload()
```

## File Size Reference

- **Total Project**: ~50 files
- **Components**: 15+ files
- **Pages**: 3 files
- **Utils**: 2 files
- **Config**: 8 files
- **Docs**: 5 files

## Dependencies Size

- React: ~140KB
- Recharts: ~400KB
- Tailwind: ~10KB (after purge)
- Zustand: ~3KB
- Total Bundle: ~600KB (uncompressed)

## Performance Tips

1. Use `useMemo` for expensive calculations
2. Avoid inline functions in render
3. Use React DevTools Profiler
4. Lazy load heavy components
5. Optimize images

## Accessibility Checklist

- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast
- ✅ Semantic HTML
- ✅ ARIA labels (where needed)

## Git Workflow

```bash
# Initial commit
git init
git add .
git commit -m "Initial commit: Finance Dashboard"

# Feature branch
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git checkout main
git merge feature/new-feature
```

## Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## Environment Variables

Currently none required. For future API integration:

Create `.env`:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Testing Checklist

- [ ] All pages load
- [ ] Role switching works
- [ ] Add transaction (admin)
- [ ] Edit transaction (admin)
- [ ] Delete transaction (admin)
- [ ] Search works
- [ ] Filters work
- [ ] Sort works
- [ ] CSV export works
- [ ] Dark mode works
- [ ] Data persists on refresh
- [ ] Responsive on mobile
- [ ] Charts render correctly
- [ ] Empty states show

## Support

For issues or questions:
1. Check README.md
2. Check SETUP.md
3. Check FEATURES.md
4. Review code comments
5. Check browser console for errors

---

**Quick Tip**: Keep this file open while developing for fast reference!
