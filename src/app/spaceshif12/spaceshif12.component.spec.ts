import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshif12Component } from './spaceshif12.component';

describe('Spaceshif12Component', () => {
  let component: Spaceshif12Component;
  let fixture: ComponentFixture<Spaceshif12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshif12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshif12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
