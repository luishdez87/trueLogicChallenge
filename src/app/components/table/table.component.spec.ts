import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SortPipe } from 'src/app/helpers/sort.pipe';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent, SortPipe ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on sort should change the variable values to update the sort pipe', () => {

    component.sort(component.headers[0]);

    expect(component.column).toBe(component.headers[0].name);
    expect(component.headers[0].sorting).toBeFalsy();
  });

  it('on passPage should render new 10 items', () => {
    component.passPage(1);

    expect(component.response.data.length).toBe(10);
  });
});
