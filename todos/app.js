const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const { connectMongoDb } = require('./db/connect');
const { Item } = require('./db/model');

const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.urlencoded({ extended: true }))
connectMongoDb()

app.get('/', async(req, res) => {
    let db = await Item.find({})
    res.render('index', {
        items: db,
        layout: 'layouts/main'
    });
})

app.get('/add-item', (req, res) => {
    res.render('add-item', {
        layout: 'layouts/main'
    });
})

app.get('/item/:id/delete', (req, res) => {
    let { id } = req.params
    Item.findByIdAndDelete(id).then(() => {
        res.redirect('/')
    })
})

app.post('/item/:id/update', (req, res) => {
    let { id } = req.params;
    let { name, price } = req.body;
    Item.findByIdAndUpdate(id, { name, price }).then(() => {
        res.redirect('/')
    })
})

app.get('/item/:id', (req, res) => {
    let { id } = req.params
    Item.findById(id).then(result => {
        res.render('detail', {
            layout: 'layouts/main',
            items: result
        })
    })
})

app.post('/item', (req, res) => {
    let { name, price } = req.body;
    Item.create({name, price}).then(() => {
        res.redirect('/')
    })
})

app.use((req, res) => {
    res.render('404', {
        layout: 'layouts/main'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})