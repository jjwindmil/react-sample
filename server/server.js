const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const adminLoginInfo = {
    name: 'admin',
    pass: 'admin',
};
app.use(bodyParser.json());
//미들웨어 함수
app.use('/api', (req, res) => res.json({ usename: 'testPbm' }));

app.listen(port, () => {
    console.log(`Express server running ${port}`);
});

app.get('/login', (req, res) => {
    console.log('Login Request....', req.query);
    if (adminLoginInfo.name !== req.name || adminLoginInfo.pass !== req.pass)
        return res.json({ result: 'failed' });
    return res.json({ result: 'success' });
});

app.post('/login', (req, res) => {
    console.log('Login Request....', req.body);
    if (
        adminLoginInfo.name !== req.body.name ||
        adminLoginInfo.pass !== req.body.pass
    )
        return res.json({ result: 'failed' });
    return res.json({ result: 'success' });
});
