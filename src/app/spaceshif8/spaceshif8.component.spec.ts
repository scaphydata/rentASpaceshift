import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif8Component } from './spaceshif8.component';

describe('Spaceshif8Component', () => {
  let component: Spaceshif8Component;
  let fixture: ComponentFixture<Spaceshif8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
