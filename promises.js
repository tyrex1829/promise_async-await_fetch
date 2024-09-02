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
