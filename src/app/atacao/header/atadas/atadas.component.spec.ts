import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtadasComponent } from './atadas.component';

describe('AtadasComponent', () => {
  let component: AtadasComponent;
  let fixture: ComponentFixture<AtadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
