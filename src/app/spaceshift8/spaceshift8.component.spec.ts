import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift8Component } from './spaceshift8.component';

describe('Spaceshift8Component', () => {
  let component: Spaceshift8Component;
  let fixture: ComponentFixture<Spaceshift8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
