//1. 
const  arr = ['1', '2', '3', '4'];

//2.

const result = arr.find((item) => item ==='3');
console.log(result);

const peopleList = [
    {
      name: 'Max',
      age: 25,
      id: 1,
    },
    {
      name: 'Nik',
      age: 30,
      id: 3,
    },
    {
      name: 'Jack',
      age: 32,
      id: 4
    },
    {
      name: 'Harry',
      age: 10,
      id: 5
    }
  ];
  let result2 = peopleList.filter(item => item.id > 2);
console.log(result2);


const getData = async() => {

        const res = await data.json();
        console.log(res);
        const entries = res.results.filter((item) => item.id > 5 && item.id < 20);
//3.
console.log(entries);
    } catch (error) {
    console.log(error);
    }
//4. 
const obj = {
    name: 'Jacob',
    age: 20,
    id: 1
  };
