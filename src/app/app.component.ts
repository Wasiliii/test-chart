import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    lineChart: any = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 7, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: 
          {
            display: true,
            ticks: {
              beginAtZero: true,
            },
          },
      },
    },
  };


  jsonArray: any = {
    "data":    [{ "ID Nation": "01000US", "Nation": "United States", "ID Year": 2022, 
      "Year": "2022", "Population": 331097593, "Slug Nation": "united-states" },
       { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2021, 
        "Year": "2021", "Population": 329725481, "Slug Nation": "united-states" },
         { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2020,
           "Year": "2020", "Population": 326569308, "Slug Nation": "united-states" },
            { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2019,
               "Year": "2019", "Population": 324697795, "Slug Nation": "united-states" },
                { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2018,
                   "Year": "2018", "Population": 322903030, "Slug Nation": "united-states" },
                    { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2017,
                       "Year": "2017", "Population": 321004407, "Slug Nation": "united-states" },
                        { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2016,
                           "Year": "2016", "Population": 318558162, "Slug Nation": "united-states" },
                            { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2015,
                               "Year": "2015", "Population": 316515021, "Slug Nation": "united-states" }, { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2014, "Year": "2014", "Population": 314107084, "Slug Nation": "united-states" }, { "ID Nation": "01000US", "Nation": "United States", "ID Year": 2013, "Year": "2013", "Population": 311536594, "Slug Nation": "united-states" }], "source": [{
      "measures": ["Population"], "annotations": { "source_name": "Census Bureau", "source_description": "The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.", "dataset_name": "ACS 5-year Estimate", "dataset_link": "http://www.census.gov/programs-surveys/acs/", "table_id": "B01003", "topic": "Diversity", "subtopic": "Demographics" },
      "name": "acs_yg_total_population_5", "substitutions": []
    }]
  }



  maketJsonArray = () => {
    this.lineChart.data.datasets[0].data = this.jsonArray.data.map((item: any)=>{
      return item.Population
    })

    this.lineChart.data.labels = this.jsonArray.data.map((item: any)=>{
      return item.Year
    })
    return this.lineChart
  };

  changeDernderType(){
    this.lineChart.type = (this.lineChart.type === 'line' ? 'bar' : 'line' )
  }

  options: string[] = [
     'line', 'bar', 'area', 'scatter'
  ]

  ngOnInit() {
    new Chart('jsonArray', this.maketJsonArray());
  }
}

