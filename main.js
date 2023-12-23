const ShowBtn = document.querySelector(".ShowBtn");
const DeleteBtn = document.querySelector(".DeleteBtn");
const EditBtn = document.querySelector(".EditBtn");
const startBox = document.querySelector(".box");
const backButton = document.querySelector(".backbtn");
const showBox = document.querySelector(".showBox");
const txt = document.querySelector(".txt");
const Dbtn1 = document.getElementById("shd1");
const Dbtn2 = document.getElementById("shd2");
const inputDeleteBtn1 = document.getElementById("inDB1");
const inputDeleteBtn2 = document.getElementById("inDB2");
const txtInputDeleteBtn1 = document.getElementById("txtinDB1");
const txtInputDeleteBtn2 = document.getElementById("txtinDB2");
const confirmDelete = document.getElementById("confirm");
const insertTxt = document.getElementById("txtinDB3");
const insertinput = document.getElementById("inDB3");










ShowBtn.addEventListener("click", () => {
    startBox.style.display = "none";
    startBox.style.position = "absolute";
    showBox.style.display = "grid";
       showBox.style.position = "relative";
    txt.innerHTML = "Show Data Base";
    Dbtn2.style.display = "none";
    Dbtn1.style.display = "none";
       txtInputDeleteBtn1.style.display = "inline";
       txtInputDeleteBtn1.innerHTML = "Search for table";
            inputDeleteBtn1.style.display = "none";
            txtInputDeleteBtn2.style.display = "none";
        inputDeleteBtn2.style.display = "inline";
        confirmDelete.style.display = "inline";
        confirmDelete.innerHTML = "Search";
});

DeleteBtn.addEventListener("click", () => {
     txt.innerHTML = "Delete Data Base";
    startBox.style.display = "none";
       startBox.style.position = "absolute";
         showBox.style.display = "grid";
       showBox.style.position = "relative";
    txt.innerHTML = "Delete Data Base";
      Dbtn1.innerHTML = "Delete Column";
        Dbtn2.innerHTML = "Delete Table";
    Dbtn1.addEventListener("click", () => {
        Dbtn1.style.display = "none";
        Dbtn2.style.display = "none";
        txtInputDeleteBtn1.style.display = "inline";
        txtInputDeleteBtn2.style.display = "inline";
        inputDeleteBtn2.style.display = "inline";
        inputDeleteBtn1.style.display = "inline";
        confirmDelete.style.display = "inline";
        confirmDelete.innerHTML = "Delete Column";
           insertTxt.style.display = "none";
        insertinput.style.display = "none";
        // ***************************************
    confirmDelete.addEventListener("click", ()=>
    {
        
    });
        // ***************************************
    

    });

        Dbtn2.addEventListener("click", () => {
        Dbtn1.style.display = "none";
        Dbtn2.style.display = "none";
        txtInputDeleteBtn1.style.display = "inline";
            inputDeleteBtn1.style.display = "none";
            txtInputDeleteBtn2.style.display = "none";
        inputDeleteBtn2.style.display = "inline";
        confirmDelete.style.display = "inline";
            confirmDelete.innerHTML = "Delete Table";
               insertTxt.style.display = "none";
        insertinput.style.display = "none";
            // ***************************************
        confirmDelete.addEventListener("click", ()=>
       {
       
        });
            // ***************************************

    });
     Dbtn2.addEventListener("click", () => {
           Dbtn1.style.display = "none";
         Dbtn2.style.display = "none";
    

      });
});

EditBtn.addEventListener("click", () => {
    startBox.style.display = "none";
       startBox.style.position = "absolute";
            showBox.style.display = "grid";
       showBox.style.position = "relative";
    txt.innerHTML = "Edit Data Base";
     Dbtn1.innerHTML = "Insert Data";
    Dbtn2.innerHTML = "Update Data";
    Dbtn2.addEventListener("click", () =>
    {
        txt.innerHTML = "Update Data Base";
        Dbtn1.style.display = "none";
        Dbtn2.style.display = "none";
         insertTxt.style.display = "inline";
        insertinput.style.display = "inline";
          insertTxt.innerHTML = "Update Value";
      
        txtInputDeleteBtn1.style.display = "inline";
        txtInputDeleteBtn2.style.display = "inline";
        inputDeleteBtn2.style.display = "inline";
        inputDeleteBtn1.style.display = "inline";
        confirmDelete.style.display = "inline";
         confirmDelete.innerHTML = "Update";
    });
    
    Dbtn1.addEventListener("click", () =>
    {
        txt.innerHTML = "Insert to Data Base";
        insertTxt.style.display = "inline";
        insertinput.style.display = "inline";

       insertTxt.innerHTML= "Insert value";
        insertinput.innerHTML = "Defult value";


        Dbtn1.style.display = "none";
        Dbtn2.style.display = "none";
        txtInputDeleteBtn1.style.display = "inline";
        txtInputDeleteBtn2.style.display = "inline";
        inputDeleteBtn2.style.display = "inline";
        inputDeleteBtn1.style.display = "inline";
        confirmDelete.style.display = "inline";
        confirmDelete.innerHTML = "Insert";
    });
  
       
});

backButton.addEventListener("click", () => {
    showBox.style.display = "none";
    showBox.style.position = "absolute"; 
    startBox.style.display = "grid";
    startBox.style.position = "relative";  
    Dbtn1.style.display = "inline";
    Dbtn2.style.display = "inline";
     txtInputDeleteBtn1.style.display = "none";
        txtInputDeleteBtn2.style.display = "none";
        inputDeleteBtn2.style.display = "none";
    inputDeleteBtn1.style.display = "none";
    confirmDelete.style.display = "none";
    insertTxt.style.display = "none";
        insertinput.style.display = "none";
});


