const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

function getCookies() {
  setTimeout(function () {
    cookies.forEach(function (ele, index) {
      console.log(ele);
    });
  }, 1000);
}

// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies

function pushCookie(functionCall) {
  setTimeout(function () {
    cookies.push(newCookie);
    functionCall();
  }, 2000);
}

// Progression 5: calling function
pushCookie(getCookies);
