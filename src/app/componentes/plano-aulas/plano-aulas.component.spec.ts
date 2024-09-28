import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoAulasComponent } from './plano-aulas.component';

describe('PlanoAulasComponent', () => {
  let component: PlanoAulasComponent;
  let fixture: ComponentFixture<PlanoAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoAulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
