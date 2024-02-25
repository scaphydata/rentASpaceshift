import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif10Component } from './spaceshif10.component';

describe('Spaceshif10Component', () => {
  let component: Spaceshif10Component;
  let fixture: ComponentFixture<Spaceshif10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
