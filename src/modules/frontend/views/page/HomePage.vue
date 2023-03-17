<template>
  <!-- Preloader -->
  <div class="preloader">
    <div class="loader"></div>
  </div>
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

    <!-- Hero Descriptions -->
    <div class="row">
      <div class="hero-main">
      <p> Welcome to NavigatorBD, a comprehensive software and ERP solution provider that is tailored to meet the specific needs of businesses in Bangladesh. Our state-of-the-art technology and advanced tools ensure that you have everything you need to manage your business more effectively.
      Our software solutions are designed to streamline your operations and improve productivity. Whether you are looking for accounting software, inventory management, HR and payroll management, or customer relationship management, we have got you covered. Our software solutions are easy to use, highly customizable, and scalable to grow with your business.
      In addition to our software solutions, we also offer Android apps that can be seamlessly integrated with your business operations. Our Android apps are designed to help you manage your business on the go, providing real-time access to critical data and allowing you to make informed decisions from anywhere.
      At NavigatorBD, we understand that every business is unique, and that is why we offer highly customizable solutions that can be tailored to your specific needs. Our team of experienced developers will work closely with you to understand your business requirements and develop a solution that is tailored to your needs.
      We also offer ongoing support and maintenance services to ensure that your software and Android apps are always up-to-date and working seamlessly. Our team of experts is available 24/7 to provide you with the support you need, whenever you need it.
      At NavigatorBD, our goal is to help you grow your business and achieve your goals. Contact us today to learn more about our software solutions, Android apps, and other services, and take the first step towards a more efficient and productive business.
      We focus on valued customers needs and create accordingly...!</p>
        <!-- <a href="#" class="btn hero-btn">WORK WITH US!</a> -->
      </div>
    </div>
    <!-- End: Hero Descriptions -->
  </header>
  <!-- End: Header Section -->




  <!-- Services Section -->
  <section id="services">
    <div class="row">
      <h2>SERVICES WE PROVIDE</h2>
      <p class="section-description">
        We are working with both individuals and businesses from all over the
        globe to create awesome websites and applications.
      </p>
    </div>
    <div class="row col-items">
      <div class="col span_1_of_4 box">
        <img src="@/assets/images/flag.png" alt="" class="services-icon" />
        <h3>Branding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh.
        </p>
      </div>
      <div class="col span_1_of_4 box">
        <img src="@/assets/images/pencil.png" alt="" class="services-icon" />
        <h3>Design</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos qui blanditiis
          praesentium.
        </p>
      </div>
      <div class="col span_1_of_4 box">
        <img src="@/assets/images/gears.png" alt="" class="services-icon" />
        <h3>Development</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos qui blanditiis
          praesentium.
        </p>
      </div>
      <div class="col span_1_of_4 box">
        <img src="@/assets/images/rocket.png" alt="" class="services-icon" />
        <h3>ROCKET SCIENCE</h3>
        <p>
          Et harum quidem rerum est et expedita distinctio. Nam libero tempore.
        </p>
      </div>
    </div>
  </section>
  <!-- End: Services Section -->

  <!-- Team Section -->
    <TeamPage />
  <!-- End: Team Section -->













  <!-- Skill Section -->
  <section id="skill">
    <div class="row">
      <h2>WE GOT SKILLS!</h2>
      <p class="section-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="row">
      <div class="col span_1_of_4 skill-box">
        <svg
          class="radial-progress web-design"
          data-percentage="90"
          viewBox="0 0 80 80"
        >
          <circle class="incomplete" cx="40" cy="40" r="35"></circle>
          <circle class="complete" cx="40" cy="40" r="35"></circle>
          <text
            class="percentage"
            x="50%"
            y="57%"
            transform="matrix(0, 1, -1, 0, 80, 0)"
          >
            90%
          </text>
        </svg>
        <h3>WEB DESIGN</h3>
      </div>
      <div class="col span_1_of_4 skill-box">
        <svg
          class="radial-progress html-css"
          data-percentage="75"
          viewBox="0 0 80 80"
        >
          <circle class="incomplete" cx="40" cy="40" r="35"></circle>
          <circle class="complete" cx="40" cy="40" r="35"></circle>
          <text
            class="percentage"
            x="50%"
            y="57%"
            transform="matrix(0, 1, -1, 0, 80, 0)"
          >
            75%
          </text>
        </svg>
        <h3>HTML / CSS</h3>
      </div>
      <div class="col span_1_of_4 skill-box">
        <svg
          class="radial-progress graphic-design"
          data-percentage="70"
          viewBox="0 0 80 80"
        >
          <circle class="incomplete" cx="40" cy="40" r="35"></circle>
          <circle class="complete" cx="40" cy="40" r="35"></circle>
          <text
            class="percentage"
            x="50%"
            y="57%"
            transform="matrix(0, 1, -1, 0, 80, 0)"
          >
            70%
          </text>
        </svg>
        <h3>GRAPHIC DESIGN</h3>
      </div>
      <div class="col span_1_of_4 skill-box">
        <svg
          class="radial-progress ui-ux"
          data-percentage="85"
          viewBox="0 0 80 80"
        >
          <circle class="incomplete" cx="40" cy="40" r="35"></circle>
          <circle class="complete" cx="40" cy="40" r="35"></circle>
          <text
            class="percentage"
            x="50%"
            y="57%"
            transform="matrix(0, 1, -1, 0, 80, 0)"
          >
            85%
          </text>
        </svg>
        <h3>UI/UX DESIGN</h3>
      </div>
    </div>
  </section>
  <!-- End: Skill Section -->

  <!-- Portfolio Section -->
  <PortfolioPage />
  <!-- End: Portfolio Section -->

  <!-- Testimonial Section -->
  <section id="testimonial">
    <div class="row">
      <h2 class="testimonial-heading">WHAT POEPLE SAY ABOUT US</h2>
      <p class="section-description">Our clients love us!</p>
    </div>
    <div class="row testimonial-items">
      <div class="col span_1_of_2">
        <div class="client-avatar">
          <img src="@/assets/images/avatar1.jpg" />
        </div>
        <div class="client-review">
          <p>
            “Nullam dapibus blandit orci, viverra gravida dui lobortis eget.
            Maecenas fringilla urna eu nisl scelerisque.”
          </p>
          <h3>Chanel Iman</h3>
          <p class="client-role">CEO of Pinterest</p>
        </div>
      </div>
      <div class="col span_1_of_2">
        <div class="client-avatar">
          <img src="@/assets/images/avatar2.jpg" />
        </div>
        <div class="client-review">
          <p>
            “Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.”
          </p>
          <h3>ADRIANA LIMA</h3>
          <p class="client-role">Founder of Instagram</p>
        </div>
      </div>
    </div>

    <div class="row testimonial-items">
      <div class="col span_1_of_2">
        <div class="client-avatar">
          <img src="@/assets/images/avatar3.jpg" />
        </div>
        <div class="client-review">
          <p>
            “Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.”
          </p>
          <h3>ANNE HATHAWAY</h3>
          <p class="client-role">Lead Designer at Behance</p>
        </div>
      </div>
      <div class="col span_1_of_2">
        <div class="client-avatar">
          <img src="@/assets/images/avatar4.jpg" />
        </div>
        <div class="client-review">
          <p>
            “Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.”
          </p>
          <h3>EMMA STONE</h3>
          <p class="client-role">Co-Founder of Shazam</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End: Testimonial Section -->

  <!-- Contact Section -->
  <section id="contact">

    <ContactPage />

  </section>
  <!-- End: Contact Section -->

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
import ContactPage from './ContactPage.vue';
import PortfolioPage from './PortfolioPage.vue';
import TeamPage from './TeamPage.vue';
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


  components:{
    ContactPage,
    PortfolioPage,
    TeamPage
  }
};
</script>
<style lang="scss" scoped>
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
</style>
