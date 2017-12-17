export default {
  props: {
    value: [String, Number],
    hasAddons: Boolean,
    label: String,
    size: {
      type: String,
      validator(size) {
        return ['small', 'medium', 'large'].includes(size);
      },
      default: 'large',
    },
    required: Boolean,
  },
};
