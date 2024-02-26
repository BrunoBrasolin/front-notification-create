import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NotificationDTO } from './app.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: AppService) {
  }
  public notification: NotificationDTO = {
    subject: '',
    recipient: '',
    body: '',
    dueDate: new Date()
  };

  onClickCriar() {
    if (this.notification.subject == null
      || this.notification.recipient == null
      || this.notification.body == null
      || this.notification.dueDate == null) {
      alert('Verifique os valores e tente novamente.');
      return;
    }

    this.service.UpdateSalary(this.notification).subscribe(s => console.log(s));
  }
}
