const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel  = require('./models/users')
const {rinserCan, depalCan, primaryLotCan, canLine,} = require("./models/canline");
const shortid = require('shortid');


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/PepsiQCSheet")

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("success")
            } else{
                res.json("password is incorrect")
            }
        } else{
            res.json("user does not exist")
        }
    })
})

app.post('/createCanLine', (req, res) => {
    const { reportId, line, date, shift } = req.body;
    
    canLine.create({
      id: reportId,
      Line: line,
      Date: date,
      Shift: shift,
    })
    .then((createdCanLine) => {
      const id = createdCanLine.id; // Assigning the id from the created canLine
      const line = createdCanLine.Line; // Assigning the line from the created canLine
      res.json({ id, line, message: "can line 1 create" });
    })
    .catch((err) => res.json(err));
  });
  
  
  

app.listen(3001, () => {
    console.log("Sever is running")
})