let inputBox;
let sentiment;
let statusEl;
let submitBtn;
let sentimRes;

function setup() {
  noCanvas();
  // init sentiment (trained on Movie Review dataset)
  sentiment = ml5.sentiment("movieReviews", modelReady);

  // Setup
  statusEl = createP("Loading Model... ⏳");
  inputBox = createInput(
    "This project has been made in HackNJIT 2021. And the best part is that it works!"
  );
  inputBox.attribute("size", "75");
  submitBtn = createButton("Submit");
  // document.getElementById("Submit").addEventListener("click", uploadToIpfs);

  sentimRes = createP("Sentiment score:");

  // Predict
  submitBtn.mousePressed(getSentiment);
}

// convert string to file

// document.getElementById('submitBtn').addEventListener('change', readFileAsString)
// function readFileAsString() {
//     var files = this.files;
//     if (files.length === 0) {
//         console.log('No file is selected');
//         return;
//     }

//     var reader = new FileReader();
//     reader.onload = function(event) {
//         // console.log('File content:', event.target.result); // Debug
//     };
//     reader.readAsText(files[0]);
// }

function getSentiment() {
  // userInput value
  const text = inputBox.value();

  // make the prediction
  const prediction = sentiment.predict(text);

  // display sentiment result
  sentimRes.html("Sentiment score: " + prediction.score);
  // display visual sentiment result
  if (prediction.score > 0.4 && prediction.score < 0.599) {
    createP("Neutral 😐");
  }else if (prediction.score > 0.6) {
    createP("Positive 👍");
  }
  else {
    createP("Negative 👎");
  }
}

// Debug

function modelReady() {
  // model ready
  statusEl.html("Model loaded! 💡");
}

// other CORS issue

// function uploadToIpfs(data) {
//   const body = new FormData();
//   body.append(
//     "file",
//     new Blob([JSON.stringify(data, null, 2)], {
//       type: "application/json"
//     }),
//     "@"
//   );

//   fetch("https://cloudflare-ipfs.com/ipfs:5001/api/v0/add?pin=false", {
//     body,
//     method: "POST"
//   })
//     .then(res => res.json())
//     .then(({ Hash }) => Hash)
//     .then(console.log)
//     .catch(console.log);
// }


