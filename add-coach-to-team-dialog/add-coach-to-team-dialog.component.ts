import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-coach-to-team-dialog',
  templateUrl: './add-coach-to-team-dialog.component.html',
})
export class AddCoachToTeamDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCoachToTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    // Assuming data contains { teamName: '', coachName: '' }
    if (this.data.teamName && this.data.coachName) {
      // Data is valid
      this.dialogRef.close(this.data);
    }
  }
}
