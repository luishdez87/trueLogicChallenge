import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemComponent } from './item.component';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on update values, should return an observable of value', () => {
    const service = TestBed.get(ApiService);
    const item = {
      number: 1,
      street: 'random',
      city: 'mazatlan',
      zip: 82000,
      state: 'sinaloa'
    };

    const spy = spyOn(service, 'updateAddress').and.callFake((address) => {
      return of(item);
    });

    component.updateValues(true);

    expect(component.address).toBe(item);
  });
});
