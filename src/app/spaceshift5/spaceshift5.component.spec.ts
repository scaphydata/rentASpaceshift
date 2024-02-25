import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift5Component } from './spaceshift5.component';

describe('Spaceshift5Component', () => {
  let component: Spaceshift5Component;
  let fixture: ComponentFixture<Spaceshift5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
