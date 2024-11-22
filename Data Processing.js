const products = [
    {
        id: "TECH001",
        name: "Smartphone",
        category: "Electronics",
        price: 599.99,
        stock: 50,
        tags: ["mobile", "communication", "tech"],
        reviews: [
            { user: "Massimo", rating: 4.5, comment: "Great phone!" },
            { user: "Donald", rating: 4.8, comment: "The best features ever" }
        ]
    },
    // ... more products
];

// Tasks:
// 1. Create a function to add a new product
// 2. Implement a search function by category
// 3. Calculate average product rating
// 4. Find products with low stock (less than 10)
// 5. Create a discount function that applies 10% off to specific categories
// 6. Generate a report of top-rated products