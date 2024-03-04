// 1)
// estados
// Selecione

    document.getElementById('estados').onchange = function () {
        localStorage .setItem("estado", document.getElementById('estados').value);
    }
    if (localStorage.estado) {
        document.getElementById('estados').value = localStorage.estado;
    }

// 2)

    function adicionarDepoisZero(number) {
        if (number < 10) {
            return "0" + number.toString();
        }else {
            return number.toString();
        }
    }

    function format_date(timestamp) {
        var dia = adicionarDepoisZero(new Date(timestamp).getDate());
        var mes = adicionarDepoisZero(new Date(timestamp).getMonth() + 1);
        var ano = adicionarDepoisZero(new Date(timestamp).getFullYear());
        return dia + '-' + mes + '-' + ano;
    }

    document.getElementById('confirmar_pedido').onclick = function () {

        var selection = document.getElementById('envios').value;

        if(selection == "escolha") {
            alert('Escolha um modelo de envido');
        } else {
            if (selection == "normal") {
                var dias_entrega = 18;
            }else if(selection == "express") {
                var dias_entrega = 12;
            }
            var data_envio = new Date().getTime();
            var data_entrega = data_envio + (dias_entrega * 86400000);

            document.getElementById('data_pedido').innerHTML = format_date(data_envio);
            document.getElementById('data_entrega').innerHTML = format_date(data_entrega);
        }
}
// 4)
    var carros = [

        {
            'placa': 'AAA-0198',
            'categoria': '1',
        },

        {
            'placa': 'HBP-2837',
            'categoria': '2',
        },

        {
            'placa': 'PLQ-0928',
            'categoria': '4',
        },

        {
            'placa': 'KQE-2093',
            'categoria': '5',
        },

        {
            'placa': 'AMR-9087',
            'categoria': '5',
        },

        {
            'placa': 'BQE-8111',
            'categoria': '3',
        },

        {
            'placa': 'GXL-9001',
            'categoria': '2',
        },

        {
            'placa': 'KPM-7740',
            'categoria': '1',
        }

    ];

    function valorPagar (carros) {

        switch(carros.categoria) {
            case '1':
                return 11.22;
                break;
            case '2':
                return 22.45;
                break;
            case '3':
                return 16.88;
                break;
            case '4':
                return 33.65;
                break;
            default:
                console.log('Veículo de placa' + carros.placa + ' não fez pagamento por erro de categoria (' + carros.categoria + ')');
                return 0;
                }
    }

    var total = 0;

    for(var a = 0; a < carros.length; a++) {
        total++;
        total += valorPagar(carros[a]);
    }

    document.getElementById("faturamento_total").innerHTML = total.toFixed(2);
