let data;

async function init() {
  let link = "311.json";
  let info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for (let i = 0; i < data.length; i++) {
    let crash = data[i];

    build += `<div class="fitted card">
      <h3>${crash.on_street_name}</h3>
      <hr>
      <p>${crash.borough}</p>
      <p>${crash.zip_code}</p>
      <hr>
      <p>${crash.contributing_factor_vehicle_1}</p>
      <p>${crash.contributing_factor_vehicle_2}</p>
      <hr>
      <p>${crash.vehicle_type_code1}</p>
      <p>${crash.vehicle_type_code2}</p>
    </div>`;
  }

  output.innerHTML = build;
}

function filterByBorough() {
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let crash = data[i];

    if (crash.borough && crash.borough.toLowerCase() === borough.toLowerCase()) {
      build += `<div class="fitted card">
        <h3>${crash.on_street_name}</h3>
        <hr>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p>${crash.contributing_factor_vehicle_2}</p>
        <hr>
        <p>${crash.vehicle_type_code1}</p>
        <p>${crash.vehicle_type_code2}</p>
      </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterByZipCode() {
  let output = document.getElementById("output");
  let zipcode = document.getElementById("zip").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let crash = data[i];

    if (crash.zip_code && crash.zip_code == zipcode) {
      build += `<div class="fitted card">
        <h3>${crash.on_street_name}</h3>
        <hr>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p>${crash.contributing_factor_vehicle_2}</p>
        <hr>
        <p>${crash.vehicle_type_code1}</p>
        <p>${crash.vehicle_type_code2}</p>
      </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterByType() {
  let output = document.getElementById("output");
  let type = document.getElementById("vehicle_type").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let crash = data[i];

    if (
      (crash.vehicle_type_code1 && crash.vehicle_type_code1.toLowerCase() === type.toLowerCase()) ||
      (crash.vehicle_type_code2 && crash.vehicle_type_code2.toLowerCase() === type.toLowerCase())
    ) {
      build += `<div class="fitted card">
        <h3>${crash.on_street_name}</h3>
        <hr>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p>${crash.contributing_factor_vehicle_2}</p>
        <hr>
        <p>${crash.vehicle_type_code1}</p>
        <p>${crash.vehicle_type_code2}</p>
      </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterByFactor() {
  let output = document.getElementById("output");
  let factor = document.getElementById("factor").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let crash = data[i];

    if (
      (crash.contributing_factor_vehicle_1 &&
        crash.contributing_factor_vehicle_1.toLowerCase() === factor.toLowerCase()) ||
      (crash.contributing_factor_vehicle_2 &&
        crash.contributing_factor_vehicle_2.toLowerCase() === factor.toLowerCase())
    ) {
      build += `<div class="fitted card">
        <h3>${crash.on_street_name}</h3>
        <hr>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p>${crash.contributing_factor_vehicle_2}</p>
        <hr>
        <p>${crash.vehicle_type_code1}</p>
        <p>${crash.vehicle_type_code2}</p>
      </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}