<template>
  <div class="header_main">
    <div class="wrap">
      <div class="left">
        <div class="toggle" @click="AsideToggleClick" @blur="alert('Hi')">
          <span class="_line"></span>
        </div>
      </div>
      <div class="middle">
        <div class="logo">
          <router-link to="/" class="link">
            <img class="img" src="@/assets/logo.webp" alt="Logo" />
            <div class="title">
              <span>Soft</span>
              <span>Commerce</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="_left">
          <div class="logo">
            <router-link to="/" class="link">
              <img class="img" src="@/assets/logo.webp" alt="Logo" />
              <div class="title">
                <span>Soft</span>
                <span>Commerce</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="_middle">
          <div class="search">
            <form>
              <input
                type="text"
                v-model="search"
                @click="searchOptionsShow"
                @blur="SearchOptionBlur"
                @focus="apiRequest"
                placeholder="Search Product..."
              />
              <button type="button" name="button" aria-label="Search Button">
                <img src="@/assets/webp/search.webp" alt="Search Image" />
              </button>
            </form>

            <div
              class="results"
              :class="{ show: search_options_show }"
              v-if="toggle"
              @blur="SearchOptionBlur"
            >
              <div class="result" v-for="book in newBooks" :key="book.gid">
                <a
                  class="link"
                  :key="book.gid"
                  :href="'/softmarket/category-shop/' + book.gid"
                  @click="clickCategoryShop"
                  >{{ book.name.en }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="_right">
          <div class="user_options">
            <ul class="items">
              <li class="item search">
                <router-link to="" class="link" @click="searchOptionsShow">
                  <img src="@/assets/webp/search.webp" alt="Search" />
                </router-link>
                <div
                  class="mobile_search"
                  :class="{ show: search_options_show }"
                  @blur="SearchOptionBlur"
                >
                  <div class="_srh">
                    <form>
                      <input
                        type="text"
                        v-model="search"
                        @blur="SearchOptionBlur"
                        @focus="apiRequest"
                        placeholder="Search Product..."
                      />
                      <button type="button" aria-label="Search">
                        <img src="@/assets/webp/search.webp" alt="Search" />
                      </button>
                    </form>

                    <div
                      class="results"
                      v-if="toggle"
                      :class="{ show: search_options_show }"
                    >
                      <div
                        class="result"
                        v-for="book in newBooks"
                        :key="book.gid"
                      >
                        <a
                          class="link"
                          :key="book.gid"
                          :href="'/softmarket/category-shop/' + book.gid"
                          @click="clickCategoryShop"
                          >{{ book.name.en }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="item balance" v-if="LogedIn">
                <router-link
                  to=""
                  class="link"
                  @click="userMobileWalletShow"
                  @blur="userMobileWalletShow"
                >
                  <div>Soft Wallet</div>
                  <!-- <div class="join">(200)</div> -->
                </router-link>

                <div
                  class="user_activities"
                  :class="{ show: user_mobile_wallet_show }"
                  @blur="userMobileWalletShow"
                >
                  <div class="show_info">
                    <h4
                      style="
                        padding: 6px;
                        background: green;
                        color: white;
                        cursor: pointer;
                      "
                    >
                      Add Your Mobile Bank
                    </h4>
                  </div>
                </div>
              </li>

              <li class="item activities" v-if="LogedIn">
                <router-link
                  to=""
                  class="link"
                  @click="userOptionsShow"
                  @blur="userOptionsShow"
                >
                  <img class="img users" src="@/assets/logo.webp" alt="Users" />
                </router-link>

                <div
                  class="user_activities"
                  :class="{ show: user_options_show }"
                  @blur="userOptionsShow"
                >
                  <div class="show_info">
                    <h4>
                      Hi! <span>{{ name }}</span>
                    </h4>
                    <h5>{{ phone }}</h5>
                  </div>
                  <h4
                    style="cursor: pointer; margin-bottom: 2px"
                    class="mobile_show_wallet"
                    @click="userMobileWalletShow"
                  >
                    Soft Wallet
                  </h4>
                  <h4>Account</h4>
                  <ul class="_items">
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Messages</div>
                      </router-link>
                    </li>
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Comments</div>
                      </router-link>
                    </li>
                  </ul>

                  <h4>Settings</h4>
                  <ul class="_items">
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Profile</div>
                      </router-link>
                    </li>
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Settings</div>
                      </router-link>
                    </li>
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Payments</div>
                      </router-link>
                    </li>
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Projects</div>
                      </router-link>
                    </li>
                  </ul>
                  <ul class="_items">
                    <li class="_item">
                      <router-link to="#" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Lock Account</div>
                      </router-link>
                    </li>
                    <li class="_item">
                      <router-link to="#" @click="LogedOut" class="_link">
                        <div class="_icon"></div>
                        <div class="_txt">Logout</div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item" v-else>
                <router-link to="/login" class="link">
                  <base-button type="button" small="btn_css">Login</base-button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import SetupStore from "../store/AdminSetupStore.js";
// import User from '@/middleware/User';
import HomeApi from "../comp/admin-api.js";


// import {useRouter} from 'vue-router';
export default {
  setup() {
    const { AsideToggleClick, aside_control } = SetupStore();
    const name = ref('');
    const phone = ref('');
    // const router = useRouter();
    const LogedIn = computed(() => {
      // return User.logedIn();
      return true;
    });
    // const LogedOut =  computed(()=>{
    //     // User.logOut();
    //     //  router.go('/');
    // });

    return {
      AsideToggleClick,
      aside_control,
      LogedIn,
      name,
      phone,
      // LogedOut,
    };
  },

  watch: {
    search(val) {
      this.toggle = true;
      this.newBooks = [];
      this.books.forEach((element) => {
        if (element.name.en.toLowerCase().startsWith(val) && val != "") {
          this.newBooks.push(element);
        }
      });
    },
  },
  data() {
    return {
      user_options_show: false,
      search_options_show: false,
      user_mobile_wallet_show: false,
      search: "",
      toggle: true,
      books: [],
      newBooks: [],
    };
  },

  methods: {
    eventNow() {
      setTimeout(() => {
        // this.toggle = false;
      }, 200);
    },
    searchOptionsShow() {
      this.search_options_show = !this.search_options_show;
      this.user_mobile_wallet_show = false;
      this.user_options_show = false;
    },
    userMobileWalletShow() {
      setTimeout(() => {
        this.user_mobile_wallet_show = !this.user_mobile_wallet_show;
        this.search_options_show = false;
        this.user_options_show = false;
      }, 500);
    },
    userOptionsShow() {
      setTimeout(() => {
        this.user_options_show = !this.user_options_show;
        this.user_mobile_wallet_show = false;
        this.search_options_show = false;
      }, 500);
    },

    SearchOptionBlur() {
      setTimeout(() => {
        this.search_options_show = false;
      }, 500);
    },

    LogedOut() {
      // User.logOut();
      this.$router.go("/");
    },

    async getCategoryData() {
      const search_data = await HomeApi.getCategoryDataAllCategory();
      this.books = search_data.data;
    },
    apiRequest() {
      this.getCategoryData();
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
.results {
  display: none;
}
.results.show {
  display: block;
  z-index: 1000000;
  position: absolute;
  width: 480px;
  max-height: 420px;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  top: 39px;
  .result {
    padding: 10px 0.75rem;
    .link {
      text-decoration: none;
      color: black;
    }
    //   overflow-y: scroll;
    &:hover {
      background: #efefef;
    }
  }
}
</style>

<style lang="scss" scoped>
.btn_css {
  padding: 10px 20px;
  font-size: 13px;
}
.header_main {
  background: #f2f2f2;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  .wrap {
    display: flex;
    column-gap: 30px;
    padding: 0 16px;
    width: 100%;
    .left {
      display: flex;
      align-items: center;
      .toggle {
        display: flex;
        align-items: center;
        cursor: pointer;
        z-index: 999;
        padding: 12px 6px;
        ._line {
          width: 20px;
          height: 2px;
          background-color: #444;
          background-image: linear-gradient(310deg, #7928ca, #ff0080);
          display: block;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease 0s;
          -webkit-transition: all 0.3s ease 0s;
          &::before,
          &::after {
            position: absolute;
            content: "";
            width: 20px;
            height: 2px;
            background-color: #444;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            display: block;
          }
          &::before {
            top: -7px;
          }
          &::after {
            bottom: -7px;
          }
          &:hover,
          &:hover::before,
          &:hover::after {
            color: #f19024;
          }
        }
      }
    }
    .middle {
      display: none;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 30px;
      width: 100%;
      ._left {
        width: 20%;
        display: flex;
        align-items: center;
        .logo {
          max-width: 140px;
          cursor: pointer;
          .link {
            display: flex;
            align-items: center;
            column-gap: 6px;
            text-decoration: none;
            .img {
              width: 40px;
            }
            .title {
              display: flex;
              flex-direction: column;
              font-size: 14px;
              color: #000;
              font-family: "Arial Black";
              line-height: 14px;
              text-transform: uppercase;
            }
          }
        }
      }
      ._middle {
        width: 60%;
        .search {
          display: flex;
          justify-content: center;
          form {
            display: flex;
            border: 1px solid #ddd;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            height: 40px;
            border-radius: 8px;
            overflow: hidden;
            input {
              width: 450px;
              border: none;
              outline: none;
              padding: 4px 12px;
              font-size: 16px;
              color: #444;
              letter-spacing: 1px;
            }
            button {
              border: none;
              outline: none;
              width: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              background: #f2f2f2;
              img {
                width: 20px;
                fill: #f19024;
                height: 20px;
              }
            }
          }
        }
      }
      ._right {
        width: 20%;
        .user_options {
          display: flex;
          align-items: center;
          justify-content: end;
          .items {
            list-style: none;
            display: flex;
            align-items: center;
            column-gap: 20px;
            .item {
              position: relative;
              &.search {
                display: none;
                position: relative;
                .link {
                  display: flex;
                  column-gap: 4px;
                  cursor: pointer;
                  img {
                    width: 24px;
                    height: 24px;
                  }
                }
                .mobile_search {
                  position: absolute;
                  top: 30px;
                  right: -25px;
                  width: 300px;
                  background-color: #fff;
                  padding: 12px 20px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                  border-radius: 4px;
                  margin-top: 30px;
                  z-index: 0;
                  visibility: hidden;
                  // overflow: hidden;
                  opacity: 0;
                  transition: all 0.3s ease 0s;
                  -webkit-transition: all 0.3s ease 0s;
                  &.show {
                    visibility: visible;
                    opacity: 998;
                    margin-top: 0;
                    // overflow: hidden;
                    z-index: 1;
                  }
                  ._srh {
                    display: flex;
                    justify-content: center;
                    form {
                      display: flex;
                      border: 1px solid #ddd;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                      width: -webkit-fit-content;
                      width: -moz-fit-content;
                      width: fit-content;
                      height: 40px;
                      border-radius: 8px;
                      overflow: hidden;
                      input {
                        width: 250px;
                        border: none;
                        outline: none;
                        padding: 4px 12px;
                        font-size: 14px;
                        color: #444;
                        letter-spacing: 1px;
                      }
                      button {
                        border: none;
                        outline: none;
                        width: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        background: #f2f2f2;
                        svg {
                          width: 20px;
                          fill: #f19024;
                        }
                        img {
                          max-width: 20px;
                          height: 20px;
                          width: 20px;
                        }
                      }
                    }
                    .results {
                      max-width: 480px;
                      width: 100%;
                      max-height: 350px;
                      overflow-y: auto;
                      top: 60px;
                      border-radius: 0 0 4px 4px;
                    }
                  }
                }
              }
              &.balance,
              &.cart {
                display: flex;

                .link {
                  display: flex;
                  column-gap: 4px;
                  cursor: pointer;
                  img {
                    width: 24px;
                    height: 24px;
                  }
                  .join {
                    font-size: 12px;
                    color: #444;
                  }
                }
              }

              .link {
                color: #444;
                text-decoration: none;
                display: flex;
                cursor: pointer;
                transition: all 0.3s ease 0s;
                -webkit-transition: all 0.3s ease 0s;
                &:hover {
                  color: #f19024;
                }
                .img {
                  width: 20px;
                  height: 20px;
                  fill: #000;
                }
                .img.users {
                  width: 36px;
                  height: 36px;
                  border-radius: 50%;
                  border: 1px solid #ddd;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                  // display: inline;
                }
              }
              .user_activities {
                position: absolute;
                right: 0;
                top: 40px;
                width: 220px;
                height: auto;
                background-color: #fff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                margin-top: 30px;
                visibility: hidden;
                overflow: hidden;
                opacity: 0;
                transition: all 0.3s ease 0s;
                -webkit-transition: all 0.3s ease 0s;
                z-index: 0;
                .mobile_show_wallet {
                  display: none;
                }

                &.show {
                  visibility: visible;
                  opacity: 1;
                  margin-top: 0;
                  overflow: hidden;
                  z-index: 2;
                }
                & > h4 {
                  background-color: #f2f2f2;
                  padding: 12px 8px;
                  font-size: 12px;
                  color: #444;
                }
                .show_info {
                  padding: 12px 8px;
                  text-align: center;
                  h4 {
                    color: #444;
                    margin-bottom: 4px;
                  }
                  h5 {
                    color: #777;
                    font-size: 13px;
                  }
                }
                ._items {
                  list-style: none;
                  &:last-child {
                    border-top: 1px solid #ddd;
                  }
                  ._item {
                    ._link {
                      text-decoration: none;
                      padding: 8px 16px;
                      display: block;
                      transition: all 0.3s ease 0s;
                      -webkit-transition: all 0.3s ease 0s;
                      &:hover {
                        background-color: #e0e0e0;
                      }

                      ._txt {
                        font-size: 12px;
                        color: #444;
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

$phone-width-small: 360px;
$phone-width: 575px;
$tablet-width: 767px;
$custom-width: 991px;
$desktop-width: 1023px;

@media (max-width: #{$desktop-width}) {
}

@media (max-width: #{$custom-width}) {
  .header_main {
    .wrap {
      // .left {

      // }
      .right {
        column-gap: 12px;
        ._left {
          width: 28%;
        }
        ._middle {
          width: 44%;
          .search {
            form {
              input {
                width: 175px;
              }
            }
          }
        }
        ._right {
          width: 28%;
        }
      }
    }
  }
}

@media (max-width: #{$tablet-width}) {
  .results.show {
    max-height: 370px;
  }
  .btn_css {
    padding: 8px 16px;
    font-size: 12px;
  }
  .header_main {
    .wrap {
      .left {
        width: 20%;
      }
      .middle {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo {
          max-width: 120px;
          .link {
            display: flex;
            align-items: center;
            column-gap: 6px;
            text-decoration: none;
            .img {
              width: 34px;
            }
            .title {
              display: flex;
              flex-direction: column;
              font-size: 13px;
              color: #000;
              font-family: "Arial Black";
              line-height: 14px;
              text-transform: uppercase;
            }
          }
        }
      }
      .right {
        width: 20%;
        display: flex;
        justify-content: end;
        ._left,
        ._middle {
          display: none;
        }
        ._right {
          .user_options {
            .items {
              column-gap: 8px;
              display: flex;
              .item {
                &.search {
                  display: block;
                }

                .link {
                  svg {
                    width: 20px;
                    fill: #f19024;
                  }
                }
                .user_activities {
                  width: 160px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: #{$phone-width}) {
  .btn_css {
    padding: 8px 16px;
    font-size: 12px;
  }
  .header_main {
    .wrap {
      // .left {
      // }
      // .middle {
      //     .logo {
      //         .img {
      //         }
      //     }
      // }
      .right {
        // ._left,
        // ._middle {
        // }
        ._right {
          .user_options {
            .items {
              display: flex;
              .item {
                // &.search {
                //     .mobile_search {
                //     }
                // }
                &.balance {
                  .link {
                    display: none;
                  }
                }

                &.cart {
                  display: flex;
                }

                // .link {
                //     svg {
                //     }
                // }
                .user_activities {
                  width: 220px;
                  .mobile_show_wallet {
                    display: flex;
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

@media (max-width: #{$phone-width-small}) {
}
</style>
