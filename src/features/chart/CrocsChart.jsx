import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {parseChartData} from "../../helpers/parseData";
import raw from "raw.macro";
import styles from "./CrocsChart.module.css";

const CrocsChart = () => {
    const fileString = raw('../crocs_data.csv');
    const chartData = parseChartData(fileString);

    const options = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Crocs sales',
        },
        xAxis: [{
            categories: chartData.map(r => r.date),
        }],
        yAxis: [{
            labels: {
                format: '{value} item(s)',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'count sales',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
        }, {
            gridLineWidth: 0,
            title: {
                text: 'money sales',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} rub',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, {
            gridLineWidth: 0,
            title: {
                text: 'In stock',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} item(s)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'count sales',
            type: 'spline',
            yAxis: 1,
            data: chartData.map(r => +r.countSales),
            tooltip: {
                valueSuffix: ' item(s)'
            }

        }, {
            name: 'money sales',
            type: 'spline',
            yAxis: 2,
            data: chartData.map(r => +r.moneySales),
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' rub'
            }

        }, {
            name: 'in stock',
            type: 'spline',
            data: chartData.map(r => +r.inStock),
            tooltip: {
                valueSuffix: ' item(s)'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }
    }

    return (
        <div className={styles.chart}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
};

export default CrocsChart;
