import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift3Component } from './spaceshift3.component';

describe('Spaceshift3Component', () => {
  let component: Spaceshift3Component;
  let fixture: ComponentFixture<Spaceshift3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
