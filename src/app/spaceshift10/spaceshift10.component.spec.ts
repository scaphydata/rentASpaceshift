import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift10Component } from './spaceshift10.component';

describe('Spaceshift10Component', () => {
  let component: Spaceshift10Component;
  let fixture: ComponentFixture<Spaceshift10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
