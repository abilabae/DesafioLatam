const arrayDivisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]


const InputConvertir = document.getElementById("montoAConvertir");
const SelectDivisas = document.getElementById("selectDivisa");
const buttonConvert = document.getElementById("convertirDivisa");
const TextResultado = document.getElementById("resultado");
const chartContainer = document.getElementById("chartContainer");

function createChart(dataObject){
    chartContainer.innerHTML='<canvas id="chart"></canvas>'
    canvas=document.getElementById("chart")

    const data={
        type:"line",
        data:{
            labels:dataObject.dates,
            datasets:[
                {
                    label:'Ultimos 10 valores',
                    data: dataObject.data,
                    fill: false,
                    borderColor:"red",
                    tension:0.1
                }
            ]
        }
    }

    new Chart(canvas,data)
}

async function convertMoney(){
   try {

        divisa=SelectDivisas.value 
        result= await fetch(`https://mindicador.cl/api/${divisa}`)
        resultJson= await result.json()
        console.log(resultJson)
        divisaCLP=resultJson.serie[0].valor
        convertCLP= +InputConvertir.value

        console.log(divisaCLP, convertCLP)

        TextResultado.innerHTML= (convertCLP/divisaCLP).toFixed(2)

        const lastDays= {}

        lastDays.data=resultJson.serie.slice(0,10).map(val => val.valor)
        lastDays.dates=resultJson.serie.slice(0,10).map(val=> dayjs(val.fecha).format('DD/MM/YYYY')).reverse()

        createChart(lastDays)

        
        
       
    } catch (error) {
    
   } 
}


selectHTML= SelectDivisas.innerHTML

arrayDivisas.forEach(val=> selectHTML +=`
    <option value=${val}>${val}</option>

`)

SelectDivisas.innerHTML=selectHTML

buttonConvert.addEventListener("click", convertMoney)


