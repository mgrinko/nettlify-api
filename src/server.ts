import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello from the API endpoint!');
});

// Convert the Express app to a serverless function
const handler = serverless(app);

export { handler };
