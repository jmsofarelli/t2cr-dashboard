import './DataChart.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { BallPulse } from 'react-pure-loaders'

/*
 * Chart.js configuration object
 */
const chartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false,
  title: { display: false },
  legend: { display: false },
  tooltips: {
    displayColors: false,
    intersect: false,
    callbacks: {
      // The value on the label of the tooltip should always have two decimal places
      label: function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || ''
        if (label) label += ': '

        label += tooltipItem.yLabel.toFixed(2)
        return label
      }
    }
  },
  scales: {
    xAxes: [
      {
        ticks: { fontColor: 'white' },
        gridLines: {
          drawOnChartArea: false,
          color: 'white'
        }
      }
    ],
    yAxes: [
      {
        ticks: { fontColor: 'white' },
        gridLines: {
          drawOnChartArea: false,
          color: 'white'
        }
      }
    ]
  }
}

class DataChart extends React.Component {
  static propTypes = {
    dataset: PropTypes.shape({
      labels: PropTypes.arrayOf(PropTypes.string),
      data: PropTypes.arrayOf(PropTypes.number)
    })
  }

  static defaultProps = {
    dataset: null
  }

  getChartData = () => {
    const { dataset } = this.props

    return {
      labels: dataset.labels,
      lineTension: 1,
      datasets: [
        {
          data: dataset.data,
          backgroundColor: 'black',
          borderColor: '#0588f1',
          fontColor: '#fff'
        }
      ]
    }
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    const { dataset } = this.props

    if (!dataset)
      return (
        <div className="DataChart">
          <div className="DataChart__Spinner">Loading deposit data</div>
          <div className="DataChart__Spinner">
            <BallPulse loading />
          </div>
        </div>
      )

    return (
      <div className="DataChart">
        <Line data={this.getChartData()} options={chartOptions} redraw />
      </div>
    )
  }
}

export default DataChart
