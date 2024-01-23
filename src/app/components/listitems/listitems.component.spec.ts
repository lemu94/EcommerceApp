import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemsComponent } from './listitems.component';

describe('ListitemComponent', () => {
  let component: ListitemsComponent;
  let fixture: ComponentFixture<ListitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
