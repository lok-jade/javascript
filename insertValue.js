var arr=[];
var arvalues=" ";
//alert(arr.length);
function arrayPush()
{
  firstValue=document.getElementById("arr").value;

  secondValue=document.getElementById("roll").value;
  var ob ={
    Name : firstValue,
    age :secondValue
  };
  arr.push(ob);
  //alert(arr.length);

  //alert(ob.Name);
  //alert(ob.age);
  }
  function display()
  {
   for(let i = 0;i<arr.length;i++)
    {
    var ta = document.getElementById("table");
    var trow = document.createElement('tr');
    trow.innerHTML ="<td style='border:1px solid black;'>"+arr[i].Name+"</td><td style='border:1px solid black;'>"+arr[i].age+"</td>";

    }
     ta.appendChild(trow);
   }
