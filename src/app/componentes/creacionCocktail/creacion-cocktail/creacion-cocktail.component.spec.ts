import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCocktailComponent } from './creacion-cocktail.component';

describe('CreacionCocktailComponent', () => {
  let component: CreacionCocktailComponent;
  let fixture: ComponentFixture<CreacionCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionCocktailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
