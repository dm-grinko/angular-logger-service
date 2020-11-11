import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    this.logger.info('Info');
    this.logger.warn('Warning');
    this.logger.error('Error');
  }
}
