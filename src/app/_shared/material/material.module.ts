import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatTabsModule,
  MdNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    CommonModule,
    MatPaginatorModule,
    MdNativeDateModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MdNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule
  ]
})

export class MaterialModule {
}
