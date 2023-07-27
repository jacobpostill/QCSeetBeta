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

app.get("/selectLine", (req, res) => {
    res.render("SelectLines/selectLine");
  });

  app.get('/canLine/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      // Find the "canLine" document by ID in the database
      const canLineData = await canLine.findOne({ id: id });
      if (!canLineData) {
        return res.status(404).json({ error: 'CanLine not found' });
      }
  
      // Extract the required fields from the "canLine" document
      const { Line, Date, Shift } = canLineData;
  
      // Return the extracted data
      res.json({ Line, Date, Shift });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }); 

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

  app.post('/canline/primarylot/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      time: req.body.time,
      flavor: req.body.flavor, 
      lot: req.body.lot, 
      pallet: req.body.pallet, 
      label: req.body.label,
      color: req.body.color,

    };
    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await primaryLotCan.create(reportData);
      CanLine.primaryLot.push(report);
      await CanLine.save();
  
      
      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.post('/createCanLine/createdepal', (req, res) => {
    const { time, reportId, product, lot, initials } = req.body;
    
    depalCan.create({
      time: time,
      canLine: reportId,
      product: product,
      lot: lot,
      initials: initials,
    })
    .then((depalcans => res.json(depalcans)))
    .catch((err) => res.json(err));
  });
  
  app.get('/createCanLine/createdepal/:reportId', async (req, res) => {
    const reportId = req.params.reportId; // Access the reportId from req.params
    console.log(reportId);
  
    try {
      // Use Mongoose to find depalCan documents with the matching canLine (reportId)
      const depalCanList = await depalCan.find({ canLine: reportId });
  
      // Extract time, product, lot, and initials from depalCanList and create a new list with just the required data
      const data = depalCanList.map((depalCan) => {
        const { time, product, lot, initials, canLine, id } = depalCan;
        return { time, product, lot, initials,  };
      });
  
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.listen(3001, () => {
    console.log("Sever is running")
})