const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

//
//
//

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "tyrex", email: "asbgcu@sjjs.com" });
  }, 1000);
});

promiseThree.then((data) => console.log(data));

//
//
//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "code", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Resolved or rejected"));

//
//
//

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "12345" });
    } else {
      reject("Error : JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//
//
//

async function getallUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Err : ", error);
  }
}

getallUsers();

//
//
//

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data)) // handling response
  .catch((err) => console.log(err))
  .finally(() => console.log("execution done"));

//
//
//

fetch("https://reqres.in/api/users")
  // .then((res) => console.log(res)); // This will return response object, which contains body where our data is present, we can't access that body of data directly from response object, so we need to call a method on it to convert response to json format.
  .then((res) => res.json()) // Now this will return another promise, so we need to do again ".then" and this will return our data.
  .then((data) => console.log(data));

//
//
//

fetch("https://reqres.in/api/users/23") // 23 does not exists, error 404, but still not error (not in catch), goes on onFullFillment because network request sent and came back.
  .then((res) => res.json())
  .then((data) => console.log(data));

//
//
//

fetch("https://reqres.in/api/users/23")
  .then((res) => {
    if (res.ok) {
      console.log("Success"); // Gives us successfull or not in onFullFillment.
    } else {
      console.log("Not Successful");
    }
    return res.json();
  })
  .then((data) => console.log(data));

fetch("https://reqres.in/api/users/23", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // need this when we do post.
  },
  body: JSON.stringify({
    name: "User 001",
  }), // body for new user that we post. with just method and body, it does not going to work, we need JSON.stringify, still not work, we need to set headers now. now it will work.
}) // if wanna do post, update or delete, need to pass method.
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
