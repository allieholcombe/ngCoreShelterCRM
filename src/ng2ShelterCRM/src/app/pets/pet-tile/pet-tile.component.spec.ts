import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTileComponent } from './pet-tile.component';

describe('PetTileComponent', () => {
  let component: PetTileComponent;
  let fixture: ComponentFixture<PetTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
