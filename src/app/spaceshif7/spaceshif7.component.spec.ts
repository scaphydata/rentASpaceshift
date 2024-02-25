import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif7Component } from './spaceshif7.component';

describe('Spaceshif7Component', () => {
  let component: Spaceshif7Component;
  let fixture: ComponentFixture<Spaceshif7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
