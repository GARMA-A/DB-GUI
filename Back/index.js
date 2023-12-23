const { response } = require("express");

document.addEventListener('DOMContentLoaded',()=>
{
       fetch('http://localhost:5000/getAll')
              .then(response => response.json())
              .then(data => console.log(data));
       loodHtmlTable([]);
          
});
       
function loodHtmlTable(data)

{
       const table = document.querySelector('table tbody');
       if (data.length === 0)
       {
              table.innerHTML = "<tr> <td class 'no-data' colspan='5>NO Data </td></tr>";
              
              
       }

}