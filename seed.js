// 'use strict';
// var Promise = require('bluebird');
// var db = require('./server/db');
// var Student = require('./server/db/models/student');
// var Campus = require('./server/db/models/campus');

// Campus.hasMany(Student, {as: 'Students'})


// const campuses = [{
//   name: 'Mars',
//   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/3D_Mars.png',
//   description: 'Our Mars campus is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally. The campus, which is based in Cambridge and Boston, Mars, has an enrollment of over 20,000 degree candidates, including secondary and elementary students. Mars has more than 360,000 alumni around the world.'
// }, {
//   name: 'Terra',
//   imageUrl: 'http://castlerockwatercompany.com/wp-content/uploads/2016/04/Earth-1024x1024.png',
//   description: 'For more than 2500 years, Terra has been a leader in secondary education in the nation and around the world. At the core of our wide range of academic inquiry is the commitment to attract and engage the best minds in pursuit of greater human understanding, pioneering new discoveries and service to society.'
// }, {
//   name: 'Luna',
//   imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81FCBJUvrbL.png',
//   description: 'Luna  is one of the world\'s most important centers of research and at the same time a distinctive and distinguished learning environment for undergraduates and graduate students in many scholarly and professional fields. The University recognizes the importance of its location in New York City and seeks to link its research and teaching to the vast resources of a great metropolis. It seeks to attract a diverse and international faculty and student body, to support research and teaching on global issues, and to create academic relationships with many countries and regions. It expects all areas of the university to advance knowledge and learning at the highest level and to convey the products of its efforts to the world.'
// }, {
//   name: 'Titan',
//   imageUrl: 'http://www.spiritofexploration.com/images/saturn5.png',
//   description: 'Titan combines innovative teaching and pioneering research in a highly collaborative environment that transcends traditional academic boundaries. It provides students and faculty exceptional opportunities for intellectual, personal and professional growth in three richly unique settings: Chicago, Evanston and Doha, Qatar.'
// }, {
//   name: 'Hoth',
//   imageUrl: 'http://www.swcommander.info/~swc/wiki/images/c/ca/Hoth.png',
//   description: 'Despite its year-round freezing temperatures and bands of marauding camel-like tanks, Hoth has proven the ideal environment for a force-centric education. With an emphasis on courses covering survival skills and telepathy, Margaret Hamilton\'s Hoth campus provides unique educational opportunities for gifted children.'
// }]


// const students = [
//   { firstName: 'Erik', lastName: 'Haggenjos', email: 'erik@agati.com', gpa: 3.87, campusId: 1 },
//   { firstName: 'Viviana', lastName: 'Haggenjos', email: 'vivi@agati.com', gpa: 3.97, campusId: 2 },
//   { firstName: 'Josie', lastName: 'Haggenjos', email: 'josie@agati.com', gpa: 3.67, campusId: 3 },
//   { firstName: 'Isa', lastName: 'Rossellini-Haggenjos', email: 'isa@agai.com', gpa: 3.87, campusId: 4 },
//   { firstName: 'Lucky', lastName: 'Luciano', email: 'llucy@oops.com', gpa: 1.67, campusId: 5 },
//   { firstName: 'Erik', lastName: 'Princeton', email: 'erik@goog.com', gpa: 3.17, campusId: 1 },
//   { firstName: 'Mateo', lastName: 'Carrera-Napleton', email: 'mateo@mag.edu', gpa: 3.87, campusId: 2 },
//   { firstName: 'Sam', lastName: 'Carrera-Napleton', email: 'sam@mag.edu', gpa: 3.87, campusId: 3 },
//   { firstName: 'Carolina', lastName: 'Carrera-Napleton', email: 'caro@mag.edu', gpa: 3.99, campusId: 4},
//   { firstName: 'Clark', lastName: 'Gable', email: 'Clark@movie.mov', gpa: 3.47, campusId: 5 },
//   { firstName: 'Anders', lastName: 'Berkshire', email: 'anders@mag.com', gpa: 3.87, campusId: 1 },
//   { firstName: 'George', lastName: 'Kysiak', email: 'Georg@ie.com', gpa: 3.87, campusId: 2 },
//   { firstName: 'Ryan', lastName: 'Kysiak', email: 'ry@ky.com', gpa: 3.99, campusId: 3 },
//   { firstName: 'Peter', lastName: 'Napes', email: 'pete@owie.com', gpa: 2.33, campusId: 4 },
//   { firstName: 'Christopher', lastName: 'Napes', email: 'baby@chris.com', gpa: 3.52, campusId: 5 },
//   { firstName: 'Gus', lastName: 'Kiddo', email: 'gus@agati.com', gpa: 1.75, campusId: 1 },
//   { firstName: 'Erika', lastName: 'Badu', email: 'erika@sing.com', gpa: 2.93, campusId: 2 }
// ];

// const seed = () =>
//   Promise.all(campuses.map(campus =>
//     Campus.create(campus))
//   )
//   .then(() =>
//   Promise.all(students.map(student =>
//     Student.create(student))
//   )
// );

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };

// main();
