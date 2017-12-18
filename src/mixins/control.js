export default {
  props: {
    hasAddons: Boolean,
    label: String,
    value: [String, Number],
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
