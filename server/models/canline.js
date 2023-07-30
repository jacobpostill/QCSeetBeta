const mongoose = require('mongoose')


const canLine = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    }, Line: {
        type: String,
        required: false
    }, Date: {
        type: String,
        required: false
    }, Shift: {
        type: String,
        required: false
    }, callibration: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'callibrationCan'
    }], runSheetCheck: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'runSheet'
    }], depalCan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'depalCan'
    }], rinser: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rinserCan'
    }], filtec: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fitlecCan'
    }], seamer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seamerCan'
    }], ballCage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ballCageCan'
    }], seam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seam'
    }], primaryLot: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'primaryLotCan'
    }], paperboard: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paperboardCan'
    }], shrink: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shrinkWrapCan'
    }],
})


const Seam = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        unique: true,  
    }, check: {
        type: String,
        unique: true  
    }, comment: {
        type: String,
        unique: false,
        required: false
    }
})

const runSheet = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        unique: true,  
    }, check: {
        type: String,
        unique: true  
    }, comment: {
        type: String,
        unique: false,
        required: false
    }
})
const shrinkWrapCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, time: {
        type: String,
        required: false,
        unique: false,     
    }, flavor: {
        type: String,
        required: false     
    }, appearance1: {
        type: String,
        required: false     
    }, appearance2: {
        type: String,
        required: false     
    }, appearance3: {
        type: String,
        required: false     
    }, shrink1: {
        type: String,
        required: false     
    }, shrink2: {
        type: String,
        required: false     
    }, shrink3: {
        type: String,
        required: false     
    }, hicone1: {
        type: String,
        required: false     
    }, hicone2: {
        type: String,
        required: false     
    }, hicone3: {
        type: String,
        required: false     
    }, tray1: {
        type: String,
        required: false     
    }, tray2: {
        type: String,
        required: false     
    }, tray3: {
        type: String,
        required: false     
    }, bonded1: {
        type: String,
        required: false     
    }, bonded2: {
        type: String,
        required: false     
    }, bonded3: {
        type: String,
        required: false     
    }, sealed1: {
        type: String,
        required: false     
    }, sealed2: {
        type: String,
        required: false     
    }, sealed3: {
        type: String,
        required: false     
    }, legable1: {
        type: String,
        required: false     
    }, legable2: {
        type: String,
        required: false     
    }, legable3: {
        type: String,
        required: false     
    }, burn1: {
        type: String,
        required: false     
    }, burn2: {
        type: String,
        required: false     
    }, burn3: {
        type: String,
        required: false     
    }, btl: {
        type: String,
        required: false     
    }, proDateCode: {
        type: String,
        required: false     
    }, checks: {
        type: Boolean,
        required: false     
    },  lid: {
        type: Boolean,
        required: false     
    }, firstLast: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    }, comments: {
        type: String,
        required: false     
    }, 
})

const paperboardCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, time: {
        type: String,
        required: false     
    }, flavor: {
        type: String,
        required: false     
    }, flap1: {
        type: Boolean,
        required: false     
    }, flap2: {
        type: Boolean,
        required: false     
    }, flap3: {
        type: Boolean,
        required: false     
    }, perforation1: {
        type: Boolean,
        required: false     
    }, perforation2: {
        type: Boolean,
        required: false     
    }, perforation3: {
        type: Boolean,
        required: false     
    }, fiberperforation1: {
        type: Boolean,
        required: false     
    }, fiberperforation2: {
        type: Boolean,
        required: false     
    }, fiberperforation3: {
        type: Boolean,
        required: false     
    }, fiberplain1: {
        type: Boolean,
        required: false     
    }, fiberplain2: {
        type: Boolean,
        required: false     
    }, fiberplain3: {
        type: Boolean,
        required: false     
    }, fiberSeam1: {
        type: Boolean,
        required: false     
    }, fiberSeam2: {
        type: Boolean,
        required: false     
    }, fiberSeam3: {
        type: Boolean,
        required: false     
    }, wrap: {
        type: Boolean,
        required: false     
    }, proDateWrap: {
        type: String,
        required: false     
    }, proDateCans: {
        type: String,
        required: false     
    }, check: {
        type: Boolean,
        required: false     
    }, lid: {
        type: Boolean,
        required: false     
    }, firstLast: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    }, comments: {
        type: String,
        required: false     
    }, 
})

const primaryLotCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        required: false 
    },pallet: {
        type: String,
        required: false     
    }, time: {
        type: String,
        required: false     
    }, flavor: {
        type: String,
        required: false     
    }, color: {
        type: String,
        required: false     
    }, label: {
        type: Boolean,
        required: false     
    }, lot: {
        type: String,
        required: false     
    }, 
})

const ballCageCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        required: false       
    }, time: {
        type: String,
        required: false     
    }, flavor:{
        type: String,
        required: false   
    }, freq: {
        type: String,
        required: false     
    }, tightness: {
        type: String,
        required: false     
    }, inspection: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    },
})

const seamerCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    },  time: {
        type: String,
        required: false     
    }, shift:{
        type: String,
        required: false   
    }, cleaningComp: {
        type: Boolean,
        required: false     
    }, visualComp: {
        type: String,
        required: false     
    }
})
 
const fitlecCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    },  time: {
        type: String,
        required: false     
    }, filtecVer: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    }, 
})

const depalCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        required: false,
        unique: false     
    }, time: {
        type: String,
        required: false ,
        unique: false        
    }, product: {
        type: String,
        required: false   ,
        unique: false       
    }, lot: {
        type: String,
        required: false    ,
        unique: false      
    }, initials: {
        type: String,
        required: false   ,
        unique: false     
  
    }, 
})

const rinserCan = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        required: false 
    }, date: {
        type: String,
        required: false     
    }, time: {
        type: String,
        required: false     
    }, shift: {
        type: String,
        required: false     
    }, productCode: {
        type: String,
        required: false     
    }, flavor: {
        type: String,
        required: false     
    }, operatiional: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    }, computer: {
        type: String,
        required: false     
    }, readings: {
        type: String,
        required: false     
    }, 
})

const callibrationCan = new mongoose.Schema({
    id: {
        type: String,
        unique: true 
    }, canLine:{
        type: Number,
        required: false
    },  ph1: {
        type: Number,
        required: false
    }, ph2: {
        type: Number,
        required: false
    }, ph3: {
        type: Number,
        required: false
    }, slope: {
        type: Number,
        required: false
    }, assymetry: {
        type: Number,
        required: false
    }, comment1: {
        type: String,
        required: false
    }, standEqu: {
        type: String,
        required: false
    }, naOH: {
        type: String,
        required: false
    },tWeight: {
        type: Number,
        required: false
    }, aWeight: {
        type: Number,
        required: false
    }, comment2: {
        type: String,
        required: false
    }, distilledWater: {
        type: String,
        required: false
    }, flow: {
        type: String,
        required: false
    }, cleaning: {
        type: String,
        required: false
    }, comment3: {
        type: String,
        required: false
    }, tDensity: {
        type: Number,
        required: false
    }, aDensity: {
        type: Number,
        required: false
    }, density: {
        type: Number,
        required: false
    },comment5: {
        type: String,
        required: false
    }, dewPoint:{
        type: Number,
        required: false
    }, dewTime: {
        type: String,
        required: false
    }, waterTemp1: {
        type: String,
        required: false
    }, waterTemp2: {
        type: String,
        required: false
    }, waterTemp3: {
        type: String,
        required: false
    }, waterTemp4: {
        type: String,
        required: false
    }, waterTemp5: {
        type: String,
        required: false
    }, waterTemp6: {
        type: String,
        required: false
    }, productTemp1: {
        type: String,
        required: false
    }, productTemp2: {
        type: String,
        required: false
    }, productTemp3: {
        type: String,
        required: false
    }, productTemp4: {
        type: String,
        required: false
    }, productTemp5: {
        type: String,
        required: false
    }, productTemp6: {
        type: String,
        required: false
    }, moisture: {
        type: String,
        required: false
    }, warmerTime:{
        type: String,
        required: false        
    }, warmerCheck:{
        type: Boolean,
        required: false        
    }, screensTime:{
        type: String,
        required: false        
    }, screensCheck:{
        type: Boolean,
        required: false        
    }, inspectTime:{
        type: String,
        required: false        
    }, inspectCheck:{
        type: Boolean,
        required: false        
    }, odor:{
        type: Boolean,
        required: false        
    }, discharge:{
        type: Boolean,
        required: false        
    }, atp1:{
        type: String,
        required: false        
    }, atp2:{
        type: String,
        required: false        
    }, atp3:{
        type: String,
        required: false        
    }, waterTemp12: {
        type: String,
        required: false
    }, waterTemp22: {
        type: String,
        required: false
    }, waterTemp32: {
        type: String,
        required: false
    }, waterTemp42: {
        type: String,
        required: false
    }, waterTemp52: {
        type: String,
        required: false
    }, waterTemp62: {
        type: String,
        required: false
    }, productTemp12: {
        type: String,
        required: false
    }, productTemp22: {
        type: String,
        required: false
    }, productTemp32: {
        type: String,
        required: false
    }, productTemp42: {
        type: String,
        required: false
    }, productTemp52: {
        type: String,
        required: false
    }, productTemp62: {
        type: String,
        required: false
    }, moisture2: {
        type: String,
        required: false
    }, warmerTime2:{
        type: String,
        required: false        
    }, warmerCheck2:{
        type: Boolean,
        required: false        
    }, screensTime2:{
        type: String,
        required: false        
    }, screensCheck2:{
        type: Boolean,
        required: false        
    }, inspectTime2:{
        type: String,
        required: false        
    }, inspectCheck2:{
        type: Boolean,
        required: false        
    }, odor2:{
        type: Boolean,
        required: false        
    }, discharge2:{
        type: Boolean,
        required: false        
    }, atp12:{
        type: String,
        required: false        
    }, atp22:{
        type: String,
        required: false        
    }, atp32:{
        type: String,
        required: false        
    }
})

const collection2 = mongoose.model("canLine", canLine)
const collection8 = mongoose.model("callibrationCan", callibrationCan)
const collection9 = mongoose.model("seamerCan", seamerCan)
const collection10 =  mongoose.model("depalCan", depalCan)
const collection11 =  mongoose.model("rinserCan", rinserCan)
const collection12 =  mongoose.model("fitlecCan", fitlecCan)
const collection13 =  mongoose.model("ballCageCan", ballCageCan)
const collection14 = mongoose.model("primaryLotCan", primaryLotCan)
const collection15 = mongoose.model("paperboardCan", paperboardCan)
const collection16 =  mongoose.model("shrinkWrapCan", shrinkWrapCan)
const collection17 =  mongoose.model("runSheet", runSheet)
const collection18 =  mongoose.model("Seam", Seam)

module.exports = {
    canLine: collection2,
    callibrationCan: collection8,
    seamerCan: collection9,
    rinserCan: collection11,
    depalCan: collection10,
    fitlecCan: collection12,
    ballCageCan: collection13,
    primaryLotCan: collection14,
    paperboardCan: collection15,
    shrinkWrapCan: collection16,
    runSheet: collection17,
    Seam: collection18,
  };
  