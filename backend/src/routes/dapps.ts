import { Request, Response } from 'express';

// Sample
const dapps = [
    { id: 1, name: "Decentralized Chat", category: "Communication", description: "Secure decentralized messaging platform." },
    { id: 2, name: "DeFi Wallet", category: "Finance", description: "Manage your assets securely in a decentralized wallet." },
];

// Handler for fetching all dApps
export function getAllDapps(req: Request, res: Response) {
    res.status(200).json(dapps);
}

// Handler for fetching a dApp by ID
export function getDappById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const dapp = dapps.find(d => d.id === id);
    if (dapp) {
        res.status(200).json(dapp);
    } else {
        res.status(404).json({ error: "DApp not found" });
    }
}
