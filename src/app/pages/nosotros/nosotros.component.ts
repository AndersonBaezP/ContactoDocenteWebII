import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ejecutivo } from '../../utils/Ejecutivo';
 

 



@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit{
  ejecutivos: Ejecutivo[] = [
    { imagen: 'assets/images/Equipo.webp', nombre: 'Equipo Farmaceutico', cargo: 'CEO & Fundador', descripcion: 'El selecto grupo de trabajo' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}