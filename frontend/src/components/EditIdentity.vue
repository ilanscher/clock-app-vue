<template>
  <div class="link-index">
    <router-link :to="{ name: 'Index' }" class="button is-success mt-5"
      >Click To View All Times</router-link
    >
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <input
                class="login__input"
                type="datetime-local"
                placeholder="Start Time"
                v-model="identityTimeStart"
              />
            </div>
            <div class="login__field">
              <input
                class="login__input"
                type="datetime-local"
                placeholder="End Time"
                v-model="identityTimeEnd"
              />
            </div>
            <div class="control">
              <button
                class="button is-success button login__submit"
                @click="updateTime"
              >
                <span class="button__text">Save</span>
              </button>
            </div>
          </form>
        </div>
        <div class="screen__background">
          <span
            class="screen__background__shape screen__background__shape4"
          ></span>
          <span
            class="screen__background__shape screen__background__shape3"
          ></span>
          <span
            class="screen__background__shape screen__background__shape2"
          ></span>
          <span
            class="screen__background__shape screen__background__shape1"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";

export default {
  name: "EditIdentity",
  data() {
    return {
      identityTimeStart: "",
      identityTimeEnd: "",
    };
  },
  created: function () {
    this.getTimeByIdentity();
  },
  methods: {
    // Get Time By Id
    async getTimeByIdentity() {
      try {
        const response = await axios.get(
          `http://localhost:5000/times/${this.$route.params.identity_id}`
        );
        this.identityTimeStart = response.data.identity_time_start;
        this.identityTimeEnd = response.data.identity_time_end;
      } catch (err) {
        console.log(err);
      }
    },

    // Update Time
    async updateTime() {
      try {
        await axios.put(
          `http://localhost:5000/times/${this.$route.params.id}`,
          {
            identity_time_start: this.identityTimeStart,
            identity_time_end: this.identityTimeEnd,
          }
        );
        console.log("great");
        this.identityTimeStart = "";
        this.identityTimeEnd = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
