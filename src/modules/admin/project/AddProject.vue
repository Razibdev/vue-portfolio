<template>
  <div class="product_page">
    <div class="page_setup">
      <form
        class="form_data short"
        @submit.prevent="projectSubmitSection"
        enctype="multipart-formdata"
      >
        <h4 class="heading">Add Project</h4>

        <div class="mb_3 image_check">
          <base-input
            label="Project Name"
            v-model="project_name"
          ></base-input>
        </div>

        <div class="mb_3 image_check">
          <base-textarea
            v-model="project_description"
            label="Description"
            rowNum="6"
            placeholder="description"
          ></base-textarea>
        </div>

        <div class="mb_3 image_check">
          <label style="margin-bottom: 5px; display:block; color: #555;font-size: 16px;">Project Type</label>
          <select class="select_app_type" v-model="project_type">
            <option value="" selected disabled>Choose Aplication Type</option>
            <option value="web">Web</option>
            <option value="app">App</option>
            <option value="graphics">Graphics</option>
          </select>
        </div>

        <div class="mb_3 image_check">
          <base-input
            label="Project Price"
            v-model="project_price"
          ></base-input>
        </div>
        <div class="mb_3 image_check">
          <base-input
            label="Project Offer Price"
            v-model="project_offer_price"
          ></base-input>
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
          <label for="gallary_image" class="label_image">Gallery Image</label>
          <input
            type="file"
            class="form-control"
            @change="galleryImageChange"
            id="gallary_image"
            multiple
          />
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
import projectApi from "./api/project_api.js";
export default {
  setup() {
    const project_name = ref("");
    const project_description = ref("");
    const project_type = ref("");
    const project_offer_price = ref("");
    const project_price = ref("");
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

    //gallary image upload
    const image_gallaries = ref([]);
    const image_gallary_url = ref([]);
    const imageLength = ref(0);

    const galleryImageChange = (event) => {
      imageLength.value = event.target.files.length;

      var fileName = [];
      var ctx = [];
      var canvas = [];
      var img = [];
      var f = [];

      if (imageLength.value <= 8) {
        for (let i = 0; i < imageLength.value; i++) {
          image_gallary_url.value.push(
            URL.createObjectURL(event.target.files[i])
          );
          console.log(image_gallary_url.value);

          f[i] = event.target.files[i];

          // var fileName = f.name.split('.')[0];

          img[i] = new Image();
          img[i].src = URL.createObjectURL(f[i]);
          img[i].onload = function () {
            canvas[i] = document.createElement("canvas");
            canvas[i].width = 620;
            canvas[i].height = 464;

            ctx[i] = canvas[i].getContext("2d");
            ctx[i].drawImage(img[i], 0, 0, 620, 464);
            canvas[i].toBlob(
              function (blob) {
                fileName[i] = Math.random()
                  .toString(36)
                  .replace(/[^a-z 0-9]+/g, "")
                  .substr(2);

                image_gallaries.value.push(
                  new File([blob], fileName[i] + ".webp")
                );

                // image_gallaries.value = new File([blob], fileName + ".webp");
                // console.log(image_gallaries.value);
              },
              "image/webp",
              1
            );
          };
        }
      } else {
        alert("Please select Extra Image Less then equal 4");
      }
    };

    const gallaryImgRemove = () => {
      image_gallary_url.value = "";
      image_gallaries.value = "";
      imageLength.value = 0;
    };

    const projectSubmitSection = async () => {
      const form = new FormData();
      form.append("project_name", project_name.value);
      form.append("project_description", project_description.value);
      form.append("project_type", project_type.value);
      form.append("project_price", project_price.value);
      form.append("project_offer_price", project_offer_price.value);
      form.append("feature_image", feature_image_get.value);
      for (var i = 0; i <= image_gallaries.value.length - 1; i++) {
        form.append("gallary_image", image_gallaries.value[i]);
      }
      form.append("gallary_image_count", imageLength.value);
      const data = await projectApi.addProjectFormSubmit(form);
      console.log(data);
    };

    return {
      project_name,
      project_description,
      project_type,
      projectSubmitSection,
      project_offer_price,
      project_price,
      //feature image
      feature_image_get,
      feature_image_url,
      featureImage,
      featureImgRemove,

      // gallary image
      gallaryImgRemove,
      image_gallary_url,
      galleryImageChange,
      image_gallaries,
      imageLength
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
