<template>
  <el-input
    v-model="inputValue"
    placeholder="Type to search..."
    clearable
    prefix-icon="el-icon-search"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>
