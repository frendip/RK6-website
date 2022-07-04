let ctx = document.getElementById("passing-scores").getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [{
          label: "Баллы",
          backgroundColor: '#7e95f5',
          borderColor: 'rgb(255, 255, 255)',
          data: [192, 223, 218, 240, 259, 266, 255, 276, 261, 279]
        }]
    },
    options: {},
})