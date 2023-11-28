import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario, Asignatura } from 'src/app/modelos/modelos';
import { FirebaseService } from 'src/app/servicio/firebase.service';


@Component({
  selector: 'app-profesorhome',
  templateUrl: './profesorhome.page.html',
  styleUrls: ['./profesorhome.page.scss'],
})
export class ProfesorhomePage implements OnInit {

  asignaturas: Asignatura[] = []; // Lista para almacenar las asignaturas

  usuario : Usuario = new Usuario()
  constructor(private storage: Storage , private fire: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.cargarDatosUsuario()
  }

  async cargarDatosUsuario() {
    const usuario = await this.storage.get('currentUser');
    if (usuario) {
      this.usuario = usuario;
      console.log(usuario);
      await this.cargarAsignaturas(); // Cargar las asignaturas del usuario
    } else {
      console.log('No se encontraron datos del usuario');
      // Manejar la situación cuando no hay datos del usuario
    }
  }

  async cargarAsignaturas() {
    for (const nombreAsignatura of this.usuario.asignaturas_a_cargo) {
      try {
        const asignatura = await this.fire.obtenerAsignatura(nombreAsignatura);
        if (asignatura) {
          this.asignaturas.push(asignatura);
        } else {
          console.log(`Asignatura no encontrada: ${nombreAsignatura}`);
        }
      } catch (error) {
        console.error(`Error al cargar la asignatura ${nombreAsignatura}:`, error);
      }
    }
    console.log('Asignaturas cargadas:', this.asignaturas);
  }
  
  verDetalleAsignatura(codigo: string) {
    this.router.navigate(['/informacion-asignatura'], {
      queryParams: { codigo: codigo }
    });
  }
}
