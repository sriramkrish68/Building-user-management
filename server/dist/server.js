"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db")); // Adjust the path as needed
dotenv_1.default.config(); // Load environment variables from .env file
const app = (0, express_1.default)();
// Connect to database
(0, db_1.default)();
app.use((0, cors_1.default)()); // Enable CORS for all origins
app.use(express_1.default.json());
// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Building Entry System API');
});
// Register event routes
app.use('/api', routes_1.default);
// Log the registered routes
app._router.stack.forEach((middleware) => {
    if (middleware.route) {
        console.log(middleware.route.path);
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
