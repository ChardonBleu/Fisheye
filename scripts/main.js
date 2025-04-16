import displayData from "./pages/index.js";

async function getDatas() {
    const response =  await fetch('../data/photographers.json')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    } else {
        throw new Error('HTTP-Error: ' + response.status)
    }
}

async function init() {
  const { photographers, media } = await getDatas();
  console.log(photographers)
  console.log(media)
  displayData(photographers);
}

init();