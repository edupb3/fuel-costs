const distanceDisplay = document.querySelector("#distance");
const amountDisplay = document.querySelector("#amount");
const consumptionDisplay = document.querySelector("#consumption");
const balanceDisplay = document.querySelector("#balance");
let input = document.querySelectorAll("input")

const handleFormSubmit = event => {
    event.preventDefault()
    const distance = distanceDisplay.value.trim();
    const amount = amountDisplay.value.trim();
    const consumption = consumptionDisplay.value.trim();
    const isSomeInputEmpty = (distance === '' || amount === '' || consumption ==='' )
    if(isSomeInputEmpty){
        return
    }
    const total = distance * amount / consumption
    balanceDisplay.innerHTML =`R$ ${total.toFixed(2)}`
}

input.forEach(item => {
    item.addEventListener('keyup', handleFormSubmit)
}) 

const json = [
    {
     "Estado": "ACRE",
     "Num_Postos": 36,
     "Preco_Medio": 7549,
     "Desvio_Padrao": "0,167",
     "Preco_Minimo": 7340,
     "Preco_Maximo": 7900
    },
    {
     "Estado": "ALAGOAS",
     "Num_Postos": 51,
     "Preco_Medio": 7242,
     "Desvio_Padrao": "0,317",
     "Preco_Minimo": 6899,
     "Preco_Maximo": 8090
    },
    {
     "Estado": "AMAPA",
     "Num_Postos": 19,
     "Preco_Medio": 6279,
     "Desvio_Padrao": "0,107",
     "Preco_Minimo": 6160,
     "Preco_Maximo": 6580
    },
    {
     "Estado": "AMAZONAS",
     "Num_Postos": 51,
     "Preco_Medio": 7344,
     "Desvio_Padrao": "0,299",
     "Preco_Minimo": 7270,
     "Preco_Maximo": 7990
    },
    {
     "Estado": "BAHIA",
     "Num_Postos": 213,
     "Preco_Medio": 7524,
     "Desvio_Padrao": "0,281",
     "Preco_Minimo": 7230,
     "Preco_Maximo": 8200
    },
    {
     "Estado": "CEARA",
     "Num_Postos": 168,
     "Preco_Medio": 7640,
     "Desvio_Padrao": "0,236",
     "Preco_Minimo": 6990,
     "Preco_Maximo": 8200
    },
    {
     "Estado": "DISTRITO FEDERAL",
     "Num_Postos": 47,
     "Preco_Medio": 7412,
     "Desvio_Padrao": "0,207",
     "Preco_Minimo": 6699,
     "Preco_Maximo": 7799
    },
    {
     "Estado": "ESPIRITO SANTO",
     "Num_Postos": 99,
     "Preco_Medio": 7380,
     "Desvio_Padrao": "0,117",
     "Preco_Minimo": 6990,
     "Preco_Maximo": 7740
    },
    {
     "Estado": "GOIAS",
     "Num_Postos": 193,
     "Preco_Medio": 7457,
     "Desvio_Padrao": "0,219",
     "Preco_Minimo": 6990,
     "Preco_Maximo": 7999
    },
    {
     "Estado": "MARANHAO",
     "Num_Postos": 76,
     "Preco_Medio": 7342,
     "Desvio_Padrao": "0,260",
     "Preco_Minimo": 7090,
     "Preco_Maximo": 8390
    },
    {
     "Estado": "MATO GROSSO",
     "Num_Postos": 119,
     "Preco_Medio": 7058,
     "Desvio_Padrao": "0,253",
     "Preco_Minimo": 6379,
     "Preco_Maximo": 7855
    },
    {
     "Estado": "MATO GROSSO DO SUL",
     "Num_Postos": 80,
     "Preco_Medio": 7035,
     "Desvio_Padrao": "0,309",
     "Preco_Minimo": 6699,
     "Preco_Maximo": 7796
    },
    {
     "Estado": "MINAS GERAIS",
     "Num_Postos": 480,
     "Preco_Medio": 7538,
     "Desvio_Padrao": "0,196",
     "Preco_Minimo": 6599,
     "Preco_Maximo": 8199
    },
    {
     "Estado": "PARA",
     "Num_Postos": 114,
     "Preco_Medio": 7450,
     "Desvio_Padrao": "0,277",
     "Preco_Minimo": 7070,
     "Preco_Maximo": 8100
    },
    {
     "Estado": "PARAIBA",
     "Num_Postos": 63,
     "Preco_Medio": 7036,
     "Desvio_Padrao": "0,213",
     "Preco_Minimo": 6799,
     "Preco_Maximo": 7599
    },
    {
     "Estado": "PARANA",
     "Num_Postos": 270,
     "Preco_Medio": 7264,
     "Desvio_Padrao": "0,198",
     "Preco_Minimo": 6640,
     "Preco_Maximo": 8290
    },
    {
     "Estado": "PERNAMBUCO",
     "Num_Postos": 168,
     "Preco_Medio": 7298,
     "Desvio_Padrao": "0,298",
     "Preco_Minimo": 6269,
     "Preco_Maximo": 8290
    },
    {
     "Estado": "PIAUI",
     "Num_Postos": 61,
     "Preco_Medio": 7992,
     "Desvio_Padrao": "0,294",
     "Preco_Minimo": 6999,
     "Preco_Maximo": 8297
    },
    {
     "Estado": "RIO DE JANEIRO",
     "Num_Postos": 314,
     "Preco_Medio": 7731,
     "Desvio_Padrao": "0,297",
     "Preco_Minimo": 6999,
     "Preco_Maximo": 8399
    },
    {
     "Estado": "RIO GRANDE DO NORTE",
     "Num_Postos": 58,
     "Preco_Medio": 7921,
     "Desvio_Padrao": "0,195",
     "Preco_Minimo": 6840,
     "Preco_Maximo": 7990
    },
    {
     "Estado": "RIO GRANDE DO SUL",
     "Num_Postos": 342,
     "Preco_Medio": 6975,
     "Desvio_Padrao": "0,274",
     "Preco_Minimo": 6469,
     "Preco_Maximo": 7990
    },
    {
     "Estado": "RONDONIA",
     "Num_Postos": 48,
     "Preco_Medio": 7422,
     "Desvio_Padrao": "0,177",
     "Preco_Minimo": 7190,
     "Preco_Maximo": 7790
    },
    {
     "Estado": "RORAIMA",
     "Num_Postos": 13,
     "Preco_Medio": 7101,
     "Desvio_Padrao": "0,018",
     "Preco_Minimo": 7090,
     "Preco_Maximo": 7150
    },
    {
     "Estado": "SANTA CATARINA",
     "Num_Postos": 184,
     "Preco_Medio": 7165,
     "Desvio_Padrao": "0,257",
     "Preco_Minimo": 6259,
     "Preco_Maximo": 7729
    },
    {
     "Estado": "SAO PAULO",
     "Num_Postos": 1433,
     "Preco_Medio": 6867,
     "Desvio_Padrao": "0,263",
     "Preco_Minimo": 5899,
     "Preco_Maximo": 8299
    },
    {
     "Estado": "SERGIPE",
     "Num_Postos": 38,
     "Preco_Medio": 7403,
     "Desvio_Padrao": "0,171",
     "Preco_Minimo": 7149,
     "Preco_Maximo": 7889
    },
    {
     "Estado": "TOCANTINS",
     "Num_Postos": 36,
     "Preco_Medio": 7469,
     "Desvio_Padrao": "0,183",
     "Preco_Minimo": 6850,
     "Preco_Maximo": 7799
    }
   ];

function makeTable(credito, arr, target) {
    target.innerHTML = '';
	var data = arr.filter(imo => imo.credito == credito)[0];
	if (!data) return;
	Object.keys(data).filter(k => k.match(/\d+\s\parcelas/)).forEach(k => {
		var tr = document.createElement('tr');
		[k, '<span>Mais info...</span>', data[k]].forEach(content => {
				var td = document.createElement('td');
				td.innerHTML = content;
				tr.appendChild(td);
		});
		target.appendChild(tr);
	});
}

makeTable('R$200.000,00', json, document.querySelector('table'));
