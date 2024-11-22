const courses = [
    { 
        id: "CS101", 
        title: "Intro to Programming", 
        category: "Computer Science", 
        difficulty: "Beginner", 
        price: 49.99, 
        students: 1500,
        ratings: [4.5, 4.7, 4.2, 4.8, 4.6]
    },
    { 
        id: "MATH202", 
        title: "Advanced Calculus", 
        category: "Mathematics", 
        difficulty: "Advanced", 
        price: 79.99, 
        students: 750,
        ratings: [4.3, 4.1, 4.6, 4.4, 4.5]
    },
    // ... more courses
];

// Tasks:
// 1. Calculate the average rating for each course
// 2. Find all beginner-level courses
// 3. Sort courses by number of students (descending)
// 4. Group courses by category
// 5. Calculate total revenue from all courses
// 6. Find the highest-rated course