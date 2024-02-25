import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift1Component } from './spaceshift1.component';

describe('Spaceshift1Component', () => {
  let component: Spaceshift1Component;
  let fixture: ComponentFixture<Spaceshift1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
