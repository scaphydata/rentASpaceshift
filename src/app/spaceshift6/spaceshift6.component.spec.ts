import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift6Component } from './spaceshift6.component';

describe('Spaceshift6Component', () => {
  let component: Spaceshift6Component;
  let fixture: ComponentFixture<Spaceshift6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
