import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  producto: any; // Define el tipo adecuado o una interfaz

  // Datos de ejemplo de productos
  productos = [
    {
      "id": "1",
      "nombre": "Ibuprofeno",
      "imagen": "assets/images/ibu.jpg",
      "descripcion": "Patillas para el malestar del cuerpo",
      "precio": 0.99
    },
    {
      "id": "2",
      "nombre": "Paracetamol",
      "imagen": "assets/images/ibu1.jpg",
      "descripcion": "Para la fiebre de niños y adultos",
      "precio": 2.99
    },
    {
      "id": "3",
      "nombre": "Loratadina",
      "imagen": "assets/images/ibu3.jpg",
      "descripcion": "Para la alergia de cualquier tipo",
      "precio": 4.99
    },
    {
      "id": "4",
      "nombre": "Tempra",
      "imagen": "assets/images/ibu.jpg",
      "descripcion": "Fiebre de bebes",
      "precio": 8.99
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID del producto de la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Cargar los detalles del producto desde los datos locales
    this.producto = this.productos.find(p => p.id === id);
  }

}
