import "chartjs-plugin-streaming";
import { chartTooltip } from './util';
import {liveChartData, liveChartData2 } from "../../../constants/charts";

export const lineChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  plugins: {
    datalabels: {
      display: false
    }
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          // min: 10,
          // max: 100,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}

export const lineChartDoubleOptions = {
  legend: {
    display: true
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  plugins: {
    datalabels: {
      display: false
    }
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          // stepSize: 10,
          // min: 10,
          // max: 100,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}
export const polarAreaChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  tooltips: chartTooltip,
};

export const areaChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,

  // tooltips: {
  //   callbacks: {
  //     title: function(tooltipItem, data) {
  //       return data['labels'][tooltipItem[0]['index']];
  //     },
  //     label: customTooltips
  //   },
  //   backgroundColor: '#FFF',
  //   titleFontSize: 16,
  //   titleFontColor: '#0066ff',
  //   bodyFontColor: '#000',
  //   bodyFontSize: 14,
  //   displayColors: false
  // },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          // stepSize: 30,
          // min: 0,
          // max: 150,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        type: "realtime",
        realtime: {
          // onRefresh: function() {
          //   liveChartData.datasets.forEach((data,i)=>{
          //     liveChartData.datasets[i].data.push({
          //       x: Date.now(),
          //       y: Math.random() * 1000
          //     });
          //   });
          //
          // },
          onRefresh: function() {
            liveChartData.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 1000
            });

          },
          refresh: 1000,
          duration: 10000,
          delay: 1000,
          pause: false,
          ttl: undefined // data will be automatically deleted as it disappears off the chart
        },
        gridLines: {
          display: false
        }
      }
    ]
  },
  animation: {
    duration: 0                    // general animation time
  },
  hover: {
    animationDuration: 0           // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 0,
  plugins: {
    streaming: {            // per-chart option
      frameRate: 10       // chart is drawn 10 times every second
    }
  }
}

export const areaChartOptions2 = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        type: "realtime",
        realtime: {
          onRefresh: function() {
            liveChartData2.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 1000
            });
          },
          refresh: 1000,
          duration: 10000,
          delay: 1000,
          pause: false,
          ttl: undefined // data will be automatically deleted as it disappears off the chart
        },
        gridLines: {
          display: false
        }
      }
    ]
  },
  animation: {
    duration: 0                    // general animation time
  },
  hover: {
    animationDuration: 0           // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 0,
  plugins: {
    streaming: {            // per-chart option
      frameRate: 10       // chart is drawn 10 times every second
    }
  }
}

export const scatterChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          min: -80,
          max: 80,
          padding: 20,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
        },
      },
    ],
  },
  tooltips: chartTooltip,

  // legend: {
  //   position: 'bottom',
  //   labels: {
  //     padding: 30,
  //     usePointStyle: true,
  //     fontSize: 12,
  //   },
  // },
  // responsive: true,
  // maintainAspectRatio: false,
  // scales: {
  //   yAxes: [
  //     {
  //       gridLines: {
  //         display: true,
  //         lineWidth: 1,
  //         color: 'rgba(0,0,0,0.1)',
  //         drawBorder: false,
  //       },
  //       ticks: {
  //         beginAtZero: true,
  //         stepSize: 20,
  //         min: -80,
  //         max: 80,
  //         padding: 20,
  //       },
  //     },
  //   ],
  //   xAxes: [
  //     {
  //       gridLines: {
  //         display: true,
  //         lineWidth: 1,
  //         color: 'rgba(0,0,0,0.1)',
  //       },
  //     },
  //   ],
  // },
};

export const barChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          // stepSize: 100,
          // min: 300,
          // max: 800,
          padding: 20,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  tooltips: chartTooltip,
};

export const radarChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false,
    },
  },
  tooltips: chartTooltip,
};

export const pieChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
  },
  layout: {
    padding: {
      bottom: 20,
    },
  },
  tooltips: chartTooltip,
};

export const doughnutChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
  },
  cutoutPercentage: 80,
  layout: {
    padding: {
      bottom: 20,
    },
  },
  tooltips: chartTooltip,
};

export const smallLineChartOptions = {
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 10,
      bottom: 10,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
      },
    ],
  },
};
