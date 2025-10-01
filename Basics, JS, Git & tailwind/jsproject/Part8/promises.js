// promises and Asynchrones

function fecthData() {
  return new Promise((resolve, reject) => {
    let sucess = false;
    if (sucess) {
      resolve("Date is fetched sucessfully");
    } else {
      reject(`Error Fetching Data`);
    }
  });
}

fecthData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
