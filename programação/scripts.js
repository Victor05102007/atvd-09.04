const search = document.getElementById("search");
const CityInput = document.getElementById("local");
const title = document.getElementById("title");
const img = document.getElementById("img");
const temp_value = document.getElementById("temp_value");
const temp_description = document.getElementById("temp_description");
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const papai = document.getElementById("papai");

const processar = async (event) => {
  event.preventDefault();

  try {
    const CityName = CityInput.value;
    const key = "98c4f758ddeca463e9d54b376eabe66b";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        CityName
      )}&appid=${key}&units=metric&lang=pt-br`
    );

    const data = await response.json();

    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    title.textContent = data.name;
    temp_max.innerHTML = `${data.main.temp_max}<sup>C°</sup>`;
    temp_min.innerHTML = `${data.main.temp_min}<sup>C°</sup>`;
    temp_value.textContent = data.main.temp;
    temp_description.textContent = data.weather[0].description;
    umidade.textContent = `${data.main.humidity}%`;
    vento.textContent = `${data.wind.speed}Km/h`;

    papai.style.visibility = "visible";
    papai.style.opacity = "1";
    papai.style.height = "350px";
    papai.style.overflow = "visible";

    console.log(data);
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

console.log(
  search,
  CityInput,
  title,
  img,
  temp_value,
  temp_description,
  temp_max,
  temp_min,
  umidade,
  vento
);

search.addEventListener("submit", processar);
