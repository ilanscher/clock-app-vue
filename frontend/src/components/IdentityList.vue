<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="styled-table">
      <thead>
        <tr>
          <th>Identity</th>
          <th>Time start</th>
          <th>Time end</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.identity_id">
          <td>{{ item.identity_card }}</td>
          <td>{{ new Date(item.identity_time_start).toLocaleString() }}</td>
          <td>{{ new Date(item.identity_time_end).toLocaleString() }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{
                name: 'Edit',
                params: { id: item.identity_id },
              }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteTime(item.identity_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";

export default {
  name: "IdentityList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getTimes();
  },

  methods: {
    // Get All Time
    async getTimes() {
      try {
        const response = await axios.get("http://localhost:5000/times");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Time
    async deleteTime(id) {
      try {
        await axios.delete(`http://localhost:5000/times/${id}`);
        this.getTimes();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
