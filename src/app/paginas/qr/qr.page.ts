import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  id_asistencia: string = ''

  constructor(private activatedroute : ActivatedRoute, private fire : FirebaseService) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(async params => {
      if (params['id_asistencia']) {
        this.id_asistencia = params['id_asistencia'];
      }
    });
  }

}
