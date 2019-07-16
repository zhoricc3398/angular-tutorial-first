import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes, sequence } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('showItems', [

      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".35s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])

    ]),

    trigger('confirmDelete', [

      state('hide', style({
        opacity: '0',
        top: '80px',
        display: 'none'
      })),

      state('show', style({
        opacity: '1',
        top: '140px',
        display: 'block'
      })),

      transition('hide => show', [
        style({display: 'block'}),
        animate('0.5s')
      ]),

      transition('show => hide', [
        animate('0.5s')
      ]),

    ]),
  ]
})
export class EmployeesComponent implements OnInit {

  employees$;
  active = false;
  isLoading = true;
  confirm = false;
  userId;

  constructor(private employeesService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.active = false;
    this.activatedRoute.paramMap.subscribe(value => {
      const id = +value.get('id');
      if (id) {
        this.active = true;
        this.isLoading = false;
        this.employees$ = this.employeesService.getEmployeeById(+value.get('id'))
        if (!this.employees$) {
          this.router.navigate(['employees']);
        }
      } else {
        this.employees$ = this.employeesService.getEmployees()
        this.isLoading = false;

      }
    });
  }

  deleteEmployee(id) {
    return this.employeesService.deleteEmployee(id).subscribe(value => {
      console.log(value);
      this.getEmployees();
    });
  }

  showConfirm(id) {
    this.userId = id;
    this.confirm = true;
  }

  hideConfirm() {
    this.confirm = false;
  }
}
