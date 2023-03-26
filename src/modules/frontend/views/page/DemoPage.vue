<template>
    <!-- Preloader -->
    <!-- <div class="preloader">
      <div class="loader"></div>
    </div> -->
    <!-- Preloader End -->
  
  
    <!-- Header Section -->
    <header id="home">
      <!-- Navbar -->
      <nav>
        <div class="navbar">
          <a href="#home">
            <img src="@/assets/navigator.png" style="width:200px;" alt="Navigator logo" />
          </a>
          <ul class="nav-items">
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICE</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#skill">SKILL</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#" @click="openSignInModalMethod">SIGNIN</a></li>
          </ul>
        </div>
        <div class="mobile-menu">
          <span onclick="openNav()">&#9776;</span>
          <div id="myNav" class="mobileNavOverlay">
            <div class="overlay-content">
              <a href="javascript:void()" class="close-btn" onclick="closeNav()"
                >&times;</a
              >
              <a href="#home" onclick="closeNav()">HOME</a>
              <a href="#services" onclick="closeNav()">SERVICE</a>
              <a href="#team" onclick="closeNav()">TEAM</a>
              <a href="#skill" onclick="closeNav()">SKILL</a>
              <a href="#portfolio" onclick="closeNav()">PORTFOLIO</a>
              <a href="#testimonial" onclick="closeNav()">TESTIMONIAL</a>
              <a href="#contact" onclick="closeNav()">CONTACT</a>
              <a href="#" @click="openSignInModalMethod" onclick="closeNav()"
                >SIGNIN</a
              >
            </div>
          </div>
        </div>
      </nav>
      <!-- End: Navbar -->
    </header>
    <!-- End: Header Section -->
  
  
  
  
    <!-- Preview Start -->
    <div class="preview_area">
        <div class="row">
            <div class="preview">
                <div class="left">
                  <div class="theme_view">
                    <div class="theme">
                      <div class="thumb">
                        <img src="@/assets/images/preview/large_preview.avif" alt="Image">
                      </div>
                      <div class="action">
                        <a href="#" class="link">Live Preview</a>
                      </div>
                    </div>
                    <div class="content">
                      <div class="mobile_view">
                        <p>Juvento – Electronics eCommerce Shopify Theme is a modern responsive electronics Shopify theme. This theme looks elegant for its clean & flat design as well as awesome layouts. This electronics premium Shopify theme is suitable for electronics, technology, gadgets and digital online stores.</p>
                        <p><img src="@/assets/images/preview/preview01.png" alt="Image"></p>
                        <p><img src="@/assets/images/preview/preview02.png" alt="Image"></p>
                      </div>
                      <div class="mobile_view_more">
                        <p><img src="@/assets/images/preview/preview03.jpg" alt="Image"></p>
                        <p><img src="@/assets/images/preview/preview04.jpg" alt="Image"></p>
                        <p><img src="@/assets/images/preview/preview05.png" alt="Image"></p>
                        <p><img src="@/assets/images/preview/preview06.png" alt="Image"></p>
                        <p><img src="@/assets/images/preview/preview07.png" alt="Image"></p>
                        <p>Juvento – Electronics eCommrce Shopify Theme is packed with beautiful features which will help you to create a modern and digital online store. It has 8 Home pages along with single RTL supported Home page, Quick Install, Shopify Builder, Theme Color Options, Dropdown Menu, 18+ Sections, Featured Product, Ajax Cart, 15+ Preeloader, Google Analytics and much more.</p>
                        <p>So, Juvento – Electronics eCommrce Shopify Theme is an undoubtedly well documented and cross browser optimized theme. You should try this new premium Shopify theme without any delay.</p>
                        <div class="lists_grp">
                          <h3>Main features:</h3>
                          <ul class="lists">
                            <li class="list">Quick Install</li>
                            <li class="list">Shopify Builder</li>
                            <li class="list">Theme Color Options</li>
                            <li class="list">Newsletter Popup</li>
                            <li class="list">Notification Bar</li>
                            <li class="list">Multiple Currency</li>
                            <li class="list">Header Style</li>
                            <li class="list">Dropdown Menu</li>
                            <li class="list">MegaMenu</li>
                            <li class="list">MegaMenu With Image</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mobile_view_more_btn">Show More <i class="fa fa-angle-down"></i></div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="widgets">
                    <div class="widget">
                      <div class="license">
                        <div class="heading">
                          <div class="_l">
                            <div class="select">Regular License <i class="fa fa-sort-down"></i></div>
                          </div>
                          <div class="_r"><sup>$</sup>12.00</div>
                        </div>
                        <div class="content">
                          <ul class="lists">
                            <li class="list">
                              <div class="icon">&#10003;</div>
                              <div class="text">Quality checked by Envato</div>
                            </li>
                            <li class="list">
                              <div class="icon">&#10003;</div>
                              <div class="text">Included:Future updates</div>
                            </li>
                            <li class="list">
                              <div class="icon">&#10003;</div>
                              <div class="text">Included:6 months support from HasTech</div>
                            </li>
                            <li class="list">
                              <div class="icon">
                                <input type="checkbox" id="sixMonth">
                              </div>
                              <div class="text" >
                                <div class="txt">Extend support to 12 months</div>
                                <div class="price">
                                  <span class="regular"><sup>$</sup><del>28.88</del></span>
                                  <span class="sale"><sup>$</sup>12.38</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="add_to_cart">
                            <button type="button">Add To Cart</button>
                          </div>
                          <p class="_p">Price is in US dollars and excludes tax</p>
                        </div>
                      </div>
                    </div>
                    <div class="widget">
                      <div class="author">
                        <div class="icon">
                          <img src="@/assets/images/preview/author.svg" alt="Image">
                        </div>
                        <div class="text">Elite Author</div>
                      </div>
                    </div>
                    <div class="widget">
                      <div class="author_g">
                        <div class="logo">
                          <img src="@/assets/images/preview/logo.png" alt="Image">
                        </div>
                        <div class="content">
                          <h4><a href="#">HasTech</a></h4>
                          <div class="items">
                            <div class="item">
                              <img src="@/assets/images/preview/author.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author01.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author02.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author03.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author03.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author01.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author02.svg" alt="Image">
                            </div>
                            <div class="item">
                              <img src="@/assets/images/preview/author03.svg" alt="Image">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view_pro">
                        <button type="button">View Profile</button>
                      </div>
                    </div>
                    <div class="widget">
                      <ul class="lists">
                        <li class="list">
                          <div class="name">Last Update</div>
                          <div class="detail">24 November 2021</div>
                        </li>
                        <li class="list">
                          <div class="name">Published</div>
                          <div class="detail">18 October 2018</div>
                        </li>
                        <li class="list">
                          <div class="name">High Resolution</div>
                          <div class="detail">Yes</div>
                        </li>
                        <li class="list">
                          <div class="name">Compatible Browsers</div>
                          <div class="detail">IE11, Firefox, Safari, Opera, Chrome, Edge</div>
                        </li>
                        <li class="list">
                          <div class="name">Compatible With</div>
                          <div class="detail">Bootstrap 4.x</div>
                        </li>
                        <li class="list">
                          <div class="name">Software Version</div>
                          <div class="detail">Shopify 2.0</div>
                        </li>
                        <li class="list">
                          <div class="name">ThemeForest Files Included</div>
                          <div class="detail">HTML Files, CSS Files, JS Files</div>
                        </li>
                        <li class="list">
                          <div class="name">Columns</div>
                          <div class="detail">4+</div>
                        </li>
                        <li class="list">
                          <div class="name">Documentation</div>
                          <div class="detail">Well Documented</div>
                        </li>
                        <li class="list">
                          <div class="name">Layout</div>
                          <div class="detail">Responsive</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Preview End -->
  
  
  

    <!-- Footer Section -->
    <footer>
      <div class="row footer-links">
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Google+</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Dribble</a></li>
          <li><a href="#">Github</a></li>
        </ul>
      </div>
    </footer>
    <!-- End: Footer Section -->
  
    <base-modal v-if="openSignUpModal" @close="openSignUpModal = false">
      <template #header> Sign Up </template>
  
      <template #default>
        <div class="mb_3">
          <base-input
            v-model="full_name"
            label="Full Name"
            placeholder="Enter Full Name"
          ></base-input>
        </div>
        <div class="mb_3">
          <base-input
            v-model="email"
            label="Email"
            placeholder="Enter Email"
          ></base-input>
        </div>
        <div class="mb_3">
          <base-input
            v-model="mobile"
            label="Mobile"
            placeholder="Enter Mobile"
          ></base-input>
        </div>
        <div class="mb_3">
          <base-input
            v-model="password"
            label="New Password"
            placeholder="Enter New Password"
          ></base-input>
        </div>
        <div class="mb_3">
          <base-input
            v-model="password_again"
            label="New Password Again"
            placeholder="Enter Password Again"
          ></base-input>
        </div>
      </template>
      <template #actions>
        <div class="signup-action">
          <div>
            <p  style="font-size:11px;">Already have a account? <a  style="font-size:14px" href="#" @click="openSignInModalMethod">SignIn</a></p>
          </div>
          <div class="button-box">
            <button class="button eight" type="button" @click="regiserAuth">Submit</button>
          </div>
        </div>
      </template>
    </base-modal>
  
    <base-modal v-if="openSignInModal" @close="openSignInModal = false">
      <template #header> Sign In </template>
  
      <template #default>
      
        <div class="mb_3">
          <base-input
            v-model="login_email"
            label="Email"
            placeholder="Enter Email"
          ></base-input>
        </div>
  
        <div class="mb_3">
          <base-input
            v-model="login_password"
            label="Password"
            placeholder="Enter Password"
          ></base-input>
        </div>
      </template>
      <template #actions>
        <div class="signup-action">
          <div>
            <p style="font-size:11px;">Create new account? &nbsp; <a style="font-size:14px" href="#" @click="openSignUpModalMethod">SignUp</a></p>
          </div>
          <div class="button-box">
            <button class="button eight" type="button" @click="loginAuth">Submit</button>
          </div>
        </div>
      </template>
    </base-modal>
  
  
  
  
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  // import HomeApi from '../comps/home-api.js';
  import { useRouter} from 'vue-router';
  import { useStore } from "vuex";
  import User from '@/middleware/User.js';
  export default {
    setup() {
      // route section
      const router = useRouter();
      // const route = useRoute();
  
  
      const store = useStore();
      //signin section
      const openSignInModal = ref(false);
      const login_email = ref('');
      const login_password = ref('');
      //signup section
      const openSignUpModal = ref(false);
      const full_name = ref('');
      const email = ref('');
      const mobile = ref('');
      const password = ref('');
      const password_again = ref('');
  
      //signin modal show method
      const openSignInModalMethod = () => {
        openSignInModal.value = true;
         openSignUpModal.value = false;
      };
  
      //signin method
      const loginAuth = () =>{
        const userinfo = {
          email: login_email.value,
          password: login_password.value
        }
        User.login(userinfo, router, store);
        openSignInModal.value = false;
      }
  
      //signup modal show mehod
      const openSignUpModalMethod = () => {
        openSignUpModal.value = true;
        openSignInModal.value = false;
      };
  
      const regiserAuth = () =>{
        const userinfo = {
          name: full_name.value,
          email: email.value,
          mobile: mobile.value,
          password: password.value,
          passwordConfirm: password_again.value,
          role: 'user'
        }
         User.register(userinfo, router, store);
         openSignUpModal.value = false;
      }
  
      onMounted(async()=>{
        console.log(await User.userinfo());
      })
  
      return {
        //signin
        login_email,
        login_password,
        openSignInModal,
        openSignInModalMethod,
        loginAuth,
        //signup
        openSignUpModal,
        openSignUpModalMethod,
        regiserAuth,
        full_name,
        email,
        mobile,
        password,
        password_again
      };
    },
  
    mounted(){
      let winWidth = window.innerWidth;
      if(winWidth < 992){
        let mobile_preview = document.querySelector('.preview_area .preview');
        let mobile_view_more_btn = document.querySelector('.preview_area .preview .mobile_view_more_btn');
        mobile_view_more_btn.addEventListener("click", function() {
          mobile_preview.classList.add('show');
        });
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  header {
    height: auto;
    padding: 30px 0;
    nav {
        .navbar {
            padding-top:0;
        }
    }
  }
  .button {
    width: 150px;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    border: none;
  }
  .eight {
    background-color: #052c41;
    color: white;
    border-radius: 5px;
    transition: transform 300ms;
  }
  
  .eight:hover {
    transform: scale(0.9);
    background-color: #041f2d;
  }
  .mb_3 {
    margin: 6px 0px;
    label {
      font-size: 20px;
    }
  }
  .signup-action {
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
      margin-top: 10px;
    }
  }
  .mobile-menu {
    right: 20px;
    position: absolute;
    margin-top: -50px;
  }


  .preview_area {
    .row {
        .preview {
            display: flex;
            column-gap: 20px;
            text-align: left;
            padding: 20px 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            .left {
                width: 65%;
                .theme_view {
                  .theme {
                    background-color: #fafafa;
                    color: #666666;
                    margin-bottom: 20px;
                    border-radius: 4px;
                    border: 1px solid #e1e8ed;
                    padding: 12px;
                    .thumb {
                      position: relative;
                      text-align: center;
                      overflow: hidden;
                      img {
                        width: 100%;
                        object-fit: cover;
                      }
                    }
                    .action {
                      padding-top: 12px;
                      text-align: center;
                      .link {
                        background-color: #0084B4;
                        color: #fff;
                        padding: 4px 20px;
                        display: inline-block;
                        border-radius: 4px;
                      }
                    }
                  }
                  .content {
                    p {
                      font-size: 16px;
                      color: #545454;
                      line-height: 1.5;
                      margin-bottom: 8px;
                      img {
                        width: 100%;
                      }
                    }
                    .lists_grp {
                      margin-top: 30px;

                      h3 {
                        font-size: 20px;
                        border-bottom: 1px solid #ddd;
                        color: #545454;
                        padding-bottom: 6px;
                        margin-bottom: 6px;
                        text-transform: capitalize;
                      }
                      .lists {
                        list-style-position: inside;
                        .list {
                          font-size: 16px;
                          color: #545454;
                          line-height: 1.5;
                          margin-bottom: 8px;
                          list-style-type: disc;
                        }
                      }
                    }
                    .mobile_view_more_btn {
                      display: none;
                    }
                  }
                }

            }
            .right {
                width: 35%;
                .widgets {
                  .widget {
                    background-color: #fafafa;
                    color: #666666;
                    margin-bottom: 20px;
                    padding: 16px;
                    border-radius: 4px;
                    border: 1px solid #e1e8ed;
                    .license {
                      .heading {
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 8px;
                        margin-bottom: 8px;
                        display: flex;
                        justify-content: space-between;
                        column-gap: 8px;
                        ._l {
                          .select {
                            font-size: 16px;
                            color: #454545;
                            font-weight: bold;
                            display: flex;
                            column-gap: 6px;
                          }
                        }
                        ._r {
                          font-size: 20px;
                          font-weight: bold;
                          color: #454545;
                          sup {
                            font-size: 12px;
                          }
                        }
                      }
                      .content {
                        .lists {
                          .list {
                            display: flex;
                            align-items: center;
                            .icon {}
                            .text {
                              font-size: 14px;
                              color: #999999;
                              display: flex;
                              align-items: center;
                              justify-content: space-between;
                              column-gap: 8px;
                              width: 100%;
                              .price {
                                font-size: 18px;
                                display: flex;
                                column-gap: 4px;
                                sup {
                                  font-size: 12px;
                                }
                                .regular {}
                                .sale {
                                  font-weight: bold;
                                  color: #454545;
                                }
                              }
                            }
                          }
                        }
                        .add_to_cart {
                          margin-top: 20px;
                          margin-bottom: 12px;
                          button {
                            background-color: #82b440;
                            font-size: 16px;
                            font-weight: bold;
                            padding: 12px 20px;
                            box-shadow: 0 2px 0 #6f9a37;
                            width: 100%;
                            border: none;
                            outline: none;
                            border-radius: 4px;
                            color: #fff;
                            cursor: pointer;
                            text-align: center;
                            display: block;
                            &:hover {
                              background-color: #6b9c2a;
                            }
                          }
                        }
                        ._p {
                          font-size: 12px;
                          text-align: center;
                          color: #545454;
                          display: block;
                        }
                      }
                    }
                    .author {
                      display: flex;
                      column-gap: 12px;
                      .icon {
                        width: 40px;
                        img {
                          max-width: 100%;
                        }
                      }
                      .text {
                        width: calc(100% - 40px);
                        display: flex;
                        align-items: center;
                      }
                    }
                    .author_g {
                      display: flex;
                      column-gap: 12px;
                      .logo {
                        width: 80px;
                        img {
                          max-width: 100%
                        }
                      }
                      .content {
                        width: calc(100% - 80px);
                        padding-right: 30px;
                        h4 {
                          margin-bottom: 20px;
                          a {
                            text-decoration: none;
                            color: #454545;
                            font-size: 20px;
                            text-transform: capitalize;
                            &:hover {
                              color: #787878;
                            }
                          }
                        }
                        .items {
                          display: flex;
                          flex-wrap: wrap;
                          column-gap: 6px;
                          row-gap: 10px;
                          .item {
                            img {
                              width: 32px;
                              height: 32px;
                              display: flex;
                            }
                          }
                        }
                      }
                    }
                    .view_pro {
                      button {
                        background-color: #e0e0e0;
                        box-shadow: 0 2px 0 #a8a8a8;
                        border: none;
                        outline: none;
                        text-align: center;
                        color: #666666;
                        display: block;
                        width: 100%;
                        padding: 8px;
                        font-size: 14px;
                        margin-top: 24px;
                        border-radius: 4px;
                        cursor: pointer;
                        &:hover {
                          background-color: #e5e5e5;
                        }
                      }
                    }
                    ul.lists {
                      li.list {
                        display: flex;
                        column-gap: 10px;
                        padding-bottom: 16px;
                        .name {
                          font-size: 14px;
                          color: #454545;
                          font-weight: bold;
                          width: 140px;
                        }
                        .detail {
                          width: calc(100% - 140px);
                          font-size: 14px;
                          color: #999999;
                        }
                      }
                    }
                  }
                }
            }
        }
    }
  }


  @media only screen and (max-width: 991px) {
    .preview_area {
      .row {
        .preview {
          flex-direction: column;
          row-gap: 20px;
          &.show {
            .left {
              .theme_view {
                .content {
                  .mobile_view {
                    position: relative;
                    &::before {
                      position: relative;
                    }
                  }
                  .mobile_view_more {
                    display: block;
                  }
                  .mobile_view_more_btn {
                    display: none;
                  }
                }
              }
            }
          }
          .left {
            width: 100%;
            .theme_view {
              .content {
                .mobile_view {
                  position: relative;
                  &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    bottom: 0;
                    z-index: 1;
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(255,255,255,0)), to(white));
                    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 50%, white 100%);
                    background: linear-gradient(to bottom, rgba(255,255,255,0) 50%, white 100%);
                    pointer-events: none;
                  }
                }
                .mobile_view_more {
                  display: none;
                }
                .mobile_view_more_btn {
                  margin-top: 12px;
                  font-size: 16px;
                  font-weight: 700;
                  text-align: center;
                  color: #0084B4;
                  display: block;
                }
              }
            }
          }
          .right {
              width: 100%;
          }
        }
      }
    }

  }

  </style>
  