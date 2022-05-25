const getData = async()=>{
    let url = `http://localhost:8080/api/election/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    const names = [obj[0].president, obj[1].president, obj[2].president, obj[3].president, obj[4].president,obj[5].president,obj[6].president,obj[7].president,obj[8].president];
    return names;
  }
  
  const getDataVotes = async()=>{
    let url = `http://localhost:8080/api/election/allVotes`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    const votes = [obj[0].voteCount, obj[1].voteCount, obj[2].voteCount, obj[3].voteCount, obj[4].voteCount, obj[5].voteCount,obj[6].voteCount,obj[7].voteCount,obj[8].voteCount];
    return votes;
  }
  
  
  const loadChart = async()=>{
    let labelsData = await getData();
    console.log(labelsData);
  
    let dataNumbers = await getDataVotes();
    console.log(dataNumbers);
  
    const data = {
        labels: labelsData,
        datasets: [{
            label: '',
            data: dataNumbers,
            backgroundColor: [
                'rgba(241, 130, 33, 0.8)',
                'rgba(0, 205, 104,0.8)',
                'rgba(255, 216, 2, 0.8)',
                'rgba(239, 43, 44, 0.8)',
                'rgba(136, 0, 138, 0.8)',
                'rgba(255, 51, 178, 0.8)',

                'rgba(26, 115, 205, 0.8)',
                'rgba(154, 205, 50, 0.8)',
                'rgba(1, 173, 193, 0.8)'


            ],
            borderColor: [
                'rgba(241, 130, 33, 1)',
                'rgba(0, 205, 104,1)',
                'rgba(255, 216, 2, 1)',
                'rgba(239, 43, 44, 1)',
                'rgba(136, 0, 138, 1)',
                'rgba(255, 51, 178, 1)',

                'rgba(26, 115, 205, 1)',
                'rgba(154, 205, 50, 1)',
                'rgba(1, 173, 193, 1)'
            ],
            borderWidth: 1
        }]
    }
  
    const config = {
  
        type: 'pie',
        data,
        options: {
            tooltips: {
                enabled: true
            },
            plugins: {
                datalabels: {
                    formatter: (dataNumbers, chart) => {
  
                        let sum = 0;
                        let dataArr = chart.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (dataNumbers * 100 / sum).toFixed(2) + '%';
                        return percentage;
  
  
                    },
                    color: '#000',
                }
            }
        }
  
    };
  
    const myChart = new Chart(
        document.getElementById('myChart'),config
  
    );
  
  }
  
  
  loadChart();