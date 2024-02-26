import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift9Component } from './spaceshift9.component';

describe('Spaceshift9Component', () => {
  let component: Spaceshift9Component;
  let fixture: ComponentFixture<Spaceshift9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
