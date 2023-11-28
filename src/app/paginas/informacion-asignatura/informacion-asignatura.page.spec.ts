import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InformacionAsignaturaPage } from './informacion-asignatura.page';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Database } from '@angular/fire/database';


class MockActivatedRoute {
  queryParams = of({
    codigo: 'codigo_mock'
  });
}
class MockDatabase {
  // Simula las funciones y valores que se esperan utilizar en tus pruebas
  // Asegúrate de que estas funciones imiten el comportamiento de Firebase Database
  ref(path: string) {
    // Simula una referencia a Firebase Database
    return {
      // Añade aquí cualquier método adicional que tu servicio utilice
    };
  }
}

class MockFirebaseService {
  obtenerAsignatura(codigo: string) {
    // Retorna un valor mock para la asignatura
    return Promise.resolve({ /* ... datos de la asignatura mockeados ... */ });
  }

  crearAsistencia(asignatura: any) {
    // Retorna un UUID mock o cualquier otro valor esperado
    return Promise.resolve('uuid_mock');
  }

  // Añade aquí otros métodos que necesites simular
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('InformacionAsignaturaPage', () => {
  let component: InformacionAsignaturaPage;
  let fixture: ComponentFixture<InformacionAsignaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionAsignaturaPage],
      imports: [RouterTestingModule], // Usa RouterTestingModule para mocks de router
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: FirebaseService, useClass: MockFirebaseService },
        { provide: Router, useClass: MockRouter },
        { provide: Database, useClass: MockDatabase }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Aquí puedes agregar más pruebas para los métodos del componente
});