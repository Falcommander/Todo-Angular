import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTacheComponent } from './modif-tache.component';

describe('ModifTacheComponent', () => {
  let component: ModifTacheComponent;
  let fixture: ComponentFixture<ModifTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
