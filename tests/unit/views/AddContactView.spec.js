import AddContactView from '~/views/AddContactView.vue';
import { render } from '@testing-library/vue'
import { def } from '@vue/shared';


describe('Views > AddContactVie', () => {
  def('wrapper', () => render(AddContactView, {},
  ));
});

test('renders the page correctly', () => {

})