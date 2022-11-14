import { defineAppSetup } from '@slidev/types';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
});

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(vuetify);
});
