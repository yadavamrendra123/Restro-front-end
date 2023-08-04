<template>
  <transition name="modal">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-container">
        <div class="modal-content">
          hey modal
          <slot></slot>
        </div>
        <button class="modal-close" @click="closeModal">Close</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

