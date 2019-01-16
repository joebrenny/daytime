//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamount").value;
    var serviceQual = document.getElementById("tip").value;
    var numOfPeople = document.getElementById("numofpeople").value;
  
    //validate input
    if (billAmount === "" || tip == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numofpeople === "" || numofpeople <= 1) {
      numOfPeople = 1;
      document.getElementById("tipoutput").style.display = "none";
      document.getElementById("tipoutput").style.display = "none";
    } else {
      document.getElementById("tipoutput").style.display = "block";
    }
  
    //Calculate tip
    var total = (billAmount * tip) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("tipoutput").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };





































/*document.getElementById("calbutton").addEventListener("calbutton",calculateTip);
    function calculateTip(){
        // defining vars
        let billAmount,tip,numofpeople;
        //getting the vaules from the input of the user 
        billAmount = document.getElementById("billAmount").vaule;
        console.log(billAmount);
        //var2
        tip = document.getElementById("tip").vaule;
        console.log(tip);
        //var3
        numofpeople = document.getElementById("numofpeople").value;
        console.log(numofpeople)
        //calculate the tip 
        total1=parse(billAmount)*(tip)/(numofpeople)
        //display tip







            var billAmount =
        document.getElementById("billAmount").value;
            var tip = 
        document.getElementById("tip").value;
        var numofpeople = 
        document.getElementById("numofpeople").value;

    //validate inputs
    if (billAmount===""  || tip==0){
        alert("Please enter values");
        return;
    }

//check to see if this input it empty or less than or = to 1

//calculate tip 
    var total = (billAmount*tip) / numofpeople;
    //round to two decimal places 
    total = Math.round (total * 100) / 100;
    //2 digets for cents 
    total = total.toFixed(2);
    // display tip 
    //document.getElementById("totalTrip").style.display=
    //"block";
    //document.getElementById("tip").innerHTML = total;
    document.getElementById("output").style.display = "block";
    document.getElementById("tipoutput").innerHTML = total;
    }
    document.getElementById("click").onclick=
    function(){

        calculateTip();
    };
    */



    




