const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello from root')
})

const PORT = process.env.PORT || 4147
app.listen(PORT, () => {
	console.log('listening on port: ', PORT);
})