<template>
  <aside class="main_sidebar" :class="{ active: aside_control }">
    <div class="header">
      <div class="logo">
        <img src="@/assets/new/logo/logo.webp" alt="Logo" />
      </div>
    </div>
    <div class="body">
      <div class="scroll">
        <ul class="items">
          <li class="item" @click="SiteOverlayHideBtn">
            <router-link to="/" class="link">
              <div class="text">
                <span class="icon">
                  <img
                    src="@/assets/webp/dashboard.webp"
                    style="width: 20px; height: 20px"
                    alt
                  />
                </span>
                <span class="txt">Home</span>
              </div>
              <span class="arrow"></span>
            </router-link>
          </li>

          <li class="item" @click="MenuDataShow;">
            <router-link to="#" class="link">
              <div class="text">
                <span class="icon">
                  <img
                    src="@/assets/webp/dashboard.webp"
                    style="width: 20px; height: 20px"
                    alt
                  />
                </span>
                <span class="txt">Project</span>
              </div>
              <span class="arrow">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  style="enable-background: new 0 0 64 64"
                  xml:space="preserve"
                >
                  <path
                    class="st0"
                    d="M63.99,18.92c-0.31,1.54-1.35,2.58-2.41,3.64c-8.72,8.67-17.42,17.36-26.12,26.05
                                        c-1.38,1.38-2.96,1.95-4.88,1.36c-0.76-0.23-1.37-0.68-1.92-1.23C19.6,39.7,10.53,30.67,1.48,21.62c-2.38-2.38-1.83-5.99,1.13-7.38
                                        c1.55-0.73,3.08-0.54,4.49,0.45c0.34,0.24,0.64,0.53,0.93,0.83c7.82,7.8,15.65,15.6,23.46,23.42c0.38,0.38,0.58,0.43,0.99,0.02
                                        c7.85-7.86,15.72-15.7,23.59-23.56c1.36-1.36,2.94-1.94,4.82-1.34c1.44,0.46,2.39,1.44,2.88,2.88c0.07,0.2,0.03,0.46,0.23,0.61
                                        C63.99,18,63.99,18.46,63.99,18.92z"
                  />
                </svg>
              </span>
            </router-link>
            <ul class="_items" :class="[menuDataShow ? 'dropdown' : '']">
              <li class="_item" @click="SiteOverlayHideBtn">
                <router-link to="/admin/add_project" class="_link">
                  <div class="_text">
                    <span class="_icon"></span>
                    <span class="_txt">Add Project</span>
                  </div>
                  <span class="_arrow"></span>
                </router-link>
              </li>
              <li class="_item" @click="SiteOverlayHideBtn">
                <router-link to="/admin/view_project" class="_link">
                  <div class="_text">
                    <span class="_icon"></span>
                    <span class="_txt">View Project</span>
                  </div>
                  <span class="_arrow"></span>
                </router-link>
              </li>
            </ul>
          </li>
          
          <li class="item" @click="MenuDataShow;">
            <router-link to="#" class="link">
              <div class="text">
                <span class="icon">
                  <img
                    src="@/assets/webp/dashboard.webp"
                    style="width: 20px; height: 20px"
                    alt
                  />
                </span>
                <span class="txt">Team Memeber</span>
              </div>
              <span class="arrow">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  style="enable-background: new 0 0 64 64"
                  xml:space="preserve"
                >
                  <path
                    class="st0"
                    d="M63.99,18.92c-0.31,1.54-1.35,2.58-2.41,3.64c-8.72,8.67-17.42,17.36-26.12,26.05
                                        c-1.38,1.38-2.96,1.95-4.88,1.36c-0.76-0.23-1.37-0.68-1.92-1.23C19.6,39.7,10.53,30.67,1.48,21.62c-2.38-2.38-1.83-5.99,1.13-7.38
                                        c1.55-0.73,3.08-0.54,4.49,0.45c0.34,0.24,0.64,0.53,0.93,0.83c7.82,7.8,15.65,15.6,23.46,23.42c0.38,0.38,0.58,0.43,0.99,0.02
                                        c7.85-7.86,15.72-15.7,23.59-23.56c1.36-1.36,2.94-1.94,4.82-1.34c1.44,0.46,2.39,1.44,2.88,2.88c0.07,0.2,0.03,0.46,0.23,0.61
                                        C63.99,18,63.99,18.46,63.99,18.92z"
                  />
                </svg>
              </span>
            </router-link>
            <ul class="_items" :class="[menuDataShow ? 'dropdown' : '']">
              <li class="_item" @click="SiteOverlayHideBtn">
                <router-link to="/admin/add_team_member" class="_link">
                  <div class="_text">
                    <span class="_icon"></span>
                    <span class="_txt">Add Team Memeber</span>
                  </div>
                  <span class="_arrow"></span>
                </router-link>
              </li>
              <li class="_item" @click="SiteOverlayHideBtn">
                <router-link to="/admin/view_team_member" class="_link">
                  <div class="_text">
                    <span class="_icon"></span>
                    <span class="_txt">View Team Member</span>
                  </div>
                  <span class="_arrow"></span>
                </router-link>
              </li>
            </ul>
          </li>
          

          <li class="item" @click="SiteOverlayHideBtn">
            <router-link to="/admin/contact-list" class="link">
              <div class="text">
                <span class="icon">
                  <img
                    src="@/assets/webp/dashboard.webp"
                    style="width: 20px; height: 20px"
                    alt
                  />
                </span>
                <span class="txt">Contact Us</span>
              </div>
              <span class="arrow"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
  <div
    class="mobile_overly_site"
    @click="SiteOverlayHideBtn"
    :class="[SiteOverlay ? 'show' : '']"
  ></div>
</template>

<script>
import AdminSetupStore from "../store/AdminSetupStore.js";
export default {
  setup() {
    const { aside_control, SiteOverlay, SiteOverlayHideBtn } =
      AdminSetupStore();

    return {
      aside_control: aside_control(),
      SiteOverlay: SiteOverlay(),
      SiteOverlayHideBtn,
    };
  },
  mounted() {
    const item = document.querySelectorAll("aside .items .item .link");
    const _item = document.querySelectorAll("aside ._items ._item ._link");

    for (let i = 0; i < item.length; i++) {
      item[i].addEventListener("click", function () {
        // All active item link remove
        let all_link = document.querySelectorAll("aside .items .item .link");
        for (let l = 0; l < all_link.length; l++) {
          all_link[l].classList.remove("active");
        }

        // This item link active
        this.classList.add("active");

        // All _items height remove
        let all_items = document.querySelectorAll("aside ._items");
        for (let k = 0; k < all_items.length; k++) {
          all_items[k].style.maxHeight = null;
        }

        // this _items height active
        let _items = this.closest(".item").querySelector("._items");
        _items.style.maxHeight = _items.scrollHeight + "px";

        // ================
        // All active _item _link remove
        let _all_link = document.querySelectorAll(
          "aside ._items ._item ._link"
        );
        for (let p = 0; p < _all_link.length; p++) {
          _all_link[p].classList.remove("active");
        }

        // All _items height remove
        let _all_items = document.querySelectorAll("aside .__items");
        for (let q = 0; q < _all_items.length; q++) {
          _all_items[q].style.maxHeight = null;
        }
      });
    }

    // SubMenu
    for (let j = 0; j < _item.length; j++) {
      _item[j].addEventListener("click", function () {
        // All active _item _link remove
        let _all_link = document.querySelectorAll(
          "aside ._items ._item ._link"
        );
        for (let p = 0; p < _all_link.length; p++) {
          _all_link[p].classList.remove("active");
        }

        // This _item _link active
        this.classList.toggle("active");

        // All _items height remove
        let _all_items = document.querySelectorAll("aside .__items");
        for (let q = 0; q < _all_items.length; q++) {
          _all_items[q].style.maxHeight = null;
        }

        // this __items height active
        let __items = this.closest("._item").querySelector(".__items");
        __items.style.maxHeight = __items.scrollHeight + "px";

        // Main _items height add __items
        for (let i = 0; i < item.length; i++) {
          let _items = this.closest(".item").querySelector("._items");
          _items.style.maxHeight =
            __items.scrollHeight + _items.scrollHeight + "px";
        }
      });
    }
  },
  data() {
    return {
      menuDataShow: false,
    };
  },
  methods: {
    MenuDataShow() {
      this.menuDataShow = !this.menuDataShow;
    },
  },
};
</script>

<style lang="scss" scoped>
aside.main_sidebar {
  position: absolute;
  width: 0;
  height: 100%;
  overflow: hidden;
  background-color: #303641;
  z-index: 999;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.active {
    width: 300px;
  }
  .header {
    height: 60px;
    background: #1b1e23;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 100%;
        width: 40px;
      }
    }
  }
  .body {
    height: 100%;
    .scroll {
      overflow-y: auto;
      height: calc(100% - 60px);
      .items {
        list-style: none;
        .item {
          overflow: hidden;
          &.tree {
            .arrow {
              position: relative;
              &::after {
                position: absolute;
                content: "";
                background-image: url("@/assets/arrow/down-arrow.svg");
                top: 50%;
                right: 0;
                width: 9px;
                height: 9px;
                fill: #000;
                transform: translateY(-50%);
                transition: all 0.3s ease 0s;
                -webkit-transition: all 0.3s ease 0s;
              }
            }
          }
          &.drop {
            .arrow {
              &::after {
                background-image: url("@/assets/arrow/up-arrow.svg");
              }
            }
            ._items {
              max-height: min-content;
              opacity: 1;
            }
          }
          .link {
            color: #fff;
            text-decoration: none;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease 0s;
            -webkit-transition: all 0.3s ease 0s;
            &:hover {
              background-color: #3d444e;
            }
            &.active {
              background-color: #3d444e;
              .arrow {
                &::after {
                  transform: rotate(-180deg);
                }
              }
            }
            .text {
              display: flex;
              align-items: center;
              .icon {
                padding-right: 8px;
                svg {
                  width: 20px;
                  height: 20px;
                  fill: #fff;
                }
              }
              .txt {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
            }
            .arrow {
              svg {
                width: 9px;
                fill: #fff;
              }
            }
          }
          // Sub menu Css
          ._items {
            max-height: 0;
            // opacity: 0;
            // overflow: hidden;
            background-color: #2a2e36;
            transition: all 0.3s ease 0s;
            -webkit-transition: all 0.3s ease 0s;
            ._item {
              &.tree {
                ._arrow {
                  position: relative;
                  &::after {
                    position: absolute;
                    content: "";
                    background-image: url("@/assets/arrow/down-arrow.svg");
                    top: 50%;
                    right: 0;
                    width: 9px;
                    height: 9px;
                    fill: #000;
                    transform: translateY(-50%);
                    transition: all 0.3s ease 0s;
                    -webkit-transition: all 0.3s ease 0s;
                  }
                }
              }
              &.sub_drop {
                ._arrow {
                  &::after {
                    background-image: url("@/assets/arrow/up-arrow.svg");
                  }
                }
                .__items {
                  max-height: min-content;
                  opacity: 1;
                }
              }
              ._link {
                color: #fff;
                text-decoration: none;
                padding: 6px 16px 6px 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &:hover {
                  background-color: #3a3e44;
                }
                &.active {
                  background-color: #3d444e;
                  ._arrow {
                    &::after {
                      transform: rotate(-180deg);
                    }
                  }
                }
                ._text {
                  ._txt {
                    font-size: 12px;
                    letter-spacing: 1px;
                  }
                }
              }
              // Sub Sub menu Css
              .__items {
                max-height: 0;
                // opacity: 0;
                overflow: hidden;
                background-color: #191a1f;
                transition: all 0.3s ease 0s;
                -webkit-transition: all 0.3s ease 0s;
                .__item {
                  .__link {
                    color: #fff;
                    text-decoration: none;
                    padding: 6px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &:hover,
                    &.active {
                      background-color: #3a3e44;
                    }
                    .__text {
                      .__txt {
                        font-size: 12px;
                        letter-spacing: 1px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.mobile_overly_site {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all 0.2s ease 0s;
  -webkit-transition: all 0.2s ease 0s;
  &.show {
    // background-color: rgba(0, 0, 0, 0.25);
    z-index: 950;
  }
}

$phone-width-small: 360px;
$phone-width: 575px;
$tablet-width: 767px;
$custom-width: 991px;
$desktop-width: 1023px;

@media (max-width: #{$desktop-width}) {
}

@media (max-width: #{$custom-width}) {
}

@media (max-width: #{$tablet-width}) {
  .mobile_overly_site {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.2s ease 0s;
    &.show {
      background-color: rgba(0, 0, 0, 0.25);
      z-index: 950;
    }
  }
  aside.main_sidebar {
    position: fixed;
    left: 0;
    top: 0;
  }
  aside.main_sidebar.active {
    width: 200px;
  }
}

@media (max-width: #{$phone-width}) {
}

@media (max-width: #{$phone-width-small}) {
}
</style>
