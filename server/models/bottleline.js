const mongoose = require('mongoose')

const bottleLine = new mongoose.Schema({
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
        ref: 'callibrationBottle'
    }], runSheetCheck: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'runSheet'
    }],  vent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ventBottle'
    }], primaryLot: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'primaryLotCan'
    }],  torque: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bottleTorque'
    }], bottlecode: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bottleCode'
    }], label: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ballCageCan'
    }], shrink: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shrinkWrapCan'
    }],
})

const calibrationBottle = new mongoose.Schema({
    id: {
        type: String,
        unique: true 
    }, bottleLine:{
        type: String,
        unique: true 
    },  ph1Check : [{
        type: String,
        unique: true     
    }], slope: {
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
    },distilledWater: {
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
    },  ph2Check : [{
        type: String,
        unique: true     
    }], slope: {
        type: Number,
        required: false
    }, standard: {
        type: String,
        actual: false 
    }, standard: {
        type: String,
        required: false 
    }, NTU1: {
        type: String,
        required: false 
    }, NTU2: {
        type: String,
        required: false 
    }, GMP: {
        type: String,
        required: false 
    }, ozone: {
        type: String,
        required: false 
    }, 
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

const vent = new mongoose.Schema({
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
    }, metal: {
        type: String,
        required: false     
    },  inspection: {
        type: String,
        required: false     
    }, initals: {
        type: String,
        required: false     
    },
})

const primaryLotBottle = new mongoose.Schema({
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

const torque = new mongoose.Schema({
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

const bottleCode = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        unique: true,  
    }, time: {
        type: String,
        unique: true  
    }, comment: {
        type: String,
        required: false
    }, btl: {
        type: String,
        required: false
    }, mfg: {
        type: String,
        required: false
    }, legible: {
        type: String,
        required: false
    }, complete: {
        type: String,
        required: false
    }, correct: {
        type: String,
        required: false
    }, initals: {
        type: String,
        required: false
    }
})

const label = new mongoose.Schema({
    id:{
        type: String,
        unique: true     
    }, canLine:{
        type: String,
        unique: false,  
    }, time: {
        type: String,
        unique: false  
    }, product: {
        type: String,
        unique: false  
    }, Label: [{
        type: String,
        unique: false  
    }],torn: [{
        type: String,
        unique: false  
    }],wrinkled: [{
        type: String,
        unique: false  
    }],excessive: [{
        type: String,
        unique: false  
    }],color: [{
        type: String,
        unique: false  
    }],placement: [{
        type: String,
        unique: false  
    }],loose: [{
        type: String,
        unique: false  
    }],Label: [{
        type: String,
        unique: false  
    }],flagging: [{
        type: String,
        unique: false  
    }],scuffing: [{
        type: String,
        unique: false  
    }],legible: [{
        type: String,
        unique: false  
    }],alignment: [{
        type: String,
        unique: false  
    }],graphics: [{
        type: String,
        unique: false  
    }],registration: [{
        type: String,
        unique: false  
    }],dirty: [{
        type: String,
        unique: false  
    }], bottleCode: {
        type: String,
        unique: false  
    }, lot: {
        type: String,
        unique: false  
    }, scents: {
        type: String,
        unique: false  
    }, initals: {
        type: String,
        unique: false  
    },verfied: {
        type: String,
        unique: false  
    },comments: {
        type: String,
        unique: false  
    },

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
    }, appearance: [{
        type: String,
        required: false     
    }],  graphics: [{
        type: String,
        required: false     
    }], shrink: [{
        type: String,
        required: false     
    }], centered: [{
        type: String,
        required: false     
    }], closed: [{
        type: String,
        required: false     
    }], upc: [{
        type: String,
        required: false     
    }], date: [{
        type: String,
        required: false     
    }], burn: [{
        type: String,
        required: false     
    }], proDateCode: {
        type: String,
        required: false     
    }, caseCode: {
        type: String,
        required: false     
    }, checks: {
        type: Boolean,
        required: false     
    }, initals: {
        type: String,
        required: false     
    }, comments: {
        type: String,
        required: false     
    }, 
})