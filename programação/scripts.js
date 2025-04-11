console.log("Java Conectado!");

const search = document.getElementById("search");
const cityInput = document.getElementById("local");
const h1 = document.getElementById("id");
const img = document.getElementById("img");
const temptop = document.getElementById("temptop");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const umidade = document.getElementById("humidity");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.Value;
  const key = "2fbbd1f1ef92491b13726661ccc0982b";

  const response = await fetch(
    `https://api.apenweatgermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityName
    )}&appid=${key}&units=metric&lang=pt_br`
  );
  const data = await response.json();

  console.log(data);
};

search.addEventListen("submit", processar);
