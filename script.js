const btn = document.querySelector('#btn');
const motivasi = document.getElementById('motivasi');

const apiKey = "HNdty58v0Yzpo4g024VWMg==7OBCTMCsyQbGe40N";

const options = {
  method : "GET",
  headers: {
    "X-Api-Key" : apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=success";

async function getMotivate() {

  try {
  motivasi.innerHTML = "Tunggu...";
  btn.disable = 'true';
  btn.innerHTML = 'loading...';
  const response = await fetch(apiURL, options);
  const data = await response.json();

  btn.disable = 'false';
  btn.innerHTML = 'Berikan Motivasi Hari Ini!';

  motivasi.innerHTML = data[0].quote;
  } catch (error) {
    motivasi.innerHTML = 'Coba lagi nanti!';
    btn.disable = 'false';
    btn.innerHTML = 'Berikan Motivasi Hari Ini!'
  }

  
};

btn.addEventListener("click", getMotivate);