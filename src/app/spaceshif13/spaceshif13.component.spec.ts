import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif13Component } from './spaceshif13.component';

describe('Spaceshif13Component', () => {
  let component: Spaceshif13Component;
  let fixture: ComponentFixture<Spaceshif13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
