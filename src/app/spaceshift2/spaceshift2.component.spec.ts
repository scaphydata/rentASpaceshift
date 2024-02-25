import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift2Component } from './spaceshift2.component';

describe('Spaceshift2Component', () => {
  let component: Spaceshift2Component;
  let fixture: ComponentFixture<Spaceshift2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
