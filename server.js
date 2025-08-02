import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

try {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
} catch (err) {
    console.error("Error starting server:", err);
}