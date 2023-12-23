
document.addEventListener('DOMContentLoaded',async()=>
{
       console.log("loaded")


       await fetch('http://127.0.0.1:5000/getAll').then(data=>
       data.json().then(data=>console.log(data.data.recordset)));
       loodHtmlTable([]);
          

       // await fetch('http://127.0.0.1:5000/insert',{
       //        headers: {
       //               "Content-Type": "application/json",
       //               // 'Content-Type': 'application/x-www-form-urlencoded',
       //             },
       //        method:'POST',
       //        body:JSON.stringify({"name":"Yaser"}),

       
       // })

       await fetch('http://127.0.0.1:5000/search',{
              headers: {
                     "Content-Type": "application/json",
                     // 'Content-Type': 'application/x-www-form-urlencoded',
                   },
              method:'POST',
              body:JSON.stringify({"name":"girges"}),

       
       }).then(data=>
              data.json().then(data=>console.log(data.data.recordset)));



       // await fetch('http://127.0.0.1:5000/delete',{
       //        headers: {
       //               "Content-Type": "application/json",
       //               // 'Content-Type': 'application/x-www-form-urlencoded',
       //               },
       //        method:'POST',
       //        body:JSON.stringify({"id":10}),

       
       // })


             await fetch('http://127.0.0.1:5000/update',{
              headers: {
                     "Content-Type": "application/json",
                     // 'Content-Type': 'application/x-www-form-urlencoded',
                     },
              method:'POST',
              body:JSON.stringify({
                     "id":1,
                     "name":"Ahmed"
              }),

       
       })


});
       
function loodHtmlTable(data)

{
       const table = document.querySelector('table tbody');
       if (data.length === 0)
       {
              table.innerHTML = "<tr> <td class 'no-data' colspan='5>NO Data </td></tr>";
              
              
       }

}