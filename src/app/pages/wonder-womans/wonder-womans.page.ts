import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MulheresService} from '../../mulheres.service';

@Component({
  selector: 'wonder-womans',
  templateUrl: './wonder-womans.page.html',
  styleUrls: ['./wonder-womans.page.scss'],
})
export class WonderWomansPage implements OnInit {
  id;
  mulher;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private mulheresService: MulheresService
  ) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.mulheresService.getWoman(this.id).subscribe((data: any) => {
      this.mulher = data;
    });
  }

}
