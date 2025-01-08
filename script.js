const select = document.querySelector("#country");
const tel = document.querySelector("#phone");
const btn = document.querySelector("#openW");
const defaultCountry = "504";

const data = {
    "Estados Unidos": "+1",
    "Canadá": "+1",
    "México": "+52",
    "Guatemala": "+502",
    "Belice": "+501",
    "El Salvador": "+503",
    "Honduras": "+504",
    "Nicaragua": "+505",
    "Costa Rica": "+506",
    "Panamá": "+507",
    "Cuba": "+53",
    "República Dominicana": "+1-809",
    "Puerto Rico": "+1-787",
    "Jamaica": "+1-876",
    "Trinidad y Tobago": "+1-868",
    "Bahamas": "+1-242",
    "Barbados": "+1-246",
    "San Vicente y las Granadinas": "+1-784",
    "Grenada": "+1-473",
    "Santa Lucía": "+1-758",
    "Antigua y Barbuda": "+1-268",
    "Dominica": "+1-767",
    "Haití": "+509",
    "Brasil": "+55",
    "Argentina": "+54",
    "Chile": "+56",
    "Uruguay": "+598",
    "Paraguay": "+595",
    "Bolivia": "+591",
    "Perú": "+51",
    "Ecuador": "+593",
    "Colombia": "+57",
    "Venezuela": "+58",
    "Guyana": "+592",
    "Surinam": "+597",
    "España": "+34",
}

for (let item in data) {
    const option = document.createElement("option");
    option.text = `(${data[item]}) ${item}`;
    option.value = data[item].slice(1);
    select.add(option);
}

select.value = defaultCountry;

btn.onclick = () => {
    const url = `https://api.whatsapp.com/send?phone=${select.value}${tel.value}`;
    window.open(url, "_blank");
}