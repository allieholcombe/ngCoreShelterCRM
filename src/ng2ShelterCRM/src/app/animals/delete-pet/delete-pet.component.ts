import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css']
})
export class DeletePetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(id: string) {
    console.log(id);
  }

}
