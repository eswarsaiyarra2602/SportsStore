const express = require("express");
const connectDB = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const adminProductRoutes = require('./routes/admin/productRoute');
const cartRoutes = require('./routes/cartRoute');
const app = express();

connectDB();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/admin/products',adminProductRoutes);
app.use('/api/cart',cartRoutes);

app.get("*", (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});