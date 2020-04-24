<script>
    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data:{
              labels:['López Obrador','Meade', 'Ricardo Anaya', 'Calderón'],
              datasets:[{
                  label:'Votos',
                  data:[523223, 434012, 450000, 324323],
                  backgroundColor:[
                  'rgba(234, 158, 61, 0.6)',
                  'rgba(108, 183, 70, 0.6)',
                  'rgba(83, 164, 235,  0.6)',
                  'rgba(116, 56, 193, 0.6)',
                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:2,
                  hoverBorderColor:'#000'
                  },
                    ]
                 }, 
          options:{
                legend:{
                  display:true,
                  position:'right',
                  labels:{
                    fontColor:'#000',
                    fontSize: 14
                  }
                },
              }
            });
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['0-3 hrs', '3-6 hrs', '6-9 hrs', '9-12 hrs', '12-15', '15-18', '18-21'],
            datasets: [{
                label: 'López Obrador',
                backgroundColor: 'rgb(0, 0, 0,0)',
                borderColor: 'rgba(234, 158, 61, 0.6)',
                data: [0, 9000, 20000, 27000, 34000, 40000, 60000]
              },
              {
                label: 'Meade',
                backgroundColor: 'rgb(0, 0, 0,0)',
                borderColor: 'rgba(108, 183, 70, 0.6)',
                data: [0, 8000, 19000, 23000, 30000, 37000, 50000]
              },
              {
                label: 'Ricaro Anaya',
                backgroundColor: 'rgb(0, 0, 0,0)',
                borderColor: 'rgba(83, 164, 235,  0.6)',
                data: [0, 7000, 18000, 26000, 35000, 39000, 51000]
              },
              {
                label: 'Calderón',
                backgroundColor: 'rgb(0, 0, 0,0)',
                borderColor: 'rgba(116, 56, 193, 0.6)',
                data: [0, 3000, 14000, 20000, 29000, 35000, 40000]
              }
            ]
        },

        // Configuration options go here
        options: {}
    });
    var chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'pie',

        data:{
              labels:['López Obrador','Meade', 'Ricardo Anaya', 'Calderón'],
              datasets:[{
                  label:'Votos',
                  data:[434012, 523223, 450000, 324323],
                  backgroundColor:[
                  'rgba(234, 158, 61, 0.6)',
                  'rgba(108, 183, 70, 0.6)',
                  'rgba(83, 164, 235,  0.6)',
                  'rgba(116, 56, 193, 0.6)',
                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
                    }]
                 }, 
          options:{
                legend:{
                  display:true,
                  position:'right',
                  labels:{
                    fontColor:'#000',
                    fontSize: 14
                  }
                },
              }
            });
  </script>