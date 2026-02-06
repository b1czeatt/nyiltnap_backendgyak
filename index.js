import express from 'express'
import db from './database.js'

const PORT = 3321
const app = express();
app.use(express.json());


app.get('/telepules',(req,res)=>{
    const telepules = req.query.nev
    const diakok = db.prepare(`SELECT * FROM diakok WHERE telepules=?`).all(telepules);
    res.status(200).json(diakok)
})

app.get('/tanora',(req,res)=>{
    const tanora = req.query.ora
    const ora = db.prepare(`SELECT datum,terem,orasorszam FROM orak WHERE targy=? ORDER BY datum ASC`).all(tanora)
    res.status(200).json(ora)
})

app.listen(PORT,()=>{
    console.log(`A szerver fut ezen a porton: ${PORT}`)
})