import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NotificationDTO } from './app.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
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
