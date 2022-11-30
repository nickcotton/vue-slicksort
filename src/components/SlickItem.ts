import { h, defineComponent } from 'vue';
import { ElementMixin } from '../ElementMixin';

export const SlickItem = defineComponent({
  name: 'SlickItem',
  compatConfig: {
    MODE: 3
  },
  mixins: [ElementMixin],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render() {
    return h(this.tag, this.$slots.default?.());
  },
});
