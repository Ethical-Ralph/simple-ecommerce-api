const http = require("http");
const https = require("https");

const getFile = (url, cb) => {
  var response_data = "";

if(!url){
url="https://people.sc.fsu.edu/~jburkardt/data/csv/cities.csv"
}

  if(url.startsWith("https://")) {
  https
    .get(url, (res) => {
     console.log(res.headers)
 res.on("data", function (data) {
        response_data += data;
      });
      res.on("end", function () {
        parse(response_data);
      });
    })
    .on("error", (e) => {
      throw new Error(e)
    });
    } else {
    http
    .get(url, (res) => {
      res.on("data", function (data) {
        response_data += data;
      });
      res.on("end", function () {
        parse(response_data);
      });
    })
    .on("error", (e) => {
      throw new Error(e)
    });
   }
};

const vParser = (csv) => {
  var array = csv.split("\n");

  let result = [];

  let headers = array[0].split(", ");

  for (let i = 1; i < array.length - 1; i++) {
    let obj = {};
    let str = array[i];
    let s = "";

    let flag = 0;
    for (let ch of str) {
      if (ch === '"' && flag === 0) {
        flag = 1;
      } else if (ch === '"' && flag == 1) flag = 0;
      if (ch !== '"') s += ch;
    }

    let properties = s.split(",");

    for (let j in headers) {
      if (properties[j] && properties[j].includes(", ")) {
        obj[headers[j]] = properties[j]
          .split(/^"(\s)+$/g)
          .map((item) => item.trim());
      } else obj[headers[j]] = properties[j];
    }
    result.push(obj);
  }

  return result;
};

const parse = (data) => {
  // const selectedF = ["LonD", "City", "State"];

  const selectedF = ["LonD", "City", "State"];
  const json = vParser(data);

  console.log(
    json.map((val) => {
      const newData = {};
      selectedF.forEach((field) => {
        newData[field] = val[field];
      });
      return newData;
    })
  );

  return json
};

module.exports= getFile;
