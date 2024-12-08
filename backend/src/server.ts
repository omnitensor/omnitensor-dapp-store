import express from 'express';
import { json } from 'body-parser';
import { connectDB } from './db';
import { DApp } from './models/DApp';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Sample route for fetching all DApps
app.get('/dapps', async (req, res) => {
    const dapps: DApp[] = [
        {
            id: '1',
            name: 'Sample DApp',
            description: 'A sample decentralized application',
            category: 'Utility',
            version: '1.0.0',
            developer: 'OmniTensor',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    res.json(dapps);
});

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
