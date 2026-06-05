import http from 'http';
import handler from '../api/contact.js';

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    req.body = body ? JSON.parse(body) : {};

    // Mock Vercel response helper methods
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
    res.json = (data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return res;
    };

    try {
      await handler(req, res);
    } catch (err) {
      console.error('Local dev server error:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({ success: false, message: 'Internal server error' }));
    }
  });
});

const port = 5000;
server.listen(port, () => {
  console.log(`\n🚀 Local API dev server running at: http://localhost:${port}`);
  console.log(`Testing SMTP with Gmail: sadaiyappancse@gmail.com\n`);
});
