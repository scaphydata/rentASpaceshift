import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif11Component } from './spaceshif11.component';

describe('Spaceshif11Component', () => {
  let component: Spaceshif11Component;
  let fixture: ComponentFixture<Spaceshif11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
