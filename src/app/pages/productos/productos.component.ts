import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  tabs = [
    { id: 'home', nombre: 'Inicio', seleccionado: true },
    { id: 'productos', nombre: 'Productos', seleccionado: false },
    // Añade más pestañas si es necesario
  ];

  productos = [
    { id: '1', nombre: 'Ibuprofeno', descripcion: '"Patillas para el malestar del cuerpo"', imagen: 'assets/images/ibu.jpg', precio: 0.99 },
    { id: '2', nombre: '', descripcion: 'Para la fiebre de niños y adultos', imagen: 'assets/images/ibu1.jpg', precio: 2.99 },
    { id: '3', nombre: '', descripcion: 'Para la alergia de cualquier tipo', imagen: 'assets/images/ibu3.jpg', precio: 4.99 },
    { id: '4', nombre: '', descripcion: 'Fiebre de bebes ', imagen: 'assets/images/ibu.jpg', precio: 8.99 }
  ];
ofertas: any;
}
