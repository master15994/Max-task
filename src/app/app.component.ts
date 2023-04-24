import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Service } from './core/service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Max-task';
  destroyed = false;

  constructor(private service: Service) {
    service.consoleText('Say whats up');
  }
  test = false;
  destroy() {
    this.destroyed = true;
  }
}
