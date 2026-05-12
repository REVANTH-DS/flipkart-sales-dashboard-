# Flipkart Sales Dashboard

A comprehensive real-time sales analytics dashboard for Flipkart marketplace data with interactive visualizations, performance metrics, and business intelligence.

## Features

✨ **Key Features**
- Real-time sales metrics and KPIs
- Interactive charts and graphs (Revenue, Orders, Products)
- Sales trends analysis
- Product performance tracking
- Customer demographics
- Geographic sales distribution
- Inventory management
- Revenue forecasting
- Responsive dashboard design

## Tech Stack

**Frontend:**
- React 18.x
- Recharts for data visualization
- Tailwind CSS for styling
- Axios for API calls
- Redux for state management

**Backend:**
- Node.js with Express
- MongoDB for data storage
- JWT authentication
- RESTful API architecture

**Tools:**
- Docker for containerization
- Postman for API testing

## Project Structure

```
flipkart-sales-dashboard-/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── Dockerfile
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Installation

### Prerequisites
- Node.js 16+
- MongoDB 4.4+
- Docker (optional)

### Quick Start

1. Clone the repository
```bash
git clone https://github.com/REVANTH-DS/flipkart-sales-dashboard-.git
cd flipkart-sales-dashboard-
```

2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

4. Docker Compose (Recommended)
```bash
docker-compose up -d
```

Access the dashboard at `http://localhost:3000`

## API Endpoints

### Sales Analytics
- `GET /api/sales/overview` - Get sales overview
- `GET /api/sales/trends` - Get sales trends (30 days)
- `GET /api/sales/by-product` - Get sales by product

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `GET /api/orders` - List all orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order

### Customers
- `GET /api/customers` - List all customers
- `GET /api/customers/:id` - Get customer details
- `GET /api/customers/analytics/demographics` - Get customer demographics
- `POST /api/customers` - Create customer

## Dashboard Sections

1. **Dashboard** - Overview with KPIs, sales trends, and top products
2. **Products** - Product management and performance tracking
3. **Orders** - Order management with status tracking
4. **Customers** - Customer insights and demographics

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://admin:password123@mongodb:27017/flipkart-sales
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Docker Deployment

The project includes a `docker-compose.yml` that sets up:
- MongoDB (port 27017)
- Backend API (port 5000)
- Frontend Dashboard (port 3000)

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Author

REVANTH-DS

## Support

For issues and questions, please create an issue in the repository.