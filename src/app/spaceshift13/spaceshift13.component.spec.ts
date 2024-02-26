import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift13Component } from './spaceshift13.component';

describe('Spaceshift13Component', () => {
  let component: Spaceshift13Component;
  let fixture: ComponentFixture<Spaceshift13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
