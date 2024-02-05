$(document).ready(()=>{
    $("#nav").load('admin_nav.html');
    graph_line();
    graph_dunot();
    // let table = new DataTable('#datatable');
    $('.content-table>#datatable').DataTable();

})

function graph_line(){
    var ctx = $("#line");
    new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}
function graph_dunot(){
    var ctx = $("#dunot");
    new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
                display: false
            },
          }
        }
      });
}

