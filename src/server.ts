import app from './app';
const port = 5000;

app.listen(port, 'localhost', () => {
  console.log(`Started server on port http://localhost:${port}`);
});
