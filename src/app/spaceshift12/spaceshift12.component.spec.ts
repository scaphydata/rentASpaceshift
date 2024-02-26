import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift12Component } from './spaceshift12.component';

describe('Spaceshift12Component', () => {
  let component: Spaceshift12Component;
  let fixture: ComponentFixture<Spaceshift12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
