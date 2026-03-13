import { Component } from '@angular/core';
import { PageHeader } from '@shared/component/page-header/page-header';
import { Table, TableColumn } from '@shared/component/table/table';
import { IconField } from '@shared/component/icon-field/icon-field';

@Component({
  selector: 'app-team',
  imports: [PageHeader, Table, IconField],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  columns: TableColumn[] = [
    { field: 'id', header: 'No.', headerClass: 'w-14' },

    {
      field: 'name',
      header: 'Name',
      headerClass: 'min-w-[180px]',
      bodyClass: 'font-medium text-gray-700',
    },

    {
      field: 'email',
      header: 'Email',
      headerClass: 'min-w-[220px]',
    },

    {
      field: 'password',
      header: 'Password',
      headerClass: 'min-w-[150px]',
    },

    {
      field: 'phoneNumber',
      header: 'Ph. Number',
      headerClass: 'min-w-[150px]',
    },

    {
      field: 'role',
      header: 'Role',
      headerClass: 'min-w-[150px]',
    },

    {
      field: 'actions',
      header: 'Actions',
      type: 'actions',
      headerClass: 'w-32',
    },
  ];

  data = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      password: 'rahul123',
      phoneNumber: '9876543210',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya@gmail.com',
      password: 'priya123',
      phoneNumber: '9876543211',
      role: 'Editor',
    },
    {
      id: 3,
      name: 'Amit Verma',
      email: 'amit@gmail.com',
      password: 'amit123',
      phoneNumber: '9876543212',
      role: 'User',
    },
    {
      id: 4,
      name: 'Neha Gupta',
      email: 'neha@gmail.com',
      password: 'neha123',
      phoneNumber: '9876543213',
      role: 'Admin',
    },
    {
      id: 5,
      name: 'Karan Singh',
      email: 'karan@gmail.com',
      password: 'karan123',
      phoneNumber: '9876543214',
      role: 'User',
    },
  ];

  onEdit(row: any) {
    console.log('Edit', row);
  }

  onDelete(row: any) {
    console.log('Delete', row);
  }
}
