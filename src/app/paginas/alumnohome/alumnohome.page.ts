import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Usuario, Asignatura } from 'src/app/modelos/modelos';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-alumnohome',
  templateUrl: './alumnohome.page.html',
  styleUrls: ['./alumnohome.page.scss'],
})
export class AlumnohomePage implements OnInit {

  lecturaQr?: string
  asignaturas: Asignatura[] = []; // Lista para almacenar las asignaturas
  usuario: Usuario = new Usuario()

  constructor(
    private storage: Storage,
    private fire: FirebaseService,
    private changeDetect: ChangeDetectorRef) { }

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
    for (const nombreAsignatura of this.usuario.asignaturas_inscrita) {
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

  async startScan() {
    document.body.classList.add('barcode-scanner-active');
    const listener = await BarcodeScanner.addListener('barcodeScanned', async (result) => {
      if (result.barcode.displayValue) {
        this.lecturaQr = result.barcode.displayValue;
        console.log("COMPONENTE " + "|", this.lecturaQr, "|")
        console.log("COMPONENTE " + this.usuario.rut)
        this.stopScan();
        await this.fire.alumnoPresente(this.lecturaQr, this.usuario.rut)
      }
    });
    await BarcodeScanner.startScan();
  }

  async stopScan() {
    document.body.classList.remove('barcode-scanner-active');
    await BarcodeScanner.removeAllListeners();
    await BarcodeScanner.stopScan();
    this.changeDetect.detectChanges();
  }
}