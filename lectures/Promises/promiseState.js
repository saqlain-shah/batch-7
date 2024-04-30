const promise = new Promise((fulfilled, Rejected) => {
  // An asynchronous operation.
  setTimeout(function () {
    const res = true;
    if (res) {
     fulfilled("Resolved!");
    } else {
      Rejected(Error("Error"));
    }
  }, 3000);
});

promise.then(function (value) {
  console.log("Succees", value);
})
.catch(function (value) {
  console.log("Rejected", value);
});
//console.log(promise);
//console.log(promise);
