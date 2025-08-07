import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderonline } from './orderonline';

describe('Orderonline', () => {
  let component: Orderonline;
  let fixture: ComponentFixture<Orderonline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderonline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderonline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
