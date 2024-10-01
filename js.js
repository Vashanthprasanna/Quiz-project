let ques = [
  {
    Ques: "What is HTML ? ",
    Opt_1: "Hyper Text Markup Language",
    Opt_2: "Home Test Markup Language",
    Opt_3: "Human Text Markup Language",
    Opt_4: "Hyper Testing Mark Language",
    Ans: 1,
  },
  {
    Ques: "What is CSS ? ",
    Opt_1: "Cascading Super Street",
    Opt_2: "Cast Style Sheet",
    Opt_3: "Cascading Style Sheet",
    Opt_4: "Casting Segment Sheet",
    Ans: 3,
  },
  {
    Ques: "How do you write \"Hello World\" in an alert box? ",
    Opt_1: "msg(\"Hello World\")",
    Opt_2: "msgBox(\"Hello World\")",
    Opt_3: "alertBox(\"Hello World\")",
    Opt_4: "alert(\"Hello World\")",
    Ans: 4,
  },
  {
    Ques: "What is LAN ? ",
    Opt_1: "Last Area Network",
    Opt_2: "Least Air Network",
    Opt_3: "Local Area Network",
    Opt_4: "Local Area Net",
    Ans: 3,
  },
  {
    Ques: "What is USB ? ",
    Opt_1: "Unified Segment Bus",
    Opt_2: "Unidentified Style Bus",
    Opt_3: "Universal Sheet Bus",
    Opt_4: "Universal Serial Bus",
    Ans: 4,
  },
];

var i = 0,
  k = 0;
var score = 0;
let selectedText = [];
let marked;
let rad = document.getElementsByName("radio");

// Display Block

function dis() {

  // Display in output

  document.getElementById("ques").innerHTML = ques[i].Ques;
  document.getElementById("opt1").innerHTML = ques[i].Opt_1;
  document.getElementById("opt2").innerHTML = ques[i].Opt_2;
  document.getElementById("opt3").innerHTML = ques[i].Opt_3;
  document.getElementById("opt4").innerHTML = ques[i].Opt_4;

  // Display Remaining questions

  document.getElementById("demo").innerHTML = i + 1 + " / " + ques.length;
}

// Next Block

function next() {
  // Ckeck options marked or Not

  for (let j = 0; j < rad.length; j++) {
    if (rad[j].checked) {
      selectedText[k++] = rad[j].value;
      marked = true;
    }
  }

  // If not marked it alert

  if (!marked) alert("Please choose any one option");
  else {
    // Points Go to next question

    i++;

    // Display Back button if it not in 1st question

    if (i > 0) document.getElementById("bck").style.visibility = "visible";

    // If quetion reaches last then it navigates to final page

    if (i == ques.length) final();

    // If it is last question Next button display as Submit

    if (i == ques.length - 1) {
      document.getElementById("nxt").innerHTML = "Submit";
      document.getElementById("nxt").style.backgroundColor = "#488aec";
    } else document.getElementById("nxt").innerHTML = "Next";

    // Calling display function to display questions in screen

    dis();

    // If already marked the choices it mark agains when we moves forward and backward else clear all choices

    if (selectedText[k] > 0) {
      rad[selectedText[k] - 1].checked = true;
    } else {
      for (let j = 0; j < rad.length; j++) {
        rad[j].checked = "";
      }
    }

    marked = false;

    // Display Remaining questions

    document.getElementById("demo").innerHTML = i + 1 + " / " + ques.length;
  }
}

// Back Block

function back() {
  // If prev questions already marked set the value in ans array

  for (let j = 0; j < rad.length; j++) {
    if (rad[j].checked) {
      selectedText[k] = rad[j].value;
    }
  }

  // Points for backward direction

  --k;

  // Displpay previous questions on screen when press back

  i--;

  // If it is last question Next button change as submit

  if (i == ques.length - 1) {
    document.getElementById("nxt").innerHTML = "Submit";
    document.getElementById("nxt").style.backgroundColor = "#488aec";
  } else document.getElementById("nxt").innerHTML = "Next";

  // Display questions on screen

  dis();

  // If already marked the choices it mark agains when we moves forward and backward

  for (let j = 0; j < rad.length; j++) {
    if (rad[j].value == selectedText[k]) rad[j].checked = true;
  }

  // Display Remaining questions

  document.getElementById("demo").innerHTML = i + 1 + " / " + ques.length;
}

// Result Block

function final() {
  // Check the Ans Array and ans one by one and checks the score
  for (let j = 0; j < ques.length; j++) {
    if (selectedText[j] == ques[j].Ans) score++;
  }

  document.getElementById("question").style.display = "none";
  document.getElementById("answer-sec").style.display = "none";
  document.getElementById("btn").style.display = "none";

  // Create element

  let ele = document.createElement("h2");
  let btn_parent = document.createElement("div");
  let btn = document.createElement("button");
  ele.setAttribute("id", "result");
  btn_parent.setAttribute("class", "d-flex justify-content-center m-4");
  btn.setAttribute("class", "btn btn-primary w-25");

  // Check and display the result

  if (score == ques.length)
    ele.innerHTML = "Congradulations , You got " + score + " Mark";
  else if (score == 0)
    ele.innerHTML = "Sorry , You got " + score + " Mark . Do Hard work ";
  else ele.innerHTML = "Good , You got " + score + " Mark . Keep it Up !";

  btn.innerHTML = "Back";
  document.getElementById("card").appendChild(ele);
  document.getElementById("card").appendChild(btn_parent).appendChild(btn);

  btn.addEventListener("click", () => {
    start();
  });
}

function start() {
  
  document.getElementById("card").style.display = "none";

  let start = document.createElement("button");

  start.setAttribute("class", "btn btn-primary w-25");

  start.innerHTML = "Start Quiz";

  document.getElementById("parent").appendChild(start);

  start.addEventListener("click", () => {
    document.getElementById("card").style.display = "block";
    document.getElementById("parent").removeChild(start);
    dis();
  });
}
