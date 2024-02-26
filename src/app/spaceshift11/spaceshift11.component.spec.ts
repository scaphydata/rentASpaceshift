import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift11Component } from './spaceshift11.component';

describe('Spaceshift11Component', () => {
  let component: Spaceshift11Component;
  let fixture: ComponentFixture<Spaceshift11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
