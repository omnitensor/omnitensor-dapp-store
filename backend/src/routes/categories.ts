import { Request, Response } from 'express';

// Categories
const categories = [
    { id: 1, name: "Communication" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Productivity" },
];

// Handler for fetching all categories
export function getAllCategories(req: Request, res: Response) {
    res.status(200).json(categories);
}

// Handler for fetching a category by ID
export function getCategoryById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const category = categories.find(c => c.id === id);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ error: "Category not found" });
    }
}
