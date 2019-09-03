import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  constructor() { }


  pageTitle = 'Cards';
  courseCardCode = `
  <sb-card 
      type="course"
      title="Data Structure and Algorithm - Assignment 1 Paperback"
      subject="Subject Name"
      medium="Medium Name"
      class="Class Name"
      topic="Global positioning system and its application"
      subtopic="Limits of artificial intelligence"
      img="assets/images/book.png"
      org="Academy of European Law (ERA)"
      category="Book"
    ></sb-card>
  `;
  sections = [
    {
      expandCode: false,
      title: 'Course Card',
      demoCode: ``,
      copyCode: `
      <sb-card 
          type="course"
          title="Data Structure and Algorithm - Assignment 1 Paperback"
          subject="Subject Name"
          medium="Medium Name"
          class="Class Name"
          topic="Global positioning system and its application"
          subtopic="Limits of artificial intelligence"
          img="assets/images/book.png"
          org="Academy of European Law (ERA)"
          category="Book"
        ></sb-card>
      `
    },
    {
      expandCode: false,
      title: 'Resource Card',
      demoCode: `
      <div class="masonry-grid">
      <div class="masonry-item">
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      </div>

      <div class="masonry-item">
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      </div>

      <div class="masonry-item">
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      </div>
      </div>
      `,
      copyCode: `
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'QR Card',
      demoCode: `
      <div class="sb-card sb-card-qr" tabindex="0">
      <div class="sb-card-body">
        <div class="sb-card-metas">
          <div class="sb-card-image mr-16">
            <img src="assets/images/book.png">
          </div>
          <div class="sb-card-meta non-course">
            <div class="d-flex mb-auto">
              <div class="sb-card-label">Worksheet</div>
              <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
            </div>
            <div class="sb-card-meta-item ellipsis">
              Subject : English
            </div>
            <div class="sb-card-meta-item ellipsis mt-4">
              Class : Class 1,Class 2,Class 3,Class 4,Class 5
            </div>
            <div class="sb-card-meta-item ellipsis mt-4">
              Medium : Other
            </div>
          </div>
        </div>
        <h4 class="sb-card-title">
          Data Structure and Algorithm - Assignment 1 Paperback
        </h4>
        <div class="sb-card-org ellipsis">
          Academy of European Law (ERA)
        </div>
      </div>
      <div class="btn-div">
      <button class="sb-btn sb-btn-normal sb-btn-secondary">
        <i class="caret right icon"></i> Play Content
      </button>
    </div>
    </div>
      `,
      copyCode: `
      <div class="sb-card sb-card-qr" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="btn-div">
        <button class="sb-btn sb-btn-normal sb-btn-secondary">
          <i class="caret right icon"></i> Play Content
        </button>
      </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Offline Card with hover',
      demoCode: `
      <div class="sb-card relative" tabindex="0">
<div class="sb-card-body">
  <div class="sb-card-metas">
    <div class="sb-card-image mr-16">
      <img src="assets/images/book.png">
    </div>
    <div class="sb-card-meta course">
      <div class="sb-card-meta-item mb-16">
        Topic : Global positioning system and its application
      </div>
      <div class="sb-card-meta-item">
        Subtopic : Limits of artificial intelligence
      </div>
    </div>
  </div>
  <h4 class="sb-card-title">
    Data Structure and Algorithm - Assignment 1 Paperback
  </h4>
  <div class="sb-card-org ellipsis">
    Academy of European Law (ERA)
  </div>
</div>
<div class="sb-card-progressbar">
  <sui-progress class="ui progress success">
    <div class="bar" style="width: 100%;">
      <div class="progress">100%</div>
    </div>
    <div class="label"></div>
  </sui-progress>
</div>
<div class="sb-card-hover" *ngIf="hover">
   <div class="sb-card-hover-content">
     <div>
     <div class="d-flex flex-jc-center">
     <button class="sb-btn sb-btn-outline-white sb-btn-normal">Open</button>
     </div>
     <button class="sb-btn sb-btn-outline-white sb-btn-normal sb-right-icon-btn mt-16">Export<i class="sign in alternate icon"></i></button>
     </div>
   </div>
</div>
</div>
      `,
      copyCode: `
      <div class="sb-card relative" tabindex="0">
<div class="sb-card-body">
  <div class="sb-card-metas">
    <div class="sb-card-image mr-16">
      <img src="assets/images/book.png">
    </div>
    <div class="sb-card-meta course">
      <div class="sb-card-meta-item mb-16">
        Topic : Global positioning system and its application
      </div>
      <div class="sb-card-meta-item">
        Subtopic : Limits of artificial intelligence
      </div>
    </div>
  </div>
  <h4 class="sb-card-title">
    Data Structure and Algorithm - Assignment 1 Paperback
  </h4>
  <div class="sb-card-org ellipsis">
    Academy of European Law (ERA)
  </div>
</div>
<div class="sb-card-progressbar">
  <sui-progress class="ui progress success">
    <div class="bar" style="width: 100%;">
      <div class="progress">100%</div>
    </div>
    <div class="label"></div>
  </sui-progress>
</div>
<div class="sb-card-hover" *ngIf="hover">
   <div class="sb-card-hover-content">
     <div>
     <div class="d-flex flex-jc-center">
     <button class="sb-btn sb-btn-outline-white sb-btn-normal">Open</button>
     </div>
     <button class="sb-btn sb-btn-outline-white sb-btn-normal sb-right-icon-btn mt-16">Export<i class="sign in alternate icon"></i></button>
     </div>
   </div>
</div>
</div>
      `
    },
    {
      expandCode: false,
      title: 'Offline Card with hover gray background',
      demoCode: `

          <div class="sb-card relative" tabindex="0">
          <div class="sb-card-body">
            <div class="sb-card-metas">
              <div class="sb-card-image mr-16">
                <img src="assets/images/book.png">
              </div>
              <div class="sb-card-meta non-course">
                <div class="d-flex mb-auto">
                  <div class="sb-card-label">Worksheet</div>
                  <i class="exclamation circle icon ml-8 sb-color-error fs-1-3"></i>
                </div>
                <div class="sb-card-meta-item ellipsis">
                  Subject : English
                </div>
                <div class="sb-card-meta-item ellipsis mt-4">
                  Class : Class 1,Class 2,Class 3,Class 4,Class 5
                </div>
                <div class="sb-card-meta-item ellipsis mt-4">
                  Medium : Other
                </div>
              </div>
            </div>
            <h4 class="sb-card-title">
              Data Structure and Algorithm - Assignment 1 Paperback
            </h4>
          </div>
          <div class="sb-card-hover sb-card-hover-gray">
            <div class="sb-card-hover-content">
              <div class="d-flex flex-w-wrap flex-jc-center">
                <i class="exclamation circle icon sb-exclamation-icon fs-2-5"></i>
                <p class="m-16 text-center">Please connect to the internet to play the content</p>
                <button class="sb-btn sb-btn-outline-gray sb-btn-normal sb-right-icon-btn mt-16">Export<i
                    class="sign in alternate icon"></i></button>
              </div>
            </div>
          </div>
          </div>
      `,
      copyCode: `

        <div class="sb-card relative" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <i class="exclamation circle icon ml-8 sb-color-error fs-1-3"></i>
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
        </div>
        <div class="sb-card-hover sb-card-hover-gray">
          <div class="sb-card-hover-content">
            <div class="d-flex flex-w-wrap flex-jc-center">
              <i class="exclamation circle icon sb-exclamation-icon fs-2-5"></i>
              <p class="m-16 text-center">Please connect to the internet to play the content</p>
              <button class="sb-btn sb-btn-outline-gray sb-btn-normal sb-right-icon-btn mt-16">Export<i
                  class="sign in alternate icon"></i></button>
            </div>
          </div>
        </div>
        </div>
      `
    },
    {
      expandCode: false,
      title: 'Batch Card with list',
      demoCode: `
      <div class="ui card sb-batch-card">
      <div class="p-16">
        <h4 class="sb-batch-card-title">Batches</h4>
      </div>
      <div class="sb-batch-card-content">
        <div class="ui divided list">
        <div class="item">
            <i class="calendar outline icon"></i>
            <div class="content width-100">
            <button class="ui right floated sb-btn sb-btn-outline-primary sb-btn-normal">Enroll</button>
            <span class="header pb-5"> 6th May 2019 - </span>
            <div class="description">Created by Creation </div>
            </div>
        </div>
        <div class="item">
            <i class="icon right-floated cursor-pointer write"></i>
            <i class="calendar outline icon"></i>
            <div class="content width-100">
            <span class="header pb-5"> 7th May 2019 - </span>
            <div class="description">Created by Creation </div>
            </div>
        </div>
        </div>
      </div>
      <button class="ui bottom attached sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md no-border">
        <i class="add icon"></i>Create Batch
      </button>
    </div>
      `,
      copyCode: `
      <div class="ui card sb-batch-card">
      <div class="p-16">
        <h4 class="sb-batch-card-title">Batches</h4>
      </div>
      <div class="sb-batch-card-content">
        <div class="ui divided list">
        <div class="item">
            <i class="calendar outline icon"></i>
            <div class="content width-100">
            <button class="ui right floated sb-btn sb-btn-outline-primary sb-btn-normal">Enroll</button>
            <span class="header pb-5"> 6th May 2019 - </span>
            <div class="description">Created by Creation </div>
            </div>
        </div>
        <div class="item">
            <i class="icon right-floated cursor-pointer write"></i>
            <i class="calendar outline icon"></i>
            <div class="content width-100">
            <span class="header pb-5"> 7th May 2019 - </span>
            <div class="description">Created by Creation </div>
            </div>
        </div>
        </div>
      </div>
      <button class="ui bottom attached sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md no-border">
        <i class="add icon"></i>Create Batch
      </button>
    </div>
      `
    },
    {
      expandCode: false,
      title: 'Batch Card without list',
      demoCode: `
      <div class="ui card sb-batch-card">
      <div class="p-16">
        <h4 class="sb-batch-card-title">Batches</h4>
      </div>
      <div class="sb-batch-card-content">
        <div class="my-16">
          <div class="sb-no-batch-found">No Batch Found</div>
        </div>
      </div>
    </div>
      `,
      copyCode: `
      <div class="ui card sb-batch-card">
      <div class="p-16">
        <h4 class="sb-batch-card-title">Batches</h4>
      </div>
      <div class="sb-batch-card-content">
        <div class="my-16">
          <div class="sb-no-batch-found">No Batch Found</div>
        </div>
      </div>
    </div>
      `
    },
    {
      expandCode: false,
      title: 'Workspace - Cards',
      demoCode: `
      <div class="d-flex">
      <div class="sb-wspace-card active">
      <div class="sb-wspace-body">
        <div class="sb-wspace-title">Book</div>
        <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
      </div>
    </div>

    <div class="sb-wspace-card">
      <div class="sb-wspace-body">
        <div class="sb-wspace-title">Course</div>
        <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
      </div>
    </div>
    </div>
      `,
      copyCode: `
      <div class="d-flex">
      <div class="sb-wspace-card active">
      <div class="sb-wspace-body">
        <div class="sb-wspace-title">Book</div>
        <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
      </div>
    </div>

    <div class="sb-wspace-card">
      <div class="sb-wspace-body">
        <div class="sb-wspace-title">Course</div>
        <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
      </div>
    </div>
    </div>
      `
    }
  ];

  ngOnInit() {
  }

}



