import { AfterViewInit, Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

declare var $: any;

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    $('#attendanceDate').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    });
  }

}
