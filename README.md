Live link : https://portfolio-analytics-dashboard-rouge.vercel.app/

Portfolio Analytics Dashboard 💹

Hey folks! 👋

I’m excited to share my Full-Stack Developer Intern Assignment implementation for WealthManager.online — a sleek, user-friendly dashboard that gives investors a crystal-clear view of their stock portfolio.

Think of it as your personal finance sidekick 🦸‍♂️ — tracking holdings, allocations, performance, and insights, all in one place.
🚀 Project Overview

This Portfolio Analytics Dashboard is built to help investors (especially in the Indian stock market) track and analyze their investments effortlessly.

It uses sample portfolio data (e.g., RELIANCE, INFY) to display:

    📄 Holdings – Detailed list of stocks with gains/losses.

    📊 Allocations – Breakdowns by sector and market cap.

    📈 Performance – Comparisons against benchmarks like Nifty 50 and Gold.

    ⚡ Summary – Quick metrics like total value, top performers, and risk levels.

💡 The goal: Simplify investment tracking without drowning in spreadsheets.
✨ Features
Backend – Portfolio Data Service API

    GET /api/portfolio/holdings – Lists all stock holdings with values, gains, and % changes.

    GET /api/portfolio/allocation – Asset distribution by sector and market cap.

    GET /api/portfolio/performance – Historical returns vs benchmarks.

    GET /api/portfolio/summary – Key metrics like total value & diversification score.

    Built with:

        Error handling (404 for invalid routes)

        Data validation

        Well-commented logic for calculations (gain/loss, returns, etc.)

    Scalable – Currently uses static JSON, but ready for database integration (MongoDB).

Frontend – Interactive Dashboard

    Overview Cards – Big, bold stats for total value, gain/loss (color-coded), performance %, and holdings count.

    Pie Charts – Sector & market cap allocations (with hover tooltips).

    Holdings Table – Sortable, searchable, filterable with color-coded performance.

    Performance Chart – Line chart for benchmarks + bar charts for return periods.

    Top Performers – Best/worst stocks & diversification insights.

    Responsive Design – Works perfectly on desktop and mobile.

    User Experience – Smooth interactions, hover effects, loading spinners, and friendly error messages.

🛠️ Tech Stack

Backend:

    Node.js

    Express.js

Frontend:

    React.js

    Tailwind CSS

Charts:

    Chart.js

Other Tools:

    Axios (API calls)

    React Table (data grid)

    Render.com (backend hosting)

    Vercel (frontend hosting)

📦 Installation & Setup

# Install backend dependencies

cd backend
npm install
npm start

# Install frontend dependencies

cd frontend
npm install
npm run dev

The backend runs on http://localhost:5000
The frontend runs on http://localhost:5173 (Vite default)
📷 Screenshots

(Add your screenshots here for visual impact)
🌟 Highlights

    Clean, modular codebase for easy scaling.

    Fully interactive & mobile-friendly.

    Clear data visualizations for better decision-making.

📌 Future Enhancements

    Connect to live market data APIs.

    Add authentication & user profiles.

    Enable CSV/Excel export of portfolio data.
