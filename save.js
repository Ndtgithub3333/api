// /**   
// // // 
// // // var myFunction = function () {
// // //     alert('thang dep trai')
// // // }
// // // myFunction();

// // // var myObject = {
// // //     name: 'Thang',
// // //     age: 19,
// // //     adress: 'Ha Noi',
// // //     myFunction: function tha() {
// // //         alert('thag dep trai')
// // //     }
// // // }

// // // console.log('myObject', myObject)

// // // var myArray = [
// // //     'javascript',
// // //     'php',
// // //     'ruby',
// // // ];

// // // console.log('myArray', myArray);

// // // var a = 1
// // // var b = '1'

// // // console.log(a !== b)

// // // function writeLog(test_1, test_2) { // tham só
// // //     console.log(test_1, test_2) // tham số
// // //     }
// // //     writeLog( 'Test message','sdfs') // đối số

// // //     function writeLog() {
// // //         var mySTring = ''
// // //         for (var param of arguments) {
// // //             mySTring += param + ' '

// // //         }
// // //         console.log(mySTring)

// // //     }

// // //    writeLog('adf', 'sdf')

// // 
// //  function showMessage() {
// //     console.log(' Message 1 ' );
// //     }
// //     showMessage();
// //     function showMessage() {
// //     console.log('Message 2') ;
// //     }
// //     function showMessage() {
// //     console.log('Message 3');
// //     }

// //  

// // // var name1   = 'duc'
// // // var name2   = 'thang'

// // // console.log('Toi la: ' + name1 + ' ' + name2);
// // // console.log(`Toi la: ${name1} ${name2}`);
// // // var string = 'Hoc JS JS JS tai F8!'
// // // // var string = '0123456789'
// // // // console.log(string.slice(3, 6))
// // // // console.log(string.slice(4, 5))
// // // console.log(string.trim().length)
// // // var string = 'Java, thang, that'

// // // console.log(string.charAt())

// // // var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// // // function strToArray(str) {
// // //     return str.split(', ')
// // // }

// // // // Expected results
// // // console.log(strToArray(coursesStr))

// // // // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
// // // Number = 2
// // // console.log(isFinite(10/3));
// // // console.log(typeof 1 === 'number')

// // // var languages = [
// // //    'Javascript',
// // //    'PHP',
// // //    'Ruby',

// // // ]
// // // var name1 = [
// // //    'adsff',
// // //    'thanag',
// // // ]

// // // console.log(languages.slice(-2))
// // // // console.log(name1)

// // // function joinWithCharacter(array, charactor) {
// // //    return  array.join(charactor)
// // // }

// // // // Ví dụ khi sử dụng
// // // var cars = ['Honda', 'Mazda', 'Mercedes'];

// // // console.log(cars.slice(0,1)); // Expected: "Honda - Mazda - Mercedes"

// // // var myInfo = {
// // //    name: 'Thang',
// // //    age: 19,
// // //    address: 'Ha Noi',
// // //    getName: function() {
// // //       return this.address
// // //    }
// // // }
// // // // myInfo.full-name = 'thang@gmail.com';
// // // delete myInfo.name
// // // console.log(myInfo.getName())

// // // function User(firstName, lastName, avatar) {
// // //    this.firstName = firstName;
// // //    this.lastName = lastName;
// // //    this.avatar = avatar;

// // //    this.getName = function () {
// // //       return `${this.firstName} ${this.lastName}`;
// // //       // this.firstName + ' ' + this.lastName

// // //    };
// // // }

// // // User.prototype.className = 'F8';
// // // User.prototype.getClassName = function () {
// // //    return this.className
// // // }



// // // var author = new User("Thang", "Duc", "Avatar");
// // // var user = new User("Muoi", "Nguyen", "Avatar");

// // // author.title = "Chia sẻ dạo tại F8";
// // // user.comments = " đẹp trai";
// // // console.log(author.getClassName());
// // // console.log(author);

// // // var date = new  Date();



// // // var thanh_cong = Math.floor(Math.random() * 10)

// // // if (thanh_cong < 2) {
// // //    console.log('Dap do thanh cong')
// // // }
// // // console.log(Math.floor(Math.random() * 10));

// // // function getRamdomItem (array) {
// // //    return array[Math.floor(Math.random() * array.length)]
// // // }

// // // array = [
// // //    1, 2, 3, 4, 5, 6, 7, 8,9,10,11
// // // ]

// // // console.log(getRamdomItem(array))



// // // if (date === 2) {
// // //    console.log('Hom nay la thu 2')
// // // } else if (date === 3) {
// // //    console.log('Hom nay la thu 3')
// // // } else if (date === 4) {
// // //    console.log('Hom nay la thu 4')
// // // }
// // // var date = 10
// // // switch (date) {
// // //    case 2:

// // //    case 3: // Su dung toan tu "===" de so sanh

// // //    case 4:
// // //       console.log('Hom nay la thu 4')
// // //       break;
// // //    case 5:
// // //       console.log('Hom nay la thu 5')
// // //       break;
// // //    case 6:
// // //       console.log('Hom nay la thu 6')
// // //       break;
// // //    case 7:
// // //       console.log('Hom nay la thu 7')
// // //       break;
// // //    case 8:
// // //       console.log('Hom nay la Chu Nhat')
// // //    default:
// // //       console.log('Hom nay ')

// // // }

// // // var a = 2
// // // if (a !== '2') {
// // //    console.log('Thang')
// // // }
// // // function run(fruits) {
// // //    var result;

// // // switch (fruits) {
// // //     case   "Banana":
// // //            result = "This is a Banana";
// // //            break
// // //      case  "Apple":
// // //            result = "This is an Apple";
// // //            break;
// // //        default:
// // //            result = "No fruits";

// // //    }

// // //    return console.log(result);
// // // }

// // // run("Banana")
// // // function getRandNumbers(min, max, length) {
// // //    var a = []
// // //    for (let i = 0; i < length; i++) {
// // //       a[i] = Math.random() * (max - min) + min

// // //    }

// // //    console.log(a)
// // // }

// // // getRandNumbers(10, 30, 10)

// // function getTotal(arr) {
// //    var sum = 0;
// //    for (var i = 0; i < arr.length ; i++) {
// //        sum += arr[i]
// //    }
// //    return sum
// // }
// // var arr = [1, 2, 3, 4, 5]
// // getTotal(arr); 

// var myInfo = 'Toan'



// for (const key in myInfo) {
//    console.log(key);
// }
// function run(object) {
//    var arr = []
//    for (const key in object) {
//       arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//    } 

//    return arr


// }


// var object1 = {
//    name: 'Toan',
// }
// console.log(object1.name);
// console.log(run({ name: 'Nguyen Van A', age: 16 }));


// // var languages =   {
// //    name: 'THang',
// //    age: 16,
// // }

// // console.log()


// // for ( var value of Object.keys(languages) ) {
// //    console.log(languages[value]);

// // }

// // var i = 1

// // do {
// //    console.log(i)
// //    i++
// // } while (i <= 10);


// // var array = [
// //    [1,2],
// //    [3,4],
// //    [5,6],
// // ];


// // for ( var i = 0; i < array.length; i++) {
// //    for (let j = 0; j < array[i].length; j++) {
// //       console.log(array[i][j]);

// //    }

// // }


// // function loop(start, end, cb) {
// //    if (start < end) {
// //       cb(start)
// //       return loop(start + 1, end, cb)
// //    }
// // }


// // var arr = [
// //    'a', 'b', 'c'
// // ]

// // loop(0, arr.length, function (index) {
// //    console.log(arr[index])
// // })

// // function factorial(a) {
// //    sum = 1
// //    if (a > 1) {
// //       sum *= factorial(a - 1)

// //    } else {
// //       return 1;
// //    }
// // }

// // function giaiThua(a) {
// //    sum = 1
// //    for (var i = a; i > 1; i--) {
// //       sum *= i;
// //    }
// //    return sum;
// // }

// // console.log(factorial(3))

// // for (var i = 0; i < arr.length; i++) {

// // }

// // function factorial(a) {
// //    if (a > 0) {
// //       return a * factorial(a - 1);
// //    }
// //    return 1;

// // }


// // var array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
// // var newArray = [];

// // for (var i = 0; i < array.length; i++) {
// //     if (array.indexOf(array[i], i + 1) === -1) {
// //         newArray.push(array[i]);
// //     } else {
// //         continue;
// //     }
// // }

// // console.log(newArray);

// // var arr = [
// //    'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
// // ]

// // function filter(arr) {

// // }



// // arr.splice(0,1)

// // console.log(arr);

// // var arr = ['a', 'b', 'c', 'd', 'e', 'a', 'a', 'c', 'b'];
// // //output: ['a', 'b', 'c', 'd', 'e']
// // var newArr = [];
// // var inewArray = 0;
// // function loop(inewArray, start, end, callback) {
// //     if (start < end) {
// //         start = callback(start);
// //         return loop(inewArray, start + 1, arr.length, callback);
// //     }
// //     console.log(newArr);
// // }

// // loop(inewArray, 0, arr.length, function(index) {
// //     if (newArr.indexOf(arr[index]) === -1) {
// //         newArr[inewArray] = arr[index];
// //         inewArray += 1;
// //         return index;
// //     } 
// // });



//  */


// // var courses = [
// //    {
// //       id: 1,
// //       name: 'Javascript',
// //       coin: 40,
// //    },
// //    {
// //       id: 2,
// //       name: 'Html',
// //       coin: 0,
// //    },
// //    {
// //       id: 3,
// //       name: 'PHP',
// //       coin: 250,
// //    },
// //    {
// //       id: 4,
// //       name: 'Ruby',
// //       coin: 0,
// //    },
// //    {
// //       id: 5,
// //       name: 'Html',
// //       coin: 50,
// //    },
// //    {
// //       id: 6,
// //       name: 'Html',
// //       coin: 500,
// //    },
// // ]

// // var isFree = courses.filter(function(course, index) {
// //    console.log(index)

// //    return course.name === 'Html';
// // })

// // console.log(isFree)



// // function getMostFavoriteSport (a) {
// //    return   a.filter(function(sport) {

// //       return   (sport.like > 5)
// //     })

// // }

// // function getMostFavoriteSport (a) {
// //     a.filter(function(sport) {
// //         return sport.like > 5
// //     })

// //     return 15

// // }



// // // Kỳ vọng
// // console.log(getMostFavoriteSport(sports)) 
// // // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]




// // const sports = [
// //    {
// //        name: 'Bóng rổ',
// //        like: 6
// //    },
// //    {
// //        name: 'Bơi lội',
// //        like: 5
// //    },
// //    {
// //        name: 'Bóng đá',
// //        like: 10
// //    },
// // ]


// // function courseHandler(course) {
// //    // console.log(course)
// //    return `Khoa hoc: ${course.name}`
// // }


// // var newCourse = courses.map(  courseHandler)

// // console.log(newCourse)

// // function coinHandler(accumulator, currentValue, currentIndex, originArray)  {

// // }

// // var totalCoin = courses.reduce( coinHandler, 0)



// // var courses = [
// //    {
// //       id: 1,
// //       name: 'Javascript',
// //       coin: 30,
// //    },
// //    {
// //       id: 2,
// //       name: 'php',
// //       coin: 30,
// //    },
// //    {
// //       id: 3,
// //       name: 'ruby',
// //       coin: 30,

// //    },
// //    {
// //       id: 4,
// //       name: 'html',
// //       coin: 30,

// //    },
// // ]

// // var watchList = [
// //    {
// //       "Title": "Inception",
// //       "Year": "2010",
// //       "Rated": "PG-13",
// //       "Released": "16 Jul 2010",
// //       "Runtime": "148 min",
// //       "Genre": "Action, Adventure, Crime",
// //       "Director": "Christopher Nolan",
// //       "Writer": "Christopher Nolan",
// //       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// //       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// //       "Language": "English, Japanese, French",
// //       "Country": "USA, UK",
// //       "imdbRating": "8.8",
// //       "imdbVotes": "1,446,708",
// //       "imdbID": "tt1375666",
// //       "Type": "movie",
// //    },
// //    {
// //       "Title": "Interstellar",
// //       "Year": "2014",
// //       "Rated": "PG-13",
// //       "Released": "07 Nov 2014",
// //       "Runtime": "169 min",
// //       "Genre": "Adventure, Drama, Sci-Fi",
// //       "Director": "Christopher Nolan",
// //       "Writer": "Jonathan Nolan, Christopher Nolan",
// //       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// //       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// //       "Language": "English",
// //       "Country": "USA, UK",
// //       "imdbRating": "8.6",
// //       "imdbVotes": "910,366",
// //       "imdbID": "tt0816692",
// //       "Type": "movie",
// //    },
// //    {
// //       "Title": "The Dark Knight",
// //       "Year": "2008",
// //       "Rated": "PG-13",
// //       "Released": "18 Jul 2008",
// //       "Runtime": "152 min",
// //       "Genre": "Action, Adventure, Crime",
// //       "Director": "Christopher Nolan",
// //       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// //       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// //       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// //       "Language": "English, Mandarin",
// //       "Country": "USA, UK",
// //       "imdbRating": "9.0",
// //       "imdbVotes": "1,652,832",
// //       "imdbID": "tt0468569",
// //       "Type": "movie",
// //    },
// //    {
// //       "Title": "Batman Begins",
// //       "Year": "2005",
// //       "Rated": "PG-13",
// //       "Released": "15 Jun 2005",
// //       "Runtime": "140 min",
// //       "Genre": "Action, Adventure",
// //       "Director": "Christopher Nolan",
// //       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// //       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// //       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// //       "Language": "English, Urdu, Mandarin",
// //       "Country": "USA, UK",
// //       "imdbRating": "8.3",
// //       "imdbVotes": "972,584",
// //       "imdbID": "tt0372784",
// //       "Type": "movie",
// //    },
// //    {
// //       "Title": "Avatar",
// //       "Year": "2009",
// //       "Rated": "PG-13",
// //       "Released": "18 Dec 2009",
// //       "Runtime": "162 min",
// //       "Genre": "Action, Adventure, Fantasy",
// //       "Director": "James Cameron",
// //       "Writer": "James Cameron",
// //       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// //       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// //       "Language": "English, Spanish",
// //       "Country": "USA, UK",
// //       "imdbRating": "7.9",
// //       "imdbVotes": "876,575",
// //       "imdbID": "tt0499549",
// //       "Type": "movie",
// //    }
// // ];







// // function calculateRating(watchList) {

// //    function findDirector(firm) {
// //       return firm.Director == "Christopher Nolan"
// //    }

// //    const firms = watchList.filter(findDirector)


// //    const sumIDM = firms.reduce(function (previousValue, currentValue) {
// //       return previousValue + Number(currentValue.imdbRating)
// //    }, 0)

// //    return sumIDM / firms.length

// // }
// // console.log(calculateRating(watchList))
//  // Expected results
// //  console.log(calculateRating(watchList)); // Output: 8.675

// //Co truyen vao gia tri ban dau 
// // Array.prototype.reduce2 = function (callback, result) {
// //    let i = 0
// //    if(arguments.length < 2) {
// //       result = this[0]
// //       i = 1
// //    }
// //    for (; i < this.length; i++) {
// //       result = callback(result, this[i], i, this)
// //    }
// //    return result
// // }
// // const numbers = [1, 2, 3, 4, 5]

// // const result = numbers.reduce2((total, number, index, array) => {
// //    console.log(total, number,index,array)
// //    return total + number
// // }, 10)

// // console.log(result)





// // Expected results:
// // Expected results:
// // var arr = [
// //    ['name', 'Sơn Đặng'],
// //    ['age', 18],
// // ];
// // console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// // function arrToObj (arr)
// // {
// //    return arr.reduce((result, cur) => {
// //        result[cur[0]] = cur[1]
// //        return result
// //    }, {})
// // }


// // var courses = ["JS", 'PHP', 2, 'Dart', 1]
// // console.log(courses.includes('JS') )

// var courses = [
//    'JS',
//    'CSS',
//    'HTML'
// ]

// Array.prototype.map2 = function (callback) {
//    var output = [], arrLength = this.length;
//    for (var i = 0; i < arrLength; ++i) {
//       var result = callback(this[i], i)
//       output.push(result);
//    }
//    return output;
// }

// // var htmls = courses.map2(function (course) {
// //    return `<h2>${course}</h2>`
// // });

// // console.log(htmls.join(''));

// //filter2

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.prototype.filter2 = function (callback) {
//    var output = [], arrLength = this.length;
//    for (var i = 0; i < arrLength; i++) {
//       if (callback(this[i], i, this) === true) {
//          output.push(this[i]);
//       }
//    }
//    return output;
// }

// // let overNumber = numbers.filter2( n => n > 6);
// // console.log(overNumber)

// //every2

// Array.prototype.every2 = function (callback) {
//    var arrLength = this.length;
//    for (var i = 0; i < arrLength; i++) {
//       if (callback(this[i], i, this) === false) return false;
//    }
//    return true;
// }

// // let soDuong = numbers.every2( n => n > 1);
// // console.log(soDuong)

// //find2

// Array.prototype.find2 = function (callback) {
//    var arrLength = this.length;
//    for (var i = 0; i < arrLength; i++) {
//       if (callback(this[i], i, this) === true) {
//          return this[i]
//       }
//    }
//    return undefined; i
// }

// // let overNumber = numbers.find2(n => n > 4)
// // console.log(overNumber);

// //forEach2

// Array.prototype.forEach2 = function (callback) {
//    var arrLength = this.length;
//    for (var i = 0; i < arrLength; i++) {
//       callback(this[i], i, this);
//    }
//    
// }

// //  numbers.forEach2(n => console.log(n))

// //reduce2 

// Array.prototype.reduce2 = function (callback, value) {
//    var arrLength = this.length;
//    let i = 0
//    if (arguments.length < 2) {
//       value = this[0];
//       i = 1;
//    }

//    for (; i < arrLength; i++) {
//       value = callback(value, this[i], i, this);
//    }
//    return value;
// }

// // let sum = numbers.reduce2((total, number) => total + number, 0)

// // console.log(sum)

// //some2

// Array.prototype.some2 = function (callback) {
//    var arrLength = this.length;
//    for (var i = 0; i < arrLength; i++) {
//       if (callback(this[i], i, this) === true) {
//          return true
//       }
//    }
//    return false; i
// }

// // console.log(numbers.some2(n => n > 2));

// var promise = new Promise (
//     // Executor
//     function (resolve, reject) {
//         // Logic
//         // Thanh cong: resolve()
//         // That bai: reject()

//     }
// );

// var postApi =
//     'https://jsonplaceholder.typicode.com/users'
// fetch(postApi)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (posts) {
//         console.log(typeof posts)
//     })




// API
// /*


var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateFrom();
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourses(data) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };
    fetch(coursesApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Sau khi tạo khóa học, làm mới danh sách khóa học
            getCourses(renderCourses);
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map((course) => {
        return `
            <li class='course-item-${course.id}'>
                <h4>${course.title}</h4>
                <p>${course.desc}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
                <button onclick="handleUpdateCourse(${course.id})">Sua</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateFrom() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function (event) {
        event.preventDefault(); // Ngăn chặn mặc định hành vi của form
        var title = document.querySelector('input[name="title"]').value;
        var desc = document.querySelector('input[name="desc"]').value;
        var formData = {
            title: title,
            desc: desc
        }
        createCourses(formData);
    }
}


function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(coursesApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Sau khi xóa khóa học, làm mới danh sách khóa học
            getCourses(renderCourses);
        });
}

function handleUpdateCourse(id) {
    var createBtn = document.querySelector('#create');
    var options = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(coursesApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Sau khi cập nhật khóa học, làm mới danh sách khóa học
            getCourses(renderCourses);
        });
    createBtn.innerText = 'Luu'; 
}




