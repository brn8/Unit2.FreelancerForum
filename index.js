const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const body = document.querySelector("body");

const heading = document.createElement("h1");
heading.textContent = "Freelancer Forum";
heading.style.textAlign = "center";
body.append(heading);

const message = document.createElement("p");
let totalPrice = 0;
let average;
message.style.textAlign = "center";
body.append(message);

const availableFreelancerText = document.createElement("h1");
availableFreelancerText.textContent = "Availble Freelancers";
availableFreelancerText.style.textAlign = "center";
body.append(availableFreelancerText);

const tableRow = document.createElement("tr");
const tableHeadingName = document.createElement("th");
const tableHeadingOccupation = document.createElement("th");
const tableHeadingStartingPrice = document.createElement("th");
tableHeadingName.textContent = "Name";
tableHeadingOccupation.textContent = "Occupation";
tableHeadingStartingPrice.textContent = "Starting Price";
const table = document.createElement("table");
table.append(tableRow);
tableRow.append(tableHeadingName);
tableRow.append(tableHeadingOccupation);
tableRow.append(tableHeadingStartingPrice);

const addData = (arr, indexs) => {
  totalPrice += arr[indexs].price;
  average = totalPrice / (indexs + 1);
  message.textContent = `The average starting price us $${
    Math.round(average * 100) / 100
  }`;
  const tableRow1 = document.createElement("tr");
  const tableName = document.createElement("td");
  const tableOccupation = document.createElement("td");
  const tableStartingPrice = document.createElement("td");
  tableName.textContent = arr[indexs].name;
  tableOccupation.textContent = arr[indexs].occupation;
  tableStartingPrice.textContent = `$${arr[indexs].price}`;
  table.append(tableRow1);
  tableRow1.append(tableName);
  tableRow1.append(tableOccupation);
  tableRow1.append(tableStartingPrice);
};
addData(freelancers, 0);
addData(freelancers, 1);
let counts = 2;
setInterval(() => {
  if (counts != freelancers.length) {
    addData(freelancers, counts);
    counts++;
  }
}, 1000);

table.style.textAlign = "center";
table.style.marginLeft = "auto";
table.style.marginRight = "auto";
table.style.fontSize = "30px";
table.style.width = "600px";
body.append(table);
