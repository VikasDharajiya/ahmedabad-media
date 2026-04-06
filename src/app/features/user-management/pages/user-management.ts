import { Component, inject } from '@angular/core';
import { Table, TableColumn } from '@shared/components/table/table';
import { User } from '../models/user-management.model';
import { UserManagementService } from '../services/user-management.service';
import { PageHeader } from '@shared/components/page-header/page-header';

@Component({
  selector: 'app-user-management',
  imports: [Table, PageHeader],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {
  private userService = inject(UserManagementService);

  data: User[] = [];

  ngOnInit() {
    this.userService.getAll().subscribe((res) => {
      this.data = res;
    });
  }

  columns: TableColumn[] = [
    { field: 'id', header: 'No.', headerClass: 'w-14' },
    {
      field: 'fullName',
      header: 'Full Name',
      headerClass: 'min-w-[180px]',
      bodyClass: 'font-medium text-gray-700',
    },
    { field: 'mobile', header: 'Mobile No', headerClass: 'min-w-[140px]' },
    { field: 'email', header: 'Email', headerClass: 'min-w-[220px]' },
    { field: 'username', header: 'Username', headerClass: 'min-w-[140px]' },
    { field: 'birthdate', header: 'Birthdate', type: 'date', dateFormat: 'dd/MM/yyyy' },
    { field: 'gender', header: 'Gender', headerClass: 'min-w-[100px]' },
    { field: 'area', header: 'Area', headerClass: 'min-w-[150px]' },
    { field: 'city', header: 'City', headerClass: 'min-w-[150px]' },
    { field: 'state', header: 'State', headerClass: 'min-w-[150px]' },
    {
      field: 'status',
      header: 'Status',
      type: 'badge',
      badgeMap: {
        Active: 'border-green-200 bg-green-100 text-green-700',
        Inactive: 'border-gray-200  bg-gray-100  text-gray-700',
      },
    },
  ];
}
