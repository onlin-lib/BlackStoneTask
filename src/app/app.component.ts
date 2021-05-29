import { Component } from '@angular/core';
import { LoadingService} from'src/app/core/services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blackston-task';

  constructor(public loadingService : LoadingService){

  }
}
