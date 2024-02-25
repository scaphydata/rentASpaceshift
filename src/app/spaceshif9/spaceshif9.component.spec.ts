import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif9Component } from './spaceshif9.component';

describe('Spaceshif9Component', () => {
  let component: Spaceshif9Component;
  let fixture: ComponentFixture<Spaceshif9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
