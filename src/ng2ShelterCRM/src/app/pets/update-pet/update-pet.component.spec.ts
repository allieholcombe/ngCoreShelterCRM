import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetComponent } from './update-pet.component';

describe('UpdatePetComponent', () => {
  let component: UpdatePetComponent;
  let fixture: ComponentFixture<UpdatePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
