let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Successful!!");
  }, 3000);
});

myPromise.then(function (value) {
  console.log("Value", value);
});
