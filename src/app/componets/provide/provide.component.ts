import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Service } from 'src/app/core/service/service';

@Component({
  selector: 'app-provide',
  templateUrl: './provide.component.html',
  styleUrls: ['./provide.component.scss'],
})
export class ProvideComponent implements OnInit {
  constructor(private service: Service) {}
  ngOnInit(): void {
    this.service
      .read()
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
