function fetchUserData() {
  return new Promise((resolve, reject) => {
    reject({ name: "Asad", DOB: "12-03-200" });
  });
}

async function getData() {
  try {
    console.log(" Fetching User Data....");
    const userData = await fetchUserData();
    console.log("Data Fetched Sucessfully");
    console.log("User Data:", userData);
  } catch (error) {
    console.log("Error Fecthing Data");
  }
}

function isPresent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Ali", "Asad", "Ihkam"]);
    }, 3000);
  });
}

async function statusEmp() {
  try {
    console.log("Fetching Employee Names...");
    let presentEmp = await isPresent();
    console.log("Employees names Fteched Sucessfully");
    console.log("Present Emp are", presentEmp);
  } catch (error) {
    console.log("All employee are absent");
  }
}

// statusEmp();

// Get multiple promises
function fetchPostData() {
  return new Promise((resolve) => {
    resolve("Fetch post content Complete");
  });
}
function fetchCommentData() {
  return new Promise((resolve) => {
    resolve("Fetch Comment content Complete");
  });
}

async function fetchAllPost() {
  try {
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log("Fetching Post Data....");

    console.log(postData);
    console.log(commentData);
    console.log("Post Data Fetched Sucessfully");
  } catch (error) {
    console.log("Error Fetching post data");
  }
}

fetchAllPost();
