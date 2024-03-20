function consumirApi() {
    document.getElementById('endPoint').value="https://www.datos.gov.co/resource/2pnw-mmge.json?c_d_dep=15"
    var endPoint = document.getElementById('endPoint').value;
    fetch("https://www.datos.gov.co/resource/2pnw-mmge.json?c_d_dep=15")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var siembra = [];
            var municipio = [];

            for (var i = 0; i < data.length; i++) {
                municipio.push(data[i].municipio);
                siembra.push(data[i].rea_sembrada_ha);
            }

            var grafica = [
                {
                    x: municipio,
                    y: siembra,
                    type: 'bar'
                }
            ];
            var layout = {
                title: 'Area de siembra por Municipio',
                xaxis: {
                  title: '',
                  showgrid: true,
                  zeroline: false
                },
                yaxis: {
                  title: 'Area de Siembra Hectareas',
                  showline: false
                }
              };
            Plotly.newPlot('myDiv', grafica, layout); // Pasar 'grafica' en lugar de 'data'
            
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
}