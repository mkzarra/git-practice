const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello from root!!!')
})

app.get('/stuff', (req, res) => {
	res.send('have some stuff!');
})

const PORT = process.env.PORT || 4147
app.listen(PORT, () => {
	console.log('listening on port: ', PORT);
})