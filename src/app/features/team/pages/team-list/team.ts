import { Component, inject } from '@angular/core';
import { PageHeader } from '@shared/components/page-header/page-header';
import { Table, TableColumn } from '@shared/components/table/table';
import { TableFilterComponent } from '@shared/components/table-filter/table-filter';
import { TeamMember } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  imports: [PageHeader, Table, TableFilterComponent],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  private teamService = inject(TeamService);

  rowsPerPageOptions: number[] = [5, 10, 15];
  data: TeamMember[] = [];

  ngOnInit() {
    this.teamService.getAll().subscribe((res) => {
      this.data = res;
    });
  }

  columns: TableColumn[] = [
    { field: 'id', header: 'No.', headerClass: 'w-14' },
    {
      field: 'name',
      header: 'Name',
      headerClass: 'min-w-[180px]',
      bodyClass: 'font-medium text-gray-700',
    },
    { field: 'email', header: 'Email', headerClass: 'min-w-[220px]' },
    { field: 'password', header: 'Password', headerClass: 'min-w-[150px]' },
    { field: 'phoneNumber', header: 'Ph. Number', headerClass: 'min-w-[150px]' },
    { field: 'role', header: 'Role', headerClass: 'min-w-[150px]' },
    { field: 'actions', header: 'Actions', type: 'actions', headerClass: 'w-32' },
  ];

  onEdit(row: TeamMember) {
    console.log('Edit', row);
    // API: this.teamService.update(row.id, row).subscribe()
  }

  onDelete(row: TeamMember) {
    this.teamService.delete(row.id).subscribe(() => {
      this.data = this.data.filter((m) => m.id !== row.id);
    });
  }
}
