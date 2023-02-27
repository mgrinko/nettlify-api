"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
const todos = [
    { "id": 1, "title": "HTML", "conpleted": true },
    { "id": 2, "title": "CSS", "conpleted": true },
    { "id": 3, "title": "JS", "conpleted": true },
    { "id": 4, "title": "React", "conpleted": false }
];
app.get('/', (req, res) => {
    // const text = fs.readFileSync('./data.json', 'utf-8');
    // const todos = JSON.parse(text);
    res.send(todos);
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
