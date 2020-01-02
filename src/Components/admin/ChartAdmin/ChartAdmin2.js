import React from 'react';
import Highcharts from 'highcharts';

class ChartAdmin2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Gases',
                data: [
                    {
                        name: 'Sản Phẩm khác',
                        y: 1.9,
                        color: '#3498db'
                    },
                    {
                        name: 'Rượi Vang Trắng',
                        y: 50.1,
                        color: '#9b59b6'
                    },
                    {
                        name: 'Rượi Vang Đỏ',
                        y: 20.9,
                        color: '#2ecc71'
                    },
                    {
                        name: 'CHAMPAGNE',
                        y: 27.1,
                        color: '#f1c40f'
                    }
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
                type: 'pie',
                renderTo: 'atmospheric-composition'
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: 'Sale rate of various types of products',
                style: {
                    fontSize: '10px',
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '70%'
                }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:"center",marginTop:"20px"}}>Tỷ lệ bán của các loại sản phẩm</h3>
                <div id="atmospheric-composition">
                </div>
            </div>

        );
    }
}

export default ChartAdmin2;