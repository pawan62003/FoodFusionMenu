import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
   dishes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchDishes();
  }

  fetchDishes() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.dishes = data.meals;
    });
  }

}
