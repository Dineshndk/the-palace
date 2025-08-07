import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  public arMenuItems:any[]=[
  {
    name: "Butter Chicken",
    price: 250,
    description: "Creamy tomato-based curry with tender chicken pieces.",
    isHotDish: true,
    isFavDish: false,
    isMainDish: false
  },
  {
    name: "Veg Biryani",
    price: 200,
    description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
    isHotDish: false,
    isFavDish: true,
    isMainDish: true
  },
  {
    name: "Tomato Soup",
    price: 90,
    description: "Warm and tangy tomato soup served with croutons.",
    isHotDish: true,
    isFavDish: false,
    isMainDish: false
  },
  {
    name: "Grilled Paneer Skewers",
    price: 180,
    description: "Spicy marinated paneer cubes grilled to perfection.",
    isHotDish: true,
    isFavDish: true,
    isMainDish: false
  },
  {
    name: "Garden Salad",
    price: 120,
    description: "Fresh lettuce, cucumbers, tomatoes, and olives with vinaigrette.",
    isHotDish: false,
    isFavDish: false,
    isMainDish: false
  },
  {
    name: "Gulab Jamun",
    price: 70,
    description: "Soft deep-fried milk balls soaked in sugar syrup.",
    isHotDish: false,
    isFavDish: true,
    isMainDish: false
  }
];

}
