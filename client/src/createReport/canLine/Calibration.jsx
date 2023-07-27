import React from 'react';

function CalibrationForm() {
  return (
    <div className="container mt-5">
      <h1>Calibration Form</h1>
      <form id="calibrationForm">
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="ph1">pH1:</label>
            <input type="number" id="ph1" name="ph1" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="ph2">pH2:</label>
            <input type="number" id="ph2" name="ph2" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="ph3">pH3:</label>
            <input type="number" id="ph3" name="ph3" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="slope">Slope:</label>
            <input type="number" id="slope" name="slope" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="assymetry">Assymetry:</label>
            <input type="number" id="assymetry" name="assymetry" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="comment1">Comment 1:</label>
            <input type="text" id="comment1" name="comment1" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="standEqu">standEqu:</label>
            <input type="text" id="standEqu" name="standEqu" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="naOH">naOH:</label>
            <input type="text" id="naOH" name="naOH" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="tWeight">Total Weight:</label>
            <input type="number" id="tWeight" name="tWeight" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="aWeight">Additional Weight:</label>
            <input type="number" id="aWeight" name="aWeight" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="comment2">Comment 2:</label>
            <input type="text" id="comment2" name="comment2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="distilledWater">Distilled Water:</label>
            <input type="text" id="distilledWater" name="distilledWater" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="flow">Flow:</label>
            <input type="text" id="flow" name="flow" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="cleaning">Cleaning:</label>
            <input type="text" id="cleaning" name="cleaning" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="comment3">Comment 3:</label>
            <input type="text" id="comment3" name="comment3" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="tDensity">Total Density:</label>
            <input type="number" id="tDensity" name="tDensity" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="aDensity">Additional Density:</label>
            <input type="number" id="aDensity" name="aDensity" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="density">Density:</label>
            <input type="number" id="density" name="density" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="comment5">Comment 5:</label>
            <input type="text" id="comment5" name="comment5" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="dewPoint">Dew Point:</label>
            <input type="number" id="dewPoint" name="dewPoint" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="dewTime">Dew Time:</label>
            <input type="text" id="dewTime" name="dewTime" className="form-control" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="waterTemp1">Water Temp 1:</label>
            <input type="text" id="waterTemp1" name="waterTemp1" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp2">Water Temp 2:</label>
            <input type="text" id="waterTemp2" name="waterTemp2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp3">Water Temp 3:</label>
            <input type="text" id="waterTemp3" name="waterTemp3" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp4">Water Temp 4:</label>
            <input type="text" id="waterTemp4" name="waterTemp4" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="waterTemp5">Water Temp 5:</label>
            <input type="text" id="waterTemp5" name="waterTemp5" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp6">Water Temp 6:</label>
            <input type="text" id="waterTemp6" name="waterTemp6" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp1">Product Temp 1:</label>
            <input type="text" id="productTemp1" name="productTemp1" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp2">Product Temp 2:</label>
            <input type="text" id="productTemp2" name="productTemp2" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="productTemp3">Product Temp 3:</label>
            <input type="text" id="productTemp3" name="productTemp3" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp4">Product Temp 4:</label>
            <input type="text" id="productTemp4" name="productTemp4" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp5">Product Temp 5:</label>
            <input type="text" id="productTemp5" name="productTemp5" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp6">Product Temp 6:</label>
            <input type="text" id="productTemp6" name="productTemp6" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="moisture">Moisture:</label>
            <input type="text" id="moisture" name="moisture" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="warmerTime">Warmer Time:</label>
            <input type="text" id="warmerTime" name="warmerTime" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="warmerCheck">Warmer Check:</label>
            <input type="checkbox" id="warmerCheck" name="warmerCheck" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="screensTime">Screens Time:</label>
            <input type="text" id="screensTime" name="screensTime" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="screensCheck">Screens Check:</label>
            <input type="checkbox" id="screensCheck" name="screensCheck" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="inspectTime">Inspect Time:</label>
            <input type="text" id="inspectTime" name="inspectTime" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="inspectCheck">Inspect Check:</label>
            <input type="checkbox" id="inspectCheck" name="inspectCheck" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="odor">Odor:</label>
            <input type="checkbox" id="odor" name="odor" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="discharge">Discharge:</label>
            <input type="checkbox" id="discharge" name="discharge" className="form-check-input" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="atp1">ATP 1:</label>
            <input type="text" id="atp1" name="atp1" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="atp2">ATP 2:</label>
            <input type="text" id="atp2" name="atp2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="atp3">ATP 3:</label>
            <input type="text" id="atp3" name="atp3" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp12">Water Temp 12:</label>
            <input type="text" id="waterTemp12" name="waterTemp12" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="waterTemp22">Water Temp 22:</label>
            <input type="text" id="waterTemp22" name="waterTemp22" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp32">Water Temp 32:</label>
            <input type="text" id="waterTemp32" name="waterTemp32" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp42">Water Temp 42:</label>
            <input type="text" id="waterTemp42" name="waterTemp42" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="waterTemp52">Water Temp 52:</label>
            <input type="text" id="waterTemp52" name="waterTemp52" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="waterTemp62">Water Temp 62:</label>
            <input type="text" id="waterTemp62" name="waterTemp62" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp12">Product Temp 12:</label>
            <input type="text" id="productTemp12" name="productTemp12" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp22">Product Temp 22:</label>
            <input type="text" id="productTemp22" name="productTemp22" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp32">Product Temp 32:</label>
            <input type="text" id="productTemp32" name="productTemp32" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="productTemp42">Product Temp 42:</label>
            <input type="text" id="productTemp42" name="productTemp42" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp52">Product Temp 52:</label>
            <input type="text" id="productTemp52" name="productTemp52" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="productTemp62">Product Temp 62:</label>
            <input type="text" id="productTemp62" name="productTemp62" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="moisture2">Moisture 2:</label>
            <input type="text" id="moisture2" name="moisture2" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="warmerTime2">Warmer Time 2:</label>
            <input type="text" id="warmerTime2" name="warmerTime2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="warmerCheck2">Warmer Check 2:</label>
            <input type="checkbox" id="warmerCheck2" name="warmerCheck2" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="screensTime2">Screens Time 2:</label>
            <input type="text" id="screensTime2" name="screensTime2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="screensCheck2">Screens Check 2:</label>
            <input type="checkbox" id="screensCheck2" name="screensCheck2" className="form-check-input" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="inspectTime2">Inspect Time 2:</label>
            <input type="text" id="inspectTime2" name="inspectTime2" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="inspectCheck2">Inspect Check 2:</label>
            <input type="checkbox" id="inspectCheck2" name="inspectCheck2" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="odor2">Odor 2:</label>
            <input type="checkbox" id="odor2" name="odor2" className="form-check-input" />
          </div>
          <div className="col">
            <label htmlFor="discharge2">Discharge 2:</label>
            <input type="checkbox" id="discharge2" name="discharge2" className="form-check-input" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="atp12">ATP 12:</label>
            <input type="text" id="atp12" name="atp12" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="atp22">ATP 22:</label>
            <input type="text" id="atp22" name="atp22" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="atp32">ATP 32:</label>
            <input type="text" id="atp32" name="atp32" className="form-control" />
          </div>
          {/* Add the remaining fields here */}
        </div>

        <input type="submit" value="Submit" className="btn btn-primary mt-3" />
      </form>
    </div>
  );
}

export default CalibrationForm;
