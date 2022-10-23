import axios from "axios";

export async function getIssLocationNow() {
  const instance = axios.create({
    baseURL: `http://api.open-notify.org/iss-now.json`,
    url: "",
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getPeopleAstros() {
  const instance = axios.create({
    baseURL: `http://api.open-notify.org/astros.json`,
    url: "",
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
