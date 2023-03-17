<template>
  <div class="product_page">
    <div class="page_setup">
      <form
        class="form_data short"
        @submit.prevent="TeamSubmitSection"
        enctype="multipart-formdata"
      >
        <h4 class="heading">Add Team Member</h4>

        <div class="mb_3 image_check">
          <base-input
            label="Full Name"
            v-model="full_name"
            placeholder="Enter Full Name"
          ></base-input>
        </div>

        <div class="mb_3 image_check">
          <base-input
            label="Designation"
            v-model="designation"
            placeholder="Enter designation"
          ></base-input>
        </div>
       

        <div class="mb_3 image_check">
          <base-textarea
            v-model="short_bio"
            label="Short Bio"
            rowNum="6"
            placeholder="Enter Short bio"
          ></base-textarea>
        </div>

        
        <div class="mb_3 image_check">
          <label for="feature_image" class="label_image">Feature Image</label>
          <input
            type="file"
            class="form-control"
            @change="featureImage"
            id="feature_image"
          />
        </div>

          <div class="mb_3 image_check">
          <base-input
            label="FaceBook Link"
            v-model="fb_link"
            placeholder="https://facebook.com/abacd"
          ></base-input>
        </div>

        <div class="mb_3 image_check">
          <base-input
            label="Twitter Link"
            v-model="tw_link"
            placeholder="https://twitter.com/abacd"
          ></base-input>
        </div>

        <div class="mb_3 image_check">
          <base-input
            label="Linkin Link"
            v-model="ln_link"
            placeholder="https://linkin.com/abacd"
          ></base-input>
        </div>
        <div class="mb_3 image_check">
          <base-input
            label="github Link"
            v-model="gh_link"
            placeholder="https://github.com/abacd"
          ></base-input>
        </div>


        <div class="mb_3">
          <base-button type="submit">Add</base-button>
        </div>
      </form>
    </div>
  </div>

  <!-- End #main -->
</template>

<script>
import { ref } from "vue";
import projectApi from "./api/team-api.js";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const full_name = ref("");
    const designation = ref("");
    const short_bio = ref("");
    const fb_link = ref('');
    const tw_link = ref('');
    const ln_link = ref('');
    const gh_link = ref('');
    //feature image
    const feature_image_url = ref("");
    const feature_image_get = ref("");

    const featureImage = (event) => {
      feature_image_url.value = URL.createObjectURL(event.target.files[0]);

      var f = event.target.files[0];

      var fileName = f.name.split(".")[0];
      var img = new Image();
      img.src = URL.createObjectURL(f);

      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = 620;
        canvas.height = 464;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 620, 464);
        canvas.toBlob(
          function (blob) {
            var f2 = new File([blob], fileName + ".webp");
            feature_image_get.value = f2;
          },
          "image/webp",
          1
        );
      };
    };
    const featureImgRemove = () => {
      feature_image_url.value = "";
    };


    const TeamSubmitSection = async () => {
      const form = new FormData();
      form.append("full_name", full_name.value);
      form.append("short_bio", short_bio.value);
      form.append("designation", designation.value);
      form.append("fb_link", fb_link.value);
      form.append("tw_link", tw_link.value);
      form.append("ln_link", ln_link.value);
      form.append("gh_link", gh_link.value);
      form.append("feature_image", feature_image_get.value);
      const data = await projectApi.addTeamMemberFormSubmit(form);
        const payload = {
            type: data.data.data.type,
            message: data.data.data.message
        }
        store.dispatch('addNotification', payload);
        router.push('/admin/view_team_member');
    
    };

    return {
      full_name,
      designation,
      short_bio,
      gh_link,
      fb_link,
      tw_link,
      ln_link,
      TeamSubmitSection,
      //feature image
      feature_image_get,
      feature_image_url,
      featureImage,
      featureImgRemove,

    };
  },
};
</script>

<style lang="scss" scoped>
.image_check {
  text-align: left;
  .label_image {
    display: block;
    padding: 10px 0px;
  }
}

.select_app_type{
  width: 100%;
  height: 40px;
  outline: none;
}
.d_none {
  display: none;
}

.thumbnail {
  display: flex;
  align-items: start;
  gap: 16px;
  .img {
    position: relative;
    img {
      width: 60px;
      height: 60px;
      box-shadow: 0 10px 19px rgb(0 0 0 / 15%);
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .remove_btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 50%;
      padding: 6px;
      font-size: 12px;
      line-height: 10px;
      color: #f01a1a;
      cursor: pointer;
      &:hover {
        background-color: #222;
        color: #fff;
      }
    }
  }
  button {
    border: 1px solid #135e96;
    color: #135e96;
    padding: 0.25rem 0.5rem;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
  }
}

.form_data {
  h4.heading {
    margin-bottom: 20px;
    color: #666;
  }
}
form.form_data.short {
  max-width: 600px;
  margin: auto;
  box-shadow: 0 5px 16px rgb(0 0 0 / 15%);
  padding: 20px;
  margin-top: 20px;
}

.mb_1 {
  margin-bottom: 4px;
}
.mb_2 {
  margin-bottom: 8px;
}
.mb_3 {
  margin-bottom: 12px;
}
.mb_4 {
  margin-bottom: 16px;
}
.mb_5 {
  margin-bottom: 20px;
}
.mb_6 {
  margin-bottom: 24px;
}
.mb_7 {
  margin-bottom: 28px;
}
.mb_8 {
  margin-bottom: 32px;
}
.mt_1 {
  margin-top: 4px;
}
.mt_2 {
  margin-top: 8px;
}
.mt_3 {
  margin-top: 12px;
}
.mt_4 {
  margin-top: 16px;
}
.mt_5 {
  margin-top: 20px;
}
.mt_6 {
  margin-top: 24px;
}
.mt_7 {
  margin-top: 28px;
}
.mt_8 {
  margin-top: 32px;
}

$phone-width-small: 360px;
$phone-width: 575px;
$tablet-width: 767px;
$desktop-width: 1023px;

@media (max-width: #{$desktop-width}) {
}

@media (max-width: #{$tablet-width}) {
}

@media (max-width: #{$phone-width}) {
}

@media (max-width: #{$phone-width-small}) {
}
</style>
