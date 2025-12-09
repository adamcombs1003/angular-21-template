import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCard } from './mat-card';

describe('MatCard', () => {
  let component: MatCard;
  let fixture: ComponentFixture<MatCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
