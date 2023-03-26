<template>
  <div class="contact-area">
    <div class="row top-row animate__animated">
      <h2 class="contact-heading">GET IN TOUCH</h2>
      <p class="section-description">
        1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America.
        <br />
        Tel: (202) 456-1111
      </p>
    </div>
    <div class="row bottom-row contact-form animate__animated">
      <form action="#" method="POST" @submit.prevent="contactFormSubmit">
        <div class="row">
          <div class="col span_1_of_2">
            <input
              type="text"
              name="Name"
              v-model="full_name"
              placeholder="Your Name*"
              required
            />
          </div>
          <div class="col span_1_of_2">
            <input
              type="email"
              v-model="email"
              name="Mail"
              placeholder="Your Email*"
              required
            />
          </div>
        </div>
        <div class="row">
           <input
              type="tel"
              class="tel_number"
              v-model="mobile"
              name="mobile"
              placeholder="Your Mobile*"
              required
              
            />
        </div>
        <div class="row">
          <textarea
            name="Message"
            v-model="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message*"
            required
          ></textarea>
        </div>
        <div class="row">
          <button type="submit" class="action-btn">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HomeApi from "../comps/home-api.js";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const full_name = ref("");
    const email = ref("");
    const message = ref("");
    const mobile = ref("");

    const contactFormSubmit = async () => {
      const userInfo = {
        name: full_name.value,
        email: email.value,
        mobile: mobile.value,
        message: message.value,
      };
      try {
        const data = await HomeApi.contactFormSubmit(userInfo);
        console.log(data);
        const payload = {
          type: "success",
          message: "Register successfully done",
        };
        store.dispatch("addNotification", payload);
      } catch (error) {
         const payload = {
          type: "failure",
          message: "Something wrong!!!",
        };
        store.dispatch("addNotification", payload);
      }
    };

    return {
      full_name,
      email,
      mobile,
      message,
      contactFormSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
    .tel_number{
        background-color: #273a71;
        border: 0.0625rem solid #273a71;
        width: 100%;
        padding: 0.9375rem;
        border-radius: 0.3125rem;
        font-size: 1.125rem;
        color: #ffffff;
        outline: none;
        resize: vertical;
        margin-bottom: 7px
    }
</style>
