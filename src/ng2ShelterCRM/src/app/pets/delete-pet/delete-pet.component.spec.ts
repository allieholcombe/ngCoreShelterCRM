import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePetComponent } from './delete-pet.component';

describe('DeletePetComponent', () => {
  let component: DeletePetComponent;
  let fixture: ComponentFixture<DeletePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
