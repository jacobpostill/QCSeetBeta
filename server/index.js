const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel  = require('./models/users')
const { callibrationCan , fitlecCan, Seam, runSheet, ballCageCan, rinserCan, depalCan, primaryLotCan, canLine,} = require("./models/canline");
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


  app.post('/canline/rinsercan/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      time: req.body.time,
      shift: req.body.shift, 
      productCode: req.body.productCode, 
      flavor: req.body.flavor, 
      operatiional: req.body.rinserOperational,
      initals: req.body.initials,
      computer: req.body.computerOn,
      readings: req.body.readings
    };

    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await rinserCan.create(reportData);
      CanLine.rinser.push(report);
      await CanLine.save();
  
      
      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.get('/canline/rinsercan/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await rinserCan.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
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

  app.get('/canline/primarylotcans/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await primaryLotCan.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
  });

  app.post('/canline/ballcagecan/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      time: req.body.time,
      flavor: req.body.flavor, 
      freq: req.body.freq, 
      tightness: req.body.tightness, 
      inspection: req.body.inspection,
      initals:req.body.initals,
    };

    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await ballCageCan.create(reportData);
      CanLine.ballCage.push(report);
      await CanLine.save();
  
      
      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.get('/canline/ballCageCan/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await ballCageCan.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
  });
  
  app.post('/canline/runSheet/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      check: req.body.check,
      canLine: req.body.reportId,
    };

    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await runSheet.create(reportData);
      CanLine.runSheetCheck.push(report);
      await CanLine.save();

      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.post('/canline/seamcheck/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      check: req.body.check,
      canLine: req.body.reportId,
      comment: req.body.comment
    };

    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await Seam.create(reportData);
      CanLine.seam.push(report);
      await CanLine.save();

      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.get('/canline/runSheet/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await runSheet.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
  });

  app.post('/createCanLine/createdepal/:reportId', async (req, res) => { // Add async keyword here
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      time: req.body.time,
      product: req.body.product, 
      lot: req.body.lot, 
      initials: req.body.initials, 
    };
  
    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await depalCan.create(reportData);
      CanLine.depalCan.push(report);
      await CanLine.save();
  
      
      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.get('/canline/createdepal/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await depalCan.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
  });
  
  app.post('/createCanLine/fitlecCan/:reportId', async (req, res) => { // Add async keyword here
    const reportId = req.params.reportId;
    console.log(reportId);
    const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      time: req.body.time,
      filtecVer: req.body.filtecVer, 
      initials: req.body.initials, 
    };
  
    console.log(reportData);
    try {
      const CanLine = await canLine.findOne({ id: reportId });
  
      if (!CanLine) {
        return res.status(404).json({ message: 'Report Schema not found' });
      }
  
      const report = await fitlecCan.create(reportData);
      CanLine.filtec.push(report);
      await CanLine.save();
  
      
      res.json({ message: 'Report created', report });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ message: 'Failed to create report' });
    }
  });

  app.get('/createCanLine/fitlecCan/:reportId', async (req, res) => {
    const reportId = req.params.reportId;
    try {
      const CanLine = await fitlecCan.find({ canLine: reportId }).exec();
  
      console.log(CanLine)

      res.json(CanLine);
    } catch (error) {
      console.error('Error fetching depalCans:', error);
      res.status(500).json({ message: 'Failed to fetch depalCans' });
    }
  });
  app.post('/createCanLine/callibration/:reportId', async (req, res) => { // Add async keyword here
    try {
        const reportId = req.params.reportId;
        console.log(reportId);
        const reportData = {
      id: shortid.generate(),
      canLine: req.body.reportId,
      ph1: req.body.ph1,
      ph2: req.body.ph2,
      ph3: req.body.ph3,
      slope: req.body.slope,
      assymetry: req.body.assymetry,
      comment1: req.body.comment1,
      standEqu: req.body.standEqu,
      naOH: req.body.naOH,
      tWeight: req.body.tWeight,
      aWeight: req.body.aWeight,
      comment2: req.body.comment2,
      distilledWater: req.body.distilledWater,
      flow: req.body.flow,
      cleaning: req.body.cleaning,
      comment3: req.body.comment3,
      tDensity: req.body.tDensity,
      aDensity: req.body.aDensity,
      density: req.body.density,
      comment5: req.body.comment5,
      dewPoint: req.body.dewPoint,
      dewTime: req.body.dewTime,
      waterTemp1: req.body.waterTemp1,
      waterTemp2: req.body.waterTemp2,
      waterTemp3: req.body.waterTemp3,
      waterTemp4: req.body.waterTemp4,
      waterTemp5: req.body.waterTemp5,
      waterTemp6: req.body.waterTemp6,
      productTemp1: req.body.productTemp1,
      productTemp2: req.body.productTemp2,
      productTemp3: req.body.productTemp3,
      productTemp4: req.body.productTemp4,
      productTemp5: req.body.productTemp5,
      productTemp6: req.body.productTemp6,
      moisture: req.body.moisture,
      warmerTime: req.body.warmerTime,
      warmerCheck: req.body.warmerCheck,
      screensTime: req.body.screensTime,
      screensCheck: req.body.screensCheck,
      inspectTime: req.body.inspectTime,
      inspectCheck: req.body.inspectCheck,
      odor: req.body.odor,
      discharge: req.body.discharge,
      atp1: req.body.atp1,
      atp2: req.body.atp2,
      atp3: req.body.atp3,
      waterTemp12: req.body.waterTemp12,
      waterTemp22: req.body.waterTemp22,
      waterTemp32: req.body.waterTemp32,
      waterTemp42: req.body.waterTemp42,
      waterTemp52: req.body.waterTemp52,
      waterTemp62: req.body.waterTemp62,
      productTemp12: req.body.productTemp12,
      productTemp22: req.body.productTemp22,
      productTemp32: req.body.productTemp32,
      productTemp42: req.body.productTemp42,
      productTemp52: req.body.productTemp52,
      productTemp62: req.body.productTemp62,
      moisture2: req.body.moisture2,
      warmerTime2: req.body.warmerTime2,
      warmerCheck2: req.body.warmerCheck2,
      screensTime2: req.body.screensTime2,
      screensCheck2: req.body.screensCheck2,
      inspectTime2: req.body.inspectTime2,
      inspectCheck2: req.body.inspectCheck2,
      odor2: req.body.odor2,
      discharge2: req.body.discharge2,
      atp12: req.body.atp12,
      atp22: req.body.atp22,
      atp32: req.body.atp32,
        };
  
    console.log(reportData);
    for (const prop in reportData) {
        if (reportData[prop] === null || reportData[prop] === undefined) {
          delete reportData[prop];
        }
      }
  
      console.log(reportData);
  
      // Check if a report with the given reportId already exists
      let existingReport = await callibrationCan.findOne({ id: reportId });
  
      if (existingReport) {
        // Update the existing report with the new data
        await callibrationCan.findOneAndUpdate({ id: reportId }, reportData);
        res.status(200).json({ message: 'Report updated successfully!' });
      } else {
        // Create a new report with the given reportId
        const newReport = new callibrationCan(reportData);
        await newReport.save();
        res.status(201).json({ message: 'Report created successfully!' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

app.listen(3001, () => {
    console.log("Sever is running")
})