import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { GymDetailsComponent } from './admin/gym-details/gym-details.component';
import { MembershipComponent } from './admin/membership/membership.component';
import { AddMemberComponent } from './admin/add-member/add-member.component';
import { MemberListComponent } from './admin/member-list/member-list.component';
import { AttendanceComponent } from './admin/attendance/attendance.component';
import { AddTrainerComponent } from './admin/add-trainer/add-trainer.component';
import { TrainerListComponent } from './admin/trainer-list/trainer-list.component';
import { NotifyComponent } from './admin/notify/notify.component';
import { AnnouncementComponent } from './admin/announcement/announcement.component';
import { AddEquipmentComponent } from './admin/add-equipment/add-equipment.component';
import { ListEquipmentComponent } from './admin/list-equipment/list-equipment.component';
import { PaymentComponent } from './admin/payment/payment.component';

export const routes: Routes = [
    {path: '',redirectTo: 'admin/login',pathMatch:'full'},
    {path: 'admin/login',component: AdminLoginComponent},
    {path: 'admin/register',component: AdminRegisterComponent},
    {path: 'admin/dashboard',component: AdminDashboardComponent},
    {path: 'admin/gymDetails',component: GymDetailsComponent},
    {path: 'admin/membership',component: MembershipComponent},
    {path: 'admin/member',component: AddMemberComponent},
    {path: 'admin/members',component: MemberListComponent},
    {path: 'admin/attendance',component: AttendanceComponent},
    {path: 'admin/trainer',component: AddTrainerComponent},
    {path: 'admin/trainers',component: TrainerListComponent},
    {path: 'admin/notify',component: NotifyComponent},
    {path: 'admin/announce',component: AnnouncementComponent},
    {path: 'admin/equipment',component: AddEquipmentComponent},
    {path: 'admin/equipments',component: ListEquipmentComponent},
    {path: 'admin/payment',component: PaymentComponent}
];
