import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'art-list',
  templateUrl: 'art-list.component.html',
  styles: []
})
export class ArtListComponent implements OnInit {
  artObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.artObservable = this.getArt('/art');
  }
  getArt(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
