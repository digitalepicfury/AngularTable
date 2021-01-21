import {NgModule} from '@angular/core';

/* Add Angular Material Dependencies Here */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,      
  MatSidenavModule,
  MatGridListModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})

export class MaterialModule {}
