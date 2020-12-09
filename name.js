var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

function fullNamelist() {

  var text = "";
  var i;
  var j;

  for(i = 0; i < people.length; i++)
  {
    text += i+1 + "-";
    for(j = 0; j < 3; j++)
    {
      text += people[i].name[j] + " ";
    }
    text += "<br>";
  }
  document.getElementById("solution").innerHTML = text;
}

function getAgefunction() {

  var getname = document.getElementById("name-input").value;
  var checkname;
  var getage;
  var i;
  var j;

  for(i = 0; i < people.length; i++)
  {
    for(j = 0; j < 3; j++)
    {
      checkname = people[i].name[j];
      if(getname == checkname)
      {
        getage = people[i].age;
        document.getElementById("solution1").innerHTML = getage;
      }
    }
  }
}
